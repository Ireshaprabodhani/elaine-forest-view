import { site } from "@/data/site";

export default function MapEmbed({ className = "h-[280px] lg:h-[400px]" }: { className?: string }) {
  return (
    <iframe
      title={`Map showing ${site.name}`}
      src={site.mapEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full rounded-2xl border border-sand ${className}`}
    />
  );
}
