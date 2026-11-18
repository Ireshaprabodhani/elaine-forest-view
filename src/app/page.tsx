import Link from "next/link";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import RoomCard from "@/components/RoomCard";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/SectionHeading";
import MapEmbed from "@/components/MapEmbed";
import { PinIcon } from "@/components/Icons";
import { diningPage, home, roomsPage, rs, site, weddingsPage, whatsappLink } from "@/data/site";

export default function Home() {
  const allDishes = diningPage.menu.flatMap((g) => g.items);
  const featured = allDishes.filter((d) => d.featured);
  const featuredDishes = (featured.length ? featured : allDishes).slice(0, 6);
  const pkg = weddingsPage.packages.find((p) => p.featured) ?? weddingsPage.packages[0];
  const [p1, p2, p3] = home.diningSection.photos;
  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow mb-4">{home.hero.eyebrow}</p>
          <h1 className="font-display text-[36px] font-bold leading-[1.12] lg:text-[60px] lg:leading-[1.1]">{home.hero.title}</h1>
          <p className="mt-5 max-w-xl text-[17px] text-muted">
            {home.hero.body}
          </p>
          <p className="mt-5 text-[15px]">
            <span className="text-gold" aria-hidden="true">★★★★★</span>{" "}
            <strong>{site.ratingValue}</strong> · {site.ratingCount} Google reviews
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={whatsappLink("Hello, I would like to book a room. Dates: ")} variant="whatsapp">Book on WhatsApp</Button>
            <Button href="/rooms/" variant="secondary">View rooms</Button>
          </div>
        </div>
        <Photo caption={home.hero.imageCaption ?? ""} src={home.hero.image} className="aspect-[4/3] w-full lg:aspect-[5/4]" />
      </section>

      {/* What we offer */}
      <section className="bg-white py-14 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What we offer" title={home.offersTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {home.offers.map((o) => (
              <Link key={o.title} href={o.link} className="group overflow-hidden rounded-2xl border border-sand bg-cream">
                <Photo caption={o.imageCaption} src={o.image} rounded="rounded-none" className="h-[200px] w-full" />
                <div className="p-5">
                  <h3 className="font-display text-[20px] font-semibold group-hover:text-maroon">{o.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{o.body}</p>
                  <span className="mt-3 inline-block text-[14px] font-semibold text-maroon">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="container-x py-14 lg:py-24">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Rooms" title={home.roomsSection.title} body={home.roomsSection.body} />
          <Button href="/rooms/" variant="secondary">All rooms</Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {roomsPage.rooms.map((r) => <RoomCard key={r.name} room={r} />)}
        </div>
      </section>

      {/* Weddings */}
      <section className="bg-maroon-dark py-14 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading light eyebrow="Weddings & events" title={home.weddingsSection.title} body={home.weddingsSection.body} />
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/weddings/" variant="light">See all packages</Button>
              <Button href={whatsappLink("Hello, I would like to ask about a wedding / event date.")} variant="whatsapp">Check a date</Button>
            </div>
          </div>
          <div className="max-w-md lg:justify-self-end">
            {pkg && <PackageCard pkg={pkg} />}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="container-x grid gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow={site.restaurant} title={home.diningSection.title} body={`${site.restaurantHours}. Dine in, takeaway or delivery.`} />
          <ul className="mt-8 divide-y divide-sand border-y border-sand">
            {featuredDishes.map((d) => (
              <li key={d.name} className="flex items-center justify-between py-4">
                <span className="text-[17px]">{d.name}</span>
                <span className="font-display text-[18px] font-semibold text-maroon">{rs(d.price)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7"><Button href="/dining/">View the menu</Button></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Photo caption={p1?.caption ?? ""} src={p1?.image} className="aspect-square w-full" />
          <Photo caption={p2?.caption ?? ""} src={p2?.image} className="aspect-square w-full" />
          <Photo caption={p3?.caption ?? ""} src={p3?.image} className="col-span-2 aspect-[2/1] w-full" />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand py-14 lg:py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Guest reviews" title={`Rated ${site.ratingValue} by ${site.ratingCount} guests on Google`} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {home.reviews.map((r, i) => (
              <figure key={i} className="rounded-2xl bg-white p-6">
                <div className="text-gold" aria-hidden="true">★★★★★</div>
                <blockquote className="mt-3 font-display text-[18px] leading-snug">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-[13px] text-muted">{r.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow="Location" title={home.locationTitle} />
          <p className="mt-4 flex gap-2 text-[17px]"><PinIcon className="mt-1 h-5 w-5 shrink-0 text-maroon" />{site.addressFull}</p>
          <ul className="mt-6 space-y-3">
            {site.nearby.map((n) => (
              <li key={n.place} className="flex justify-between border-b border-sand pb-3 text-[15px]">
                <span>{n.place}</span><span className="font-semibold">{n.distance}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7"><Button href={site.mapsUrl} variant="secondary">Get directions</Button></div>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
