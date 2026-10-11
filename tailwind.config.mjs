/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: '#1d1915',
        paper: '#f1e9da',
        'paper-deep': '#e9deca',
        card: '#fffbf3',
        muted: '#5f564b',
        caramel: '#875826',
        gold: '#c9a25a',
      },
      borderRadius: {
        card: '24px',
      },
    },
  },
  plugins: [],
};
