import React, { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import logoCompi from "../../assets/logo-compi.png";
import WhatsAppContactModal, {
  CountryFlag,
  WHATSAPP_CONTACTS,
  WhatsAppBrandIcon,
} from "./WhatsAppContactModal";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Equipo", href: "#equipo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Web", href: "#portfolio" },
  { label: "Redes", href: "#redes" },
  { label: "Contacto", href: "#contacto" },
];

const footerServices = [
  "Estrategia de marca",
  "Contenido para redes",
  "Publicidad digital",
  "Landing pages",
  "Sitios web",
  "Optimización de conversión",
];

function FloatingWhatsAppButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Abrir consulta por WhatsApp"
      className="group fixed right-3 top-1/2 z-[80] inline-flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/60 bg-[#25D366] p-3 text-white shadow-[0_18px_50px_rgba(0,69,56,0.25)] transition hover:-translate-y-[calc(50%+2px)] hover:bg-[var(--compi-deep-green)] sm:right-5 sm:px-4 sm:py-3"
    >
      <WhatsAppBrandIcon className="h-7 w-7 shrink-0" />
      <span className="hidden pr-1 text-sm font-black sm:inline">WhatsApp</span>
      <span className="absolute -left-2 top-1/2 h-3 w-3 -translate-x-full -translate-y-1/2 rounded-full bg-[var(--compi-orange)] shadow-[0_0_0_6px_rgba(235,88,64,0.12)] transition group-hover:scale-125" />
    </button>
  );
}

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialContactId, setInitialContactId] = useState("argentina");

  const openWhatsAppModal = (contactId = "argentina") => {
    setInitialContactId(contactId);
    setIsModalOpen(true);
  };

  return (
    <>
      <FloatingWhatsAppButton onClick={() => openWhatsAppModal("argentina")} />

      <footer className="relative z-10 px-4 pb-8 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[rgba(34,70,110,0.13)] bg-white/82 shadow-[0_28px_90px_rgba(34,70,110,0.10)] backdrop-blur-xl">
          <div className="grid gap-10 px-6 py-9 sm:px-8 lg:grid-cols-[1.12fr_0.8fr_0.8fr_1fr] lg:px-10 lg:py-11">
            <div className="max-w-md">
              <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Volver al inicio de COMPI">
                <img
                  src={logoCompi}
                  alt="COMPI Agencia de Marketing"
                  className="h-14 w-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--compi-deep-green)]">
                    COMPI
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--compi-blue-soft)]">
                    Agencia de marketing
                  </p>
                </div>
              </a>

              <p className="mt-5 text-sm leading-7 text-[var(--compi-blue)]/88">
                Estrategia, creatividad, contenido, publicidad y desarrollo web para marcas que quieren comunicar mejor y convertir más consultas.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(34,70,110,0.12)] bg-[var(--compi-paper)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--compi-deep-green)]">
                <Globe2 className="h-4 w-4 text-[var(--compi-orange)]" />
                Argentina · España · Internacional
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[var(--compi-deep-green)]">
                Navegación
              </h3>
              <nav className="mt-5 grid gap-3" aria-label="Enlaces principales del footer">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center justify-between gap-3 text-sm font-semibold text-[var(--compi-blue)] transition hover:text-[var(--compi-orange)]"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[var(--compi-deep-green)]">
                Servicios
              </h3>
              <ul className="mt-5 grid gap-3 text-sm text-[var(--compi-blue)]/88">
                {footerServices.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--compi-orange)]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[var(--compi-deep-green)]">
                Contacto
              </h3>

              <div className="mt-5 space-y-3">
                {WHATSAPP_CONTACTS.map((contact) => (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => openWhatsAppModal(contact.id)}
                    className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[rgba(34,70,110,0.11)] bg-[var(--compi-paper)] px-4 py-3 text-left transition hover:border-[rgba(235,88,64,0.32)] hover:bg-white hover:shadow-[0_16px_40px_rgba(34,70,110,0.08)]"
                  >
                    <span>
                      <span className="flex items-center gap-2 text-sm font-black text-[var(--compi-deep-green)]">
                        <CountryFlag countryId={contact.id} className="h-5 w-8 shrink-0 rounded shadow-sm" />
                        {contact.country}
                      </span>
                      <span className="mt-1 flex items-center gap-2 text-sm font-semibold text-[var(--compi-blue)]">
                        <Phone className="h-3.5 w-3.5" />
                        {contact.label}
                      </span>
                    </span>
                    <WhatsAppBrandIcon className="h-6 w-6 shrink-0 text-[#25D366]" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openWhatsAppModal("argentina")}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:translate-y-[-1px] hover:bg-[var(--compi-deep-green)]"
              >
                <WhatsAppBrandIcon className="h-5 w-5" />
                Escribir por WhatsApp
              </button>

              <div className="mt-5 grid gap-2 text-xs leading-5 text-[var(--compi-blue-soft)]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[var(--compi-orange)]" />
                  Atención remota y proyectos a medida.
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[var(--compi-orange)]" />
                  También podés dejar tu brief en la sección de contacto.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[rgba(34,70,110,0.12)] bg-[rgba(246,243,236,0.68)] px-6 py-5 text-xs text-[var(--compi-blue-soft)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
            <p>© 2026 COMPI. Todos los derechos reservados.</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="#inicio" className="inline-flex items-center gap-1 font-semibold text-[var(--compi-blue)] transition hover:text-[var(--compi-orange)]">
                Volver arriba
                <ExternalLink className="h-3 w-3" />
              </a>
              <button
                type="button"
                onClick={() => openWhatsAppModal("spain")}
                className="inline-flex items-center gap-2 font-semibold text-[var(--compi-blue)] transition hover:text-[var(--compi-orange)]"
              >
                <CountryFlag countryId="spain" className="h-4 w-6 shrink-0 rounded shadow-sm" />
                <MessageCircle className="h-3.5 w-3.5" />
                Consulta internacional
              </button>
            </div>
          </div>
        </div>

        <WhatsAppContactModal
          open={isModalOpen}
          initialContactId={initialContactId}
          onClose={() => setIsModalOpen(false)}
        />
      </footer>
    </>
  );
}
