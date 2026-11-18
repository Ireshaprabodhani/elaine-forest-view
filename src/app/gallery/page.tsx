import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryPage as g } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of rooms, weddings, dining and the hotel at Elaine Forest View, Monaragala.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow={g.hero.eyebrow} title={g.hero.title} body={g.hero.body} />
      <section className="container-x py-14 lg:py-20"><GalleryGrid /></section>
    </>
  );
}
