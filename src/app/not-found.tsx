import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-3 font-display text-[36px] font-bold">We couldn’t find that page</h1>
      <div className="mt-8"><Button href="/">Back to home</Button></div>
    </section>
  );
}
