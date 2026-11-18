import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import CtaBanner from "@/components/CtaBanner";
import { CheckIcon } from "@/components/Icons";
import { goodToKnow, roomAmenities, rooms } from "@/data/site";

export const metadata: Metadata = {
  title: "Rooms",
  description: "Single, double and triple air-conditioned rooms in Monaragala town with hot water, free Wi-Fi and parking.",
  alternates: { canonical: "/rooms/" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Rooms" title="Rooms for every trip" body="Air-conditioned single, double and triple rooms in the centre of Monaragala. Message us on WhatsApp to check dates and get the best rate." />
      <section className="container-x py-14 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((r) => <RoomCard key={r.slug} room={r} />)}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <List title="In every room" items={roomAmenities} />
          <List title="Good to know" items={goodToKnow} />
        </div>
      </section>
      <CtaBanner title="Ready to book?" body="Send us your dates on WhatsApp — we usually reply within minutes." message="Hello, I would like to book a room. Dates: " />
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-sand bg-white p-6 lg:p-8">
      <h2 className="font-display text-[24px] font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 text-[15px]"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{i}</li>
        ))}
      </ul>
    </div>
  );
}
