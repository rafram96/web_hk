"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HeroNuevo.module.css";

type Slide = { src: string; alt: string; pos: string };

const SLIDES: Slide[] = [
  {
    src: "/images/hero-congreso-front.jpg",
    alt: "Líder de HK Consulting frente al Congreso de la República",
    pos: "72% 50%",
  },
  {
    src: "/images/hero-congreso-fila.jpg",
    alt: "Equipo de HK Consulting en fila frente al Congreso",
    pos: "50% 52%",
  },
  {
    src: "/images/equipo-completo.jpg",
    alt: "Equipo completo de HK Consulting en la plaza del Congreso",
    pos: "46% 66%",
  },
];

const STATS = [
  { pre: "+", value: 280, label: "Proyectos" },
  { value: 24, label: "Regiones" },
  { value: 19, label: "Años" },
] as const;

const DELAY = 5000;
const fmt = (n: number) => n.toLocaleString("es-PE");

export function HeroNuevo() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  const next = useCallback(() => setActive((i) => (i + 1) % SLIDES.length), []);
  const goTo = useCallback(
    (n: number) => setActive(((n % SLIDES.length) + SLIDES.length) % SLIDES.length),
    [],
  );

  /* Reveal al entrar en viewport (con red de seguridad). */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.2 },
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
      setCounts(STATS.map((s) => s.value));
      return;
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

  /* Auto-avance por tiempo (siempre, como el hero anterior): se reinicia con
     cada cambio. El crossfade es suave; el zoom Ken Burns sí se desactiva bajo
     prefers-reduced-motion vía CSS. */
  useEffect(() => {
    const t = window.setTimeout(next, DELAY);
    return () => window.clearTimeout(t);
  }, [active, next]);

  /* Glow naranja con parallax de puntero. */
  useEffect(() => {
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
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const depth = -26;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${(cx * depth).toFixed(2)}px,${(cy * depth).toFixed(2)}px,0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${shown ? styles.in : ""}`}
      aria-label="HK Consulting — donde el país se construye"
    >
      {/* Carrusel de fondo */}
      <div className={styles.carousel}>
        {SLIDES.map((s, idx) => (
          <div
            key={s.src}
            className={`${styles.slide} ${idx === active ? styles.slideActive : ""}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={styles.slideImg}
              style={{ objectPosition: s.pos }}
            />
          </div>
        ))}
      </div>

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
                {"pre" in s && s.pre ? (
                  <span className={styles.pre}>{s.pre}</span>
                ) : null}
                <span>{fmt(counts[idx] ?? 0)}</span>
              </div>
              <div className={styles.lab}>{s.label}</div>
            </div>
          ))}
        </div>

        <p className={`${styles.sub} ${styles.rv} ${styles.d6}`}>
          Del primer estudio a la entrega final, un mismo equipo de ingeniería en
          todo el Perú.
        </p>
      </div>

      {/* Controles del carrusel */}
      <div className={styles.controls}>
        <span className={styles.caption}>Congreso de la República · Lima</span>
        <button
          type="button"
          className={styles.navbtn}
          onClick={() => goTo(active - 1)}
          aria-label="Foto anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className={styles.dots}>
          {SLIDES.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              className={`${styles.dot} ${idx === active ? styles.dotActive : ""}`}
              onClick={() => goTo(idx)}
              aria-label={`Ir a la foto ${idx + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.navbtn}
          onClick={() => goTo(active + 1)}
          aria-label="Foto siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
