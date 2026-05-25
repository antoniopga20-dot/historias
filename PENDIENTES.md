# Pendientes — Historias

Lista de cosas por completar para que el sitio quede listo al 100 %. Marcado con `[ ]` lo pendiente y `[x]` lo hecho. Puedes ir tachando a tu propio ritmo.

## Contenido textual

- [ ] **Sobre mí**: redactar semblanza breve, semblanza extendida, intereses actuales y trayectoria (`src/pages/sobre-mi.astro`).
- [ ] **Datos / CV**: completar formación, docencia, intercambio, proyectos, estancias y experiencia (`src/pages/datos.astro`).
- [ ] **Contacto**: reemplazar el correo placeholder por el correo definitivo (`src/data/site.ts`).
- [ ] **Publicaciones**: añadir entradas reales en `src/content/publicaciones/` siguiendo `ejemplo-publicacion.md`.
- [ ] **Actividades**: añadir entradas reales en `src/content/actividades/` siguiendo `ejemplo-actividad.md`.
- [ ] **Blog**: revisar las seis entradas iniciales y, cuando estés listo, redactar las definitivas.

## Imágenes

- [ ] Conseguir imágenes para el carrusel de portada (México y Paraguay 1970-80, archivos, prensa) y registrarlas en `image-sources.md`.
- [ ] Colocar los archivos en `public/images/hero/` y actualizar `src/data/heroImages.ts`.
- [ ] Revisar la fotografía personal en `public/images/profile/antonio.jpg` y, si quieres otra, reemplazarla con el mismo nombre.
- [ ] Generar (si quieres) una imagen Open Graph (`public/images/og-default.jpg`, 1200×630 px) para previsualizaciones en redes.

## Identidad y tipografía

- [ ] Decidir si se incorporan Philosopher / Creato Display localmente, una alternativa libre (Cormorant Garamond, Literata, Inter, IBM Plex Sans) o se mantienen las fuentes del sistema.
- [ ] Si se incorporan fuentes locales, copiar los `.woff2` a `public/fonts/` y descomentar los `@font-face` en `src/styles/global.css`.

## Configuración

- [ ] En `astro.config.mjs`, ajustar `site:` a la URL pública definitiva (Cloudflare/GitHub/Netlify/Vercel).
- [ ] Si se despliega en GitHub Pages bajo subruta, descomentar `base: "/historias"`.
- [ ] En `public/robots.txt`, actualizar la URL del sitemap si cambia el dominio.

## Despliegue

- [ ] Subir el repositorio a GitHub.
- [ ] Elegir plataforma de despliegue (Cloudflare Pages recomendada).
- [ ] Verificar que la primera publicación se vea correctamente y que el feed RSS funcione (`/rss.xml`).

## Mejoras opcionales (no bloquean el lanzamiento)

- [ ] Integrar un boletín por correo gratuito (Buttondown free, follow.it sobre el RSS, etc.).
- [ ] Añadir esquema JSON-LD para Persona/Article en `BaseLayout.astro`.
- [ ] Agregar paginación cuando el blog supere ~20 entradas.
- [ ] Crear página `/blog/categoria/[slug]` para vistas dedicadas por categoría.
- [ ] Activar comentarios académicos vía Hypothesis (gratuito) si se decide aceptar conversación pública.
- [ ] Habilitar modo oscuro respetando la paleta.
