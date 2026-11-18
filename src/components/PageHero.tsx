export default function PageHero({ eyebrow, title, body, children }: { eyebrow: string; title: string; body?: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-sand bg-cream">
      <div className="container-x py-12 lg:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-[36px] font-bold leading-[1.12] lg:text-[60px]">{title}</h1>
        {body && <p className="mt-4 max-w-2xl text-[17px] text-muted">{body}</p>}
        {children}
      </div>
    </section>
  );
}
