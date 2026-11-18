import type { Metadata } from "next";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { CheckIcon } from "@/components/Icons";
import { telLink, weddingsPage as w, whatsappLink } from "@/data/site";
import { eventVenueJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Weddings & Events",
  description: "Wedding and event hall in Monaragala with air conditioning, in-house buffet, free parking and rooms for the bridal party.",
  alternates: { canonical: "/weddings/" },
};

export default function WeddingsPage() {
  return (
    <>
      <JsonLd data={eventVenueJsonLd()} />
      <section className="border-b border-sand">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow mb-3">{w.hero.eyebrow}</p>
            <h1 className="font-display text-[36px] font-bold leading-[1.12] lg:text-[60px]">{w.hero.title}</h1>
            <p className="mt-4 text-[17px] text-muted">{w.hero.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={whatsappLink("Hello, I would like to book a hall visit.")}>Book a hall visit</Button>
              <Button href={telLink} variant="secondary" icon="phone">Call us</Button>
            </div>
          </div>
          <Photo caption={w.hero.imageCaption ?? ""} src={w.hero.image} className="aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="bg-maroon-dark py-14 lg:py-24">
        <div className="container-x">
          <SectionHeading light center eyebrow="Packages" title={w.packagesTitle} body={w.packagesBody} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {w.packages.map((p) => <PackageCard key={p.name} pkg={p} />)}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow="The hall" title="Hall details" />
          <ul className="mt-6 space-y-3">
            {w.hallDetails.map((h) => (
              <li key={h} className="flex gap-2.5 border-b border-sand pb-3 text-[17px]"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold" />{h}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="We host" title="Events of every kind" />
          <div className="mt-6 flex flex-wrap gap-2.5">
            {w.eventTypes.map((e) => (
              <span key={e} className="rounded-full border border-sand bg-white px-4 py-2 text-[14px] font-medium">{e}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="Recent celebrations" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {w.celebrations.map((c, i) => (
              <Photo key={i} caption={c.caption} src={c.image} className="aspect-square w-full" />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={w.cta.title} body={w.cta.body} message="Hello, I am planning a wedding / event. Date: , Guests: " />
    </>
  );
}
