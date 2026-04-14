import React from "react";
import { motion } from "framer-motion";
import { benefitItems } from "../../data/compiLandingData";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionEyebrow>Resultados</SectionEyebrow>

          <SectionHeading
            title="Cuando la marca está ordenada, el marketing deja de sentirse improvisado."
            text="La nueva estética y el nuevo contenido buscan transmitir exactamente eso: cercanía, profesionalismo, coherencia y capacidad de expansión."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefitItems.map((item, index) => {
            const Icon = item.icon;
            const iconBg = [
              "bg-[var(--compi-orange)] text-white",
              "bg-[var(--compi-deep-green)] text-white",
              "bg-[var(--compi-blue)] text-white",
              "bg-[var(--compi-sky)] text-[var(--compi-blue)]",
              "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]",
              "bg-[var(--compi-paper-strong)] text-[var(--compi-deep-green)]",
            ];

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-[rgba(34,70,110,0.12)] bg-white p-5 text-[var(--compi-deep-green)] shadow-[0_18px_50px_rgba(34,70,110,0.06)]"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${iconBg[index % iconBg.length]}`}>
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-lg font-semibold leading-8">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
