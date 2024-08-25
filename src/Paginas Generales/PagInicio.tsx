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
        <a
          href="https://www.youtube.com/@josephfiter5187"
          className="PagInicio-Button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./youtubeboton.png" alt="YouTube" />
        </a>
        <Link to="/mods" className="PagInicio-Button">
          <img src="./modsboton.png" alt="Mods" />
        </Link>
        <Link to="/rewind" className="PagInicio-Button">
          <img src="./rewindboton.png" alt="Rewind DM" />
        </Link>
        <a
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          className="PagInicio-Button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./masboton.png" alt="Más" />
        </a>
      </div>
    </div>
  );
}

export default PagInicio;
