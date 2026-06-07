"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

export type LightboxImage = { src: string; caption?: string };

type LightboxProps = {
  images: LightboxImage[];
  /** Índice activo, o null para cerrado. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Visor modal reutilizable (galería de obras y fichas de proyecto).
 * Controlado por el componente padre vía `index`. Soporta teclado y swipe básico.
 */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const total = images.length;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onNavigate((index + dir + total) % total);
    },
    [index, total, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  if (index === null) return null;
  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/92 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      {/* Cerrar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
      >
        <span className="text-xl leading-none">✕</span>
      </button>

      {/* Contador */}
      <span className="absolute left-5 top-6 z-10 font-mono text-xs tracking-[0.2em] text-white/70">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-6"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6"
          >
            <span className="text-2xl leading-none">›</span>
          </button>
        </>
      )}

      {/* Imagen */}
      <figure
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[68vh] w-full">
          <Image
            src={current.src}
            alt={current.caption ?? "Imagen de proyecto de HK Consulting"}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-contain"
            priority
          />
        </div>
        {current.caption && (
          <figcaption className="mt-4 max-w-2xl text-center text-sm text-navy-100">
            {current.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
