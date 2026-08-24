"use client";

import { useEffect, useRef } from "react";

type ParallaxTarget = {
  element: HTMLElement;
  speed: number;
};

/**
 * Dirige los efectos continuos de scroll sin provocar renders de React.
 * Lee geometría en bloque y escribe variables CSS dentro de un solo frame.
 */
export function ScrollDirector() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    root.classList.add("hk-scroll-enabled");

    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-scene]")
    );
    const parallaxTargets: ParallaxTarget[] = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    ).map((element) => ({
      element,
      speed: Number(element.dataset.parallax) || 24,
    }));

    const sceneObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-scroll-active");
            sceneObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.04, rootMargin: "12% 0px -12% 0px" }
    );

    for (const scene of scenes) sceneObserver.observe(scene);

    let animationFrame = 0;

    const updateMotion = () => {
      animationFrame = 0;

      const viewportHeight = window.innerHeight;
      const documentHeight = root.scrollHeight - viewportHeight;
      const pageProgress = documentHeight > 0 ? window.scrollY / documentHeight : 0;
      const mobileFactor = window.innerWidth < 768 ? 0.45 : 1;

      const measurements = parallaxTargets.map(({ element, speed }) => {
        const rect = element.getBoundingClientRect();
        const centerDelta = viewportHeight / 2 - (rect.top + rect.height / 2);
        const normalized = Math.max(-1, Math.min(1, centerDelta / viewportHeight));
        return {
          element,
          offset: normalized * speed * mobileFactor,
          visible: rect.bottom > -viewportHeight * 0.25 && rect.top < viewportHeight * 1.25,
        };
      });

      progressRef.current?.style.setProperty(
        "--page-progress",
        String(Math.max(0, Math.min(1, pageProgress)))
      );

      for (const measurement of measurements) {
        if (measurement.visible) {
          measurement.element.style.setProperty(
            "--parallax-y",
            `${measurement.offset.toFixed(2)}px`
          );
        }
      }
    };

    const requestMotionUpdate = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateMotion);
    };

    requestMotionUpdate();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);

    return () => {
      root.classList.remove("hk-scroll-enabled");
      sceneObserver.disconnect();
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="hk-page-progress" aria-hidden>
      <span ref={progressRef} />
      <small>SCROLL</small>
    </div>
  );
}
