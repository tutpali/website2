// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'http://localhost:4321', // Add site URL for development
  adapter: netlify({
    edgeMiddleware: false
  }),
  integrations: [tailwind()],
});