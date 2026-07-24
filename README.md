# Aerie Wayanad

A 5-page animated site for a premium treehouse retreat in Wayanad, built with React, React Router, Tailwind CSS, and Framer Motion.

## Pages

- **Home** — night canopy hero with drifting firefly particles and a branch silhouette, animated stats, philosophy pillars, featured treehouses, experience teaser, testimonial, CTA banner
- **Treehouses** (`/treehouses`) — cabin cards that expand into a shared-layout animated detail view
- **Experiences** (`/experiences`) — a vertical, alternating dawn-to-night timeline connected by a center line
- **Gallery** (`/gallery`) — masonry photo grid with a full lightbox
- **Contact** (`/contact`) — enquiry form that opens WhatsApp with pre-filled details, plus map

Animations used: firefly particle drift and branch silhouette in the hero, page-transition fades on route change, scroll-reveal on every section, animated count-up stats, hover scale/tilt on cards and images, shared-layout modal transitions on the Treehouses page, and a pulsing WhatsApp button on the sticky mobile bar.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Before deploying

- Replace `WHATSAPP_NUMBER` in `src/data.js` with the real number (country code, no `+` or spaces).
- Swap the Unsplash placeholder images in `src/data.js` for real treehouse photos.
- Update the phone number in `src/App.jsx` (sticky CTA) and `src/components/Footer.jsx`.
- Replace the Google Maps embed query in `src/pages/Contact.jsx` with the actual property location.
- Update social links in the footer.
