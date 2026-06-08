import { HeroCarousel, type HeroSlide } from "./HeroCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/site";

/**
 * Hero — "Plano de mando". Server Component.
 * Imagen del Congreso a pantalla completa tratada en duotono navy (aura
 * cinematográfica), corchetes de cota que enmarcan el lienzo como una lámina
 * técnica, titular breve y el ciclo de inversión referenciado de forma
 * simbólica (Idea · Proyecto · Obra), sin listar los servicios.
 */

const ciclo = [
  { n: "01", label: "Idea" },
  { n: "02", label: "Proyecto" },
  { n: "03", label: "Obra" },
];

/** Imágenes definitivas del carrusel del hero (alternan cada 10s). */
const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-congreso-fila.jpg",
    alt: "Equipo de ingenieros de HK Consulting frente al Congreso de la República del Perú",
    position: "50% 50%",
  },
  {
    src: "/images/hero-congreso-front.jpg",
    alt: "Ingeniero de HK Consulting frente al Congreso de la República del Perú",
    position: "50% 42%",
    fixed: true,
  },
  {
    src: "/images/equipo-completo.jpg",
    alt: "Equipo de HK Consulting frente al Palacio Legislativo del Perú en Lima",
    position: "50% 54%",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[760px] flex-col overflow-hidden bg-navy-950 pt-24 [min-height:100svh]"
    >
      {/* Fondo: carrusel de imágenes (crossfade cada 10s) en duotono navy */}
      <HeroCarousel slides={heroSlides} intervalMs={10000} />

      {/* Tinte navy de marca + scrim direccional (legibilidad abajo-izquierda) */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-navy-950/25" />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-tr from-navy-950 via-navy-950/55 to-navy-950/10"
      />
      {/* Scrim superior: mantiene legible la navbar sobre la imagen más brillante */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-20 h-40 bg-gradient-to-b from-navy-950/80 to-transparent"
      />
      {/* Viñeta envolvente + resplandor naranja de precisión + retícula técnica */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 95% at 50% 40%, transparent 46%, rgba(1,19,31,0.5) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(46rem 32rem at 86% 14%, rgba(232,122,44,0.16), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="blueprint-grid absolute inset-0 -z-10 opacity-25"
      />

      {/* Corchetes de cota: el viewport como lámina técnica */}
      <div aria-hidden className="pointer-events-none absolute inset-5 -z-10 hidden lg:block">
        <span className="absolute left-0 top-0 h-9 w-9 border-l-2 border-t-2 border-orange/70" />
        <span className="absolute right-0 top-0 h-9 w-9 border-r-2 border-t-2 border-white/20" />
        <span className="absolute bottom-0 left-0 h-9 w-9 border-b-2 border-l-2 border-white/20" />
        <span className="absolute bottom-0 right-0 h-9 w-9 border-b-2 border-r-2 border-orange/70" />
      </div>

      {/* ---------- Contenido: título arriba · ciclo + CTAs abajo ---------- */}
      <div className="container-hk relative flex w-full flex-1 flex-col justify-between pb-8 pt-3 lg:pb-10 lg:pt-5">
        {/* Arriba: título + kicker debajo */}
        <div className="max-w-3xl">
          <Reveal
            as="h1"
            delay={0}
            className="font-extrabold leading-[0.92] text-white"
          >
            <span className="block text-[clamp(2.6rem,7.5vw,6rem)]">
              Donde el pa&iacute;s
            </span>
            <span className="block text-[clamp(2.6rem,7.5vw,6rem)] text-orange">
              se construye
            </span>
          </Reveal>

          <Reveal as="p" variant="fade" delay={140} className="kicker mt-6 flex items-center gap-3 text-orange">
            <span aria-hidden className="h-px w-10 bg-orange" />
            {company.legalName} &middot; Desde {company.foundedYear} &middot; Lima
          </Reveal>
        </div>

        {/* Abajo: ciclo + CTAs */}
        <div className="max-w-3xl">
          {/* Ciclo de inversión referenciado de forma simbólica */}
          <Reveal delay={300} className="border-t border-white/15 pt-5">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
              {ciclo.map((etapa, i) => (
                <li key={etapa.n} className="flex items-center gap-5 sm:gap-7">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="spec-line hidden h-px w-10 text-white/30 sm:block lg:w-16"
                    />
                  )}
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs font-medium text-orange">
                      {etapa.n}
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight text-white">
                      {etapa.label}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href="/servicios" variant="primary">
              Nuestros servicios
            </Button>
            <a
              href="/#contacto"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              Conversemos
              <span aria-hidden className="text-orange transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Filete inferior de acento (cierre del hero) */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-orange/70 via-orange/15 to-transparent"
      />
    </section>
  );
}
