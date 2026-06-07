import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { mision, vision, valores } from "@/lib/site";

type Pillar = {
  /** Etiqueta corta (Misión / Visión). */
  label: string;
  /** Numeral decorativo. */
  numeral: string;
  /** Declaración principal. */
  body: string;
};

const pillars: Pillar[] = [
  { label: "Misión", numeral: "01", body: mision },
  { label: "Visión", numeral: "02", body: vision },
];

/**
 * Sección "Propósito" — Misión, Visión y Valores.
 * Server Component sobre fondo navy con retícula técnica.
 */
export function MissionVision() {
  return (
    <Section id="proposito" tone="navy">
      {/* Capa decorativa: retícula de plano + resplandor radial sutil. */}
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(60rem 40rem at 78% -10%, rgba(232,122,44,0.16), transparent 60%)",
        }}
      />

      <div className="container-hk relative">
        <SectionHeading
          tone="dark"
          kicker="Propósito"
          title="Misión y visión"
        />

        {/* Dos paneles institucionales lado a lado. */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 p-8 transition-colors duration-300 hover:border-white/20 lg:p-10">
                {/* Numeral decorativo en marca de agua. */}
                <span
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-extrabold leading-none text-white/[0.04] lg:text-[9rem]"
                  aria-hidden
                >
                  {pillar.numeral}
                </span>

                <div className="relative">
                  <span className="accent-rule block" aria-hidden />
                  <p className="kicker mt-5 text-orange-300">{pillar.label}</p>
                  <p className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.7rem]">
                    {pillar.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Valores. */}
        <div className="mt-16 lg:mt-20">
          <Reveal variant="fade">
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <span className="kicker text-orange-300">Nuestros valores</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor, index) => (
              <Reveal key={valor.title} delay={index * 80} className="h-full">
                <div className="group relative flex h-full flex-col bg-navy-900/60 p-7 transition-colors duration-300 hover:bg-navy-800/70">
                  {/* Marcador geométrico + numeral. */}
                  <div className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5 shrink-0 text-orange transition-transform duration-300 group-hover:rotate-45"
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
                    <span className="font-mono text-xs font-medium tracking-[0.2em] text-orange-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {valor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">
                    {valor.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
