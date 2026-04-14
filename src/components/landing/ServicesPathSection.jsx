import React from "react";
import { motion } from "framer-motion";
import { services } from "../../data/compiLandingData";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function ServicesPathSection() {
  return (
    <section id="servicios" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Servicios</SectionEyebrow>

        <SectionHeading
          title="La web ahora vende mejor la parte de marketing porque la estructura arranca desde la estrategia."
          text="En vez de mostrar un recorrido genérico, la página presenta el sistema real de trabajo de COMPI: posicionamiento, comunicación, contenido, pauta y conversión. El desarrollo web aparece como soporte comercial, no como eje aislado."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            const accents = [
              "bg-[var(--compi-orange)] text-white",
              "bg-[var(--compi-deep-green)] text-white",
              "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]",
              "bg-[var(--compi-blue)] text-white",
              "bg-[var(--compi-sky)] text-[var(--compi-blue)]",
              "bg-white text-[var(--compi-deep-green)]",
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.62, delay: index * 0.05 }}
                className="rounded-[2rem] border border-[rgba(34,70,110,0.12)] bg-white p-7 shadow-[0_18px_50px_rgba(34,70,110,0.06)]"
              >
                <div className={`mb-5 inline-flex rounded-2xl p-3 ${accents[index % accents.length]}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold leading-tight text-[var(--compi-deep-green)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--compi-blue)]/90">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
