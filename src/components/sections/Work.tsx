import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredWork from "@/assets/featured-work.jpg";

/**
 * Featured project. Add more entries to this array as you complete projects —
 * the layout handles extra cards automatically.
 */
const projects = [
  {
    client: "Placeholder Client",
    industry: "Cafe · Adelaide",
    title: "A simple site that turns locals into regulars",
    body: "A one-page site with menu, opening hours, location and a click-to-call button — built so customers can find what they need in a couple of taps on their phone.",
    tags: ["One-page build", "Mobile-first", "Google Business setup"],
    image: featuredWork,
    url: "#contact",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-secondary/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">
          Featured work
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-primary md:text-4xl">
          Recent projects
        </h2>

        <div className="mt-12 grid gap-8">
          {projects.map((project) => (
            <article
              key={project.client}
              className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-2"
            >
              <img
                src={project.image}
                alt={`Website built for ${project.client}`}
                width={1280}
                height={960}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-wide text-brand-strong uppercase">
                  {project.industry}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-primary">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg" className="mt-8 rounded-xl" asChild>
                  <a href={project.url}>
                    View project <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
