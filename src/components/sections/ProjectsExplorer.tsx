"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { type Project, projects, sectors } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Badge de estado: naranja para "En ejecución", teal/navy para        */
/* "Terminado". Punto de color + etiqueta mono compacta.               */
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
/* Tarjeta de proyecto enlazada a su ficha de detalle.                 */
/* Con imagen: portada 4/3 + zoom hover. Sin imagen: cabecera navy     */
/* técnica con retícula tipo plano y #code como marca de agua.         */
/* ------------------------------------------------------------------ */
function ProjectCard({ project }: { project: Project }) {
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
            className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/15 to-transparent"
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
        <div className="relative aspect-[4/3] overflow-hidden bg-navy px-6 pb-5 pt-6">
          <span
            aria-hidden
            className="blueprint-grid pointer-events-none absolute inset-0 opacity-50"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-3 bottom-1 select-none font-display text-[7rem] font-black leading-none text-white/[0.06]"
          >
            {project.code}
          </span>
          <div className="relative flex items-center justify-between">
            <StatusBadge status={project.status} />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-navy-100">
              {project.sector}
            </span>
          </div>
          <span className="relative mt-auto block pt-10 font-mono text-xs font-medium tracking-[0.16em] text-orange-200">
            #{project.code}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-3 font-display text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-navy-700">
          {project.title}
        </h3>

        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-slate-soft">
          {project.entity}
        </p>

        {/* Sector · tipo */}
        <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-navy-400">
          {project.sector} · {project.type}
        </p>

        {/* Pie técnico: fecha + monto */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="font-mono text-xs text-slate-soft">{project.date}</span>
          <span className="font-mono text-sm font-medium text-navy">
            {project.amount}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Grupo de pills de filtro reutilizable.                              */
/* ------------------------------------------------------------------ */
function FilterRow({
  label,
  options,
  active,
  onSelect,
  accent = "navy",
}: {
  label: string;
  options: string[];
  active: string;
  onSelect: (value: string) => void;
  accent?: "navy" | "orange";
}) {
  const activeCls =
    accent === "orange"
      ? "border-orange bg-orange text-white"
      : "border-navy bg-navy text-white";
  const idleCls =
    accent === "orange"
      ? "border-line bg-white text-slate-soft hover:border-orange-300 hover:text-orange-700"
      : "border-line bg-white text-slate-soft hover:border-navy-300 hover:text-navy";
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start">
      <span className="kicker shrink-0 pt-1.5 text-navy-300 sm:w-24">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isActive = active === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              aria-pressed={isActive}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium tracking-[0.08em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                isActive ? activeCls : idleCls
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Explorador completo: filtros por estado, sector, tipo y búsqueda.   */
/* ------------------------------------------------------------------ */
const ESTADOS = ["Todos", "Terminado", "En ejecución"] as const;
type Estado = (typeof ESTADOS)[number];

/** Convierte el código a número para un orden estable y descendente. */
function codeToNumber(code: string): number {
  const n = parseInt(code, 10);
  return Number.isNaN(n) ? 0 : n;
}

export function ProjectsExplorer() {
  /* Orden por defecto: con imagen primero (código descendente, recientes
     primero); los proyectos sin imagen quedan al final del listado. */
  const ordered = useMemo<Project[]>(() => {
    return [...projects].sort((a, b) => {
      const imgDiff = (a.image ? 0 : 1) - (b.image ? 0 : 1);
      if (imgDiff !== 0) return imgDiff;
      const diff = codeToNumber(b.code) - codeToNumber(a.code);
      if (diff !== 0) return diff;
      return a.slug.localeCompare(b.slug, "es");
    });
  }, []);

  /* Sectores presentes en los datos, en el orden canónico de site.ts. */
  const sectorOptions = useMemo<string[]>(() => {
    const present = new Set(ordered.map((p) => p.sector));
    const ordenados = sectors
      .map((s) => s.name)
      .filter((name) => present.has(name));
    // Incluye cualquier sector presente que no esté en el catálogo canónico.
    for (const p of ordered) {
      if (!ordenados.includes(p.sector)) ordenados.push(p.sector);
    }
    return ["Todos", ...ordenados];
  }, [ordered]);

  /* Tipos presentes en los datos, ordenados alfabéticamente. */
  const typeOptions = useMemo<string[]>(() => {
    const set = new Set(ordered.map((p) => p.type));
    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b, "es"))];
  }, [ordered]);

  const [estado, setEstado] = useState<Estado>("Todos");
  const [sector, setSector] = useState<string>("Todos");
  const [tipo, setTipo] = useState<string>("Todos");
  const [query, setQuery] = useState<string>("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ordered.filter((p) => {
      const okEstado = estado === "Todos" || p.status === estado;
      const okSector = sector === "Todos" || p.sector === sector;
      const okTipo = tipo === "Todos" || p.type === tipo;
      const okQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.entity.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q);
      return okEstado && okSector && okTipo && okQuery;
    });
  }, [ordered, estado, sector, tipo, query]);

  const activeCount =
    (estado !== "Todos" ? 1 : 0) +
    (sector !== "Todos" ? 1 : 0) +
    (tipo !== "Todos" ? 1 : 0) +
    (query.trim() !== "" ? 1 : 0);
  const hasFilters = activeCount > 0;

  function clearFilters() {
    setEstado("Todos");
    setSector("Todos");
    setTipo("Todos");
    setQuery("");
  }

  return (
    <Section tone="light">
      <div className="blueprint-grid-ink absolute inset-0" aria-hidden />
      <div className="container-hk relative">
        {/* Encabezado del explorador */}
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-3">
              <span className="accent-rule mb-1.5" aria-hidden />
              <div>
                <span className="kicker text-orange-600">
                  Portafolio · Explorador
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy lg:text-3xl">
                  Filtra los proyectos
                </h2>
              </div>
            </div>

            {/* Botón para desplegar/ocultar los filtros */}
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
              aria-controls="panel-filtros"
              className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-navy/15 bg-white px-5 py-2.5 font-mono text-xs font-medium tracking-[0.1em] text-navy shadow-card transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
                aria-hidden
              >
                <path
                  d="M3 5h14M6 10h8M9 15h2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              {filtersOpen ? "Ocultar filtros" : "Filtrar proyectos"}
              {activeCount > 0 && (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-orange px-1.5 text-[0.62rem] font-bold text-white">
                  {activeCount}
                </span>
              )}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`size-4 transition-transform duration-300 ${
                  filtersOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                <path
                  d="m6 8 4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Reveal>

        {/* Controles de filtro (desplegables) */}
        <div
          id="panel-filtros"
          className={`grid transition-all duration-300 ease-out ${
            filtersOpen
              ? "mt-8 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-5 rounded-2xl border border-line bg-mist p-5 lg:p-6">
            {/* Búsqueda por texto */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <label
                htmlFor="busqueda-proyectos"
                className="kicker shrink-0 text-navy-300 sm:w-24"
              >
                Búsqueda
              </label>
              <div className="relative w-full sm:max-w-md">
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-300"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="size-4">
                    <circle
                      cx="9"
                      cy="9"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="m17 17-3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  id="busqueda-proyectos"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Título, entidad o código…"
                  className="w-full rounded-full border border-line bg-white py-2 pl-10 pr-4 font-sans text-sm text-ink placeholder:text-navy-300 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
                />
              </div>
            </div>

            <FilterRow
              label="Estado"
              options={[...ESTADOS]}
              active={estado}
              onSelect={(v) => setEstado(v as Estado)}
            />
            <FilterRow
              label="Sector"
              options={sectorOptions}
              active={sector}
              onSelect={setSector}
              accent="orange"
            />
            <FilterRow
              label="Tipo"
              options={typeOptions}
              active={tipo}
              onSelect={setTipo}
            />
            </div>
          </div>
        </div>

        {/* Contador de resultados + limpiar */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <p className="font-mono text-sm text-slate-soft">
            <span className="font-semibold text-navy">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "proyecto" : "proyectos"}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="font-mono text-xs font-medium tracking-[0.08em] text-orange-600 underline-offset-4 transition-colors hover:text-orange-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid de tarjetas */}
        {filtered.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-line bg-mist px-6 py-16 text-center">
            <p className="font-display text-lg font-bold text-navy">
              Sin coincidencias
            </p>
            <p className="mt-2 text-sm text-slate-soft">
              No hay proyectos que coincidan con los filtros seleccionados.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex rounded-full border border-navy/20 px-5 py-2 font-mono text-xs font-medium tracking-[0.08em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
