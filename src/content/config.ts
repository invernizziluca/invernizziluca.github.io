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

const workText = z.object({
  title: z.string(), // name shown on cards and as page title
  role: z.string(), // my role / position
  category: z.string(), // short field label, e.g. "Presse & PR"
  summary: z.string(), // 1–2 sentences: card text + SEO description
  context: z.string(), // Kontext: where I was and why it mattered
  contribution: z.string(), // Meine Rolle: what I did concretely
  tasks: z.array(z.string()).default([]),
  outputs: z.array(z.string()).default([]),
  highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  learnings: z.array(z.string()).default([]),
  relevance: z.string(), // why it matters for the next step
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

const arbeiten = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    featured: z.boolean().default(true),
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
  title: z.string(), // degree
  summary: z.string(),
  points: z.array(z.string()).default([]),
  relevance: z.string().optional(),
});

const ausbildung = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    institution: text,
    location: text,
    start: month,
    end: month.optional(),
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

const chapter = z.object({
  id: z.string(),
  years: text,
  name: text,
  title: text,
  text: text,
  image: image,
  link: z.object({ label: text, href: z.string() }).optional(),
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
    contactPortrait: image,
    ogImage: z.string(),
    seo: z.object({ title: text, description: text }),
    hero: z.object({
      intro: text,
      title: text,
      lead: text,
      primary: text,
      secondary: text,
    }),
    status: z.array(
      z.object({ label: text, title: text, text: text, href: z.string(), linkLabel: text }),
    ),
    werdegang: z.object({ name: text, title: text, intro: text, chapters: z.array(chapter) }),
    praxis: z.object({ name: text, title: text, intro: text }),
    nachweise: z.object({
      name: text,
      title: text,
      intro: text,
      linkedinTitle: text,
      linkedinIntro: text,
      archiveTitle: text,
      archiveIntro: text,
    }),
    next: z.object({
      name: text,
      title: text,
      text: text,
      areas: z.array(z.object({ title: text, text: text })),
      skillsTitle: text,
    }),
    skills: z.object({
      languages: z.array(z.object({ name: text, level: z.number().min(0).max(5), note: text.optional() })),
      tools: z.array(z.object({ name: text, level: z.number().min(0).max(5) })),
      more: z.array(z.string()).default([]),
      note: text.optional(),
    }),
    kontakt: z.object({ name: text, title: text, text: text }),
  }),
});

export const collections = { arbeiten, ausbildung, nachweise, linkedin, referenzen, home };
