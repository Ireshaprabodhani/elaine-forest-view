import { WhatsAppIcon } from "./Icons";
import { whatsappLink } from "@/data/site";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-30 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
