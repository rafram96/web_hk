import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";
import { mision, vision, valores } from "@/lib/site";

type Pillar = {
  /** Etiqueta corta (Misión / Visión). */
  label: string;
  /** Declaración principal. */
  body: string;
};

const pillars: Pillar[] = [
  { label: "Misión", body: mision },
  { label: "Visión", body: vision },
];

/** Íconos geométricos por valor (mismo orden que `valores`). */
const valorIcons: ReactNode[] = [
  // Solvencia técnica — diana de precisión
  <>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
  </>,
  // Compromiso — reloj (plazos)
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </>,
  // Integridad — escudo con check (ética)
  <>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="M9 11.5l2 2 4-4" />
  </>,
  // Excelencia — estrella (mejora continua)
  <>
    <path d="M12 3.2l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.4l5.9-.8L12 3.2Z" />
  </>,
];

/**
 * Sección "Propósito" — Misión, Visión y Valores.
 * Server Component sobre fondo navy con retícula técnica.
 */
export function MissionVision() {
  return (
    <Section id="proposito" tone="navy">
      {/* Capa decorativa: retícula de plano + resplandor radial sutil. */}
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(60rem 40rem at 78% -10%, rgba(232,122,44,0.16), transparent 60%)",
        }}
      />

      <div className="container-hk relative">
        <SectionHeading
          tone="dark"
          kicker="Propósito"
          title="Misión y visión"
        />

        {/* Dos paneles institucionales lado a lado. */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 p-8 transition-colors duration-300 hover:border-white/20 lg:p-10">
                <div className="relative">
                  <span className="accent-rule block" aria-hidden />
                  <p className="kicker mt-5 text-orange-300">{pillar.label}</p>
                  <p className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.7rem]">
                    {pillar.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Valores. */}
        <div className="mt-16 lg:mt-20">
          <Reveal variant="fade">
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <span className="kicker text-orange-300">Nuestros valores</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor, index) => (
              <Reveal key={valor.title} delay={index * 80} className="h-full">
                <div className="group relative flex h-full flex-col bg-navy-900/60 p-7 transition-colors duration-300 hover:bg-navy-800/70">
                  {/* Ícono del valor */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 shrink-0 text-orange transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {valorIcons[index]}
                  </svg>

                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {valor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">
                    {valor.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
