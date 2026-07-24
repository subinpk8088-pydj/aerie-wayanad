// pages/Contact.jsx - Enhanced with Icons & Animations
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Mail, 
  Clock, 
  Users, 
  Calendar,
  CheckCircle,
  Sparkles,
  TreePine,
  Cloud,
  Sun,
  Star
} from "lucide-react";
import Reveal from "../components/Reveal";
import { waLink } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSend = () => {
    setIsSubmitting(true);
    const text = `Hi! I'm ${name || "..."}, enquiring about a stay at Aerie Wayanad.\nDates: ${dates || "—"}\nGuests: ${guests}\nMessage: ${message || "—"}`;
    window.open(waLink(text), "_blank");
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999", color: "text-amber" },
    { icon: Mail, label: "Email", value: "stay@aeriewayanad.com", href: "mailto:stay@aeriewayanad.com", color: "text-sage" },
    { icon: MapPin, label: "Location", value: "Vythiri, Wayanad, Kerala", href: null, color: "text-amber" },
    { icon: Clock, label: "Response Time", value: "Usually within 2-4 hours", href: null, color: "text-sage" },
  ];

  const features = [
    { icon: TreePine, label: "Direct bookings only", desc: "No third-party commissions" },
    { icon: Users, label: "Personalized service", desc: "We know each guest by name" },
    { icon: Cloud, label: "Weather updates", desc: "We'll keep you informed" },
    { icon: Sun, label: "Best price guarantee", desc: "Book direct for best rates" },
  ];

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-linen via-white to-linen/60 min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-amber" />
                <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-midnight mb-4 italic leading-tight">
                Tell us your dates. <br />
                <span className="text-amber">We'll hold your tree.</span>
              </h1>
              <p className="text-charcoal leading-relaxed mb-8 text-sm sm:text-base max-w-lg">
                Every enquiry is answered by the estate directly. With only three cabins, we confirm availability fast —
                usually within a few hours.
              </p>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href || "#"}
                    target={info.href?.startsWith("mailto") || info.href?.startsWith("tel") ? "_self" : "_blank"}
                    rel="noreferrer"
                    className={`block p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-midnight/5 hover:shadow-lg transition-all duration-300 ${
                      info.href ? "hover:scale-105" : "hover:scale-100"
                    }`}
                    whileHover={info.href ? { y: -4 } : { y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-${info.color === 'text-amber' ? 'amber' : 'sage'}/10 flex items-center justify-center shrink-0`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-charcoal/50 uppercase tracking-wide">{info.label}</p>
                        <p className={`text-sm font-semibold text-midnight ${info.href ? 'hover:text-amber transition-colors' : ''}`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-midnight/5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <feature.icon className="w-4 h-4 text-amber shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-midnight">{feature.label}</p>
                      <p className="text-[10px] text-charcoal/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div 
                className="rounded-2xl overflow-hidden border border-midnight/10 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-64 lg:h-72"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="Aerie Wayanad Location"
                  src="https://www.google.com/maps?q=vythiri+wayanad+kerala&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                className="mt-6 flex items-center justify-center gap-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber text-amber" />
                  <span className="text-xs text-charcoal/70">4.9 ★ (24 reviews)</span>
                </div>
                <div className="w-px h-6 bg-midnight/10" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  <span className="text-xs text-charcoal/70">100% direct booking</span>
                </div>
              </motion.div>
            </motion.div>
          </Reveal>

          {/* Right Column - Form */}
          <Reveal delay={0.1}>
            <motion.div 
              className="bg-white rounded-3xl border border-midnight/8 shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber/5 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-sage/5 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <TreePine className="w-5 h-5 text-amber" />
                  <h3 className="font-display text-2xl text-midnight italic">Send an Enquiry</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-1.5 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-amber" /> Your Name
                    </label>
                    <input
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-sm text-midnight border border-midnight/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Divya Menon"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-1.5 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber" /> Preferred Dates
                    </label>
                    <input
                      value={dates} 
                      onChange={(e) => setDates(e.target.value)}
                      className="w-full text-sm text-midnight border border-midnight/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="e.g. 12–15 Aug, 2026"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-1.5 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-amber" /> Guests
                    </label>
                    <select
                      value={guests} 
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full text-sm text-midnight border border-midnight/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none"
                    >
                      <option>2 Adults</option>
                      <option>2 Adults + 1 Child</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                      <option>Family (5+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-1.5 flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-amber" /> Message
                    </label>
                    <textarea
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full text-sm text-midnight border border-midnight/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Anything you'd like us to know? Special occasions, preferences, or just a hello..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSend}
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-3 bg-amber text-midnight font-semibold rounded-xl px-6 py-3.5 hover:bg-[#c98a2a] transition-all duration-300 shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <motion.p 
                    className="text-xs text-charcoal/60 text-center flex items-center justify-center gap-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-amber" /> 
                    Opens WhatsApp with your details pre-filled
                  </motion.p>

                  {/* Quick action buttons */}
                  <div className="flex gap-3 mt-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="tel:+919999999999"
                      className="flex-1 flex items-center justify-center gap-2 bg-midnight/5 text-midnight text-sm font-medium rounded-xl px-4 py-2.5 hover:bg-midnight/10 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber" /> Call
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-amber/10 text-amber text-sm font-medium rounded-xl px-4 py-2.5 hover:bg-amber/20 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Quick Chat
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}