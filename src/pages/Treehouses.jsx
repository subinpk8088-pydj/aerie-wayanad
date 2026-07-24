import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageCircle, X, Check, ArrowUp } from "lucide-react";
import Reveal from "../components/Reveal";
import { TREEHOUSES, waLink } from "../data";

export default function Treehouses() {
  const [active, setActive] = useState(null);

  return (
    <div className="pt-28 pb-24 bg-linen min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-14">
          <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">The Treehouses</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-midnight italic">Three cabins, three heights, one canopy.</h1>
          <p className="mt-4 text-charcoal leading-relaxed">
            Every cabin is reached by its own private staircase and comes with breakfast, evening tea, and one
            guided forest walk included.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {TREEHOUSES.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.1}>
              <motion.div
                layoutId={`card-${r.id}`}
                onClick={() => setActive(r)}
                whileHover={{ y: -6 }}
                className="cursor-pointer rounded-2xl overflow-hidden bg-white border border-midnight/8 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div layoutId={`img-${r.id}`} className="h-60 overflow-hidden relative">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-midnight/70 text-amber text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                    <ArrowUp className="w-3 h-3" /> {r.height}
                  </span>
                </motion.div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-midnight mb-2 italic">{r.name}</h3>
                  <p className="text-sm text-charcoal leading-relaxed mb-4">{r.blurb}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-midnight font-semibold">
                      ₹{r.price.toLocaleString("en-IN")}<span className="text-charcoal text-xs font-normal"> /night</span>
                    </span>
                    <span className="text-xs font-semibold text-sage flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {r.capacity}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-midnight/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              layoutId={`card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-linen rounded-2xl max-w-2xl w-full overflow-hidden max-h-[88vh] overflow-y-auto"
            >
              <motion.div layoutId={`img-${active.id}`} className="h-72 overflow-hidden relative">
                <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 bg-midnight/60 text-linen rounded-full p-2 hover:bg-midnight"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
              <div className="p-7 sm:p-9">
                <h3 className="font-display text-2xl sm:text-3xl text-midnight mb-1 italic">{active.name}</h3>
                <p className="text-sm text-sage font-semibold mb-4">{active.height}</p>
                <p className="text-charcoal leading-relaxed mb-6">{active.blurb}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {active.tags.map((t) => (
                    <span key={t} className="flex items-center gap-2 text-sm text-midnight">
                      <Check className="w-4 h-4 text-sage" /> {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="font-display text-2xl text-midnight italic">
                    ₹{active.price.toLocaleString("en-IN")}<span className="text-charcoal text-sm font-body not-italic"> /night</span>
                  </span>
                  <a
                    href={waLink(`Hi! I'd like to book "${active.name}" at Aerie Wayanad.`)}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3 hover:bg-[#c98a2a] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
