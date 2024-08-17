import React from 'react';
import './css componentes/GameModalDescuento.css';

interface GameModalProps {
  closeModal: () => void;
}

const GameModalDescuento: React.FC<GameModalProps> = ({ closeModal }) => {
  return (
    <div className="GameModal-Overlay" onClick={closeModal}>
      <div className="GameModal-Content" onClick={(e) => e.stopPropagation()}>
        <img src="/logoYEnElDescuento.png" alt="Y En El Descuento Logo" className="GameModal-Logo" />
        <button className="GameModal-Button">
          <img src="/windows.png" alt="Descargar para Windows" />
        </button>
        <button className="GameModal-Button">
          <img src="/android.png" alt="Descargar para Android" />
        </button>
        <button className="GameModal-Button">
          <img src="/web.png" alt="Jugar Web" />
        </button>
      </div>
    </div>
  );
}

export default GameModalDescuento;
