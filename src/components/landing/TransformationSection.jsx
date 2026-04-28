import React from "react";
import { motion } from "framer-motion";
import { brandValues, transformationMedia } from "../../data/compiLandingData";
import AbstractMediaCluster from "./AbstractMediaCluster";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function TransformationSection() {
  return (
    <section id="marca" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[var(--compi-deep-green)] p-8 text-white shadow-[0_26px_70px_rgba(0,69,56,0.18)] md:p-10">
          <SectionEyebrow dark>Sobre COMPI</SectionEyebrow>

          <SectionHeading
            dark
            title="Una agencia que une estrategia, creatividad y ejecución."
            text="COMPI nace de una dupla con mirada creativa y enfoque estratégico. Esa combinación se transforma en marcas mejor posicionadas, comunicación más clara y acciones pensadas para generar resultados reales."
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

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--compi-blue-soft)]">
            Presentación de la agencia
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[var(--compi-deep-green)] md:text-4xl">
            Mostrá quiénes son, cómo trabajan y qué mirada aportan a cada proyecto.
          </h3>
          <p className="mt-4 text-base leading-8 text-[var(--compi-blue)]/90 md:text-lg">
            Este bloque es ideal para un video institucional, escenas del equipo o piezas de branding que transmitan confianza, cercanía y criterio creativo.
          </p>
        </div>

        <AbstractMediaCluster
          featured={transformationMedia.featured}
          secondary={transformationMedia.secondary}
        />
      </div>
    </section>
  );
}
