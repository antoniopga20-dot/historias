/**
 * Imágenes del carrusel/hero de la portada.
 *
 * Reemplaza estas rutas por imágenes reales con licencia verificada.
 * Mientras tanto, los archivos referenciados pueden no existir y el
 * componente HeroCarousel mostrará un fondo sobrio con overlay.
 *
 * Cuando agregues una imagen real, guárdala en /public/images/hero/
 * y consigna su fuente y licencia en /image-sources.md.
 */
export type HeroImage = {
  src: string;
  alt: string;
  /** Crédito breve (autor, repositorio, licencia). Se muestra discretamente si está presente. */
  credit?: string;
};

export const heroImages: HeroImage[] = [
  {
    src: "/images/hero/mexico-1970-placeholder.jpg",
    alt: "Ciudad de México hacia mediados de los años setenta. Imagen placeholder; pendiente sustituir por archivo con licencia verificada.",
    credit: "[PENDIENTE: insertar crédito y licencia]",
  },
  {
    src: "/images/hero/paraguay-1970-placeholder.jpg",
    alt: "Asunción durante los años de la dictadura de Stroessner. Imagen placeholder; pendiente sustituir por archivo con licencia verificada.",
    credit: "[PENDIENTE: insertar crédito y licencia]",
  },
  {
    src: "/images/hero/archive-placeholder.jpg",
    alt: "Sala de archivo histórico. Imagen placeholder; pendiente sustituir por archivo con licencia verificada.",
    credit: "[PENDIENTE: insertar crédito y licencia]",
  },
  {
    src: "/images/hero/newspaper-placeholder.jpg",
    alt: "Detalle de prensa histórica latinoamericana. Imagen placeholder; pendiente sustituir por archivo con licencia verificada.",
    credit: "[PENDIENTE: insertar crédito y licencia]",
  },
];

/** Duración (ms) que cada imagen permanece visible antes de la transición. */
export const heroIntervalMs = 7000;
