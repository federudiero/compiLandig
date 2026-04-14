import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { SectionEyebrow } from "./ui";

export default function FinalCTASection() {
  return (
    <section id="contacto" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-[var(--compi-deep-green)] p-8 text-white shadow-[0_30px_90px_rgba(0,69,56,0.18)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionEyebrow dark>Contacto</SectionEyebrow>

              <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] text-white md:text-6xl">
                Si la marca necesita más dirección, esta web ya lo comunica mejor.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Dejé el cierre con enfoque comercial y más alineado a marketing.
                El formulario puede conectarse después al canal real que usen,
                pero visualmente ya responde al universo de COMPI.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contacto-form" className="compi-btn-light">
                  Completar brief
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a href="#servicios" className="compi-btn-outline-light">
                  Ver propuesta
                </a>
              </div>
            </div>

            <motion.div
              id="contacto-form"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[2rem] bg-white p-6 text-[var(--compi-deep-green)] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--compi-blue-soft)]">
                Formulario base
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
                  placeholder="Contanos qué querés mejorar: posicionamiento, contenido, pauta, landing o web"
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
