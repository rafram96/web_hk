import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/site";

/**
 * Sección Hero — pantalla principal (above the fold).
 * Server Component. Composición split en lg (texto / imagen enmarcada),
 * y full-bleed con overlay navy en móvil. Dirección: autoridad
 * institucional de ingeniería (navy de mando + acento naranja, retícula
 * técnica tipo plano y detalles de coordenadas).
 */
export function Hero() {
  // Intro recortada (~1-2 líneas) a partir de company.intro.
  const introShort = company.intro.split(". ")[0] + ".";

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-navy-950 pt-20 [min-height:90svh]"
    >
      {/* Imagen de fondo full-bleed (protagonista en móvil) */}
      <div className="absolute inset-0 -z-20 lg:hidden">
        <Image
          src="/images/hero-equipo-congreso.jpg"
          alt="Equipo de ingenieros de HK Consulting con cascos y chalecos azules frente al Congreso del Perú"
          fill
          priority
          sizes="(min-width: 1024px) 1px, 100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Capas de fondo (overlay + retícula técnica) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900 lg:from-navy-950 lg:via-navy-900 lg:to-navy" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent lg:hidden"
      />
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10 opacity-60" />

      {/* Detalle gráfico: regla de coordenadas vertical (sutil, solo desktop) */}
      <div
        aria-hidden
        className="absolute left-10 top-0 hidden h-full w-px bg-white/10 lg:block"
      >
        <span className="kicker absolute -left-1 top-32 -rotate-90 whitespace-nowrap text-white/30">
          E 12&deg;02&prime;46&Prime; S
        </span>
      </div>

      <div className="container-hk relative w-full py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* ---------- Bloque de texto ---------- */}
          <div className="max-w-2xl">
            <Reveal as="p" delay={0} className="kicker mb-5 flex items-center gap-3 text-orange">
              <span aria-hidden className="h-px w-8 bg-orange" />
              Desde {company.foundedYear} &middot; Consultor&iacute;a en ingenier&iacute;a
            </Reveal>

            <Reveal as="h1" delay={80} className="text-4xl text-white sm:text-5xl lg:text-6xl">
              Soluciones integrales en ingenier&iacute;a para{" "}
              <span className="text-orange">el desarrollo del pa&iacute;s</span>
            </Reveal>

            <Reveal as="p" delay={160} className="mt-6 font-display text-lg font-semibold text-navy-100 sm:text-xl">
              {company.subtitle}
            </Reveal>

            <Reveal as="p" delay={220} className="mt-4 max-w-xl text-base leading-relaxed text-navy-100/85">
              {introShort}
            </Reveal>

            <Reveal delay={300} className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/servicios" variant="primary">
                Nuestros servicios
              </Button>
              <Button href="/#contacto" variant="white">
                Conversemos
              </Button>
            </Reveal>

            {/* Chips de marco normativo */}
            <Reveal delay={380} className="mt-10 flex flex-wrap gap-2.5">
              {company.normativa.map((item) => (
                <span
                  key={item}
                  className="kicker rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[0.62rem] tracking-[0.18em] text-navy-100/80 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </Reveal>
          </div>

          {/* ---------- Imagen enmarcada (desktop) ---------- */}
          <Reveal variant="fade" delay={240} className="relative hidden lg:block">
            {/* Panel de retícula desplazado por detrás (overlap) */}
            <div
              aria-hidden
              className="blueprint-grid absolute -right-6 -top-6 h-full w-full rounded-sm border border-white/10 bg-navy-800/40"
            />

            {/* Marco de la imagen */}
            <div className="relative overflow-hidden rounded-sm shadow-float ring-1 ring-white/10">
              <Image
                src="/images/hero-equipo-congreso.jpg"
                alt="Equipo de ingenieros de HK Consulting con cascos y chalecos azules frente al Congreso del Perú"
                width={600}
                height={450}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full object-cover"
              />
              {/* Velo navy sutil para integrar con la paleta */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent mix-blend-multiply"
              />
            </div>

            {/* Acento naranja en la esquina */}
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 h-20 w-20 border-b-4 border-l-4 border-orange"
            />
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-3 w-3 rounded-full bg-orange shadow-[0_0_0_4px_rgba(232,122,44,0.25)]"
            />

            {/* Etiqueta tipo cota técnica */}
            <span className="kicker absolute -bottom-4 right-2 bg-navy-950 px-2 py-1 text-[0.6rem] text-orange-200">
              FIG.01 &mdash; Equipo HK
            </span>
          </Reveal>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <a
        href="#nosotros"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-orange md:flex"
      >
        <span className="kicker text-[0.6rem]">Scroll</span>
        <span aria-hidden className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-current" />
        </span>
      </a>

      {/* Franja decorativa inferior con retícula */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange/60 to-transparent"
      />
    </section>
  );
}
