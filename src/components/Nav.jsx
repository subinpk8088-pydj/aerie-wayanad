// components/Nav.jsx - Enhanced with better visibility & animations
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine, MessageCircle, Home, Building2, Camera, Mail, Calendar } from "lucide-react";
import { NAV_LINKS, waLink } from "../data";

// Map icons for mobile menu
const iconMap = {
  Home: Home,
  Treehouses: Building2,
  Experiences: Calendar,
  Gallery: Camera,
  Contact: Mail,
};

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

  // Determine text color based on scroll and page
  const isLightPage = location.pathname === "/treehouses" || 
                      location.pathname === "/experiences" || 
                      location.pathname === "/gallery" || 
                      location.pathname === "/contact";

  const textColor = (scrolled || isLightPage) ? "text-midnight" : "text-linen";
  const bgColor = (scrolled || isLightPage) ? "bg-linen/95 backdrop-blur-md shadow-sm border-b border-midnight/5" : "bg-transparent";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TreePine className={`w-5 h-5 ${scrolled || isLightPage ? "text-sage" : "text-linen"} transition-colors duration-300`} />
          </motion.div>
          <span className={`font-display italic text-2xl tracking-tight ${textColor} transition-colors duration-300`}>
            Aerie<span className="text-amber">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.path} to={l.path} className="relative group py-2">
              {({ isActive }) => (
                <>
                  <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-amber" : textColor
                  } group-hover:text-amber`}>
                    {l.label}
                  </span>
                  <motion.span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-amber transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    layoutId={isActive ? "navUnderline" : undefined}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber text-midnight text-sm font-semibold px-5 py-2.5 hover:bg-[#c98a2a] transition-all duration-300 shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30"
          >
            <MessageCircle className="w-4 h-4" /> Enquire
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg hover:bg-midnight/10 transition-colors duration-300 ${textColor}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-linen shadow-xl overflow-hidden border-t border-midnight/5"
          >
            <div className="flex flex-col px-5 pb-6 gap-1 pt-2">
              {NAV_LINKS.map((l, index) => {
                const IconComponent = iconMap[l.label] || Home;
                const isActive = location.pathname === l.path;
                return (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={l.path}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-amber/10 text-amber font-semibold" 
                          : "text-midnight hover:bg-midnight/5"
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${isActive ? "text-amber" : "text-sage"}`} />
                      <span className="text-base">{l.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="ml-auto w-2 h-2 rounded-full bg-amber"
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-3 px-4"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-amber text-midnight text-sm font-semibold px-4 py-3.5 w-full transition-all duration-300 shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}