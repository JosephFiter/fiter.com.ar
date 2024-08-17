import React from 'react';
import { Link } from 'react-router-dom';
import FetchJuegos from '../componentes/RequestJuegos';
import './css de generales/Juegos.css';
const Juegos: React.FC = () => {
  return (
    <div>
       <header className="PagInicio-Header">
        <Link to="/">
          <img src="./logo.jpg" alt="Mi Marca" className="PagInicio-Logo" />
        </Link>        
        <Link to="/">
        <img src="./botonVolver.png" alt="Mensajes" className='Juegos-Volver' />
        </Link>
      </header>
      <FetchJuegos />
    </div>
  );
}

export default Juegos;
