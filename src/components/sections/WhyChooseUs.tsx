import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/site";

/**
 * Íconos geométricos inline (24x24, stroke), uno por razón en el orden de
 * `whyChooseUs`. Heredan currentColor para pintarse con el acento de marca.
 */
const icons: ReactNode[] = [
  // Experiencia comprobada (medalla / sello)
  <>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
  </>,
  // Equipo multidisciplinario (personas)
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
    <path d="M17 14.2c2.2.6 3.5 2.4 3.5 4.8" />
  </>,
  // Cumplimiento normativo (documento con check)
  <>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 14l2 2 4-4" />
  </>,
  // Compromiso con plazos (reloj)
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </>,
  // Acompañamiento integral (capas)
  <>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 13l9 5 9-5" />
  </>,
  // Reducción de riesgos (escudo con check)
  <>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="M9 11.5l2 2 4-4" />
  </>,
];

/**
 * Sección "Por qué elegirnos" — seis razones en una matriz técnica de hairlines
 * (2×3 en desktop), equilibrada y sin numerales. Server Component.
 */
export function WhyChooseUs() {
  return (
    <Section id="por-que-elegirnos" tone="mist">
      <div className="container-hk">
        <SectionHeading
          kicker="Por qué elegirnos"
          title="Razones para confiar en HK Consulting"
        />

        {/* Matriz de hairlines: 1px cálido entre celdas (gap-px sobre bg-line). */}
        <Reveal delay={80} className="mt-12">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-line shadow-card sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {whyChooseUs.map((reason, i) => (
              <article
                key={reason.title}
                className="group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper lg:p-9"
              >
                {/* Acento naranja lateral que crece en hover. */}
                <span
                  aria-hidden
                  className="absolute inset-y-8 left-0 w-[3px] origin-top scale-y-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-y-100"
                />

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_10px_24px_-12px_rgba(2,30,48,0.7)] transition-colors duration-300 group-hover:bg-orange">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {icons[i]}
                  </svg>
                </span>

                <h3 className="mt-6 font-display text-xl font-bold leading-snug tracking-tight text-navy lg:text-[1.4rem]">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-soft">
                  {reason.desc}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
