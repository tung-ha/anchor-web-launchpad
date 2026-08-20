import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[380px_1fr] lg:gap-16">
        <img
          src={portrait}
          alt="The person behind Anchor Web, working at a laptop"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full max-w-sm rounded-[2rem] object-cover shadow-lift"
        />

        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">About</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] font-extrabold text-primary md:text-5xl">
            Hi, I'm the person who'll actually build your site
          </h2>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm a web designer and developer based right here in {site.location}. Anchor Web is
              just me — so the person you talk to on the phone is the same person designing,
              building and looking after your website.
            </p>
            <p>
              I started this because too many local business owners have been burnt: overcharged,
              handed something they can't edit, or left waiting months for a site that never
              arrived. I'd rather keep things small, be easy to reach, and do good work for people
              in my own city.
            </p>
            <p>
              If you're not sure what you need yet, that's completely fine. Tell me about your
              business in plain English and I'll tell you honestly what would actually help.
            </p>
          </div>
          <Button variant="brand" size="xl" className="mt-9" asChild>
            <a href="#contact">Book a Free Chat</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
