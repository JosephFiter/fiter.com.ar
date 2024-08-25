import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagInicio from './Paginas Generales/PagInicio';
import Mensajes from './Paginas Generales/Mensajes';
import Juegos from './Paginas Generales/Juegos';
import Mods from './Paginas Generales/Mods';
import Rewind from './Paginas Generales/Rewind';
import Mas from './Paginas Generales/Mas';
import YEnElDescuento from './Paginas Generales/Paginas de Juegos/Yeneldescuento';
import YEnElEntretiempo from './Paginas Generales/Paginas de Juegos/Yenelentretiempo';
import Elespia1 from './Paginas Generales/Paginas de Juegos/Elespia';
import DoNotEnter from './Paginas Generales/Paginas de Juegos/DoNotEnter';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/mods" element={<Mods />} />
        <Route path="/rewind" element={<Rewind />} />
        <Route path="/mas" element={<Mas />} />
        <Route path="/juegos/YEnElDescuento" element={<YEnElDescuento />} />
        <Route path="/juegos/YEnElEntretiempo" element={<YEnElEntretiempo />} />
        <Route path="/juegos/ElEspiaDelFutbol" element={<Elespia1 />} />
        <Route path="/juegos/DoNotEnter" element={<DoNotEnter />} />


      </Routes>
    </Router>
  );
}

export default App;
