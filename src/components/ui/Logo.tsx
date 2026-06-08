import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light"; // dark = texto oscuro (sobre claro); light = texto claro (sobre navy)
  className?: string;
  href?: string | null;
};

/**
 * Lockup de marca HK Consulting: cubo isométrico (eco del logo original)
 * + wordmark. Vectorial, nítido en cualquier fondo.
 */
export function Logo({ tone = "dark", className = "", href = "/" }: LogoProps) {
  const textMain = tone === "dark" ? "text-navy" : "text-white";
  const textSub = tone === "dark" ? "text-slate-soft" : "text-navy-200";

  const inner = (
    <span className={`group inline-flex items-center gap-3.5 ${className}`}>
      <svg
        viewBox="0 0 32 36"
        className="h-11 w-auto shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5"
        aria-hidden
      >
        {/* cara superior */}
        <polygon points="16,2 30,10 16,18 2,10" fill="#e87a2c" />
        {/* cara izquierda */}
        <polygon points="2,10 16,18 16,34 2,26" fill="#04395b" />
        {/* cara derecha */}
        <polygon points="30,10 16,18 16,34 30,26" fill="#0c537d" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl font-extrabold tracking-tight ${textMain}`}
        >
          HK <span className="text-orange">Consulting</span>
          <span className="ml-1 align-baseline text-[0.62em] font-bold tracking-normal opacity-70">
            S.A.C.
          </span>
        </span>
        <span
          className={`kicker mt-1 text-[0.64rem] tracking-[0.32em] ${textSub}`}
        >
          Ingeniería &amp; Consultoría
        </span>
      </span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} aria-label="HK Consulting — Inicio" className="inline-flex">
      {inner}
    </Link>
  );
}
