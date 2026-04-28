import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "../../data/compiLandingData";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function ProcessTimelineSection() {
  return (
    <section id="proceso" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Proceso</SectionEyebrow>

        <SectionHeading
          title="Así trabaja COMPI cuando una marca necesita crecer con más orden."
          text="El proceso deja de verse como checklist técnica y se presenta como una secuencia comercial lógica: entender, posicionar, comunicar, activar y optimizar."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.number ?? `${item.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="rounded-[2rem] border border-[rgba(34,70,110,0.12)] bg-white p-6 shadow-[0_18px_50px_rgba(34,70,110,0.06)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[var(--compi-blue)]/18">
                  {item.number}
                </span>
                <div className="h-10 w-10 rounded-full bg-[var(--compi-paper-strong)]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[var(--compi-deep-green)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/90">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}