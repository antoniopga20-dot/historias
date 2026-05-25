/**
 * Formatea una fecha en español, estilo editorial.
 *  formatDate(new Date("2026-03-15")) => "15 de marzo de 2026"
 */
export function formatDate(input: Date | string, locale = "es-MX"): string {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Devuelve la fecha en formato ISO corto: 2026-03-15.
 * Útil para el atributo datetime de <time>.
 */
export function isoDate(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}
