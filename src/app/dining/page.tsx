import type { Metadata } from "next";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import MenuTabs from "@/components/MenuTabs";
import JsonLd from "@/components/JsonLd";
import { menu, menuTotalItems, site, telLink, whatsappLink } from "@/data/site";
import { restaurantJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Dining at Elo's House",
  description: "Elo's House restaurant in Monaragala — rice & curry, kottu, fried rice, devilled dishes and drinks. Open daily 7 am – 11 pm. Dine in, takeaway and delivery.",
  alternates: { canonical: "/dining/" },
};

export default function DiningPage() {
  return (
    <>
      <JsonLd data={restaurantJsonLd()} />
      <section className="border-b border-sand">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow mb-3">Dining</p>
            <h1 className="font-display text-[36px] font-bold leading-[1.12] lg:text-[60px]">{site.restaurant}</h1>
            <p className="mt-4 text-[17px] text-muted">Home-style Sri Lankan and Chinese favourites, cooked fresh in our kitchen.</p>
            <dl className="mt-6 grid gap-3 text-[15px] sm:grid-cols-2">
              <div className="rounded-xl border border-sand bg-white p-4"><dt className="eyebrow">Hours</dt><dd className="mt-1">{site.restaurantHours}</dd></div>
              <div className="rounded-xl border border-sand bg-white p-4"><dt className="eyebrow">Order</dt><dd className="mt-1">Dine in · Takeaway · Delivery</dd></div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={telLink} icon="phone">Call to order</Button>
              <Button href={whatsappLink("Hello Elo's House, I would like to place an order: ")} variant="whatsapp">WhatsApp order</Button>
            </div>
          </div>
          <Photo caption="Photo: Elo's House dining area with food on the table" className="aspect-[4/3] w-full" />
        </div>
      </section>
      <section className="container-x py-14 lg:py-20">
        <p className="eyebrow mb-3">Menu</p>
        <h2 className="mb-8 font-display text-[28px] font-semibold lg:text-[40px]">Popular dishes</h2>
        <MenuTabs groups={menu} />
        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl bg-sand p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px]">Our full menu has <strong>{menuTotalItems} items</strong>. Ask us for the full list on WhatsApp.</p>
          <Button href={whatsappLink("Hello Elo's House, please send me the full menu.")} variant="secondary">View full menu ({menuTotalItems} items)</Button>
        </div>
      </section>
    </>
  );
}
