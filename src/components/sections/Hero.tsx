import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/site";

/**
 * Hero — primera impresión (above the fold). Server Component.
 * Composición editorial sobre azul marino de mando: fondo atmosférico en capas
 * (resplandor naranja + retícula técnica + viñeta), titular a gran escala,
 * imagen enmarcada con detalle de cota, índice de servicios con hairlines y una
 * barra de credenciales inferior. Full-bleed con overlay en móvil.
 */
export function Hero() {
  const introShort = company.intro.split(". ")[0] + ".";
  const lineas = company.subtitle.split(" · ");

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[680px] flex-col overflow-hidden bg-navy-950 pt-24 lg:pt-28 [min-height:94svh]"
    >
      {/* Imagen full-bleed (protagonista en móvil) */}
      <div className="absolute inset-0 -z-20 lg:hidden">
        <Image
          src="/images/hero-equipo-congreso.jpg"
          alt="Equipo de ingenieros de HK Consulting con cascos y chalecos azules frente al Congreso del Perú"
          fill
          priority
          sizes="(min-width: 1024px) 1px, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/55"
        />
      </div>

      {/* Capas de atmósfera (desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy lg:to-navy-900"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(72rem 52rem at 88% -8%, rgba(232,122,44,0.16), transparent 58%)",
        }}
      />
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10 opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-transparent"
      />

      {/* ---------- Contenido principal ---------- */}
      <div className="container-hk relative flex w-full flex-1 items-center py-14 lg:py-20">
        <div className="grid w-full items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          {/* Texto */}
          <div className="lg:col-span-7">
            <Reveal
              as="p"
              variant="fade"
              delay={0}
              className="kicker mb-6 flex items-center gap-3 text-orange"
            >
              <span aria-hidden className="h-px w-10 bg-orange" />
              Desde {company.foundedYear} &middot; Consultor&iacute;a en ingenier&iacute;a
            </Reveal>

            <Reveal
              as="h1"
              delay={90}
              className="text-balance text-[2.75rem] font-extrabold leading-[0.95] text-white sm:text-6xl lg:text-[4.75rem]"
            >
              Soluciones integrales en ingenier&iacute;a para{" "}
              <span className="relative text-orange">el desarrollo del pa&iacute;s</span>
            </Reveal>

            {/* Índice de servicios con hairlines */}
            <Reveal delay={180} className="mt-8">
              <ul className="flex flex-col gap-x-6 gap-y-2 border-t border-white/10 pt-5 font-display text-base font-semibold text-navy-100 sm:flex-row sm:flex-wrap sm:items-center">
                {lineas.map((linea, i) => (
                  <li key={linea} className="flex items-center gap-6">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="hidden h-4 w-px bg-white/20 sm:block"
                      />
                    )}
                    <span className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-[2px] bg-orange"
                      />
                      {linea}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              as="p"
              delay={240}
              className="mt-7 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg"
            >
              {introShort}
            </Reveal>

            <Reveal delay={320} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/servicios" variant="primary">
                Nuestros servicios
              </Button>
              <Button href="/#contacto" variant="white">
                Conversemos
              </Button>
            </Reveal>
          </div>

          {/* Imagen enmarcada (desktop) */}
          <Reveal variant="fade" delay={260} className="relative hidden lg:col-span-5 lg:block">
            {/* Panel técnico desplazado por detrás (profundidad) */}
            <div
              aria-hidden
              className="blueprint-grid absolute -right-7 -top-7 h-full w-full rounded-2xl border border-white/10 bg-navy-800/30"
            />

            <figure className="relative overflow-hidden rounded-2xl shadow-float ring-1 ring-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-equipo-congreso.jpg"
                  alt="Equipo de ingenieros de HK Consulting frente al Congreso del Perú"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Velo navy inferior para integrar y dar legibilidad al rótulo */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/5 to-transparent"
              />
              {/* Rótulo editorial */}
              <figcaption className="absolute inset-x-5 bottom-4 flex items-end justify-between">
                <span className="font-display text-lg font-bold text-white">
                  Equipo HK
                </span>
                <span className="kicker text-[0.6rem] text-orange-200">
                  Congreso · Lima
                </span>
              </figcaption>
            </figure>

            {/* Cota técnica: corchete naranja en la esquina */}
            <div
              aria-hidden
              className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-orange"
            />
            <div
              aria-hidden
              className="absolute -right-2 -top-2 h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_0_4px_rgba(232,122,44,0.25)]"
            />
          </Reveal>
        </div>
      </div>

      {/* ---------- Barra de credenciales ---------- */}
      <Reveal variant="fade" delay={420} className="relative border-t border-white/10">
        <div className="container-hk flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-x-8">
          <span className="kicker shrink-0 text-navy-300">Operamos bajo</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {company.normativa.map((item, i) => (
              <li key={item} className="flex items-center gap-6">
                {i > 0 && (
                  <span aria-hidden className="h-3.5 w-px bg-white/15" />
                )}
                <span className="font-mono text-xs tracking-wide text-navy-100">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Filete inferior de acento */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-orange/70 via-orange/15 to-transparent"
        />
      </Reveal>
    </section>
  );
}
