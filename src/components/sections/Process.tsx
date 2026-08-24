import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howWeWork } from "@/lib/site";

/**
 * Sección "Cómo trabajamos" — la metodología de HK Consulting presentada
 * como una línea de tiempo técnica (stepper). En desktop se despliega
 * horizontal con una línea conectora punteada; en móvil colapsa a un
 * eje vertical con la línea a la izquierda. Server Component.
 */
export function Process() {
  return (
    <Section id="metodologia" tone="light" className="overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-8 select-none font-display text-[18rem] font-black leading-none text-navy/[0.025] lg:text-[28rem]"
      >
        04
      </span>
      <div className="container-hk">
        <SectionHeading
          kicker="Metodología"
          title="Cómo trabajamos"
          intro="Trabajamos en campo, levantamos información directa y documentamos cada hallazgo."
        />

        <Reveal delay={180} className="mt-16 lg:mt-20">
          <div className="blueprint-grid relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-8 shadow-[var(--shadow-float)] sm:px-9 lg:px-12 lg:py-11">
            <span
              aria-hidden
              className="absolute -right-8 -top-14 font-display text-[11rem] font-black leading-none text-white/[0.035] lg:text-[15rem]"
            >
              04
            </span>

            <div className="relative flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="kicker text-orange-300">Secuencia operativa</span>
                <p className="mt-2 max-w-xl font-display text-xl font-bold text-white sm:text-2xl">
                  Del terreno al documento entregable
                </p>
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-navy-300 uppercase">
                Control técnico · 01—04
              </span>
            </div>

            <div className="relative mt-9 lg:mt-11">
              <span
                aria-hidden
                className="absolute bottom-5 left-7 top-7 w-px bg-white/15 lg:hidden"
              />
              <span
                aria-hidden
                className="hk-process-line-y absolute bottom-5 left-7 top-7 w-px origin-top bg-orange lg:hidden"
              />
              <span
                aria-hidden
                className="absolute left-7 right-7 top-7 hidden h-px bg-white/15 lg:block"
              />
              <span
                aria-hidden
                className="hk-process-line-x absolute left-7 right-7 top-7 hidden h-px origin-left bg-orange lg:block"
              />

              <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
                {howWeWork.map((step, index) => (
                  <li
                    key={step.num}
                    className="hk-process-step group relative flex items-start gap-5 lg:block"
                    style={{ transitionDelay: `${360 + index * 150}ms` }}
                  >
                    <span className="relative z-10 flex size-14 flex-none items-center justify-center rounded-full border border-white/20 bg-navy-900 font-display text-xl font-extrabold text-orange shadow-[0_0_0_8px_rgba(2,30,48,0.92)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-orange group-hover:bg-orange group-hover:text-white lg:shadow-[0_0_0_10px_rgba(2,30,48,0.92)]">
                      {step.num}
                    </span>

                    <div className="pt-1 lg:mt-8 lg:pt-0">
                      <span className="font-mono text-[0.62rem] tracking-[0.2em] text-orange-300 uppercase">
                        Fase {step.num}
                      </span>
                      <h3 className="mt-2 font-display text-xl text-white lg:text-[1.35rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-200">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative mt-10 flex items-center gap-4 border-t border-white/10 pt-5">
              <span className="h-px flex-1 bg-gradient-to-r from-orange/80 to-transparent" />
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-navy-300 uppercase">
                Evidencia · trazabilidad · entrega
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
