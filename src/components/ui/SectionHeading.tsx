import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Encabezado de sección consistente: kicker mono + título display + intro.
 */
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {kicker && (
        <Reveal variant="fade">
          <div
            className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
          >
            <span className="accent-rule" aria-hidden />
            <span
              className={`kicker ${tone === "dark" ? "text-orange-300" : "text-orange-600"}`}
            >
              {kicker}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2
          className={`mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] ${
            tone === "dark" ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={120}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              tone === "dark" ? "text-navy-100" : "text-slate-soft"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
