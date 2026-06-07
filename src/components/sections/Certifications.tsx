import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, type Certification } from "@/lib/site";

/**
 * Sección "Certificaciones" — sistemas de gestión certificados de HK Consulting.
 * Server Component. Tarjetas blancas con elevación en hover y badges de norma:
 * los reales se muestran con next/image; el que no trae imagen (ISO 45001) se
 * renderiza como un sello propio en SVG navy + naranja, coherente con la marca
 * sin imitar el granate de los oficiales. Reveal escalonado y alturas iguales.
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
      className="h-[110px] w-[110px]"
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

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-line bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float lg:p-7">
      {/* Acento naranja superior que crece en hover. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.22] bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {/* Badge: imagen oficial o sello propio de marca. */}
      <div className="flex h-[120px] w-full items-center justify-center">
        {cert.image ? (
          <div className="relative h-[110px] w-[150px]">
            <Image
              src={cert.image}
              alt={`Certificación ${cert.name} — ${cert.scope}`}
              fill
              sizes="150px"
              className="object-contain"
            />
          </div>
        ) : (
          <BrandBadge standard={cert.standard} />
        )}
      </div>

      {/* Nombre de la norma. */}
      <h3 className="mt-5 font-display text-lg text-navy">{cert.name}</h3>
      {/* Norma técnica en mono naranja. */}
      <span className="mt-1 font-mono text-xs font-medium tracking-[0.18em] text-orange-600">
        {cert.standard}
      </span>
      {/* Alcance del sistema de gestión. */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">
        {cert.scope}
      </p>
      {/* Código de certificación, en mono muy pequeño. */}
      <span className="mt-4 w-full border-t border-line pt-3 font-mono text-[0.68rem] tracking-wide text-slate-soft/80">
        {cert.code}
      </span>
    </article>
  );
}

export function Certifications() {
  return (
    <Section id="certificaciones" tone="light">
      <div className="container-hk">
        <SectionHeading
          align="center"
          kicker="Certificaciones"
          title="Calidad y cumplimiento, certificados"
          intro="Operamos bajo sistemas de gestión certificados que garantizan calidad, cumplimiento y transparencia en cada proyecto."
        />

        {/* Retícula: 2 móvil · 3 tablet · 5 en una fila (xl). */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:gap-6 xl:grid-cols-5">
          {certifications.map((cert, index) => (
            <Reveal key={cert.code} delay={index * 80} className="h-full">
              <CertificationCard cert={cert} />
            </Reveal>
          ))}
        </div>

        {/* Nota de cierre: organismos acreditados. */}
        <Reveal variant="fade" delay={120}>
          <p className="mt-12 flex items-center justify-center gap-2 text-center font-mono text-xs tracking-[0.18em] text-slate-soft uppercase">
            <span className="accent-rule !w-8" aria-hidden />
            Certificado por organismos acreditados
            <span className="accent-rule !w-8" aria-hidden />
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
