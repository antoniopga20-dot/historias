/** Enlaces personales y académicos. Edita libremente. */
export type SocialLink = {
  label: string;
  href: string;
  /** Se muestra junto al enlace en algunos contextos. */
  handle?: string;
  /** Etiqueta accesible (aria-label) si el enlace es solo ícono. */
  ariaLabel?: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0002-9180-4911",
    handle: "0009-0002-9180-4911",
    ariaLabel: "Perfil ORCID de Antonio A. Peña Galindo",
  },
  {
    label: "Academia.edu",
    href: "https://independent.academia.edu/AntonioPe%C3%B1aGalindo",
    handle: "AntonioPeñaGalindo",
    ariaLabel: "Perfil en Academia.edu",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antonio-peña-galindo-80684529b",
    handle: "antonio-peña-galindo",
    ariaLabel: "Perfil de LinkedIn",
  },
];
