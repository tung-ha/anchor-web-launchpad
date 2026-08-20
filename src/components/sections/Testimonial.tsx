import { Quote } from "lucide-react";

const testimonial = {
  quote:
    "Without any brief, scope, or technology knowledge – we simply handed our business over and let the process happen. This trust was rewarded well. The website has managed to capture everything that is us, has the ability to function in both English and Vietnamese languages for our clients, and provides us with something we can be proud to show new clients. It is unusual to come across somebody who can convert an unclear concept into something like this without our continuous guidance.",
  name: "Vilaconic",
  role: "Adelaide",
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
