import { BgVideo } from "@/components/ui/BgVideo";
import { Reveal } from "@/components/ui/Reveal";
import { supervisedInvestment } from "@/lib/site";

/* Fondo en vídeo: excavadora cargando en obra, 10 s en bucle, 720p, 2 MB.
   Material de archivo (Pexels, licencia libre) como relleno provisional
   hasta que HK entregue tomas propias; el póster es su primer fotograma. */
const VIDEO = "/videos/obra-supervision.mp4";
const POSTER = "/videos/obra-supervision-poster.webp";

/**
 * Sección de respiro entre Proyectos y Cifras: una foto a pantalla completa
 * y una sola línea. El importe se calcula en build time sumando los montos
 * de `projects`; el pie aclara sobre cuántos contratos, porque 22 de los 51
 * proyectos no traen monto en el brochure y la cifra no debe leerse como el
 * total de la trayectoria. Server Component.
 */
export function Investment() {
  const millones = supervisedInvestment.millions.toLocaleString("es-PE");

  return (
    <section
      id="inversion"
      aria-label="Inversión supervisada"
      className="relative isolate flex min-h-[68svh] items-center overflow-hidden bg-navy-950 text-white"
    >
      <BgVideo src={VIDEO} poster={POSTER} position="50% 55%" />

      {/* Velo en tres capas, como el hero: una base uniforme, un degradado
          direccional que da contraste al texto de la izquierda y otro
          vertical que asienta la sección. Densidad suficiente para leer la
          línea sin llegar a apagar la foto. */}
      <div aria-hidden className="absolute inset-0 bg-navy-950/45" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/45 to-navy-950/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/45"
      />
      <div className="blueprint-grid absolute inset-0 opacity-25" aria-hidden />

      <div className="container-hk relative py-24 lg:py-32">
        <Reveal variant="fade">
          <div className="flex items-center gap-3">
            <span className="accent-rule" aria-hidden />
            <span className="kicker text-orange-300">Inversión supervisada</span>
          </div>
        </Reveal>

        <Reveal variant="headline" delay={80}>
          <h2 className="mt-7 max-w-[20ch] text-[2.6rem] leading-[0.95] text-white sm:text-6xl lg:text-[5rem]">
            Más de{" "}
            <span className="text-orange">S/ {millones} millones</span> en obra
            supervisada
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-9 flex max-w-2xl items-start gap-3 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-navy-200">
            <span
              aria-hidden
              className="mt-2 h-px w-8 shrink-0 bg-orange/70"
            />
            <span>
              Suma de los {supervisedInvestment.contracts} contratos con monto
              registrado en el portafolio
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
