import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/great-vibes/400.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { site } from "@/data/site";
import { hotelJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Hotel, Weddings & Restaurant in Monaragala`,
    template: `%s | ${site.name}, Monaragala`,
  },
  description: site.description,
  keywords: ["hotel in Monaragala", "wedding hall Monaragala", "Monaragala restaurant", "Elo's House", "Elaine Forest View"],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_LK",
    title: site.name,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#8B1C24" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd()) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
