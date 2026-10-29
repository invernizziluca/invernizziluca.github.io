import { defineCollection, reference, z } from 'astro:content';

/*
 * Content model of the portfolio.
 * Every collection = one folder in src/content/. One file = one entry.
 * The file name becomes the URL / id (never add a `slug` field to the frontmatter).
 *
 * Text fields can be written in two ways:
 *   title: "Same text for every language"
 *   title: { de: "Deutsch", en: "English", it: "Italiano" }
 * Missing English/Italian texts fall back to German.
 */

// ---------- shared building blocks ----------

const text = z.union([
  z.string(),
  z.object({ de: z.string(), en: z.string().optional(), it: z.string().optional() }),
]);

// Dates may be written as "2026", "2026-06" or "2026-06-30". YAML sometimes turns full
// dates into Date objects, so both are accepted and normalised to a string.
const date = z
  .union([z.string(), z.date()])
  .transform((value) => (typeof value === 'string' ? value.trim() : value.toISOString().slice(0, 10)))
  .refine((value) => /^\d{4}(-\d{2}){0,2}$/.test(value), {
    message: 'Use the format "YYYY", "YYYY-MM" or "YYYY-MM-DD" (e.g. "2026-06-30").',
  });

// Month used for periods: "2025-08".
const month = z
  .union([z.string(), z.date()])
  .transform((value) => (typeof value === 'string' ? value.trim() : value.toISOString().slice(0, 7)))
  .refine((value) => /^\d{4}-\d{2}$/.test(value), { message: 'Use the format "YYYY-MM" (e.g. "2025-08").' });

// An image is either a path ("/images/...") or an object with alt text, caption and crop position.
const image = z
  .union([
    z.string(),
    z.object({
      src: z.string(),
      alt: text.optional(),
      caption: text.optional(),
      position: z.string().optional(), // CSS object-position, e.g. "center 30%"
    }),
  ])
  .transform((value) => (typeof value === 'string' ? { src: value } : value));

const link = z.object({ label: text, url: z.string().url() });

// ---------- case studies (Arbeiten) ----------
// Every case study answers the same questions, in this order:
// context -> goal -> my contribution (+ tasks) -> scope (what was NOT mine) -> outputs / measurable results -> proof.

const workText = z.object({
  title: z.string(), // name shown in lists and as page title
  role: z.string(), // my role / position, exactly as in the reference letter or contract
  category: z.string(), // short field label, e.g. "Presse & PR"
  summary: z.string(), // 1–2 sentences: list text + SEO description
  context: z.string(), // Kontext: the organisation / situation
  goal: z.string().optional(), // Ziel: what the work was for
  contribution: z.string(), // Mein Beitrag: what I did myself
  tasks: z.array(z.string()).default([]),
  scope: z.string().optional(), // Abgrenzung: what the team / others did, what is not claimed
  outputs: z.array(z.string()).default([]),
  // Only numbers that are documented (screenshot, reference letter, public source) and attributable.
  highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  highlightsSource: z.string().optional(), // where the numbers come from and what they do NOT mean
  learnings: z.array(z.string()).default([]),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

const arbeiten = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    company: text,
    location: text,
    start: month,
    end: month.optional(), // leave out while the job is still running
    website: z.string().url().optional(),
    cover: image,
    ogImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    gallery: z.array(image).default([]),
    spotify: z
      .array(z.object({ url: z.string().url(), title: z.string().optional(), note: text.optional() }))
      .default([]),
    artists: z.array(z.object({ name: z.string(), spotify: z.string().url() })).default([]),
    linkedin: z.array(reference('linkedin')).default([]),
    nachweise: z.array(reference('nachweise')).default([]),
    links: z.array(link).default([]),
    de: workText,
    en: workText.partial().optional(),
    it: workText.partial().optional(),
  }),
});

// ---------- education (Ausbildung) ----------

