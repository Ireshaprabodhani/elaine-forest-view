/**
 * Content is edited in the admin panel (/admin), which saves to the JSON
 * files in /content. This file only loads them and adds types + helpers.
 */
import settingsJson from "@content/settings.json";
import homeJson from "@content/home.json";
import roomsJson from "@content/rooms.json";
import weddingsJson from "@content/weddings.json";
import diningJson from "@content/dining.json";
import galleryJson from "@content/gallery.json";
import aboutJson from "@content/about.json";
import contactJson from "@content/contact.json";

export type Hero = { eyebrow: string; title: string; body?: string; image?: string; imageCaption?: string };
export type Photo = { image?: string; caption: string };
export type Room = { name: string; sleeps: string; details: string; price: string; image?: string; imageCaption: string };
export type WeddingPackage = { name: string; price: string; featured?: boolean; includes: string[] };
export type MenuItem = { name: string; price: string; featured?: boolean };
export type MenuGroup = { category: string; items: MenuItem[] };

type Settings = {
  name: string;
  restaurant: string;
  url: string;
  description: string;
  phoneDisplay: string;
  phoneIntl: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  address: { line1: string; street: string; city: string; region: string; country: string };
  mapsUrl: string;
  mapEmbed: string;
  ratingValue: number;
  ratingCount: number;
  restaurantHours: string;
  checkIn: string;
  checkOut: string;
  facebook: string;
  footerText: string;
  nearby: { place: string; distance: string }[];
};

const s = settingsJson as Settings;
const blank = (v?: string) => !v || /^_+$/.test(v.trim());

export const site = {
  ...s,
  url: s.url.replace(/\/$/, ""),
  addressFull: [s.address.line1, blank(s.address.street) ? "" : s.address.street, s.address.city, s.address.country]
    .filter(Boolean)
    .join(", "),
};

export const home = homeJson as {
  hero: Hero;
  offersTitle: string;
  offers: { title: string; body: string; link: string; image?: string; imageCaption: string }[];
  roomsSection: { title: string; body: string };
  weddingsSection: { title: string; body: string };
  diningSection: { title: string; photos: Photo[] };
  reviews: { quote: string; author: string }[];
  locationTitle: string;
};

export const roomsPage = roomsJson as {
  hero: Hero;
  rooms: Room[];
  amenities: string[];
  goodToKnow: string[];
  cta: { title: string; body: string };
};

export const weddingsPage = weddingsJson as {
  hero: Hero;
  packagesTitle: string;
  packagesBody: string;
  packages: WeddingPackage[];
  hallDetails: string[];
  eventTypes: string[];
  celebrations: Photo[];
  cta: { title: string; body: string };
};

export const diningPage = diningJson as {
  hero: { eyebrow: string; body: string; orderTypes: string; image?: string; imageCaption: string };
  menuTitle: string;
  menuTotalItems: number;
  menu: MenuGroup[];
};

export const galleryCategories = ["Rooms", "Weddings", "Dining", "Hotel"] as const;
export const galleryPage = galleryJson as {
  hero: Hero;
  photos: { caption: string; category: string; image?: string }[];
};

export const aboutPage = aboutJson as {
  hero: Hero;
  story: string;
  storyImage?: string;
  storyImageCaption: string;
  elo: { title: string; body: string; image?: string };
  locationTitle: string;
  locationNote: string;
};

export const contactPage = contactJson as {
  hero: Hero;
  formTitle: string;
  formNote: string;
  enquiryTopics: string[];
};

/** Shows "Rs 8,500" — or "Rs ____" while the price is still blank. */
export const rs = (price: string | number) => `Rs ${String(price).replace(/^\s*Rs\.?\s*/i, "") || "____"}`;

export const whatsappLink = (message = site.whatsappDefaultMessage) =>
  `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phoneIntl.replace(/\s/g, "")}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms/", label: "Rooms" },
  { href: "/weddings/", label: "Weddings & Events" },
  { href: "/dining/", label: "Dining" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
