import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function BorrarGato() {
  const navegar = useNavigate();
  const { id_animal } = useParams(); // Extrae el parámetro id_animal de la URL usando el hook useParams

  // Maneja el evento cuando el usuario decide no borrar el gato
  function handleNo() {
    navegar("/adoptame"); // Navega a la ruta /adoptame
  }

  // Maneja el evento cuando el usuario decide borrar el gato
  function handleSi() {
    let opciones = {
      method: "DELETE",
    };
    fetch(`https://express-proyecto.vercel.app/gatos?id_animal=${id_animal}`, opciones)
      .then((res) => res.json()) // Convierte la respuesta a JSON
      .then((data) => {
        if (data.status === "Ok") {
          // Si el estado es "Ok" mostrará un alert y te manda al inicio
          alert("Este gatito estará muy feliz en su nuevo hogar :)");
          navegar("/");
        } else {
          // Si el estado no es "Ok" te da un alert diciendo que lo vuelvas a intentar y te manda de nuevo  la pagina adoptame
          alert("Vuelve a intentarlo");
          navegar("/adoptame");
        }
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <main>
      <Header />
      <div className="borrarMascota">
        <h1 className="titulo__borrarMascota">
          ¿Esta mascota tiene un nuevo hogar?
        </h1>
        <div className="check__borrarMascota">
          {/* Botón para confirmar el borrado del gato */}
          <button
            type="button"
            onClick={handleSi}
            className="boton__borrarMascota"
          >
            Si
          </button>
          {/* Botón para cancelar el borrado del gato */}
          <button
            type="button"
            onClick={handleNo}
            className="boton__borrarMascota"
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}

export default BorrarGato;
