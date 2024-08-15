import React from 'react';
import FetchJuegos from '../componentes/RequestJuegos';

const Juegos: React.FC = () => {
  return (
    <div>
      <h1>Juegos</h1>
      <FetchJuegos />
    </div>
  );
}

export default Juegos;
