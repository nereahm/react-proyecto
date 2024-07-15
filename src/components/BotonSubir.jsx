import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function BotonSubir() {

    // Función para desplazarse suavemente hacia arriba
    function subir() {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })    
    }
    // Función para mostrar u ocultar el botón basado en el desplazamiento vertical de la página
    function miraScroll() {
        if (document.documentElement.scrollTop > 20) {
            document.getElementById('botonSubir').style.display = 'block'
        } else {
            document.getElementById('botonSubir').style.display = 'none'
        }
    }

    window.onscroll= miraScroll;

  return (
    <>
      <button type="button" className='botonArriba' onClick={subir} id='botonSubir'><FaArrowUp /></button>
    </>
  )
}

export default BotonSubir