/**
 * Textos, enlaces e imágenes del Home.
 * Deja una cadena vacía si el dato todavía no existe: no se inventan URLs.
 * Para el CV, coloca el archivo en /public y apunta resumeUrl, por ejemplo "/kendra-artavia-cv.pdf".
 * Para PhotoBinder, sustituye src por una ruta en /public (por ejemplo "/photobinder/card-1.jpg").
 */

export type NavLink = {
  label: string;
  href: string;
};

export type PhotocardSlot = {
  src: string;
  alt: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const site = {
  name: "Kendra Artavia Caballero",
  logo: "KA.",
  role: "Software Developer",
  location: "Costa Rica",
  resumeUrl: "",
  social: {
    github: "",
    linkedin: "",
    email: "",
  },
  hero: {
    greeting: "Hi, I’m Kendra.",
    line: "I turn ideas into",
    emphasis: "meaningful",
    closing: "software.",
    description:
      "Information Systems Engineering student passionate about software development, automation, and creating reliable digital experiences.",
    primaryCta: "Explore my work",
    secondaryCta: "Download résumé",
    workHref: "#work",
    annotation: "Turning ideas into real products.",
    pills: ["Build", "Automate", "Improve", "Repeat"],
    projectName: "PhotoBinder",
    searchPlaceholder: "Search memories...",
    cardsCollected: 127,
    photocards: [
      { src: "", alt: "Illustrated PhotoBinder card" },
      { src: "", alt: "Illustrated PhotoBinder card" },
      { src: "", alt: "Illustrated PhotoBinder card" },
      { src: "", alt: "Illustrated PhotoBinder card" },
    ] as PhotocardSlot[],
  },
};

export function socialHref(kind: "github" | "linkedin" | "email"): string | null {
  if (kind === "email") {
    return site.social.email ? `mailto:${site.social.email}` : null;
  }

  return site.social[kind] || null;
}
