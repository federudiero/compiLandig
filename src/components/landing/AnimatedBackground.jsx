import React from "react";

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="animated-bg pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="animated-bg-base" />
      <div className="animated-bg-grid" />
      <div className="animated-bg-beam" />

      <div className="animated-orb animated-orb-1" />
      <div className="animated-orb animated-orb-2" />
      <div className="animated-orb animated-orb-3" />
      <div className="animated-orb animated-orb-4" />

      <div className="animated-bg-vignette" />
    </div>
  );
}