import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function NuevoGato() {
    // Define el estado inicial del nuevo gato usando useState
    const [nuevoGato, setNuevoGato] = useState({
        nombre: "",
        descripcion: "",
        raza: "",
        edad: 0,
        genero: "",
        imagen: ""
    });

    const navigate = useNavigate();

    const handleCambio = (e) => {
        const { name, value } = e.target;
        setNuevoGato({ ...nuevoGato, [name]: value }); // Actualiza el estado del nuevo gato
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const opciones = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoGato)
        };
        // Realiza una solicitud fetch para añadir el nuevo gato
        fetch("http://localhost:3000/gatos", opciones)
            .then(res => res.json())
            .then(data => {
              if (data.status === "okay") { // Si la respuesta es okay, te dirige a la página principal
                navigate("/"); 
                }
            })
            .catch(error => {
                console.error("Error al añadir nuevo gato:", error);
            });
    };

    return (
    <main className='nuevo'>
        <Header/>
        <div className='nuevoAnimal'>
          <h2 className='titulo__nuevoAnimal'>Nuevo gato</h2>
          <form onSubmit={handleSubmit} className='formulario__nuevoAnimal'>
            <label htmlFor='nombre' className='etiqueta__nuevoAnimal'>
              Nombre:
            </label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              value={nuevoGato.nombre}
              onChange={handleCambio}
              required
              className='input__nuevoAnimal'
            />
            <br />
            <label htmlFor='descripcion' className='etiqueta__nuevoAnimal'>
              Descripción:
            </label>
            <textarea
              id='descripcion'
              name='descripcion'
              value={nuevoGato.descripcion}
              onChange={handleCambio}
              required
              className='textarea__nuevoAnimal'
            />
            <br />
            <label htmlFor='raza' className='etiqueta__nuevoAnimal'>
              Raza:
            </label>
            <input
              type='text'
              id='raza'
              name='raza'
              value={nuevoGato.raza}
              onChange={handleCambio}
              required
              className='input__nuevoAnimal'
            />
            <br />
            <label htmlFor='edad' className='etiqueta__nuevoAnimal'>
              Edad:
            </label>
            <input
              type='number'
              id='edad'
              name='edad'
              value={nuevoGato.edad}
              onChange={handleCambio}
              required
              className='input__nuevoAnimal'
            />
            <br />
            <label htmlFor='genero' className='etiqueta__nuevoAnimal'>
              Género:
            </label>
            <select
              id='genero'
              name='genero'
              value={nuevoGato.genero}
              onChange={handleCambio}
              required
              className='select__nuevoAnimal'
            >
              <option value='Macho'>Macho</option>
              <option value='Hembra'>Hembra</option>
            </select>
            <br />
            <label htmlFor='imagen' className='etiqueta__nuevoAnimal'>
              URL de la imagen:
            </label>
            <input
              type='text'
              id='imagen'
              name='imagen'
              value={nuevoGato.imagen}
              onChange={handleCambio}
              required
              className='input__nuevoAnimal'
            />
            <br />
            <button type='submit' className='boton__nuevoAnimal'>
              Añadir gato
            </button>
          </form>
        </div>
      </main>
  );
}

export default NuevoGato;
