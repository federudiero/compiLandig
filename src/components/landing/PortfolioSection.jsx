import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import { portfolioItems, webMedia } from "../../data/compiLandingData";
import AbstractMediaCluster from "./AbstractMediaCluster";
import { SectionEyebrow, SectionHeading } from "./ui";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionEyebrow>Web / Landing</SectionEyebrow>

            <SectionHeading
              title="Landing pages y sitios web pensados para acompañar tu marketing."
              text="Desarrollamos páginas claras, visualmente sólidas y enfocadas en convertir visitas en consultas, leads o ventas. No son webs decorativas: están hechas para ayudarte a vender mejor."
            />
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--compi-orange)] transition hover:text-[var(--compi-deep-green)]"
          >
            Quiero una propuesta integral
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14">
          <AbstractMediaCluster
            featured={webMedia.featured}
            secondary={webMedia.secondary}
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolioItems.map((item, index) => {
            const covers = [
              "from-[var(--compi-sky)] via-white to-[var(--compi-paper-strong)]",
              "from-[var(--compi-mint)] via-white to-[var(--compi-paper-strong)]",
              "from-[rgba(235,88,64,0.20)] via-white to-[var(--compi-paper-strong)]",
              "from-[rgba(34,70,110,0.18)] via-white to-[var(--compi-paper-strong)]",
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-[rgba(34,70,110,0.12)] bg-white shadow-[0_18px_50px_rgba(34,70,110,0.06)]"
              >
                <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${covers[index % covers.length]} p-4`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-full flex-col justify-between rounded-[1.5rem] border border-[rgba(34,70,110,0.10)] bg-white/85 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--compi-blue-soft)]">
                        {item.tag}
                      </p>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--compi-paper-strong)] text-[var(--compi-deep-green)]">
                        <Globe2 className="h-4 w-4" />
                      </div>
                    </div>

                    <div>
                      <p className="text-2xl font-bold leading-tight text-[var(--compi-deep-green)]">
                        {item.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--compi-blue)]/88">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
