import React from 'react'
import { useUser } from '../context/UsuarioContext'
import { Navigate } from 'react-router-dom';

function RutaPrivada({componente}) {

const {usuario} = useUser();

  return (
    <>

    {/* Condicional para renderizar el componente o redirigir a /login si usuario es null */}
    {usuario == null ?
    <Navigate to='/login'/> // Redirige a /login si usuario es null
    :
    componente // Renderiza el componente recibido como prop
    }
    </>
  )
}

export default RutaPrivada
