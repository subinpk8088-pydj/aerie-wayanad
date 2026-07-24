import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { waLink } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = `Hi! I'm ${name || "..."}, enquiring about a stay at Aerie Wayanad.\nDates: ${dates || "—"}\nGuests: ${guests}\nMessage: ${message || "—"}`;
    window.open(waLink(text), "_blank");
  };

  return (
    <div className="pt-28 pb-24 bg-linen min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <span className="text-amber text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-midnight mb-6 italic">
            Tell us your dates. We'll hold your tree.
          </h1>
          <p className="text-charcoal leading-relaxed mb-8">
            Every enquiry is answered by the estate directly. With only three cabins, we confirm availability fast —
            usually within a few hours.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-midnight">
              <span className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center"><Phone className="w-4 h-4 text-sage" /></span>
              <span className="text-sm font-medium">+91 99999 99999</span>
            </li>
            <li className="flex items-center gap-3 text-midnight">
              <span className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center"><MapPin className="w-4 h-4 text-sage" /></span>
              <span className="text-sm font-medium">Vythiri, Wayanad, Kerala</span>
            </li>
          </ul>

          <div className="rounded-2xl overflow-hidden border border-midnight/10 h-72">
            <iframe
              title="Aerie Wayanad Location"
              src="https://www.google.com/maps?q=vythiri+wayanad+kerala&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div className="bg-white rounded-2xl border border-midnight/8 shadow-sm p-7 sm:p-9">
            <h3 className="font-display text-xl text-midnight mb-6 italic">Send an Enquiry</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal mb-1.5">Your Name</label>
                <input
                  value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm text-midnight border border-midnight/15 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber"
                  placeholder="Divya Menon"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal mb-1.5">Preferred Dates</label>
                <input
                  value={dates} onChange={(e) => setDates(e.target.value)}
                  className="w-full text-sm text-midnight border border-midnight/15 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber"
                  placeholder="e.g. 12–15 Aug"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal mb-1.5">Guests</label>
                <select
                  value={guests} onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-sm text-midnight border border-midnight/15 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber"
                >
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>Family (5+)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal mb-1.5">Message</label>
                <textarea
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full text-sm text-midnight border border-midnight/15 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber resize-none"
                  placeholder="Anything you'd like us to know?"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleSend}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber text-midnight font-semibold rounded-full px-6 py-3.5 hover:bg-[#c98a2a] transition-colors"
              >
                <Send className="w-4 h-4" /> Send via WhatsApp
              </motion.button>
              <p className="text-xs text-charcoal/70 text-center flex items-center justify-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" /> Opens WhatsApp with your details pre-filled
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}
