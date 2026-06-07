import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { sectors } from "@/lib/site";

/**
 * Sección "Sectores atendidos" — los 14 sectores estratégicos.
 * Server Component sobre fondo navy muy oscuro con retícula técnica
 * tipo plano. Cada sector se presenta como una celda densa pero elegante
 * con numeral en marca de agua y marcador geométrico de acento.
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
        <SectionHeading
          tone="dark"
          kicker="Sectores"
          title="14 sectores estratégicos del desarrollo nacional"
          intro="Atendemos proyectos en sectores estratégicos del desarrollo nacional, de la salud a la infraestructura portuaria."
        />

        {/* Retícula de 14 sectores: 2 col móvil · 3 tablet · 4 desktop. */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {sectors.map((sector, index) => (
            <Reveal
              key={sector.num}
              delay={(index % 4) * 60}
              className="h-full"
            >
              <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-navy-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:bg-navy-800/70 hover:shadow-float lg:p-6">
                {/* Numeral en marca de agua. */}
                <span
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-[4.5rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07] lg:text-[5.5rem]"
                  aria-hidden
                >
                  {sector.num}
                </span>

                <div className="relative">
                  {/* Marcador geométrico + numeral en mono naranja. */}
                  <div className="flex items-center gap-2.5">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3 shrink-0 text-orange transition-transform duration-300 group-hover:rotate-45"
                      aria-hidden
                    >
                      <rect
                        x="1"
                        y="1"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="font-mono text-xs font-medium tracking-[0.22em] text-orange-300">
                      {sector.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold leading-tight text-white lg:text-lg">
                    {sector.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-200">
                    {sector.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
