import React from "react";
import { motion } from "framer-motion";
import { SectionEyebrow, SectionHeading } from "./ui";

const pillars = [
  {
    title: "Mirada estratégica",
    text: "Analizamos tu marca, tu oferta, tu audiencia y tus objetivos antes de ejecutar cualquier acción.",
  },
  {
    title: "Creatividad con identidad",
    text: "Desarrollamos contenido y diseño que se ve profesional, coherente y alineado con lo que tu marca necesita comunicar.",
  },
  {
    title: "Acompañamiento integral",
    text: "Podemos trabajar estrategia, contenido, publicidad y web dentro de una misma lógica para que todo tenga más sentido y mejores resultados.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Por qué COMPI</SectionEyebrow>

        <SectionHeading
          title="Una agencia que combina estrategia, creatividad y ejecución."
          text="No se trata solo de diseñar piezas o lanzar anuncios. Se trata de entender tu negocio, construir una propuesta clara y ejecutar acciones que ayuden a comunicar y vender mejor."
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
