import React, { useEffect } from 'react';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext';
import { GiDogHouse } from "react-icons/gi";
import useFetch from '../hooks/useFetch'; // Importa el Hook personalizado useFetch

const GaleriaPerros = () => {
  const apiUrl = import.meta.env.VITE_API_PERROS;
  const { usuario } = useUser();
  const nombreUsuario = usuario ? usuario.nombre : null;

  const { data: perros, loading, error } = useFetch(apiUrl);

  if (loading) return <p className='cargando'>Loading...</p>;
  if (error) return <p className='errorCargando'>Error: {error.message}</p>;

  return (
    <div className="galeriaContenedor">
      {perros.map(perro => (
        <div key={perro.id_animal} className="galeriaAnimal">
          <img src={'https://express-proyecto.vercel.app/' + perro.imagen} alt={perro.nombre} className='imagenAnimal'/>
          <p className='nombreAnimal'>{perro.nombre}</p>
          <p className='descripcionAnimal'>{perro.descripcion}</p>
          <p className='razaAnimal'><strong>Raza:</strong> {perro.raza}</p>
          <p className='edadAnimal'><strong>Edad:</strong> {perro.edad} años</p>
          <p className='generoAnimal'><strong>Género:</strong> {perro.genero}</p><br />
          <button type="button" className='seccionCardsInicio__boton'><Link to="/formulario-adopcion" className='botonEnlace'>Adoptame</Link></button><br />
          <br />
          {/* Condicional para mostrar iconos de editar y borrar si el usuario es 'Nerea' o 'Javi' */}
          {(nombreUsuario === 'Nerea' || nombreUsuario === 'Javi') && (
            <>
              <Link to={"/borrar-perro/" + perro.id_animal} className="iconosAnimal">
                <GiDogHouse />
              </Link>
              &nbsp;
              {/* Mostrar icono de editar solo si el usuario es 'Nerea' */}
              {nombreUsuario === 'Nerea' && (
                <Link to={"/editar-perro/" + perro.id_animal} className="iconosAnimal">
                  <CiEdit />
                </Link>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default GaleriaPerros;
