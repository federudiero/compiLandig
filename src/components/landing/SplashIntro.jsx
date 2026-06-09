import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoCompi from "../../assets/logo-compi.png";

const FULL_TEXT = "AGENCIA DE MARKETING";
const MATE_ILLUSTRATION = "/media/decor/illustrations/mate.png";
const KETTLE_ILLUSTRATION = "/media/decor/illustrations/kettle.png";

function useTypewriter(text, start = 900, speed = 55) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let mounted = true;
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        if (!mounted) return;
        i += 1;
        setValue(text.slice(0, i));

        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, start);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, start, speed]);

  return value;
}

export default function SplashIntro({ onFinish }) {
  const typedText = useTypewriter(FULL_TEXT, 1050, 48);
  const [exitNow, setExitNow] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setExitNow(true);
    }, 3600);

    const t2 = setTimeout(() => {
      onFinish?.();
    }, 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  const letters = useMemo(() => FULL_TEXT.split(""), []);

  return (
    <AnimatePresence>
      {!exitNow ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] overflow-hidden bg-[var(--compi-paper)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="splash-orb splash-orb-a" />
            <div className="splash-orb splash-orb-b" />
            <div className="splash-orb splash-orb-c" />
            <div className="splash-grid" />
            <div className="splash-vignette" />
          </div>

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 22 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.18, 0.55, 0.22] }}
                  transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[-18%] rounded-full bg-[var(--compi-mint)]/65 blur-3xl"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(34,70,110,0.10)] bg-white p-4 shadow-[0_20px_90px_rgba(34,70,110,0.08)] backdrop-blur-xl">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-[1.4rem]"
                  >
                    <motion.img
                      src={logoCompi}
                      alt="COMPI"
                      initial={{ scale: 1.08, filter: "blur(10px)" }}
                      animate={{ scale: 1, filter: "blur(0px)" }}
                      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                      className="block w-[180px] max-w-none object-contain sm:w-[230px] md:w-[280px]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: "120%", opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.25,
                      delay: 0.35,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="mt-8 flex flex-col items-center"
              >
                <div className="mb-4 h-px w-24 bg-gradient-to-r from-transparent via-[var(--compi-orange)] to-transparent" />

                <div className="flex min-h-[28px] items-center justify-center text-center">
                  <span className="splash-typed text-[11px] font-semibold tracking-[0.45em] text-[var(--compi-deep-green)] sm:text-xs md:text-sm">
                    {typedText}
                  </span>
                  <span className="splash-caret ml-1 inline-block h-4 w-[2px] bg-[var(--compi-orange)] md:h-5" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="splash-mate-loader mt-7"
                aria-hidden="true"
              >
                <motion.img
                  src={MATE_ILLUSTRATION}
                  alt=""
                  draggable="false"
                  className="splash-mate-loader-img"
                  animate={{ y: [0, -9, 0], rotate: [-2, 3, -2] }}
                  transition={{ duration: 1.55, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={KETTLE_ILLUSTRATION}
                  alt=""
                  draggable="false"
                  className="splash-kettle-loader-img"
                  animate={{ rotate: [-5, 6, -5], x: [0, 5, 0] }}
                  transition={{ duration: 1.75, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.18, 0.5, 0.18] }}
                transition={{ delay: 1.3, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="mt-5 text-[10px] uppercase tracking-[0.4em] text-[var(--compi-blue-soft)]"
              >
                entrando...
              </motion.div>

              <div className="mt-10 flex items-center gap-1">
                {letters.map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0.15, scale: 0.8 }}
                    animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.85, 1, 0.85] }}
                    transition={{
                      duration: 1.2,
                      delay: 1 + i * 0.04,
                      repeat: Infinity,
                      repeatDelay: 1.6,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-[var(--compi-orange)]/80"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
