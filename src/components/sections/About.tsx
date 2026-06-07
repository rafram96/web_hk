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
        {/* Encabezado + composición a 2 columnas */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Columna texto */}
          <div className="lg:col-span-6">
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

            {/* Chips de marco normativo */}
            <Reveal delay={180} className="mt-8">
              <p className="kicker text-slate-soft">Marco de trabajo</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {company.normativa.map((norma) => (
                  <li
                    key={norma}
                    className="rounded-md border border-line bg-mist px-3 py-1.5 font-mono text-xs font-medium tracking-tight text-navy"
                  >
                    {norma}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Frase de apoyo */}
            <Reveal delay={240} className="mt-8">
              <p className="border-l-2 border-orange pl-4 text-base leading-relaxed text-ink">
                Acompañamos cada inversión en sus tres etapas críticas
                —preinversión, expediente técnico y supervisión— con un solo
                equipo técnico responsable de principio a fin.
              </p>
            </Reveal>
          </div>

          {/* Columna imagen */}
          <div className="lg:col-span-6">
            <Reveal variant="fade" delay={120}>
              <figure className="relative">
                {/* Retícula técnica de fondo (esquina superior derecha) */}
                <div
                  aria-hidden
                  className="blueprint-grid-ink absolute -right-4 -top-4 -z-10 hidden h-40 w-40 rounded-tr-2xl sm:block"
                />
                {/* Bloque de acento navy en la esquina inferior izquierda */}
                <div
                  aria-hidden
                  className="absolute -bottom-5 -left-5 -z-10 hidden h-32 w-32 rounded-2xl bg-navy sm:block"
                />

                <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] ring-1 ring-navy-900/10">
                  <Image
                    src="/images/equipo-completo.jpg"
                    alt="Equipo de ingenieros de HK Consulting frente al Congreso del Perú"
                    width={720}
                    height={540}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                  {/* Velo navy inferior para legibilidad del badge */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/55 to-transparent"
                  />
                </div>

                {/* Badge flotante "Desde 2006" */}
                <figcaption className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-xl bg-navy px-4 py-3 text-white shadow-[var(--shadow-float)]">
                  <span className="font-display text-2xl font-extrabold leading-none text-orange">
                    2006
                  </span>
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

        {/* Banda de estadísticas sobre panel navy */}
        <Reveal delay={120} className="mt-20 lg:mt-24">
          <div className="blueprint-grid relative overflow-hidden rounded-2xl bg-navy px-6 py-10 shadow-[var(--shadow-card)] sm:px-10 lg:py-12">
            <dl className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} variant="up" delay={i * 90}>
                  <div className="border-l-2 border-orange/70 pl-5 lg:border-l lg:border-navy-400/40">
                    <dt className="sr-only">{stat.label}</dt>
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isYear={"isYear" in stat ? stat.isYear : false}
                      className="font-display text-4xl font-extrabold tracking-tight text-orange tabular-nums sm:text-5xl"
                    />
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-navy-100">
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
