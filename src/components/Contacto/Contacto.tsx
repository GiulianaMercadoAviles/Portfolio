import { IconMail, IconMapPin, IconBrandLinkedin } from "@tabler/icons-react";
import "./Contacto.css";
import ContactForm from "./ContactoForm";

interface ContactoProps {
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  location: string;
}

function Contacto({ email, linkedinUrl, location }: ContactoProps) {
  return (
    <section className="contacto bg-dots-soft" id="contacto">
      <div className="contacto-card clean-card">
        
        <div className="contacto-split">
          <div className="contacto-info">
            <h2>¿Necesitas más información? Contáctame</h2>
            <p className="contacto-sub">Me encantaría escuchar sobre tu próximo proyecto o idea.</p>
            
            <div className="contacto-items">
              <div className="contacto-item">
                <div className="contacto-icono">
                  <IconMail size={20} stroke={1.5} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{email}</p>
                </div>
              </div>
              
              {linkedinUrl && (
                <div className="contacto-item">
                  <div className="contacto-icono">
                    <IconBrandLinkedin size={20} stroke={1.5} />
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer">Ver perfil</a>
                  </div>
                </div>
              )}

              <div className="contacto-item">
                <div className="contacto-icono">
                  <IconMapPin size={20} stroke={1.5} />
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>{location}</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contacto;
