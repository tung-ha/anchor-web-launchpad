import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import vilaconic from "@/assets/work-vilaconic.jpg";

const testimonial = {
  quote:
    "Without any brief, scope, or technology knowledge – we simply handed our business over and let the process happen. This trust was rewarded well. The website has managed to capture everything that is us, has the ability to function in both English and Vietnamese languages for our clients, and provides us with something we can be proud to show new clients. It is unusual to come across somebody who can convert an unclear concept into something like this without our continuous guidance.",
  name: "Vilaconic",
  role: "Adelaide",
};

/**
 * Featured project. Add more entries to this array as you complete projects —
 * the layout handles extra cards automatically.
 */
const projects = [
  {
    client: "Vilaconic",
    industry: "Wholesale food importer · Adelaide",
    title: "A full brand and website built from a blank page",
    body: "Vilaconic imports Vietnamese and South-East Asian food for Australian restaurants, grocers and distributors. They came to me without a brief, a scope or any tech know-how — just a business and a need to be taken seriously online. I handled everything: structure, copy direction, photography treatment, bilingual Vietnamese/English content and the build, then handed back a site they can send to buyers with confidence.",
    tags: ["Full site build", "Bilingual VI/EN", "Product catalogue", "Enquiry funnel"],
    image: vilaconic,
    url: "https://vilaconic.vercel.app/",
  },
];

export function Work() {
  return (
    <section id="work" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">
          Featured project
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold text-primary md:text-6xl">
          A project I'm proud of.
        </h2>
      </div>

      <div className="mt-14 space-y-24">
        {projects.map((project) => (
          <article
            key={project.client}
            className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16"
          >
            <div
              aria-hidden
              className="absolute inset-y-8 right-0 hidden w-2/3 rounded-l-[2.5rem] bg-secondary/70 lg:block"
            />

            <div className="relative lg:pl-[max(1.25rem,calc((100vw-72rem)/2))]">
              <img
                src={project.image}
                alt={`Website built for ${project.client}`}
                width={1280}
                height={960}
                loading="lazy"
                className="h-72 w-full object-cover object-top shadow-lift sm:h-96 lg:h-[34rem] lg:rounded-r-[2.5rem]"
              />
            </div>

            <div className="relative px-5 lg:pr-[max(1.25rem,calc((100vw-72rem)/2))] lg:pl-0">
              <p className="text-xs font-semibold tracking-wide text-brand-strong uppercase">
                {project.industry}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-[1.1] font-extrabold text-primary md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{project.body}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-medium text-brand-strong ring-1 ring-brand/20"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <figure className="mt-9 rounded-3xl border border-border bg-card p-7 shadow-card">
                <Quote className="size-8 text-brand" />
                <blockquote className="mt-4 text-base leading-relaxed text-secondary-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  <span className="font-semibold text-secondary-foreground">
                    {testimonial.name}
                  </span>
                  <br />
                  {testimonial.role}
                </figcaption>
              </figure>

              <Button variant="brand" size="xl" className="mt-9" asChild>
                <a href={project.url} target="_blank" rel="noreferrer">
                  Visit the live site <ArrowUpRight className="size-4" />
                </a>
              </Button>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
