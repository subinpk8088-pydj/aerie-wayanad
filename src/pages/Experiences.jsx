import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { EXPERIENCES, waLink } from "../data";

export default function Experiences() {
  return (
    <div className="pt-28 pb-24 bg-linen min-h-screen">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-16">
          <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">Experiences</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-midnight italic">The canopy, hour by hour.</h1>
          <p className="mt-4 text-charcoal leading-relaxed">
            A loose rhythm rather than a fixed schedule — join what suits your stay, skip the rest, and let the
            forest set the pace.
          </p>
        </Reveal>

        {/* Signature: vertical alternating timeline with a central connecting line, since a canopy day genuinely moves dawn to dusk */}
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-midnight/10" />

          <div className="space-y-14 sm:space-y-20">
            {EXPERIENCES.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={e.id} delay={i * 0.1}>
                  <div className={`sm:grid sm:grid-cols-2 sm:gap-14 items-center relative`}>
                    <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        className="block w-4 h-4 rounded-full bg-amber ring-8 ring-linen"
                      />
                    </div>

                    <div className={isLeft ? "sm:pr-14 sm:text-right" : "sm:col-start-2 sm:pl-14"}>
                      <span className="text-xs font-bold text-amber uppercase tracking-[0.2em]">{e.time}</span>
                      <h3 className="font-display text-2xl text-midnight mt-2 mb-3 italic">{e.title}</h3>
                      <p className="text-sm text-charcoal leading-relaxed">{e.desc}</p>
                    </div>

                    <div className={`mt-5 sm:mt-0 rounded-2xl overflow-hidden h-52 sm:h-64 shadow-sm ${isLeft ? "sm:col-start-2 sm:pl-14" : "sm:row-start-1 sm:pr-14"}`}>
                      <img src={e.image} alt={e.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-20 rounded-2xl bg-midnight p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-linen mb-1 italic">Want the full day planned for you?</h3>
            <p className="text-sm text-linen/60">We'll build an itinerary around your stay dates and interests.</p>
          </div>
          <a
            href={waLink("Hi! Could you help plan a canopy-experience itinerary for my stay at Aerie Wayanad?")}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3.5 hover:bg-[#c98a2a] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" /> Plan My Visit
          </a>
        </Reveal>
      </div>
    </div>
  );
}
