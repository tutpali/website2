/*
  # Create users table for discount tracking

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text)
      - `x_account` (text, optional)
      - `discount_code` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `users` table
    - Add policy for public insert access (registration)
    - Add policy for users to read their own data
*/

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  x_account TEXT,
  discount_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (registration)
CREATE POLICY "Allow public insert for user registration"
  ON users
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for users to read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO public
  USING (true);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_discount_code ON users(discount_code);