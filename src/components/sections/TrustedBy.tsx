import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { entityStats, trustedEntities } from "@/lib/site";

/**
 * Franja de prueba social bajo el hero.
 *
 * Arriba, tres cifras agregadas (entidades, gobiernos regionales,
 * ministerios) calculadas sobre `projects`. Debajo, una cinta en movimiento
 * lento con todas las entidades contratantes del portafolio, compuesta en
 * mono como un rótulo técnico. La cinta se pausa al pasar el cursor y se
 * detiene del todo con `prefers-reduced-motion` (ver globals.css).
 *
 * Sin logotipos todavía: cuando lleguen basta con rellenar `logo` en
 * site.ts y la cinta pinta la imagen (monocromo, a color al pasar el
 * cursor) en lugar del nombre. Server Component.
 */
export function TrustedBy() {
  const stats = [
    { value: entityStats.entidades, label: "Entidades contratantes" },
    { value: entityStats.gobiernosRegionales, label: "Gobiernos regionales" },
    { value: entityStats.ministerios, label: "Ministerios" },
  ];

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

        {/* Cifras agregadas: el argumento está en la amplitud, no en el
            conteo por entidad. */}
        <Reveal variant="fade" delay={80}>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 sm:gap-x-14">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <dd className="order-1 font-display text-4xl font-bold leading-none tracking-tight text-navy sm:text-5xl">
                  {s.value}
                </dd>
                <dt className="order-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-soft">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Cinta: sangra a todo el ancho; los bordes se desvanecen. */}
      <Reveal variant="fade" delay={160}>
        <div
          className="hk-tape group mt-10 border-y border-line/80 py-7"
          aria-label="Entidades contratantes del portafolio de HK Consulting"
        >
          <ul
            className="hk-tape-track flex w-max items-stretch gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
            /* Inline: la utilidad animate-marquee fija 40 s y pisaría una
               duración declarada en CSS. Una vuelta lenta para 31 tarjetas. */
            style={{ animationDuration: "140s" }}
          >
            {[0, 1].map((copy) =>
              trustedEntities.map((e) => (
                <li
                  key={`${copy}-${e.entity}`}
                  className="shrink-0"
                  aria-hidden={copy === 1 || undefined}
                >
                  {/* Mini tarjeta: monograma (o logo) + nombre + tipo. */}
                  <div
                    className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white/85 py-4 pl-4 pr-7 shadow-[0_2px_6px_rgba(4,57,91,0.06)] transition-colors duration-300 hover:border-orange/50 hover:bg-white"
                    title={`${e.entity} · ${e.count} ${e.count === 1 ? "proyecto" : "proyectos"}`}
                  >
                    {e.logo ? (
                      <Image
                        src={e.logo}
                        alt=""
                        width={56}
                        height={56}
                        sizes="56px"
                        className="h-14 w-14 rounded-xl object-contain"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy font-mono text-[0.8rem] font-semibold tracking-[0.1em] text-orange"
                      >
                        {e.monogram}
                      </span>
                    )}
                    <span className="flex flex-col">
                      <span className="whitespace-nowrap font-display text-[1.15rem] font-semibold leading-tight tracking-tight text-navy">
                        {e.short}
                      </span>
                      <span className="mt-1.5 whitespace-nowrap font-mono text-[0.68rem] uppercase tracking-[0.16em] text-slate-soft">
                        {e.kind}
                      </span>
                    </span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
