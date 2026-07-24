import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Wind, Flame, ArrowRight, Star, MessageCircle } from "lucide-react";
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
    <div>
      <CanopyHero
        eyebrow="Premium Treehouses, Wayanad"
        title="Sleep Above the Forest Floor."
        subtitle="Three private treehouses set deep in Wayanad's forest canopy — glass floors, jungle-facing decks, and nights lit by fireflies instead of streetlights."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3.5 hover:bg-[#c98a2a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Enquire About a Stay
          </a>
          <Link
            to="/treehouses"
            className="inline-flex items-center gap-2 border border-linen/40 text-linen font-semibold rounded-full px-6 py-3.5 hover:bg-linen/10 transition-colors"
          >
            See the Treehouses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </CanopyHero>

      {/* Stats strip */}
      <section className="bg-linen py-14 border-b border-midnight/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="font-display text-4xl sm:text-5xl text-midnight italic">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-charcoal max-w-[220px] mx-auto leading-relaxed">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-28 bg-linen">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">Why Aerie</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-midnight max-w-lg italic">
              Treehouses built for the forest, not just in it.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <div className="rounded-2xl border border-midnight/10 bg-white/60 p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-sage/20 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-sage" />
                  </div>
                  <h3 className="font-display text-lg text-midnight mb-2 italic">{p.title}</h3>
                  <p className="text-sm text-charcoal leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured treehouses */}
      <section className="py-20 sm:py-28 bg-midnight">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">The Treehouses</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-linen max-w-lg italic">
                Three cabins. Never crowded.
              </h2>
            </div>
            <Link to="/treehouses" className="inline-flex items-center gap-1.5 text-linen text-sm font-semibold hover:text-amber transition-colors">
              View all treehouses <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {TREEHOUSES.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-linen/5 border border-linen/10">
                  <div className="h-56 overflow-hidden relative">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-midnight/70 text-amber text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {r.height}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-linen mb-2 italic">{r.name}</h3>
                    <p className="text-sm text-linen/60 leading-relaxed mb-4">{r.blurb}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-linen font-semibold">₹{r.price.toLocaleString("en-IN")}<span className="text-linen/50 text-xs font-normal"> /night</span></span>
                      <Link to="/treehouses" className="text-amber text-sm font-semibold hover:underline">Details</Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences teaser */}
      <section className="py-20 sm:py-28 bg-linen">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">A Day at Aerie</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-midnight max-w-lg italic">
              From dawn birdsong to firefly nights.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden bg-white border border-midnight/8 hover:shadow-lg transition-shadow duration-300">
                  <div className="h-40 overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold text-amber uppercase tracking-wide">{e.time}</span>
                    <h3 className="font-display text-base text-midnight mt-1 mb-2 italic">{e.title}</h3>
                    <p className="text-xs text-charcoal leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/experiences" className="inline-flex items-center gap-1.5 text-midnight font-semibold text-sm hover:text-amber transition-colors">
              See the full canopy itinerary <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28 bg-sage/15">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber text-amber" />)}
            </div>
            <p className="font-display text-xl sm:text-2xl text-midnight leading-snug italic">
              "{TESTIMONIALS[0].text}"
            </p>
            <p className="mt-5 text-sm font-semibold text-charcoal">{TESTIMONIALS[0].name}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-midnight relative overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-linen mb-5 italic">
              Three treehouses. One canopy. Book direct.
            </h2>
            <a
              href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-7 py-3.5 hover:bg-[#c98a2a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
