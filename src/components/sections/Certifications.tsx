import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, type Certification } from "@/lib/site";

/**
 * Sección "Certificaciones" — sistemas de gestión certificados de HK Consulting.
 * Server Component, lectura editorial: encabezado asimétrico con índice display
 * gigante y las normas como fichas técnicas numeradas. Los badges reales se
 * muestran con next/image; el que no trae imagen (ISO 45001) se renderiza como
 * un sello propio en SVG navy + naranja, coherente con la marca sin imitar el
 * granate de los oficiales. La primera ficha ocupa más ancho para dar ritmo.
 */

/**
 * Sello SVG de marca para certificaciones sin imagen oficial. Disco navy con
 * doble anillo, norma + año centrados y guiones técnicos en naranja. Diseñado
 * para convivir con los badges circulares reales sin desentonar.
 */
function BrandBadge({ standard }: { standard: string }) {
  // Separa "45001:2018" en código de norma y año para componer el sello.
  const [normNumber, normYear] = standard.split(":");
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={`Sello ISO ${standard}`}
      className="h-[104px] w-[104px]"
    >
      {/* Disco base navy. */}
      <circle cx="60" cy="60" r="58" fill="var(--color-navy)" />
      {/* Doble anillo de borde. */}
      <circle
        cx="60"
        cy="60"
        r="56"
        fill="none"
        stroke="var(--color-orange)"
        strokeWidth="1.4"
      />
      <circle
        cx="60"
        cy="60"
        r="48"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1"
      />
      {/* Guiones técnicos superiores e inferiores en acento. */}
      <line x1="60" y1="13" x2="60" y2="20" stroke="var(--color-orange)" strokeWidth="2" />
      <line x1="60" y1="100" x2="60" y2="107" stroke="var(--color-orange)" strokeWidth="2" />
      {/* Etiqueta ISO en mono. */}
      <text
        x="60"
        y="46"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="13"
        letterSpacing="4"
        fill="var(--color-orange-200)"
      >
        ISO
      </text>
      {/* Número de norma destacado. */}
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="28"
        fontWeight="800"
        fill="#ffffff"
      >
        {normNumber}
      </text>
      {/* Año de la norma. */}
      {normYear && (
        <text
          x="60"
          y="90"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="2"
          fill="rgba(255,255,255,0.7)"
        >
          {normYear}
        </text>
      )}
    </svg>
  );
}

/**
 * Ficha técnica de una norma. `featured` la hace más ancha y dispone el badge
 * a la izquierda del texto (lectura horizontal) para romper la retícula y dar
 * jerarquía a la primera certificación.
 */
function CertificationCard({
  cert,
  index,
  featured = false,
}: {
  cert: Certification;
  index: number;
  featured?: boolean;
}) {
  const ordinal = String(index + 1).padStart(2, "0");

  // Badge reutilizable: imagen oficial con next/image o sello propio de marca.
  const badge = cert.image ? (
    <div className="relative h-[104px] w-[148px]">
      <Image
        src={cert.image}
        alt={`Certificación ${cert.name} — ${cert.scope}`}
        fill
        sizes="148px"
        className="object-contain"
      />
    </div>
  ) : (
    <BrandBadge standard={cert.standard} />
  );

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float ${
        featured ? "sm:flex-row sm:items-stretch" : ""
      }`}
    >
      {/* Filete de acento lateral que crece en hover. */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-[0.18] bg-orange transition-transform duration-500 ease-out group-hover:scale-y-100"
      />

      {/* Zona del badge: fondo papel cálido que lo separa de la ficha. */}
      <div
        className={`flex shrink-0 items-center justify-center bg-paper/70 ${
          featured
            ? "px-8 py-8 sm:w-[44%] sm:border-r sm:border-line"
            : "border-b border-line px-6 py-7"
        }`}
      >
        {badge}
      </div>

      {/* Cuerpo de la ficha. */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        {/* Índice editorial + etiqueta de norma certificada. */}
        <div className="flex items-baseline justify-between gap-3">
          <span className="display-index text-[1.6rem] text-navy/15">{ordinal}</span>
          <span className="kicker text-[0.6rem] text-orange-600">Certificado</span>
        </div>

        {/* Nombre de la norma, a gran escala display. */}
        <h3
          className={`mt-3 font-display tracking-tight text-navy ${
            featured ? "text-3xl lg:text-[2.35rem]" : "text-2xl"
          }`}
        >
          {cert.name}
        </h3>

        {/* Norma técnica en mono naranja. */}
        <span className="mt-1.5 font-mono text-xs font-medium tracking-[0.18em] text-orange-600">
          {cert.standard}
        </span>

        {/* Alcance del sistema de gestión. */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">
          {cert.scope}
        </p>

        {/* Divisor de medida + código de certificación en mono. */}
        <div className="mt-5 pt-3">
          <span className="spec-line block h-px w-full text-navy/20" aria-hidden />
          <div className="mt-3 flex items-center gap-2">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-slate-soft/70">
              Cód.
            </span>
            <span className="font-mono text-[0.68rem] tracking-wide text-navy/70">
              {cert.code}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Certifications() {
  const total = certifications.length;
  const [featured, ...rest] = certifications;

  return (
    <Section id="certificaciones" tone="light">
      <div className="container-hk">
        {/* Encabezado editorial asimétrico: título a la izquierda, índice a la derecha. */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            kicker="Certificaciones"
            title="Calidad y cumplimiento, certificados"
            intro="Operamos bajo sistemas de gestión certificados que garantizan calidad, cumplimiento y transparencia en cada proyecto."
          />
          <Reveal variant="fade" delay={120} className="hidden lg:block">
            <div className="flex items-end gap-4 pb-1">
              <span className="spec-line h-px w-24 self-end text-navy/20" aria-hidden />
              <div className="text-right">
                <span className="display-index block text-[5.5rem] text-navy">
                  {String(total).padStart(2, "0")}
                </span>
                <span className="kicker mt-1 block text-slate-soft">
                  Sistemas de gestión
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Retícula editorial: la primera ficha ocupa el ancho completo (destacada),
            el resto en una rejilla de 2/4 columnas para dar ritmo. */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {featured && (
            <Reveal className="sm:col-span-2 xl:col-span-4" delay={0}>
              <CertificationCard cert={featured} index={0} featured />
            </Reveal>
          )}
          {rest.map((cert, i) => (
            <Reveal key={cert.code} delay={(i + 1) * 80} className="h-full">
              <CertificationCard cert={cert} index={i + 1} />
            </Reveal>
          ))}
        </div>

        {/* Nota de cierre: organismos acreditados. */}
        <Reveal variant="fade" delay={120}>
          <p className="mt-12 flex items-center justify-center gap-3 text-center font-mono text-xs tracking-[0.18em] text-slate-soft uppercase">
            <span className="accent-rule !w-8" aria-hidden />
            Certificado por organismos acreditados
            <span className="accent-rule !w-8" aria-hidden />
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
