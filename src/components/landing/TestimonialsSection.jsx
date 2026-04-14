import React from "react";
import { motion } from "framer-motion";
import { SectionEyebrow, SectionHeading } from "./ui";

const pillars = [
  {
    title: "Sello argentino + visión internacional",
    text: "El manual lo plantea de forma explícita. Por eso la web ahora comunica una marca con identidad propia, no una landing genérica de agencia.",
  },
  {
    title: "Cercanía, dinamismo y autenticidad",
    text: "La dirección visual recomendada en el manual habla de humanidad, modernidad y autenticidad. Eso se bajó a colores, tarjetas, bloques y tono.",
  },
  {
    title: "Coherencia en todos los puntos de contacto",
    text: "Se eliminó el box de seguimiento y el look oscuro tipo dashboard para que toda la web responda a una lógica de marca más editorial y comercial.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Identidad aplicada</SectionEyebrow>

        <SectionHeading
          title="La página ahora se siente más COMPI y mucho menos template."
          text="El cambio no fue solo de colores. Se reordenó la jerarquía para que marketing sea el centro, se usó una paleta alineada al manual y se bajó el lenguaje visual a un formato más humano, dinámico y reconocible."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((item, index) => {
            const backgrounds = [
              "bg-[var(--compi-orange)] text-white",
              "bg-[var(--compi-blue)] text-white",
              "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]",
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className={`rounded-[2rem] p-7 shadow-[0_18px_50px_rgba(34,70,110,0.06)] ${backgrounds[index % backgrounds.length]}`}
              >
                <p className="text-xl font-bold leading-tight">{item.title}</p>
                <p className="mt-4 text-lg leading-8 opacity-90">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
