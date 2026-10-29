/** @type {import('tailwindcss').Config} */
// Tailwind only provides the CSS reset (see src/styles/global.css).
// Design tokens (colours, type, spacing, radii) live in src/styles/site.css.
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
