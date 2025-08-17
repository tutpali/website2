export const prerender = false;

import type { APIRoute } from 'astro';
import { getCitiesInState } from '../../lib/supabase';

export const GET: APIRoute = async ({ url }) => {
  const state = url.searchParams.get('state');
  
  if (!state) {
    return new Response(JSON.stringify({ error: 'State parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const cities = await getCitiesInState(state);
    
    return new Response(JSON.stringify(cities), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching cities:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};