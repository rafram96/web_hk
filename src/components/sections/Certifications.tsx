import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { certifications } from "@/lib/site";

/**
 * Certificaciones — tira compacta de cinco sellos.
 *
 * Antes ocupaba una pantalla entera con fichas grandes. En una home de siete
 * secciones el dato relevante es "están certificados y aquí está el código";
 * el detalle largo no aportaba. Cada sello conserva su norma y su código de
 * certificación, que es lo que una entidad verifica. Server Component.
 */
export function Certifications() {
  return (
    <Section id="certificaciones" tone="light" flush className="py-16 lg:py-20">
      <div className="container-hk">
        <Reveal variant="fade">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <h2 className="kicker text-orange-600">
                Sistemas de gestión certificados
              </h2>
            </div>
            <span
              className="spec-line hidden h-px flex-1 text-navy/20 sm:block"
              aria-hidden
            />
            <span className="kicker shrink-0 text-slate-soft">
              Organismos acreditados
            </span>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.code}
              variant="fade"
              delay={i * 70}
              as="li"
              className="h-full"
            >
              <div className="group flex h-full flex-col items-center gap-4 bg-white px-4 py-8 text-center transition-colors duration-300 hover:bg-paper">
                {cert.image && (
                  <div className="relative h-20 w-28 shrink-0">
                    <Image
                      src={cert.image}
                      alt={`Certificación ${cert.name} — ${cert.scope}`}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                )}

                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-orange-600">
                    {cert.standard}
                  </p>
                  <p className="mt-3 text-xs leading-snug text-slate-soft">
                    {cert.scope}
                  </p>
                  <p className="mt-3 font-mono text-[0.6rem] tracking-wide text-navy/55">
                    {cert.code}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
