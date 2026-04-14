import React from "react";
import { motion } from "framer-motion";
import { problemCards } from "../../data/compiLandingData";
import { fadeUp, stagger } from "./animations";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function ProblemSection() {
  return (
    <section id="problema" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>El problema</SectionEyebrow>

        <SectionHeading
          title="Muchas marcas están activas, pero no necesariamente bien posicionadas."
          text="La presencia digital no crece por cantidad de publicaciones. Crece cuando estrategia, identidad, contenido, pauta y conversión trabajan bajo una misma lógica."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {problemCards.map(({ title, text, icon: Icon }, index) => {
            const topLineColors = [
              "from-[var(--compi-orange)] to-[var(--compi-sky)]",
              "from-[var(--compi-deep-green)] to-[var(--compi-mint)]",
              "from-[var(--compi-blue)] to-[var(--compi-orange)]",
            ];

            return (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group rounded-[2rem] border border-[rgba(34,70,110,0.12)] bg-white p-7 shadow-[0_18px_50px_rgba(34,70,110,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <div
                  className={`mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r ${topLineColors[index % topLineColors.length]}`}
                />

                <div className="mb-5 inline-flex rounded-2xl bg-[var(--compi-paper-strong)] p-3 text-[var(--compi-blue)]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold leading-tight text-[var(--compi-deep-green)]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--compi-blue)]/90">
                  {text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
