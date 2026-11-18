import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex flex-col items-start leading-none" aria-label="Elaine Forest View — home">
      <span className={`font-script text-[34px] lg:text-[40px] ${light ? "text-white" : "text-maroon"}`}>Elaine</span>
      <span className={`-mt-1 text-[9px] font-semibold tracking-[2.5px] ${light ? "text-gold" : "text-ink"}`}>
        FOREST VIEW · MONARAGALA
      </span>
    </Link>
  );
}
