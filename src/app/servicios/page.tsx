import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  company,
  contact,
  services,
  sectors,
  whyChooseUs,
  howWeWork,
  certifications,
  experienceByType,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conocimiento y experiencia a su disposición. HK Consulting acompaña todo el ciclo de inversión: estudios de preinversión, expedientes técnicos y supervisión de obras para sectores como salud, educación, portuario, vial y más, bajo el marco Invierte.pe y la Ley N.º 30225.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios · HK Consulting S.A.C.",
    description:
      "Estudios de preinversión, expedientes técnicos y supervisión de obras. Acompañamos todo el ciclo de inversión pública y privada del Perú.",
    images: [
      { url: "/images/proyecto-aereo-hospital.jpg", width: 1200, height: 630 },
    ],
  },
};

/** Imágenes asignadas a cada servicio para el layout en zig-zag. */
const serviceImages: Record<
  string,
  { src: string; alt: string }
> = {
  "estudios-de-preinversion": {
    src: "/images/equipo-completo.jpg",
    alt: "Equipo de HK Consulting analizando estudios de preinversión",
  },
  "expedientes-tecnicos": {
    src: "/images/proyecto-aereo-hospital.jpg",
    alt: "Vista aérea de proyecto hospitalario con expediente técnico de HK Consulting",
  },
  "supervision-de-obras": {
    src: "/images/proyecto-represa.jpg",
    alt: "Obra de represa supervisada por HK Consulting",
  },
};

/* ---------- Iconografía SVG inline (por qué elegirnos) ---------- */

type IconProps = { className?: string };

const icons: ReactNode[] = [
  // Experiencia comprobada — escudo con check
  <svg key="i0" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2.2 2.2L15.5 10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Equipo multidisciplinario — personas
  <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3.5 19.5a5.5 5.5 0 0 1 11 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M16 5.2a3 3 0 0 1 0 5.6M17.5 19.5a5.5 5.5 0 0 0-3-4.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,
  // Cumplimiento normativo — documento con sello
  <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M6 3h7l5 5v9.5A2.5 2.5 0 0 1 15.5 20h-9A2.5 2.5 0 0 1 4 17.5v-12A2.5 2.5 0 0 1 6 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M13 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path
      d="m8.5 14 1.6 1.6L14 12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Compromiso con plazos — reloj
  <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12.5" r="7.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 8.5v4l2.8 1.8M9 3h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Acompañamiento integral — engranajes / ciclo
  <svg key="i4" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M20 12a8 8 0 1 1-2.3-5.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M20 4v3.2h-3.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  // Reducción de riesgos — alerta resuelta
  <svg key="i5" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3.5 21 19H3l9-15.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M12 9.5v3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="15.8" r="1" fill="currentColor" />
  </svg>,
];

/* ---------- Check de beneficios ---------- */

