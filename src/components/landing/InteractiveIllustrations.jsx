import React, { useEffect, useMemo, useRef, useState } from "react";

const ILLUSTRATIONS = [
  {
    src: "/media/decor/illustrations/mate.png",
    className: "interactive-illustration-mate",
    size: 72,
    x: 8,
    y: 0.07,
    vx: 0.42,
    vy: 0.34,
    rotation: -10,
  },
  {
    src: "/media/decor/illustrations/megaphone.png",
    className: "interactive-illustration-megaphone",
    size: 78,
    x: 91,
    y: 0.12,
    vx: -0.4,
    vy: 0.32,
    rotation: 8,
  },
  {
    src: "/media/decor/illustrations/notebook.png",
    className: "interactive-illustration-notebook",
    size: 82,
    x: 14,
    y: 0.18,
    vx: 0.34,
    vy: 0.3,
    rotation: -6,
  },
  {
    src: "/media/decor/illustrations/marketing.png",
    className: "interactive-illustration-marketing",
    size: 78,
    x: 86,
    y: 0.24,
    vx: -0.38,
    vy: -0.29,
    rotation: 7,
  },
  {
    src: "/media/decor/illustrations/stars.png",
    className: "interactive-illustration-stars interactive-illustration-alt",
    size: 66,
    x: 9,
    y: 0.3,
    vx: 0.36,
    vy: -0.28,
    rotation: 14,
  },
  {
    src: "/media/decor/illustrations/click.png",
    className: "interactive-illustration-click interactive-illustration-alt",
    size: 72,
    x: 90,
    y: 0.37,
    vx: -0.39,
    vy: 0.27,
    rotation: -17,
  },
  {
    src: "/media/decor/illustrations/kettle.png",
    className: "interactive-illustration-kettle",
    size: 78,
    x: 16,
    y: 0.44,
    vx: 0.33,
    vy: 0.31,
    rotation: 9,
  },
  {
    src: "/media/decor/illustrations/grafico.png",
    className: "interactive-illustration-chart",
    size: 76,
    x: 84,
    y: 0.51,
    vx: -0.32,
    vy: -0.3,
    rotation: 11,
  },
  {
    src: "/media/decor/illustrations/camera.png",
    className: "interactive-illustration-camera interactive-illustration-alt",
    size: 74,
    x: 10,
    y: 0.58,
    vx: 0.35,
    vy: -0.27,
    rotation: 12,
  },
  {
    src: "/media/decor/illustrations/pencil.png",
    className: "interactive-illustration-pencil",
    size: 70,
    x: 88,
    y: 0.65,
    vx: -0.31,
    vy: 0.29,
    rotation: -11,
  },
  {
    src: "/media/decor/illustrations/ok.png",
    className: "interactive-illustration-ok interactive-illustration-alt",
    size: 66,
    x: 13,
    y: 0.72,
    vx: 0.3,
    vy: 0.26,
    rotation: -8,
  },
  {
    src: "/media/decor/illustrations/stars.png",
    className: "interactive-illustration-stars interactive-illustration-alt",
    size: 68,
    x: 86,
    y: 0.79,
    vx: -0.34,
    vy: -0.24,
    rotation: 16,
  },
  {
    src: "/media/decor/illustrations/megaphone.png",
    className: "interactive-illustration-megaphone",
    size: 70,
    x: 7,
    y: 0.86,
    vx: 0.32,
    vy: -0.3,
    rotation: -13,
  },
  {
    src: "/media/decor/illustrations/notebook.png",
    className: "interactive-illustration-notebook",
    size: 76,
    x: 91,
    y: 0.93,
    vx: -0.32,
    vy: 0.26,
    rotation: 9,
  },
  {
    src: "/media/decor/illustrations/pencil.png",
    className: "interactive-illustration-pencil interactive-illustration-alt",
    size: 64,
    x: 18,
    y: 0.16,
    vx: -0.3,
    vy: 0.28,
    rotation: 20,
  },
  {
    src: "/media/decor/illustrations/camera.png",
    className: "interactive-illustration-camera",
    size: 70,
    x: 78,
    y: 0.2,
    vx: 0.28,
    vy: -0.27,
    rotation: -10,
  },
  {
    src: "/media/decor/illustrations/grafico.png",
    className: "interactive-illustration-chart interactive-illustration-alt",
    size: 68,
    x: 23,
    y: 0.36,
    vx: -0.29,
    vy: 0.25,
    rotation: -14,
  },
  {
    src: "/media/decor/illustrations/marketing.png",
    className: "interactive-illustration-marketing",
    size: 72,
    x: 73,
    y: 0.43,
    vx: 0.3,
    vy: 0.28,
    rotation: 13,
  },
  {
    src: "/media/decor/illustrations/click.png",
    className: "interactive-illustration-click interactive-illustration-alt",
    size: 66,
    x: 28,
    y: 0.55,
    vx: 0.28,
    vy: -0.26,
    rotation: 8,
  },
  {
    src: "/media/decor/illustrations/mate.png",
    className: "interactive-illustration-mate",
    size: 68,
    x: 72,
    y: 0.61,
    vx: -0.29,
    vy: 0.25,
    rotation: 11,
  },
  {
    src: "/media/decor/illustrations/kettle.png",
    className: "interactive-illustration-kettle interactive-illustration-alt",
    size: 70,
    x: 24,
    y: 0.77,
    vx: 0.27,
    vy: 0.26,
    rotation: -9,
  },
  {
    src: "/media/decor/illustrations/ok.png",
    className: "interactive-illustration-ok interactive-illustration-alt",
    size: 62,
    x: 76,
    y: 0.84,
    vx: -0.28,
    vy: -0.23,
    rotation: 15,
  },
  {
    src: "/media/decor/illustrations/stars.png",
    className: "interactive-illustration-stars interactive-illustration-alt",
    size: 60,
    x: 36,
    y: 0.91,
    vx: 0.25,
    vy: -0.22,
    rotation: -18,
  },
];
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getViewport() {
  if (typeof window === "undefined") {
    return { width: 1366, height: 768 };
  }

  return {
    width: Math.max(320, window.innerWidth || 320),
    height: Math.max(420, window.innerHeight || 420),
  };
}

