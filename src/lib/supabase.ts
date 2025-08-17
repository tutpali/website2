import { createClient } from '@supabase/supabase-js';

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  const url = import.meta.env.SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
  return !!(url && key);
}

// Create Supabase client
const supabaseUrl = import.meta.env.SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate URLs before creating client
function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export const supabase = supabaseUrl && supabaseKey && isValidUrl(supabaseUrl)
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export interface Clinic {
  Id: number;
  State: string;
  City: string;
  Name: string;
  Address: string;
  Phone: string;
  Website: string;
  Rating: string;
  Review1: string;
  Review2: string;
  Review3: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
  Description: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  x_account?: string;
  discount_code: string;
  created_at: string;
}

export async function getClinics(): Promise<Clinic[]> {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty clinics array');
    return [];
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('*', { count: 'exact' })
      .order('State', { ascending: true })
      .order('City', { ascending: true });

    if (error) {
      console.error('Error fetching clinics:', error);
      return [];
    }

    console.log('Total clinics fetched:', data?.length || 0);

    return data || [];
  } catch (error) {
    console.error('Network error fetching clinics:', error);
    return [];
  }
}

export async function getClinicsByState(state: string): Promise<Clinic[]> {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty clinics array');
    return [];
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('*')
      .eq('State', state)
      .order('City', { ascending: true });

    if (error) {
      console.error('Error fetching clinics by state:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Network error fetching clinics by state:', error);
    return [];
  }
}

export async function getClinicsByCity(state: string, city: string): Promise<Clinic[]> {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty clinics array');
    return [];
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('*')
      .eq('State', state)
      .eq('City', city);

    if (error) {
      console.error('Error fetching clinics by city:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Network error fetching clinics by city:', error);
    return [];
  }
}

export async function getClinicById(id: number): Promise<Clinic | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('*')
      .eq('Id', id)
      .single();

    if (error) {
      console.error('Error fetching clinic by id:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Network error fetching clinic by id:', error);
    return null;
  }
}

export async function searchClinics(query: string): Promise<Clinic[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('*')
      .or(`Name.ilike.%${query}%,City.ilike.%${query}%,State.ilike.%${query}%,Address.ilike.%${query}%`)
      .order('State', { ascending: true });

    if (error) {
      console.error('Error searching clinics:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Network error searching clinics:', error);
    return [];
  }
}

export async function registerUser(email: string, name: string, xAccount?: string): Promise<string | null> {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, cannot register user');
    return null;
  }

  const discountCode = `SAVE15-${Date.now().toString(36).toUpperCase()}`;

  const { data, error } = await supabase!
    .from('users')
    .insert([
      {
        email,
        name,
        x_account: xAccount,
        discount_code: discountCode,
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error registering user:', error);
    return null;
  }

  return discountCode;
}

export async function getStatesWithClinics(): Promise<{state: string, count: number}[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('State');

    if (error) {
      console.error('Error fetching states:', error);
      return [];
    }

    if (!data) {
      return [];
    }

    // Count clinics per state
    const stateCounts: Record<string, number> = {};
    
    data.forEach(clinic => {
      const state = clinic.State;
      if (state) {
        stateCounts[state] = (stateCounts[state] || 0) + 1;
      }
    });

    return Object.entries(stateCounts)
      .map(([state, count]) => ({
      state,
      count
    }))
      .sort((a, b) => a.state.localeCompare(b.state));
  } catch (error) {
    console.error('Network error fetching states:', error);
    return [];
  }
}

export async function getAllStates(): Promise<string[]> {
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
    'Wisconsin', 'Wyoming'
  ];
  return states;
}

export async function getCitiesInState(state: string): Promise<{city: string, count: number}[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase!
      .from('clinics')
      .select('City')
      .eq('State', state)
      .order('City', { ascending: true });

    if (error) {
      console.error('Error fetching cities:', error);
      return [];
    }

    const cityCounts = data?.reduce((acc: Record<string, number>, clinic) => {
      acc[clinic.City] = (acc[clinic.City] || 0) + 1;
      return acc;
    }, {}) || {};

    return Object.entries(cityCounts).map(([city, count]) => ({
      city,
      count: count as number
    }));
  } catch (error) {
    console.error('Network error fetching cities:', error);
    return [];
  }
}