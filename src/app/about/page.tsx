import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { PinIcon } from "@/components/Icons";
import { nearby, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About & Location",
  description: "The story of Elaine Forest View and how to find us in Monaragala — about 270 m from the clock tower.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A family welcome in Monaragala" />
      <section className="container-x grid gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="space-y-4 text-[17px] text-muted">
          <p className="rounded-xl border border-dashed border-gold bg-white p-5 text-ink">
            [Owner to add: how Elaine Forest View started, who runs it, and what makes it special — 2–3 short paragraphs.]
          </p>
        </div>
        <Photo caption="Photo: the owner / team in front of the hotel" className="aspect-[4/3] w-full" />
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-6 rounded-2xl border border-sand bg-cream p-6 sm:flex-row sm:items-center lg:p-8">
            <Photo caption="Photo: Elo" rounded="rounded-full" className="h-28 w-28 shrink-0" />
            <div>
              <p className="eyebrow">Meet Elo</p>
              <h2 className="mt-1 font-display text-[24px] font-semibold">The heart of {site.restaurant}</h2>
              <p className="mt-2 text-[15px] text-muted">[Owner to add: a few lines about Elo and the restaurant.]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-20">
        <div>
          <SectionHeading eyebrow="Location" title="How to find us" />
          <p className="mt-4 flex gap-2 text-[17px]"><PinIcon className="mt-1 h-5 w-5 shrink-0 text-maroon" />{site.address.full}</p>
          <p className="mt-2 text-[15px] text-muted">About 270 m from the Monaragala clock tower.</p>
          <h3 className="mt-8 font-display text-[20px] font-semibold">Nearby</h3>
          <ul className="mt-3 space-y-3">
            {nearby.map((n) => (
              <li key={n.place} className="flex justify-between border-b border-sand pb-3 text-[15px]"><span>{n.place}</span><span className="font-semibold">{n.distance}</span></li>
            ))}
          </ul>
          <div className="mt-7"><Button href={site.mapsUrl} variant="secondary">Get directions</Button></div>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
