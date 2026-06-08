"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  /** object-position CSS, p. ej. "50% 56%" */
  position?: string;
  /** Si true, el slide no se mueve (solo crossfade, sin zoom/Ken Burns). */
  fixed?: boolean;
};

/**
 * Fondo del hero como carrusel con crossfade automático.
 * Las imágenes se apilan a tamaño completo (duotono navy de marca) y se
 * alternan cada `intervalMs`. Client Component (necesita estado + intervalo).
 */
export function HeroCarousel({
  slides,
  intervalMs = 15000,
}: {
  slides: HeroSlide[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="absolute inset-0 -z-30 overflow-hidden bg-navy-950">
      {slides.map((slide, i) => {
        const visible = i === active;
        // Slides "fixed" solo hacen crossfade (sin zoom); el resto añade un leve zoom.
        const motion = slide.fixed
          ? visible
            ? "opacity-100"
            : "opacity-0"
          : visible
            ? "scale-100 opacity-100"
            : "scale-[1.05] opacity-0";
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={i === 0 ? slide.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectPosition: slide.position ?? "50% 56%" }}
            className={`object-cover grayscale-[0.4] brightness-105 transition-[opacity,transform] duration-[1400ms] ease-out motion-reduce:transition-opacity ${motion}`}
          />
        );
      })}
    </div>
  );
}
