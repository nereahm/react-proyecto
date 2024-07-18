import React, { useState } from 'react';
import { FaStethoscope, FaCut, FaTree } from 'react-icons/fa'; 

const Servicios = () => {
  const [expanded, setExpanded] = useState(null); // Estado para controlar qué tarjeta está expandida

  const handleCardClick = (index) => {
    if (expanded === index) {
      setExpanded(null); // Si se hace clic en la tarjeta ya expandida, la cerramos
    } else {
      setExpanded(index); // Si se hace clic en una tarjeta diferente, la expandimos
    }
  };
  return (
    <div className="servicios">
      <h2 className='serviciosTitulo'>Enlaces de interés</h2>
      <div className={`servicio ${expanded === 0 ? 'expanded' : ''}`} onClick={() => handleCardClick(0)}>
        <div className="iconoContenedor">
          <FaStethoscope className="icono" />
        </div>
        <span className="servicios__nombre">Veterinarios</span>
        {expanded === 0 && (
          <div className="servicios__contenido">
            <p className='servicios__texto'>Algunos veterinarios recomendados en Sevilla:</p>
            <ul className='servicios__lista'>
              <li className='servicios__elemento'><a href="https://vitalcan.es/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Vitalcan</a></li>
              <li className='servicios__elemento'><a href="https://www.clinicaveterinariasevilla.es/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Clínica veterinaria Sevilla</a></li>
              <li className='servicios__elemento'><a href="https://veterinariaensevilla.com/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Clínica veterinaria San Bernardo</a></li>
              <li className='servicios__elemento'><a href="https://www.servetsevilla.es/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Servet Sevilla</a></li>
            </ul>
          </div>
        )}
      </div>
      <div className={`servicio ${expanded === 1 ? 'expanded' : ''}`} onClick={() => handleCardClick(1)}>
        <div className="iconoContenedor">
          <FaCut className="icono" />
        </div>
        <span className="servicios__nombre">Estéticas</span>
        {expanded === 1 && (
          <div className="servicios__contenido">
            <p className='servicios__texto'>Algunas peluquerías para mascotas en Sevilla:</p>
            <ul className='servicios__lista'>
              <li className='servicios__elemento'><a href="https://lookcan.es/" target="_blank" className='elementoEnlace' rel="noopener noreferrer">Lookcan</a></li>
              <li className='servicios__elemento'><a href="https://bymascota.com/tiendas/peluquerias-caninas-sevilla/peluqueria-mascotas-sevilla-los-remedios/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Bymascota</a></li>
              <li className='servicios__elemento'><a href="https://vacumovil.com/peluqueria-canina-domicilio-sevilla/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Vacumovil</a></li>
              <li className='servicios__elemento'><a href="https://www.kiwoko.com/servicios/peluquerias-mundobelleza/" className='elementoEnlace' target="_blank" rel="noopener noreferrer">Kiwoko</a></li>
            </ul>
          </div>
        )}
      </div>
      <div className={`servicio ${expanded === 2 ? 'expanded' : ''}`} onClick={() => handleCardClick(2)}>
        <div className="iconoContenedor">
          <FaTree className="icono" />
        </div>
        <span className="servicios__nombre">Parques</span>
        {expanded === 2 && (
          <div className="servicios__contenido">
            <p className='servicios__texto'>Algunos parques para mascotas en Sevilla:</p>
            <ul className='servicios__lista'>
              <li className='servicios__elemento'>Parque de los Príncipes</li>
              <li className='servicios__elemento'>Parque Miraflores</li>
              <li className='servicios__elemento'>Parque José Laguillo</li>
              <li className='servicios__elemento'>Parque Perros Agility</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Servicios;