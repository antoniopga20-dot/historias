# Registro de imágenes y licencias

Esta página es la **fuente única de verdad** sobre el origen y la licencia de cada imagen usada en *Historias*. Es responsabilidad del autor mantenerla al día. Si una imagen no aparece aquí, no debe publicarse en el sitio.

## Convenciones

Para cada imagen registramos:

- **Título** (o descripción breve).
- **Autor**, si se conoce.
- **Repositorio / institución** (Mediateca INAH, Wikimedia Commons, etc.).
- **URL** original o página de catálogo.
- **Licencia** (CC0, CC BY 4.0, dominio público, uso justo educativo, etc.).
- **Condiciones de uso** (atribución requerida, no derivados, etc.).
- **Ubicación en el sitio** (carrusel, entrada concreta, página, etc.).
- **Notas** (recortes, ajustes, fecha de descarga).

## Estado actual

Hoy el sitio usa **placeholders**. Las rutas referenciadas desde `src/data/heroImages.ts` (`mexico-1970-placeholder.jpg`, `paraguay-1970-placeholder.jpg`, `archive-placeholder.jpg`, `newspaper-placeholder.jpg`) no existen físicamente todavía; el carrusel se renderiza igualmente sobre fondo azul noche con su overlay sin romperse.

Cuando se incorporen imágenes reales:

1. Colócalas en `public/images/hero/` (o donde corresponda).
2. Actualiza `src/data/heroImages.ts` con la ruta correcta y un `alt` accesible.
3. Añade su entrada en este archivo, siguiendo la plantilla siguiente.

## Plantilla

```markdown
### Título descriptivo de la imagen
- **Archivo:** /images/hero/nombre-del-archivo.jpg
- **Autor:** Nombre del autor (o "desconocido")
- **Repositorio:** Mediateca INAH / Memórica / Wikimedia Commons / Hemeroteca Nacional / ...
- **URL:** https://...
- **Licencia:** CC BY 4.0 / Dominio público / ...
- **Atribución requerida:** "Fotografía de NN. Acervo XX, licencia CC BY 4.0."
- **Ubicación en el sitio:** Carrusel de portada · entrada "Exilio paraguayo, archivo y memoria"
- **Notas:** Recortada a 1920×1080. Descargada el 2026-MM-DD.
```

## Fuentes recomendadas para buscar imágenes con licencia clara

### México (general)
- [Mediateca INAH](https://mediateca.inah.gob.mx/) — colecciones del Instituto Nacional de Antropología e Historia.
- [Fototeca Nacional del INAH](https://fototeca.inah.gob.mx/fototeca/) — fotografía histórica de México.
- [Memórica México](https://www.memoricamexico.gob.mx/) — plataforma federal de memoria histórica.
- [Hemeroteca Nacional Digital de México (HNDM)](https://www.hndm.unam.mx/) — prensa digitalizada.
- [Archivo General de la Nación, México](https://www.gob.mx/agn) — repositorios públicos cuando estén disponibles.
- [Mediateca de El Colegio de México](https://biblioteca.colmex.mx/) — recursos académicos.

### Paraguay
- [Centro de Documentación y Archivo para la Defensa de los Derechos Humanos del Poder Judicial (CDyA / "Archivo del Terror")](https://www.pj.gov.py/contenido/130-archivo-del-terror) — documentación del régimen stronista.
- [Biblioteca y Archivo Central del Congreso Nacional](https://www.bacn.gov.py/).
- [Universidad Nacional de Asunción — Biblioteca digital](https://www.una.py/) — colecciones académicas.
- Periódicos paraguayos históricos en hemerotecas universitarias y archivos privados (verificar siempre la licencia).

### Generalistas y de licencia libre
- [Wikimedia Commons](https://commons.wikimedia.org/) — busca con palabras clave en español e inglés.
- [Internet Archive](https://archive.org/) — libros, prensa y fotografías digitalizados.
- [Library of Congress · Prints and Photographs](https://www.loc.gov/pictures/) — incluye material latinoamericano de los siglos XX.
- [Europeana](https://www.europeana.eu/) — útil para fotografía periodística y exilio europeo.

## Recomendaciones prácticas

- Privilegia imágenes en **dominio público** o con licencia **CC BY** / **CC BY-SA**.
- Cuando uses Wikimedia Commons, copia la URL del archivo (no la del thumbnail) y consigna la versión exacta de la licencia.
- Atribuye al autor y al repositorio incluso si la licencia no obliga a hacerlo.
- Evita imágenes encontradas con búsquedas genéricas en buscadores: rara vez tienen licencia clara.
- Si una imagen es la base de un texto largo, vale la pena guardarla también en `public/images/posts/` con su archivo de referencia.

---

## Registro

> Por ahora no hay imágenes con licencia verificada. Añade aquí cada nueva.

<!--
### Ciudad de México, 1972
- **Archivo:** /images/hero/cdmx-1972.jpg
- **Autor:** ...
-->
