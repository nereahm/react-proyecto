import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"; // Importa el hook personalizado useFetch

function Ultimos() {
  const link = import.meta.env.VITE_API_PERROS + "/ultimos"; // URL completa para obtener los últimos perros

  // Llamando a useFetch para obtener los últimos tres perros
  const { data: tresUltimos, loading, error } = useFetch(link);

  useEffect(() => {
    // No necesitamos lógica aquí relacionada con axios, ya que useFetch maneja la solicitud y el estado
  }, []); // Solo se ejecuta una vez al montar el componente

  if (loading) return <p className="cargando">Loading...</p>;
  if (error) return <p className="errorCargando">Error: {error.message}</p>;

  return (
    <section className="seccionCardsInicio">
      {tresUltimos.map((perro) => (
        <div key={perro.id_animal} className="seccionCardsInicio__card">
          <img
            className="seccionCardsInicio__imagen"
            src={`/${perro.imagen}`}
            alt={perro.nombre}
          />
          <h2 className="seccionCardsInicio__titulo">{perro.nombre}</h2>
          <p className="seccionCardsInicio__datos">
            Raza: {perro.raza}&nbsp;&nbsp;Edad: {perro.edad}{" "}
            años&nbsp;&nbsp;Género: {perro.genero}
          </p>
          <p className="seccionCardsInicio__descripcion">{perro.descripcion}</p>
          <button type="button" className="seccionCardsInicio__boton">
            <Link to="/formulario-adopcion" className="botonEnlace">
              Adoptame
            </Link>
          </button>
          <br />
        </div>
      ))}
    </section>
  );
}

export default Ultimos;
