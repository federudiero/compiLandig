import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Send, X } from "lucide-react";

export const WHATSAPP_CONTACTS = [
  {
    id: "spain",
    country: "España",
    label: "+34 661 507 599",
    phone: "34661507599",
  },
  {
    id: "argentina",
    country: "Argentina",
    label: "+54 9 351 707 4847",
    phone: "5493517074847",
  },
];

const CONTACT_TOPICS = [
  "Estrategia de marca",
  "Publicidad en Meta / Google",
  "Contenido para redes",
  "Landing page o sitio web",
  "Identidad visual",
  "Consulta general",
];

export function WhatsAppBrandIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M16.02 3.2A12.65 12.65 0 0 0 5.1 22.2L3.7 28.8l6.72-1.75a12.63 12.63 0 1 0 5.6-23.85Zm0 22.98a10.32 10.32 0 0 1-5.25-1.44l-.38-.23-3.98 1.04.85-4.12-.25-.42a10.33 10.33 0 1 1 9.01 5.17Zm5.84-7.74c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.18.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.22.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.22 2.26 3.45 5.47 4.83.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export function CountryFlag({ countryId, className = "h-5 w-7" }) {
  if (countryId === "spain") {
    return (
      <svg
        viewBox="0 0 36 24"
        role="img"
        aria-label="Bandera de España"
        className={className}
      >
        <rect width="36" height="24" rx="4" fill="#AA151B" />
        <rect y="6" width="36" height="12" fill="#F1BF00" />
        <rect width="36" height="24" rx="4" fill="none" stroke="rgba(0,0,0,0.12)" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label="Bandera de Argentina"
      className={className}
    >
      <rect width="36" height="24" rx="4" fill="#74ACDF" />
      <rect y="8" width="36" height="8" fill="#FFFFFF" />
      <circle cx="18" cy="12" r="2.2" fill="#F6B40E" />
      <g stroke="#F6B40E" strokeWidth="0.75" strokeLinecap="round">
        <path d="M18 7.8v1.55M18 14.65v1.55M13.8 12h1.55M20.65 12h1.55M15.03 9.03l1.1 1.1M19.87 13.87l1.1 1.1M20.97 9.03l-1.1 1.1M16.13 13.87l-1.1 1.1" />
      </g>
      <rect width="36" height="24" rx="4" fill="none" stroke="rgba(0,0,0,0.12)" />
    </svg>
  );
}

export default function WhatsAppContactModal({ open, onClose, initialContactId = "argentina" }) {
  const [selectedContactId, setSelectedContactId] = useState(initialContactId);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    setSelectedContactId(initialContactId || "argentina");
  }, [initialContactId, open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, open]);

  const selectedContact = useMemo(
    () => WHATSAPP_CONTACTS.find((contact) => contact.id === selectedContactId) || WHATSAPP_CONTACTS[1],
    [selectedContactId],
  );

  const canSend = message.trim().length > 2;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSend) return;

    const whatsappMessage = [
      "Hola COMPI, quiero hacer una consulta.",
      name.trim() ? `Nombre: ${name.trim()}` : null,
      company.trim() ? `Marca / empresa: ${company.trim()}` : null,
      topic ? `Necesito: ${topic}` : null,
      `Mensaje: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${selectedContact.phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose?.();
  };

  if (!open) return null;

  const modal = (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-6 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <button
        type="button"
        aria-label="Cerrar modal de contacto"
        className="absolute inset-0 bg-[rgba(0,69,56,0.54)] backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/35 bg-[var(--compi-paper)] shadow-[0_34px_100px_rgba(0,69,56,0.28)]">
        <div className="relative overflow-hidden bg-[var(--compi-deep-green)] px-6 py-6 text-white sm:px-8">
          <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--compi-mint)]/22 blur-2xl" />
          <div aria-hidden className="absolute -bottom-20 left-12 h-44 w-44 rounded-full bg-[var(--compi-sky)]/22 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/82">
                <WhatsAppBrandIcon className="h-4 w-4" />
                WhatsApp
              </div>
              <h2 id="whatsapp-modal-title" className="max-w-xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                Contanos qué necesitás antes de enviar el mensaje.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/76 sm:text-base">
                El mensaje se arma automáticamente y se abre en WhatsApp con la línea que elijas.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--compi-blue-soft)]">
              Elegí el número
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {WHATSAPP_CONTACTS.map((contact) => {
                const isActive = contact.id === selectedContactId;

                return (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => setSelectedContactId(contact.id)}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      isActive
                        ? "border-[var(--compi-orange)] bg-white shadow-[0_18px_42px_rgba(34,70,110,0.11)]"
                        : "border-[rgba(34,70,110,0.12)] bg-white/65 hover:border-[rgba(235,88,64,0.32)] hover:bg-white"
                    }`}
                  >
                    <span className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[var(--compi-deep-green)]">
                      <CountryFlag countryId={contact.id} className="h-5 w-8 shrink-0 rounded shadow-sm" />
                      {contact.country}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[var(--compi-blue)]">
                      <WhatsAppBrandIcon className="h-4 w-4 text-[#25D366]" />
                      {contact.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--compi-blue-soft)]">
                Nombre
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                className="compi-input bg-white"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--compi-blue-soft)]">
                Marca / empresa
              </span>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Nombre de la marca"
                className="compi-input bg-white"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--compi-blue-soft)]">
              Qué necesitás
            </span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)} className="compi-input bg-white">
              {CONTACT_TOPICS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--compi-blue-soft)]">
              Mensaje
            </span>
            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Escribí brevemente qué estás buscando, en qué estado está tu marca y qué resultado querés lograr."
              className="compi-input min-h-[140px] resize-none bg-white"
              required
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs leading-5 text-[var(--compi-blue-soft)]">
              Se enviará a <CountryFlag countryId={selectedContact.id} className="h-4 w-6 shrink-0 rounded shadow-sm" /> {selectedContact.country}: {selectedContact.label}
            </p>

            <button
              type="submit"
              disabled={!canSend}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-extrabold text-white transition hover:translate-y-[-1px] hover:bg-[var(--compi-deep-green)] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            >
              Enviar por WhatsApp
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
