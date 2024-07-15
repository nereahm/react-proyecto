import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import GaleriaPerros from '../components/GaleriaPerros';
import GaleriaGatos from '../components/GaleriaGatos';
import { useUser } from '../context/UsuarioContext';

function Adoptame() {
  
  // Estado para controlar si se muestra la galería de perros o gatos
  const [mostrarPerros, setMostrarPerros] = useState(true);
  const navigate = useNavigate();
  const { usuario } = useUser();
  const nombreUsuario = usuario ? usuario.nombre : null;

  // Función para mostrar la galería de perros
  const mostrarGaleriaPerros = () => {
    setMostrarPerros(true);
  };
  // Función para mostrar la galería de gatos
  const mostrarGaleriaGatos = () => {
    setMostrarPerros(false);
  };

  const handleNuevoAnimal = () => {
    if (nombreUsuario === 'Nerea') { 
      if (mostrarPerros) {
        navigate('/nuevo-perro');
      } else {
        navigate('/nuevo-gato');
      }
    }
  };

  return (
    <main className="adoptame">
      <Header />
      <div className="botonesContenedor">
        <button onClick={mostrarGaleriaPerros} className={`btnGaleria ${mostrarPerros ? 'active' : ''}`}>
          PERROS
        </button>
        <button onClick={mostrarGaleriaGatos} className={`btnGaleria ${!mostrarPerros ? 'active' : ''}`}>
          GATOS
        </button>
      </div>
      {usuario && nombreUsuario === 'Nerea' && ( // Mostrar botón solo si el usuario es Nerea
        <div className='contendor_botonNuevo'>
          <button type="button" onClick={handleNuevoAnimal} className='botonNuevo'>
            Añadir un nuevo {mostrarPerros ? 'perro' : 'gato'}
          </button>
        </div>
      )}
      
      {/* Mostrar la galería correspondiente según el estado mostrarPerros */}
      {mostrarPerros ? <GaleriaPerros /> : <GaleriaGatos />}
    </main>
  );
}

export default Adoptame;
