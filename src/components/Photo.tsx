import { ImageIcon } from "./Icons";

/**
 * Shows a real photo when `src` is given, otherwise a placeholder
 * that says which photo belongs here.
 */
export default function Photo({
  caption,
  src,
  className = "",
  rounded = "rounded-2xl",
}: {
  caption: string;
  src?: string | null;
  className?: string;
  rounded?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={caption} loading="lazy" className={`${rounded} object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={caption}
      className={`flex flex-col items-center justify-center gap-2 bg-placeholder p-4 text-center text-muted ${rounded} ${className}`}
    >
      <ImageIcon />
      <span className="max-w-[260px] text-[13px] leading-snug">{caption}</span>
    </div>
  );
}
