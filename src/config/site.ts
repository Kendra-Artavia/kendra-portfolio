/**
 * Textos, enlaces e imágenes del portafolio.
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

export type Opportunity = {
  title: string;
  description: string;
  icon: "code" | "automation" | "fullstack";
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
    github: "https://github.com/Kendra-Artavia",
    linkedin: "https://www.linkedin.com/in/kendra-artavia-caballero",
    email: "kendra.artavia.caballero@gmail.com",
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
  contact: {
    eyebrow: "Contact",
    titleLead: "Let’s build",
    titleRest: "something great.",
    description:
      "I’m always open to new opportunities in software development, full stack, and automation. Whether you have a project in mind, a potential role, or just want to connect, I’d love to hear from you.",
    emailCta: "Send me an email",
    resumeCta: "Download résumé",
    badge: "Open to opportunities",
    cardTitle: "Turning ideas into meaningful software.",
    cardDescription:
      "I’m currently looking for opportunities where I can contribute, learn, and create impact through technology.",
    socialCards: [
      {
        kind: "github" as const,
        title: "GitHub",
        subtitle: "See my projects",
      },
      {
        kind: "linkedin" as const,
        title: "LinkedIn",
        subtitle: "Let’s connect",
      },
      {
        kind: "email" as const,
        title: "Email",
        subtitle: "Send me a message",
      },
    ],
    opportunities: [
      {
        title: "Junior Software Developer",
        description: "Open to entry-level opportunities",
        icon: "code",
      },
      {
        title: "Automation Developer",
        description: "Interested in automation and process improvement",
        icon: "automation",
      },
      {
        title: "Full Stack Developer",
        description: "Excited to work across the stack",
        icon: "fullstack",
      },
    ] as Opportunity[],
  },
};

/** Abre Gmail en el navegador listo para escribirte. */
export function gmailComposeHref(email: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

export function socialHref(kind: "github" | "linkedin" | "email"): string | null {
  if (kind === "email") {
    return site.social.email ? gmailComposeHref(site.social.email) : null;
  }

  return site.social[kind] || null;
}

/** Copia el correo al portapapeles. Devuelve true si se copió correctamente. */
export async function copyEmailAddress(): Promise<boolean> {
  const email = site.social.email;
  if (!email) return false;

  try {
    await navigator.clipboard.writeText(email);
    return true;
  } catch {
    try {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(input);
      return ok;
    } catch {
      return false;
    }
  }
}
