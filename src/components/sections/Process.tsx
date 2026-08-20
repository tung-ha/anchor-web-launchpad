import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Chat",
    body: "A quick, no-pressure conversation about your business and what you need. I'll send back a fixed price.",
  },
  {
    title: "Design",
    body: "I put together a layout and copy based on our chat. You see it early and tell me what to change.",
  },
  {
    title: "Build",
    body: "I build the site, make sure it's quick on phones, and set up your contact details and Google listing.",
  },
  {
    title: "Launch",
    body: "Your site goes live, you get a short walkthrough, and I'm still here whenever something needs updating.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 size-[30rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand uppercase">How it works</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold text-primary-foreground md:text-5xl">
          Four simple steps, start to finish
        </h2>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-[3.25rem] z-0 hidden items-center lg:flex"
          >
            <div className="h-0.5 flex-1 rounded-full bg-gradient-to-r from-brand/10 via-brand/30 to-brand/30" />
            <ArrowRight className="ml-2 size-5 shrink-0 text-brand/40" />
          </div>

          <ol className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative overflow-hidden rounded-3xl bg-[oklch(0.35_0.06_254.5)] p-8 shadow-card transition-colors duration-300 hover:bg-[oklch(0.38_0.06_254.5)]"
              >
                <span className="absolute -top-3 -right-2 font-display text-7xl font-extrabold leading-none text-brand/25 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <span className="font-display text-5xl font-extrabold leading-none text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-primary-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
