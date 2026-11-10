import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { Section } from "@/components/ui/Section";
import { company, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${company.legalName} trata los datos personales que recibe a través de su sitio web, conforme a la Ley N.º 29733, Ley de Protección de Datos Personales.`,
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

/** Fecha de la versión vigente de la política. Actualizar al modificarla. */
const LAST_UPDATED = "9 de noviembre de 2026";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-2xl leading-tight sm:text-[1.7rem]">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-soft">
        {children}
      </div>
    </section>
  );
}

const listClass = "list-disc space-y-2 pl-5 marker:text-orange";

/**
 * Política de privacidad. Información que el titular del banco de datos debe
 * poner a disposición de quien entrega sus datos (Ley N.º 29733, art. 18, y su
 * reglamento, D.S. N.º 016-2024-JUS).
 */
export default function PrivacidadPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div className="container-hk relative flex flex-col justify-center pb-14 pt-32 lg:pb-16 lg:pt-40">
          <nav aria-label="Ruta de navegación" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-navy-100">
              <li>
                <Link href="/" className="transition-colors hover:text-orange-300">
                  Inicio
                </Link>
              </li>
              <li aria-hidden className="text-navy-300">
                /
              </li>
              <li aria-current="page" className="text-orange-300">
                Privacidad
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-3">
            <span className="accent-rule" aria-hidden />
            <span className="kicker text-orange-300">Datos personales</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-navy-200">
            Última actualización: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <Section tone="light">
        <div className="container-hk relative">
          <div className="mx-auto max-w-3xl space-y-10">
            <p className="text-lg leading-relaxed text-ink">
              En {company.legalName} respetamos la privacidad de quienes se
              comunican con nosotros. Esta política explica qué datos
              personales recibimos a través de este sitio web, para qué los
              usamos y cómo puede ejercer sus derechos, conforme a la Ley N.º
              29733, Ley de Protección de Datos Personales, y su reglamento.
            </p>

            <Block title="1. Responsable del tratamiento">
              <ul className={listClass}>
                <li>
                  <strong className="text-ink">Razón social:</strong>{" "}
                  {company.legalName}
                </li>
                <li>
                  <strong className="text-ink">RUC:</strong> {company.ruc}
                </li>
                <li>
                  <strong className="text-ink">Domicilio:</strong>{" "}
                  {contact.address}
                </li>
                <li>
                  <strong className="text-ink">Correo:</strong>{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-navy underline decoration-orange/60 underline-offset-4 hover:text-orange-600"
                  >
                    {contact.email}
                  </a>
                </li>
              </ul>
            </Block>

            <Block title="2. Datos que recibimos">
              <p>
                Solo recibimos los datos que usted decide enviarnos al
                contactarnos:
              </p>
              <ul className={listClass}>
                <li>
                  <strong className="text-ink">Formulario de contacto:</strong>{" "}
                  nombre, correo electrónico, teléfono (opcional) y el
                  contenido de su mensaje. El formulario no guarda información
                  en este sitio: prepara un correo en su propio programa de
                  correo, y usted decide si lo envía.
                </li>
                <li>
                  <strong className="text-ink">Correo, teléfono y WhatsApp:</strong>{" "}
                  los datos que usted incluya al escribirnos o llamarnos por
                  esos medios.
                </li>
              </ul>
              <p>
                No solicitamos datos sensibles ni datos de menores de edad. Le
                pedimos no incluirlos en sus mensajes.
              </p>
            </Block>

            <Block title="3. Para qué usamos sus datos">
              <ul className={listClass}>
                <li>Responder sus consultas y solicitudes de información.</li>
                <li>
                  Preparar y enviar propuestas técnicas o económicas que usted
                  nos solicite.
                </li>
                <li>
                  Mantener la comunicación necesaria si su consulta da lugar a
                  una relación contractual.
                </li>
              </ul>
              <p>
                No usamos sus datos para enviarle publicidad sin su
                consentimiento, y no los vendemos ni los cedemos a terceros
                para sus propios fines.
              </p>
            </Block>

            <Block title="4. Consentimiento">
              <p>
                Al enviarnos sus datos por cualquiera de los medios indicados,
                usted otorga su consentimiento libre, previo, expreso e
                informado para que los tratemos con las finalidades descritas
                en esta política. Puede revocarlo en cualquier momento
                escribiendo a {contact.email}.
              </p>
            </Block>

            <Block title="5. Proveedores que intervienen">
              <p>
                Para operar este sitio y nuestras comunicaciones usamos
                proveedores tecnológicos que pueden procesar datos fuera del
                Perú, con medidas de seguridad acordes con la normativa:
              </p>
              <ul className={listClass}>
                <li>
                  <strong className="text-ink">Servicio de correo electrónico</strong>{" "}
                  (Google), donde recibimos los mensajes.
                </li>
                <li>
                  <strong className="text-ink">WhatsApp</strong> (Meta), si
                  usted elige escribirnos por ese medio.
                </li>
                <li>
                  <strong className="text-ink">Alojamiento del sitio web</strong>{" "}
                  (Vercel), que registra datos técnicos de acceso, como la
                  dirección IP y el navegador, con fines de seguridad y
                  funcionamiento.
                </li>
              </ul>
              <p>
                Fuera de estos casos, solo comunicaremos sus datos a una
                autoridad cuando una norma o un mandato legal lo exija.
              </p>
            </Block>

            <Block title="6. Cookies">
              <p>
                Este sitio no usa cookies, herramientas de analítica ni
                publicidad, y no guarda información en su navegador. Si esto
                cambia, actualizaremos esta política antes de hacerlo.
              </p>
            </Block>

            <Block title="7. Tiempo de conservación">
              <p>
                Conservamos sus datos durante el tiempo necesario para atender
                su consulta y, si se inicia una relación contractual, mientras
                esta dure y por los plazos que exija la normativa aplicable.
                Luego los eliminamos o anonimizamos.
              </p>
            </Block>

            <Block title="8. Seguridad">
              <p>
                El sitio funciona siempre sobre una conexión cifrada (HTTPS).
                Aplicamos medidas técnicas y organizativas razonables para
                proteger sus datos frente a pérdida, uso indebido o acceso no
                autorizado.
              </p>
            </Block>

            <Block title="9. Sus derechos">
              <p>
                Usted puede ejercer en cualquier momento sus derechos de
                acceso, rectificación, cancelación y oposición (derechos ARCO),
                así como revocar su consentimiento. Para hacerlo, escriba a{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-navy underline decoration-orange/60 underline-offset-4 hover:text-orange-600"
                >
                  {contact.email}
                </a>{" "}
                indicando su nombre, el derecho que desea ejercer y un medio de
                contacto. Atenderemos su solicitud dentro de los plazos que
                establece la normativa.
              </p>
              <p>
                Si considera que su solicitud no fue atendida, puede presentar
                una reclamación ante la Autoridad Nacional de Protección de
                Datos Personales del Ministerio de Justicia y Derechos Humanos.
              </p>
            </Block>

            <Block title="10. Cambios a esta política">
              <p>
                Podemos actualizar esta política para reflejar cambios
                normativos o en nuestros servicios. La versión vigente es
                siempre la publicada en esta página, con su fecha de
                actualización.
              </p>
            </Block>
          </div>
        </div>
      </Section>
    </>
  );
}