const educationText = z.object({
  title: z.string(), // degree, exactly as on the diploma (e.g. "Passerelle", not "Matura")
  summary: z.string(),
  points: z.array(z.string()).default([]),
});

const ausbildung = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    institution: text,
    location: text,
    start: month,
    end: month.optional(), // leave out while studying
    expectedEnd: month.optional(), // planned graduation, shown as "voraussichtlich 07/2028"
    website: z.string().url().optional(),
    cover: image,
    gallery: z.array(image).default([]),
    linkedin: z.array(reference('linkedin')).default([]),
    nachweise: z.array(reference('nachweise')).default([]),
    de: educationText,
    en: educationText.partial().optional(),
    it: educationText.partial().optional(),
  }),
});

// ---------- proof documents (Nachweise): articles, certificates, research, reference letters ----------

const proofText = z.object({ title: z.string(), summary: z.string() });

const nachweise = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    type: z.enum(['zeugnis', 'artikel', 'zertifikat', 'forschung', 'empfehlung']),
    date: date,
    source: z.string(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    image: image.optional(),
    de: proofText,
    en: proofText.partial().optional(),
    it: proofText.partial().optional(),
  }),
});

// ---------- LinkedIn posts ----------

const postText = z.object({ title: z.string(), excerpt: z.string() });

const linkedin = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    date: date,
    url: z.string().url(),
    author: z.string().optional(), // only for posts written by someone else
    image: image,
    showOnHome: z.boolean().default(true),
    de: postText,
    en: postText.partial().optional(),
    it: postText.partial().optional(),
  }),
});

// ---------- references (Referenzen) ----------

const quoteText = z.object({ quote: z.string(), full: z.string().optional() });

const referenzen = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    featured: z.boolean().default(false),
    name: z.string(),
    role: text,
    source: text,
    date: date,
    image: image.optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    originalLanguage: z.enum(['de', 'en', 'it']).default('de'),
    de: quoteText,
    en: quoteText.partial().optional(),
    it: quoteText.partial().optional(),
  }),
});

// ---------- home page copy ----------

// One item of "Ausgewählte Arbeiten" on the home page.
// `mine` = what I did myself, `credit` = what the team / others did (always fill both).
const selectedItem = z.object({
  id: z.string(),
  org: text,
  year: z.string(),
  title: text,
  text: text,
  mine: text,
  credit: text.optional(),
  images: z.array(image).min(1),
  metric: z.object({ value: z.string(), label: text, source: text }).optional(),
  case: reference('arbeiten').optional(), // file name of the case study, e.g. "initiative-musik"
  links: z.array(link).default([]),
});

const home = defineCollection({
  type: 'data',
  schema: z.object({
    contact: z.object({
      email: z.string().email(),
      linkedin: z.string().url(),
      cv: z.string(),
      city: text,
    }),
    portrait: image,
    ogImage: z.string(),
    seo: z.object({ title: text, description: text }),
    hero: z.object({
      kicker: text,
      title: z.string(),
      claim: text,
      lead: text,
      primary: text,
      secondary: text,
      facts: z.array(z.object({ label: text, value: text })).max(4),
    }),
    selectedWork: z.object({
      title: text,
      intro: text,
      feature: selectedItem,
      items: z.array(selectedItem).max(5),
    }),
    stationen: z.object({ title: text, intro: text }),
    nachweise: z.object({
      title: text,
      intro: text,
      documentsTitle: text,
      postsTitle: text,
      postsIntro: text,
    }),
    ausbildung: z.object({ title: text }),
    skills: z.object({
      title: text,
      languages: z.array(z.object({ name: text, level: text })),
      groups: z.array(z.object({ title: text, items: z.array(z.string()) })),
      note: text.optional(),
    }),
    kontakt: z.object({ title: text, text: text }),
  }),
});

export const collections = { arbeiten, ausbildung, nachweise, linkedin, referenzen, home };
