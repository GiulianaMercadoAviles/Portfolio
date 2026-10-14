export type CategoriaProyecto = "destacado" | "secundario" | "practica";
export type TipoPreview = "foto" | "video";

export interface DetalleProyecto {
  resumen: string;
  funcionalidades: string[];
}

export interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  stack: string[];
  categoria: CategoriaProyecto;
  previewType: TipoPreview;
  previewFront: string;
  previewBack: string;
  detalle?: DetalleProyecto;
  repoUrl?: string;
  demoUrl?: string;
}
