import React from "react"; // Importa React
import Header from "../components/Header"; // Importa el componente Header

function Contacto() {
  return (
    <div className="contacto">
      <Header />
      <div className="seccionContacto">
        <h1 className="tituloContacto">Contacto</h1>
        <div className="infoContacto">
          {/* Información de contacto */}
          <p className="item__infoContacto">
            <span className="etiqueta__infoContacto">Correo electrónico:</span>{" "}
            nerea@adogtame.com
          </p>
          <p className="item__infoContacto">
            <span className="etiqueta__infoContacto">Teléfono:</span> +34 600
            000 000
          </p>
          <p className="item__infoContacto">
            <span className="etiqueta__infoContacto">Dirección:</span> Calle
            Falsa, 123, Sevilla, España
          </p>
          <p className="item__infoContacto">
            <span className="etiqueta__infoContacto">Horario de atención:</span>{" "}
            Lunes a Viernes de 9:00 a 18:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
