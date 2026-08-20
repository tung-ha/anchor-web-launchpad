import { MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = ["Live in days, not months", "Fixed price, agreed upfront", "Looked after long term"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3.5 py-1.5 text-xs font-medium text-primary-foreground/85">
          <MapPin className="size-3.5 text-brand" />
          Adelaide-based web design for local businesses
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-8xl">
          A website your customers can trust — live in days, not months.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          I build simple, fast websites for small Adelaide businesses and sole traders. You tell me
          about your business, I handle the rest — no jargon, no drawn-out process, no surprise
          invoices.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button variant="brand" size="xl" asChild>
            <a href="#contact">Get a Free Quote</a>
          </Button>
          <Button variant="onNavy" size="xl" asChild>
            <a href="#work">See My Work</a>
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-primary-foreground/10 pt-8">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Check className="size-4 text-brand" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
