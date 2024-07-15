import React, { useState } from 'react';
import Header from '../components/Header';

function FormularioAdopcion() {
  // Define el estado inicial del formulario usando useState
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  // Función para manejar los cambios en los inputs del formulario
  function handleChange(e) {
    const { name, value } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value
    });
  }
  
  // Función para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault();

    setDatosFormulario({
      nombre: '',
      email: '',
      mensaje: ''
    });
  }

  return (
    <div>
    <Header />
    <div className="adopcion">
      <h2 className="adopcionTitulo">Formulario de adopción</h2>
      <form className="formularioAdopcion" onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="etiqueta__formularioAdopcion">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosFormulario.nombre}
          onChange={handleChange}
          className="input__formularioAdopcion"
          required
        />
        <br />

        <label htmlFor="email" className="etiqueta__formularioAdopcion">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={datosFormulario.email}
          onChange={handleChange}
          className="input__formularioAdopcion"
          required
        />
        <br />

        <label htmlFor="mensaje" className="etiqueta__formularioAdopcion">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={datosFormulario.mensaje}
          onChange={handleChange}
          className="textarea__formularioAdopcion"
          rows={4}
        />
        <br />

        <button type="submit" className="boton__formularioAdopcion">Enviar</button>
      </form>
      <p className="descripcion__formularioAdopcion">
        Por favor, rellene este formulario con sus datos y nos pondremos en contacto con usted para gestionar la adopción del animal.
      </p>
    </div>
  </div>
);
}

export default FormularioAdopcion;
