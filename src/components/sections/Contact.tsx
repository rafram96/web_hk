"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/site";

/** Estado tipado del formulario de contacto. */
type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

type FormStatus = "idle" | "success";

const EMPTY_FORM: ContactForm = { name: "", email: "", phone: "", message: "" };

/** Validación básica de correo (suficiente para un mailto del lado cliente). */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Íconos geométricos inline (grilla 24x24, stroke, currentColor) para los
 * datos de contacto. Coinciden en estilo con el resto del sitio.
 */
const PhoneIcon = (
  <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L15.5 12l4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
);
const MailIcon = (
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </>
);
const PinIcon = (
  <>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </>
);
const DocIcon = (
  <>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 13h6M9 16.5h4" />
  </>
);
const WhatsappIcon = (
  <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.5 12.3c-.2.5-1.1 1-1.5 1-.4.1-.9.1-1.4-.1-.3-.1-.8-.3-1.4-.5a9.3 9.3 0 0 1-3.8-3.4c-.3-.5-.6-1.1-.6-1.7 0-.6.3-.9.5-1.1.1-.2.3-.2.5-.2h.4c.1 0 .3 0 .5.4l.6 1.4c0 .1.1.3 0 .4l-.3.4-.3.3c-.1.1-.2.2-.1.4.2.3.6.9 1.2 1.4.7.6 1.3.8 1.6.9.2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.3.1.1.1.6 0 1Z" />
);

type InfoRow = {
  key: string;
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
};

const infoRows: InfoRow[] = [
  {
    key: "phone",
    label: "Teléfono",
    value: contact.phone,
    href: `tel:${contact.phoneHref}`,
    icon: PhoneIcon,
  },
  {
    key: "email",
    label: "Correo",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: MailIcon,
  },
  {
    key: "address",
    label: "Dirección",
    value: contact.address,
    icon: PinIcon,
  },
  {
    key: "ruc",
    label: "RUC",
    value: contact.ruc,
    icon: DocIcon,
  },
];

/** Estilos compartidos de los campos del formulario sobre fondo navy. */
const fieldClass =
  "w-full rounded-xl border border-white/15 bg-navy-800/60 px-4 py-3 text-[0.95rem] text-white placeholder:text-navy-200/60 outline-none transition-colors duration-200 focus:border-orange/60 focus:ring-2 focus:ring-orange/40";
const labelClass =
  "mb-2 block font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-navy-100";

/**
 * Sección "Contacto" — CTA + datos de contacto y formulario. Client Component:
 * el formulario gestiona estado, valida campos y, al enviar, abre un mailto
 * pre-rellenado al correo de HK Consulting. La columna izquierda concentra los
 * datos de contacto con un botón directo a WhatsApp.
 */
export function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo en cuanto el usuario lo corrige.
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "success") setStatus("idle");
  };

  const validate = (values: ContactForm): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Ingrese su nombre.";
    if (!values.email.trim()) {
      next.email = "Ingrese su correo.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "Ingrese un correo válido.";
    }
    if (!values.message.trim()) next.message = "Cuéntenos sobre su proyecto.";
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    const subject = `Consulta de proyecto — ${form.name.trim()}`;
    const bodyLines = [
      `Nombre: ${form.name.trim()}`,
      `Correo: ${form.email.trim()}`,
      form.phone.trim() ? `Teléfono: ${form.phone.trim()}` : null,
      "",
      "Mensaje:",
      form.message.trim(),
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setErrors({});
    setStatus("success");
    window.location.href = mailto;
  };

  return (
    <Section id="contacto" tone="navy">
      {/* Capa decorativa: retícula de plano técnico (líneas claras sobre navy). */}
      <div
        aria-hidden
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-50"
      />

      <div className="container-hk relative">
        <SectionHeading
          tone="dark"
          align="center"
          kicker="Contacto"
          title="Contáctenos y reciba asesoría técnica especializada"
          intro="Cuéntenos sobre su proyecto. Nuestro equipo le responderá a la brevedad."
        />

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.85fr_1fr] lg:gap-12">
          {/* ---------- IZQUIERDA: datos de contacto ---------- */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-4">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {infoRows.map((row) => {
                  const content = (
                    <>
                      <span
                        aria-hidden
                        className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/15 bg-navy-800/60 text-orange-300 transition-colors duration-300 group-hover:border-orange/40 group-hover:text-orange"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-[1.35rem] w-[1.35rem]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {row.icon}
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-navy-200">
                          {row.label}
                        </span>
                        <span className="mt-1 block text-[0.95rem] leading-snug text-white">
                          {row.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={row.key}>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Botón directo a WhatsApp. */}
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-orange px-6 py-4 font-display text-base font-bold text-white shadow-float transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200/70"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  {WhatsappIcon}
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </Reveal>

          {/* ---------- DERECHA: formulario ---------- */}
          <Reveal delay={120} className="h-full">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative h-full rounded-2xl border border-white/12 bg-navy-900/40 p-6 shadow-float backdrop-blur-sm sm:p-8"
            >
              {/* Acento naranja superior. */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-orange/80"
              />

              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Nombre
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Su nombre completo"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-xs text-orange-200"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>
                      Teléfono
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(Opcional)"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Correo
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nombre@correo.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-1.5 text-xs text-orange-200"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descríbanos su proyecto o consulta…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${fieldClass} resize-y`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 text-xs text-orange-200"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-orange px-6 py-3.5 font-display text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200/70"
                >
                  Enviar mensaje
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                {status === "success" && (
                  <p
                    role="status"
                    className="flex items-center gap-2 rounded-xl border border-orange/30 bg-orange/10 px-4 py-3 text-sm text-orange-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 flex-none text-orange-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    ¡Gracias! Abrimos tu correo para enviar el mensaje.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
