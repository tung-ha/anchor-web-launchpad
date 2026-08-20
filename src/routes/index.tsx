import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Why } from "@/components/sections/Why";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Testimonial } from "@/components/sections/Testimonial";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const title = "Anchor Web — Web Design for Small Adelaide Businesses";
const description =
  "Fast, fixed-price websites for Adelaide small businesses and sole traders. Live in days, not months, with ongoing support after launch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Anchor Web",
          description,
          areaServed: "Adelaide, South Australia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Adelaide",
            addressRegion: "SA",
            addressCountry: "AU",
          },
          email: "hello@anchorweb.com.au",
          telephone: "+61400000000",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Why />
        <Services />
        <Process />
        <Work />
        <Testimonial />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
