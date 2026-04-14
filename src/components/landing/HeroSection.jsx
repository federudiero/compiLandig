import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionEyebrow } from "./ui";
import { heroHighlights, heroPills } from "../../data/compiLandingData";

function FloatingPills() {
  return (
    <div className="relative mt-10 flex flex-wrap gap-3">
      {heroPills.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 18 }}
          animate={{
            opacity: 1,
            y: [0, index % 2 === 0 ? -5 : 5, 0],
          }}
          transition={{
            delay: 0.1 + index * 0.05,
            duration: 4 + index * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full border border-[rgba(34,70,110,0.12)] bg-white px-4 py-2 text-sm font-medium text-[var(--compi-blue)] shadow-[0_8px_24px_rgba(34,70,110,0.06)]"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32 lg:px-10"
    >
      <div className="hero-doodle hero-doodle-a" />
      <div className="hero-doodle hero-doodle-b" />
      <div className="hero-doodle hero-doodle-c" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow>Agencia creativa con enfoque estratégico</SectionEyebrow>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.05 }}
            className="hero-hand mt-5 text-base text-[var(--compi-orange)] md:text-lg"
          >
            Desde Argentina hacia el mundo.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-4 max-w-4xl font-[var(--font-display)] text-5xl font-extrabold leading-[0.94] tracking-[-0.03em] text-[var(--compi-deep-green)] md:text-7xl"
          >
            Marketing con identidad, estrategia y una web que convierta.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--compi-blue)]/90 md:text-xl"
          >
            COMPI impulsa el crecimiento de marcas y empresas combinando
            análisis, contenido y publicidad para transformar la presencia online
            en resultados reales. La web ahora acompaña esa lógica: más marca,
            más marketing y menos estética genérica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contacto" className="compi-btn-primary">
              Quiero una propuesta
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#servicios" className="compi-btn-secondary">
              Ver servicios
            </a>
          </motion.div>

          <FloatingPills />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.18 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-[rgba(34,70,110,0.12)] bg-white p-5 shadow-[0_30px_90px_rgba(34,70,110,0.10)] md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] bg-[var(--compi-deep-green)] p-6 text-white sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                  Ruta estratégica
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">
                  Estrategia + creatividad + resultados.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
                  Una identidad visual coherente, campañas con criterio y una base
                  digital pensada para que el marketing termine en consultas,
                  oportunidades o ventas.
                </p>
              </div>

              {heroHighlights.map((item, index) => {
                const Icon = item.icon;
                const cardClass =
                  index === 0
                    ? "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]"
                    : index === 1
                    ? "bg-[var(--compi-blue)] text-white"
                    : "bg-[var(--compi-sky)] text-[var(--compi-blue)] sm:col-span-2";

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 + index * 0.08, duration: 0.6 }}
                    className={`rounded-[1.5rem] p-5 ${cardClass}`}
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-white/20 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xl font-bold leading-tight">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 opacity-90">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="brand-chip absolute -left-3 top-10 rotate-[-8deg] bg-[var(--compi-orange)] text-white">
            Meta + Google Ads
          </div>
          <div className="brand-chip absolute -right-3 bottom-10 rotate-[6deg] bg-[var(--compi-mint)] text-[var(--compi-deep-green)]">
            Marca + contenido
          </div>
          <div className="hero-hand absolute -bottom-6 left-8 text-lg text-[var(--compi-blue)]">
            Click! tu marca se ordena mejor así.
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#problema"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-[var(--compi-blue-soft)]"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.32em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
