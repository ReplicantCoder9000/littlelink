import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-charcoal': '#1A1A1A',
        'brand-dark': '#111111',
        'brand-light': '#F5F5F5',
        'brand-accent': '#E50914', // A sharp red for accents
      },
    },
  },
  plugins: [],
};

export default config;
