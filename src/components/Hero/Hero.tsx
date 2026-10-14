import "./Hero.css";

interface HeroProps {
  nombre: string;
  apellido: string;
  tagline: string;
}

function Hero({ nombre, apellido, tagline }: HeroProps) {
  return (
    <section className="hero bg-dots-soft" id="inicio">
      
      <div className="hero-content">
        <div className="hero-name-container">
          <h1 className="hero-name-primary">{nombre}</h1>
          <h2 className="hero-name-secondary">{apellido}</h2>
        </div>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn-primary pill">
            Ver Proyectos
          </a>
          <a href="#contacto" className="btn-secondary pill">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
