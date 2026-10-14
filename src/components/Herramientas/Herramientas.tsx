import "./Herramientas.css";

type ColorChip = "vino" | "azul" | "ocre" | "rosa" | "salvia";

interface Herramienta {
  nombre: string;
  color: ColorChip;
}

const herramientas: Herramienta[] = [
  { nombre: "HTML", color: "vino" },
  { nombre: "CSS", color: "azul" },
  { nombre: "JavaScript", color: "ocre" },
  { nombre: "TypeScript", color: "rosa" },
  { nombre: "React", color: "salvia" },
  { nombre: "Node.js", color: "vino" },
  { nombre: "PHP", color: "salvia" },
  { nombre: "Laravel", color: "azul" },
  { nombre: "Tailwind", color: "ocre" },
  { nombre: "Figma", color: "rosa" },
  { nombre: "MySQL", color: "salvia" }
];

const herramientasLoop = [...herramientas, ...herramientas];

function Herramientas() {
  return (
    <section className="herramientas" id="herramientas">
      <h2>Herramientas</h2>
      <div className="herramientas-marquee">
        <div className="herramientas-track">
          {herramientasLoop.map(({ nombre, color }, indice) => (
            <span
              key={`${nombre}-${indice}`}
              className={`herramienta-chip herramienta-chip--${color}`}
            >
              {nombre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Herramientas;
