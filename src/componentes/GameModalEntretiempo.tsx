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
        <p className="GameModal-Descargas">Y En El Entretiempo</p>
        <img src="/logoentretiempo.png" alt="Y En El Descuento Logo" className="GameModal-Logo" />
        <p className="GameModal-Descargas">Descargas:</p>
        
        <a href="https://www.mediafire.com/file/al35k7fj0f8f4xy/y+en+entretiempo.rar/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/windows.svg" alt="Descargar para Windows" />
        </a>
        <a href="https://www.mediafire.com/file/wslyuf6ypij9f92/y+en+entretiempo+-+copia.rar/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/android.svg" alt="Descargar para Android" />
        </a>
        <Link to="/YEnElEntretiempo/Jugar" className="GameModal-Button">
          <img src="/web.svg" alt="Jugar Web" />
        </Link>
      </div>
    </div>
  );
}

export default GameModalDescuento;
