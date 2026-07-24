// pages/Experiences.jsx - Enhanced with Animated Timeline
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Clock, Sun, Moon, Cloud, Compass } from "lucide-react";
import Reveal from "../components/Reveal";
import { EXPERIENCES, waLink } from "../data";

// Icon mapping for experience times
const timeIcons = {
  "6:00 AM": Sun,
  "8:30 AM": Sun,
  "2:00 PM": Cloud,
  "7:00 PM": Moon,
};

export default function Experiences() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-linen via-white to-linen/50 min-h-screen">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-16">
          <motion.span 
            className="text-amber text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Compass className="w-3 h-3" /> Experiences
          </motion.span>
          <motion.h1 
            className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-midnight italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The canopy, hour by hour.
          </motion.h1>
          <motion.p 
            className="mt-4 text-charcoal leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A loose rhythm rather than a fixed schedule — join what suits your stay, skip the rest, and let the
            forest set the pace.
          </motion.p>
        </Reveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated vertical line */}
          <motion.div 
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber/20 via-amber/40 to-amber/20"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 sm:space-y-20">
            {EXPERIENCES.map((e, i) => {
              const isLeft = i % 2 === 0;
              const IconComponent = timeIcons[e.time] || Clock;

              return (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`sm:grid sm:grid-cols-2 sm:gap-14 items-center relative`}
                >
                  {/* Timeline dot with pulse animation */}
                  <motion.div 
                    className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="block w-5 h-5 rounded-full bg-amber ring-4 ring-linen shadow-lg shadow-amber/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: ["0 0 0 0 rgba(227, 162, 61, 0.4)", "0 0 0 10px rgba(227, 162, 61, 0)", "0 0 0 0 rgba(227, 162, 61, 0.4)"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>

                  {/* Content - Left or Right */}
                  <motion.div 
                    className={`${isLeft ? "sm:pr-14 sm:text-right" : "sm:col-start-2 sm:pl-14"} order-2 sm:order-none`}
                    whileHover={{ x: isLeft ? -4 : 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2 sm:justify-end mb-3">
                      <IconComponent className="w-4 h-4 text-amber" />
                      <span className="text-xs font-bold text-amber uppercase tracking-[0.2em]">{e.time}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-midnight mb-3 italic group-hover:text-amber transition-colors">
                      {e.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed max-w-sm mx-auto sm:mx-0">
                      {e.desc}
                    </p>
                  </motion.div>

                  {/* Image */}
                  <motion.div 
                    className={`mt-5 sm:mt-0 rounded-2xl overflow-hidden h-52 sm:h-64 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                      isLeft ? "sm:col-start-2 sm:pl-14" : "sm:row-start-1 sm:pr-14"
                    } order-1 sm:order-none`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.img 
                      src={e.image} 
                      alt={e.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    {/* Gradient overlay */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Mobile timeline dot */}
                  <div className="sm:hidden flex justify-center mt-4">
                    <span className="w-3 h-3 rounded-full bg-amber ring-4 ring-white shadow-lg" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Reveal>
          <motion.div 
            className="mt-20 rounded-3xl bg-gradient-to-br from-midnight to-midnight/90 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber/5 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative z-10 text-center sm:text-left">
              <h3 className="font-display text-2xl sm:text-3xl text-linen mb-2 italic flex items-center gap-2 justify-center sm:justify-start">
                <Compass className="w-6 h-6 text-amber" />
                Want the full day planned for you?
              </h3>
              <p className="text-sm text-linen/70 max-w-md">
                We'll build an itinerary around your stay dates and interests.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={waLink("Hi! Could you help plan a canopy-experience itinerary for my stay at Aerie Wayanad?")}
              target="_blank" 
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3.5 hover:bg-[#c98a2a] transition-colors shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" /> Plan My Visit
            </motion.a>
          </motion.div>
        </Reveal>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-midnight/5">
            <div className="font-display text-2xl text-amber">4+</div>
            <div className="text-xs text-charcoal/60">Daily Activities</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-midnight/5">
            <div className="font-display text-2xl text-amber">100+</div>
            <div className="text-xs text-charcoal/60">Bird Species</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-midnight/5">
            <div className="font-display text-2xl text-amber">2hrs</div>
            <div className="text-xs text-charcoal/60">Forest Walk</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-midnight/5">
            <div className="font-display text-2xl text-amber">∞</div>
            <div className="text-xs text-charcoal/60">Firefly Moments</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}