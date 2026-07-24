// pages/Gallery.jsx - Enhanced & Responsive
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid, Image as ImageIcon, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";
import { GALLERY } from "../data";

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const [layout, setLayout] = useState("masonry"); // 'masonry' or 'grid'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (index !== null) {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
        if (e.key === "Escape") setIndex(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % GALLERY.length);
  const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (index !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [index]);

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-linen to-white min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-12">
          <motion.span 
            className="text-amber text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-3 h-3" /> Gallery
          </motion.span>
          <motion.h1 
            className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-midnight italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Canopy light, deck views, quiet mornings.
          </motion.h1>
          <motion.p 
            className="mt-4 text-charcoal leading-relaxed text-sm sm:text-base max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A glimpse into the magic of waking up in the trees — captured across seasons and moods.
          </motion.p>
        </Reveal>

        {/* Layout toggle - optional */}
        <div className="flex justify-end mb-6 gap-2">
          <button
            onClick={() => setLayout("masonry")}
            className={`p-2 rounded-lg transition-all duration-300 ${
              layout === "masonry" 
                ? "bg-amber text-midnight shadow-md" 
                : "bg-white/50 text-charcoal/50 hover:bg-white"
            }`}
            aria-label="Masonry layout"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={`p-2 rounded-lg transition-all duration-300 ${
              layout === "grid" 
                ? "bg-amber text-midnight shadow-md" 
                : "bg-white/50 text-charcoal/50 hover:bg-white"
            }`}
            aria-label="Grid layout"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={layout === "masonry" 
          ? "columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4" 
          : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        }>
          {GALLERY.map((src, i) => (
            <Reveal key={src} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.04,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onClick={() => setIndex(i)}
                className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300 group"
              >
                <img
                  src={src}
                  alt={`Aerie Wayanad - Gallery ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs font-medium bg-midnight/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    View image
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Image count */}
        <motion.div 
          className="mt-12 text-center text-sm text-charcoal/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {GALLERY.length} moments captured in the canopy
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
            className="fixed inset-0 z-[60] bg-midnight/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-linen/80 hover:text-linen bg-midnight/40 hover:bg-midnight/60 rounded-full p-2.5 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-linen/60 text-sm font-medium bg-midnight/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {index + 1} / {GALLERY.length}
            </div>

            {/* Main image */}
            <motion.img
              key={GALLERY[index]}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={GALLERY[index]} 
              alt={`Gallery ${index + 1}`}
              className="max-h-[80vh] sm:max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-linen/70 hover:text-linen bg-midnight/40 hover:bg-midnight/60 rounded-full p-3 sm:p-4 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-linen/70 hover:text-linen bg-midnight/40 hover:bg-midnight/60 rounded-full p-3 sm:p-4 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Navigation dots */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {GALLERY.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === index 
                      ? "w-8 h-2 bg-amber" 
                      : "w-2 h-2 bg-linen/30 hover:bg-linen/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-6 right-6 hidden sm:block text-linen/30 text-xs font-medium">
              ← → to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}