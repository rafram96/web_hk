import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { type Project, projectsHeadline, homeHighlights } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Badge de estado: naranja para "En ejecución", navy para
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
/* Tarjeta destacada: la foto ocupa todo el ancho de la tarjeta y el
   bloque de texto va debajo. Tres por fila en escritorio.            */
/* ------------------------------------------------------------------ */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
      {/* Acento naranja superior que crece en hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-[0.22] bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
        <Image
          src={project.image as string}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent transition-opacity duration-300 group-hover:from-navy-950/90"
        />
        <div className="absolute left-4 top-4 z-10">
          <StatusBadge status={project.status} className="backdrop-blur-sm" />
        </div>
        <div className="absolute inset-x-4 bottom-3.5 z-10 flex items-end justify-between gap-3">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-orange-200">
            #{project.code}
          </span>
          <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-navy-100">
            {project.sector}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold leading-snug text-navy lg:text-[1.4rem]">
          {project.title}
        </h3>

        <p className="mt-3 leading-relaxed text-slate-soft">{project.entity}</p>

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
/* Sección "Proyectos" de la home: tres obras grandes y el enlace al
   portafolio completo. Las cifras de trayectoria (experiencia por tipo
   y conteo por estado) viven ahora en `Stats`, para no repetirlas.   */
/* ------------------------------------------------------------------ */
export function Projects() {
  return (
    <Section id="proyectos" tone="light">
      <div className="container-hk">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Trayectoria"
            title={`Más de ${projectsHeadline.value} proyectos a lo largo del Perú`}
            intro="Experiencia comprobada en todo el ciclo de inversión pública y privada, de Tumbes a Tacna."
          />
          <Reveal variant="fade" delay={140} className="shrink-0">
            <span className="kicker block text-slate-soft lg:pb-3 lg:text-right">
              Obras en ejecución
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {homeHighlights.map((project, i) => (
            <Reveal
              key={project.slug}
              variant={i === 0 ? "left" : i === 1 ? "up" : "right"}
              delay={i * 110}
              className="h-full"
            >
              <FeaturedCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-14">
          <div className="flex justify-center">
            <Button href="/proyectos" variant="primary">
              Ver el portafolio completo
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
