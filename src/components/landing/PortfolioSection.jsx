import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./ui";

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
];

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

function ProjectImage({ project }) {
  if (project.images.length === 1) {
    return (
      <img
        src={project.images[0]}
        alt={project.title}
        loading="lazy"
        className="h-[17rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] md:h-[20rem]"
      />
    );
  }

  return (
    <div className="grid h-[17rem] grid-cols-2 gap-3 p-3 md:h-[20rem]">
      {project.images.map((image, index) => (
        <div
          key={image}
          className="overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/70"
        >
          <img
            src={image}
            alt={`${project.title} ${index + 1}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-6 py-24 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-7rem] top-24 h-80 w-80 rounded-full bg-[var(--compi-sky)]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[-8rem] h-72 w-72 rounded-full bg-[var(--compi-mint)]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionEyebrow>Proyectos</SectionEyebrow>

            <SectionHeading
              title="Proyectos digitales pensados para comunicar, vender y ordenar procesos."
              text="Mostramos trabajos reales: productos digitales, CRM y sistemas internos desarrollados para resolver necesidades concretas de cada marca o negocio."
            />
          </div>

          <a
            href="#contacto"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(139,193,221,0.7)] bg-white/70 px-5 py-3 text-sm font-bold text-[var(--compi-deep-green)] shadow-[0_16px_45px_rgba(34,70,110,0.08)] transition hover:-translate-y-0.5 hover:bg-[var(--compi-deep-green)] hover:text-white"
          >
            Quiero mi proyecto
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="compi-brand-card group flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_78px_rgba(34,70,110,0.14)]"
              >
                <div className="relative overflow-hidden border-b border-[rgba(139,193,221,0.38)] bg-[var(--compi-paper-strong)]">
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--compi-deep-green)] shadow-[0_14px_35px_rgba(34,70,110,0.12)] backdrop-blur">
                    <Icon className="h-4 w-4" />
                    {project.tag}
                  </div>

                  <ProjectImage project={project} />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--compi-deep-green)]">
                        {project.title}
                      </h3>

                      <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[rgba(139,193,221,0.24)] text-[var(--compi-deep-green)] md:grid">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[var(--compi-blue)]/85">
                      {project.text}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--compi-deep-green)] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}