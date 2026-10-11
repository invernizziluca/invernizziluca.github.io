import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// SITE and BASE_PATH are set automatically by .github/workflows/deploy.yml.
const site = process.env.SITE || 'https://invernizziluca.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    // site.css holds the design system, so Tailwind's base styles are imported there explicitly.
    tailwind({ applyBaseStyles: false }),
  ],
});
