import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/site";

/**
 * Sección "Nosotros": quiénes somos + marco normativo. Vive en /nosotros.
 * La banda de cifras que antes cerraba esta sección se mudó a `Stats`, que
 * es ahora el único sitio de la web donde se muestran métricas.
 * Server Component.
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
                  Desde {company.foundedYear} impulsando{" "}
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

            {/* Marco normativo como chips compactos */}
            <Reveal delay={260} className="mt-10">
              <div className="flex items-center gap-3">
                <span className="kicker text-slate-soft">Marco normativo</span>
                <span className="spec-line h-px flex-1 text-navy/20" aria-hidden />
              </div>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {company.normativa.map((norma) => (
                  <li
                    key={norma}
                    className="rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-xs font-medium tracking-tight text-navy"
                  >
                    {norma}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Columna imagen — marco cuidado con overlap navy + cota */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal variant="zoom" delay={120}>
              <figure className="relative" data-parallax="54">
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
                    src="/images/equipo-completo.webp"
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

                {/* Badge flotante con el año de fundación */}
                <figcaption className="absolute -bottom-5 left-7 flex items-center gap-3.5 rounded-2xl bg-navy px-5 py-4 text-white shadow-[var(--shadow-float)]">
                  <span className="display-index text-[2.6rem] text-orange">
                    {company.foundedYear}
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
      </div>
    </Section>
  );
}
