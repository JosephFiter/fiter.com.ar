import React from 'react';
import { Link } from 'react-router-dom';
import './css pag juegos/YEnElDescuento.css';
import GameInfoDescuento from '../../componentes/GameInfoDescuento';

const YEnElDescuento: React.FC = () => {
    return (
        <div className="YEnElDescuento-Container">
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
            <p className='titulos-descuento2'>Y En El Descuento</p>
            <p className='titulos-descuento'>Explora varias ciudades como, Rust full vividos y Players amigos</p>
              <img src="/ciudades.png" alt="Ciudades" className="YEnElDescuento-Image" />
              <p className='titulos-descuento'>Peleas contra jefes, más de 6 Jefes</p>

              <img src="/jefes.png" alt="Jefes" className="YEnElDescuento-Image" />
            </div>
            <div className="YEnElDescuento-Right">
              <GameInfoDescuento />
            </div>
          </div>
          </div>
        </div>
      );
    }

export default YEnElDescuento;
