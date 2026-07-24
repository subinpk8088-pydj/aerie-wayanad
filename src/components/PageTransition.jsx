// components/PageTransition.jsx - Enhanced with Multiple Animation Options
import React from "react";
import { motion } from "framer-motion";

// Different animation variants you can choose from
export const TRANSITIONS = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -5, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 5, scale: 0.95 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
  },
  flip: {
    initial: { opacity: 0, rotateX: 90, y: 20 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
    exit: { opacity: 0, rotateX: -90, y: -20 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
};

export default function PageTransition({ 
  children, 
  type = "slideUp", 
  duration = 0.5,
  delay = 0,
  ease = [0.22, 1, 0.36, 1],
  className = "",
  debug = false,
}) {
  // Get the animation variants based on type
  const variants = TRANSITIONS[type] || TRANSITIONS.slideUp;

  // Custom easing options
  const easingMap = {
    spring: [0.34, 1.56, 0.64, 1],
    smooth: [0.22, 1, 0.36, 1],
    bouncy: [0.68, -0.55, 0.265, 1.55],
    gentle: [0.25, 0.46, 0.45, 0.94],
    sharp: [0.4, 0, 0.2, 1],
  };

  const selectedEase = easingMap[ease] || ease;

  // Add debug border to see transition boundaries
  const debugStyles = debug ? "border-2 border-amber/30" : "";

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{
        duration: duration,
        delay: delay,
        ease: selectedEase,
      }}
      className={`w-full ${debugStyles} ${className}`}
      // For debugging - shows when animation starts/ends
      onAnimationStart={() => debug && console.log(`🎬 Page transition started: ${type}`)}
      onAnimationComplete={() => debug && console.log(`✅ Page transition completed: ${type}`)}
    >
      {children}
    </motion.div>
  );
}