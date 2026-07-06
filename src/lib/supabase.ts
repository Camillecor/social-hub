// src/lib/supabase.ts

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// A value is "real" only if it exists and isn't one of the placeholder
// strings shipped in .env.local.example.
const isReal = (value?: string) =>
  Boolean(value) && !value!.startsWith('your-') && !value!.includes('your-project')

// True only when both env vars hold real credentials.
export const isSupabaseConfigured = isReal(supabaseUrl) && isReal(supabaseAnonKey)

// `null` until Supabase is configured — the app runs fine without it.
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null
