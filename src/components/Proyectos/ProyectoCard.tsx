import { IconPlayerPlayFilled } from "@tabler/icons-react";
import type { Proyecto } from "../../types/proyecto";
import "./ProyectoCard.css";

interface ProyectoCardProps {
  proyecto: Proyecto;
  destacado?: boolean;
  onClick?: () => void;
}

function ProyectoCard({ proyecto, destacado = false, onClick }: ProyectoCardProps) {
  const isPractica = proyecto.categoria === "practica";

  return (
    <article className={`proyecto-card ${destacado ? "destacado" : ""} ${isPractica ? "practica" : ""}`}>

      <div className="proyecto-info">
        <h3>{proyecto.nombre}</h3>

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <button className="pill-btn" onClick={onClick}>Ver más</button>
          </div>
      </div>

      <div className="proyecto-media">
        {proyecto.previewType === "video" ? (
          <div className="play-box" onClick={onClick} style={{ cursor: "pointer" }}>
            <IconPlayerPlayFilled size={32} color="white" />
          </div>
        ) : proyecto.previewType === "foto" ? (
          <div className="image-composition">
            <div className="image-backdrop">
              <img src={proyecto.previewBack} alt={proyecto.nombre} className="image-back" />
            </div>
            <img src={proyecto.previewFront} alt={proyecto.nombre} className="image-front" />
          </div>
        ) : (
          <div className="image-composition">
            <div className="image-backdrop"></div>
            <div className="image-front fallback">
            </div>
          </div>
        )}
      </div>

    </article>
  );
}

export default ProyectoCard;