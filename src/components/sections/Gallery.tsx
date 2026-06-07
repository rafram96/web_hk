"use client";

import { useState } from "react";
import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryShowcase } from "@/lib/site";

/** Celdas que rompen la retícula para dar ritmo visual al mosaico. */
const spanClass: Record<number, string> = {
  0: "md:col-span-2 md:row-span-2",
  3: "lg:col-span-2",
  6: "md:col-span-2",
  9: "lg:row-span-2",
};

/**
 * `sizes` por celda: debe reflejar el ancho REAL que ocupa cada imagen para
 * que next/image sirva una variante con suficiente resolución (si no, las
 * celdas grandes se ven pixeladas al ampliar una miniatura pequeña).
 * Móvil: 2 columnas (50vw). md: 3 columnas. lg: 4 columnas.
 */
const defaultSizes =
  "(min-width: 1024px) 25vw, (min-width: 768px) 34vw, 50vw";
const sizesByIndex: Record<number, string> = {
  0: "(min-width: 1024px) 50vw, (min-width: 768px) 67vw, 50vw", // 2 col
  3: "(min-width: 1024px) 50vw, (min-width: 768px) 34vw, 50vw", // 2 col en lg
  6: "(min-width: 1024px) 50vw, (min-width: 768px) 67vw, 50vw", // 2 col
};

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const images = galleryShowcase.map((g) => ({
    src: g.src,
    caption: g.caption,
  }));

  return (
    <Section id="galeria" tone="navy-deep">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />

      <div className="container-hk relative">
        <SectionHeading
          tone="dark"
          kicker="Galería"
          title="Obras que transforman el país"
          intro="Una muestra del trabajo de campo y de los proyectos desarrollados por HK Consulting a lo largo del Perú."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {galleryShowcase.map((item, i) => (
            <Reveal
              key={item.src}
              variant="fade"
              delay={(i % 4) * 70}
              className={`${spanClass[i] ?? ""} h-full`}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ampliar imagen: ${item.caption}`}
                className="group relative block h-full w-full overflow-hidden rounded-xl border border-white/10 bg-navy-950/40 outline-none transition-shadow duration-300 hover:shadow-float focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes={sizesByIndex[i] ?? defaultSizes}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                />

                {/* Velo + gradiente de pie para legibilidad */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                {/* Icono de lupa */}
                <span
                  className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/30 bg-navy-950/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>

                {/* Caption + sector */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <span className="kicker block text-orange-300">
                    {item.sector}
                  </span>
                  <p className="mt-1.5 translate-y-1 text-sm font-medium leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </Section>
  );
}
