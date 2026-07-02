import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    title: "Dashboard Analytics",

    category: "Aplicación Web",

    description:
      "Dashboard para visualizar métricas de negocio con una interfaz moderna y rápida.",

    image: "/projects/dashboard.webp",

    technologies: [
      "Astro",
      "Tailwind",
      "TypeScript",
      "Supabase"
    ],

    github: "#",

    demo: "#",

    featured: true
  },

  {
    title: "Landing Startup",

    category: "Landing Page",

    description:
      "Landing enfocada en conversión con excelente rendimiento y SEO.",

    image: "/projects/landing.webp",

    technologies: [
      "Astro",
      "Tailwind"
    ],

    github: "#",

    demo: "#",

    featured: true
  },

  {
    title: "Sistema POS",

    category: "Software",

    description:
      "Sistema administrativo para pequeños negocios con inventario y ventas.",

    image: "/projects/pos.webp",

    technologies: [
      "Node",
      "PostgreSQL",
      "Tailwind"
    ],

    github: "#",

    demo: "#",

    featured: false
  }
];