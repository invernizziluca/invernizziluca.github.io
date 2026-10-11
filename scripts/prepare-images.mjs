#!/usr/bin/env node
/**
 * Runs automatically before `npm run dev` and `npm run build`.
 *
 *  1. Creates smaller WebP versions (480 / 960 / 1600 px) of every image in public/images,
 *     so phones never download full-size photos.
 *  2. Creates a 1200×630 social preview image (Open Graph) for every case study and
 *     education page, cropped from its cover image.
 *  3. Writes src/data/generated/images.json, which the <Img> component reads.
 *
 * Generated files go to public/generated/ and are not committed (see .gitignore).
 * The script never stops the build: if something fails, the site simply uses the original images.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const imagesDir = path.join(publicDir, 'images');
const generatedDir = path.join(publicDir, 'generated');
const manifestFile = path.join(root, 'src', 'data', 'generated', 'images.json');
const badgeFile = path.join(root, 'scripts', 'assets', 'og-badge.png');

const WIDTHS = [480, 960, 1600];
const RASTER = /\.(jpe?g|png|webp)$/i;
const OG = { width: 1200, height: 630 };

const log = (message) => console.log(`[images] ${message}`);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : [full];
    }),
  );
  return files.flat();
}

async function isFresh(source, output) {
  try {
    const [a, b] = await Promise.all([fs.stat(source), fs.stat(output)]);
    return b.mtimeMs >= a.mtimeMs && b.size > 0;
  } catch {
    return false;
  }
}

const toPublicPath = (file) => `/${path.relative(publicDir, file).split(path.sep).join('/')}`;

async function writeManifest(manifest) {
  await fs.mkdir(path.dirname(manifestFile), { recursive: true });
  await fs.writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
}

/** CSS object-position ("center 30%", "50% 20%", "left top") -> fractions 0..1 */
function parsePosition(value = 'center') {
  const words = String(value).trim().toLowerCase().split(/\s+/);
  const named = { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 };
  const toFraction = (word) => (word in named ? named[word] : word.endsWith('%') ? Number.parseFloat(word) / 100 : 0.5);
  let x = 0.5;
  let y = 0.5;
  if (words.length === 1) {
    if (words[0] === 'top' || words[0] === 'bottom') y = toFraction(words[0]);
    else x = toFraction(words[0]);
  } else {
    let [first, second] = words;
    if (first === 'top' || first === 'bottom') [first, second] = [second, first];
    x = toFraction(first);
    y = toFraction(second);
  }
  const clamp = (n) => (Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.5);
  return { x: clamp(x), y: clamp(y) };
}

/** Reads cover image + position from the frontmatter of the Markdown files of a collection. */
async function readCovers(collection) {
  const dir = path.join(root, 'src', 'content', collection);
  const files = (await fs.readdir(dir).catch(() => [])).filter((name) => name.endsWith('.md') && !name.startsWith('_'));
  let yaml;
  try {
    yaml = await import('js-yaml');
  } catch {
    yaml = undefined;
  }
  const load = yaml ? yaml.load ?? yaml.default?.load : undefined;
  const covers = [];
  for (const name of files) {
    try {
      const source = await fs.readFile(path.join(dir, name), 'utf8');
      const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!match) continue;
      let cover;
      if (load) {
        const data = load(match[1]) ?? {};
        cover = typeof data.cover === 'string' ? { src: data.cover } : data.cover;
      } else {
        const src = match[1].match(/cover:\s*(?:\n\s+src:\s*)?["']?([^"'\n]+)["']?/);
        const position = match[1].match(/cover:[\s\S]*?position:\s*["']?([^"'\n]+)["']?/);
        cover = src ? { src: src[1].trim(), position: position?.[1]?.trim() } : undefined;
      }
      if (cover?.src) covers.push({ key: `${collection}/${name.replace(/\.md$/, '').toLowerCase()}`, ...cover });
    } catch (error) {
      log(`could not read ${collection}/${name}: ${error.message}`);
    }
  }
  return covers;
}

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    log('sharp is not installed – skipping image optimisation (the site still works).');
    await writeManifest({ images: {}, og: {} });
    return;
  }

  const manifest = { images: {}, og: {} };
  const files = (await walk(imagesDir)).filter((file) => RASTER.test(file));
  let created = 0;

  for (const file of files) {
    try {
      const publicPath = toPublicPath(file);
      const meta = await sharp(file).metadata();
      const rotated = (meta.orientation ?? 1) >= 5;
      const width = rotated ? meta.height : meta.width;
      const height = rotated ? meta.width : meta.height;
      if (!width || !height) continue;
      const variants = [];
      for (const target of WIDTHS) {
        if (target >= width * 0.9) continue;
        const variantPath = `/generated/img${publicPath.replace(/^\/images/, '').replace(RASTER, '')}-${target}.webp`;
        const output = path.join(publicDir, variantPath);
        if (!(await isFresh(file, output))) {
          await fs.mkdir(path.dirname(output), { recursive: true });
          await sharp(file).rotate().resize({ width: target }).webp({ quality: 74 }).toFile(output);
          created += 1;
        }
        variants.push({ w: target, src: variantPath });
      }
      manifest.images[publicPath] = { width, height, variants };
    } catch (error) {
      log(`skipped ${toPublicPath(file)}: ${error.message}`);
    }
  }

  // Social preview images for case studies and education pages
  const badge = await fs.readFile(badgeFile).catch(() => undefined);
  const pages = [...(await readCovers('arbeiten')), ...(await readCovers('ausbildung'))];
  for (const page of pages) {
    try {
      const source = path.join(publicDir, page.src.replace(/^\/+/, ''));
      if (!RASTER.test(source)) continue;
      const ogPath = `/generated/og/${page.key.replace('/', '-')}.jpg`;
      const output = path.join(publicDir, ogPath);
      const meta = await sharp(source).metadata();
      const { x, y } = parsePosition(page.position);
      const ratio = OG.width / OG.height;
      let cropWidth = meta.width;
      let cropHeight = Math.round(meta.width / ratio);
      if (cropHeight > meta.height) {
        cropHeight = meta.height;
        cropWidth = Math.round(meta.height * ratio);
      }
      const left = Math.round((meta.width - cropWidth) * x);
      const top = Math.round((meta.height - cropHeight) * y);
      let image = sharp(source)
        .extract({ left, top, width: cropWidth, height: cropHeight })
        .resize(OG.width, OG.height);
      if (badge) image = image.composite([{ input: badge, gravity: 'southwest' }]);
      await fs.mkdir(path.dirname(output), { recursive: true });
      await image.jpeg({ quality: 82, mozjpeg: true }).toFile(output);
      manifest.og[page.key] = ogPath;
    } catch (error) {
      log(`no preview image for ${page.key}: ${error.message}`);
    }
  }

  await writeManifest(manifest);
  log(`${Object.keys(manifest.images).length} images, ${created} new variants, ${Object.keys(manifest.og).length} preview images.`);
}

main().catch(async (error) => {
  log(`unexpected problem: ${error.message} – continuing without optimised images.`);
  await writeManifest({ images: {}, og: {} }).catch(() => {});
});
