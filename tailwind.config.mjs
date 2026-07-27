/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        muted: '#6E6E73',
        paper: '#F5F5F7',
        caramel: '#B58B5B',
        caramelDark: '#8A663E',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
};
