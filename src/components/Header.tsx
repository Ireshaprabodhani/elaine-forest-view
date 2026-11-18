"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";
import { nav, site, telLink, whatsappLink } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-cream/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between lg:h-[88px]">
        <Logo />

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors hover:text-maroon ${
                isActive(item.href) ? "text-maroon underline decoration-2 underline-offset-8" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href={telLink} variant="secondary" icon="phone">
            {site.phoneDisplay}
          </Button>
          <Button href={whatsappLink()} variant="whatsapp">
            WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <a
            href={telLink}
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-4 py-2.5 text-[14px] font-semibold text-white"
          >
            <PhoneIcon className="h-4 w-4" /> Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-1 text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-cream xl:hidden">
          <nav className="container-x flex flex-col py-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-sand py-4 font-display text-[22px] font-semibold ${
                  isActive(item.href) ? "text-maroon" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Button href={whatsappLink()} variant="whatsapp" full>
                WhatsApp us
              </Button>
              <Button href={telLink} variant="secondary" icon="phone" full>
                Call {site.phoneDisplay}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
