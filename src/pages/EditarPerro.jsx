import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../components/Header';
// Misma formación que EditarGato pero con los datos de los perros

function EditarPerro() {
  const [perro, setPerro] = useState({
    nombre: "",
    descripcion: "",
    raza: "",
    edad: 0,
    genero: ""
  });
  const { id_animal } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://express-proyecto.vercel.app/perros/id?id_animal=" + id_animal)
      .then((res) => res.json())
      .then((data) => {
        setPerro(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del perro:", error);
      });
  }, [id_animal]);

  function handleCambio(e) {
    const { name, value } = e.target;
    setPerro({ ...perro, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const opciones = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(perro)
    };

    fetch("http://localhost:3000/perros", opciones)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "okay") {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error al editar el perro:", error);
      });
  }

  return (
    <main className="editar">
      <Header/>
    <div className="editarAnimal">
  <h2 className="titulo__editarAnimal">Editar Perro</h2>
  <form onSubmit={handleSubmit} className="formulario__editarAnimal">
    <label htmlFor="nombre" className="etiqueta__editarAnimal">Nombre:</label>
    <input
      type="text"
      name="nombre"
      id="nombre"
      required
      onChange={handleCambio}
      value={perro.nombre}
      className="input__editarAnimal"
    />
    <br />
    <label htmlFor="descripcion" className="etiqueta__editarAnimal">Descripción:</label>
    <textarea
      name="descripcion"
      id="descripcion"
      required
      onChange={handleCambio}
      value={perro.descripcion}
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
      value={perro.raza}
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
      value={perro.edad}
      className="input__editarAnimal"
    />
    <br />
    <label htmlFor="genero" className="etiqueta__editarAnimal">Género:</label>
    <select
      name="genero"
      id="genero"
      required
      onChange={handleCambio}
      value={perro.genero}
      className="select__editarAnimal"
    >
      <option value="Macho" className="option__editarAnimal">Macho</option>
      <option value="Hembra" className="option__editarAnimal">Hembra</option>
    </select>
    <br />
    <input type="submit" value="Editar Perro" className="submit__editarAnimal" />
  </form>
</div>
</main>
  );
}

export default EditarPerro;
