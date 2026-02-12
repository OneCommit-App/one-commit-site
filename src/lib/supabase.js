// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

// Pull from Vite env (must be prefixed with VITE_ to be exposed to the client build)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Minimal sanity checks so we don’t silently fail in prod previews
if (!supabaseUrl) {
  // eslint-disable-next-line no-console
  console.warn('[Supabase] Missing VITE_SUPABASE_URL. Set it in Vercel env & .env.local')
}
if (!supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('[Supabase] Missing VITE_SUPABASE_ANON_KEY. Set it in Vercel env & .env.local')
}

// Create client; use placeholder URL/key if missing so the app still loads (beta/contact will need real keys)
const url = supabaseUrl || 'https://placeholder.supabase.co'
const key = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDAwMDAwMDAsImV4cCI6MTk1NTU3NjAwMH0.placeholder'
export const supabase = createClient(url, key, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Optional helper wrappers for common ops (add if useful)
/*
export const insertRow = async (table, values) => {
  const { data, error } = await supabase.from(table).insert(values).select().single()
  if (error) throw error
  return data
}

export const upsertRow = async (table, values, keyCols = ['id']) => {
  const { data, error } = await supabase.from(table).upsert(values, { onConflict: keyCols.join(',') }).select().single()
  if (error) throw error
  return data
}
*/
