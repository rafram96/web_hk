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
    <Section id="metodologia" tone="light">
      <div className="container-hk">
        <SectionHeading
          kicker="Metodología"
          title="Cómo trabajamos"
          intro="Trabajamos en campo, levantamos información directa y documentamos cada hallazgo."
        />

        <div className="relative mt-16 lg:mt-20">
          {/* Línea conectora horizontal (desktop): eje punteado a la altura
              de los círculos numéricos. */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-line lg:block"
          />

          <ol className="grid gap-x-8 gap-y-12 lg:grid-cols-4">
            {howWeWork.map((step, index) => (
              <Reveal key={step.num} delay={index * 100} className="h-full">
                <li className="group relative h-full">
                  {/* Eje vertical (móvil / tablet): línea a la izquierda que
                      conecta los pasos apilados. Se oculta en el último. */}
                  {index < howWeWork.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-7 top-14 h-[calc(100%+3rem)] border-l-2 border-dashed border-line lg:hidden"
                    />
                  )}

                  <div className="flex items-start gap-5 lg:block">
                    {/* Círculo con la cifra grande. */}
                    <span className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 border-line bg-white font-display text-xl font-extrabold text-orange shadow-card transition-all duration-300 group-hover:border-orange group-hover:-translate-y-1">
                      {step.num}
                    </span>

                    <div className="lg:mt-7">
                      <h3 className="font-display text-lg text-navy lg:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-soft">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
