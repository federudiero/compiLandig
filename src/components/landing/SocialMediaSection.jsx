import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionEyebrow } from "./ui";

const socialItems = [
  {
    name: "Instagram",
    handle: "@teamcompi",
    description: "Contenido, identidad visual, proyectos y mirada creativa de COMPI.",
    accent: "var(--compi-orange)",
    icon: InstagramLogo,
    url: "",
  },
  {
    name: "TikTok",
    handle: "@teamcompi",
    description: "Ideas rápidas, procesos, tips y piezas pensadas para marcas en crecimiento.",
    accent: "var(--compi-deep-green)",
    icon: TikTokLogo,
    url: "",
  },
  {
    name: "Facebook",
    handle: "COMPI Agencia de Marketing",
    description: "Presencia institucional, novedades, servicios y contacto comercial.",
    accent: "var(--compi-blue)",
    icon: FacebookLogo,
    url: "",
  },
];

function InstagramLogo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="none">
      <rect x="5" y="5" width="22" height="22" rx="7" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="16" cy="16" r="5.2" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="22.6" cy="9.7" r="1.7" fill="currentColor" />
    </svg>
  );
}

function TikTokLogo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.7 4.8c.4 3 2.1 4.9 5.1 5.2v4.1a9.2 9.2 0 0 1-5-1.5v7.9c0 4-2.6 6.7-6.7 6.7-3.7 0-6.5-2.5-6.5-6.1 0-3.8 3-6.5 7.2-6.1v4.2c-1.8-.3-3 .5-3 1.9 0 1.2.9 2 2.3 2 1.5 0 2.4-.9 2.4-2.6V4.8h4.2Z" />
    </svg>
  );
}

function FacebookLogo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.3 28V17.4h3.6l.6-4.1h-4.2v-2.6c0-1.2.4-2 2.1-2h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 2-5.4 5.5v2.9h-3.6v4.1H14V28h4.3Z" />
    </svg>
  );
}

function SocialCard({ item, index }) {
  const Icon = item.icon;
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative h-full overflow-hidden rounded-[2rem] border border-[rgba(139,193,221,0.55)] bg-white/78 p-7 shadow-[0_22px_68px_rgba(34,70,110,0.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(34,70,110,0.13)]"
      style={{ "--social-accent": item.accent }}
    >
      <div aria-hidden className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--social-accent)] opacity-10 blur-2xl transition group-hover:opacity-18" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-[1.45rem] bg-[var(--social-accent)] text-white shadow-[0_18px_45px_rgba(34,70,110,0.15)]">
            <Icon className="h-8 w-8" />
          </div>

          {item.url ? (
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(34,70,110,0.1)] bg-white/80 text-[var(--compi-deep-green)] transition group-hover:bg-[var(--compi-deep-green)] group-hover:text-white">
              <ExternalLink className="h-4 w-4" />
            </span>
          ) : null}
        </div>

        <div className="mt-7">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--compi-blue-soft)]">
            {item.name}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--compi-deep-green)]">
            {item.handle}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--compi-blue)]/82">
            {item.description}
          </p>
        </div>

        <div className="mt-7 h-1.5 w-16 rounded-full bg-[var(--social-accent)]" />
      </div>
    </motion.div>
  );

  if (!item.url) return card;

  return (
    <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${item.name} de COMPI`}>
      {card}
    </a>
  );
}

export default function SocialMediaSection() {
  return (
    <section id="redes" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div aria-hidden className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[var(--compi-orange)]/12 blur-3xl" />
      <div aria-hidden className="absolute bottom-12 right-[-8rem] h-80 w-80 rounded-full bg-[var(--compi-sky)]/24 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Redes sociales</SectionEyebrow>
          <h2 className="compi-hand-title mt-4 text-4xl font-normal leading-[0.95] text-[var(--compi-deep-green)] md:text-6xl">
            Seguinos en nuestras redes
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--compi-blue)]/90 md:text-lg">
            También podés conocer nuestro trabajo, ideas y procesos desde los canales sociales de COMPI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {socialItems.map((item, index) => (
            <SocialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
