import { defineCollection, z } from 'astro:content';

const localizedWork = z.object({
  title: z.string(),
  role: z.string(),
  company: z.string().optional(),
  location: z.string(),
  period: z.string(),
  category: z.string(),
  short: z.string(),
  intro: z.string(),
  situation: z.string(),
  tasks: z.array(z.string()),
  results: z.array(z.string()),
  learnings: z.array(z.string()),
});

const localizedCard = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  short: z.string(),
});

const arbeiten = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    externalLink: z.string().optional(),
    translations: z.object({
      de: localizedWork,
      it: localizedWork,
      en: localizedWork,
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
    translations: z.object({
      de: localizedCard,
      it: localizedCard,
      en: localizedCard,
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
      it: localizedCard,
      en: localizedCard,
    }),
  }),
});

export const collections = { arbeiten, studienarbeiten, medien };
