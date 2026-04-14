import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export function SectionEyebrow({ children, dark = false }) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] ${
        dark
          ? "bg-white/10 text-white/78"
          : "border border-[rgba(34,70,110,0.12)] bg-white text-[var(--compi-blue)]"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          dark ? "bg-[var(--compi-mint)]" : "bg-[var(--compi-orange)]"
        }`}
      />
      {children}
    </div>
  );
}

export function SectionHeading({ title, text, align = "left", dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <h2
        className={`font-[var(--font-display)] text-3xl font-extrabold tracking-[-0.03em] md:text-5xl ${
          dark ? "text-white" : "text-[var(--compi-deep-green)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-8 md:text-lg ${
          dark ? "text-white/80" : "text-[var(--compi-blue)]/90"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="bg-float-slow absolute left-[-8%] top-[-4%] h-80 w-80 rounded-full bg-[var(--compi-mint)]/55 blur-3xl" />
      <div className="bg-float-medium absolute right-[-10%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-[var(--compi-sky)]/35 blur-3xl" />
      <div className="bg-float-slow absolute bottom-[-10%] left-[28%] h-[28rem] w-[28rem] rounded-full bg-[rgba(235,88,64,0.16)] blur-3xl" />
      <div className="bg-float-fast absolute bottom-[8%] right-[14%] h-56 w-56 rounded-full bg-[rgba(34,70,110,0.16)] blur-3xl" />
    </div>
  );
}
