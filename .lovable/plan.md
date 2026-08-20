# Anchor Web — One-Page Marketing Site

A single-page site for Anchor Web (Adelaide web design, solo operator), built mobile-first with smooth-scroll anchor navigation and copy written for a busy local business owner.

## Look and feel

- Deep navy #0F2A4A as the dominant solid colour (hero band, footer, headings), charcoal #1A1A1A–#2D2D2D for body text and secondary UI.
- Warm teal #14B8A6 used sparingly: primary CTA buttons, links, icons, hover states.
- Off-white #F8F9FA page background; alternating navy/off-white section bands for rhythm.
- Rounded corners, generous whitespace, strong type hierarchy, soft shadows. Micro-interactions only (button hover lift, link underline, subtle fade-in on scroll). No heavy animation.
- Typography: a confident geometric sans for headings paired with a highly readable body sans, loaded via a font link in the root head.

## Page sections (in order)

1. **Header** — sticky, off-white, "Anchor Web" text wordmark (isolated in its own component so a logo image swaps in easily), anchor nav (Home, Why, Services, Work, About, Contact), teal "Get a Free Quote" button. Mobile: hamburger sheet menu.
2. **Hero** — outcome headline ("A website your customers can trust — live in days, not months"), supporting line, primary CTA "Get a Free Quote", secondary "See My Work", small Adelaide trust line.
3. **Why Anchor Web** — 4 icon value props: Built for local businesses, Fast turnaround, Fixed transparent pricing, Ongoing support after launch.
4. **Services** — 4 simple cards: new website builds, small business landing pages, refreshes/redesigns, ongoing maintenance. No prices; each nudges to the quote CTA.
5. **How it works** — 4 numbered steps: Chat → Design → Build → Launch, each with one plain-English line.
6. **Featured work** — one prominent case-study card (image placeholder, client name, what was built, short result line) with layout room for more entries later.
7. **Testimonial** — styled pull-quote block with placeholder quote and attribution, easy to replace.
8. **About** — first-person bio, portrait placeholder, Adelaide-local emphasis, direct-contact reassurance.
9. **Contact** — form (name, business name, email, phone, message) plus visible email and phone, closing CTA "Let's get your business online properly".
10. **Footer** — navy band, wordmark, nav repeat, social placeholders, "Adelaide, SA", copyright.

## Contact form behaviour

The form validates fields client-side and shows a success toast on submit; it does not send anywhere yet (no backend in this plan). When you're ready for real enquiries to land in your inbox or a database, that's a follow-up step.

## Technical notes

- Rewrite `src/routes/index.tsx` as the single page, composing small section components under `src/components/sections/` — one file per section so copy edits are easy to find.
- Colour, radius, and font tokens defined in `src/styles.css` (`:root` in oklch + `@theme inline`); components use semantic tokens only, no hardcoded colour classes.
- Smooth scroll via `scroll-behavior: smooth` plus `scroll-margin-top` on section IDs so the sticky header doesn't overlap anchors.
- Icons from `lucide-react`; form built with existing shadcn input/textarea/button plus react-hook-form + zod validation; sonner toaster mounted in `__root.tsx`.
- SEO on the index route: unique title/description, og and twitter tags, single H1, semantic sections, alt text, plus LocalBusiness JSON-LD for Adelaide.
- Placeholder imagery generated as lightweight local assets (case-study screenshot mock, portrait) so nothing hotlinks externally.
