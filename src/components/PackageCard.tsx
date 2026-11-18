import Button from "./Button";
import { CheckIcon } from "./Icons";
import { WeddingPackage, rs, whatsappLink } from "@/data/site";

export default function PackageCard({ pkg }: { pkg: WeddingPackage }) {
  return (
    <article className={`relative flex flex-col rounded-2xl border-[1.5px] border-gold bg-white p-6 lg:p-8 ${pkg.featured ? "lg:-translate-y-3 shadow-xl" : ""}`}>
      {pkg.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
          Most popular
        </span>
      )}
      <p className="eyebrow">Wedding package</p>
      <h3 className="mt-2 font-display text-[28px] font-semibold text-maroon lg:text-[34px]">{pkg.name}</h3>
      <p className="mt-2 text-[13px] text-muted">
        From <span className="font-display text-[20px] font-semibold text-ink">{rs(pkg.price)}</span> per head
      </p>
      <ul className="mt-5 flex-1 space-y-2.5 text-[15px]">
        {pkg.includes.map((i) => (
          <li key={i} className="flex gap-2.5">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href={whatsappLink(`Hello, I would like to book a hall visit. Interested in the ${pkg.name} wedding package.`)} full>
          Book a hall visit
        </Button>
      </div>
    </article>
  );
}
