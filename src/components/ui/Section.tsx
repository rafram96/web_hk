import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  /** Variante de fondo. */
  tone?: "light" | "mist" | "navy" | "navy-deep";
  className?: string;
  /** Quita el padding vertical por defecto. */
  flush?: boolean;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  navy: "bg-navy text-white",
  "navy-deep": "bg-navy-900 text-white",
};

export function Section({
  id,
  children,
  tone = "light",
  className = "",
  flush = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${flush ? "" : "py-20 lg:py-28"} ${toneClass[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
