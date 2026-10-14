import { useState } from "react";
import { proyectos } from "../../data/proyectos";
import type { Proyecto } from "../../types/proyecto";
import ProyectoCard from "./ProyectoCard";
import ProyectoModal from "./ProyectoModal";
import "./Proyectos.css";

function Proyectos() {
  const [seleccionado, setSeleccionado] = useState<Proyecto | null>(null);

  const destacados = proyectos.filter((p) => p.categoria === "destacado");
  const secundarios = proyectos.filter((p) => p.categoria === "secundario");
  return (
    <section className="proyectos" id="proyectos">
      <div className="fondo-palabras">
        PROYECTOS PROYECTOS PROYECTOS<br />
        PROYECTOS PROYECTOS PROYECTOS<br />
        PROYECTOS PROYECTOS PROYECTOS
      </div>

      <div className="proyectos-container">
        <div className="proyectos-header">
          <h2>Mis Proyectos</h2>
        </div>

        <div className="proyectos-grid">
          {destacados.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              destacado
              onClick={() => setSeleccionado(proyecto)}
            />
          ))}
          {secundarios.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              onClick={() => setSeleccionado(proyecto)}
            />
          ))}
        </div>
      </div>

      {seleccionado && (
        <ProyectoModal
          proyecto={seleccionado}
          onClose={() => setSeleccionado(null)}
        />
      )}
    </section>
  );
}

export default Proyectos;
