import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    title: "Dashboard Analytics",

    category: "Aplicación Web",

    description:
      "Plataforma de analítica empresarial con métricas en tiempo real, reportes interactivos y visualización de indicadores clave para la toma de decisiones.",

    image: "/images/projects/dashboard.png",

    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Supabase"
    ],
    action: "#cta",
    featured: true
  },

  {
    title: "Landing Startup",

    category: "Landing Page",

    description:
      "Landing moderna optimizada para conversión, alto rendimiento y SEO, diseñada para presentar productos digitales y captar nuevos clientes.",

    image: "/images/projects/landing.png",

    technologies: [
      "Astro",
      "Tailwind CSS",
      "TypeScript"
    ],

    action: "#cta",

    featured: true
  },

  {
    title: "Sistema POS",

    category: "Software Empresarial",

    description:
      "Sistema POS para la gestión de ventas, inventario y clientes, desarrollado con una interfaz intuitiva para pequeños y medianos negocios.",

    image: "/images/projects/pos.png",

    technologies: [
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS"
    ],

    action: "#cta",

    featured: false
  },

  {
    title: "AI Workspace",

    category: "Inteligencia Artificial",

    description:
      "Espacio de trabajo impulsado por IA con chat inteligente, automatización de tareas, base de conocimiento y panel de métricas para equipos modernos.",

    image: "/images/projects/AIwork.png",

    technologies: [
      "OpenAI API",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS"
    ],

    action: "#cta",

    featured: false
  }
];