// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // Use hybrid mode for selective SSR
  site: 'https://hyperhidrosis-directory.netlify.app', // Add site URL for production
  adapter: netlify({
    edgeMiddleware: false, // Disable edge functions to avoid Deno requirement
  }),
  integrations: [tailwind()],
});