/**
 * Categorías del blog.
 * Mantén `slug` en minúsculas, sin acentos y separado por guiones:
 * se usa para construir URLs y filtros.
 */
export type Category = {
  slug: string;
  name: string;
  description: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "novedades",
    name: "Novedades",
    description: "Actualizaciones, anuncios y notas recientes del sitio.",
    featured: true,
  },
  {
    slug: "historia",
    name: "Historia",
    description: "Reflexiones generales sobre el oficio y los temas de la disciplina.",
    featured: true,
  },
  {
    slug: "historiografia",
    name: "Historiografía",
    description: "Lecturas, debates y problemas de la escritura de la historia.",
    featured: true,
  },
  {
    slug: "metodologia-historica",
    name: "Metodología histórica",
    description: "Notas sobre métodos, fuentes y formas de hacer historia.",
  },
  {
    slug: "exilio-paraguayo",
    name: "Exilio paraguayo",
    description: "Investigación sobre el exilio paraguayo y sus archivos.",
    featured: true,
  },
  {
    slug: "memoria-historica",
    name: "Memoria histórica",
    description: "Reflexiones sobre memoria, olvido y disputas por el pasado.",
  },
  {
    slug: "cultura-politica-latinoamericana",
    name: "Cultura política latinoamericana",
    description: "Análisis sobre cultura política, dictaduras y democracias en la región.",
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    description: "Historia, política y cultura de Paraguay.",
  },
  {
    slug: "mexico-america-latina",
    name: "México y América Latina",
    description: "Vínculos entre México y América Latina vistos desde la historia.",
  },
  {
    slug: "inteligencia-artificial-y-humanidades",
    name: "Inteligencia artificial y humanidades",
    description: "Notas sobre IA, humanidades digitales y trabajo historiográfico.",
    featured: true,
  },
  {
    slug: "archivos-y-fuentes",
    name: "Archivos y fuentes",
    description: "Bitácora de archivo: hallazgos, problemas y preguntas.",
    featured: true,
  },
  {
    slug: "escritura-academica",
    name: "Escritura académica",
    description: "Apuntes sobre el oficio de escribir investigación.",
  },
  {
    slug: "opinion-personal",
    name: "Opinión personal",
    description: "Comentarios y opiniones personales sobre coyuntura y debate público.",
  },
  {
    slug: "reflexiones",
    name: "Reflexiones",
    description: "Pensamientos breves, divagaciones y notas abiertas.",
  },
  {
    slug: "historia-inmediata",
    name: "Historia inmediata",
    description: "Pensar el presente como objeto historizable.",
  },
  {
    slug: "ego-historia",
    name: "Ego-historia",
    description: "Notas autobiográficas sobre la propia formación como historiador.",
  },
  {
    slug: "resenas",
    name: "Reseñas",
    description: "Reseñas de libros, exposiciones, archivos y documentales.",
  },
  {
    slug: "divulgacion-historica",
    name: "Divulgación histórica",
    description: "Textos breves dirigidos a un público amplio.",
  },
];

/** Etiquetas iniciales sugeridas. Pueden ampliarse libremente. */
export const initialTags = [
  "Stroessner",
  "dictadura",
  "exilio",
  "memoria",
  "archivos",
  "Paraguay",
  "México",
  "Guerra Fría",
  "Operación Cóndor",
  "historiografía",
  "IA",
  "humanidades digitales",
  "escritura",
  "investigación",
  "Instituto Mora",
  "historia cultural",
  "cultura política",
  "América Latina",
  "archivo",
  "fuentes",
  "opinión",
  "divulgación",
] as const;

/** Devuelve la categoría correspondiente a un slug, si existe. */
export function findCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Devuelve un slug a partir de un nombre de categoría (tolerante a mayúsculas/acentos). */
export function categoryNameToSlug(name: string): string {
  const normalized = name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return normalized;
}
