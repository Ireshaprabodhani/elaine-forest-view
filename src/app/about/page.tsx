import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { PinIcon } from "@/components/Icons";
import { aboutPage as a, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About & Location",
  description: "The story of Elaine Forest View and how to find us in Monaragala — about 270 m from the clock tower.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={a.hero.eyebrow} title={a.hero.title} />
      <section className="container-x grid gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="space-y-4 text-[17px] text-muted">
          {a.story.split(/\n\s*\n/).filter(Boolean).map((para, i) => (
            <p key={i} className={a.story.startsWith("[") ? "rounded-xl border border-dashed border-gold bg-white p-5 text-ink" : ""}>{para}</p>
          ))}
        </div>
        <Photo caption={a.storyImageCaption} src={a.storyImage} className="aspect-[4/3] w-full" />
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-6 rounded-2xl border border-sand bg-cream p-6 sm:flex-row sm:items-center lg:p-8">
            <Photo caption="Photo: Elo" src={a.elo.image} rounded="rounded-full" className="h-28 w-28 shrink-0" />
            <div>
              <p className="eyebrow">Meet Elo</p>
              <h2 className="mt-1 font-display text-[24px] font-semibold">{a.elo.title}</h2>
              <p className="mt-2 text-[15px] text-muted">{a.elo.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-20">
        <div>
          <SectionHeading eyebrow="Location" title={a.locationTitle} />
          <p className="mt-4 flex gap-2 text-[17px]"><PinIcon className="mt-1 h-5 w-5 shrink-0 text-maroon" />{site.addressFull}</p>
          <p className="mt-2 text-[15px] text-muted">{a.locationNote}</p>
          <h3 className="mt-8 font-display text-[20px] font-semibold">Nearby</h3>
          <ul className="mt-3 space-y-3">
            {site.nearby.map((n) => (
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
