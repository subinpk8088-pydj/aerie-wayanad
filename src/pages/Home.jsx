// pages/Home.jsx - Enhanced Version
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Wind, Flame, ArrowRight, Star, MessageCircle, Sparkles } from "lucide-react";
import CanopyHero from "../components/CanopyHero";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { TREEHOUSES, EXPERIENCES, TESTIMONIALS, STATS, waLink } from "../data";

const PILLARS = [
  { icon: Eye, title: "Nothing Between You and the Forest", desc: "Glass floor panels and full-height decks, so the canopy is never just a view from a window." },
  { icon: Wind, title: "Built Around the Trees", desc: "Each cabin is engineered to its host tree, with zero nails driven into living wood." },
  { icon: Flame, title: "Only Three Cabins", desc: "Spaced far enough apart that you never hear another guest's deck." },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <CanopyHero
        eyebrow="Premium Treehouses, Wayanad"
        title="Sleep Above the Forest Floor."
        subtitle="Three private treehouses set deep in Wayanad's forest canopy — glass floors, jungle-facing decks, and nights lit by fireflies instead of streetlights."
      >
        <div className="flex flex-wrap gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3.5 hover:bg-[#c98a2a] transition-colors shadow-lg shadow-amber/20"
          >
            <MessageCircle className="w-4 h-4" /> Enquire About a Stay
          </motion.a>
          <Link
            to="/treehouses"
            className="inline-flex items-center gap-2 border border-linen/40 text-linen font-semibold rounded-full px-6 py-3.5 hover:bg-linen/10 transition-colors backdrop-blur-sm"
          >
            See the Treehouses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </CanopyHero>

      {/* Stats strip - Enhanced with icons */}
      <section className="bg-linen py-16 border-b border-midnight/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <motion.div 
                  className="relative"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-midnight italic">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-charcoal max-w-[220px] mx-auto leading-relaxed">{s.label}</p>
                  {i === 0 && (
                    <div className="absolute -top-2 -right-2 text-amber/30">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars - Enhanced hover effects */}
      <section className="py-20 sm:py-28 bg-linen">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">Why Aerie</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-midnight max-w-lg italic">
              Treehouses built for the forest, not just in it.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <motion.div 
                  className="rounded-2xl border border-midnight/10 bg-white/60 p-7 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                  }}
                >
                  <motion.div 
                    className="w-11 h-11 rounded-xl bg-sage/20 flex items-center justify-center mb-5"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p.icon className="w-5 h-5 text-sage" />
                  </motion.div>
                  <h3 className="font-display text-lg text-midnight mb-2 italic">{p.title}</h3>
                  <p className="text-sm text-charcoal leading-relaxed">{p.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured treehouses - Enhanced card design */}
      <section className="py-20 sm:py-28 bg-midnight relative overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">The Treehouses</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-linen max-w-lg italic">
                Three cabins. Never crowded.
              </h2>
            </div>
            <Link to="/treehouses" className="inline-flex items-center gap-1.5 text-linen text-sm font-semibold hover:text-amber transition-colors group">
              View all treehouses 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREEHOUSES.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.1}>
                <motion.div 
                  className="group rounded-2xl overflow-hidden bg-linen/5 border border-linen/10 hover:border-amber/30 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-midnight/70 text-amber text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {r.height}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-linen mb-2 italic group-hover:text-amber transition-colors">{r.name}</h3>
                    <p className="text-sm text-linen/60 leading-relaxed mb-4">{r.blurb}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-linen font-semibold">₹{r.price.toLocaleString("en-IN")}<span className="text-linen/50 text-xs font-normal"> /night</span></span>
                      <Link to="/treehouses" className="text-amber text-sm font-semibold hover:underline flex items-center gap-1">
                        Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences teaser - Enhanced with staggered animations */}
      <section className="py-20 sm:py-28 bg-linen">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">A Day at Aerie</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-midnight max-w-lg italic">
              From dawn birdsong to firefly nights.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.08}>
                <motion.div 
                  className="rounded-2xl overflow-hidden bg-white border border-midnight/8 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="h-40 overflow-hidden relative">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold text-amber uppercase tracking-wide">{e.time}</span>
                    <h3 className="font-display text-base text-midnight mt-1 mb-2 italic">{e.title}</h3>
                    <p className="text-xs text-charcoal leading-relaxed">{e.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/experiences" className="inline-flex items-center gap-1.5 text-midnight font-semibold text-sm hover:text-amber transition-colors group">
              See the full canopy itinerary 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial - Enhanced with animation */}
      <section className="py-20 sm:py-28 bg-sage/15 relative overflow-hidden">
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <motion.div 
              className="flex justify-center gap-1 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Star className="w-4 h-4 fill-amber text-amber" />
                </motion.div>
              ))}
            </motion.div>
            <motion.p 
              className="font-display text-xl sm:text-2xl lg:text-3xl text-midnight leading-snug italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              "{TESTIMONIALS[0].text}"
            </motion.p>
            <motion.p 
              className="mt-5 text-sm font-semibold text-charcoal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              — {TESTIMONIALS[0].name}
            </motion.p>
          </Reveal>
        </div>
      </section>

      {/* CTA banner - Enhanced */}
      <section className="py-20 sm:py-28 bg-midnight relative overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-linen mb-5 italic">
              Three treehouses. One canopy. Book direct.
            </h2>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-7 py-3.5 hover:bg-[#c98a2a] transition-colors shadow-lg shadow-amber/20"
            >
              <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </motion.a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}