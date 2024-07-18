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
            Feria, 12345, Sevilla, España
          </p>
          <p className="item__infoContacto">
            <span className="etiqueta__infoContacto">Horario de atención:</span>{" "}
            Lunes a Viernes de 9:00 a 18:00
          </p>
        </div>
        <div className="mapaContenedor">
        <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6076882844613!2d-5.994256225602029!3d37.39910907208249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c07ab602a41%3A0x91a0020a7c0796d9!2sC.%20Feria%2C%20Casco%20Antiguo%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1721319962822!5m2!1ses!2ses"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
