import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import WhatsAppContactModal, { WhatsAppBrandIcon } from "./WhatsAppContactModal";

function FloatingWhatsAppButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Contactar por WhatsApp"
      className="floating-whatsapp-button group inline-flex items-center gap-2 rounded-full border border-white/70 bg-[#25D366] p-3 text-white shadow-[0_18px_50px_rgba(0,69,56,0.25)] transition hover:bg-[var(--compi-deep-green)] sm:px-4 sm:py-3"
    >
      <WhatsAppBrandIcon className="h-7 w-7 shrink-0" />
      <span className="hidden pr-1 text-sm font-black sm:inline">WhatsApp</span>
      <span className="absolute -left-2 top-1/2 h-3 w-3 -translate-x-full -translate-y-1/2 rounded-full bg-[var(--compi-orange)] shadow-[0_0_0_6px_rgba(235,88,64,0.12)] transition group-hover:scale-125" />
    </button>
  );
}

function ScrollTopButton({ visible }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Subir al inicio"
      className={`floating-scroll-top-button ${visible ? "is-visible" : ""}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export default function FloatingActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = portalTarget
    ? createPortal(
        <div className="floating-actions" aria-label="Acciones rápidas">
          <ScrollTopButton visible={showScrollTop} />
          <FloatingWhatsAppButton onClick={() => setIsModalOpen(true)} />
        </div>,
        portalTarget
      )
    : null;

  return (
    <>
      {actions}
      <WhatsAppContactModal
        open={isModalOpen}
        initialContactId="argentina"
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
