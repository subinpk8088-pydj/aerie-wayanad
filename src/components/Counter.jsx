// components/Counter.jsx - Advanced version with more features
import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, motion } from "framer-motion";

export default function Counter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 1.4,
  format = false,
  delay = 0,
  className = "",
  easing = [0.22, 1, 0.36, 1],
  showComma = false,
  decimalPlaces = 0,
  onComplete = null,
  startFrom = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(startFrom);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(startFrom, value, {
      duration: duration,
      delay: delay,
      ease: easing,
      onUpdate: (v) => {
        const rounded = decimalPlaces > 0 
          ? Number(v.toFixed(decimalPlaces)) 
          : Math.round(v);
        setDisplay(rounded);
      },
      onComplete: () => {
        setIsComplete(true);
        setDisplay(value);
        if (onComplete) onComplete();
      }
    });

    return () => controls.stop();
  }, [inView, value, duration, delay, startFrom, decimalPlaces, onComplete, easing]);

  const formatNumber = (num) => {
    if (!format && !showComma) return num;
    
    // Handle decimal places
    let formatted = decimalPlaces > 0 
      ? num.toFixed(decimalPlaces) 
      : num.toString();
    
    // Add commas
    if (showComma || format) {
      const parts = formatted.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      formatted = parts.join('.');
    }
    
    return formatted;
  };

  const formattedDisplay = `${prefix}${formatNumber(display)}${suffix}`;

  return (
    <motion.span 
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ scale: 0.9, opacity: 0, y: 10 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.9, opacity: 0, y: 10 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <span className="relative inline-block group">
        {formattedDisplay}
        
        {/* Pulse animation when count completes */}
        {isComplete && inView && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 0.4 }}
            className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-amber shadow-lg shadow-amber/50"
          />
        )}
      </span>
    </motion.span>
  );
}