import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Hero anterior — conservado (solo dev)",
  robots: { index: false, follow: false },
};

/**
 * Conserva el hero anterior para comparar/volver, pero SOLO en desarrollo.
 * En producción (next build) devuelve 404, así no es accesible en prod aunque
 * el código viva en el repo. El componente Hero.tsx queda intacto.
 */
export default function HeroAnteriorPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return <Hero />;
}
