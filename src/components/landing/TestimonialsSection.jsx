import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  MessageCircle,
  Quote,
  Star,
} from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./ui";

const socialComments = [
  {
    platform: "Instagram",
    icon: Instagram,
    author: "Cliente COMPI",
    handle: "@marca_cliente",
    text: "Trabajar con COMPI nos ayudó a ordenar la comunicación de la marca y mostrar mejor lo que hacemos.",
    rating: 5,
    url: "#",
  },
  {
    platform: "Redes sociales",
    icon: MessageCircle,
    author: "Emprendimiento local",
    handle: "@emprendimiento",
    text: "Necesitábamos contenido más claro y profesional. El equipo entendió rápido lo que queríamos comunicar.",
    rating: 5,
    url: "#",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    author: "Marca comercial",
    handle: "@marca_comercial",
    text: "Nos acompañaron con estrategia, diseño y pauta. Todo empezó a tener más coherencia y mejores resultados.",
    rating: 5,
    url: "#",
  },
];

const brandLogos = [
  {
    name: "Marca 01",
    logo: "/images/marcas/marca-01.png",
    url: "#",
  },
  {
    name: "Marca 02",
    logo: "/images/marcas/marca-02.png",
    url: "#",
  },
  {
    name: "Marca 03",
    logo: "/images/marcas/marca-03.png",
    url: "#",
  },
  {
    name: "Marca 04",
    logo: "/images/marcas/marca-04.png",
    url: "#",
  },
  {
    name: "Marca 05",
    logo: "/images/marcas/marca-05.png",
    url: "#",
  },
  {
    name: "Marca 06",
    logo: "/images/marcas/marca-06.png",
    url: "#",
  },
];

const duplicatedBrandLogos = [...brandLogos, ...brandLogos];

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function RatingStars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "fill-[var(--compi-deep-green)] text-[var(--compi-deep-green)]"
              : "text-[var(--compi-blue)]/20"
          }`}
        />
      ))}
    </div>
  );
}

function LogoContent({ brand }) {
  const [imageError, setImageError] = useState(false);

  if (!brand.logo || imageError) {
    return (
      <span className="px-3 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--compi-deep-green)]/70">
        {brand.name}
      </span>
    );
  }

  return (
    <img
      src={brand.logo}
      alt={brand.name}
      loading="lazy"
      onError={() => setImageError(true)}
      className="max-h-14 max-w-[8.5rem] object-contain opacity-75 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
    />
  );
}

function BrandLogoCard({ brand }) {
  const hasUrl = brand.url && brand.url !== "#";

  return (
    <a
      href={hasUrl ? brand.url : "#"}
      target={hasUrl ? "_blank" : undefined}
      rel={hasUrl ? "noreferrer" : undefined}
      onClick={(event) => {
        if (!hasUrl) event.preventDefault();
      }}
      aria-label={`Ver marca ${brand.name}`}
      className="group/logo flex h-[6.25rem] w-[10.5rem] shrink-0 items-center justify-center rounded-[1.7rem] border border-[rgba(139,193,221,0.55)] bg-white/74 p-5 shadow-[0_16px_45px_rgba(34,70,110,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_rgba(34,70,110,0.12)] md:w-[12rem]"
    >
      <LogoContent brand={brand} />
    </a>
  );
}

function BrandsCarousel() {
  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-[rgba(139,193,221,0.45)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(191,224,211,0.18),rgba(139,193,221,0.12))] py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max flex-nowrap items-center gap-4 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {duplicatedBrandLogos.map((brand, index) => (
            <BrandLogoCard key={`${brand.name}-${index}`} brand={brand} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden px-6 py-24 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-[var(--compi-sky)]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[-8rem] h-72 w-72 rounded-full bg-[var(--compi-mint)]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionEyebrow>Por qué COMPI</SectionEyebrow>

        <SectionHeading
          title="Una agencia que combina estrategia, creatividad y ejecución."
          text="No se trata solo de diseñar piezas o lanzar anuncios. Se trata de entender tu negocio, construir una propuesta clara y ejecutar acciones que ayuden a comunicar y vender mejor."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {socialComments.map((comment, index) => {
            const Icon = comment.icon;

            return (
              <motion.article
                key={`${comment.platform}-${comment.author}`}
                variants={cardMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="compi-brand-card group relative overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_78px_rgba(34,70,110,0.14)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-[-4rem] top-[-4rem] h-36 w-36 rounded-full bg-[var(--compi-sky)]/25 blur-2xl transition duration-300 group-hover:bg-[var(--compi-mint)]/25"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(139,193,221,0.25)] text-[var(--compi-deep-green)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-[var(--compi-deep-green)]">
                          {comment.platform}
                        </p>
                        <p className="text-xs font-semibold text-[var(--compi-blue)]/65">
                          {comment.handle}
                        </p>
                      </div>
                    </div>

                    <Quote className="h-7 w-7 text-[var(--compi-blue-soft)]/70" />
                  </div>

                  <p className="mt-7 text-lg font-semibold leading-8 text-[var(--compi-deep-green)]">
                    “{comment.text}”
                  </p>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-[rgba(139,193,221,0.35)] pt-5">
                    <div>
                      <p className="text-sm font-extrabold text-[var(--compi-deep-green)]">
                        {comment.author}
                      </p>
                      <div className="mt-2">
                        <RatingStars rating={comment.rating} />
                      </div>
                    </div>

                    {comment.url && comment.url !== "#" ? (
                      <a
                        href={comment.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver comentario de ${comment.author}`}
                        className="grid h-10 w-10 place-items-center rounded-2xl border border-[rgba(139,193,221,0.55)] bg-white/70 text-[var(--compi-deep-green)] transition hover:bg-[var(--compi-deep-green)] hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 rounded-[2.5rem] border border-[rgba(139,193,221,0.65)] bg-white/58 p-6 shadow-[0_24px_80px_rgba(34,70,110,0.08)] backdrop-blur md:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--compi-blue-soft)]">
                Marcas que trabajamos
              </p>

              <h3 className="compi-hand-title mt-4 max-w-3xl text-3xl font-normal leading-[0.95] text-[var(--compi-deep-green)] md:text-5xl">
                Proyectos, marcas y negocios que confiaron en COMPI.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--compi-blue)]/80 md:text-base">
              Un recorrido simple con marcas, clientes y proyectos realizados.
            </p>
          </div>

          <BrandsCarousel />
        </motion.div>
      </div>
    </section>
  );
}