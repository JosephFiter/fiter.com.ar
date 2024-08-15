// src/api/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eflbswavtctlxszlnzks.supabase.co' // Asegúrate de que esta URL sea la correcta
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmbGJzd2F2dGN0bHhzemxuemtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2ODQ1MTcsImV4cCI6MjAzOTI2MDUxN30.vqBOuy7zozGPbilbNexOdACWnoVnx8R6irlLuBo7vK4' // Asegúrate de que esta clave sea la correcta
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getData() {
  try {
    console.log('Making request to Supabase...')
    let { data, error } = await supabase
      .from("Juegos")
      .select('*')

    if (error) {
      console.error('Error fetching data:', error.message)
      return []
    }

    console.log('Fetched data:', data)
    return data
  } catch (error) {
    console.error('Unexpected error:', error)
    return []
  }
}
