import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { company, contact, projectCounts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio completo de HK Consulting S.A.C.: 51 proyectos de ingeniería —44 terminados y 7 en ejecución— desarrollados en 24 regiones del Perú. Estudios de preinversión, expedientes técnicos y supervisión de obras en salud, educación, portuario, vial, saneamiento y más.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: "Proyectos · HK Consulting S.A.C.",
    description:
      "51 proyectos de ingeniería en 24 regiones del Perú: preinversión, expedientes técnicos y supervisión de obras.",
    images: [
      { url: "/images/proyecto-aereo-hospital.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ProyectosPage() {
  return (
    <>
      {/* ============================================================
          HERO DE PÁGINA
          ============================================================ */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Retícula técnica de fondo */}
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        {/* Velo de profundidad */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-800/40"
        />
        {/* Marca de agua numérica con el total de proyectos */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 bottom-0 select-none font-display text-[28vw] font-black leading-none text-white/[0.04] lg:text-[20rem]"
        >
          51
        </span>

        <div className="container-hk relative flex min-h-[45vh] flex-col justify-center pb-16 pt-32 lg:pb-20 lg:pt-40">
          {/* Breadcrumb */}
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
                  Proyectos
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <span className="kicker text-orange-300">
                Portafolio · {company.shortName}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Portafolio de <span className="text-orange">proyectos</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              <strong className="font-semibold text-white">
                {projectCounts.total} proyectos
              </strong>{" "}
              de ingeniería —{projectCounts.terminados} terminados y{" "}
              {projectCounts.enEjecucion} en ejecución— desarrollados a lo largo
              de <strong className="font-semibold text-white">24 regiones</strong>{" "}
              del Perú, en todo el ciclo de inversión pública y privada.
            </p>
          </Reveal>

          {/* Resumen rápido de conteos */}
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur">
                <span aria-hidden className="h-2 w-2 rounded-full bg-navy-300" />
                <span className="font-mono text-sm font-medium text-white">
                  {projectCounts.terminados} Terminados
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 backdrop-blur">
                <span aria-hidden className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
                </span>
                <span className="font-mono text-sm font-medium text-orange-200">
                  {projectCounts.enEjecucion} En ejecución
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur">
                <span aria-hidden className="h-2 w-2 rounded-full bg-orange" />
                <span className="font-mono text-sm font-semibold text-white">
                  {projectCounts.total} Total
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          EXPLORADOR FILTRABLE (client)
          ============================================================ */}
      <ProjectsExplorer />

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <Section tone="navy" className="overflow-hidden">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-8 select-none font-display text-[26vw] font-black leading-none text-white/[0.04] lg:text-[18rem]"
        >
          HK
        </span>

        <div className="container-hk relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="fade">
              <div className="flex items-center justify-center gap-3">
                <span className="accent-rule" aria-hidden />
                <span className="kicker text-orange-300">
                  ¿Tiene un proyecto en mente?
                </span>
                <span className="accent-rule" aria-hidden />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-5xl">
                Sumemos su obra a esta{" "}
                <span className="text-orange">trayectoria</span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
                Cuéntenos su proyecto. Acompañamos cada inversión con la
                solvencia técnica de {company.shortName} y más de{" "}
                {new Date().getFullYear() - company.foundedYear} años de
                experiencia al servicio del Perú.
              </p>
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
