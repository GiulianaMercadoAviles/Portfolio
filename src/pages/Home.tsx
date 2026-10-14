import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Sobre from "../components/Sobre/Sobre";
import Herramientas from "../components/Herramientas/Herramientas";
import Proyectos from "../components/Proyectos/Proyectos";
import Contacto from "../components/Contacto/Contacto";
import Marquee from "../components/Marquee/Marquee";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const seccion = document.getElementById(location.hash.slice(1));
    seccion?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Hero
        nombre="GIULIANA"
        apellido="MERCADO AVILES"
        tagline="Analista y desarrolladora de software"
      />
      <Marquee text="TESTER ✦ QA ✦ FULL STACK DEVELOPER ✦ CREATIVE THINKER" />
      <Sobre />
      <section className="frase-gigante-container">
        <h4 className="frase-gigante">
          NO SOLO OFREZCO CÓDIGO, <br/> 
          SINO LA <span className="palabra-rosa" style={{color: "var(--color-pink-intense)", fontFamily: "var(--font-heading)"}}>OPORTUNIDAD</span> <br/> 
          DE INNOVAR.
        </h4>
      </section>
      <Herramientas />
      <Proyectos />
      <Contacto 
        email="giulianamercadoaviles@gmail.com" 
        githubUrl="https://github.com/GiulianaMercadoAviles"
        location="Gualeguaychú, Entre Ríos, Argentina" />
      <Footer 
        email="mailto:giulianamercadoaviles@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/giuliana-magali-mercado-aviles"
        githubUrl="https://github.com/GiulianaMercadoAviles"
      />
    </>
  );
}

export default Home;