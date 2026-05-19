import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { SectionEyebrow } from "./ui";

export default function FinalCTASection() {
  return (
    <section id="contacto" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="compi-sky-panel overflow-hidden rounded-[2.5rem] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionEyebrow>Contacto</SectionEyebrow>

              <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] text-[var(--compi-deep-green)] md:text-6xl">
                Contanos qué necesita tu marca y armamos una propuesta a medida.
              </h2>

              <p className="compi-sky-panel-muted mt-5 max-w-2xl text-lg leading-8">
                Podemos ayudarte con estrategia, contenido, campañas
                publicitarias, landing pages, sitios web o una propuesta integral
                donde todo trabaje en conjunto.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contacto-form" className="compi-btn-light">
                  Completar brief
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a href="#servicios" className="compi-btn-secondary">
                  Ver servicios
                </a>
              </div>
            </div>

            <motion.div
              id="contacto-form"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="compi-brand-card rounded-[2rem] p-6 text-[var(--compi-deep-green)]"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--compi-blue-soft)]">
                Brief inicial
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="compi-input"
                />
                <input
                  type="text"
                  placeholder="Marca / empresa"
                  className="compi-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="compi-input"
                />
                <textarea
                  rows={5}
                  placeholder="Contanos sobre tu marca y qué necesitás: estrategia, contenido, publicidad, landing o web"
                  className="compi-input min-h-[148px] resize-none"
                />
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--compi-orange)] px-6 py-4 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[var(--compi-blue)]">
                  Enviar consulta
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
