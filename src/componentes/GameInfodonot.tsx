import React, { useState } from 'react';
import GameModal from './GameModaldonot';
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
      <h1 className='tituloinfo'></h1>
      <img src="/donotenterlogo.png" alt="Y En El Descuento Logo" className="GameInfo-Logodo" />
      <p className='ponerblanco'>
Un shooter en primera persona donde te enfrentaras a zombies, cocos y muñecos de madera en una isla embrujada.  </p>
      <button onClick={openModal} className="GameInfo-PlayButton">Jugar</button>
      {isModalOpen && <GameModal closeModal={closeModal} />}
    </div>
  );
}

export default GameInfoDescuento;
