/** Estructura del menú principal del sitio. */
export type NavItem = {
  label: string;
  href: string;
  /** Si está marcado, se muestra también en el footer principal. */
  inFooter?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Inicio", href: "/", inFooter: false },
  { label: "Sobre mí", href: "/sobre-mi", inFooter: true },
  { label: "Blog", href: "/blog", inFooter: true },
  { label: "Buscar", href: "/buscar", inFooter: true },
  { label: "Publicaciones", href: "/publicaciones", inFooter: true },
  { label: "Actividades", href: "/actividades", inFooter: true },
  { label: "Datos", href: "/datos", inFooter: true },
  { label: "Enlaces", href: "/enlaces", inFooter: true },
  { label: "Contacto", href: "/contacto", inFooter: true },
  { label: "Suscríbete", href: "/suscribete", inFooter: true },
];
