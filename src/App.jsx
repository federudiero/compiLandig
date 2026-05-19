import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CompiLandingPage from "./pages/CompiLandingPage";
import SplashIntro from "./components/landing/SplashIntro";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (showIntro) return;

    const t = setTimeout(() => {
      setShowPage(true);
    }, 120);

    return () => clearTimeout(t);
  }, [showIntro]);

  return (
    <div className="compi-site-bg relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {showIntro ? <SplashIntro onFinish={() => setShowIntro(false)} /> : null}
      </AnimatePresence>

      <div
        className={`relative z-10 transition-all duration-700 ${
          showPage
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <CompiLandingPage />
      </div>
    </div>
  );
}
