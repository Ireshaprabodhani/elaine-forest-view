import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of rooms, weddings, dining and the hotel at Elaine Forest View, Monaragala.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A look around" body="Rooms, celebrations, food and the hotel itself." />
      <section className="container-x py-14 lg:py-20"><GalleryGrid /></section>
    </>
  );
}
