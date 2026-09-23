"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useWantsVideo } from "./useWantsVideo";

type BgVideoProps = {
  /** Clip mp4 sin audio, corto y en bucle. */
  src: string;
  /** Fotograma de póster: se ve siempre debajo y es lo único que carga en móvil. */
  poster: string;
  /** Posición del encuadre, como object-position. */
  position?: string;
  className?: string;
};

/**
 * Vídeo de fondo a sangre completa. El póster va siempre como imagen
 * optimizada (next/image, carga perezosa); el vídeo se monta encima solo en
 * pantallas anchas sin ahorro de datos, no se descarga hasta que la sección
 * entra en pantalla (preload="none" + play al intersectar) y se pausa al
 * salir. En celular con 4G lento los dos clips duplicaban el peso de la
 * página. Es decorativo (aria-hidden). Se reproduce también con
 * prefers-reduced-motion, por decisión del cliente (2026-09-07).
 */
export function BgVideo({
  src,
  poster,
  position = "50% 50%",
  className = "",
}: BgVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const wantsVideo = useWantsVideo();

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
  }, [wantsVideo]);

  return (
    <>
      <Image
        src={poster}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        style={{ objectPosition: position }}
        className={`object-cover ${className}`}
      />
      {wantsVideo ? (
        <video
          ref={ref}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          style={{ objectPosition: position }}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
      ) : null}
    </>
  );
}
