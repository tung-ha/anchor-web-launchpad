import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import vilaconic from "@/assets/work-vilaconic.jpg";

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
    <section id="work" className="bg-secondary/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-brand-strong uppercase">
          Featured project
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-primary md:text-4xl">
          A project I'm proud of.
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
                className="h-64 w-full object-cover object-top lg:h-full"
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
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Visit the live site <ArrowUpRight className="size-4" />
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
