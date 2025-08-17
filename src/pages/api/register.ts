export const prerender = false;

import type { APIRoute } from 'astro';
import { registerUser } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, xAccount } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Name and email are required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Register user and get discount code
    const discountCode = await registerUser(email, name, xAccount);

    if (discountCode) {
      return new Response(JSON.stringify({
        success: true,
        discountCode
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: 'Registration failed. Email may already be registered.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};