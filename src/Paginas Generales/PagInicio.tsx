import React from 'react';
import { Link } from 'react-router-dom';
import './css de generales/PagInicio.css';

const PagInicio: React.FC = () => {
  return (
    <div className="PagInicio-Container">
      <header className="PagInicio-Header">
        <img src="./logo.jpg" alt="Mi Marca" className="PagInicio-Logo" /> {/* Ruta directa para el logo */}
        <h1 className="PagInicio-Title">Página de Joseph Fiter</h1>
      </header>
      <div className="PagInicio-ButtonContainer">
        <Link to="/mensajes" className="PagInicio-Button" style={{ backgroundImage: 'url(/path-to-your-image/mensajes.png)' }}>
          Mensajes
        </Link>
        <Link to="/juegos" className="PagInicio-Button" style={{ backgroundImage: 'url(/path-to-your-image/juegos.png)' }}>
          Juegos
        </Link>
        <Link to="/mods" className="PagInicio-Button" style={{ backgroundImage: 'url(/path-to-your-image/mods.png)' }}>
          Mods
        </Link>
        <Link to="/rewind" className="PagInicio-Button" style={{ backgroundImage: 'url(/path-to-your-image/rewind.png)' }}>
          Rewind DM
        </Link>
        <Link to="/mas" className="PagInicio-Button" style={{ backgroundImage: 'url(/path-to-your-image/mas.png)' }}>
          Más
        </Link>
      </div>
    </div>
  );
}

export default PagInicio;
