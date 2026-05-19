import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "./ui";

const teamMembers = [
  {
    name: "IRIS",
    role: "Directora creativa",
    image: "/images/team/iris.webp",
    imagePosition: "center 18%",
    description:
      "Piensa la estrategia con Nico y la convierte en contenido que se entiende y conecta.",
  },
  {
    name: "NICO",
    role: "Director de performance",
    image: "/images/team/nico.webp",
    imagePosition: "center 16%",
    description:
      "Piensa la estrategia con Iris y la lleva a números: pauta, optimización y crecimiento real.",
  },
  {
    name: "HERNÁN",
    role: "Diseño gráfico",
    image: "/images/team/hernan.webp",
    imagePosition: "center 18%",
    description:
      "El que ordena las ideas y les da forma para que tengan sentido visual.",
  },
  {
    name: "LUZ",
    role: "Community Manager",
    image: "/images/team/luz.webp",
    imagePosition: "center 18%",
    description:
      "Está en el día a día: publica, responde y sostiene la cuenta. Sumando mirada de diseño multimedial.",
  },
  {
    name: "ROCHI",
    role: "Community Manager y creadora de contenido",
    image: "/images/team/rochi.webp",
    imagePosition: "center 18%",
    description: "Produce, ejecuta y hace que las ideas no queden en ideas.",
  },
  {
    name: "SEBA",
    role: "Fotógrafo / filmmaker",
    image: "/images/team/seba.webp",
    imagePosition: "center 16%",
    description: "El ojo que levanta la calidad de todo lo que se ve.",
  },
  {
    name: "FEDE",
    role: "Web",
    image: "/images/team/fede.webp",
    imagePosition: "center 18%",
    description:
      "Convierte tu idea en una página integral que funcione, se entienda y te posicione en el mundo digital.",
  },
];

function TeamImage({ member }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#f7f1e8_0%,#eef3f2_45%,#d8e4df_100%)]">
        <div className="text-center">
          <span className="block font-[var(--font-display)] text-6xl font-extrabold tracking-[-0.06em] text-[var(--compi-deep-green)]/20 md:text-7xl">
            {member.name.slice(0, 2)}
          </span>

          <span className="mt-2 block text-xs font-bold uppercase tracking-[0.22em] text-[var(--compi-blue)]/45">
            COMPI
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={member.image}
      alt={`${member.name} - ${member.role}`}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      style={{ objectPosition: member.imagePosition || "center" }}
      className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-focus-within:scale-105 group-focus-within:grayscale-0"
    />
  );
}

function TeamCard({ member, index }) {
  return (
    <article
      tabIndex={0}
      className="compi-brand-card group relative w-[285px] flex-none overflow-hidden rounded-[2rem] outline-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(34,70,110,0.16)] focus-visible:ring-2 focus-visible:ring-[var(--compi-blue)] sm:w-[320px] lg:w-[350px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[2rem]">
        <TeamImage member={member} />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,20,24,0.76)] via-[rgba(5,20,24,0.18)] to-transparent opacity-85 transition duration-300 group-hover:opacity-60" />

        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--compi-deep-green)] backdrop-blur-md">
          Equipo
        </div>
      </div>

      <div className="relative bg-white p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-[var(--font-display)] text-2xl font-extrabold tracking-[-0.03em] text-[var(--compi-deep-green)]">
              {member.name}
            </h3>

            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--compi-blue-soft)]">
              {member.role}
            </p>
          </div>

          <span className="text-sm font-bold text-[var(--compi-blue)]/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-4 md:mt-0 md:grid md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:ease-out md:group-hover:mt-4 md:group-hover:max-h-44 md:group-hover:opacity-100 md:group-focus-within:mt-4 md:group-focus-within:max-h-44 md:group-focus-within:opacity-100">
          <p className="text-sm leading-6 text-[var(--compi-blue)]/85 md:translate-y-[-8px] md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-y-0 md:group-focus-within:translate-y-0">
            {member.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function TeamMarqueeGroup({ hidden = false, groupKey = "main" }) {
  return (
    <div className="compi-team-marquee-group" aria-hidden={hidden}>
      {teamMembers.map((member, index) => (
        <TeamCard
          key={`${groupKey}-${member.name}-${index}`}
          member={member}
          index={index}
        />
      ))}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="equipo"
      className="relative overflow-hidden bg-transparent px-0 py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionEyebrow>Equipo COMPI</SectionEyebrow>

          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[var(--compi-deep-green)] md:text-6xl">
            Las personas que hacen que las ideas se muevan.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--compi-blue)]/80 md:text-lg md:leading-8">
            Estrategia, creatividad, contenido, diseño, pauta y desarrollo web
            trabajando sobre una misma dirección.
          </p>
        </motion.div>
      </div>

      <div className="compi-team-marquee relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--compi-paper)] to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--compi-paper)] to-transparent md:w-48" />

        <div className="compi-team-marquee-row" aria-label="Equipo COMPI">
          <div className="compi-team-marquee-track">
            <TeamMarqueeGroup groupKey="equipo-a" />
            <TeamMarqueeGroup hidden groupKey="equipo-b" />
          </div>
        </div>
      </div>
    </section>
  );
}
