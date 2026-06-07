"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import {
  type Project,
  experienceByType,
  projectCounts,
  featuredProjects,
  projects,
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
      <span
        aria-hidden
        className={`relative flex h-1.5 w-1.5 ${live ? "" : ""}`}
      >
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
/* Tarjeta destacada rica: imagen opcional con zoom + overlay navy,
   estado, código mono, título display, entidad, sector y monto.      */
/* ------------------------------------------------------------------ */
function FeaturedCard({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
      {/* Acento naranja superior que crece en hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-[0.22] bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {hasImage ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
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
            className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent"
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
        <h3 className="font-display text-lg font-bold leading-snug text-navy">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">
          {project.entity}
        </p>

        {/* Pie técnico: tipo + monto */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-navy-400">
            {project.type}
          </span>
          <span className="font-mono text-sm font-medium text-navy">
            {project.amount}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Sección "Proyectos / Trayectoria".                                  */
/* ------------------------------------------------------------------ */
const ESTADOS = ["Todos", "Terminado", "En ejecución"] as const;
type Estado = (typeof ESTADOS)[number];

export function Projects() {
  /* Portafolio combinado y deduplicado por code. */
  const allProjects = useMemo<Project[]>(() => {
    const map = new Map<string, Project>();
    for (const p of [...featuredProjects, ...projects]) {
      if (!map.has(p.code)) map.set(p.code, p);
    }
    return Array.from(map.values());
  }, []);

  /* Sectores únicos derivados de los datos, ordenados alfabéticamente. */
  const sectorOptions = useMemo<string[]>(() => {
    const set = new Set(allProjects.map((p) => p.sector));
    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b, "es"))];
  }, [allProjects]);

  const [sector, setSector] = useState<string>("Todos");
  const [estado, setEstado] = useState<Estado>("Todos");

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const okSector = sector === "Todos" || p.sector === sector;
      const okEstado = estado === "Todos" || p.status === estado;
      return okSector && okEstado;
    });
  }, [allProjects, sector, estado]);

  return (
    <Section id="proyectos" tone="light">
      <div className="container-hk">
        {/* 1) Encabezado */}
        <SectionHeading
          kicker="Trayectoria"
          title="Más de 50 proyectos a lo largo del Perú"
          intro="Experiencia comprobada en todo el ciclo de inversión pública y privada."
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

        {/* 3) Resumen de estado */}
        <Reveal delay={120} className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-navy-200 bg-navy-50 px-4 py-2">
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-navy-400"
              />
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.code} delay={(i % 3) * 90} className="h-full">
                <FeaturedCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* 5) Portafolio filtrable */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-end gap-3">
              <span className="accent-rule mb-1.5" aria-hidden />
              <div>
                <span className="kicker text-orange-600">Portafolio</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy lg:text-3xl">
                  Explora el portafolio completo
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Controles de filtro */}
          <Reveal delay={80} className="mt-8">
            <div className="space-y-5 rounded-2xl border border-line bg-mist p-5 lg:p-6">
              {/* Filtro por estado */}
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <span className="kicker shrink-0 text-navy-300 sm:w-24">
                  Estado
                </span>
                <div className="flex flex-wrap gap-2">
                  {ESTADOS.map((e) => {
                    const active = estado === e;
                    return (
                      <button
                        key={e}
                        type="button"
                        onClick={() => setEstado(e)}
                        aria-pressed={active}
                        className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium tracking-[0.08em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                          active
                            ? "border-navy bg-navy text-white"
                            : "border-line bg-white text-slate-soft hover:border-navy-300 hover:text-navy"
                        }`}
                      >
                        {e}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filtro por sector */}
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start">
                <span className="kicker shrink-0 pt-1.5 text-navy-300 sm:w-24">
                  Sector
                </span>
                <div className="flex flex-wrap gap-2">
                  {sectorOptions.map((s) => {
                    const active = sector === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSector(s)}
                        aria-pressed={active}
                        className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium tracking-[0.08em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                          active
                            ? "border-orange bg-orange text-white"
                            : "border-line bg-white text-slate-soft hover:border-orange-300 hover:text-orange-700"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contador de resultados */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <p className="font-mono text-sm text-slate-soft">
              <span className="font-semibold text-navy">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "proyecto" : "proyectos"}
            </p>
            {(sector !== "Todos" || estado !== "Todos") && (
              <button
                type="button"
                onClick={() => {
                  setSector("Todos");
                  setEstado("Todos");
                }}
                className="font-mono text-xs font-medium tracking-[0.08em] text-orange-600 underline-offset-4 transition-colors hover:text-orange-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Lista filtrada — filas técnicas (sin Reveal por fila) */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-line">
            {/* Cabecera de tabla (solo desktop) */}
            <div className="hidden grid-cols-[5rem_1fr_9rem_7rem_10rem_8rem] gap-4 border-b border-line bg-mist px-5 py-3 lg:grid">
              {["Código", "Proyecto", "Sector", "Fecha", "Monto", "Estado"].map(
                (h) => (
                  <span
                    key={h}
                    className="kicker text-navy-300"
                  >
                    {h}
                  </span>
                )
              )}
            </div>

            {filtered.length === 0 ? (
              <p className="px-5 py-10 text-center text-sm text-slate-soft">
                No hay proyectos que coincidan con los filtros seleccionados.
              </p>
            ) : (
              <ul className="divide-y divide-line">
                {filtered.map((p) => (
                  <li
                    key={p.code}
                    className="group grid grid-cols-1 gap-x-4 gap-y-1.5 px-5 py-4 transition-colors duration-200 hover:bg-mist lg:grid-cols-[5rem_1fr_9rem_7rem_10rem_8rem] lg:items-center"
                  >
                    <span className="font-mono text-sm font-medium text-orange-600">
                      #{p.code}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-[0.95rem] font-bold leading-snug text-navy">
                        {p.title}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-slate-soft">
                        {p.entity}
                      </p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-navy-500">
                      <span className="text-navy-300 lg:hidden">Sector: </span>
                      {p.sector}
                    </span>
                    <span className="font-mono text-xs text-slate-soft">
                      <span className="text-navy-300 lg:hidden">Fecha: </span>
                      {p.date}
                    </span>
                    <span className="font-mono text-sm text-navy">
                      {p.amount}
                    </span>
                    <span className="mt-1 lg:mt-0">
                      <StatusBadge status={p.status} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
