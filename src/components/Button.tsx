import Link from "next/link";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

type Variant = "primary" | "secondary" | "light" | "whatsapp";

const styles: Record<Variant, string> = {
  primary: "bg-maroon text-white hover:bg-maroon-dark",
  secondary: "border-[1.5px] border-maroon text-maroon hover:bg-maroon hover:text-white",
  light: "bg-white text-maroon hover:bg-cream",
  whatsapp: "bg-whatsapp text-white hover:brightness-95",
};

type Props = {
  href: string;
  variant?: Variant;
  icon?: "whatsapp" | "phone";
  full?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ href, variant = "primary", icon, full, children, className = "" }: Props) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-[22px] py-[14px] text-[15px] font-semibold leading-none transition-colors ${styles[variant]} ${full ? "w-full" : ""} ${className}`;
  const iconEl =
    icon === "whatsapp" || (variant === "whatsapp" && !icon) ? (
      <WhatsAppIcon className="h-5 w-5" />
    ) : icon === "phone" ? (
      <PhoneIcon className="h-[18px] w-[18px]" />
    ) : null;

  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {iconEl}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {iconEl}
      {children}
    </Link>
  );
}
