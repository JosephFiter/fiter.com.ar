import React from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de tener react-router-dom instalado y configurado
import './css componentes/GameModalDescuento.css';

interface GameModalProps {
  closeModal: () => void;
}

const GameModalDescuento: React.FC<GameModalProps> = ({ closeModal }) => {
  return (
    <div className="GameModal-Overlay" onClick={closeModal}>
      <div className="GameModal-Content" onClick={(e) => e.stopPropagation()}>
        <p className="GameModal-Descargas">El Espia Del Futbol:</p>
        <img src="/logoespia.png" alt="Y En El Descuento Logo" className="GameModal-Logo" />
        <p className="GameModal-Descargas">Descargas:</p>
        
        <a href="https://www.mediafire.com/file/iuag26gxmu0thj5/El+Espia+Futbol.rar/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/windows.svg" alt="Descargar para Windows" />
        </a>
        <a href="https://www.mediafire.com/file/v3w0e23armd2w9e/elespiadelfutbol.apk/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/android.svg" alt="Descargar para Android" />
        </a>
        <Link to="/ElEspia/Jugar" className="GameModal-Button">
          <img src="/web.svg" alt="Jugar Web" />
        </Link>
      </div>
    </div>
  );
}

export default GameModalDescuento;
