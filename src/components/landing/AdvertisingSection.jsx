import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  Megaphone,
  SlidersHorizontal,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { SectionEyebrow } from "./ui";

const strategyCards = [
  {
    icon: Target,
    title: "Enfoque",
    text: "Objetivos claros, medibles y alineados a tu negocio.",
  },
  {
    icon: SlidersHorizontal,
    title: "Estrategia",
    text: "Segmentación precisa y mensajes que conectan.",
  },
  {
    icon: BarChart3,
    title: "Resultados",
    text: "Optimización continua para mejorar lo que importa.",
  },
];

const adActions = [
  {
    icon: Target,
    title: "Definimos objetivos concretos",
    text: "Alineamos la pauta con tus metas reales de negocio.",
  },
  {
    icon: UsersRound,
    title: "Segmentamos con precisión",
    text: "Llegamos a las personas correctas, no a cualquiera.",
  },
  {
    icon: Megaphone,
    title: "Gestionamos Meta Ads y Google Ads",
    text: "Creamos, configuramos y optimizamos campañas.",
  },
  {
    icon: TrendingUp,
    title: "Optimizamos de forma continua",
    text: "Analizamos datos y ajustamos para mejorar resultados.",
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function AdvertisingSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="pauta" className="advertising-dynamic-section compi-dynamic-section relative overflow-hidden px-6 py-20 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[var(--compi-sky)]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-4 right-[-7rem] h-72 w-72 rounded-full bg-[var(--compi-orange)]/15 blur-3xl"
      />
      <div aria-hidden="true" className="dynamic-ribbon dynamic-ribbon-a" />
      <div aria-hidden="true" className="dynamic-ribbon dynamic-ribbon-b" />
      <div aria-hidden="true" className="dynamic-dot-grid" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-7 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <motion.article
            variants={cardMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, rotate: -0.35 }}
            className="advertising-hero-card dynamic-tilt-card compi-sky-panel relative overflow-hidden rounded-[2.25rem] p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-white/35 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[-5rem] left-[-4rem] h-64 w-64 rounded-full bg-[var(--compi-mint)]/45 blur-2xl"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <SectionEyebrow>Pauta publicitaria</SectionEyebrow>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/55 text-[var(--compi-deep-green)] ring-1 ring-[rgba(0,69,56,0.12)] backdrop-blur">
                  <Megaphone className="h-5 w-5" />
                </div>
              </div>

              <h2 className="mt-6 max-w-xl font-[var(--font-display)] text-[2.4rem] leading-[0.96] tracking-[-0.04em] text-[var(--compi-deep-green)] sm:text-5xl lg:text-[3.55rem] xl:text-[3.85rem]">
                Tu marca no necesita más presupuesto. Necesita mejor estrategia.
              </h2>

              <p className="compi-sky-panel-muted mt-5 max-w-xl text-sm leading-7 md:text-[0.95rem] md:leading-7">
                Campañas en Meta y Google Ads diseñadas para que cada peso
                invertido trabaje con un objetivo claro: resultados reales para
                tu negocio.
              </p>

              <div className="mt-6 rounded-[1.6rem] border border-[rgba(0,69,56,0.12)] bg-white/48 p-4 shadow-[0_18px_50px_rgba(34,70,110,0.08)] backdrop-blur-md md:p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--compi-deep-green)] text-white">
                    <LineChart className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--compi-deep-green)]/65">
                      Diferencial
                    </p>
                    <p className="mt-2 text-base font-extrabold leading-snug text-[var(--compi-deep-green)] md:text-lg">
                      Tomamos decisiones en base a datos. No a intuición.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.025, rotate: 0.45 }}
                transition={{ duration: 0.3 }}
                className="ad-creative-frame mt-6 overflow-hidden rounded-[1.8rem] border border-white/45 bg-white/30 shadow-[0_22px_60px_rgba(34,70,110,0.14)] ring-1 ring-[rgba(139,193,221,0.62)]"
              >
                <img
                  src="/pauta-creativo.jpg"
                  alt="Producción creativa de COMPI para campañas publicitarias"
                  className="ad-creative-image h-56 w-full object-cover object-[center_42%] sm:h-72 xl:h-[18.5rem]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              variants={cardMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, rotate: 0.25 }}
              className="campaign-story-card dynamic-tilt-card compi-brand-card rounded-[2.25rem] p-6 md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--compi-blue-soft)]">
                Estrategia de campañas
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--compi-deep-green)] md:text-3xl xl:text-[2.15rem]">
                No gestionamos campañas. Construimos el camino que lleva a tu
                cliente desde que te descubre hasta que te elige.
              </p>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--compi-blue)]/90 md:text-base">
                Combinamos plataformas, datos y creatividad para que la inversión
                se convierta en crecimiento: más leads, más ventas, más
                resultados.
              </p>
            </motion.article>

            <div className="grid gap-4 md:grid-cols-3">
              {strategyCards.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeCard === index;

                return (
                  <motion.article
                    key={item.title}
                    variants={cardMotion}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.58,
                      delay: 0.08 + index * 0.05,
                    }}
                    whileHover={{ y: -7, rotate: index % 2 === 0 ? -0.55 : 0.55 }}
                    onClick={() =>
                      setActiveCard((current) =>
                        current === index ? null : index
                      )
                    }
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    className="ad-strategy-mini-card group relative min-h-[10.8rem] cursor-pointer overflow-hidden rounded-[1.8rem] border border-[rgba(139,193,221,0.95)] bg-white/82 p-5 shadow-[0_18px_52px_rgba(34,70,110,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(34,70,110,0.14)]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-24 translate-y-8 bg-[linear-gradient(180deg,rgba(139,193,221,0),rgba(191,224,211,0.34))] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[rgba(139,193,221,0.24)] text-[var(--compi-deep-green)] shadow-[0_16px_36px_rgba(34,70,110,0.08)] transition duration-300 group-hover:scale-95">
                          <Icon className="h-7 w-7" />
                        </div>

                        <p className="mt-5 text-lg font-extrabold text-[var(--compi-deep-green)]">
                          {item.title}
                        </p>
                      </div>

                      <p
                        className={`mt-4 text-sm leading-6 text-[var(--compi-blue)]/90 transition-all duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
                          isActive
                            ? "max-h-28 translate-y-0 opacity-100"
                            : "max-h-0 overflow-hidden opacity-0 md:max-h-28"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.article
              variants={cardMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.64, delay: 0.08 }}
              whileHover={{ y: -5 }}
              className="campaign-actions-card compi-brand-card rounded-[2.25rem] p-6 md:p-8"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--compi-blue-soft)]">
                    Qué hacemos
                  </p>

                  <h3 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--compi-deep-green)] md:text-3xl">
                    Convertimos tu inversión en una estrategia medible.
                  </h3>
                </div>

                <a
                  href="#contacto-form"
                  className="compi-btn-primary w-full shrink-0 lg:w-auto"
                >
                  Enviar consulta
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {adActions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ x: 5, scale: 1.015 }}
                      className="ad-action-row rounded-[1.6rem] border border-[rgba(139,193,221,0.42)] bg-white/55 p-4"
                    >
                      <div className="flex gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--compi-paper-strong)] text-[var(--compi-deep-green)] ring-1 ring-[rgba(0,69,56,0.06)]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-extrabold leading-snug text-[var(--compi-deep-green)] md:text-base">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-6 text-[var(--compi-blue)]/75 md:text-sm">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}