import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site";

/** Icono de check inline (acento naranja). */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 flex-none text-orange"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 10.5l3.5 3.5L16 5.5" />
    </svg>
  );
}

/**
 * Sección "Servicios" para la home: resumen de las tres etapas del ciclo
 * de inversión que cubre HK Consulting, con tarjetas técnicas distintivas.
 */
export function Services() {
  return (
    <Section id="servicios" tone="mist">
      <div className="container-hk">
        <SectionHeading
          align="center"
          kicker="Nuestros servicios"
          title="Acompañamos todo el ciclo de inversión"
          intro="Desde la idea inicial hasta la culminación de la obra, integramos las tres etapas críticas bajo un solo equipo."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-7">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
                {/* Acento naranja superior que crece en hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.22] bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Retícula técnica sutil en la esquina superior derecha */}
                <span
                  aria-hidden
                  className="blueprint-grid-ink pointer-events-none absolute -right-6 -top-6 h-28 w-28 opacity-60 [mask-image:radial-gradient(circle_at_top_right,black,transparent_72%)]"
                />

                <div className="relative flex flex-1 flex-col p-7 lg:p-8">
                  {/* Número decorativo + etiqueta de etapa */}
                  <div className="flex items-baseline justify-between">
                    <span
                      aria-hidden
                      className="font-display text-6xl font-extrabold leading-none tracking-tight text-orange/15 transition-colors duration-300 group-hover:text-orange/30"
                    >
                      {s.num}
                    </span>
                    <span className="kicker text-navy-300">Etapa</span>
                  </div>

                  <h3 className="mt-5 font-display text-xl text-navy lg:text-[1.4rem]">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-soft">
                    {s.short}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm leading-snug text-ink"
                      >
                        <CheckIcon />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/servicios#${s.slug}`}
                    className="group/link mt-7 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy transition-colors duration-300 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    Ver detalle
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={services.length * 90} className="mt-12 flex justify-center">
          <Button href="/servicios" variant="primary">
            Ver todos los servicios
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
