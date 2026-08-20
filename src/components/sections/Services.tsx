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
    <section id="services" className="bg-secondary/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">Services</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-primary md:text-4xl">
          Straightforward work, clearly explained
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift"
            >
              <service.icon className="size-6 text-brand-strong" />
              <h3 className="mt-5 text-lg font-semibold text-primary">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
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
