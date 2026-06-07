import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import {
  type Project,
  experienceByType,
  projectCounts,
  homeHighlights,
} from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Badge de estado: naranja para "En ejecución", teal/navy para
   "Terminado". Punto de color + etiqueta mono compacta.              */
/* ------------------------------------------------------------------ */
function StatusBadge({
  status,
  className = "",
}: {
  status: Project["status"];
  className?: string;
}) {
  const live = status === "En ejecución";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.64rem] font-medium uppercase tracking-[0.16em] ${
        live
          ? "border-orange/30 bg-orange-50 text-orange-700"
          : "border-navy-200 bg-navy-50 text-navy-500"
      } ${className}`}
    >
      <span aria-hidden className="relative flex h-1.5 w-1.5">
        {live && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            live ? "bg-orange" : "bg-navy-400"
          }`}
        />
      </span>
      {status}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Tarjeta destacada: enlace a la ficha del proyecto. Imagen de
   portada con zoom + overlay navy, estado, código mono, título
   display, entidad, sector y monto. Flecha "Ver ficha →" en hover.   */
/* ------------------------------------------------------------------ */
function FeaturedCard({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
      {/* Acento naranja superior que crece en hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-[0.22] bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {hasImage ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Overlay navy para legibilidad y profundidad */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent transition-opacity duration-300 group-hover:from-navy-950/90"
          />
          {/* Estado sobre la imagen */}
          <div className="absolute left-4 top-4 z-10">
            <StatusBadge status={project.status} className="backdrop-blur-sm" />
          </div>
          {/* Código mono + sector sobre la imagen */}
          <div className="absolute inset-x-4 bottom-3.5 z-10 flex items-end justify-between gap-3">
            <span className="font-mono text-xs font-medium tracking-[0.16em] text-orange-200">
              #{project.code}
            </span>
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-navy-100">
              {project.sector}
            </span>
          </div>
        </div>
      ) : (
        // Sin imagen: cabecera técnica con retícula tipo plano
        <div className="relative overflow-hidden bg-navy px-6 pb-5 pt-6">
          <span
            aria-hidden
            className="blueprint-grid pointer-events-none absolute inset-0 opacity-50"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-3 -top-5 select-none font-display text-[5.5rem] font-extrabold leading-none text-white/[0.05]"
          >
            {project.code}
          </span>
          <div className="relative flex items-center justify-between">
            <StatusBadge status={project.status} />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-navy-100">
              {project.sector}
            </span>
          </div>
          <span className="relative mt-6 block font-mono text-xs font-medium tracking-[0.16em] text-orange-200">
            #{project.code}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-display text-lg font-bold leading-snug text-navy">
          {project.title}
        </h4>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">
          {project.entity}
        </p>

        {/* Pie técnico: monto + CTA "Ver ficha" */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="font-mono text-sm font-medium text-navy">
            {project.amount}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-orange-600 transition-colors group-hover:text-orange-700">
            Ver ficha
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Sección "Proyectos / Trayectoria" (home). Server Component:
   resumen de experiencia + destacados + CTA al portafolio completo.  */
/* ------------------------------------------------------------------ */
export function Projects() {
  return (
    <Section id="proyectos" tone="light">
      <div className="container-hk">
        {/* 1) Encabezado */}
        <SectionHeading
          kicker="Trayectoria"
          title="Más de 50 proyectos a lo largo del Perú"
          intro="Experiencia comprobada en todo el ciclo de inversión pública y privada, de Tumbes a Tacna."
        />

        {/* 2) Experiencia por tipo de servicio */}
        <Reveal delay={80} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-line bg-mist">
            <div className="border-b border-line px-6 py-4">
              <span className="kicker text-navy-300">
                Experiencia por tipo de servicio
              </span>
            </div>
            <div className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
              {experienceByType.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative p-6 lg:p-7 ${
                    i < 2 ? "border-b border-line lg:border-b-0" : ""
                  } ${i % 2 === 1 ? "border-l border-line lg:border-l-0" : ""}`}
                >
                  <span className="block font-display text-4xl font-extrabold leading-none text-orange lg:text-5xl">
                    <Counter value={item.count} />
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold leading-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-soft">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 3) Pills de estado */}
        <Reveal delay={120} className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-navy-200 bg-navy-50 px-4 py-2">
              <span aria-hidden className="h-2 w-2 rounded-full bg-navy-400" />
              <span className="font-mono text-sm font-medium text-navy">
                <Counter value={projectCounts.terminados} /> Terminados
              </span>
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-orange/30 bg-orange-50 px-4 py-2">
              <span aria-hidden className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              <span className="font-mono text-sm font-medium text-orange-700">
                <Counter value={projectCounts.enEjecucion} /> En ejecución
              </span>
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-navy bg-navy px-4 py-2">
              <span aria-hidden className="h-2 w-2 rounded-full bg-orange" />
              <span className="font-mono text-sm font-semibold text-white">
                <Counter value={50} prefix="+" /> Total
              </span>
            </span>
          </div>
        </Reveal>

        {/* 4) Proyectos destacados */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-end gap-3">
              <span className="accent-rule mb-1.5" aria-hidden />
              <div>
                <span className="kicker text-orange-600">
                  Proyectos destacados
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy lg:text-3xl">
                  Obras e infraestructura de alto impacto
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {homeHighlights.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 90} className="h-full">
                <FeaturedCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* 5) CTA al portafolio completo */}
        <Reveal delay={80} className="mt-14">
          <div className="flex justify-center">
            <Button href="/proyectos" variant="primary">
              Ver más proyectos
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