function getActiveItems(items, viewport) {
  if (viewport.width < 640) return items.slice(0, 6);
  if (viewport.width < 1024) return items.slice(0, 12);
  return items;
}

function getWrapperSize(wrapper, viewport) {
  if (!wrapper) {
    return { width: viewport.width, height: viewport.height * 3 };
  }

  return {
    width: Math.max(viewport.width, wrapper.offsetWidth || viewport.width),
    height: Math.max(viewport.height, wrapper.scrollHeight || wrapper.offsetHeight || viewport.height),
  };
}

function safeXPercent(x, viewport) {
  if (viewport.width >= 1024) return x;

  if (x < 50) return Math.max(8, Math.min(x, 24));
  return Math.min(92, Math.max(x, 76));
}

function createParticle(item, viewport, bounds, index) {
  const isMobile = viewport.width < 640;
  const isTablet = viewport.width >= 640 && viewport.width < 1024;
  const sizeScale = isMobile ? 0.68 : isTablet ? 0.82 : 1;
  const size = Math.round(item.size * sizeScale);
  const radius = size / 2;
  const paddingX = viewport.width < 768 ? radius + 10 : radius + 24;
  const paddingY = radius + 24;
  const xPercent = safeXPercent(item.x, viewport);

  return {
    ...item,
    size,
    radius,
    x: clamp((bounds.width * xPercent) / 100, paddingX, bounds.width - paddingX),
    y: clamp(bounds.height * item.y, paddingY, bounds.height - paddingY),
    vx: item.vx,
    vy: item.vy,
    baseVx: item.vx,
    baseVy: item.vy,
    rotation: item.rotation,
    spin: 0,
    phase: index * 1.37,
  };
}

function initialStyle(item) {
  return {
    width: `${item.size}px`,
    transform: `translate3d(-9999px, -9999px, 0) rotate(${item.rotation}deg)`,
  };
}

