"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  contact,
  projectsHeadline,
  regionsCovered,
  yearsOfExperience,
} from "@/lib/site";
import styles from "./HeroNuevo.module.css";

/* Imports estáticos: next/image deriva ancho, alto y blurDataURL, de modo
   que el hero muestra la foto desenfocada en vez de un rectángulo negro
   mientras carga. */
import obraHuanta from "../../../public/images/proyecto-aereo-hospital.webp";
import equipoFrente from "../../../public/images/hero-congreso-front.webp";
import equipoCongreso from "../../../public/images/hero-congreso-fila.webp";

type Slide = {
  src: StaticImageData;
  alt: string;
  /** Rótulo del pie: obra y lugar, tal como constan en el portafolio. */
  caption: string;
  pos: string;
  mobilePos: string;
};

/**
 * Una toma aérea de obra supervisada por HK (proyecto 220) y dos fotos reales
 * del equipo frente al Congreso de la República. Son las únicas del archivo
 * con resolución y calidad suficientes para un fondo a pantalla completa.
 */
const SLIDES: Slide[] = [
  {
    src: obraHuanta,
    alt: "Vista aérea del Hospital de Apoyo de Huanta en ejecución, Ayacucho",
    caption: "Hospital de Huanta · Ayacucho",
    pos: "52% 46%",
    mobilePos: "56% 46%",
  },
  {
    src: equipoFrente,
    alt: "Equipo de HK Consulting frente al Congreso de la República, Lima",
    caption: "Equipo HK · Congreso de la República · Lima",
    pos: "50% 42%",
    mobilePos: "58% 45%",
  },
  {
    src: equipoCongreso,
    alt: "Equipo de ingenieros de HK Consulting frente al Congreso de la República, Lima",
    caption: "Equipo HK · Plaza Bolívar · Lima",
    pos: "62% 58%",
    mobilePos: "66% 60%",
  },
];

/* Las cifras se leen de site.ts: nunca deben contradecir a la sección
   "HK en cifras" ni al portafolio de /proyectos. */
const STATS = [
  {
    value: projectsHeadline.value,
    prefix: projectsHeadline.prefix,
    label: "Proyectos",
  },
  { value: regionsCovered, label: "Regiones" },
  { value: yearsOfExperience, label: "Años" },
] as const;

const DELAY = 7000;
const fmt = (n: number) => n.toLocaleString("es-PE");

type HeroNuevoProps = {
  /**
   * Ruta a un clip en bucle (por ejemplo, una toma de dron) para el fondo.
   * Si se pasa, el vídeo sustituye al carrusel y la primera foto queda de
   * póster mientras carga. Preparado para cuando el cliente entregue el
   * material; hoy la home no lo usa.
   */
  videoSrc?: string;
};

