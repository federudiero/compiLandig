import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  ExternalLink,
  LayoutDashboard,
  MessageCircle,
  PackageSearch,
  Workflow,
} from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./ui";

const webServices = [
  "Landing pages",
  "Catálogos y ecommerce",
  "Sistemas internos",
  "Automatizaciones",
  "Diseño responsive",
  "Escalabilidad",
];

const projects = [
  {
    title: "Ebook Mindset",
    tag: "Producto digital",
    text: "Landing simple y directa para presentar un ebook, explicar su propuesta de valor y guiar al usuario hacia la compra.",
    images: ["/images/portfolio/ebook.png"],
    links: [
      {
        label: "Ver ebook",
        url: "https://ebook-mentalidad-qaq4.vercel.app/",
      },
    ],
    icon: BookOpen,
  },
  {
    title: "CRM Hogar Cril",
    tag: "CRM + gestión comercial",
    text: "CRM comercial para ordenar conversaciones, clientes, seguimiento de oportunidades y trabajo interno del equipo.",
    images: ["/images/portfolio/crm-comercial.png"],
    links: [
      {
        label: "Ver CRM",
        url: "https://crmhogarcril.com/",
      },
    ],
    icon: MessageCircle,
  },
  {
    title: "Sistema Estilos Pinturas",
    tag: "Sistema operativo",
    text: "Sistema para gestionar pedidos, roles, administración y hoja de ruta dentro de una operación real de ventas y repartos.",
    images: [
      "/images/portfolio/acceso-roles.png",
      "/images/portfolio/hoja-ruta.png",
    ],
    links: [
      {
        label: "Ver web",
        url: "https://estilospinturaspedidos.com/",
      },
      {
        label: "Ver sistema",
        url: "https://estilospinturaspedidos.com/home",
      },
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Sistema Corralón",
    tag: "Sistema web",
    text: "Sistema web a medida para gestión operativa y procesos internos.",
    images: [],
    techs: ["JavaScript", "CSS", "HTML"],
    links: [
      {
        label: "Ver demo",
        url: "https://sistemacorralon.vercel.app",
      },
      {
        label: "Ver repo",
        url: "https://github.com/federudiero/sistemacorralon",
      },
    ],
    icon: Workflow,
  },
  {
    title: "Ecommerce Limpieza",
    tag: "Catálogo ecommerce",
    text: "Catálogo/ecommerce personalizado para productos de limpieza.",
    images: [],
    techs: ["JavaScript", "CSS", "HTML"],
    links: [
      {
        label: "Ver repo",
        url: "https://github.com/federudiero/ecomerceLimpieza",
      },
    ],
    icon: PackageSearch,
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const ecosystemMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function ProjectVisual({ project, compact = false }) {
  const Icon = project.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.35rem] border border-[rgba(139,193,221,0.42)] bg-[var(--compi-paper-strong)] ${
        compact ? "h-28" : "h-40 md:h-48"
      }`}
    >
      {project.images.length > 0 ? (
        <div className="grid h-full gap-2 p-2">
          {project.images.slice(0, 2).map((image) => (
            <img
              key={image}
              src={image}
              alt={project.title}
              loading="lazy"
              className="h-full min-h-0 w-full rounded-[1rem] object-cover object-top shadow-[0_12px_30px_rgba(34,70,110,0.1)] transition duration-500 group-hover:scale-[1.03]"
            />
          ))}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center p-4">
          <div className="w-full max-w-[13rem] overflow-hidden rounded-[1.25rem] border border-[rgba(34,70,110,0.12)] bg-white shadow-[0_16px_44px_rgba(34,70,110,0.1)]">
            <div className="flex items-center gap-1.5 border-b border-[rgba(34,70,110,0.08)] bg-[var(--compi-paper)] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--compi-orange)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--compi-sky)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--compi-mint)]" />
            </div>
            <div className="p-4">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-[var(--compi-deep-green)] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <span className="block h-2.5 rounded-full bg-[var(--compi-deep-green)]/75" />
                <span className="block h-2.5 w-9/12 rounded-full bg-[var(--compi-blue)]/18" />
                <span className="block h-2.5 w-7/12 rounded-full bg-[var(--compi-sky)]/70" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-2xl border border-white/70 bg-white/88 text-[var(--compi-deep-green)] shadow-[0_12px_30px_rgba(34,70,110,0.12)] backdrop-blur">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}

function ProjectNode({ project, index, featured = false }) {
  return (
    <motion.article
      variants={cardMotion}
      whileHover={{ y: -7, scale: featured ? 1.01 : 1.015 }}
      animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
      transition={{
        y: {
          duration: 6.4 + index * 0.45,
          repeat: Infinity,
          ease: "easeInOut",
        },
        default: { duration: 0.24, ease: "easeOut" },
      }}
      className={`group relative overflow-hidden rounded-[2rem] border border-[rgba(139,193,221,0.66)] bg-white/88 p-4 shadow-[0_22px_66px_rgba(34,70,110,0.1)] backdrop-blur ${
        featured ? "lg:p-5" : "lg:p-4"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.48) 46%, transparent 78%)",
        }}
      />

      <div className="relative z-10">
        <ProjectVisual project={project} compact={!featured} />

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-[rgba(139,193,221,0.5)] bg-[var(--compi-paper)] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--compi-blue)]">
            {project.tag}
          </span>
          {project.techs?.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--compi-mint)]/55 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--compi-deep-green)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3
          className={`mt-4 font-black leading-tight tracking-[-0.035em] text-[var(--compi-deep-green)] ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/84">
          {project.text}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--compi-deep-green)] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[var(--compi-blue)]"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function EcosystemHub() {
  return (
    <motion.div
      variants={cardMotion}
      whileHover={{ y: -5, rotate: -0.15 }}
      className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(34,70,110,0.12)] bg-white shadow-[0_30px_90px_rgba(34,70,110,0.15)]"
    >
      <div className="flex items-center justify-between border-b border-[rgba(34,70,110,0.1)] bg-[var(--compi-paper-strong)] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[var(--compi-orange)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--compi-sky)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--compi-mint)]" />
        </div>
        <span className="hidden h-3 w-36 rounded-full bg-[var(--compi-blue)]/12 sm:block" />
      </div>

      <div className="grid gap-5 p-5 md:grid-cols-[1fr_0.85fr] md:p-6">
        <div className="rounded-[1.65rem] bg-[var(--compi-deep-green)] p-5 text-white">
          <span className="inline-flex rounded-full bg-white/12 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--compi-mint)]">
            Laboratorio web
          </span>
          <div className="mt-12 space-y-3">
            <span className="block h-4 w-11/12 rounded-full bg-white/90" />
            <span className="block h-4 w-8/12 rounded-full bg-white/65" />
            <span className="block h-4 w-6/12 rounded-full bg-white/42" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2">
            <motion.span
              className="h-16 rounded-2xl bg-white/14"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4.8, repeat: Infinity }}
            />
            <motion.span
              className="h-16 rounded-2xl bg-[var(--compi-orange)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="h-16 rounded-2xl bg-white/14"
              animate={{ opacity: [0.75, 0.42, 0.75] }}
              transition={{ duration: 5.1, repeat: Infinity }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["Catálogo", "74%"],
            ["CRM", "58%"],
            ["Automatización", "86%"],
          ].map(([label, width], index) => (
            <motion.div
              key={label}
              className="rounded-[1.35rem] border border-[rgba(139,193,221,0.45)] bg-[var(--compi-paper)] p-4"
              animate={{ x: [0, index % 2 === 0 ? 5 : -5, 0] }}
              transition={{
                duration: 5.4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-[var(--compi-deep-green)]">
                  {label}
                </span>
                <Code2 className="h-4 w-4 text-[var(--compi-orange)]" />
              </div>
              <div className="mt-3 h-2 rounded-full bg-[var(--compi-blue)]/12">
                <motion.span
                  className="block h-full rounded-full bg-[var(--compi-orange)]"
                  initial={{ width: "32%" }}
                  whileInView={{ width }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DigitalEcosystem() {
  const [featuredProject, secondaryA, secondaryB, compactA, compactB] = projects;

  return (
    <motion.div
      variants={ecosystemMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="relative mt-16 overflow-hidden rounded-[2.5rem] border border-[rgba(139,193,221,0.45)] bg-white/42 p-4 shadow-[0_26px_88px_rgba(34,70,110,0.08)] backdrop-blur md:p-6 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <span className="absolute left-[22%] top-[28%] h-px w-[18%] bg-[linear-gradient(90deg,transparent,rgba(34,70,110,0.24),transparent)]" />
        <span className="absolute right-[23%] top-[28%] h-px w-[18%] bg-[linear-gradient(90deg,transparent,rgba(34,70,110,0.24),transparent)]" />
        <span className="absolute bottom-[27%] left-[18%] h-px w-[22%] bg-[linear-gradient(90deg,transparent,rgba(139,193,221,0.58),transparent)]" />
        <span className="absolute bottom-[27%] right-[18%] h-px w-[22%] bg-[linear-gradient(90deg,transparent,rgba(139,193,221,0.58),transparent)]" />
      </div>

      <div className="relative z-10 grid gap-5 lg:grid-cols-[0.78fr_1.18fr_0.78fr] lg:items-center">
        <div className="order-2 grid gap-5 lg:order-none lg:pt-14">
          <ProjectNode project={secondaryA} index={1} />
          <ProjectNode project={compactA} index={3} />
        </div>

        <div className="order-1 grid gap-5 lg:order-none">
          <EcosystemHub />
          <ProjectNode project={featuredProject} index={0} featured />
        </div>

        <div className="order-3 grid gap-5 lg:order-none lg:pb-14">
          <ProjectNode project={secondaryB} index={2} featured />
          <ProjectNode project={compactB} index={4} />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-6 py-24 lg:px-10"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionEyebrow>DESARROLLO WEB</SectionEyebrow>

          <SectionHeading
            title="Webs y sistemas que hacen que tu marca funcione mejor."
            text="Creamos sitios, catálogos y herramientas digitales para vender, ordenar procesos y acompañar el crecimiento."
          />

          <div className="mt-7 flex flex-wrap gap-3">
            {webServices.map((service, index) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="brand-chip border border-[rgba(139,193,221,0.42)] bg-white/80 text-[var(--compi-deep-green)]"
              >
                {service}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#contacto"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--compi-deep-green)] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_46px_rgba(0,69,56,0.16)] transition hover:bg-[var(--compi-blue)]"
          >
            Desarrollar con COMPI
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        <DigitalEcosystem />
      </div>
    </section>
  );
}
