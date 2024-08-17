import React from 'react';
import { Link } from 'react-router-dom';
import './css generales/Juegos.css';
import BotonesJuegos from '../componentes/BotonesJuegos';

const Juegos: React.FC = () => {
  return (
    <div className='Juegos-Fondo'>
      <header className="PagInicio-Header">
        <Link to="/">
          <img src="/logo.jpg" alt="Mi Marca" className="PagInicio-Logo" />
        </Link>        
        <Link to="/">
          <img src="/botonVolver.png" alt="Mensajes" className='Juegos-Volver' />
        </Link>
      </header>
      <div className="Juegos-Content">
        <BotonesJuegos />
      </div>
    </div>
  );
}

export default Juegos;
