import { MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = ["Live in days, not months", "Fixed price, agreed upfront", "Looked after long term"];

export function Hero() {
  return (
    <section id="home" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3.5 py-1.5 text-xs font-medium text-primary-foreground/85">
          <MapPin className="size-3.5 text-brand" />
          Adelaide-based web design for local businesses
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] font-extrabold sm:text-5xl md:text-6xl">
          A website your customers can trust — live in days, not months.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          I build simple, fast websites for small Adelaide businesses and sole traders. You tell me
          about your business, I handle the rest — no jargon, no drawn-out process, no surprise
          invoices.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="brand" size="xl" asChild>
            <a href="#contact">Get a Free Quote</a>
          </Button>
          <Button variant="onNavy" size="xl" asChild>
            <a href="#work">See My Work</a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
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
