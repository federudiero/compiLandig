import React from "react";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import ServicesPathSection from "../components/landing/ServicesPathSection";
import ProcessTimelineSection from "../components/landing/ProcessTimelineSection";
import PortfolioSection from "../components/landing/PortfolioSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FinalCTASection from "../components/landing/FinalCTASection";
import SocialMediaSection from "../components/landing/SocialMediaSection";
import Footer from "../components/landing/Footer";
import { BackgroundGlow } from "../components/landing/ui";
import TeamSection from "../components/landing/TeamSection";
import AdvertisingSection from "../components/landing/AdvertisingSection";

export default function CompiLandingPage() {
  return (
    <div className="compi-site-bg relative min-h-screen overflow-x-clip text-[var(--compi-ink)] selection:bg-[var(--compi-orange)] selection:text-white">
      <BackgroundGlow />
      <NavBar />

      <main className="relative z-10">
        <HeroSection />
        <TeamSection />
        <ProcessTimelineSection />
        <AdvertisingSection />
        <PortfolioSection />
        <BenefitsSection />
        <TestimonialsSection />
        <SocialMediaSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
