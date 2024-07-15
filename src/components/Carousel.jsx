import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Carousel() {
  // Array de imágenes

let array = ['img1.png','img2.jpg','img3.png','img4.jpg','img5.png','img6.jpg','img7.png','img8.jpg']

const [cual, setCual] = useState(0);
// Función para avanzar en el carrusel
function adelante() {
  if (cual === array.length - 1) {
    // Si llegamos al final, volvemos al inicio
    setCual(0);
  } else {
    // Avanzamos al siguiente índice
    setCual(cual + 1);
  }
}

// Función para retroceder en el carrusel
function atras() {
  if (cual === 0) {
    // Si estamos al inicio, vamos al final del array
    setCual(array.length - 1);
  } else {
    // Retrocedemos al índice anterior
    setCual(cual - 1);
  }
}
  return (
    <section className='carousel'>
      <div className='carousel__contenedor'>
        <button type="button" className='carousel__btn' onClick={atras}><IoIosArrowBack /></button>
        <img src={array[cual]} alt="Carousel" className='carousel__img'/>
        <button type="button" className='carousel__btn' onClick={adelante}><IoIosArrowForward /></button>
      </div>
    </section>
  )
}

export default Carousel
