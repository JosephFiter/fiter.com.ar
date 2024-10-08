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
        <p className="GameModal-Descargas">Y En El Descuento:</p>
        <img src="/logoYEnElDescuento.png" alt="Y En El Descuento Logo" className="GameModal-Logo" />
        <p className="GameModal-Descargas">Descargas:</p>
        
        <a href="https://www.mediafire.com/file/zc2nla9cxm1ogyg/fiter.rar/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/windows.svg" alt="Descargar para Windows" />
        </a>
        <a href="https://www.mediafire.com/file/q5zluwfv6a7z7w2/fiter.rar/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/android.svg" alt="Descargar para Android" />
        </a>
        <Link to="/YEnElDescuento/Jugar" className="GameModal-Button">
          <img src="/web.svg" alt="Jugar Web" />
        </Link>
      </div>
    </div>
  );
}

export default GameModalDescuento;
