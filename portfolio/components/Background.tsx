"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent/12 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-accent-2/12 blur-[130px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-3/8 blur-[140px] animate-float-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,var(--color-ink-950)_88%)]" />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
    />
  );
}

export function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(76,201,240,0.055), transparent 62%)`,
      }}
    />
  );
}
