# Historias

**Blog personal académico de Antonio A. Peña Galindo.**
Una bitácora sobria y minimalista para reunir escritura, archivo, memoria y reflexión histórica.

> Historias: un espacio para reunir escritura, archivo, memoria y reflexión sobre los pasados que siguen interrogando nuestro presente.

---

## 1. Descripción del proyecto

`Historias` es un sitio web personal pensado como bitácora académica y archivo en construcción. Reúne entradas de blog, listado de publicaciones, registro de actividades, una página de datos/CV, una página de enlaces útiles y los canales de contacto del autor. Está construido con [Astro](https://astro.build), genera HTML estático y puede desplegarse gratis en varias plataformas.

## 2. Objetivo del sitio

- Publicar y archivar escritura propia, tanto académica como ensayística.
- Servir como espacio de reflexión sobre historia, memoria, exilio paraguayo, cultura política latinoamericana e IA en humanidades.
- Mantener una presencia digital académica clara, sobria y sin dependencia de servicios pagados.
- Crecer poco a poco, sin presión editorial, conservando una voz personal.

## 3. Tecnologías usadas

- **[Astro 4](https://astro.build)** — generador de sitios estáticos rápido y minimalista.
- **TypeScript** — para los archivos de datos y utilidades.
- **CSS plano con variables** — sin Tailwind ni dependencias de diseño.
- **Markdown** — para las entradas del blog y las publicaciones.
- **`@astrojs/sitemap`** — sitemap automático.
- **`@astrojs/rss`** — feed RSS automático para `/rss.xml`.

No requiere base de datos, CMS, ni servicios externos.

## 4. Estructura de carpetas

```
.
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── image-sources.md          ← registro de imágenes y licencias
├── PENDIENTES.md             ← lista de cosas por completar
├── netlify.toml              ← config opcional Netlify
├── vercel.json               ← config opcional Vercel
├── .github/workflows/
│   └── deploy.yml            ← deploy automático a GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── fonts/                ← coloca aquí archivos .woff2 si quieres fuentes locales
│   └── images/
│       ├── hero/             ← imágenes del carrusel de portada
│       ├── posts/            ← imágenes destacadas de entradas
│       └── profile/          ← fotografías personales
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── HeroCarousel.astro
    │   ├── PostCard.astro
    │   ├── CategoryCard.astro
    │   ├── PublicationItem.astro
    │   ├── ActivityItem.astro
    │   ├── SectionTitle.astro
    │   ├── Container.astro
    │   └── SocialLinks.astro
    ├── layouts/
    │   ├── BaseLayout.astro
    │   ├── BlogPostLayout.astro
    │   └── PageLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── sobre-mi.astro
    │   ├── publicaciones.astro
    │   ├── actividades.astro
    │   ├── datos.astro
    │   ├── enlaces.astro
    │   ├── contacto.astro
    │   ├── suscribete.astro
    │   ├── 404.astro
    │   ├── rss.xml.js
    │   └── blog/
    │       ├── index.astro
    │       └── [slug].astro
    ├── content/
    │   ├── config.ts
    │   ├── blog/             ← entradas del blog (.md)
    │   ├── publicaciones/    ← publicaciones (.md)
    │   └── actividades/      ← actividades académicas (.md)
    ├── data/
    │   ├── site.ts
    │   ├── navigation.ts
    │   ├── categories.ts
    │   ├── heroImages.ts
    │   └── socialLinks.ts
    ├── styles/
    │   ├── variables.css
    │   └── global.css
    └── utils/
        ├── formatDate.ts
        └── readingTime.ts
```

## 5. Cómo instalar dependencias

Necesitas **Node.js 18 o superior** (recomendado: 20). Instala los paquetes una sola vez:

```bash
npm install
```

## 6. Cómo ejecutar localmente

```bash
npm run dev
```

Abre <http://localhost:4321> en tu navegador. Los cambios se recargan automáticamente.

Otros comandos:

```bash
npm run build    # genera el sitio estático en /dist
npm run preview  # sirve /dist localmente para revisión
```

## 7. Cómo crear una nueva entrada del blog

1. Crea un archivo nuevo en `src/content/blog/` con la extensión `.md`. El nombre del archivo (sin la extensión) será el *slug* de la URL: `mi-entrada.md` → `/blog/mi-entrada`.
2. Empieza el archivo con el frontmatter:

```markdown
---
title: "Título de la entrada"
description: "Descripción breve, una o dos líneas."
date: 2026-06-01
category: "novedades"          # debe coincidir con un slug de src/data/categories.ts
tags: ["memoria", "exilio"]
cover: "/images/posts/mi-imagen.jpg"   # opcional
draft: false                   # ponlo en true para no publicar todavía
---

Aquí va el cuerpo de la entrada en Markdown.
```

3. Guarda el archivo. La entrada aparecerá en `/blog` y en la portada.

## 8. Cómo editar tus datos personales

Edita `src/data/site.ts`:

- `name`, `author`, `tagline`, `description`, `url`, `email`, etc.

Edita también las páginas con placeholders (todas marcadas con `[PENDIENTE: ...]`):

- `/src/pages/sobre-mi.astro` — semblanzas y trayectoria.
- `/src/pages/datos.astro` — CV navegable.
- `/src/pages/contacto.astro` — formas de contacto.

## 9. Cómo cambiar la frase de bienvenida

Edita `tagline` en `src/data/site.ts`. Hay además una lista de **alternativas** comentadas en el mismo archivo (`taglineAlternatives`); copia y pega la que quieras al campo principal.

## 10. Cómo modificar categorías

Edita `src/data/categories.ts`:

- Cada categoría tiene `slug` (URL-friendly), `name` y `description`.
- Marca `featured: true` para que aparezca en la portada.
- Los `slug` deben coincidir con los usados en el frontmatter `category:` de las entradas.

## 11. Cómo agregar imágenes

- Coloca el archivo en `public/images/`. Cualquier ruta bajo `public/` queda accesible desde la raíz del sitio.
- Una imagen guardada en `public/images/posts/mi-foto.jpg` se referencia como `/images/posts/mi-foto.jpg`.
- Registra siempre la fuente y la licencia en [`image-sources.md`](./image-sources.md).

## 12. Cómo cambiar las imágenes del carrusel de portada

Edita `src/data/heroImages.ts`:

```ts
export const heroImages: HeroImage[] = [
  { src: "/images/hero/mi-imagen-1.jpg", alt: "Descripción accesible", credit: "Autor, archivo, licencia" },
  { src: "/images/hero/mi-imagen-2.jpg", alt: "..." },
];
```

Y ajusta `heroIntervalMs` para acelerar o ralentizar el carrusel.

## 13. Cómo agregar una publicación

1. Crea un archivo en `src/content/publicaciones/` (por ejemplo `mi-articulo.md`).
2. Usa el frontmatter:

```markdown
---
title: "Título de la publicación"
type: "articulo-academico"        # libro | capitulo | articulo-academico | articulo-revista | divulgacion | columna | publicacion-digital | resena | en-prensa | otro
authors: "Antonio A. Peña Galindo"
year: 2026
venue: "Revista X"
details: "vol. 5, núm. 2, pp. 33-58"
url: "https://..."                 # opcional
pdf: "/docs/articulo.pdf"          # opcional
status: "publicado"                # publicado | en prensa | en revisión | en preparación
draft: false
---

Resumen breve o nota sobre la publicación.
```

## 14. Cómo agregar una actividad

1. Crea un archivo en `src/content/actividades/` (por ejemplo `congreso-lasa-2026.md`).
2. Usa el frontmatter:

```markdown
---
title: "Ponencia en LASA 2026"
kind: "congreso"           # congreso | conferencia | mesa-redonda | entrevista | curso | taller | organizacion | participacion | estancia | proyecto
date: 2026-06-12
place: "Ciudad de México"
details: "Mesa sobre exilio y memoria."
url: "https://..."
draft: false
---

Detalles adicionales en Markdown.
```

## 15. Cómo modificar colores

Edita `src/styles/variables.css`. Las variables semánticas (`--bg`, `--text`, `--link`, etc.) están centralizadas al principio del archivo. Cambia un valor y todo el sitio responderá.

## 16. Cómo modificar tipografías

Por defecto el sitio usa una cascada con fuentes del sistema. Para incorporar Philosopher / Creato Display:

1. Verifica que sus licencias permitan el uso en web.
2. Coloca los archivos `.woff2` en `public/fonts/`.
3. Descomenta los bloques `@font-face` que aparecen al inicio de `src/styles/global.css`.
4. Ajusta `--font-serif` y `--font-sans` en `variables.css` si quieres reordenar la cascada.

Alternativas gratuitas sugeridas (si las anteriores no se pueden usar):

- **Títulos:** Cormorant Garamond, Literata, Playfair Display, Lora.
- **Cuerpo:** Inter, Source Sans 3, IBM Plex Sans, Atkinson Hyperlegible, Noto Sans.

Casi todas están disponibles en [Google Fonts](https://fonts.google.com) o como repositorios open source. Si las cargas vía Google Fonts, agrega la etiqueta `<link>` en `BaseLayout.astro`.

## 17. Cómo hacer build

```bash
npm run build
```

El sitio quedará en la carpeta `dist/`. Puedes previsualizarlo localmente con `npm run preview`.

## 18. Desplegar gratis en Cloudflare Pages *(opción recomendada)*

1. Sube el repositorio a GitHub (o GitLab/Bitbucket).
2. Entra a <https://dash.cloudflare.com/?to=/:account/pages> y crea un nuevo proyecto.
3. Conecta tu repositorio.
4. En la configuración del build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Despliega. Tendrás una URL gratuita tipo `https://historias-apena.pages.dev`.
6. Actualiza `site:` en `astro.config.mjs` con la URL definitiva.

## 19. Desplegar gratis en GitHub Pages

Este repositorio incluye un workflow listo en `.github/workflows/deploy.yml`.

1. Sube el repositorio a GitHub.
2. En el repositorio, ve a **Settings → Pages → Build and deployment** y selecciona **GitHub Actions** como fuente.
3. Si publicas el sitio en una subruta (por ejemplo `https://usuario.github.io/historias`), abre `astro.config.mjs` y descomenta `base: "/historias"`. Cambia también `site:`.
4. Haz un commit a `main`. El workflow publicará automáticamente en `https://usuario.github.io/historias`.

> Si tu usuario de GitHub se llama `apena` y nombras el repo `apena.github.io`, la URL será `https://apena.github.io` (sin subruta y sin necesidad de modificar `base`).

## 20. Desplegar gratis en Netlify

1. Conecta el repo en <https://app.netlify.com>.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. (Opcional) usa `netlify.toml` incluido en este repo, ya configurado.
5. Tendrás una URL tipo `https://historias-apena.netlify.app`.

## 21. Desplegar gratis en Vercel

1. Conecta el repo en <https://vercel.com/new>.
2. Vercel detecta Astro automáticamente.
3. (Opcional) `vercel.json` incluido en este repo.
4. URL tipo `https://historias-apena.vercel.app`.

## 22. Notas sobre imágenes y licencias

Todas las imágenes usadas en el sitio deben tener una licencia compatible con uso público. Consulta [`image-sources.md`](./image-sources.md) para ver el registro detallado, ideas de repositorios públicos (Mediateca INAH, Memórica México, Hemeroteca Nacional Digital, Wikimedia Commons, Archivo del Terror) y la rutina sugerida para incorporar imágenes nuevas.

## 23. Notas sobre fuentes y licencias

- **Por defecto** el sitio usa fuentes del sistema, sin descarga remota: cumple la restricción de costo cero y respeta la privacidad de las visitas.
- **Philosopher** y **Creato Display** se mencionan como tipografías ideales en `variables.css`, pero no se distribuyen con el repositorio.
  - *Philosopher* (Jovanny Lemonad) suele estar disponible bajo SIL Open Font License, lo que permite su uso en web. Verifica las condiciones antes de incluirla.
  - *Creato Display* es una fuente comercial; conviene sustituirla por una alternativa libre (Inter, IBM Plex Sans, Source Sans 3).
- Si decides cargar fuentes desde Google Fonts, ten en cuenta que servirlas de forma autoalojada (descargando el .woff2 y colocándolo en `/public/fonts`) es más respetuoso con la privacidad y, además, más rápido.

---

## Comparación breve de plataformas para un blog académico gratuito

| Plataforma | Costo cero real | Publicar textos largos | Personalización | Mantenimiento | Control futuro | Riesgo de muros de pago |
|---|---|---|---|---|---|---|
| **Astro + Cloudflare/GitHub Pages** *(esta página)* | Sí, total | Excelente (Markdown) | Total | Bajo (estático) | Total: el contenido vive en tu repo | Ninguno |
| WordPress.com | Limitado: el plan gratis muestra publicidad y restringe el CSS | Bueno | Restringido en plan gratis | Bajo | Medio: migrar es trabajoso | Alto: la mayoría del diseño está en planes pagos |
| Ghost (alojado) | No: cobra desde el primer día | Excelente | Buena | Bajo | Bajo si pagas, alto si te vas | Total |
| Wix | Plan gratis con publicidad de Wix y subdominio largo | Aceptable | Visual, limitada por la plantilla | Bajo | Bajo (todo queda dentro de Wix) | Alto |
| Squarespace | Sin plan gratis (solo prueba) | Bueno | Visual, limitada por la plantilla | Bajo | Bajo | Total |

**Por qué Astro + hosting gratuito es la mejor opción aquí.** Cumple sin asteriscos la restricción de costo cero, deja el contenido en tu poder (un repo de Git con archivos `.md`), permite migrar a cualquier otro hosting estático en minutos, no muestra publicidad, no obliga a un panel de administración y permite la estética sobria y editorial que el proyecto necesita. La curva de aprendizaje es un poco más empinada que arrastrar bloques en Wix, pero a cambio el sitio puede crecer durante años sin pagar nada y sin perder control.

---

## Identidad rápida

- **Sitio:** Historias
- **Firmado por:** Antonio A. Peña Galindo
- **ORCID:** [0009-0002-9180-4911](https://orcid.org/0009-0002-9180-4911)
- **Academia.edu:** [AntonioPeñaGalindo](https://independent.academia.edu/AntonioPe%C3%B1aGalindo)
- **LinkedIn:** [antonio-peña-galindo](https://www.linkedin.com/in/antonio-peña-galindo-80684529b)

---

## Pendientes principales

Ver [`PENDIENTES.md`](./PENDIENTES.md) para la lista completa.
