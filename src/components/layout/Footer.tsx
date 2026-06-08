import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { company, contact, nav, services } from "@/lib/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
      {/* franja superior naranja */}
      <div className="relative h-1 w-full bg-gradient-to-r from-orange via-orange-300 to-orange" />

      <div className="container-hk relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Marca */}
        <div className="lg:col-span-4">
          <Logo tone="light" href={null} />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-200">
            {company.tagline}. {company.claim}.
          </p>
          <p className="mt-5 kicker text-orange-300">
            {company.legalName} · RUC {company.ruc}
          </p>
        </div>

        {/* Navegación */}
        <div className="lg:col-span-2">
          <h3 className="kicker text-white/70">Navegación</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-100 transition-colors hover:text-orange-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div className="lg:col-span-3">
          <h3 className="kicker text-white/70">Servicios</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios#${s.slug}`}
                  className="text-navy-100 transition-colors hover:text-orange-300"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="lg:col-span-3">
          <h3 className="kicker text-white/70">Contacto</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`tel:${contact.phoneHref}`}
                className="block text-navy-100 transition-colors hover:text-orange-300"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="block break-all text-navy-100 transition-colors hover:text-orange-300"
              >
                {contact.email}
              </a>
            </li>
            <li className="text-navy-200">{contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-hk flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>
            © {year} {company.legalName}. Todos los derechos reservados.
          </p>
          <p className="kicker text-navy-300">
            {company.subtitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
