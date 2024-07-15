import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  
  // Función para llevar al usuario al inicio de la página

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__logo">
          {/* Enlace al inicio de la página con logo */}
          <Link to="/" onClick={scrollToTop}>
            <img
              src="logo.png"
              alt="Logo de Adogtame"
              className="footer__logoImagen"
            />
          </Link>{" "}
        </div>
        <div className="footer__rrss">
          <a href="#" target="_blank" className="footer__rrssEnlace">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" className="footer__rrssEnlace">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" className="footer__rrssEnlace">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" className="footer__rrssEnlace">
            <FaTiktok />
          </a>
        </div>
        <div className="footer__copyright">&copy; 2024 Adogtame</div>
      </div>
      <div className="footer__paginas">
        <a href="#" target="_blank" className="footer__Pag">
          Política de privacidad
        </a>
        <a href="#" target="_blank" className="footer__Pag">
          Términos y condiciones
        </a>
        <a href="#" target="_blank" className="footer__Pag">
          Política de cookies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
