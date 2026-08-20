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
    <section id="why" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">
        Why Anchor Web
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold text-primary md:text-4xl">
        Getting a website done shouldn't be stressful
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        You've probably been quoted too much, been ghosted, or been handed something you can't
        update. Here's how working with me is different.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <value.icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary">{value.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
