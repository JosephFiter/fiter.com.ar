import React from 'react';
import { Link } from 'react-router-dom';
import './css componentes/BotonesJuegos.css';

const juegos = [
  { nombre: 'YEnElDescuento', imagen: './yeneldescuentoboton.png' },
  { nombre: 'YEnElEntretiempo', imagen: './yenelentretiempoboton.png' },
  { nombre: 'Juego3', imagen: './juego3.png' },
  // Añade más juegos según sea necesario
];

const BotonesJuegos: React.FC = () => {
  return (
    <div className="BotonesJuegos-Container">
      <h2 className='BotonesJuegos-Titulo'>Estos son los juegos de Industrias Fiter </h2>
      <div className="BotonesJuegos-Botones">
        {juegos.map((juego) => (
          <Link to={`/juegos/${juego.nombre}`} key={juego.nombre} className="BotonesJuegos-Boton">
            <img src={juego.imagen} alt={juego.nombre} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BotonesJuegos;
