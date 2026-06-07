"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox, type LightboxImage } from "@/components/ui/Lightbox";

type ProjectGalleryProps = {
  /** Lista de imágenes de obra: rutas o pares {src, caption}. */
  images: (string | LightboxImage)[];
  /** Texto base para el alt de cada miniatura (p.ej. el título del proyecto). */
  altBase?: string;
};

/**
 * Grid de miniaturas de la galería de obra con visor modal (Lightbox).
 * Cada miniatura es un <button> accesible que abre el visor en su índice.
 */
export function ProjectGallery({ images, altBase }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  /* Normaliza las entradas a {src, caption}. */
  const items: LightboxImage[] = images.map((img) =>
    typeof img === "string" ? { src: img } : img
  );

  if (items.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
        {items.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={
              img.caption ?? `Ampliar imagen ${i + 1} de la obra`
            }
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-navy-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            <Image
              src={img.src}
              alt={
                img.caption ??
                (altBase
                  ? `${altBase} — fotografía ${i + 1}`
                  : `Fotografía ${i + 1} de la obra`)
              }
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay navy en hover para profundidad */}
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            {/* Índice mono como marca técnica */}
            <span
              aria-hidden
              className="absolute left-3 top-3 font-mono text-[0.64rem] font-medium tracking-[0.18em] text-orange-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Lupa de "ampliar" */}
            <span
              aria-hidden
              className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full border border-white/25 bg-navy-950/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden>
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="m16 16 4 4M11 8.5v5M8.5 11h5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        images={items}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
