import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
  PenLine,
  Send,
  Sparkles,
} from "lucide-react";
import { SectionEyebrow } from "./ui";
import WhatsAppContactModal, { WhatsAppBrandIcon } from "./WhatsAppContactModal";

const contactChannels = [
  {
    title: "WhatsApp",
    text: "Hablemos directo y rápido.",
    icon: WhatsAppBrandIcon,
    accent: "bg-[#25D366] text-white",
    action: "modal",
  },
  {
    title: "Instagram",
    text: "Conocé más de nuestro trabajo.",
    icon: Instagram,
    accent: "bg-[var(--compi-orange)] text-white",
    href: "#redes",
  },
  {
    title: "Brief",
    text: "Dejanos una primera idea para ordenar la consulta.",
    icon: PenLine,
    accent: "bg-[var(--compi-blue)] text-white",
    href: "#contacto-form",
  },
];

const floatingMessages = [
  {
    text: "Hola COMPI, quiero mejorar mi marca.",
    align: "self-start bg-white text-[var(--compi-deep-green)]",
  },
  {
    text: "Contanos qué necesitás y lo pensamos juntos.",
    align: "self-end bg-[var(--compi-deep-green)] text-white",
  },
  {
    text: "Contenido, pauta, web o estrategia digital.",
    align: "self-start bg-[var(--compi-mint)] text-[var(--compi-deep-green)]",
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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhatsAppModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="contacto" className="relative overflow-hidden px-6 py-24 lg:px-10">
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(139,193,221,0.64)] bg-white/58 p-4 shadow-[0_30px_96px_rgba(34,70,110,0.12)] backdrop-blur md:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] lg:items-stretch">
              <motion.article
                variants={fadeUp}
                className="relative overflow-hidden rounded-[2.25rem] bg-[var(--compi-deep-green)] p-7 text-white shadow-[0_26px_86px_rgba(0,69,56,0.2)] md:p-9"
              >
                <motion.img
                  src="/media/decor/illustrations/click.png"
                  alt=""
                  draggable="false"
                  className="absolute right-5 top-5 w-20 opacity-18 mix-blend-screen md:w-24"
                  animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
                  transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <SectionEyebrow dark>CONTACTO</SectionEyebrow>

                  <h2 className="max-w-3xl font-[var(--font-display)] text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                    Contanos qué necesita tu marca.
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                    Escribinos y vemos juntos cómo podemos ayudarte con contenido,
                    pauta, desarrollo web o estrategia digital.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <motion.button
                      type="button"
                      onClick={openWhatsAppModal}
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-black text-white shadow-[0_18px_44px_rgba(37,211,102,0.22)] transition hover:bg-[var(--compi-mint)] hover:text-[var(--compi-deep-green)]"
                    >
                      <WhatsAppBrandIcon className="h-5 w-5" />
                      Hablar con COMPI
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>

                    <motion.a
                      href="#servicios"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[var(--compi-deep-green)]"
                    >
                      Ver servicios
                    </motion.a>
                  </div>

                  <div className="mt-10 flex flex-col gap-3">
                    {floatingMessages.map((message, index) => (
                      <motion.div
                        key={message.text}
                        initial={{ opacity: 0, y: 18, x: index % 2 === 0 ? -12 : 12 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                        transition={{
                          duration: 0.5,
                          delay: 0.15 + index * 0.08,
                          y: {
                            duration: 5.2 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className={`max-w-[18rem] rounded-[1.35rem] px-4 py-3 text-sm font-bold leading-6 shadow-[0_16px_44px_rgba(0,0,0,0.12)] ${message.align}`}
                      >
                        {message.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>

              <motion.div variants={fadeUp} className="grid gap-5">
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {contactChannels.map((channel, index) => {
                    const Icon = channel.icon;
                    const content = (
                      <motion.div
                        variants={fadeUp}
                        whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                        whileTap={{ scale: 0.98 }}
                        className="group compi-brand-card h-full rounded-[1.8rem] p-5 text-left"
                      >
                        <div
                          className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl shadow-[0_16px_36px_rgba(34,70,110,0.12)] transition duration-300 group-hover:scale-110 ${channel.accent}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black text-[var(--compi-deep-green)]">
                          {channel.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/82">
                          {channel.text}
                        </p>
                      </motion.div>
                    );

                    if (channel.action === "modal") {
                      return (
                        <button
                          key={channel.title}
                          type="button"
                          onClick={openWhatsAppModal}
                          className="text-left"
                          aria-label="Contactar por WhatsApp"
                        >
                          {content}
                        </button>
                      );
                    }

                    return (
                      <a key={channel.title} href={channel.href} className="block">
                        {content}
                      </a>
                    );
                  })}
                </div>

                <motion.div
                  id="contacto-form"
                  variants={fadeUp}
                  className="compi-brand-card rounded-[2rem] p-6 text-[var(--compi-deep-green)] md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--compi-blue-soft)]">
                        Brief inicial
                      </p>
                      <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-[var(--compi-deep-green)]">
                        Dejanos una primera idea.
                      </h3>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--compi-sky)]/45 text-[var(--compi-deep-green)]">
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <input type="text" placeholder="Nombre" className="compi-input bg-white/84" />
                    <input
                      type="text"
                      placeholder="Marca / empresa"
                      className="compi-input bg-white/84"
                    />
                    <input type="email" placeholder="Email" className="compi-input bg-white/84" />
                    <textarea
                      rows={5}
                      placeholder="Contanos sobre tu marca y qué necesitás: estrategia, contenido, publicidad, landing o web"
                      className="compi-input min-h-[148px] resize-none bg-white/84"
                    />
                    <motion.button
                      type="button"
                      onClick={openWhatsAppModal}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--compi-orange)] px-6 py-4 text-sm font-black text-white transition hover:bg-[var(--compi-blue)]"
                    >
                      Enviar consulta
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <WhatsAppContactModal
        open={isModalOpen}
        initialContactId="argentina"
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
