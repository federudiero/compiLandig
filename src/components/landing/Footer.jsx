import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[rgba(34,70,110,0.12)] pt-8 text-sm text-[var(--compi-blue-soft)] md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 COMPI. Estrategia, creatividad, contenido, publicidad y web para marcas que quieren crecer.
        </p>

        <div className="flex items-center gap-4 text-[var(--compi-blue)]">
          <a href="#inicio" className="transition hover:text-[var(--compi-orange)]">
            Volver arriba
          </a>
          <a href="#servicios" className="transition hover:text-[var(--compi-orange)]">
            Servicios
          </a>
          <a href="#contacto" className="transition hover:text-[var(--compi-orange)]">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
