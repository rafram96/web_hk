"use client";

import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Si es un año (2006), no se anima con separador de miles. */
  isYear?: boolean;
  durationMs?: number;
  className?: string;
};

export function Counter({
  value,
  prefix = "",
  suffix = "",
  isYear = false,
  durationMs = 1600,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) =>
      `${prefix}${isYear ? String(n) : n.toLocaleString("es-PE")}${suffix}`;
    /* Se escribe directo en el DOM: un setState por frame re-renderizaba el
       componente ~100 veces por contador. */
    const paint = (n: number) => {
      el.textContent = format(n);
    };
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (reduce) {
              paint(value);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              paint(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs, prefix, suffix, isYear]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      0
      {suffix}
    </span>
  );
}
