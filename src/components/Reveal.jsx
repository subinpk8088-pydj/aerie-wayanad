// components/Reveal.jsx - Enhanced with Multiple Animation Options
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Animation variants for different reveal types
export const REVEAL_VARIANTS = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  flip: {
    hidden: { opacity: 0, rotateX: 90, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  stagger: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

// Staggered children wrapper
export function StaggerContainer({ children, delay = 0.1, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered item
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Main Reveal component
export default function Reveal({ 
  children, 
  delay = 0, 
  y = 24,
  x = 0,
  scale = 1,
  type = "fadeUp",
  duration = 0.6,
  ease = [0.22, 1, 0.36, 1],
  once = true,
  margin = "-80px",
  amount = 0.1,
  className = "",
  id = "",
  onReveal = null,
  debug = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: once, 
    margin: margin,
    amount: amount,
  });

  // Debug logging
  useEffect(() => {
    if (debug && isInView) {
      console.log(`🔍 Reveal triggered: ${id || 'unnamed'}`);
    }
  }, [isInView, debug, id]);

  // Callback when revealed
  useEffect(() => {
    if (isInView && onReveal) {
      onReveal();
    }
  }, [isInView, onReveal]);

  // Get animation variants
  const getVariants = () => {
    // If custom y/x/scale are provided, use custom animation
    if (y !== 24 || x !== 0 || scale !== 1) {
      return {
        hidden: { opacity: 0, y, x, scale: scale * 0.9 },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 },
      };
    }
    // Otherwise use the predefined type
    return REVEAL_VARIANTS[type] || REVEAL_VARIANTS.fadeUp;
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: ease,
        // Spring physics for smoother animations
        ...(type === 'scale' && { type: "spring", stiffness: 200, damping: 20 }),
        ...(type === 'slideUp' && { type: "spring", stiffness: 100, damping: 15 }),
      }}
      className={`${className} ${debug ? 'border-2 border-amber/20' : ''}`}
    >
      {children}
    </motion.div>
  );
}

// Specialized Reveal components for common use cases
export function RevealLeft({ children, delay = 0, className = "" }) {
  return (
    <Reveal type="fadeLeft" delay={delay} className={className}>
      {children}
    </Reveal>
  );
}

export function RevealRight({ children, delay = 0, className = "" }) {
  return (
    <Reveal type="fadeRight" delay={delay} className={className}>
      {children}
    </Reveal>
  );
}

export function RevealScale({ children, delay = 0, className = "" }) {
  return (
    <Reveal type="scale" delay={delay} className={className}>
      {children}
    </Reveal>
  );
}

export function RevealBlur({ children, delay = 0, className = "" }) {
  return (
    <Reveal type="blur" delay={delay} className={className}>
      {children}
    </Reveal>
  );
}

// Responsive Reveal - different animations based on screen size
export function ResponsiveReveal({ 
  children, 
  mobileType = "fadeUp",
  tabletType = "fadeLeft",
  desktopType = "scale",
  delay = 0,
  className = "",
}) {
  return (
    <>
      {/* Mobile */}
      <div className="block sm:hidden">
        <Reveal type={mobileType} delay={delay} className={className}>
          {children}
        </Reveal>
      </div>
      {/* Tablet */}
      <div className="hidden sm:block lg:hidden">
        <Reveal type={tabletType} delay={delay} className={className}>
          {children}
        </Reveal>
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <Reveal type={desktopType} delay={delay} className={className}>
          {children}
        </Reveal>
      </div>
    </>
  );
}