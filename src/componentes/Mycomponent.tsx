// src/components/MyComponent.tsx
import React, { useEffect, useState } from 'react';
import { getData } from './prueba'; // Ajusta la ruta según sea necesario

const MyComponent: React.FC = () => {
  const [juegos, setJuegos] = useState<any[]>([])

  useEffect(() => {
    async function fetchJuegos() {
      const data = await getData()
      if (data) {
        setJuegos(data)
      }
    }
    fetchJuegos()
  }, [])

  return (
    <div>
      <h1>Juegos</h1>
      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>{juego.nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default MyComponent
