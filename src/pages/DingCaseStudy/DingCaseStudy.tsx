import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Marquee from "../../components/Marquee/Marquee";
import "./DingCaseStudy.css";

function DingCaseStudy() {
  return (
    <article className="caso-estudio-page">
      <Link to="/" className="btn-volver pill">
        <IconArrowLeft size={18} stroke={1.5} /> Volver al inicio
      </Link>

      {/* Hero Section */}
      <section className="cs-hero bg-grid" style={{ position: "relative" }}>
        <div className="fondo-palabras">
          DING DING DING<br/>
          DING DING DING<br/>
          DING DING DING
        </div>
        <div className="cs-hero-content">
          <span className="cs-tag handwritten">¡plataforma full-stack!</span>
          <h1 className="titulo-gigante" style={{ marginBottom: "2rem" }}>Ding.</h1>
          
          <div className="cs-mockup-placeholder">
            <p>📸 Imagen principal de la app (Home)</p>
          </div>
        </div>
      </section>
      <Marquee text="DING CASE STUDY ✦ FULL STACK PLATFORM ✦ " />

      {/* Bento Box Section */}
      <section className="cs-bento-section">
        <div className="cs-bento-grid">
          
          <div className="bento-box bg-chocolate text-light">
            <h2>El Proyecto</h2>
            <p>Plataforma de pedidos completa, desde la experiencia de usuario (UX) documentada en Figma, hasta el desarrollo robusto en el frontend y backend.</p>
          </div>

          <div className="bento-box bg-yellow">
            <h2>Mi Rol</h2>
            <p className="rol-text">Full Stack Developer</p>
          </div>

          <div className="bento-box bg-blue cs-stack-box">
            <h2>Stack Tecnológico</h2>
            <div className="pills-container">
              <span className="pill pill-soft">Next.js 14</span>
              <span className="pill pill-soft">React 18</span>
              <span className="pill pill-soft">TypeScript</span>
              <span className="pill pill-soft">React Query</span>
              <span className="pill pill-soft">React Hook Form</span>
              <span className="pill pill-soft">Zod</span>
              <span className="pill pill-soft">PHP 8.2+</span>
              <span className="pill pill-soft">Laravel 12</span>
              <span className="pill pill-soft">Sanctum</span>
              <span className="pill pill-soft">Spatie</span>
              <span className="pill pill-soft">MySQL</span>
            </div>
          </div>

          <div className="bento-box bg-pink cs-integraciones-box">
            <h2>Integraciones Clave</h2>
            <ul>
              <li>Pasarela de pagos con <strong>Mercado Pago</strong></li>
              <li>Geolocalización con <strong>React Leaflet</strong></li>
              <li>Generación de reportes PDF con <strong>Dompdf</strong></li>
              <li>Colas de correo asíncronas vía <strong>SMTP</strong></li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* Galería de proceso */}
      <section className="cs-gallery-section">
        <h2 className="titulo-gigante" style={{fontSize: "3.5rem", marginBottom: "3rem"}}>El Proceso</h2>
        
        <div className="cs-gallery-grid">
          <div className="clean-bento-card">
            <div className="cs-mockup-placeholder">
              <p>📸 Captura de Figma o UI</p>
            </div>
            <h3>UX / UI Documentado</h3>
            <p>Proceso completo de diseño <span className="resaltado-suave">centrado en el usuario</span> para maximizar la conversión de pedidos.</p>
          </div>

          <div className="clean-bento-card rotada-inversa">
            <div className="cs-mockup-placeholder">
              <p>📸 Captura de Backend/Código</p>
            </div>
            <h3>Arquitectura Sólida</h3>
            <p>API RESTful robusta, con <span className="resaltado-suave">autenticación segura</span> (Sanctum) y protección de datos mediante Rate Limiting.</p>
          </div>
        </div>
      </section>

      {/* Footer del caso */}
      <section className="cs-footer">
        <h2 className="titulo-gigante" style={{ fontSize: "3rem", marginBottom: "2rem" }}>¿Quieres ver el código?</h2>
        <a href="https://github.com/GiulianaMercadoAviles" target="_blank" rel="noreferrer" className="pill btn-soft" style={{ fontSize: "1.2rem", padding: "1rem 2.5rem", textDecoration: "none", display: "inline-block" }}>
          Ver Repositorio
        </a>
      </section>

    </article>
  );
}

export default DingCaseStudy;
