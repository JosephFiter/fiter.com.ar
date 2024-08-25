import React, { useState } from 'react';
import GameModal from './GameModalEspia';
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
      <h1 className='tituloinfo'>El Espía Del Futbol</h1>
      <img src="/logoespia.png" alt="Y En El Descuento Logo" className="GameInfo-Logo" />
      <p className='ponerblanco'>
      Juego sobre futbol cooperativo local mínimo 3 jugadores 

</p>
      <button onClick={openModal} className="GameInfo-PlayButton">Jugar</button>
      {isModalOpen && <GameModal closeModal={closeModal} />}
    </div>
  );
}

export default GameInfoDescuento;
