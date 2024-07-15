import React, { createContext, useContext, useState, useEffect } from 'react';

const UsuarioContext = createContext();

export const useUser = () => {
    return useContext(UsuarioContext);
}

// Componente proveedor que envuelve la aplicación
export const UserProvider = ({ children }) => {
    // Estado para mantener la información del usuario
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('usu');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUsuario(parsedUser);
            } catch (error) {
                console.error('Error al analizar el usuario almacenado:', error);
                // Limpiar el almacenamiento local en caso de error de parsing
                localStorage.removeItem('usu');
            }
        }
    }, []);

    function login(datosUsu) {
        try {
            localStorage.setItem('usu', JSON.stringify(datosUsu));
            setUsuario(datosUsu);
        } catch (error) {
            console.error('Error al almacenar usuario', error);
        }
    }

    function logout() {
        try {
            localStorage.removeItem('usu');
            setUsuario(null);
        } catch (error) {
            console.error('Error al borrar usuario', error);
        }
    }

    return (
        <UsuarioContext.Provider value={{ usuario, login, logout }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioContext;
