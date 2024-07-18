import React, { useState, useEffect } from "react";
import Ultimos from "../components/Ultimos";
import HeaderBanner from "../components/HeaderBanner";
import Servicios from "../components/Servicios";
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom 

function Inicio() {
  return (
    <main>
      <HeaderBanner />
      <Ultimos />
      <div className="proyecto">
        <div className="contenedorProyecto">
          <div className="contenidoProyecto">
            <h2 className="contenidoProyecto__titulo">
              SOBRE NUESTRO PROYECTO
            </h2>
            <p className="contenidoProyecto__texto">
              En nuestro proyecto, nos dedicamos a facilitar el proceso de
              adopción de animales abandonados al conectar hogares amorosos con
              mascotas necesitadas. Nos esforzamos por crear vínculos duraderos
              y felices entre personas y animales rescatados, promoviendo el
              bienestar animal y la responsabilidad comunitaria. <br />
              <br /> Creemos firmemente que cada adopción no solo cambia la vida
              de un animal, sino que también enriquece la vida de quienes los
              adoptan, creando un impacto positivo que perdura en nuestras
              comunidades.
            </p>
            <button className="contenidoProyecto__boton">
              <Link to="/quienes-somos" className="botonEnlace">
                Más info
              </Link>
            </button>
          </div>
          <img
            src="img1.png"
            alt="Imagen descriptiva"
            className="contenidoProyecto__imagen"
          />
        </div>
      </div>
      <div className="proyecto proyectoInfo">
        <div className="contenedorProyecto">
          <img
            src="img5.png"
            alt="Imagen descriptiva"
            className="contenidoProyecto__imagen"
          />
          <div className="contenidoProyecto">
            <h2 className="contenidoProyecto__titulo">
              CÓMO PUEDES COLABORAR
            </h2>
            <p className="contenidoProyecto__texto">
              Puedes ayudar adoptando a una mascota necesitada, compartiendo
              nuestras historias de adopción en redes sociales para aumentar la
              conciencia, donando para apoyar el cuidado y alimentación de los
              animales, o volviéndote voluntario para asistir en eventos y
              cuidar de los animales en el refugio. <br />
              <br />
              Tu participación directa y apoyo financiero fortalece nuestra
              misión de crear hogares amorosos y promover el bienestar animal en
              la comunidad.
            </p>
            <button className="contenidoProyecto__boton">
              <Link to="/quienes-somos" className="botonEnlace">
                Más info
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Servicios />
    </main>
  );
}

export default Inicio;
