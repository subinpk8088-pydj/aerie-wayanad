// components/Footer.jsx - Enhanced with Icons & Animations
import React from "react";
import { motion } from "framer-motion";
import { 
  TreePine, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowUp,
  Heart,
  Compass,
  Cloud,
  Moon,
  Sun,
  Sparkles,
  Send,
  Globe
} from "lucide-react";
import { waLink } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-400" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-500" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Treehouses", href: "/treehouses" },
    { label: "Experiences", href: "/experiences" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const features = [
    { icon: Compass, label: "Private Forest" },
    { icon: Cloud, label: "Mountain Views" },
    { icon: Moon, label: "Firefly Nights" },
    { icon: Sun, label: "Sunrise Deck" },
  ];

  return (
    <footer className="bg-gradient-to-b from-midnight to-midnight/95 text-linen/85 pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-sage/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TreePine className="w-6 h-6 text-amber" />
              </motion.div>
              <span className="font-display italic text-2xl text-linen">
                Aerie<span className="text-amber">.</span>
              </span>
            </motion.div>
            
            <p className="text-sm text-linen/60 leading-relaxed mb-4">
              Three treehouses set deep in private forest canopy in Wayanad, built around the trees rather than in
              spite of them.
            </p>
            
            <div className="flex items-center gap-2 text-xs text-amber/60">
              <Sparkles className="w-3 h-3" />
              <span>Eco-luxury treehouse retreat</span>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-1.5 text-xs text-linen/40"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-3 h-3 text-amber/40" />
                  <span>{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-linen mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="text-linen/60 hover:text-amber transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber/30" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-linen mb-4 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-amber" />
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm">
              <motion.li 
                className="flex items-center gap-3 text-linen/60 hover:text-linen transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Phone className="w-4 h-4 text-amber" />
                </div>
                <a href="tel:+919999999999" className="hover:text-amber transition-colors">
                  +91 99999 99999
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-center gap-3 text-linen/60 hover:text-linen transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber" />
                </div>
                <a href="mailto:stay@aeriewayanad.com" className="hover:text-amber transition-colors">
                  stay@aeriewayanad.com
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-center gap-3 text-linen/60 hover:text-linen transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <MapPin className="w-4 h-4 text-amber" />
                </div>
                <span>Vythiri, Wayanad, Kerala</span>
              </motion.li>
              
              <motion.li 
                className="flex items-center gap-3 text-linen/60 hover:text-linen transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-amber" />
                </div>
                <span>WhatsApp Enquiry</span>
              </motion.li>
            </ul>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-amber font-medium hover:text-amber/80 transition-colors group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Message us on WhatsApp
            </motion.a>
          </motion.div>

          {/* Column 4 - Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-linen mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-amber" />
              Follow Along
            </h4>
            
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-linen/60 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -4,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-linen/60 mb-2 flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-amber" />
                Stay in the canopy loop
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-linen placeholder-linen/30 focus:outline-none focus:border-amber/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 bg-amber text-midnight rounded-lg text-xs font-semibold hover:bg-amber/80 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-linen/30">
              <span>🌟 Eco-certified</span>
              <span className="w-px h-3 bg-linen/10" />
              <span>🌿 Sustainable stays</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-6 border-t border-linen/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-linen/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <span>© {currentYear} Aerie Wayanad. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-amber/40" /> in the canopy
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-linen transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-linen transition-colors">Terms</a>
            <span>|</span>
            <span className="flex items-center gap-1">
              <TreePine className="w-3 h-3 text-amber/30" />
              Website by VertexFlow
            </span>
          </div>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber text-midnight shadow-lg shadow-amber/30 hover:shadow-xl hover:shadow-amber/40 transition-all duration-300 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}