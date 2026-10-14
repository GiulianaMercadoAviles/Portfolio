import { IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import "./Footer.css";

interface FooterProps {
    email: string;
    linkedinUrl?: string;
    githubUrl?: string;
}

function Footer({ email, linkedinUrl, githubUrl }: FooterProps) {
  return (
    <section className="footer bg-dots-soft" id="footer">
        
        <div className="footer-split">
          <div className="footer-info">
            <h2>Giuliana Magali Mercado Aviles</h2>
            <p className="footer-sub">Programadora y tester, apasionada por la innovación y la tecnologia</p>
          </div>

          <div className="footer-info">
            <h2>Contacto</h2>
            <div className="footer-items">
                {email && (
                <div className="footer-item">
                  <div className="footer-icono">
                    <a href={email} target="_blank" rel="noreferrer"><IconMail size={20} stroke={1.5} /></a>
                  </div>
                </div>
              )}


              {githubUrl && (
                <div className="footer-item">
                  <div className="footer-icono">
                    <a href={githubUrl} target="_blank" rel="noreferrer"><IconBrandGithub size={20} stroke={1.5} /></a>
                  </div>
                </div>
              )}
              
              {linkedinUrl && (
                <div className="footer-item">
                  <div className="footer-icono">
                    <a href={linkedinUrl} target="_blank" rel="noreferrer"><IconBrandLinkedin size={20} stroke={1.5} /></a>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="footer-info">
            <h2>Secciones</h2>
            <div className="footer-items secciones-footer">
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#herramientas">Herramientas</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <p>© 2024 Giuliana Mercado Aviles. Todos los derechos reservados.</p>
        </div>
    </section>
  );
}

export default Footer;