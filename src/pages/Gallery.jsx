import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { GALLERY } from "../data";

export default function Gallery() {
  const [index, setIndex] = useState(null);

  const next = () => setIndex((i) => (i + 1) % GALLERY.length);
  const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);

  return (
    <div className="pt-28 pb-24 bg-linen min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-12">
          <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">Gallery</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-midnight italic">Canopy light, deck views, quiet mornings.</h1>
        </Reveal>

        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {GALLERY.map((src, i) => (
            <Reveal key={src} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <motion.img
                src={src}
                alt="Aerie Wayanad"
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.03 }}
                className="w-full rounded-xl cursor-pointer shadow-sm"
              />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
            className="fixed inset-0 z-[60] bg-midnight/92 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.img
              key={GALLERY[index]}
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              src={GALLERY[index]} alt="Preview"
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            />
            <button onClick={() => setIndex(null)} className="absolute top-6 right-6 text-linen/90 hover:text-linen">
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-linen/80 hover:text-linen bg-linen/10 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-linen/80 hover:text-linen bg-linen/10 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
