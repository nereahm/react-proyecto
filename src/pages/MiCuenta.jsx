import React from 'react';
import Header from '../components/Header';
import Logout from '../components/Logout';
import { useUser } from '../context/UsuarioContext';
import { Navigate } from 'react-router-dom';

function MiCuenta() {
  const { usuario } = useUser(); // Obtiene el usuario del contexto

  // Verificar si el usuario está autenticado
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, mostrar la página de MiCuenta con el Header y el Logout
  return (
    <>
      <Header />
      <Logout />
    </>
  );
}

export default MiCuenta;