export default function InteractiveIllustrations({ children, className = "" }) {
  const shellRef = useRef(null);
  const refs = useRef([]);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const boundsRef = useRef({ width: 1366, height: 2400 });
  const [renderCount, setRenderCount] = useState(ILLUSTRATIONS.length);

  const items = useMemo(() => ILLUSTRATIONS, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const applyParticleStyle = (particle, index) => {
      const element = refs.current[index];
      if (!element) return;

      element.style.width = `${particle.size}px`;
      element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) translate3d(-50%, -50%, 0) rotate(${particle.rotation}deg)`;
    };

    const resetParticles = () => {
      const viewport = getViewport();
      const bounds = getWrapperSize(shellRef.current, viewport);
      const activeItems = getActiveItems(items, viewport);

      boundsRef.current = bounds;
      setRenderCount(activeItems.length);

      particlesRef.current = activeItems.map((item, index) =>
        createParticle(item, viewport, bounds, index)
      );
      particlesRef.current.forEach(applyParticleStyle);
    };

    const updateBoundsOnly = () => {
      const viewport = getViewport();
      boundsRef.current = getWrapperSize(shellRef.current, viewport);
    };

    resetParticles();

    const handlePointerMove = (event) => {
      const shell = shellRef.current;
      if (!shell) return;

      const rect = shell.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    let resizeFrame = null;
    const scheduleReset = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(resetParticles);
    };

    let boundsFrame = null;
    const scheduleBoundsUpdate = () => {
      if (boundsFrame) window.cancelAnimationFrame(boundsFrame);
      boundsFrame = window.requestAnimationFrame(updateBoundsOnly);
    };

    let resizeObserver;
    if ("ResizeObserver" in window && shellRef.current) {
      resizeObserver = new ResizeObserver(scheduleBoundsUpdate);
      resizeObserver.observe(shellRef.current);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    window.addEventListener("resize", scheduleReset, { passive: true });
    window.addEventListener("load", scheduleReset, { once: true });

    const tick = (now) => {
      const bounds = boundsRef.current;
      const mouse = mouseRef.current;
      const previous = lastTimeRef.current || now;
      const delta = Math.min(1.6, Math.max(0.55, (now - previous) / 16.67));
      const time = now / 1000;
      lastTimeRef.current = now;

      particlesRef.current.forEach((particle, index) => {
        const interactionRadius = Math.max(210, particle.size * 3.7);

        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < interactionRadius) {
            const strength = (interactionRadius - distance) / interactionRadius;
            particle.vx += (dx / distance) * strength * 15.5 * delta;
            particle.vy += (dy / distance) * strength * 15.5 * delta;
            particle.spin += (dx / distance) * strength * 7.8 * delta;
          }
        }

        particle.vx += Math.sin(time * 0.72 + particle.phase) * 0.026 * delta;
        particle.vy += Math.cos(time * 0.66 + particle.phase) * 0.026 * delta;
        particle.vx += particle.baseVx * 0.014 * delta;
        particle.vy += particle.baseVy * 0.014 * delta;

        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.rotation += (particle.spin + particle.vx * 0.07) * delta;

        particle.vx *= 0.988;
        particle.vy *= 0.988;
        particle.spin *= 0.91;

        const paddingX = particle.radius + (bounds.width < 768 ? 10 : 24);
        const paddingY = particle.radius + 24;
        const maxX = Math.max(paddingX, bounds.width - paddingX);
        const maxY = Math.max(paddingY, bounds.height - paddingY);

        if (particle.x < paddingX) {
          particle.x = paddingX;
          particle.vx = Math.abs(particle.vx) * 0.92;
        }

        if (particle.x > maxX) {
          particle.x = maxX;
          particle.vx = -Math.abs(particle.vx) * 0.92;
        }

        if (particle.y < paddingY) {
          particle.y = paddingY;
          particle.vy = Math.abs(particle.vy) * 0.92;
        }

        if (particle.y > maxY) {
          particle.y = maxY;
          particle.vy = -Math.abs(particle.vy) * 0.92;
        }

        applyParticleStyle(particle, index);
      });

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      window.removeEventListener("resize", scheduleReset);
      resizeObserver?.disconnect();

      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      if (boundsFrame) window.cancelAnimationFrame(boundsFrame);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [items]);

  const renderItems = items.slice(0, renderCount);

  return (
    <div ref={shellRef} className={`interactive-illustration-shell ${className}`.trim()}>
      <div className="interactive-illustration-field" aria-hidden="true">
        {renderItems.map((item, index) => (
          <img
            key={`${item.src}-${item.className}-${index}`}
            ref={(node) => {
              refs.current[index] = node;
            }}
            src={item.src}
            alt=""
            draggable="false"
            loading="eager"
            decoding="async"
            className={`interactive-illustration ${item.className}`}
            style={initialStyle(item)}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
