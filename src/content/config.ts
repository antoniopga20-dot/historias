import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const publicaciones = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum([
      "libro",
      "capitulo",
      "articulo-academico",
      "articulo-revista",
      "divulgacion",
      "columna",
      "publicacion-digital",
      "resena",
      "en-prensa",
      "otro",
    ]),
    authors: z.string().optional(),
    year: z.union([z.number(), z.string()]).optional(),
    venue: z.string().optional(),
    details: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    status: z.enum(["publicado", "en prensa", "en revisión", "en preparación"]).default("publicado"),
    draft: z.boolean().default(false),
  }),
});

const actividades = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    kind: z.enum([
      "congreso",
      "conferencia",
      "mesa-redonda",
      "entrevista",
      "curso",
      "taller",
      "organizacion",
      "participacion",
      "estancia",
      "proyecto",
    ]),
    date: z.coerce.date().optional(),
    place: z.string().optional(),
    details: z.string().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, publicaciones, actividades };
