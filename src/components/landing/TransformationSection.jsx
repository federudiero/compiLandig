import React from "react";
import { motion } from "framer-motion";
import { brandValues } from "../../data/compiLandingData";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function TransformationSection() {
  return (
    <section id="marca" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[var(--compi-deep-green)] p-8 text-white shadow-[0_26px_70px_rgba(0,69,56,0.18)] md:p-10">
          <SectionEyebrow dark>Sobre COMPI</SectionEyebrow>

          <SectionHeading
            dark
            title="Una agencia creativa con identidad argentina y visión integral."
            text="Según el manual, la marca nace de la conexión, la confianza y la complicidad entre sus fundadores. La web ahora toma esa misma base: estrategia, creatividad, cercanía y una mirada humana del marketing."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-white/65">
                Misión
              </p>
              <p className="mt-3 text-sm leading-7 text-white/85">
                Impulsar el crecimiento de marcas a través de estrategias
                digitales creativas y efectivas.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-white/65">
                Visión
              </p>
              <p className="mt-3 text-sm leading-7 text-white/85">
                Ser una agencia reconocida por su enfoque estratégico, su sello
                argentino y su capacidad de generar vínculos reales.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {brandValues.map((item, index) => {
            const backgrounds = [
              "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]",
              "bg-[var(--compi-blue)] text-white",
              "bg-white text-[var(--compi-deep-green)]",
              "bg-[var(--compi-sky)] text-[var(--compi-blue)]",
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className={`rounded-[2rem] p-7 shadow-[0_18px_50px_rgba(34,70,110,0.06)] ${backgrounds[index % backgrounds.length]}`}
              >
                <p className="text-xs uppercase tracking-[0.28em] opacity-70">
                  Valor de marca
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 opacity-90">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
