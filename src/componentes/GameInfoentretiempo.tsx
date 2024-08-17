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
      <h1 className='tituloinfo'>Y En El Entretiempo</h1>
      <img src="/logoentretiempo.png" alt="Y En El Descuento Logo" className="GameInfo-Logo" />
      <p className='ponerblanco'>
Descubre los misterios detrás de tu baneo en el servidor de Discord de z4 en "Y En El Entretiempo", la emocionante precuela de "Y En El Descuento".    </p>
      <button onClick={openModal} className="GameInfo-PlayButton">Jugar</button>
      {isModalOpen && <GameModal closeModal={closeModal} />}
    </div>
  );
}

export default GameInfoDescuento;
