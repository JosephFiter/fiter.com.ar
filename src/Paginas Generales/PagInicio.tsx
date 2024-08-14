import React from 'react';
import { Link } from 'react-router-dom';
import './css de generales/PagInicio.css';

const PagInicio: React.FC = () => {
  return (
    <div className="PagInicio-Container">
      <header className="PagInicio-Header">
        <Link to="/">
          <img src="./logo.jpg" alt="Mi Marca" className="PagInicio-Logo" />
        </Link>
        <h1 className="PagInicio-Title">Página de Joseph Fiter</h1>
      </header>
      <div className="PagInicio-ButtonContainer">
        <Link to="/mensajes" className="PagInicio-Button">
          <img src="./shabatboton.png" alt="Mensajes" />
        </Link>
        <Link to="/juegos" className="PagInicio-Button">
          <img src="./juegosboton.png" alt="Juegos" />
        </Link>
        <Link to="/youtube" className="PagInicio-Button">
          <img src="./youtubeboton.png" alt="youtube" />
        </Link>
        <Link to="/mods" className="PagInicio-Button">
          <img src="./modsboton.png" alt="Mods" />
        </Link>
        <Link to="/rewind" className="PagInicio-Button">
          <img src="./rewindboton.png" alt="Rewind DM" />
        </Link>
        <Link to="/mas" className="PagInicio-Button">
          <img src="./masboton.png" alt="Más" />
        </Link>
      </div>
    </div>
  );
}

export default PagInicio;
