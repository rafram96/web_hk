import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site";

/** Icono de check inline (acento naranja, trazo fino). */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-[0.15rem] h-3.5 w-3.5 flex-none text-orange"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
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
 * de inversión que cubre HK Consulting. Composición editorial —numerales
 * gigantes como protagonistas, filas asimétricas con línea de medida en
 * vez de tarjetas idénticas.
 */
export function Services() {
  return (
    <Section id="servicios" tone="mist">
      <div className="container-hk">
        <SectionHeading
          align="left"
          kicker="Nuestros servicios"
          title="Acompañamos todo el ciclo de inversión"
          intro="Desde la idea inicial hasta la culminación de la obra, integramos las tres etapas críticas bajo un solo equipo."
        />

        {/* Listado editorial: filas con numeral display gigante y divisores técnicos. */}
        <div className="mt-16 lg:mt-20">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <article className="group relative grid grid-cols-1 gap-x-10 gap-y-6 border-t border-line py-10 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,18rem)] lg:items-start lg:py-12 lg:last:border-b">
                {/* Numeral display gigante — protagonista de la fila */}
                <div className="flex items-start gap-4 lg:block">
                  <span
                    aria-hidden
                    className="display-index select-none text-[4.5rem] text-navy/12 transition-colors duration-500 group-hover:text-orange/70 sm:text-[5.5rem] lg:text-[7.5rem]"
                  >
                    {s.num}
                  </span>
                  <span className="kicker mt-2 hidden text-navy-300 lg:block">
                    Etapa
                  </span>
                </div>

                {/* Cuerpo: título + descripción */}
                <div>
                  <h3 className="font-display text-2xl leading-tight tracking-tight text-navy sm:text-3xl lg:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-soft">
                    {s.short}
                  </p>

                  <Link
                    href={`/servicios#${s.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy transition-colors duration-300 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    <span className="relative">
                      Ver detalle
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover/link:scale-x-100"
                      />
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>

                {/* Beneficios: lista técnica con marca de medida y checks finos */}
                <div>
                  <ul className="space-y-3">
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={services.length * 90} className="mt-14 flex">
          <Button href="/servicios" variant="primary">
            Ver todos los servicios
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
