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
 * en una composición editorial asimétrica: una razón destacada a gran formato
 * y el resto en una lista técnica con hairlines y líneas de medida.
 * Server Component.
 */
export function WhyChooseUs() {
  const [lead, ...rest] = whyChooseUs;

  return (
    <Section id="por-que-elegirnos" tone="mist">
      <div className="container-hk">
        <SectionHeading
          kicker="Por qué elegirnos"
          title="Razones para confiar en HK Consulting"
        />

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
          {/* Razón destacada — panel a gran formato, navy de mando. */}
          <Reveal className="lg:col-span-5">
            <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy-900 p-9 text-white shadow-float blueprint-grid lg:p-11">
              {/* Cota técnica superior. */}
              <div className="flex items-center justify-between">
                <span className="kicker text-orange-300">Lo esencial</span>
                <span aria-hidden className="font-mono text-xs text-white/40">
                  01 / 06
                </span>
              </div>

              <div className="relative mt-10 lg:mt-16">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 text-orange transition-colors duration-300 group-hover:border-orange/40">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {icons[0]}
                  </svg>
                </span>

                <h3 className="mt-8 max-w-[15ch] font-display text-3xl font-bold leading-[1.02] tracking-tight text-white lg:text-[2.75rem]">
                  {lead.title}
                </h3>
                <div className="spec-line mt-7 h-px w-full text-white/15" aria-hidden />
                <p className="mt-7 max-w-md text-lg leading-relaxed text-navy-100">
                  {lead.desc}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Resto de razones — lista técnica editorial, no tarjetas iguales. */}
          <div className="lg:col-span-7">
            <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-card sm:grid-cols-2">
              {rest.map((reason, i) => {
                const index = i + 1;
                return (
                  <Reveal key={reason.title} delay={index * 70} as="li">
                    <article className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper lg:p-9">
                      {/* Acento naranja lateral que crece en hover. */}
                      <span
                        aria-hidden
                        className="absolute inset-y-8 left-0 w-[3px] origin-top scale-y-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-y-100"
                      />

                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-12 w-12 items-center justify-center text-navy transition-colors duration-300 group-hover:text-orange">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-9 w-9"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.7}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            {icons[index]}
                          </svg>
                        </span>
                        <span
                          aria-hidden
                          className="mt-1 font-mono text-xs text-navy/30"
                        >
                          {`0${index + 1}`}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-xl font-bold leading-snug tracking-tight text-navy lg:text-[1.4rem]">
                        {reason.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-soft">
                        {reason.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
