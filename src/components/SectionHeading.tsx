export default function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`font-display text-[28px] font-semibold leading-tight lg:text-[40px] ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {body && <p className={`mt-3 text-[15px] lg:text-[17px] ${light ? "text-white/80" : "text-muted"}`}>{body}</p>}
    </div>
  );
}
