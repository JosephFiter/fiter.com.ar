import React from 'react';
import { Link } from 'react-router-dom';
import './css pag juegos/YEnElDescuento.css';
import GameInfoentre from '../../componentes/GameInfodonot';

const YEnElEntretiempo: React.FC = () => {
    return (
        <div className="donotenter-Container">
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
            <p className='titulos-descuento2'>Do Not Enter</p>
            <p className='titulos-descuento'>Llega al barco lo antes posible y con la mayor cantidad de monedas.</p>
              <img src="/donot.png" alt="Ciudades" className="YEnElDescuento-Image" />
              <p className='titulos-descuento'>Varias armas y enemigos, ciclo dia noche y más.           </p>

              <img src="/donotfondo.png" alt="Jefes" className="YEnElDescuento-Image" />
            </div>
            <div className="YEnElDescuento-Right">
              <GameInfoentre />
            </div>
          </div>
          </div>
        </div>
      );
    }

export default YEnElEntretiempo;
