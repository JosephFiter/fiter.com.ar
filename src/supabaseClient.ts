// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eflbswavtctlxszlnzks.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmbGJzd2F2dGN0bHhzemxuemtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2ODQ1MTcsImV4cCI6MjAzOTI2MDUxN30.vqBOuy7zozGPbilbNexOdACWnoVnx8R6irlLuBo7vK4'
export const supabase = createClient(supabaseUrl, supabaseKey)
