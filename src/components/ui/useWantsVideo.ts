"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(min-width: 768px)";

type NavWithConnection = Navigator & { connection?: { saveData?: boolean } };

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  const saveData = (navigator as NavWithConnection).connection?.saveData;
  return window.matchMedia(QUERY).matches && !saveData;
}

/**
 * ¿Conviene descargar un vídeo de fondo en este dispositivo? Solo en
 * pantallas anchas y sin el modo de ahorro de datos: en celular con 4G los
 * clips duplicaban el peso de la página y el LCP subía de 3.8 s a 5 s.
 * En el servidor devuelve false, así el HTML inicial nunca trae el <video>.
 */
export function useWantsVideo(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
