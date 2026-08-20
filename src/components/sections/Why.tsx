import { Store, Zap, Receipt, LifeBuoy } from "lucide-react";

const values = [
  {
    icon: Store,
    title: "Built for local businesses",
    body: "Not templates for a global audience — websites made for tradies, cafes, salons and consultants serving customers around Adelaide.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    body: "Most sites are live within one to two weeks. You get on with running your business while I get on with building it.",
  },
  {
    icon: Receipt,
    title: "Fixed, transparent pricing",
    body: "You get one clear price before anything starts. No hourly creep, no add-ons you didn't ask for, no surprises at the end.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    body: "I don't disappear once you've paid. Need new photos, prices or opening hours changed? Send me a message and it's done.",
  },
];

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">
        Why Anchor Web
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold text-primary md:text-5xl">
        Getting a website done shouldn't be stressful
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        You've probably been quoted too much, been ghosted, or been handed something you can't
        update. Here's how working with me is different.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div
            key={value.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-lift"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
            />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-strong ring-1 ring-brand/20 transition-colors duration-300 group-hover:bg-brand group-hover:text-primary">
              <value.icon className="size-7" strokeWidth={2} />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold text-primary">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
