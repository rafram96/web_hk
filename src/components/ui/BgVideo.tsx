"use client";

import { useEffect, useRef } from "react";

type BgVideoProps = {
  /** Clip mp4 sin audio, corto y en bucle. */
  src: string;
  /** Fotograma de póster: se ve mientras carga y si el autoplay falla. */
  poster: string;
  /** Posición del encuadre, como object-position. */
  position?: string;
  className?: string;
};

/**
 * Vídeo de fondo a sangre completa que solo se reproduce mientras está en
 * pantalla: fuera del viewport se pausa, para no gastar CPU ni datos. Es
 * decorativo (aria-hidden); el contenido de la sección no depende de él.
 * Se reproduce también con prefers-reduced-motion, por decisión del cliente
 * (2026-09-07), igual que la cinta de entidades y el clip del hero.
 */
export function BgVideo({
  src,
  poster,
  position = "50% 50%",
  className = "",
}: BgVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {
            /* autoplay bloqueado: queda el póster */
          });
        } else {
          v.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      style={{ objectPosition: position }}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
