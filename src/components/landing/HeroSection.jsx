import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionEyebrow } from "./ui";
import { heroPills } from "../../data/compiLandingData";

function FloatingPills() {
  return (
    <div className="relative mt-10 flex flex-wrap gap-3">
      {heroPills.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.04 + index * 0.035,
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            animate={{
              y: [0, index % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              delay: 0.18 + index * 0.04,
              duration: 1.45 + index * 0.05,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full border border-[rgba(34,70,110,0.12)] bg-white px-4 py-2 text-sm font-medium text-[var(--compi-blue)] shadow-[0_8px_24px_rgba(34,70,110,0.06)]"
          >
            {item}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 34, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="hero-visual-stage relative mx-auto mt-4 w-full max-w-[360px] sm:max-w-[420px] lg:mt-0 lg:max-w-[520px] lg:self-end"
    >
      <div className="hero-visual-halo" />
      <div className="hero-visual-shadow" />

      <div className="hero-team-composition" aria-label="Nico e Iris, equipo de COMPI">
        <motion.div
          className="hero-person-placement hero-person-nico-placement"
          initial={{ opacity: 0, x: -18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-person-float hero-person-float-nico">
            <img
              src="/images/team/nico-cutout.png"
              alt="Nico, equipo de COMPI"
              draggable="false"
              className="hero-person-cutout"
            />
          </div>
        </motion.div>

        <motion.div
          className="hero-person-placement hero-person-iris-placement"
          initial={{ opacity: 0, x: 18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-person-float hero-person-float-iris">
            <img
              src="/images/team/iris-cutout.png"
              alt="Iris, equipo de COMPI"
              draggable="false"
              className="hero-person-cutout"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
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

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.55fr)] lg:gap-14">
          <div className="max-w-5xl overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <SectionEyebrow>Agencia de marketing y creatividad</SectionEyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 max-w-5xl overflow-visible pb-2 font-[var(--font-display)] text-5xl font-extrabold tracking-[-0.055em] text-[var(--compi-deep-green)] md:text-7xl"
              style={{
                lineHeight: 1.02,
                textWrap: "balance",
              }}
            >
              Potenciamos tu negocio desarrollando estrategias de marketing digital
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-[var(--compi-blue)]/90 md:text-xl"
            >
              Optimizamos tu presencia online, generamos tráfico de calidad y
              aumentamos consultas y oportunidades de venta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.16 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#contacto" className="compi-btn-primary">
                Agendar un diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#servicios" className="compi-btn-secondary">
                Ver servicios
              </a>
            </motion.div>

            <FloatingPills />
          </div>

          <HeroVisual />
        </div>
      </div>

      <motion.a
        href="#problema"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.35 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-[var(--compi-blue-soft)]"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.32em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce [animation-duration:0.75s]" />
      </motion.a>
    </section>
  );
}