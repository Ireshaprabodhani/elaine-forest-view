import Link from "next/link";
import Logo from "./Logo";
import { nav, site, telLink, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-[14px] text-white/75">
            {site.footerText}
          </p>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Visit</h3>
          <address className="text-[14px] not-italic leading-relaxed text-white/85">
            {site.address.line1}
            <br />
            {site.address.street && !/^_+$/.test(site.address.street) && (<>{site.address.street}<br /></>)}
            {site.address.city}, {site.address.region}
            <br />
            {site.address.country}
          </address>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[14px] font-semibold text-gold hover:underline">
            Get directions →
          </a>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Contact</h3>
          <ul className="space-y-2 text-[14px] text-white/85">
            <li><a href={telLink} className="hover:text-white">{site.phoneDisplay}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></li>
            <li>{site.restaurant}: {site.restaurantHours.replace("Open daily, ", "")}</li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Explore</h3>
          <ul className="grid grid-cols-2 gap-2 text-[14px] text-white/85 lg:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-[13px] text-white/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