function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="m4.5 10.5 3.2 3.2L15.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiciosPage() {
  return (
    <>
      {/* ============================================================
          01 · HERO DE PÁGINA
          ============================================================ */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Imagen de fondo + overlay */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-equipo-congreso.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/40" />
        </div>
        {/* Retícula técnica */}
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        {/* Marca de agua numérica */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 bottom-0 select-none font-display text-[28vw] font-black leading-none text-white/[0.04] lg:text-[20rem]"
        >
          01
        </span>

        <div className="container-hk relative flex min-h-[56vh] flex-col justify-center pb-16 pt-32 lg:min-h-[60vh] lg:pb-24 lg:pt-40">
          {/* Breadcrumb */}
          <Reveal variant="fade">
            <nav aria-label="Ruta de navegación" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-navy-100">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-orange-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li aria-hidden className="text-navy-300">
                  /
                </li>
                <li aria-current="page" className="text-orange-300">
                  Servicios
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3">
              <span className="accent-rule" aria-hidden />
              <span className="kicker text-orange-300">
                Líneas de servicio · {company.shortName}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Conocimiento y experiencia
              <span className="text-orange"> a su disposición</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              Acompañamos todo el ciclo de inversión pública y privada —desde la
              idea hasta la obra entregada— articulando{" "}
              <strong className="font-semibold text-white">
                estudios de preinversión
              </strong>
              ,{" "}
              <strong className="font-semibold text-white">
                expedientes técnicos
              </strong>{" "}
              y{" "}
              <strong className="font-semibold text-white">
                supervisión de obras
              </strong>{" "}
              para sectores como salud, educación, portuario, vial, saneamiento y
              más, bajo el marco Invierte.pe y la Ley N.º 30225.
            </p>
          </Reveal>

          {/* Atajos a las líneas de servicio */}
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-navy-100 backdrop-blur transition-all hover:border-orange/60 hover:bg-white/10 hover:text-white"
                >
                  <span className="font-mono text-xs text-orange">{s.num}</span>
                  {s.title}
                  <span
                    aria-hidden
                    className="text-orange transition-transform group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          02 · DETALLE DE LOS 3 SERVICIOS (zig-zag)
          ============================================================ */}
      {services.map((s, i) => {
        const isReversed = i % 2 === 1;
        const tone = i % 2 === 0 ? "light" : "mist";
        const img = serviceImages[s.slug];
        return (
          <Section key={s.slug} id={s.slug} tone={tone}>
            <div className="container-hk">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Columna de texto */}
                <div>
                  <Reveal variant="fade">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl font-black leading-none text-navy-100 lg:text-6xl">
                        {s.num}
                      </span>
                      <span className="kicker text-orange-600">
                        Línea de servicio
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={60}>
                    <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
                      {s.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={120}>
                    <div className="accent-rule mt-5" />
                  </Reveal>

                  <Reveal delay={160}>
                    <p className="mt-6 text-lg leading-relaxed text-slate-soft">
                      {s.description}
                    </p>
                  </Reveal>

                  <Reveal delay={220}>
                    <ul className="mt-8 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                            <CheckIcon className="size-4" />
                          </span>
                          <span className="font-medium text-ink">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={280}>
                    <div className="mt-9">
                      <Button href="/#contacto" variant="outline">
                        Solicitar este servicio
                      </Button>
                    </div>
                  </Reveal>
                </div>

                {/* Columna de imagen */}
                <Reveal delay={120} variant="fade">
                  <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"
                      aria-hidden
                    />
                    <span
                      aria-hidden
                      className="blueprint-grid-ink pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy/85 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white backdrop-blur">
                      <span className="text-orange">{s.num}</span>
                      {s.title}
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </Section>
        );
      })}

      {/* ============================================================
          03 · CÓMO TRABAJAMOS (proceso de 4 pasos)
          ============================================================ */}
      <Section tone="navy-deep">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div className="container-hk relative">
          <SectionHeading
            kicker="Metodología · 04 pasos"
            tone="dark"
            title={
              <>
                Cómo <span className="text-orange">trabajamos</span>
              </>
            }
            intro="Un método claro y trazable que convierte el contexto de cada inversión en obras sólidas, conformes a normativa y entregadas con respaldo documentario."
          />

          <div className="relative mt-16">
            {/* Línea conectora horizontal (desktop) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
            />
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {howWeWork.map((step, i) => (
                <Reveal key={step.num} delay={i * 100} as="li">
                  <div className="relative">
                    <div className="flex items-center gap-4 lg:block">
                      <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-navy font-display text-lg font-extrabold text-orange shadow-float">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl text-white">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-navy-100">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ============================================================
          04 · POR QUÉ ELEGIRNOS
          ============================================================ */}
      <Section tone="light">
        <div className="blueprint-grid-ink absolute inset-0" aria-hidden />
        <div className="container-hk relative">
          <SectionHeading
            kicker="Nuestra ventaja"
            title={
              <>
                Por qué <span className="text-orange">elegirnos</span>
              </>
            }
            intro="Solvencia técnica, cumplimiento normativo y acompañamiento integral en las tres etapas críticas del ciclo de inversión, bajo un solo equipo responsable."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/40">
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 font-mono text-xs text-navy-100"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                    <span className="size-6 [&>svg]:size-6">{icons[i]}</span>
                  </span>
                  <h3 className="mt-5 text-lg text-navy">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-soft">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Cinta de experiencia por tipo */}
          <Reveal delay={120}>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {experienceByType.map((exp) => (
                <div key={exp.title} className="bg-mist p-6">
                  <p className="font-display text-4xl font-black leading-none text-navy">
                    +{exp.count}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {exp.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-soft">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================================================
          05 · SECTORES QUE ATENDEMOS
          ============================================================ */}
      <Section tone="navy">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div className="container-hk relative">
          <SectionHeading
            kicker="Cobertura · 14 sectores"
            tone="dark"
            title={
              <>
                Sectores que <span className="text-orange">atendemos</span>
              </>
            }
            intro="Experiencia transversal en infraestructura pública y privada a lo largo de todo el territorio nacional."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sectors.map((sector, i) => (
              <Reveal key={sector.num} delay={(i % 4) * 60} variant="fade">
                <article className="group h-full bg-navy p-6 transition-colors duration-300 hover:bg-navy-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-orange">
                      {sector.num}
                    </span>
                    <span
                      aria-hidden
                      className="h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-orange"
                    />
                  </div>
                  <h3 className="mt-4 text-lg text-white">{sector.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-100">
                    {sector.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          06 · CERTIFICACIONES (versión compacta)
          ============================================================ */}
      <Section tone="mist">
        <div className="container-hk">
          <SectionHeading
            kicker="Respaldo · Sistemas de gestión"
            align="center"
            title={
              <>
                Certificaciones que nos{" "}
                <span className="text-orange">avalan</span>
              </>
            }
            intro="Operamos bajo sistemas de gestión certificados que garantizan calidad, responsabilidad ambiental, seguridad y conducta íntegra en cada proyecto."
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.code} delay={(i % 3) * 80}>
                <article className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/40">
                  {cert.image ? (
                    <span className="relative size-16 shrink-0">
                      <Image
                        src={cert.image}
                        alt={`Certificación ${cert.name} — ${cert.scope}`}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-navy font-display text-white"
                    >
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-orange">
                        ISO
                      </span>
                      <span className="text-base font-extrabold leading-none">
                        {cert.standard.split(":")[0]}
                      </span>
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="font-display text-base font-extrabold text-navy">
                      {cert.name}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-slate-soft">
                      {cert.scope}
                    </p>
                    <p className="mt-1 truncate font-mono text-[0.65rem] uppercase tracking-wider text-navy-300">
                      {cert.code}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          07 · CTA FINAL
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
                  ¡Construyendo el futuro!
                </span>
                <span className="accent-rule" aria-hidden />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-5xl">
                Transformamos ideas en obras que{" "}
                <span className="text-orange">perduran</span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
                Cuéntenos su proyecto. Nuestro equipo lo acompaña desde la
                viabilidad hasta la entrega de la obra, con la solvencia técnica
                de {company.shortName} y más de {new Date().getFullYear() -
                  company.foundedYear}{" "}
                años de experiencia al servicio del Perú.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/#contacto" variant="primary">
                  Contáctanos
                </Button>
                <Button href="/#proyectos" variant="white">
                  Ver proyectos
                </Button>
              </div>
            </Reveal>

            {/* Datos de contacto breves */}
            <Reveal delay={260} variant="fade">
              <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:gap-12">
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="group flex items-center gap-3 text-left transition-colors"
                >
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-5">
                      <path
                        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 6a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-navy-300">
                      Teléfono
                    </span>
                    <span className="block font-semibold text-white group-hover:text-orange-300">
                      {contact.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-3 text-left transition-colors"
                >
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-5">
                      <rect
                        x="3.5"
                        y="5.5"
                        width="17"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-navy-300">
                      Correo
                    </span>
                    <span className="block font-semibold text-white group-hover:text-orange-300">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
