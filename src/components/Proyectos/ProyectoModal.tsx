import { useEffect, useId, useRef } from "react";
import { IconPlayerPlayFilled, IconX } from "@tabler/icons-react";
import type { Proyecto } from "../../types/proyecto";
import "./ProyectoModal.css";

interface ProyectoModalProps {
  proyecto: Proyecto;
  onClose: () => void;
}

function ProyectoModal({ proyecto, onClose }: ProyectoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const clickEmpezoEnFondo = useRef(false);
  const tituloId = useId();

  // Al montarse, abre el dialog como modal (fondo oscuro, foco atrapado, Esc cierra)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const cerrar = () => dialogRef.current?.close();

  const { detalle } = proyecto;

  return (
    <dialog
      ref={dialogRef}
      className="proyecto-modal"
      aria-labelledby={tituloId}
      onClose={onClose}
      onMouseDown={(e) => {
        clickEmpezoEnFondo.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (clickEmpezoEnFondo.current && e.target === e.currentTarget) cerrar();
      }}
    >
      <button
        type="button"
        className="proyecto-modal-cerrar"
        aria-label="Cerrar"
        onClick={cerrar}
      >
        <IconX size={20} stroke={1.5} />
      </button>

      <div className="proyecto-modal-contenido">
        <div className="proyecto-modal-preview">
          {proyecto.previewFront === "video" ? (
            <span className="proyecto-modal-play" aria-hidden="true">
              <IconPlayerPlayFilled size={20} />
            </span>
          ) : (
            <img src={proyecto.previewFront} alt={proyecto.nombre} className="imagen" />
          )}
        </div>

        <h3 id={tituloId}>{proyecto.nombre}</h3>

        <ul className="proyecto-modal-stack">
          {proyecto.stack.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>

        <p className="proyecto-modal-resumen">
          {detalle ? detalle.resumen : proyecto.descripcion}
        </p>

        {detalle && (
          <>
            <h4>Qué hace</h4>
            <ul className="proyecto-modal-lista">
              {detalle.funcionalidades.map((funcionalidad) => (
                <li key={funcionalidad}>{funcionalidad}</li>
              ))}
            </ul>
          </>
        )}

        {(proyecto.repoUrl || proyecto.demoUrl) && (
          <div className="proyecto-modal-links">
            {proyecto.repoUrl && (
              <a href={proyecto.repoUrl} target="_blank" rel="noreferrer">
                Ver código
              </a>
            )}
            {proyecto.demoUrl && (
              <a href={proyecto.demoUrl} target="_blank" rel="noreferrer">
                Ver demo
              </a>
            )}
          </div>
        )}
      </div>
    </dialog>
  );
}

export default ProyectoModal;
