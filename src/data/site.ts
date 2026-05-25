/**
 * Configuración general del sitio "Historias".
 * Edita aquí los datos públicos, los enlaces sociales y los textos
 * que aparecen en la portada, en el footer y en metadatos SEO.
 */

export const site = {
  /** Nombre público del sitio */
  name: "Historias",
  /** Nombre que aparece en portada y firma */
  author: "Antonio A. Peña Galindo",
  /** Iniciales / nombre corto para el logotipo y el header */
  short: "Historias",
  /** Frase de bienvenida principal (portada y meta description) */
  tagline:
    "Historias: un espacio para reunir escritura, archivo, memoria y reflexión sobre los pasados que siguen interrogando nuestro presente.",
  /** Descripción breve usada en SEO */
  description:
    "Bitácora académica y personal de Antonio A. Peña Galindo: historia, memoria, exilio paraguayo, cultura política latinoamericana y reflexión sobre la escritura del pasado.",
  /** Idioma principal del sitio */
  lang: "es",
  /** Locale para Open Graph */
  locale: "es_MX",
  /** URL pública del sitio. */
  url: "https://historias.pages.dev",
  /** Correo electrónico de contacto institucional. */
  email: "apenag@institutomora.edu.mx",
  /** Año de inicio del proyecto (para el copyright del footer) */
  startYear: 2026,
} as const;

/** Datos SEO por defecto que pueden sobrescribirse por página */
export const defaultSeo = {
  title: `${site.name} · ${site.author}`,
  description: site.description,
  ogImage: "/images/og-default.jpg",
  twitterCard: "summary_large_image",
} as const;

/**
 * Texto provisional de bienvenida (versión breve y versión extendida).
 * Cambia libremente sin tocar componentes.
 */
export const welcome = {
  short: site.tagline,
  long: "Historias es una bitácora personal de Antonio A. Peña Galindo. Aquí se reúnen notas de investigación, ensayos breves, reflexiones, materiales académicos y enlaces sobre historia, historiografía, memoria, exilio paraguayo, cultura política latinoamericana e inteligencia artificial aplicada a las humanidades.",
} as const;

/** Variantes alternativas para la frase de bienvenida (para A/B manual). */
export const taglineAlternatives = [
  "Una bitácora personal para pensar la historia, la memoria y las formas de escribir el pasado desde el presente.",
  "Historias: un espacio para reunir escritura, archivo, memoria y reflexión sobre los pasados que siguen interrogando nuestro presente.",
  "Un cuaderno abierto sobre historia, memoria, exilio, cultura política y las preguntas que todavía acompañan a la escritura del pasado.",
  "Entre archivos, lecturas y coyunturas: una bitácora personal para pensar históricamente el presente.",
  "Un espacio personal de escritura histórica, reflexión crítica y memoria latinoamericana.",
  "Notas, ensayos y materiales para pensar la historia como una práctica viva, crítica y situada.",
  "Historias mínimas, memorias largas: una bitácora sobre pasado, escritura y presente.",
  "Un archivo personal en construcción sobre historia, memoria, exilio y cultura política latinoamericana.",
  "Una página para pensar el pasado sin clausurarlo: historia, archivos, memoria y escritura crítica.",
  "Historias: una bitácora académica y personal sobre las formas en que el pasado permanece, disputa y se escribe.",
] as const;
