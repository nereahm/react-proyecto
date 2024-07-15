import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UsuarioContext";

function Logout() {
  const { logout } = useUser();
  const navegar = useNavigate();

  function handleNo() {
    navegar("/");
  }

  function handleSi() {
    logout(); // Aquí se elimina el usuario de localStorage
    navegar("/login");
  }

  return (
    <main className="logout">
      <h2 className="logoutTitulo">¿Desea cerrar la sesión?</h2>
      <div className="logoutBotones">
        <button
          type="button"
          className="boton__logoutBotones"
          onClick={handleSi}
        >
          Si
        </button>
        <button
          type="button"
          className="boton__logoutBotones"
          onClick={handleNo}
        >
          No
        </button>
      </div>
      <img src="despedida.png" alt="Animales" className="logoutImagen" />
    </main>
  );
}

export default Logout;
