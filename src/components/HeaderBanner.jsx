import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderBanner() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // Estado para determinar si la pantalla es menor a 1024px
  const banners = [
    "adogtame-banner1.png",
    "adogtame-banner2.png",
    "adogtame-banner3.png",
  ];
  const location = useLocation();

  useEffect(() => {
    // Efecto para manejar el cambio de tamaño de la ventana y la rotación de banners
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Actualiza el estado de isMobile según el ancho de la ventana
    };

    window.addEventListener("resize", handleResize);

    let interval;
    if (!isMobile) {
    // Si no es móvil, inicia un intervalo para rotar los banners cada 7.5 segundos
      interval = setInterval(() => {
        setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 7500);
    } else {
      setBannerIndex(0); // Si es móvil, establece el índice del banner en 0 (primer banner, el de bienvenida)
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (interval) clearInterval(interval);
    };
  }, [isMobile, banners.length]);

  return (
    <header className="header headerBanner">
      <div className="header__content headerBanner__content">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="header__imagen" />
        </Link>
        <nav className="header__nav">
          <ul className="header__lista">
            <li
              className={`header__elementoLista ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="header__link">
                Inicio
              </Link>
            </li>
            <li
              className={`header__elementoLista ${
                location.pathname === "/adoptame" ? "active" : ""
              }`}
            >
              <Link to="/adoptame" className="header__link">
                Adóptame
              </Link>
            </li>
            <li
              className={`header__elementoLista ${
                location.pathname === "/quienes-somos" ? "active" : ""
              }`}
            >
              <Link to="/quienes-somos" className="header__link">
                Quiénes somos
              </Link>
            </li>
            <li
              className={`header__elementoLista ${
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
      <div className="header__banners">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index}`}
            className={`header__banner-img ${
              index === bannerIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </header>
  );
}

export default HeaderBanner;
