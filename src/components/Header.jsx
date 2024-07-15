import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="header__imagen" />
        </Link>{" "}
        <nav className="header__nav">
          <ul className="header__lista">
            <li
              className={`header__elementoLista ${
                // Asigna la clase "active"
                // si la ruta actual (location.pathname) es exactamente "/"
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="header__link">
                Inicio
              </Link>
            </li>
            <li
              className={`header__elementoLista ${
                // Asigna la clase "active"
                // si la ruta actual (location.pathname) es exactamente "/adoptame"
                location.pathname === "/adoptame" ? "active" : ""
              }`}
            >
              <Link to="/adoptame" className="header__link">
                Adóptame
              </Link>
            </li>
            <li
              className={`header__elementoLista ${
                // Asigna la clase "active"
                // si la ruta actual (location.pathname) es exactamente "/quienes-somos"
                location.pathname === "/quienes-somos" ? "active" : ""
              }`}
            >
              <Link to="/quienes-somos" className="header__link">
              Quiénes somos
              </Link>
            </li>
            <li
              className={`header__elementoLista ${
                // Asigna la clase "active"
                // si la ruta actual (location.pathname) es exactamente "/contacto"
                location.pathname === "/contacto" ? "active" : ""
              }`}
            >
              <Link to="/contacto" className="header__link">
              Contacto
              </Link>
            </li>
            <li className="header__elementoLista boton__elementoLista">
              <Link to="/mi-cuenta" className="header__link">
                Mi cuenta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
