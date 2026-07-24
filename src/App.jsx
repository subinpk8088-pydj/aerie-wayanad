import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Treehouses from "./pages/Treehouses";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { waLink } from "./data";

function StickyMobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-linen border-t border-midnight/10 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a href="tel:+919999999999" className="flex items-center justify-center gap-2 bg-midnight text-linen font-semibold text-sm rounded-xl py-3">
          <Phone className="w-4 h-4" /> Call Aerie
        </a>
        <a
          href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
          target="_blank" rel="noreferrer"
          className="relative flex items-center justify-center gap-2 bg-amber text-midnight font-semibold text-sm rounded-xl py-3 overflow-hidden"
        >
          <span className="absolute inset-0 rounded-xl bg-amber animate-ping opacity-40" />
          <MessageCircle className="w-4 h-4 relative" /> <span className="relative">Enquire</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="font-body">
      <Nav />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/treehouses" element={<Treehouses />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
