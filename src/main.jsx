import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import Footer from './components/Footer';
import BotonSubir from './components/BotonSubir';
import Login from './components/Login';
import { UserProvider } from './context/UsuarioContext';
import RutaPrivada from './components/RutaPrivada';
import Inicio from './pages/Inicio';
import Adoptame from './pages/Adoptame';
import QuienesSomos from './pages/QuienesSomos';
import MiCuenta from './pages/MiCuenta';
import NuevoGato from './pages/NuevoGato';
import NuevoPerro from './pages/NuevoPerro';
import BorrarGato from './pages/BorrarGato';
import BorrarPerro from './pages/BorrarPerro';
import EditarGato from './pages/EditarGato';
import EditarPerro from './pages/EditarPerro';
import FormularioAdopcion from './pages/FormularioAdopcion';
import Contacto from './pages/Contacto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <UserProvider>
      <Router>
        {/* Aquí se utiliza Suspense con Routes para manejar la carga diferida */}
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/adoptame" element={<Adoptame />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/mi-cuenta"
              element={<RutaPrivada componente={<MiCuenta />} />}
            />
            <Route
              path="/nuevo-gato"
              element={<RutaPrivada componente={<NuevoGato />} />}
            />
            <Route
              path="/nuevo-perro"
              element={<RutaPrivada componente={<NuevoPerro />} />}
            />
            <Route
              path="/borrar-gato/:id_animal"
              element={<RutaPrivada componente={<BorrarGato />} />}
            />
            <Route
              path="/borrar-perro/:id_animal"
              element={<RutaPrivada componente={<BorrarPerro />} />}
            />
            <Route
              path="/editar-gato/:id_animal"
              element={<RutaPrivada componente={<EditarGato />} />}
            />
            <Route
              path="/editar-perro/:id_animal"
              element={<RutaPrivada componente={<EditarPerro />} />}
            />
            <Route
              path="/formulario-adopcion"
              element={<RutaPrivada componente={<FormularioAdopcion />} />}
            />
          </Routes>
        </Suspense>
        <BotonSubir />
        <Footer />
      </Router>
    </UserProvider>
  </>
);
