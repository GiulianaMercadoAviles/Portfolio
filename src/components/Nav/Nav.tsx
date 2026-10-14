import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo-container">
        <Link to="/" className="nav-logo">
          Giuliana.
        </Link>
      </div>

      <div className="nav-links">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#herramientas">Herramientas</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Nav;
