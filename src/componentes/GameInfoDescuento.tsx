import React, { useState } from 'react';
import GameModal from './GameModalDescuento';
import './css componentes/GameInfoDescuento.css';

const GameInfoDescuento: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="GameInfo-Container">
      <h1>Y En El Descuento</h1>
      <img src="/logoYEnElDescuento.png" alt="Y En El Descuento Logo" className="GameInfo-Logo" />
      <p>
        Y En El Descuento es el juego oficial del Discord de z4. Mata a los integrantes de z4 para conseguir sus pc y armar la pc suprema. Un juego RPG hecho con RPG Maker MV.
      </p>
      <button onClick={openModal} className="GameInfo-PlayButton">Jugar</button>
      {isModalOpen && <GameModal closeModal={closeModal} />}
    </div>
  );
}

export default GameInfoDescuento;
