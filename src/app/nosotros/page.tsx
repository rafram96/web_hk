import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { Process } from "@/components/sections/Process";
import { Sectors } from "@/components/sections/Sectors";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { ScrollDirector } from "@/components/ui/ScrollDirector";
import {
  company,
  contact,
  regionsCovered,
  sectors,
  yearsOfExperience,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Quiénes somos en ${company.legalName}: misión, visión y valores, metodología de trabajo, los ${sectors.length} sectores que atendemos y por qué las entidades del Estado nos eligen. ${yearsOfExperience} años de consultoría en ingeniería en el Perú.`,
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: `Nosotros · ${company.legalName}`,
    description: `Misión, visión, metodología y sectores de ${company.shortName}. ${yearsOfExperience} años de consultoría en ingeniería en el Perú.`,
    images: [
      { url: "/images/equipo-completo.webp", width: 1200, height: 630 },
    ],
  },
};

/**
 * Página "Nosotros". Recoge las secciones institucionales que antes
 * alargaban la home (quiénes somos, propósito, metodología, sectores y
 * razones para elegirnos). La home se queda con el recorrido comercial.
 */
export default function NosotrosPage() {
  return (
    <>
      <ScrollDirector />

      {/* ============================================================
          HERO DE PÁGINA
          ============================================================ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-800/40"
        />

        <div className="container-hk relative flex min-h-[45vh] flex-col justify-center pb-16 pt-32 lg:pb-20 lg:pt-40">
          <Reveal variant="fade">
            <nav aria-label="Ruta de navegación" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-navy-100">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-orange-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li aria-hidden className="text-navy-300">
                  /
                </li>
                <li aria-current="page" className="text-orange-300">
                  Nosotros
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <span className="kicker text-orange-300">
                La empresa · {company.shortName}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ingeniería que <span className="text-orange">responde</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              {yearsOfExperience} años acompañando inversión pública y privada
              en {regionsCovered} regiones del Perú, en {sectors.length}{" "}
              sectores y en las tres etapas críticas del ciclo: preinversión,
              expediente técnico y supervisión.
            </p>
          </Reveal>
        </div>
      </section>

      <About />
      <MissionVision />
      <Process />
      <Sectors />
      <WhyChooseUs />
      <Gallery />

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <Section tone="navy" className="overflow-hidden">
        <div className="blueprint-grid absolute inset-0" aria-hidden />

        <div className="container-hk relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="fade">
              <div className="flex items-center justify-center gap-3">
                <span className="accent-rule" aria-hidden />
                <span className="kicker text-orange-300">
                  ¿Conversamos su proyecto?
                </span>
                <span className="accent-rule" aria-hidden />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-5xl">
                Un solo equipo, de la idea a la{" "}
                <span className="text-orange">entrega</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/#contacto" variant="primary">
                  Contáctanos
                </Button>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-mono text-sm tracking-wide text-navy-100 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
