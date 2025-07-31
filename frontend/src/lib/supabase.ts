import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project URL and anon key
const supabaseUrl = 'https://auoohjiiorpwfjddzalb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b29oamlpb3Jwd2ZqZGR6YWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTcyMjksImV4cCI6MjA2OTQzMzIyOX0._Vu3UTtjRtuKf340x3dzKl90fpzaQiSCsNMBkDM5VzE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
