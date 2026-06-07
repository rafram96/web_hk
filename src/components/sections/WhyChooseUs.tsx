import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/site";

/**
 * Set de íconos geométricos inline, consistentes en grilla 24x24 y stroke.
 * Uno por razón (mismo orden que `whyChooseUs`). Heredan currentColor para
 * pintarse con el acento de marca.
 */
const icons: ReactNode[] = [
  // 01 — Experiencia comprobada (medalla / sello)
  <>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
  </>,
  // 02 — Equipo multidisciplinario (personas)
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
    <path d="M17 14.2c2.2.6 3.5 2.4 3.5 4.8" />
  </>,
  // 03 — Cumplimiento normativo (documento con check)
  <>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 14l2 2 4-4" />
  </>,
  // 04 — Compromiso con plazos (reloj)
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </>,
  // 05 — Acompañamiento integral (capas)
  <>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 13l9 5 9-5" />
  </>,
  // 06 — Reducción de riesgos (escudo con check)
  <>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="M9 11.5l2 2 4-4" />
  </>,
];

/**
 * Sección "Por qué elegirnos" — seis razones para confiar en HK Consulting,
 * en una grilla de tarjetas con íconos geométricos de marca. Server Component.
 */
export function WhyChooseUs() {
  return (
    <Section id="por-que-elegirnos" tone="mist">
      <div className="container-hk">
        <SectionHeading
          kicker="Por qué elegirnos"
          title="Razones para confiar en HK Consulting"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {whyChooseUs.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float lg:p-8">
                {/* Acento naranja superior que crece en hover. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.22] bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Numeral técnico + ícono geométrico. */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-mist text-navy transition-colors duration-300 group-hover:border-orange/40 group-hover:bg-orange-50 group-hover:text-orange-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {icons[index]}
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium tracking-[0.2em] text-navy-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg text-navy lg:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-soft">
                  {reason.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
