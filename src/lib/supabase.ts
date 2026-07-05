// src/lib/supabase.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const supabaseServer = () => {
  if (!supabaseServiceKey) {
    throw new Error('Supabase Service Role Key is required for server operations')
  }
  return createClient(supabaseUrl, supabaseServiceKey)
}