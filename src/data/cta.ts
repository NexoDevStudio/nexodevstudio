import { COMPANY } from "./company";

export const CTA = {
  badge: "Hablemos",

  title: "Hablemos de tu próximo proyecto.",

  description:
    "Cuéntanos tu idea y te ayudaremos a convertirla en un producto digital moderno, rápido y preparado para crecer.",

  primaryButton: {
    text: "Agendar una reunión",
    href: `whatsapp://send?phone=${COMPANY.phone}&text=Hola,%20quiero%20agendar%20una%20reunión%20para%20hablar%20de%20mi%20proyecto.`
  },

  secondaryButton: {
    text: "Ver proyectos",
    href: "#projects"
  }
};