import { Globe, Rocket, Paintbrush, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Simple website builds",
    body: "A clean 3–5 page site: what you do, who you are, and how to contact you. Everything a customer needs to pick up the phone.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    body: "One focused page for a new service, a promotion or your Google Ads. Built to turn visitors into enquiries.",
  },
  {
    icon: Paintbrush,
    title: "Refreshes & redesigns",
    body: "Already have a site that looks dated or doesn't work on phones? I'll modernise it without starting from scratch.",
  },
  {
    icon: Wrench,
    title: "Maintenance & updates",
    body: "Hosting sorted, backups running, and content changes handled whenever you need them. One less thing on your list.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/70 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">Services</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold text-primary md:text-5xl">
          Straightforward work, clearly explained
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex gap-5 rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-lift"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-primary">
                <service.icon className="size-6" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button variant="brand" size="xl" asChild>
            <a href="#contact">
              Get a Free Quote <ArrowRight className="size-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Every quote is fixed price and sent through before any work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
