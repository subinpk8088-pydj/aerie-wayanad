import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine, MessageCircle } from "lucide-react";
import { NAV_LINKS, waLink } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-linen/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <TreePine className={`w-5 h-5 ${scrolled ? "text-sage" : "text-linen"}`} />
          <span className={`font-display italic text-2xl tracking-tight ${scrolled ? "text-midnight" : "text-linen"}`}>
            Aerie
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.path} to={l.path} className="relative group py-2">
              {({ isActive }) => (
                <>
                  <span className={`text-sm font-medium tracking-wide ${scrolled ? "text-midnight" : "text-linen"}`}>
                    {l.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-amber transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
            target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber text-midnight text-sm font-semibold px-5 py-2.5 hover:bg-[#c98a2a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Enquire
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-midnight" : "text-linen"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-linen shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-5 pb-5 gap-1">
              {NAV_LINKS.map((l) => (
                <Link key={l.path} to={l.path} className="px-3 py-3 rounded-lg text-midnight font-medium hover:bg-midnight/5">
                  {l.label}
                </Link>
              ))}
              <a
                href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
                target="_blank" rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber text-midnight text-sm font-semibold px-4 py-3"
              >
                <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
