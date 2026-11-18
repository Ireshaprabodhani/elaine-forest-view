import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { site, telLink, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or WhatsApp Elaine Forest View, Monaragala on 077 664 7648 for rooms, weddings, events and Elo's House orders.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const details = [
    { label: "Phone", value: site.phoneDisplay, href: telLink },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Address", value: site.address.full, href: site.mapsUrl },
    { label: `${site.restaurant} hours`, value: site.restaurantHours },
    { label: "Check-in / check-out", value: `${site.checkIn} / ${site.checkOut}` },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to us" body="The fastest way to reach us is WhatsApp. We're happy to answer questions about rooms, weddings and food orders.">
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={whatsappLink()} variant="whatsapp">WhatsApp us</Button>
          <Button href={telLink} variant="secondary" icon="phone">Call {site.phoneDisplay}</Button>
        </div>
      </PageHero>
      <section className="container-x grid gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <dl className="divide-y divide-sand rounded-2xl border border-sand bg-white">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col gap-1 p-5 sm:flex-row sm:justify-between sm:gap-6">
                <dt className="text-[13px] font-semibold text-muted">{d.label}</dt>
                <dd className="text-[15px] sm:text-right">
                  {d.href ? <a href={d.href} className="break-all text-maroon hover:underline">{d.value}</a> : d.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6"><MapEmbed className="h-[280px]" /></div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
