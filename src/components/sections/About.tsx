import { Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const abstractImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 size-[34rem] rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-5">
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-brand shadow-lift">
            <Anchor className="size-7" strokeWidth={2} />
          </span>
          <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">About</p>
        </div>

        <h2 className="mt-7 font-display text-4xl leading-[1.05] font-extrabold text-primary md:text-6xl">
          Hi, I'm the person who'll actually build your site
        </h2>

        <p className="mt-9 border-l-4 border-brand pl-6 font-display text-2xl leading-[1.3] font-bold text-primary md:text-3xl">
          I'm a web designer and developer based right here in {site.location} — I'm your main
          point of contact from the first chat through to launch and beyond.
        </p>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Behind the scenes, I work with a small network of designers and developers when a
            project needs extra hands, so you get the responsiveness of dealing with one person,
            backed by real capacity when it matters.
          </p>
          <p>
            I started this because too many local business owners have been burnt: overcharged,
            handed something they can't edit, or left waiting months for a site that never arrived.
            I'd rather keep things personal, be easy to reach, and do good work for people in my own
            city.
          </p>
          <p>
            If you're not sure what you need yet, that's completely fine. Tell me about your
            business in plain English and I'll tell you honestly what would actually help.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] shadow-lift">
          <img
            src={abstractImage}
            alt="Abstract navy and teal light trails suggesting momentum and craft"
            width={1600}
            height={600}
            loading="lazy"
            className="h-44 w-full object-cover md:h-56"
          />
        </div>

        <Button variant="brand" size="xl" className="mt-10" asChild>
          <a href="#contact">Book a Free Chat</a>
        </Button>
      </div>
    </section>
  );
}
