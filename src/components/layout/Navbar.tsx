"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav, contact } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(2,30,48,0.08),0_12px_30px_-18px_rgba(2,30,48,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-hk flex h-20 items-center justify-between">
        <Logo tone={solid ? "dark" : "light"} />

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-orange after:transition-all after:duration-300 hover:after:w-full ${
                solid
                  ? "text-navy hover:text-orange-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${contact.phoneHref}`}
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(232,122,44,0.8)] transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5"
          >
            <span aria-hidden>✆</span>
            {contact.phone}
          </a>
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden ${
            solid ? "text-navy" : "text-white"
          }`}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden bg-white lg:hidden transition-[max-height] duration-400 ease-out ${
          open ? "max-h-[28rem] border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="container-hk flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-navy transition-colors hover:bg-mist"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${contact.phoneHref}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white"
          >
            <span aria-hidden>✆</span>
            {contact.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
