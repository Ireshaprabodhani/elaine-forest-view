/**
 * ALL editable content for the website lives in this file.
 * To change a price, phone number, menu item or package, edit it here —
 * every page updates automatically.
 *
 * Anything marked "____" or "[Owner to add]" still needs real information
 * from the hotel.
 */

export const site = {
  name: "Elaine Forest View",
  restaurant: "Elo's House",
  // Change this to the real domain once it is bought (no trailing slash).
  url: "https://www.elaineforestview.lk",
  tagline: "Stay, dine and celebrate in the heart of Monaragala",
  description:
    "Rooms, weddings & events and dining at Elo's House — in the heart of Monaragala, Uva Province, Sri Lanka.",
  phoneDisplay: "077 664 7648",
  phoneIntl: "+94776647648",
  whatsappNumber: "94776647648",
  email: "elainenaturepark@gmail.com",
  address: {
    line1: "Elaine Forest View",
    street: "____", // [Owner to add] street name
    city: "Monaragala",
    region: "Uva Province",
    country: "Sri Lanka",
    full: "Elaine Forest View, Monaragala, Sri Lanka",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Elaine+Forest+View+Monaragala",
  mapEmbed:
    "https://www.google.com/maps?q=Elaine+Forest+View+Monaragala&output=embed",
  rating: { value: 4.6, count: 436 },
  restaurantHours: "Open daily, 7:00 am – 11:00 pm",
  checkIn: "____",
  checkOut: "____",
  facebook: "https://www.facebook.com/",
};

export const whatsappLink = (message = "Hello Elaine Forest View, I would like to know more.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phoneIntl}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms/", label: "Rooms" },
  { href: "/weddings/", label: "Weddings & Events" },
  { href: "/dining/", label: "Dining" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export type Room = {
  slug: string;
  name: string;
  details: string;
  sleeps: string;
  price: string; // e.g. "Rs 8,500" — "____" until the owner confirms
  photo: string; // caption shown until a real photo is added
  image?: string; // put the file in /public/images and set e.g. "/images/room-double.jpg"
};

export const rooms: Room[] = [
  {
    slug: "single",
    name: "Single Room",
    details: "Air-conditioned · private bathroom · hot water · Wi-Fi",
    sleeps: "1 guest",
    price: "____",
    photo: "Photo: single room, bed made, daylight",
  },
  {
    slug: "double",
    name: "Double Room",
    details: "Air-conditioned · private bathroom · hot water · Wi-Fi",
    sleeps: "2 guests",
    price: "____",
    photo: "Photo: double room with forest view",
  },
  {
    slug: "triple",
    name: "Triple Room",
    details: "Air-conditioned · private bathroom · hot water · Wi-Fi",
    sleeps: "3 guests",
    price: "____",
    photo: "Photo: triple room, wide shot",
  },
];

export const roomAmenities = [
  "Air conditioning",
  "Private bathroom with hot water",
  "Free Wi-Fi",
  "Free parking",
  "Room service from Elo's House",
  "Daily housekeeping",
];

export const goodToKnow = [
  `Check-in from ${site.checkIn}, check-out by ${site.checkOut}`,
  "Meals available at Elo's House, open 7:00 am – 11:00 pm",
  "About 270 m from the Monaragala clock tower",
  "Book directly on WhatsApp for the best rate",
];

export type WeddingPackage = {
  name: string;
  price: string;
  perHead?: boolean;
  featured?: boolean;
  includes: string[];
};

export const weddingPackages: WeddingPackage[] = [
  {
    name: "Silver",
    price: "____",
    includes: ["Air-conditioned hall", "Buffet menu", "Basic decoration", "Free parking"],
  },
  {
    name: "Gold",
    price: "____",
    featured: true,
    includes: [
      "Everything in Silver",
      "Upgraded buffet menu",
      "Poruwa & stage decoration",
      "Welcome drink",
    ],
  },
  {
    name: "Platinum",
    price: "____",
    includes: [
      "Everything in Gold",
      "Premium buffet menu",
      "Bridal room for the day",
      "Cake structure & table setup",
    ],
  },
];

export const hallDetails = [
  "Capacity: ___ guests",
  "Air-conditioned hall",
  "Free parking",
  "In-house kitchen & buffet",
  "Rooms for the bridal party",
];

export const eventTypes = [
  "Weddings",
  "Homecomings",
  "Engagements",
  "Birthdays",
  "Office parties",
  "Almsgivings",
  "Get-togethers",
];

export type MenuItem = { name: string; price: string; note?: string };
export type MenuGroup = { category: string; items: MenuItem[] };

// Prices are examples — copy the real ones from the Elo's House menu.
export const menu: MenuGroup[] = [
  {
    category: "Rice & Curry",
    items: [
      { name: "Chicken rice & curry", price: "Rs ____" },
      { name: "Fish rice & curry", price: "Rs ____" },
      { name: "Vegetable rice & curry", price: "Rs ____" },
    ],
  },
  {
    category: "Fried Rice",
    items: [
      { name: "Chicken fried rice", price: "Rs ____" },
      { name: "Seafood fried rice", price: "Rs ____" },
      { name: "Egg fried rice", price: "Rs ____" },
    ],
  },
  {
    category: "Kottu",
    items: [
      { name: "Chicken kottu", price: "Rs ____" },
      { name: "Cheese kottu", price: "Rs ____" },
      { name: "Egg kottu", price: "Rs ____" },
    ],
  },
  {
    category: "Devilled",
    items: [
      { name: "Devilled chicken", price: "Rs ____" },
      { name: "Devilled fish", price: "Rs ____" },
      { name: "Hot butter cuttlefish", price: "Rs ____" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Fresh fruit juice", price: "Rs ____" },
      { name: "Milkshake", price: "Rs ____" },
      { name: "Tea / coffee", price: "Rs ____" },
    ],
  },
];

export const menuTotalItems = 118;

// Paste REAL Google reviews here (with the reviewer's first name) — never write made-up ones.
export const reviews: { quote: string; author: string }[] = [
  { quote: "[Paste a real Google review here]", author: "Reviewer name · Google" },
  { quote: "[Paste a real Google review here]", author: "Reviewer name · Google" },
  { quote: "[Paste a real Google review here]", author: "Reviewer name · Google" },
];

export const nearby = [
  { place: "Monaragala clock tower", distance: "270 m" },
  { place: "Monaragala bus stand", distance: "____" },
  { place: "Monaragala hospital", distance: "____" },
  { place: "[Owner to add: nearby attraction]", distance: "____" },
];

export const galleryTabs = ["All", "Rooms", "Weddings", "Dining", "Hotel"] as const;

export const gallery: { caption: string; tab: (typeof galleryTabs)[number]; image?: string }[] = [
  { caption: "Hotel front at golden hour", tab: "Hotel" },
  { caption: "Double room", tab: "Rooms" },
  { caption: "Wedding hall set up", tab: "Weddings" },
  { caption: "Rice & curry spread", tab: "Dining" },
  { caption: "Poruwa ceremony", tab: "Weddings" },
  { caption: "Triple room", tab: "Rooms" },
  { caption: "Elo's House dining area", tab: "Dining" },
  { caption: "Garden & forest view", tab: "Hotel" },
  { caption: "Buffet table", tab: "Weddings" },
  { caption: "Single room", tab: "Rooms" },
  { caption: "Kottu & drinks", tab: "Dining" },
  { caption: "Reception & lobby", tab: "Hotel" },
];
