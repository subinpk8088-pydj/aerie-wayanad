export const WHATSAPP_NUMBER = "919999999999";
export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Treehouses", path: "/treehouses" },
  { label: "Experiences", path: "/experiences" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const TREEHOUSES = [
  {
    id: 1,
    name: "The Canopy View",
    height: "32 ft above ground",
    blurb: "A single-tree cabin with a glass floor panel over the forest bed and a private soaking tub on the deck.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80",
    price: 8900,
    capacity: "2 Adults",
    tags: ["Glass Floor Panel", "Outdoor Tub", "Jungle View"],
  },
  {
    id: 2,
    name: "Machaan Twin Nest",
    height: "24 ft above ground",
    blurb: "Two linked cabins on a shared platform, connected by a rope-and-plank bridge over the ferns.",
    image: "https://images.unsplash.com/photo-1518602164578-cd0074062767?w=900&q=80",
    price: 11500,
    capacity: "4 Adults",
    tags: ["Linked Bridge", "Shared Deck", "Family Friendly"],
  },
  {
    id: 3,
    name: "The Grand Nest",
    height: "40 ft above ground",
    blurb: "The estate's highest cabin, wrapped in a 270° deck with uninterrupted views into the Western Ghats.",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=900&q=80",
    price: 15900,
    capacity: "2 Adults",
    tags: ["270° Deck", "Highest Cabin", "Sunset View"],
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    time: "Dawn",
    title: "Canopy Birdwatch",
    desc: "Step onto the deck as hornbills and malabar trogons move through the upper canopy at first light.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
  },
  {
    id: 2,
    time: "Midday",
    title: "Rope Bridge Trail",
    desc: "A guided walk across three suspension bridges strung between the estate's oldest rosewood trees.",
    image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&q=80",
  },
  {
    id: 3,
    time: "Dusk",
    title: "Deck-Side Bonfire",
    desc: "A private bonfire lit on your own treehouse deck, with a spiced Wayanad coffee service.",
    image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&q=80",
  },
  {
    id: 4,
    time: "Night",
    title: "Firefly & Star Watch",
    desc: "On clear nights, fireflies rise through the trees below your deck as the canopy goes dark.",
    image: "https://images.unsplash.com/photo-1475738972911-e5c0d70c2f22?w=800&q=80",
  },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80",
  "https://images.unsplash.com/photo-1518602164578-cd0074062767?w=700&q=80",
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=700&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
  "https://images.unsplash.com/photo-1516214104703-d870798883c5?w=700&q=80",
  "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=700&q=80",
  "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
];

export const TESTIMONIALS = [
  { name: "Rahul & Divya", text: "Falling asleep to the sound of the stream 30 feet below, then waking up to hornbills outside the window. Worth every rupee.", initials: "RD" },
  { name: "Fatima N.", text: "The glass floor panel in the Canopy View room is not a gimmick, it genuinely changes how you experience the forest.", initials: "FN" },
  { name: "Ben O.", text: "Best treehouse stay we've done anywhere, and we've tried a few. The rope bridge walk with the naturalist was a real highlight.", initials: "BO" },
];

export const STATS = [
  { value: 40, suffix: " ft", label: "highest cabin above the forest floor" },
  { value: 3, suffix: "", label: "treehouses, spaced for total privacy" },
  { value: 15, suffix: "+", label: "acres of private forest canopy" },
];
