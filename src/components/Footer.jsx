import React from "react";
import { TreePine, Phone, MapPin, MessageCircle } from "lucide-react";
import { waLink } from "../data";

export default function Footer() {
  return (
    <footer className="bg-midnight text-linen/85 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TreePine className="w-5 h-5 text-amber" />
            <span className="font-display italic text-2xl text-linen">Aerie</span>
          </div>
          <p className="text-sm text-linen/60 leading-relaxed">
            Three treehouses set deep in private forest canopy in Wayanad, built around the trees rather than in
            spite of them.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-linen mb-4">Reach Us</h4>
          <ul className="space-y-2.5 text-sm text-linen/60">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Enquiry</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Vythiri, Wayanad, Kerala</li>
          </ul>
          <a
            href={waLink("Hi! I'd like to enquire about a stay at Aerie Wayanad.")}
            target="_blank" rel="noreferrer"
            className="inline-block mt-4 text-sm text-amber font-medium hover:underline"
          >
            Message us on WhatsApp →
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-linen mb-4">Follow Along</h4>
          <div className="flex gap-4 text-sm text-linen/60">
            <a href="#" className="hover:text-linen">Instagram</a>
            <a href="#" className="hover:text-linen">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-linen/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-linen/40">
        <span>© {new Date().getFullYear()} Aerie Wayanad. All rights reserved.</span>
        <span>Website Built by VertexFlow Digital Solutions</span>
      </div>
    </footer>
  );
}
