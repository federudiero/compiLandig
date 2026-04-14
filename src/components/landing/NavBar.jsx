import React from "react";
import { ArrowRight } from "lucide-react";
import logoCompi from "../../assets/logo-compi.png";

export default function NavBar() {
  const nav = [
    { label: "Inicio", href: "#inicio" },
    { label: "Marca", href: "#marca" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Web", href: "#portfolio" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[rgba(34,70,110,0.12)] bg-white/82 px-4 py-3 shadow-[0_18px_50px_rgba(34,70,110,0.08)] backdrop-blur-xl md:px-5">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logoCompi}
            alt="Compi"
            className="h-11 w-11 rounded-full object-cover shadow-sm"
          />

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--compi-deep-green)]">
              COMPI
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--compi-blue-soft)]">
              Agencia de marketing
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--compi-blue)] transition hover:text-[var(--compi-orange)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--compi-deep-green)] px-4 py-2 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[var(--compi-blue)]"
        >
          Hablemos
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
