import React from 'react';
import { Link } from 'react-router-dom';
import './css pag juegos/YEnElDescuento.css';
import GameInfoespia from '../../componentes/GameInfoespia';

const elespia: React.FC = () => {
    return (
        <div className="espia-Container">
            <div className='YEnElDescuento-Container2'>
          <header className="PagInicio-Header">
            <Link to="/">
              <img src="/logo.jpg" alt="Mi Marca" className="PagInicio-Logo" />
            </Link>
            <Link to="/juegos">
              <img src="/botonVolver.png" alt="Mensajes" className="Juegos-Volver" />
            </Link>
          </header>
          <div className="YEnElDescuento-Content">
          
            <div className="YEnElDescuento-Left">
            <p className='titulos-descuento3'>El Espía Del Futbol</p>
              <img src="/imgespia.png" alt="Ciudades" className="YEnElDescuento-Image" />
                     </div>
            <div className="YEnElDescuento-Right">
              <GameInfoespia/>
            </div>
          </div>
          </div>
        </div>
      );
    }

export default elespia;
