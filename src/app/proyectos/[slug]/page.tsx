import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { type Project, type ProjectStatus, projects, company } from "@/lib/site";

/* ================================================================
   Generación estática: una página por slug (51 en total).
   ================================================================ */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* ================================================================
   Metadatos por proyecto.
   ================================================================ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  /* Título recortado para no romper el límite de la pestaña/SEO. */
  const shortTitle =
    project.title.length > 64
      ? `${project.title.slice(0, 61).trimEnd()}…`
      : project.title;

  const description = `Proyecto ${project.type} en el sector ${project.sector} desarrollado por ${company.shortName} para ${project.entity}. ${
    project.status === "En ejecución"
      ? "Actualmente en ejecución."
      : "Proyecto culminado."
  }`;

  return {
    title: shortTitle,
    description,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${shortTitle} · ${company.shortName}`,
      description,
      ...(project.image
        ? { images: [{ url: project.image, width: 1200, height: 630 }] }
        : {}),
    },
  };
}

/* ================================================================
   Badge de estado (inline en esta página).
   ================================================================ */
function StatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
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

/* ================================================================
   Párrafo descriptivo profesional derivado de los campos del
   proyecto (sin inventar cifras). Plantilla según `type`.
   ================================================================ */
function buildDescription(project: Project): string {
  const { type, sector, entity, status, postor } = project;
  const sectorLower = sector.toLowerCase();
  const estadoFrase =
    status === "En ejecución"
      ? "El servicio se encuentra actualmente en ejecución, con seguimiento continuo de los compromisos asumidos."
      : "El encargo fue culminado conforme a los alcances contractuales y la normativa vigente.";

  const consorcioFrase =
    postor && postor !== "HK"
      ? ` HK Consulting participó como integrante de ${postor}, aportando su experiencia técnica al equipo responsable.`
      : "";

  switch (type) {
    case "Preinversión":
      return `${company.shortName} desarrolló este estudio de preinversión para ${entity}, dentro del sector ${sectorLower}, bajo el marco del Sistema Nacional de Programación Multianual y Gestión de Inversiones (Invierte.pe). El trabajo comprendió el análisis del contexto, la evaluación de alternativas y el sustento técnico, económico y social necesario para asegurar la viabilidad y sostenibilidad de la inversión.${consorcioFrase} ${estadoFrase}`;

    case "Expediente Técnico":
      return `${company.shortName} elaboró el expediente técnico de esta intervención en el sector ${sectorLower} para ${entity}, integrando ingeniería, especialidades, metrados, costos, presupuesto y especificaciones técnicas. El entregable se preparó conforme a la normativa aplicable y al Reglamento Nacional de Edificaciones, listo para los procesos de selección y para la ejecución de la obra.${consorcioFrase} ${estadoFrase}`;

    case "Supervisión":
      return `${company.shortName} brindó la supervisión técnica, administrativa y de calidad de esta obra del sector ${sectorLower} para ${entity}, controlando plazos, presupuesto, calidad y seguridad (SSOMA) durante la ejecución. La labor incluyó la verificación en campo del cumplimiento del expediente y una gestión documentaria rigurosa que protege los intereses de la entidad.${consorcioFrase} ${estadoFrase}`;

    case "Preinversión y Expediente":
      return `${company.shortName} acompañó esta intervención del sector ${sectorLower} para ${entity} en dos etapas del ciclo de inversión: la formulación y evaluación del estudio de preinversión y, posteriormente, el desarrollo del expediente técnico. Este alcance integral asegura la coherencia entre la viabilidad declarada y la solución de ingeniería entregada para su ejecución.${consorcioFrase} ${estadoFrase}`;

    case "Planes territoriales":
      return `${company.shortName} formuló este instrumento de planificación y desarrollo territorial para ${entity}, orientado al ordenamiento, acondicionamiento y zonificación del ámbito de intervención. El estudio articula el diagnóstico del territorio con propuestas técnicas que orientan el crecimiento ordenado y sostenible de las ciudades y centros poblados.${consorcioFrase} ${estadoFrase}`;

    default:
      return `${company.shortName} desarrolló este proyecto de ${type.toLowerCase()} en el sector ${sectorLower} para ${entity}, aplicando su solvencia técnica y experiencia en el ciclo de inversión pública y privada del Perú.${consorcioFrase} ${estadoFrase}`;
  }
}

/* ================================================================
   Fila de la ficha técnica (etiqueta mono + valor).
   ================================================================ */
function FichaRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4">
      <dt className="kicker shrink-0 text-navy-300 sm:w-40">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}

/* ================================================================
   Tarjeta de proyecto relacionado.
   ================================================================ */
function RelatedCard({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
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
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent"
          />
          <span className="absolute left-4 top-4 z-10 font-mono text-xs font-medium tracking-[0.16em] text-orange-200">
            #{project.code}
          </span>
        </div>
      ) : (
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
          <span className="relative mt-2 block font-mono text-xs font-medium tracking-[0.16em] text-orange-200">
            #{project.code}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug text-navy">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-soft">
          {project.entity}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3.5">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-navy-400">
            {project.type}
          </span>
          <span
            aria-hidden
            className="font-mono text-xs text-orange-600 transition-transform duration-300 group-hover:translate-x-1"
          >
            Ver →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ================================================================
   Página de detalle.
   ================================================================ */
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const description = buildDescription(project);

  /* Proyectos relacionados: mismo sector, distinto slug, hasta 3. */
  const related = projects
    .filter((p) => p.sector === project.sector && p.slug !== project.slug)
    .slice(0, 3);

  /* Ficha técnica: solo campos con dato real. */
  const ficha: { label: string; value: string }[] = [
    { label: "Entidad", value: project.entity },
    ...(project.postor ? [{ label: "Postor", value: project.postor }] : []),
    { label: "Tipo de servicio", value: project.type },
    { label: "Sector", value: project.sector },
    { label: "Fecha de contrato", value: project.date },
    { label: "Monto", value: project.amount },
  ];

  return (
    <>
      {/* ============================================================
          CABECERA — fondo navy con retícula + ficha técnica
          ============================================================ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        {/* Marca de agua con el código de obra */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[28vw] font-black leading-none text-white/[0.04] lg:text-[18rem]"
        >
          {project.code}
        </span>

        <div className="container-hk relative pb-16 pt-32 lg:pb-20 lg:pt-40">
          {/* Breadcrumb */}
          <Reveal variant="fade">
            <nav aria-label="Ruta de navegación" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-navy-100">
                <li>
                  <Link href="/" className="transition-colors hover:text-orange-300">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden className="text-navy-300">
                  /
                </li>
                <li>
                  <Link
                    href="/proyectos"
                    className="transition-colors hover:text-orange-300"
                  >
                    Proyectos
                  </Link>
                </li>
                <li aria-hidden className="text-navy-300">
                  /
                </li>
                <li aria-current="page" className="text-orange-300">
                  #{project.code}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
            {/* Columna de texto */}
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span className="font-mono text-sm font-medium tracking-[0.16em] text-orange-200">
                    #{project.code}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-5 text-3xl font-black leading-[1.08] text-white sm:text-4xl lg:text-[2.75rem]">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <div className="accent-rule mt-6" />
              </Reveal>

              {/* Ficha técnica */}
              <Reveal delay={180}>
                <dl className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
                  {ficha.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 border-b border-white/10 py-3.5 first:pt-0 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4"
                    >
                      <dt className="kicker shrink-0 text-navy-300 sm:w-40">
                        {row.label}
                      </dt>
                      <dd className="font-medium text-white">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Columna de imagen (banner) */}
            {project.image && (
              <Reveal delay={120} variant="fade" className="lg:sticky lg:top-28">
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-float">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
                  />
                  <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy/85 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white backdrop-blur">
                    <span className="text-orange">#{project.code}</span>
                    {project.sector}
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          DESCRIPCIÓN — alcance del trabajo de HK
          ============================================================ */}
      <Section tone="light">
        <div className="container-hk">
          <div className="max-w-3xl">
            <Reveal variant="fade">
              <div className="flex items-center gap-3">
                <span className="accent-rule" aria-hidden />
                <span className="kicker text-orange-600">Alcance del proyecto</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-2xl text-navy sm:text-3xl">
                Nuestro trabajo en este proyecto
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-slate-soft">
                {description}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============================================================
          GALERÍA DE LA OBRA (solo destacados con galería)
          ============================================================ */}
      {project.gallery && project.gallery.length > 0 && (
        <Section tone="mist">
          <div className="container-hk">
            <Reveal>
              <div className="flex items-end gap-3">
                <span className="accent-rule mb-1.5" aria-hidden />
                <div>
                  <span className="kicker text-orange-600">Registro de obra</span>
                  <h2 className="mt-2 text-2xl text-navy sm:text-3xl">
                    Galería de la obra
                  </h2>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <ProjectGallery
                images={project.gallery}
                altBase={project.title}
              />
            </Reveal>
          </div>
        </Section>
      )}

      {/* ============================================================
          PROYECTOS RELACIONADOS
          ============================================================ */}
      {related.length > 0 && (
        <Section tone="light">
          <div className="container-hk">
            <Reveal>
              <div className="flex items-end gap-3">
                <span className="accent-rule mb-1.5" aria-hidden />
                <div>
                  <span className="kicker text-orange-600">
                    Sector {project.sector}
                  </span>
                  <h2 className="mt-2 text-2xl text-navy sm:text-3xl">
                    Proyectos relacionados
                  </h2>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 90} className="h-full">
                  <RelatedCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <Section tone="navy" className="overflow-hidden">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-8 select-none font-display text-[26vw] font-black leading-none text-white/[0.04] lg:text-[18rem]"
        >
          HK
        </span>
        <div className="container-hk relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="fade">
              <div className="flex items-center justify-center gap-3">
                <span className="accent-rule" aria-hidden />
                <span className="kicker text-orange-300">
                  ¿Tiene un proyecto similar?
                </span>
                <span className="accent-rule" aria-hidden />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl text-white sm:text-4xl">
                Pongamos nuestra experiencia a{" "}
                <span className="text-orange">su servicio</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
                Acompañamos su inversión en el sector {project.sector.toLowerCase()}{" "}
                desde la viabilidad hasta la entrega de la obra, con la solvencia
                técnica de {company.shortName}.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/#contacto" variant="primary">
                  Contáctanos
                </Button>
                <Button href="/proyectos" variant="white">
                  Ver todos los proyectos
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
