import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://occdkpgkoyulzbdxqaxx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jY2RrcGdrb3l1bHpiZHhxYXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MzU3NTMsImV4cCI6MjA2OTQxMTc1M30.WC6EXM8GKi25XoFxKhxlQmMuLAUsvh8842EtAZDT34g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

