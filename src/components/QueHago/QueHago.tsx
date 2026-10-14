import { IconBug, IconCode, IconPalette } from "@tabler/icons-react";
import "./QueHago.css";

interface Pilar {
  id: string;
  etiqueta: string;
  Icono: typeof IconBug;
  descripcion?: string;
}

const pilares: Pilar[] = [
  { id: "qa", etiqueta: "QA / Testing", Icono: IconBug, descripcion: "Realizo pruebas exhaustivas para garantizar la calidad del software." },
  { id: "dev", etiqueta: "Desarrollo", Icono: IconCode, descripcion: "Desarrollo aplicaciones web y móviles con código limpio, escalable y eficiente." },
  { id: "ux", etiqueta: "Diseño UX/UI", Icono: IconPalette, descripcion: "Diseño de interfaces intuitivas y atractivas para mejorar la experiencia del usuario." },
];

function QueHago() {
  return (
    <section className="que-hago" id="que-hago">
      <h1>Qué hago</h1>
      <div className="que-hago-grid">
        {pilares.map(({ id, etiqueta, Icono, descripcion }) => (
          <div key={id} className="pilar">
            <Icono size={50} strokeWidth={1.5} aria-hidden="true" />
            <h2>{etiqueta}</h2>
            {descripcion && <p>{descripcion}</p>}
          </div>
        ))}
      </div>
    </section>

  );
}

export default QueHago;