export function HeroNuevo({ videoSrc }: HeroNuevoProps = {}) {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);
  const [inViewport, setInViewport] = useState(true);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  const next = useCallback(() => setActive((i) => (i + 1) % SLIDES.length), []);
  const goTo = useCallback(
    (n: number) =>
      setActive(((n % SLIDES.length) + SLIDES.length) % SLIDES.length),
    [],
  );

  /* Reveal al entrar en viewport (con red de seguridad). */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          setInViewport(entry.isIntersecting);
          if (entry.isIntersecting) setShown(true);
        }),
      { threshold: 0.08 },
    );
    io.observe(el);
    const t = window.setTimeout(() => setShown(true), 1500);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  /* Contadores (una vez visible). */
  useEffect(() => {
    if (!shown) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = requestAnimationFrame(() => {
        setCounts(STATS.map((s) => s.value));
      });
      return () => cancelAnimationFrame(reducedMotionFrame);
    }
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts(STATS.map((s) => Math.round(s.value * eased)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown]);

  /* Auto-avance por tiempo: se reinicia con cada cambio. Con vídeo de fondo
     no hay carrusel que avanzar. */
  useEffect(() => {
    if (videoSrc || !inViewport) return;
    const t = window.setTimeout(next, DELAY);
    return () => window.clearTimeout(t);
  }, [active, inViewport, next, videoSrc]);

  /* Glow naranja con parallax de puntero. */
  useEffect(() => {
    if (!inViewport) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const depth = -26;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${(cx * depth).toFixed(2)}px,${(cy * depth).toFixed(2)}px,0)`;
      }
      const moving = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001;
      raf = moving ? requestAnimationFrame(loop) : 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [inViewport]);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${shown ? styles.in : ""} ${
        inViewport ? styles.motionActive : ""
      }`}
      aria-label="HK Consulting — donde el país se construye"
    >
      {/* Fondo: vídeo en bucle si lo hay; si no, el carrusel de obras */}
      {videoSrc ? (
        <video
          className={styles.video}
          src={videoSrc}
          poster={SLIDES[0].src.src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : (
        <div className={styles.carousel}>
          {SLIDES.map((s, idx) => (
            <div
              key={s.src.src}
              className={`${styles.slide} ${idx === active ? styles.slideActive : ""}`}
              style={
                {
                  "--slide-position": s.pos,
                  "--slide-position-mobile": s.mobilePos,
                } as CSSProperties
              }
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={idx === 0}
                placeholder="blur"
                sizes="100vw"
                className={styles.slideImg}
              />
            </div>
          ))}
        </div>
      )}

      <div className={styles.glowwrap} ref={glowRef} aria-hidden>
        <div className={styles.glow} />
      </div>
      <div className={styles.scrim} aria-hidden />
      <div className={styles.grain} aria-hidden />

      {/* Contenido */}
      <div className={styles.inner}>
        <div className={`${styles.topkick} ${styles.rv}`}>
          <span className={styles.rule} aria-hidden />
          <span className={styles.kicker}>
            Preinversión · Expediente · Supervisión
          </span>
        </div>

        <h1 className={styles.lead}>
          <span className={styles.wmask}>
            <span className={styles.xl}>Donde el país</span>
          </span>
          <span className={`${styles.wmask} ${styles.l2}`}>
            <span className={`${styles.xl} ${styles.o}`}>se construye</span>
          </span>
        </h1>

        <div className={styles.stats}>
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              className={`${styles.stat} ${styles.rv} ${
                idx === 0 ? styles.d3 : idx === 1 ? styles.d4 : styles.d5
              }`}
            >
              <div className={styles.num}>
                {"prefix" in s && s.prefix ? (
                  <span className={styles.pre}>{s.prefix}</span>
                ) : null}
                <span>{fmt(counts[idx] ?? 0)}</span>
              </div>
              <div className={styles.lab}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.foot}>
          <p className={`${styles.sub} ${styles.rv} ${styles.d6}`}>
            Del primer estudio a la entrega final, un mismo equipo de ingeniería
            en todo el Perú.
          </p>

          <div className={`${styles.ctas} ${styles.rv} ${styles.d6}`}>
            <Link href="/proyectos" className={styles.ctaPrimary}>
              Ver proyectos
              <span aria-hidden>→</span>
            </Link>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaGhost}
              aria-label={`Escríbenos por WhatsApp al ${contact.phone}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Controles del carrusel (no aplican con vídeo de fondo) */}
      {!videoSrc && (
        <div className={styles.controls}>
          <span className={styles.caption}>{SLIDES[active].caption}</span>
          <button
            type="button"
            className={styles.navbtn}
            onClick={() => goTo(active - 1)}
            aria-label="Foto anterior"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className={styles.dots}>
            {SLIDES.map((s, idx) => (
              <button
                key={s.src.src}
                type="button"
                className={`${styles.dot} ${idx === active ? styles.dotActive : ""}`}
                onClick={() => goTo(idx)}
                aria-label={`Ir a la foto ${idx + 1}: ${s.caption}`}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.navbtn}
            onClick={() => goTo(active + 1)}
            aria-label="Foto siguiente"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
