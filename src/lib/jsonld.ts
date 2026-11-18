import { site } from "@/data/site";

const address = {
  "@type": "PostalAddress",
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  addressCountry: "LK",
};

export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    address,
    hasMap: site.mapsUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    amenityFeature: ["Air conditioning", "Free Wi-Fi", "Free parking", "Restaurant", "Banquet hall"].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.restaurant,
    url: `${site.url}/dining/`,
    telephone: site.phoneIntl,
    address,
    servesCuisine: ["Sri Lankan", "Chinese"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "23:00",
    },
    hasMenu: `${site.url}/dining/`,
  };
}

export function eventVenueJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: `${site.name} — Wedding & Event Hall`,
    url: `${site.url}/weddings/`,
    telephone: site.phoneIntl,
    address,
  };
}
