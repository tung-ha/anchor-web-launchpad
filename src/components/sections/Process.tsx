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
      className="relative overflow-hidden bg-background py-24 text-primary md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 size-[30rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand uppercase">How it works</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold text-primary md:text-5xl">
          Four simple steps, start to finish
        </h2>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card transition-colors duration-300 hover:border-brand/50"
            >
              <span className="font-display text-5xl font-extrabold text-brand/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
