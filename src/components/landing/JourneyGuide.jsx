import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const sections = [
  {
    id: "inicio",
    label: "Inicio",
    hint: "Presentamos la propuesta y el valor principal de COMPI.",
  },
  {
    id: "problema",
    label: "Problema",
    hint: "Mostramos por qué muchas marcas no logran crecer aunque publiquen.",
  },
  {
    id: "transformacion",
    label: "Transformación",
    hint: "Explicamos el cambio entre improvisar y tener dirección.",
  },
  {
    id: "servicios",
    label: "Marketing",
    hint: "Desplegamos nuestros servicios estratégicos y creativos.",
  },
  {
    id: "proceso",
    label: "Proceso",
    hint: "Mostramos cómo trabajamos paso a paso con cada cliente.",
  },
  {
    id: "portfolio",
    label: "Web",
    hint: "Sumamos desarrollo de webs, tiendas y sistemas a medida.",
  },
  {
    id: "beneficios",
    label: "Beneficios",
    hint: "Dejamos claro qué resultados puede esperar el cliente.",
  },
  {
    id: "testimonios",
    label: "Elegirnos",
    hint: "Marcamos por qué COMPI es un socio y no solo un proveedor.",
  },
  {
    id: "contacto",
    label: "Contacto",
    hint: "Llevamos al cierre con una propuesta clara y acción directa.",
  },
];

export default function JourneyGuide() {
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (marker >= el.offsetTop) current = section.id;
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const currentIndex = useMemo(() => {
    const idx = sections.findIndex((s) => s.id === activeId);
    return idx === -1 ? 0 : idx;
  }, [activeId]);

  const currentSection = sections[currentIndex];
  const nextSection = sections[currentIndex + 1] || null;
  const progress = ((currentIndex + 1) / sections.length) * 100;

  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-[70] w-[calc(100%-1rem)] max-w-[380px] -translate-x-1/2 md:left-auto md:right-5 md:w-[360px] md:translate-x-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.28 }}
          className="guide-card-glow pointer-events-auto overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-4 backdrop-blur-xl md:p-5"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                Recorrido guiado
              </p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSection.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 truncate text-lg font-semibold text-white"
                >
                  {currentSection.label}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              {currentIndex + 1}/{sections.length}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSection.hint}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mb-4 text-sm leading-6 text-white/60"
            >
              {currentSection.hint}
            </motion.p>
          </AnimatePresence>

          <div className="relative mb-4 h-2 rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35 }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400"
            />

            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ left: `${progress}%` }}
              className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.85)]"
            />
          </div>

          <div className="hide-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
            {sections.map((section, index) => {
              const isActive = section.id === activeId;
              const isPast = index < currentIndex;

              return (
                <button
                  key={section.id}
                  onClick={() => goTo(section.id)}
                  className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition ${
                    isActive
                      ? "border-cyan-400/30 bg-cyan-400/15 text-cyan-300"
                      : isPast
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border-white/10 bg-white/5 text-white/50 hover:text-white/80"
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    {isPast ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
                    {section.label}
                  </span>
                </button>
              );
            })}
          </div>

          {nextSection ? (
            <button
              onClick={() => goTo(nextSection.id)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              <Sparkles className="h-4 w-4" />
              Siguiente paso: {nextSection.label}
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => goTo("contacto")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              Ir al contacto
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}