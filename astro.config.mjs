// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Configuración general del sitio "Historias".
 *
 * Cambia `site` por la URL pública definitiva cuando elijas dónde desplegar:
 *   - Cloudflare Pages: https://historias-apena.pages.dev
 *   - GitHub Pages:     https://<usuario>.github.io/historias
 *   - Netlify:          https://historias-apena.netlify.app
 *   - Vercel:           https://historias-apena.vercel.app
 *
 * Si despliegas en GitHub Pages como subruta (p. ej. /historias),
 * descomenta también `base: "/historias"`.
 */
export default defineConfig({
  site: "https://historias.pages.dev",
  // base: "/historias",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
