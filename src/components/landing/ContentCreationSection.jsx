import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Film,
  Lightbulb,
  Megaphone,
  PenLine,
  Scissors,
  Sparkles,
  Video,
} from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./ui";

const symbolImages = [
  "/media/decor/illustrations/camera.png",
  "/media/decor/illustrations/megaphone.png",
  "/media/decor/illustrations/notebook.png",
  "/media/decor/illustrations/pencil.png",
  "/media/decor/illustrations/stars.png",
];

const processSteps = [
  { title: "Idea", icon: Lightbulb },
  { title: "Guion", icon: PenLine },
  { title: "Producción", icon: Clapperboard },
  { title: "Edición", icon: Scissors },
  { title: "Publicación", icon: Megaphone },
];

const areas = [
  {
    title: "Concepto",
    text: "Buscamos la idea que ordena el contenido y le da personalidad.",
    icon: Lightbulb,
  },
  {
    title: "Dirección",
    text: "Pensamos escenas, estética, ritmo y formas de mostrar la marca.",
    icon: Clapperboard,
  },
  {
    title: "Producción",
    text: "Creamos fotos, videos, reels, historias y piezas listas para publicar.",
    icon: Camera,
  },
];

const services = [
  {
    title: "Pensamos conceptos creativos",
    text: "Buscamos ideas, escenas y formas de contar que tengan sentido para la marca.",
    icon: Sparkles,
  },
  {
    title: "Armamos guiones",
    text: "Ordenamos las ideas para reels, historias, videos institucionales, campañas o contenido comercial.",
    icon: PenLine,
  },
  {
    title: "Dirigimos la producción",
    text: "Definimos qué se muestra, quién aparece, cómo se graba y qué necesita cada escena.",
    icon: Clapperboard,
  },
  {
    title: "Creamos material audiovisual",
    text: "Producimos fotos, videos y recursos para redes con cámara profesional, celular de alta gama, estudio fotográfico y herramientas de producción según lo que cada marca necesite.",
    icon: Video,
  },
  {
    title: "Editamos piezas finales",
    text: "Trabajamos cortes, ritmo, subtítulos, textos, música, voz en off y formato.",
    icon: Scissors,
  },
  {
    title: "Adaptamos el contenido",
    text: "Preparamos versiones para reels, historias, anuncios, feed, web o presentaciones.",
    icon: Megaphone,
  },
];

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function FloatingContentSymbols() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {symbolImages.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          draggable="false"
          className={`absolute hidden h-auto select-none object-contain opacity-[0.14] mix-blend-multiply drop-shadow-[0_16px_22px_rgba(34,70,110,0.12)] md:block ${
            index === 0
              ? "left-[5%] top-[12%] w-20"
              : index === 1
                ? "right-[6%] top-[8%] w-24"
                : index === 2
                  ? "left-[2%] bottom-[18%] w-24"
                  : index === 3
                    ? "right-[9%] bottom-[13%] w-20"
                    : "left-[48%] top-[3%] w-16"
          }`}
          animate={{
            y: [0, index % 2 === 0 ? -14 : 14, 0],
            rotate: [
              index % 2 === 0 ? -7 : 6,
              index % 2 === 0 ? 5 : -5,
              index % 2 === 0 ? -7 : 6,
            ],
          }}
          transition={{
            duration: 7 + index * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ContentStoryboard() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative min-h-[30rem] overflow-hidden rounded-[2.35rem] border border-[rgba(139,193,221,0.66)] bg-white/82 p-5 shadow-[0_28px_86px_rgba(34,70,110,0.12)] backdrop-blur md:p-6"
    >
      <motion.div
        className="absolute right-6 top-6 z-20 hidden rounded-[1.3rem] border border-white/75 bg-white/84 px-4 py-3 shadow-[0_18px_48px_rgba(34,70,110,0.12)] md:block"
        animate={{ y: [0, -10, 0], rotate: [-1.2, 1.1, -1.2] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--compi-orange)] text-white">
            <Film className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-[var(--compi-blue)]/70">
              Set creativo
            </p>
            <p className="text-sm font-black text-[var(--compi-deep-green)]">
              Reel + historias
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 grid min-h-[27rem] gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <motion.div
          className="mx-auto w-full max-w-[16rem] rounded-[2rem] border-[10px] border-[var(--compi-deep-green)] bg-[var(--compi-deep-green)] shadow-[0_30px_80px_rgba(0,69,56,0.22)]"
          animate={{ y: [0, -8, 0], rotate: [-0.6, 0.5, -0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="overflow-hidden rounded-[1.35rem] bg-[var(--compi-paper)]">
            <div className="relative h-[23rem] bg-[linear-gradient(160deg,var(--compi-sky),var(--compi-mint)_56%,rgba(235,88,64,0.72))] p-4">
              <motion.img
                src="/media/decor/illustrations/camera.png"
                alt=""
                draggable="false"
                className="absolute right-4 top-8 w-20 opacity-30 mix-blend-multiply"
                animate={{ rotate: [-6, 7, -6], y: [0, 8, 0] }}
                transition={{
                  duration: 5.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-white/72 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--compi-deep-green)]">
                    Grabando
                  </span>

                  <div className="mt-16 space-y-3">
                    <span className="block h-4 w-10/12 rounded-full bg-white/90" />
                    <span className="block h-4 w-8/12 rounded-full bg-white/70" />
                    <span className="block h-4 w-6/12 rounded-full bg-white/50" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="h-16 rounded-2xl bg-white/42" />
                  <span className="h-16 rounded-2xl bg-white/68" />
                  <span className="h-16 rounded-2xl bg-white/42" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.52,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -7, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
                className={`group min-h-[8.6rem] rounded-[1.65rem] border border-[rgba(139,193,221,0.52)] p-5 shadow-[0_18px_50px_rgba(34,70,110,0.08)] ${
                  index === 0
                    ? "bg-[var(--compi-orange)] text-white"
                    : index === 2
                      ? "bg-[var(--compi-deep-green)] text-white"
                      : "bg-white/88 text-[var(--compi-deep-green)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.22em] opacity-70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl transition duration-300 group-hover:scale-110 ${
                      index === 0 || index === 2
                        ? "bg-white/18 text-white"
                        : "bg-[var(--compi-mint)] text-[var(--compi-deep-green)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-8 text-xl font-black leading-tight">
                  {step.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContentCreationSection() {
  return (
    <section
      id="creacion-contenido"
      className="content-creation-section relative overflow-hidden px-6 py-24 lg:px-10"
    >
      <FloatingContentSymbols />

      <motion.div
        className="relative mx-auto max-w-7xl"
        variants={containerMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-center">
          <motion.div variants={fadeUp}>
            <SectionEyebrow>CREACIÓN DE CONTENIDO</SectionEyebrow>

            <SectionHeading
              title="Cada marca tiene un mundo. Nosotros lo convertimos en contenido audiovisual."
              text="Ideas, escenas, conceptos y formas de mostrar lo que hace tu marca para que el contenido tenga identidad propia."
            />

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5, rotate: -0.25 }}
              className="mt-8 overflow-hidden rounded-[2rem] border border-[rgba(139,193,221,0.64)] bg-white/82 p-5 shadow-[0_22px_64px_rgba(34,70,110,0.1)]"
            >
              <div className="flex gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.25rem] bg-[var(--compi-sky)]/55 text-[var(--compi-deep-green)]">
                  <Megaphone className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--compi-blue-soft)]">
                    Diferencial
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-[var(--compi-deep-green)] md:text-3xl">
                    Nos involucramos en el mundo de la marca antes de pensar en
                    cualquier contenido.
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <ContentStoryboard />
        </div>

        <motion.div
          variants={containerMotion}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {areas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, rotate: index === 1 ? 0.35 : -0.35 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="group compi-brand-card min-h-[13rem] rounded-[1.9rem] p-6"
              >
                <div
                  className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_16px_36px_rgba(34,70,110,0.12)] transition duration-300 group-hover:scale-110 ${
                    index === 0
                      ? "bg-[var(--compi-orange)]"
                      : index === 1
                        ? "bg-[var(--compi-deep-green)]"
                        : "bg-[var(--compi-blue)]"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black text-[var(--compi-deep-green)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/82">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionEyebrow>Qué hacemos</SectionEyebrow>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] text-[var(--compi-deep-green)] md:text-5xl">
                De una idea suelta a piezas listas para publicar.
              </h3>
            </div>

            <div className="hidden items-center gap-3 rounded-[1.4rem] border border-[rgba(139,193,221,0.52)] bg-white/72 px-4 py-3 shadow-[0_16px_44px_rgba(34,70,110,0.08)] md:flex">
              <Film className="h-5 w-5 text-[var(--compi-orange)]" />
              <span className="text-sm font-black text-[var(--compi-deep-green)]">
                reels · historias · feed · anuncios
              </span>
            </div>
          </div>

          <motion.div
            variants={containerMotion}
            className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -7, rotate: index % 2 === 0 ? 0.35 : -0.35 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="group compi-brand-card relative min-h-[12.5rem] rounded-[1.65rem] p-6"
                >
                  <span className="absolute right-5 top-4 font-[var(--font-display)] text-5xl font-black leading-none text-[var(--compi-blue)]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--compi-mint)] text-[var(--compi-deep-green)] transition duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="h-2 w-16 rounded-full bg-[var(--compi-orange)]/55 transition duration-300 group-hover:w-24" />
                    </div>

                    <h4 className="max-w-[15rem] text-lg font-black leading-tight text-[var(--compi-deep-green)]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/82 md:max-h-0 md:translate-y-2 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-[var(--compi-deep-green)] p-7 text-white shadow-[0_26px_80px_rgba(0,69,56,0.18)] md:flex-row md:items-center"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--compi-mint)]">
              Contenido para marcas
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-black leading-tight tracking-[-0.04em] md:text-3xl">
              Hagamos que tu marca tenga una forma propia de mostrarse.
            </h3>
          </div>

          <motion.a
            href="#contacto"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="compi-btn-light shrink-0"
          >
            Crear con COMPI
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
