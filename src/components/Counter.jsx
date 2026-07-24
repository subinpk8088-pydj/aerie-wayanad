// components/Counter.jsx - Fixed Version
import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, motion } from "framer-motion";

export default function Counter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 1.4,
  format = false,
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px", amount: 0.1 });
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated) return;

    // Ensure value is a number
    const targetValue = Number(value) || 0;
    
    const controls = animate(0, targetValue, {
      duration: duration,
      delay: delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const rounded = Math.round(v);
        setDisplay(rounded);
      },
      onComplete: () => {
        setDisplay(targetValue);
        setHasAnimated(true);
      }
    });

    return () => controls.stop();
  }, [inView, value, duration, delay, hasAnimated]);

  // Format number with commas
  const formatNumber = (num) => {
    if (!format) return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formattedDisplay = `${prefix}${formatNumber(display)}${suffix}`;

  return (
    <motion.span 
      ref={ref}
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {formattedDisplay}
    </motion.span>
  );
}