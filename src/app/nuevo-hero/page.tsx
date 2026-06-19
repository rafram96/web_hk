import type { Metadata } from "next";
import { HeroNuevo } from "@/components/sections/HeroNuevo";

export const metadata: Metadata = {
  title: "Nuevo Hero — ejemplo de fusión",
  robots: { index: false, follow: false },
};

/**
 * Ruta de ejemplo (no indexada) para previsualizar el nuevo hero (carrusel)
 * fusionado con la Navbar/Logo actuales — que el layout ya inyecta encima.
 */
export default function NuevoHeroPage() {
  return <HeroNuevo />;
}
