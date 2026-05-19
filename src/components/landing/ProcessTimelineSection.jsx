import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "./ui";

const processItems = [
  {
    accent: "var(--compi-blue)",
    accentSoft: "rgba(34,70,110,0.12)",
    problem: "No sabés qué decir en redes",
    service: "Estrategia de contenido",
    outcome: "Comunicación clara y enfocada",
  },
  {
    accent: "var(--compi-sky)",
    accentSoft: "rgba(139,193,221,0.18)",
    problem: "Publicás pero no vendés",
    service: "Contenido para redes sociales",
    outcome: "Genera engagement y consultas",
  },
  {
    accent: "var(--compi-orange)",
    accentSoft: "rgba(235,88,64,0.14)",
    problem: "Tenés seguidores pero no clientes",
    service: "Meta Ads",
    outcome: "Generación de leads reales",
  },
  {
    accent: "var(--compi-deep-green)",
    accentSoft: "rgba(0,69,56,0.12)",
    problem: "Tu marca no se ve profesional",
    service: "Diseño gráfico y branding",
    outcome: "Imagen clara y confiable",
  },
  {
    accent: "var(--compi-blue)",
    accentSoft: "rgba(34,70,110,0.12)",
    problem: "Tu cuenta está inactiva",
    service: "Community management",
    outcome: "Publicación + respuesta constante",
  },
  {
    accent: "var(--compi-mint)",
    accentSoft: "rgba(186,219,180,0.22)",
    problem: "Tu web no convierte",
    service: "Desarrollo web",
    outcome: "Optimizada para generar consultas",
  },
];

function ProcessRouteLine() {
  return (
    <div className="process-route-lines" aria-hidden="true">
      <svg
        className="process-route-svg process-route-svg-desktop"
        viewBox="0 0 1200 380"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="processRouteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#004538" />
            <stop offset="22%" stopColor="#22466e" />
            <stop offset="44%" stopColor="#8bc1dd" />
            <stop offset="64%" stopColor="#eb5840" />
            <stop offset="82%" stopColor="#004538" />
            <stop offset="100%" stopColor="#badbb4" />
          </linearGradient>

          <filter id="processRouteShadow" x="-10%" y="-35%" width="120%" height="170%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#22466e" floodOpacity="0.12" />
          </filter>
        </defs>

        <path
          className="process-route-base"
          d="M70 198 C150 62 235 62 315 198 S480 334 560 198 S725 62 805 198 S970 334 1130 198"
          filter="url(#processRouteShadow)"
        />

        <path
          id="process-road-path-desktop"
          className="process-route-active"
          d="M70 198 C150 62 235 62 315 198 S480 334 560 198 S725 62 805 198 S970 334 1130 198"
        />

        <circle className="process-route-dot" r="8">
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath href="#process-road-path-desktop" />
          </animateMotion>
        </circle>
      </svg>

      <svg
        className="process-route-svg process-route-svg-mobile"
        viewBox="0 0 120 950"
        preserveAspectRatio="none"
      >
        <path
          className="process-route-base"
          d="M60 20 C22 120 98 210 60 310 C22 410 98 500 60 600 C22 700 98 790 60 930"
        />

        <path
          id="process-road-path-mobile"
          className="process-route-active"
          d="M60 20 C22 120 98 210 60 310 C22 410 98 500 60 600 C22 700 98 790 60 930"
        />

        <circle className="process-route-dot" r="7">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath href="#process-road-path-mobile" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

function ProcessCard({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="process-flow-item relative flex min-h-full flex-col items-center text-center"
    >
      <article
        className="process-flow-card"
        style={{
          "--process-accent": item.accent,
          "--process-soft": item.accentSoft,
        }}
      >
        <div className="process-flow-circle">
          <div>
           
            <h3 className="process-flow-problem">{item.problem}</h3>
          </div>
        </div>

        <div className="process-flow-copy">
          <div>
           
            <p className="process-flow-service">{item.service}</p>
          </div>

          <div className="process-flow-divider" />

          <div>
           
            <p className="process-flow-outcome">{item.outcome}</p>
          </div>
        </div>
      </article>

      {!isLast ? (
        <div className="process-flow-arrow" aria-hidden="true">
          <ArrowRight className="h-5 w-5" />
        </div>
      ) : null}
    </motion.div>
  );
}

export default function ProcessTimelineSection() {
  return (
    <section id="proceso" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Proceso</SectionEyebrow>

          <h2 className="compi-hand-title mt-4 text-4xl font-normal leading-[0.95] text-[var(--compi-deep-green)] md:text-6xl">
            ¿Qué resolvemos en tu negocio?
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--compi-blue)]/90 md:text-lg">
            Ordenamos los problemas más comunes de una marca y los convertimos
            en acciones concretas para que tu marketing trabaje con foco,
            presencia y resultados.
          </p>
        </div>

        <div className="process-route-stage mt-16">
          <ProcessRouteLine />

          <div className="process-flow-grid relative z-10 grid gap-9 lg:grid-cols-3 xl:grid-cols-6 xl:gap-10">
            {processItems.map((item, index) => (
              <ProcessCard
                key={`${item.problem}-${index}`}
                item={item}
                index={index}
                isLast={index === processItems.length - 1}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="compi-sky-panel mx-auto mt-14 max-w-4xl rounded-[2.5rem] px-7 py-8 text-center md:px-10 md:py-10"
        >
         
          <p className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[var(--compi-deep-green)] md:text-4xl">
            👉 Marketing digital que atrae clientes y genera resultados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
