import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { company, experienceByType, projectCounts, stats } from "@/lib/site";

/**
 * "HK en cifras" — la única sección de la home que muestra números.
 *
 * Antes las cifras estaban repartidas: la banda de estadísticas dentro de
 * About, el panel de experiencia por tipo y las píldoras de estado dentro de
 * Projects. Aquí se juntan las tres para que el visitante lea la magnitud de
 * la empresa de una vez, y para que ninguna cifra pueda contradecir a otra.
 * Server Component; todo sale de site.ts.
 */
export function Stats() {
  return (
    <Section id="cifras" tone="navy">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(58rem 38rem at 82% -12%, rgba(232,122,44,0.18), transparent 62%)",
        }}
      />

      <div className="container-hk relative">
        {/* Cabecera de cota */}
        <Reveal variant="fade">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <h2 className="kicker text-orange-300">HK en cifras</h2>
            </div>
            <span
              className="spec-line hidden h-px flex-1 text-white/15 sm:mx-8 sm:block"
              aria-hidden
            />
            <span className="kicker shrink-0 text-navy-300">
              Desde {company.foundedYear}
            </span>
          </div>
        </Reveal>

        {/* Las cuatro métricas de cabecera */}
        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="up" delay={i * 90}>
              <div className="relative pl-6 lg:pl-7">
                <span
                  aria-hidden
                  className="absolute bottom-2 left-0 top-1 w-px bg-orange/70 lg:bg-white/15"
                />
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isYear={"isYear" in stat ? stat.isYear : false}
                    className="display-index block text-[3.4rem] tabular-nums text-orange sm:text-6xl lg:text-[4.25rem]"
                  />
                  <p className="mt-3 max-w-[10rem] font-mono text-[0.7rem] uppercase leading-snug tracking-[0.18em] text-navy-100">
                    {stat.label}
                  </p>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Desglose por tipo de servicio + estado real del portafolio */}
        <Reveal variant="fade" delay={120} className="mt-16 lg:mt-20">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="kicker text-navy-300">
              Experiencia por tipo de servicio
            </span>

            {/* Conteo exacto del portafolio, para que "+50" tenga respaldo. */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.16em]">
              <span className="flex items-center gap-2 text-navy-100">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-navy-300" />
                {projectCounts.terminados} terminados
              </span>
              <span className="flex items-center gap-2 text-orange-200">
                <span aria-hidden className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
                </span>
                {projectCounts.enEjecucion} en ejecución
              </span>
            </div>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4">
            {experienceByType.map((item) => (
              <li key={item.title} className="border-t border-white/10 pt-5">
                <span className="block font-display text-3xl font-extrabold leading-none text-white lg:text-4xl">
                  <Counter value={item.count} />
                </span>
                <h3 className="mt-3 font-display text-base font-bold leading-tight text-navy-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
