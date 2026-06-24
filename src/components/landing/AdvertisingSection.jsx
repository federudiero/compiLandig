import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  FileText,
  LineChart,
  Megaphone,
  MousePointerClick,
  SlidersHorizontal,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./ui";

const campaignMetrics = [
  { label: "Alcance", value: "48K", progress: "78%" },
  { label: "Clics", value: "3.2K", progress: "64%" },
  { label: "Leads", value: "186", progress: "52%" },
  { label: "Ventas", value: "+24%", progress: "70%" },
];

const campaignFlow = [
  { title: "Estrategia", icon: Target },
  { title: "Campaña", icon: Megaphone },
  { title: "Medición", icon: LineChart },
  { title: "Optimización", icon: SlidersHorizontal },
];

const adActions = [
  {
    icon: Target,
    title: "Objetivos claros",
    text: "Definimos qué necesita lograr la campaña antes de invertir.",
  },
  {
    icon: UsersRound,
    title: "Audiencia correcta",
    text: "Segmentamos según intereses, ubicación, comportamiento y etapa del cliente.",
  },
  {
    icon: Megaphone,
    title: "Creatividades que comunican",
    text: "Adaptamos piezas, mensajes y formatos para cada campaña.",
  },
  {
    icon: BarChart3,
    title: "Medición constante",
    text: "Leemos métricas, resultados y oportunidades de mejora.",
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    text: "Ajustamos anuncios, públicos y presupuesto para mejorar el rendimiento.",
  },
  {
    icon: FileText,
    title: "Reportes",
    text: "Ordenamos la información para que se entienda qué pasó y qué conviene hacer después.",
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function CampaignDashboard() {
  return (
    <motion.div
      variants={cardMotion}
      className="relative min-h-[33rem] overflow-hidden rounded-[2.35rem] border border-[rgba(139,193,221,0.7)] bg-white/86 p-5 shadow-[0_30px_92px_rgba(34,70,110,0.13)] backdrop-blur md:p-6"
    >
      <motion.div
        aria-hidden="true"
        className="absolute right-6 top-7 z-20 hidden w-40 rounded-[1.25rem] border border-white/70 bg-white/88 p-3 shadow-[0_18px_52px_rgba(34,70,110,0.12)] md:block"
        animate={{ y: [0, -10, 0], rotate: [-1.2, 1, -1.2] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--compi-orange)] text-white">
            <MousePointerClick className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-[var(--compi-blue)]/70">
              CTR
            </p>
            <p className="text-lg font-black text-[var(--compi-deep-green)]">
              4.8%
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <motion.div
          whileHover={{ y: -6, rotate: -0.3 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-[rgba(34,70,110,0.12)] bg-[var(--compi-deep-green)] text-white shadow-[0_28px_80px_rgba(0,69,56,0.2)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-[0.66rem] font-black uppercase tracking-[0.22em] text-[var(--compi-mint)]">
                Campaña activa
              </p>
              <p className="mt-1 text-lg font-black">Meta + Google Ads</p>
            </div>
            <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-black">
              ON
            </span>
          </div>

          <div className="p-5">
            <motion.div
              className="overflow-hidden rounded-[1.45rem] border border-white/14 bg-white/10"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/pauta-creativo.jpg"
                alt="Creatividad publicitaria para campaña COMPI"
                className="h-48 w-full object-cover object-[center_42%] opacity-95"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-white/58">
                  Anuncio
                </p>
                <div className="mt-3 space-y-2">
                  <span className="block h-3 rounded-full bg-white/90" />
                  <span className="block h-3 w-9/12 rounded-full bg-white/54" />
                  <span className="block h-3 w-7/12 rounded-full bg-[var(--compi-mint)]" />
                </div>
              </div>
            </motion.div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-[1.2rem] bg-white/10 p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/55">
                  Audiencia
                </p>
                <p className="mt-2 text-2xl font-black">12.4K</p>
              </div>
              <div className="rounded-[1.2rem] bg-[var(--compi-orange)] p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/70">
                  Leads
                </p>
                <p className="mt-2 text-2xl font-black">186</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {campaignMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.48, delay: index * 0.05 }}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                className="rounded-[1.55rem] border border-[rgba(139,193,221,0.54)] bg-white/82 p-4 shadow-[0_18px_52px_rgba(34,70,110,0.08)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--compi-blue-soft)]">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-black text-[var(--compi-deep-green)]">
                    {metric.value}
                  </p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--compi-blue)]/10">
                  <motion.span
                    className="block h-full rounded-full bg-[var(--compi-orange)]"
                    initial={{ width: "18%" }}
                    whileInView={{ width: metric.progress }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.75, delay: 0.12 + index * 0.07 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-[1.8rem] border border-[rgba(139,193,221,0.6)] bg-[var(--compi-paper)]/82 p-5 shadow-[0_18px_55px_rgba(34,70,110,0.08)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--compi-blue-soft)]">
                  Rendimiento
                </p>
                <p className="mt-2 text-xl font-black text-[var(--compi-deep-green)]">
                  Lectura diaria de señales
                </p>
              </div>
              <LineChart className="h-6 w-6 text-[var(--compi-orange)]" />
            </div>

            <div className="mt-6 flex h-32 items-end gap-3">
              {[42, 62, 48, 78, 66, 88, 72].map((height, index) => (
                <motion.span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-2xl bg-[var(--compi-sky)]"
                  initial={{ height: "18%" }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AdvertisingSection() {
  return (
    <section
      id="pauta"
      className="advertising-dynamic-section relative overflow-hidden px-6 py-24 lg:px-10"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center"
        >
          <motion.div variants={cardMotion}>
            <SectionEyebrow>PAUTA PUBLICITARIA</SectionEyebrow>

            <SectionHeading
              title="Campañas pensadas para llegar a las personas correctas."
              text="Planificamos, configuramos y optimizamos campañas para que tu marca gane visibilidad, consultas y oportunidades reales."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {campaignFlow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    variants={cardMotion}
                    whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                    className={`flex items-center gap-3 rounded-[1.45rem] border border-[rgba(139,193,221,0.52)] p-4 shadow-[0_16px_45px_rgba(34,70,110,0.07)] ${
                      index === 1
                        ? "bg-[var(--compi-deep-green)] text-white"
                        : "bg-white/78 text-[var(--compi-deep-green)]"
                    }`}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                        index === 1
                          ? "bg-white/14 text-white"
                          : "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.66rem] font-black uppercase tracking-[0.2em] opacity-60">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-black">{step.title}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#contacto"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--compi-deep-green)] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_46px_rgba(0,69,56,0.16)] transition hover:bg-[var(--compi-blue)]"
            >
              Pautar con COMPI
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <CampaignDashboard />
        </motion.div>

        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {adActions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={cardMotion}
                whileHover={{ y: -7, rotate: index % 2 === 0 ? 0.35 : -0.35 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="group compi-brand-card relative min-h-[12rem] rounded-[1.75rem] p-6"
              >
                <span className="absolute right-5 top-4 font-[var(--font-display)] text-5xl font-black leading-none text-[var(--compi-blue)]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(139,193,221,0.24)] text-[var(--compi-deep-green)] transition duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="h-2 w-14 rounded-full bg-[var(--compi-orange)]/55 transition duration-300 group-hover:w-24" />
                  </div>

                  <h3 className="max-w-[15rem] text-xl font-black leading-tight text-[var(--compi-deep-green)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/82 md:max-h-0 md:translate-y-2 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
