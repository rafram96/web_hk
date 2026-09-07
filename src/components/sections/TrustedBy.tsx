import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { trustedEntities } from "@/lib/site";

/**
 * Franja de prueba social bajo el hero: las entidades que han contratado a
 * HK, con el número de proyectos de cada una contado sobre `projects`.
 *
 * Sin logotipos todavía: los nombres se componen como sellos técnicos en
 * mono, coherentes con la dirección de "monografía técnica". Cuando lleguen
 * los archivos oficiales basta con rellenar el campo `logo` de cada entidad
 * en site.ts y esta tarjeta muestra la imagen en lugar del texto.
 * Server Component.
 */
export function TrustedBy() {
  return (
    <Section id="entidades" tone="mist" flush className="py-14 lg:py-16">
      <div className="container-hk">
        <Reveal variant="fade">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <h2 className="kicker text-orange-600">
                Entidades que confían en HK
              </h2>
            </div>
            <span
              className="spec-line hidden h-px flex-1 text-navy/20 sm:block"
              aria-hidden
            />
            <span className="kicker shrink-0 text-slate-soft">
              Sector público · Perú
            </span>
          </div>
        </Reveal>

        {/* Matriz de sellos con hairlines cálidos entre celdas. */}
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {trustedEntities.map((entidad, i) => (
            <Reveal
              key={entidad.entity}
              variant="fade"
              delay={i * 60}
              className="h-full"
            >
              <div className="flex h-full flex-col justify-between gap-4 bg-paper px-5 py-6 transition-colors duration-300 hover:bg-white">
                {entidad.logo ? (
                  <Image
                    src={entidad.logo}
                    alt={entidad.entity}
                    width={160}
                    height={48}
                    sizes="160px"
                    className="h-10 w-auto object-contain object-left"
                  />
                ) : (
                  <p
                    className="font-mono text-[0.72rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-navy"
                    title={entidad.entity}
                  >
                    {entidad.short}
                  </p>
                )}

                <p className="flex items-center gap-2">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-orange" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-soft">
                    {entidad.count}{" "}
                    {entidad.count === 1 ? "proyecto" : "proyectos"}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
