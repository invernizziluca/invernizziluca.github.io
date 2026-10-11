// Generates /sitemap.xml at build time (no extra integration needed).
import type { APIRoute } from 'astro';
import { languages } from '../i18n';
import { getEducation, getWorks } from '../lib/content';
import { absoluteUrl, educationUrl, homeUrl, workUrl } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const works = await getWorks();
  const education = await getEducation();
  const paths = [
    ...languages.map((lang) => homeUrl(lang)),
    ...languages.flatMap((lang) => works.map((entry) => workUrl(lang, entry.slug))),
    ...languages.flatMap((lang) => education.map((entry) => educationUrl(lang, entry.slug))),
  ];
  const urls = paths.map((path) => `  <url><loc>${absoluteUrl(path, site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
