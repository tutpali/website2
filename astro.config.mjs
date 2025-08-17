// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Required for Netlify Serverless Functions
  site: 'https://leafy-meringue-5b9072.netlify.app', // Your Netlify site URL
  adapter: netlify({
    edgeMiddleware: false, // Use Serverless Functions instead of Edge Functions
  }),
  integrations: [tailwind()],
});