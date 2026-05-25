/**
 * Calcula un tiempo de lectura aproximado en minutos, en español.
 * Asume ~220 palabras/min para lectura cómoda académica.
 */
export function readingTime(text: string, wpm = 220): string {
  if (!text) return "1 min de lectura";
  const words = text
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min de lectura`;
}
