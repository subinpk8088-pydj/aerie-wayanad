// pages/Treehouses.jsx - Enhanced & Responsive
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageCircle, X, Check, ArrowUp, Bed, Wifi, Coffee, Star } from "lucide-react";
import Reveal from "../components/Reveal";
import { TREEHOUSES, waLink } from "../data";

export default function Treehouses() {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="pt-28 pb-24 bg-linen min-h-screen">
      {/* Add a subtle top gradient for navbar visibility */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-linen to-transparent pointer-events-none z-40" />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-14">
          <motion.span 
            className="text-amber text-xs font-bold uppercase tracking-[0.2em]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Treehouses
          </motion.span>
          <motion.h1 
            className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-midnight italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Three cabins, three heights, one canopy.
          </motion.h1>
          <motion.p 
            className="mt-4 text-charcoal leading-relaxed text-sm sm:text-base max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every cabin is reached by its own private staircase and comes with breakfast, evening tea, and one
            guided forest walk included.
          </motion.p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TREEHOUSES.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.1}>
              <motion.div
                layoutId={`card-${r.id}`}
                onClick={() => setActive(r)}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="cursor-pointer rounded-2xl overflow-hidden bg-white border border-midnight/8 shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div 
                  layoutId={`img-${r.id}`} 
                  className="h-56 sm:h-60 overflow-hidden relative"
                >
                  <img 
                    src={r.image} 
                    alt={r.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <span className="absolute top-3 left-3 bg-midnight/80 backdrop-blur-sm text-amber text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 border border-amber/20">
                    <ArrowUp className="w-3 h-3" /> {r.height}
                  </span>
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber text-amber" />
                    4.9
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl text-midnight mb-2 italic group-hover:text-amber transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-4 line-clamp-2">{r.blurb}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-midnight font-semibold">
                      ₹{r.price.toLocaleString("en-IN")}
                      <span className="text-charcoal/60 text-xs font-normal"> /night</span>
                    </span>
                    <span className="text-xs font-semibold text-sage flex items-center gap-1.5 bg-sage/10 px-3 py-1.5 rounded-full">
                      <Users className="w-3.5 h-3.5" /> {r.capacity || "2 Guests"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-midnight/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            style={{ marginTop: 0 }}
          >
            <motion.div
              layoutId={`card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-linen rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <motion.div 
                layoutId={`img-${active.id}`} 
                className="h-64 sm:h-72 overflow-hidden relative"
              >
                <img 
                  src={active.image} 
                  alt={active.name} 
                  className="w-full h-full object-cover" 
                />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 bg-midnight/70 hover:bg-midnight text-linen rounded-full p-2.5 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="absolute bottom-4 left-4 bg-midnight/70 backdrop-blur-sm text-amber text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" /> {active.height}
                </span>
              </motion.div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl text-midnight mb-1 italic">
                  {active.name}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-sage font-semibold">⭐ 4.9 (24 reviews)</span>
                  <span className="text-sm text-charcoal/60 flex items-center gap-1">
                    <Users className="w-4 h-4" /> {active.capacity || "2 Guests"}
                  </span>
                </div>
                <p className="text-charcoal leading-relaxed mb-6">{active.blurb}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {active.tags?.map((t) => (
                    <motion.span 
                      key={t} 
                      className="flex items-center gap-2 text-sm text-midnight bg-white/60 px-3 py-2 rounded-lg border border-midnight/5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Check className="w-4 h-4 text-sage shrink-0" /> 
                      <span className="text-xs sm:text-sm">{t}</span>
                    </motion.span>
                  ))}
                  {/* Fallback amenities if tags not available */}
                  {!active.tags && (
                    <>
                      <span className="flex items-center gap-2 text-sm text-midnight bg-white/60 px-3 py-2 rounded-lg border border-midnight/5">
                        <Bed className="w-4 h-4 text-sage" /> King Bed
                      </span>
                      <span className="flex items-center gap-2 text-sm text-midnight bg-white/60 px-3 py-2 rounded-lg border border-midnight/5">
                        <Wifi className="w-4 h-4 text-sage" /> Free WiFi
                      </span>
                      <span className="flex items-center gap-2 text-sm text-midnight bg-white/60 px-3 py-2 rounded-lg border border-midnight/5">
                        <Coffee className="w-4 h-4 text-sage" /> Breakfast
                      </span>
                    </>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-midnight/10">
                  <div>
                    <span className="font-display text-3xl sm:text-4xl text-midnight italic">
                      ₹{active.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-charcoal/60 text-sm font-body not-italic ml-1">/ night</span>
                    <p className="text-xs text-charcoal/50 mt-0.5">Includes breakfast & forest walk</p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={waLink(`Hi! I'd like to book "${active.name}" at Aerie Wayanad.`)}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3 hover:bg-[#c98a2a] transition-colors shadow-lg shadow-amber/20 w-full sm:w-auto justify-center"
                  >
                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}