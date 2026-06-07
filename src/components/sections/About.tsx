import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { company, stats } from "@/lib/site";

/**
 * Sección "Nosotros": quiénes somos + marco normativo + banda de estadísticas.
 * Server Component. Itera sobre `stats` del site.ts (no hardcodea métricas).
 */
export function About() {
  return (
    <Section id="nosotros" tone="light">
      <div className="container-hk">
        {/* Composición editorial asimétrica: texto (5) / imagen (7) */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Columna texto */}
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Quiénes somos"
              title={
                <>
                  Desde 2006 impulsando{" "}
                  <span className="text-orange">el desarrollo del Perú</span>
                </>
              }
              intro={company.intro}
            />

            {/* Frase de apoyo — cita técnica */}
            <Reveal delay={200} className="mt-9">
              <p className="border-l-2 border-orange pl-5 font-display text-xl leading-snug tracking-tight text-navy">
                Acompañamos cada inversión en sus tres etapas críticas
                —preinversión, expediente técnico y supervisión— con un solo
                equipo técnico responsable de principio a fin.
              </p>
            </Reveal>

            {/* Marco normativo como cotas técnicas */}
            <Reveal delay={260} className="mt-10">
              <div className="flex items-center gap-3">
                <span className="kicker text-slate-soft">Marco normativo</span>
                <span className="spec-line h-px flex-1 text-navy/20" aria-hidden />
              </div>
              <ul className="mt-4 space-y-px">
                {company.normativa.map((norma, i) => (
                  <li
                    key={norma}
                    className="group flex items-baseline gap-4 border-t border-line py-2.5 last:border-b"
                  >
                    <span className="font-mono text-[0.7rem] tabular-nums text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-sm font-medium tracking-tight text-navy">
                      {norma}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Columna imagen — marco cuidado con overlap navy + cota */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal variant="fade" delay={120}>
              <figure className="relative">
                {/* Índice editorial gigante de fondo */}
                <span
                  aria-hidden
                  className="display-index pointer-events-none absolute -left-4 -top-12 -z-10 hidden select-none text-[8rem] text-navy/[0.06] sm:block lg:-left-10 lg:text-[11rem]"
                >
                  01
                </span>

                {/* Retícula técnica de fondo (esquina superior derecha) */}
                <div
                  aria-hidden
                  className="blueprint-grid-ink absolute -right-5 -top-5 -z-10 hidden h-44 w-44 rounded-tr-3xl sm:block"
                />
                {/* Bloque de acento navy en la esquina inferior izquierda */}
                <div
                  aria-hidden
                  className="absolute -bottom-6 -left-6 -z-10 hidden h-40 w-40 rounded-3xl bg-navy sm:block"
                />
                {/* Cota naranja vertical sobre el flanco derecho */}
                <div
                  aria-hidden
                  className="absolute -right-3 top-8 bottom-8 hidden w-px bg-orange/60 lg:block"
                >
                  <span className="absolute -top-1 -left-[3px] h-[7px] w-[7px] rounded-full bg-orange" />
                  <span className="absolute -bottom-1 -left-[3px] h-[7px] w-[7px] rounded-full bg-orange" />
                </div>

                <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-float)] ring-1 ring-navy-900/10">
                  <Image
                    src="/images/equipo-completo.jpg"
                    alt="Equipo de ingenieros de HK Consulting frente al Congreso del Perú"
                    width={840}
                    height={560}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                  {/* Velo navy inferior para legibilidad del badge */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/65 to-transparent"
                  />
                  {/* Cota técnica superpuesta */}
                  <span className="absolute right-5 top-5 rounded-md bg-navy-950/70 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    Lima · Perú
                  </span>
                </div>

                {/* Badge flotante "Desde 2006" */}
                <figcaption className="absolute -bottom-5 left-7 flex items-center gap-3.5 rounded-2xl bg-navy px-5 py-4 text-white shadow-[var(--shadow-float)]">
                  <span className="display-index text-[2.6rem] text-orange">
                    2006
                  </span>
                  <span className="spec-line h-9 w-px text-white/25" aria-hidden />
                  <span className="kicker leading-tight text-navy-100">
                    Trayectoria
                    <br />
                    nacional
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Banda de estadísticas sobre panel navy — máxima presencia */}
        <Reveal delay={120} className="mt-24 lg:mt-32">
          <div className="blueprint-grid relative overflow-hidden rounded-3xl bg-navy px-7 py-12 shadow-[var(--shadow-float)] sm:px-12 lg:py-16">
            {/* Acento naranja superior */}
            <span
              aria-hidden
              className="absolute left-0 top-0 h-1.5 w-28 rounded-br-lg bg-orange"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <p className="kicker text-orange-300">HK en cifras</p>
              <span
                className="spec-line hidden h-px flex-1 text-white/15 sm:ml-8 sm:block"
                aria-hidden
              />
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} variant="up" delay={i * 90}>
                  <div className="relative pl-6 lg:pl-7">
                    {/* Hairline/cota vertical de inicio de cada cifra */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-1 bottom-2 w-px bg-orange/70 lg:bg-white/15"
                    />
                    <dt className="sr-only">{stat.label}</dt>
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isYear={"isYear" in stat ? stat.isYear : false}
                      className="display-index block text-[3.4rem] text-orange tabular-nums sm:text-6xl lg:text-[4.25rem]"
                    />
                    <p className="mt-3 max-w-[10rem] font-mono text-[0.7rem] uppercase leading-snug tracking-[0.18em] text-navy-100">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
