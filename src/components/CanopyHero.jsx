import React, { useMemo } from "react";
import { motion } from "framer-motion";

function Fireflies({ count = 22 }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 30 + Math.random() * 65,
        size: 2 + Math.random() * 2.5,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 5,
        drift: 20 + Math.random() * 40,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flies.map((f) => (
        <motion.span
          key={f.id}
          className="absolute rounded-full bg-amber"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            boxShadow: "0 0 6px 2px rgba(227,162,61,0.8)",
          }}
          animate={{
            y: [0, -f.drift, 0],
            x: [0, f.drift / 2, 0],
            opacity: [0.1, 1, 0.1],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function CanopyHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative h-[100vh] min-h-[660px] overflow-hidden bg-midnight flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/30" />

      {/* Canopy branch silhouette overlay, top of frame */}
      <svg
        className="absolute top-0 left-0 w-full opacity-90"
        viewBox="0 0 1440 200" preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,60 C120,90 200,20 320,50 C420,75 480,10 600,40 C720,65 800,5 920,35 C1040,60 1120,15 1240,45 C1340,65 1400,20 1440,40 L1440,0 Z"
          fill="#0E2321"
        />
      </svg>

      <Fireflies />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-block text-linen/80 text-xs font-semibold tracking-[0.2em] uppercase mb-5 border border-linen/30 rounded-full px-4 py-1.5"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-linen text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl italic"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-linen/80 text-base sm:text-lg max-w-xl leading-relaxed font-body"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
