import type { Service } from "../types/service";

import {
    Globe,
    Code2,
    Bot,
    BrainCircuit,
} from "lucide-astro";


export const SERVICES: Service[] = [
    {
        title: "Landing Pages de Conversión",
        description:
            "Sitios rápidos, optimizados para SEO y diseñados para convertir visitantes en clientes.",
        icon: Globe,
    },
    {
        title: "Desarrollo Web a Medida",
        description:
            "Aplicaciones web modernas, escalables y adaptadas a las necesidades de tu negocio.",
        icon: Code2,
    },
    {
        title: "Automatización de Procesos",
        description:
            "Conectamos herramientas y automatizamos tareas para ahorrar tiempo y reducir errores.",
        icon: Bot,
    },
    {
        title: "Soluciones con IA",
        description:
            "Implementamos inteligencia artificial para optimizar procesos y crear nuevas oportunidades.",
        icon: BrainCircuit,
    },
];
