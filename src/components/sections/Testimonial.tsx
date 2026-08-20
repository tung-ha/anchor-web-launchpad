import { Quote } from "lucide-react";

const testimonial = {
  quote:
    "Without any brief, scope, or technology knowledge – we simply handed our business over and let the process happen. This trust was rewarded well. The website has managed to capture everything that is us, has the ability to function in both English and Vietnamese languages for our clients, and provides us with something we can be proud to show new clients. It is unusual to come across somebody who can convert an unclear concept into something like this without our continuous guidance.",
  name: "Vilaconic",
  role: "Adelaide",
};

export function Testimonial() {
  return (
    <section
      id="testimonial"
      className="border-y border-border bg-secondary/70 py-24 md:py-32"
    >
      <figure className="mx-auto max-w-4xl px-5 text-center">
        <Quote className="mx-auto size-10 text-brand" />
        <blockquote className="mt-8 font-display text-2xl leading-[1.35] font-semibold text-primary md:text-3xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-8 text-sm text-muted-foreground">
          <span className="font-semibold text-secondary-foreground">{testimonial.name}</span>
          <br />
          {testimonial.role}
        </figcaption>
      </figure>
    </section>
  );
}
