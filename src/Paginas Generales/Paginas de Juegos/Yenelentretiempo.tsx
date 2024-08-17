import React from 'react';
import { Link } from 'react-router-dom';
import './css pag juegos/YEnElDescuento.css';
import GameInfoentre from '../../componentes/GameInfoentretiempo';

const YEnElEntretiempo: React.FC = () => {
    return (
        <div className="YEnElentretiempo-Container">
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
            <p className='titulos-descuento2'>Y En El Entretiempo</p>
            <p className='titulos-descuento'>Explora el mundo con los miembros de z4, con cinco personajes jugables: Joseph Fiter, Scroll, Oliber, Behrend y Shibur</p>
              <img src="/exploraentretiempo.png" alt="Ciudades" className="YEnElDescuento-Image" />
              <p className='titulos-descuento'>Batallas por turnos y con distintas habilidades, inaugurando las batallas con multiples aliados              </p>

              <img src="/batallasentretiempo.png" alt="Jefes" className="YEnElDescuento-Image" />
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
