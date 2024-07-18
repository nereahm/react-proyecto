import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { useUser } from '../context/UsuarioContext';
import { GiDogHouse } from "react-icons/gi";
import useFetch from '../hooks/useFetch'; // Importa el Hook personalizado useFetch

const GaleriaGatos = () => {
  const apiUrl = import.meta.env.VITE_API_GATOS;
  const { usuario } = useUser();
  const nombreUsuario = usuario ? usuario.nombre : null; // Obtiene el nombre de usuario actual

  const { data: gatos, loading, error } = useFetch(apiUrl);

  const [selectedImage, setSelectedImage] = useState(null);

  if (loading) return <p className='cargando'>Loading...</p>;
  if (error) return <p className='errorCargando'>Error: {error.message}</p>;

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="galeriaContenedor">
      {gatos.map(gato => (
        <div key={gato.id_animal} className="galeriaAnimal">
          <img 
            src={'https://express-proyecto.vercel.app/' + gato.imagen} 
            alt={gato.nombre} 
            className='imagenAnimal'
            onClick={() => handleImageClick('https://express-proyecto.vercel.app/' + gato.imagen)}
          />
          <p className='nombreAnimal'>{gato.nombre}</p>
          <p className='descripcionAnimal'>{gato.descripcion}</p>
          <p className='razaAnimal'><strong>Raza:</strong> {gato.raza}</p>
          <p className='edadAnimal'><strong>Edad:</strong> {gato.edad} años</p>
          <p className='generoAnimal'><strong>Género:</strong> {gato.genero}</p><br />
          <button type="button" className='seccionCardsInicio__boton'><Link to="/formulario-adopcion" className='botonEnlace'>Adoptame</Link></button><br />
          <br />
          {/* Condicional para mostrar iconos de editar y borrar si el usuario es 'Nerea' o 'Javi' */}
          {(nombreUsuario === 'Nerea' || nombreUsuario === 'Javi') && (
            <>
              <Link to={"/borrar-gato/" + gato.id_animal} className="iconosAnimal">
                <GiDogHouse />
              </Link>
              &nbsp;
              {/* Mostrar icono de editar solo si el usuario es 'Nerea' */}
              {nombreUsuario === 'Nerea' && (
                <Link to={"/editar-gato/" + gato.id_animal} className="iconosAnimal">
                  <CiEdit />
                </Link>
              )}
            </>
          )}
        </div>
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Ampliada" />
        </div>
      )}
    </div>
  );
}

export default GaleriaGatos;
