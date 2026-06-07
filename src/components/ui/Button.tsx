import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "white";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white shadow-[0_10px_30px_-10px_rgba(232,122,44,0.7)] hover:bg-orange-600 hover:-translate-y-0.5",
  outline:
    "border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:text-orange-600",
  white:
    "bg-white text-navy hover:bg-navy-50 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(2,30,48,0.5)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const arrow = (
    <span
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}
