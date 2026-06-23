// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://glitch-coin.vercel.app',
  base: '/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },

  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),

  server: { host: true },
});
