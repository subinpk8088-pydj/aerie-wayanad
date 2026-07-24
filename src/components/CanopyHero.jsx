// components/CanopyHero.jsx - Enhanced with Firefly Animation
import React, { useMemo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Fireflies({ count = 35 }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        top: 10 + Math.random() * 80,
        size: 1.5 + Math.random() * 3,
        duration: 4 + Math.random() * 8,
        delay: Math.random() * 6,
        driftX: 20 + Math.random() * 60,
        driftY: 15 + Math.random() * 50,
        glowIntensity: 0.5 + Math.random() * 0.5,
        twinkleSpeed: 0.5 + Math.random() * 1.5,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {flies.map((f) => (
        <motion.span
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: `radial-gradient(circle, rgba(255, 235, 160, 0.9), rgba(227, 162, 61, 0.4))`,
            boxShadow: `0 0 ${f.size * 4}px ${f.size * 2}px rgba(227, 162, 61, ${f.glowIntensity * 0.6})`,
            filter: `blur(${f.size > 2.5 ? '0.5px' : '0px'})`,
          }}
          animate={{
            y: [
              0, 
              -f.driftY, 
              f.driftY * 0.5, 
              -f.driftY * 0.3, 
              f.driftY * 0.7, 
              0
            ],
            x: [
              0, 
              f.driftX * 0.3, 
              -f.driftX * 0.5, 
              f.driftX * 0.7, 
              -f.driftX * 0.2, 
              0
            ],
            opacity: [
              0.1 + f.glowIntensity * 0.2,
              0.8 + f.glowIntensity * 0.2,
              0.3 + f.glowIntensity * 0.1,
              1,
              0.1 + f.glowIntensity * 0.2,
            ],
            scale: [
              1,
              1.2 + f.glowIntensity * 0.3,
              0.8,
              1.3 + f.glowIntensity * 0.2,
              1,
            ],
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

// Floating canopy leaves/particles
function CanopyParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 30,
        size: 4 + Math.random() * 8,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 10,
        rotation: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-4 opacity-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size * 0.6,
            background: 'rgba(156, 179, 154, 0.3)',
            borderRadius: '50% 50% 50% 0',
            transform: `rotate(${p.rotation}deg)`,
          }}
          animate={{
            y: [0, -20, 10, -30, 0],
            x: [0, 15, -10, 20, 0],
            rotate: [p.rotation, p.rotation + 45, p.rotation - 30, p.rotation + 60, p.rotation],
            opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function CanopyHero({ eyebrow, title, subtitle, children }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);

  return (
    <section className="relative h-[100vh] min-h-[700px] overflow-hidden bg-midnight flex items-end">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80')",
          y,
          scale,
        }}
      />
      
      {/* Overlay Gradient - Enhanced */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/60 to-midnight/90"
        style={{ opacity }}
      />
      
      {/* Animated light rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-amber/10 via-transparent to-amber/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-l from-amber/5 via-transparent to-amber/10 blur-3xl" />
      </motion.div>

      {/* Canopy branch silhouette */}
      <svg
        className="absolute top-0 left-0 w-full z-5 opacity-80"
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="branchGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E2321" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0E2321" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L0,60 C120,90 200,20 320,50 C420,75 480,10 600,40 C720,65 800,5 920,35 C1040,60 1120,15 1240,45 C1340,65 1400,20 1440,40 L1440,0 Z"
          fill="url(#branchGradient)"
        />
        {/* Additional canopy detail */}
        <path
          d="M0,0 L0,30 C180,50 280,15 400,35 C520,55 620,10 740,30 C860,50 980,15 1100,35 C1220,55 1340,10 1440,25 L1440,0 Z"
          fill="#0E2321"
          opacity="0.5"
        />
      </svg>

      {/* Fireflies - Enhanced */}
      <Fireflies count={35} />
      
      {/* Floating canopy particles */}
      <CanopyParticles />

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-32"
        style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-linen/90 text-xs font-semibold tracking-[0.2em] uppercase mb-5 border border-linen/30 rounded-full px-5 py-2 backdrop-blur-sm bg-midnight/20 hover:bg-midnight/30 transition-colors"
        >
          {eyebrow}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="font-display text-linen text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-4xl italic"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-linen/80 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-body backdrop-blur-sm bg-midnight/10 p-4 rounded-2xl border border-linen/5"
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {children}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-linen/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-8 bg-gradient-to-b from-amber/60 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none z-6 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
    </section>
  );
}