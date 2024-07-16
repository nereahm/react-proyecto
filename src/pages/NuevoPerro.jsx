import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
// Misma estructura que NuevoGato
function NuevoPerro() {
    const [nuevoPerro, setNuevoPerro] = useState({
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
        setNuevoPerro({ ...nuevoPerro, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://express-proyecto.vercel.app/perros", nuevoPerro);
            if (response.data.status === "okay") {
                navigate("/"); 
            }
        } catch (error) {
            console.error("Error al añadir nuevo perro:", error);
        }
    };

    return (
        <main className='nuevo'>
            <Header/>
            <div className='nuevoAnimal'>
            <h2 className='titulo__nuevoAnimal'>Nuevo perro</h2>
            <form onSubmit={handleSubmit} className='formulario__nuevoAnimal'>
                <label htmlFor="nombre" className='etiqueta__nuevoAnimal'>Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nuevoPerro.nombre} onChange={handleCambio} required className='input__nuevoAnimal'/>
                <br />
                <label htmlFor="descripcion" className='etiqueta__nuevoAnimal'>Descripción:</label>
                <textarea id="descripcion" name="descripcion" value={nuevoPerro.descripcion} onChange={handleCambio} required className='textarea__nuevoAnimal'/>
                <br />
                <label htmlFor="raza" className='etiqueta__nuevoAnimal'>Raza:</label>
                <input type="text" id="raza" name="raza" value={nuevoPerro.raza} onChange={handleCambio} required className='input__nuevoAnimal'/>
                <br />
                <label htmlFor="edad" className='etiqueta__nuevoAnimal'>Edad:</label>
                <input type="number" id="edad" name="edad" value={nuevoPerro.edad} onChange={handleCambio} required className='input__nuevoAnimal'/>
                <br />
                <label htmlFor="genero" className='etiqueta__nuevoAnimal'>Género:</label>
                <select id="genero" name="genero" value={nuevoPerro.genero} onChange={handleCambio} required className='select__nuevoAnimal'>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </select>
                <br />
                <label htmlFor="imagen" className='etiqueta__nuevoAnimal'>URL de la imagen:</label>
                <input type="text" id="imagen" name="imagen" value={nuevoPerro.imagen} onChange={handleCambio} required className='input__nuevoAnimal'/>
                <br />
                <button type="submit" className='boton__nuevoAnimal'>Añadir perro</button>
            </form>
            </div>
        </main>
    );
}

export default NuevoPerro;
