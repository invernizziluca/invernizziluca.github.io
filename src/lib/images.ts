// Reads the image manifest written by scripts/prepare-images.mjs (runs before every build).
// If the manifest is missing, images are simply rendered without responsive variants.

export type ImageVariant = { w: number; src: string };
export type ImageInfo = { width: number; height: number; variants: ImageVariant[] };
type Manifest = { images?: Record<string, ImageInfo>; og?: Record<string, string> };

const found = import.meta.glob('../data/generated/images.json', { eager: true, import: 'default' }) as Record<string, Manifest>;
const manifest: Manifest = Object.values(found)[0] ?? {};

const normalize = (src: string) => `/${src.replace(/^\/+/, '').split('?')[0]}`;

export function imageInfo(src: string | undefined): ImageInfo | undefined {
  if (!src) return undefined;
  return manifest.images?.[normalize(src)];
}

/** Social preview image generated for a page ("arbeiten/eintracht-pankow"), if available. */
export function generatedOgImage(key: string): string | undefined {
  return manifest.og?.[key];
}
