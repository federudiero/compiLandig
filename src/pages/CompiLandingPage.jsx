import React from "react";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import ProblemSection from "../components/landing/ProblemSection";
import TransformationSection from "../components/landing/TransformationSection";
import ServicesPathSection from "../components/landing/ServicesPathSection";
import ProcessTimelineSection from "../components/landing/ProcessTimelineSection";
import PortfolioSection from "../components/landing/PortfolioSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FinalCTASection from "../components/landing/FinalCTASection";
import Footer from "../components/landing/Footer";
import { BackgroundGlow } from "../components/landing/ui";

export default function CompiLandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--compi-paper)] text-[var(--compi-ink)] selection:bg-[var(--compi-orange)] selection:text-white">
      <BackgroundGlow />
      <NavBar />

      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <ServicesPathSection />
        <ProcessTimelineSection />
        <PortfolioSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
