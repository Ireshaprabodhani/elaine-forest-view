import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import CtaBanner from "@/components/CtaBanner";
import { CheckIcon } from "@/components/Icons";
import { roomsPage } from "@/data/site";

export const metadata: Metadata = {
  title: "Rooms",
  description: "Single, double and triple air-conditioned rooms in Monaragala town with hot water, free Wi-Fi and parking.",
  alternates: { canonical: "/rooms/" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow={roomsPage.hero.eyebrow} title={roomsPage.hero.title} body={roomsPage.hero.body} />
      <section className="container-x py-14 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {roomsPage.rooms.map((r) => <RoomCard key={r.name} room={r} />)}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <List title="In every room" items={roomsPage.amenities} />
          <List title="Good to know" items={roomsPage.goodToKnow} />
        </div>
      </section>
      <CtaBanner title={roomsPage.cta.title} body={roomsPage.cta.body} message="Hello, I would like to book a room. Dates: " />
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
