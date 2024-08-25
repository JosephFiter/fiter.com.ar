import React from 'react';
import './css componentes/GameModalDescuento.css';

interface GameModalProps {
  closeModal: () => void;
}

const GameModalDescuento: React.FC<GameModalProps> = ({ closeModal }) => {
  return (
    <div className="GameModal-Overlay" onClick={closeModal}>
      <div className="GameModal-Content" onClick={(e) => e.stopPropagation()}>
        <p className="GameModal-Descargas"></p>
        <img src="/donotenterlogo.png" alt="Y En El Descuento Logo" className="GameModal-Logo" />
        <p className="GameModal-Descargas">Descargas:</p>
        
        <a href="https://www.mediafire.com/file/xb6ml0xoutp5n0h/donotenter.rar/file" className="GameModal-Button" target="_blank" rel="noopener noreferrer">
          <img src="/windows.svg" alt="Descargar para Windows" />
        </a>
     
        
      </div>
    </div>
  );
}

export default GameModalDescuento;
