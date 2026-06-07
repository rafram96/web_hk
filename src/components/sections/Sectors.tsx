import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { sectors } from "@/lib/site";

/**
 * Sección "Sectores atendidos" — los 14 sectores estratégicos.
 * Server Component sobre navy muy oscuro. Composición editorial tipo
 * "índice de una monografía técnica": numerales mono a la vista, nombres
 * en gran escala display y filas con hairlines/spec-line en lugar de
 * 14 cajitas idénticas. Retícula blueprint de fondo para dar carácter de plano.
 */
export function Sectors() {
  return (
    <Section id="sectores" tone="navy-deep">
      {/* Capa decorativa: retícula de plano técnico. */}
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      {/* Resplandor radial sutil para dar profundidad al fondo. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(55rem 38rem at 100% 0%, rgba(232,122,44,0.12), transparent 62%)",
        }}
      />

      <div className="container-hk relative">
        {/* Cabecera editorial: encabezado + cifra-índice gigante en contrapunto. */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            kicker="Sectores"
            title="14 sectores estratégicos del desarrollo nacional"
            intro="Atendemos proyectos en sectores estratégicos del desarrollo nacional, de la salud a la infraestructura portuaria."
          />

          <Reveal
            variant="fade"
            delay={120}
            className="hidden shrink-0 select-none text-right lg:block"
          >
            <span
              className="display-index block text-[8rem] text-white/[0.07] xl:text-[10rem]"
              aria-hidden
            >
              14
            </span>
            <span className="kicker -mt-3 block text-navy-300">
              Campos de práctica
            </span>
          </Reveal>
        </div>

        {/* Índice técnico: cabecera de tabla + 14 filas con hairlines. */}
        <div className="mt-14 lg:mt-20">
          {/* Fila de encabezado tipo tabla de especificación. */}
          <Reveal variant="fade">
            <div className="flex items-center gap-4 border-b border-white/15 pb-3">
              <span className="kicker w-10 shrink-0 text-orange-300">N°</span>
              <span className="kicker flex-1 text-navy-300">Sector</span>
              <span className="kicker hidden flex-1 text-navy-300 sm:block">
                Alcance
              </span>
            </div>
          </Reveal>

          {/* Filas del índice — densidad de monografía, no rejilla de tarjetas. */}
          <ul className="border-b border-white/10">
            {sectors.map((sector, index) => (
              <Reveal
                key={sector.num}
                as="li"
                delay={(index % 4) * 60}
                className="group border-t border-white/10 transition-colors duration-300 first:border-t-0 hover:bg-white/[0.03]"
              >
                <div className="relative flex items-center gap-4 py-5 lg:py-6">
                  {/* Acento naranja de cota que crece en hover. */}
                  <span
                    className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 scale-y-0 rounded-full bg-orange transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden
                  />

                  {/* Numeral mono a la vista, alineado a reticula. */}
                  <span className="w-10 shrink-0 font-mono text-sm font-medium tracking-[0.18em] text-orange-300 transition-colors duration-300 group-hover:text-orange tabular-nums">
                    {sector.num}
                  </span>

                  {/* Nombre del sector en gran escala display. */}
                  <h3 className="flex-1 font-display text-2xl font-bold leading-none tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.7rem] lg:text-3xl">
                    {sector.name}
                  </h3>

                  {/* Alcance: en columna propia en >=sm, debajo en móvil. */}
                  <p className="hidden flex-1 text-sm leading-relaxed text-navy-200 sm:block">
                    {sector.desc}
                  </p>

                  {/* Índice de orden (i/14) como cota fina al margen derecho. */}
                  <span
                    className="hidden shrink-0 font-mono text-[0.7rem] tracking-[0.18em] text-white/25 lg:block tabular-nums"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}/14
                  </span>
                </div>

                {/* Descripción en móvil (la columna Alcance se oculta <sm). */}
                <p className="-mt-1 pb-5 pl-14 pr-2 text-xs leading-relaxed text-navy-200 sm:hidden">
                  {sector.desc}
                </p>
              </Reveal>
            ))}
          </ul>

          {/* Cierre: línea técnica de medida tipo cota. */}
          <Reveal variant="fade" delay={80}>
            <div className="mt-5 flex items-center gap-4">
              <span
                className="spec-line h-px flex-1 text-white/15"
                aria-hidden
              />
              <span className="kicker shrink-0 text-navy-300">
                Cobertura integral
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
