import type { APIRoute } from 'astro';
import { getClinics, getStatesWithClinics } from '../lib/supabase';
import { allProducts } from '../lib/products';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://hyperhidrosis-directory.netlify.app';
  
  // Get dynamic data
  const clinics = await getClinics();
  const states = await getStatesWithClinics();
  
  // Static pages
  const staticPages = [
    '',
    '/directory',
    '/products',
    '/about',
    '/contact',
    '/search'
  ];

  // Build sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add state pages
  states.forEach(({ state }) => {
    const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
    sitemap += `
  <url>
    <loc>${baseUrl}/directory/${stateSlug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add clinic pages
  clinics.forEach(clinic => {
    sitemap += `
  <url>
    <loc>${baseUrl}/clinic/${clinic.Id}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  // Add product pages
  allProducts.forEach(product => {
    sitemap += `
  <url>
    <loc>${baseUrl}/products/${product.id}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};