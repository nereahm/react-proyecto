import axios from "axios";
import React, { useState } from "react";
import { useUser } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const [datos, setDatos] = useState({ nombre: "", contrasena: "", error: "" });
  const linkUsu = import.meta.env.VITE_API_USER;
  const navegador = useNavigate();
  const { login } = useUser();

  // Función para actualizar los datos del formulario
  function cambiarDatos(e) {
    const { name, value } = e.target;
    setDatos(prevDatos => ({
      ...prevDatos,
      [name]: value
    }));
  }

  function enviarForm(e) {
    e.preventDefault(); // Evita que el formulario se envíe por defecto
    axios
      .get(`${linkUsu}?nombre=${datos.nombre}&contrasena=${datos.contrasena}`)
      .then((response) => {
        if (response.data.length > 0) {
          login(response.data[0]); // Aquí se almacena el usuario en localStorage
          navegador("/");
        } else {
          setDatos(prevDatos => ({
            ...prevDatos,
            error: 'Usuario no encontrado'
          }));
        }
      });
  }

  return (
    <main>
      <Header />
      <div className="formularioLogin">
        <p className="loginError">{datos.error}</p>
        <form action="#" method="get" className="login" onSubmit={enviarForm}>
          <label htmlFor="nom" className="loginEtiqueta">
            Nombre de usuario:
          </label>
          <input
            type="text"
            name="nombre"
            id="nom"
            onChange={cambiarDatos}
            className="loginInput"
          />{" "}
          <br />
          <label htmlFor="pass" className="loginEtiqueta">
            Contraseña:
          </label>
          <input
            type="password"
            name="contrasena"
            id="pass"
            onChange={cambiarDatos}
            className="loginInput"
          />
          <br /> <br />
          <input type="submit" value="Iniciar sesión" className="loginInput" />
        </form>
      </div>
    </main>
  );
}

export default Login;
