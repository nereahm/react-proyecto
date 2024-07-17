import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../components/Header';

function EditarGato() {
  // Define el estado inicial del gato con useState
  const [gato, setGato] = useState({
    nombre: "",
    descripcion: "",
    raza: "",
    edad: 0,
    genero: ""
  });
  const { id_animal } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://express-proyecto.vercel.app/gatos/id?id_animal=" + id_animal) // Realiza una petición GET para obtener los datos del gato
      .then((res) => res.json())
      .then((data) => {
        setGato(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del gato:", error);
      });
    }, [id_animal]); // Dependencia del efecto: se ejecuta cuando cambia id_animal

  function handleCambio(e) {
    const { name, value } = e.target;
    setGato({ ...gato, [name]: value }); // Actualiza el estado del gato
  }

  function handleSubmit(e) {
    e.preventDefault();
    const opciones = {
      method: "PUT", // Especifica el método PUT para la petición
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gato)
    };

    fetch("http://localhost:3000/gatos", opciones)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "okay") {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error al editar el gato:", error);
      });
  }

  return (
<main className="editar">
  <Header/>
  <div className="editarAnimal">
      <h2 className="titulo__editarAnimal">Editar Gato</h2>
      <form onSubmit={handleSubmit} className="formulario__editarAnimal">
        <label htmlFor="nombre" className="etiqueta__editarAnimal">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          required
          onChange={handleCambio}
          value={gato.nombre}
          className="input__editarAnimal"
        />
        <br />
        <label htmlFor="descripcion" className="etiqueta__editarAnimal">Descripción:</label>
        <textarea
          name="descripcion"
          id="descripcion"
          required
          onChange={handleCambio}
          value={gato.descripcion}
          className="textarea__editarAnimal"
        />
        <br />
        <label htmlFor="raza" className="etiqueta__editarAnimal">Raza:</label>
        <input
          type="text"
          name="raza"
          id="raza"
          required
          onChange={handleCambio}
          value={gato.raza}
          className="input__editarAnimal"
        />
        <br />
        <label htmlFor="edad" className="etiqueta__editarAnimal">Edad:</label>
        <input
          type="number"
          name="edad"
          id="edad"
          required
          onChange={handleCambio}
          value={gato.edad}
          className="input__editarAnimal"
        />
        <br />
        <label htmlFor="genero" className="etiqueta__editarAnimal">Género:</label>
        <select
          name="genero"
          id="genero"
          required
          onChange={handleCambio}
          value={gato.genero}
          className="select__editarAnimal"
        >
          <option value="Macho" className="option__editarAnimal">Macho</option>
          <option value="Hembra" className="option__editarAnimal">Hembra</option>
        </select>
        <br />
        <input type="submit" value="Editar Gato" className="submit__editarAnimal"
        />
      </form>
    </div>
  </main>
  );
}

export default EditarGato;
