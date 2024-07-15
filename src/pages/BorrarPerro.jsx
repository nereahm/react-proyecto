import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// Funciona exactamente igual que el componente BorrarGato, ahí explicado en mas profundidad.
function BorrarPerro() {
  const navegar = useNavigate();
  const { id_animal } = useParams();

  function handleNo() {
    navegar("/adoptame");
  }

  function handleSi() {
    let opciones = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/perros?id_animal=${id_animal}`, opciones)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Ok") {
          alert("Este perrito estará muy feliz en su nuevo hogar :)");
          navegar("/");
        } else {
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
          <button
            type="button"
            onClick={handleSi}
            className="boton__borrarMascota"
          >
            Si
          </button>
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

export default BorrarPerro;
