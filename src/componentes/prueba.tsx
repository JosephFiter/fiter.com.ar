// src/api/supabaseClient.ts (o el nombre del archivo donde tienes la función)
import { supabase } from '../supabaseClient' // Ajusta la ruta según la estructura de tu proyecto

export async function getData() {
  let { data, error } = await supabase
    .from('hola')
    .select('*')

  if (error) {
    console.error(error)
    return null
  } else {
    console.log("datos",data)
    return data // Retorna los datos para su uso posterior
  }
}
