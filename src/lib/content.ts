import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { ui, type Lang } from '../i18n';

export type Text = string | { de: string; en?: string; it?: string };
export type Img = { src: string; alt?: Text; caption?: Text; position?: string };

/** Picks the language version of a text field (falls back to German). */
export function tr(value: Text | undefined | null, lang: Lang): string {
  if (value === undefined || value === null) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value.de ?? '';
}

/** Merges the German block with the English/Italian block (missing fields fall back to German). */
export function localized<T extends Record<string, unknown>>(
  data: { de: T; en?: Partial<T>; it?: Partial<T> },
  lang: Lang,
): T {
  const override = lang === 'de' ? undefined : (data[lang] as Partial<T> | undefined);
  if (!override) return data.de;
  const merged: Record<string, unknown> = { ...data.de };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value) && value.length === 0) continue;
    merged[key] = value;
  }
  return merged as T;
}

const locales: Record<Lang, string> = { de: 'de-DE', en: 'en-GB', it: 'it-IT' };

const pad = (value: string) => value.padStart(2, '0');

/** "2025-08" -> "08/2025" */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-');
  return month ? `${pad(month)}/${year}` : year;
}

/** Period like "08/2025 – 01/2026" or "seit 09/2026". */
export function formatPeriod(start: string, end: string | undefined, lang: Lang): string {
  if (!end) return `${ui[lang].status.since} ${formatMonth(start)}`;
  return `${formatMonth(start)} – ${formatMonth(end)}`;
}

/** "2026-06-30" -> "30. Juni 2026", "2026-06" -> "Juni 2026", "2026" -> "2026". */
export function formatDate(value: string, lang: Lang): string {
  const [year, month, day] = value.split('-').map((part) => Number(part));
  if (!month) return String(year);
  const date = new Date(Date.UTC(year, month - 1, day || 1));
  const options: Intl.DateTimeFormatOptions = day
    ? { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
    : { month: 'long', year: 'numeric', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(locales[lang], options).format(date);
}

/** Machine-readable date for <time datetime="…">. */
export const isoDate = (value: string) => value;

export const isCurrent = (entry: { data: { end?: string } }) => !entry.data.end;

// ---------- collection getters (sorted by `order`) ----------

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

export async function getWorks() {
  return (await getCollection('arbeiten')).sort(byOrder);
}

export async function getEducation() {
  return (await getCollection('ausbildung')).sort(byOrder);
}

export async function getProofs() {
  return (await getCollection('nachweise')).sort(byOrder);
}

export async function getPosts() {
  return (await getCollection('linkedin')).sort(byOrder);
}

export async function getReferences() {
  return (await getCollection('referenzen')).sort(byOrder);
}

export async function getHome() {
  const entry = await getEntry('home', 'home');
  if (!entry) throw new Error('src/content/home/home.yaml is missing.');
  return entry.data;
}

export type Work = CollectionEntry<'arbeiten'>;
export type Education = CollectionEntry<'ausbildung'>;
export type Proof = CollectionEntry<'nachweise'>;
export type Post = CollectionEntry<'linkedin'>;
export type Reference = CollectionEntry<'referenzen'>;
export type HomeData = Awaited<ReturnType<typeof getHome>>;

/** Which case study mentions a given LinkedIn post / proof document (for "Gehört zu …"). */
export function relatedWorks(works: Work[]) {
  const posts = new Map<string, Work>();
  const proofs = new Map<string, Work>();
  for (const work of works) {
    for (const ref of work.data.linkedin) if (!posts.has(ref.id)) posts.set(ref.id, work);
    for (const ref of work.data.nachweise) if (!proofs.has(ref.id)) proofs.set(ref.id, work);
  }
  return { posts, proofs };
}

/** Resolves a list of references ({ collection, id }) to entries of a loaded list, keeping the order. */
export function pick<T extends { id: string }>(refs: { id: string }[], entries: T[]): T[] {
  return refs
    .map((ref) => entries.find((entry) => entry.id === ref.id))
    .filter((entry): entry is T => Boolean(entry));
}

// ---------- Spotify ----------

const spotifyPattern =
  /open\.spotify\.com\/(?:intl-[a-z]{2}(?:-[a-z]{2})?\/)?(?:embed\/)?(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]+)/;

/** Turns any Spotify share link into embed + open URLs. */
export function spotifyLink(url: string) {
  const match = url.match(spotifyPattern);
  if (!match) return undefined;
  const [, type, id] = match;
  return {
    type: type as 'track' | 'album' | 'playlist' | 'artist' | 'episode' | 'show',
    id,
    open: `https://open.spotify.com/${type}/${id}`,
    embed: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`,
  };
}
