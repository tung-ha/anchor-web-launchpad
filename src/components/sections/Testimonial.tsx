import { Quote } from "lucide-react";

/** Swap this placeholder for a real quote when you have one. */
const testimonial = {
  quote:
    "I'd been putting off getting a website for two years because it felt like a huge job. It took one phone call and about a week — and I had three new enquiries in the first fortnight.",
  name: "Placeholder Name",
  role: "Owner, Placeholder Business — Adelaide",
};

export function Testimonial() {
  return (
    <section id="testimonial" className="mx-auto max-w-4xl px-5 py-20 md:py-24">
      <figure className="rounded-3xl border border-border bg-card p-9 text-center shadow-soft md:p-14">
        <Quote className="mx-auto size-8 text-brand" />
        <blockquote className="mt-6 font-display text-xl leading-relaxed font-medium text-primary md:text-2xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-7 text-sm text-muted-foreground">
          <span className="font-semibold text-secondary-foreground">{testimonial.name}</span>
          <br />
          {testimonial.role}
        </figcaption>
      </figure>
    </section>
  );
}
