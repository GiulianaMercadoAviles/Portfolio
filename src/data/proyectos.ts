import type { Proyecto } from "../types/proyecto";

export const proyectos: Proyecto[] = [
  {
    id: "ding",
    nombre: "Ding",
    descripcion:
      "Plataforma de pedidos que conecta comerciantes, clientes y repartidores: dashboard con estadísticas, catálogo de productos, seguimiento de pedidos en tiempo real y rutas optimizadas para entregas.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "JWT"],
    categoria: "destacado",
    previewType: "foto",
    previewFront: "/assets/fotos/batalla-naval/portada.png",
    previewBack: "/assets/fotos/batalla-naval/portada.png",
    detalle: {
      resumen:
        "Ding conecta a comerciantes con sus clientes y facilita la gestión de pedidos, productos y entregas. El frontend está hecho con Next.js y TypeScript, y el backend es una API RESTful en Laravel con autenticación JWT. Las pantallas se diseñaron primero en Figma.",
      funcionalidades: [
        "Comerciantes: dashboard con estadísticas en tiempo real y gestión de productos y menús",
        "Comerciantes: seguimiento de pedidos, estado de entregas y gestión de repartidores",
        "Clientes: catálogo digital, pedidos en línea y seguimiento en tiempo real",
        "Clientes: historial de compras, valoraciones y reseñas",
        "Repartidores: gestión de entregas con rutas optimizadas y notificaciones",
      ],
    },
  },
  {
    id: "ruteando",
    nombre: "Ruteando",
    descripcion:
      "Sistema de gestión de maquinaria vial: registro de máquinas, gestión de obras, asignación de maquinaria a proyectos y control de mantenimientos preventivos y correctivos.",
    stack: ["Laravel", "MySQL", "Blade", "PHP"],
    categoria: "secundario",
    previewType: "foto",
    previewFront: "/images/ruteando/Ruteando-welcome.png",
    previewBack: "/images/ruteando/Ruteando-dashboard.png",
    detalle: {
      resumen:
        "Sistema integral para optimizar la administración de activos, obras y mantenimientos, con supervisión de todo el ciclo de vida de la maquinaria pesada en proyectos viales. Incluye identidad de marca propia diseñada en Figma.",
      funcionalidades: [
        "Parque de maquinaria: estado, modelo, marca y kilometraje, con alta, edición y baja",
        "Gestión de obras viales: registro, edición y finalización",
        "Asignación de máquinas a obras en curso, con reportes mensuales",
        "Historial de mantenimientos preventivos y correctivos, con aviso de cuándo corresponde uno",
        "Login y registro con control de acceso a cada funcionalidad",
      ],
    },
  },
  {
    id: "classpoint",
    nombre: "ClassPoint",
    descripcion:
      "Sistema de gestión escolar para administradores y profesores: gestión de instituciones, materias, alumnos, asistencia y calificaciones.",
    stack: ["PHP", "MySQL"],
    categoria: "secundario",
    previewType: "foto",
    previewFront: "/assets/fotos/batalla-naval/portada.png",
    previewBack: "/assets/fotos/batalla-naval/portada.png",
    detalle: {
      resumen:
        "Sistema de gestión escolar que permite a los administradores manejar múltiples instituciones, y a los profesores llevar el registro y seguimiento de las materias que tienen asignadas.",
      funcionalidades: [
        "Administradores: alta, edición y baja de instituciones, materias, profesores y alumnos",
        "Asignación de materias a profesores e inscripción de alumnos",
        "Parámetros de evaluación configurables por institución",
        "Profesores: toma de asistencia en clase y calificación de alumnos",
        "Cálculo del estado académico de cada alumno",
      ],
    },
  },
  {
    id: "suma-y-resta",
    nombre: "Suma y Resta",
    descripcion:
      "Juego de operaciones matemáticas contrarreloj: números aleatorios entre -10 y 10, 60 segundos para resolver y una interfaz responsive.",
    stack: ["JavaScript", "HTML", "CSS"],
    categoria: "secundario",
    previewType: "foto",
    previewFront: "",
    previewBack: "/images/batalla-naval/batalla-naval-portada.png",
    detalle: {
      resumen:
        "Un juego simple de suma y resta con un toque desafiante: hay que resolver las operaciones rápido para obtener el resultado correcto y ganar. Las pantallas se diseñaron primero en Figma.",
      funcionalidades: [
        "Generación de números aleatorios entre -10 y 10",
        "Cronómetro de 60 segundos para completar el juego",
        "Interfaz responsive que se adapta a distintos tamaños de pantalla",
      ],
    },
  },
  {
    id: "batalla-naval",
    nombre: "Batalla naval",
    descripcion:
      "Versión del clásico juego de batalla naval con tablero de 10x10, cronómetro y pantalla de derrota con opción de jugar de nuevo.",
    stack: ["JavaScript", "HTML", "CSS"],
    categoria: "secundario",
    previewType: "foto",
    previewFront: "/images/batalla-naval/batalla-naval-inicio.png",
    previewBack: "/images/batalla-naval/batalla-naval-tablero.png",
    detalle: {
      resumen:
        "Versión web del clásico juego de batalla naval, con una ambientación visual marina y partidas contrarreloj.",
      funcionalidades: [
        "Tablero de 10x10 con coordenadas de la A a la J y del 1 al 10",
        "Cronómetro: si se agota el tiempo, aparece la pantalla de derrota",
        "Opción de jugar de nuevo al terminar la partida",
      ],
    },
  },
];
