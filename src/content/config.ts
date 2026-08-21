import { defineCollection, z } from 'astro:content';

const localizedWork = z.object({
  title: z.string(),
  role: z.string(),
  company: z.string().optional(),
  location: z.string(),
  period: z.string(),
  category: z.string(),
  cardCategory: z.string().optional(),
  short: z.string(),
  cardShort: z.string().optional(),
  intro: z.string(),
  situation: z.string(),
  tasks: z.array(z.string()),
  results: z.array(z.string()),
  learnings: z.array(z.string()),
  cardRole: z.string().optional(),
  contextTitle: z.string().optional(),
  context: z.array(z.string()).optional(),
  focusTitle: z.string().optional(),
  focus: z.array(z.string()).optional(),
});

const localizedCard = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  short: z.string(),
});

const linkItem = z.object({ label: z.string(), url: z.string() });
const evidenceItem = z.object({ label: z.string(), pdf: z.string().optional(), url: z.string().optional(), note: z.string().optional() });
const rosterItem = z.object({ name: z.string(), note: z.string().optional(), url: z.string().optional() });
const spotifyEmbed = z.object({
  title: z.string(),
  src: z.string(),
  note: z.string().optional(),
  type: z.enum(['playlist', 'artist']).optional(),
});

const arbeiten = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    featured: z.boolean().default(true),
    cover: z.string(),
    coverPosition: z.string().optional(),
    logo: z.string().optional(),
    companyUrl: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    links: z.array(linkItem).default([]),
    evidence: z.array(evidenceItem).default([]),
    spotifyEmbed: spotifyEmbed.optional(),
    spotifyEmbeds: z.array(spotifyEmbed).optional().default([]),
    roster: z.array(rosterItem).default([]),
    translations: z.object({
      de: localizedWork,
      en: localizedWork,
      it: localizedWork,
    }),
  }),
});

const studienarbeiten = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    year: z.string(),
    category: z.string(),
    pdf: z.string().optional(),
    cover: z.string().optional(),
    translations: z.object({
      de: localizedCard,
      en: localizedCard,
      it: localizedCard,
    }),
  }),
});

const medien = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    date: z.string(),
    source: z.string(),
    typeLabel: z.string(),
    link: z.string().optional(),
    image: z.string().optional(),
    translations: z.object({
      de: localizedCard,
      en: localizedCard,
      it: localizedCard,
    }),
  }),
});

export const collections = { arbeiten, studienarbeiten, medien };
