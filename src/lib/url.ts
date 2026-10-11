import type { Lang } from '../i18n';

// Base path of the site ("/" for invernizziluca.github.io, "/repo-name/" for project pages).
const rawBase = import.meta.env.BASE_URL || '/';
export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

const isExternal = (value: string) => /^(https?:|mailto:|tel:|data:)/.test(value);

/** Public files (images, PDFs): "/images/x.webp" -> "<base>images/x.webp". */
export function asset(path: string): string {
  if (!path) return path;
  if (isExternal(path)) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
}

/** Home page of a language. German lives at the site root. */
export function homeUrl(lang: Lang): string {
  return lang === 'de' ? base : `${base}${lang}/`;
}

/** Page inside a language, e.g. pageUrl('en', 'arbeiten/initiative-musik') -> "/en/arbeiten/initiative-musik/". */
export function pageUrl(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `${base}${lang}/${clean}/` : `${base}${lang}/`;
}

/**
 * Resolves links written in the content files:
 *  - "https://…", "mailto:…" stay as they are
 *  - "#arbeiten" points to a section of the home page
 *  - "/pdf/…", "/images/…" are public files
 *  - everything else is a page inside the current language ("/arbeiten/eintracht-pankow/")
 */
export function localHref(lang: Lang, href: string): string {
  if (!href) return homeUrl(lang);
  if (isExternal(href)) return href;
  if (href.startsWith('#')) return `${homeUrl(lang)}${href}`;
  if (/^\/?(pdf|images|generated|fonts)\//.test(href)) return asset(href);
  const [path, hash] = href.split('#');
  return `${pageUrl(lang, path)}${hash ? `#${hash}` : ''}`;
}

export const workUrl = (lang: Lang, slug: string) => pageUrl(lang, `arbeiten/${slug}`);
export const educationUrl = (lang: Lang, slug: string) => pageUrl(lang, `ausbildung/${slug}`);

/** Absolute URL for SEO tags (needs `site` in astro.config.mjs). */
export function absoluteUrl(path: string, site?: URL): string {
  if (isExternal(path)) return path;
  const origin = site ? site.origin : 'https://invernizziluca.github.io';
  const withBase = path.startsWith(base) ? path : asset(path);
  return new URL(withBase, origin).toString();
}
