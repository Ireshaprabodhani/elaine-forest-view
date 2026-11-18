import Button from "./Button";
import { site, telLink, whatsappLink } from "@/data/site";

export default function CtaBanner({ title, body, message }: { title: string; body: string; message?: string }) {
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-maroon p-8 text-white lg:flex-row lg:items-center lg:justify-between lg:p-12">
        <div>
          <h2 className="font-display text-[26px] font-semibold lg:text-[34px]">{title}</h2>
          <p className="mt-2 text-white/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={whatsappLink(message)} variant="whatsapp">WhatsApp us</Button>
          <Button href={telLink} variant="light" icon="phone">{site.phoneDisplay}</Button>
        </div>
      </div>
    </section>
  );
}
