# Torsbeanie

Family-run corner cafe, catering food truck, and bakery in Halstead, Essex — built with Next.js (App Router), TypeScript, Tailwind CSS, and Radix UI primitives. Deployed on Netlify.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project structure

- `app/` — root layout, global styles, SEO routes (`sitemap.ts`, `robots.ts`), generated `icon.tsx` / `opengraph-image.tsx`, and the single-page route (`app/page.tsx`)
- `components/` — one file per page section (navbar, hero, about, services, menu, testimonials, contact, footer) plus `structured-data.tsx` (JSON-LD)
- `components/ui/` — small shadcn-style primitives (button, tabs, card, badge, input, label, textarea, select) built on Radix UI
- `lib/site-data.ts` — **single source of truth** for business details (address, phone, email, Facebook, map coordinates, opening hours)
- `lib/menu-data.ts` — cafe & food truck menu content
- `lib/testimonials-data.ts` — testimonial content
- `public/images/` — site photography (see [Photos](#photos))

## Editing content

- Menu items/prices: `lib/menu-data.ts`
- Testimonials: `lib/testimonials-data.ts`
- Contact details, map coordinates, and opening hours: `lib/site-data.ts` — this is imported by the contact section, footer, and JSON-LD structured data, so it can never drift out of sync. **A `TODO(owner)` comment at the top of that file flags that every value needs verifying against the real business before launch.**

## Contact form (Formspree)

The enquiry form submits directly to [Formspree](https://formspree.io) — no custom backend or mail server required, so it works reliably on Netlify's static/serverless hosting.

1. Create a free form at https://formspree.io and copy its endpoint, e.g. `https://formspree.io/f/abcd1234`.
2. Set it as an environment variable:
   ```bash
   # .env.local (not committed)
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcd1234
   ```
3. On Netlify, add the same variable under Site settings → Environment variables, then redeploy.

Until a real endpoint is configured, the form falls back to a placeholder URL (see `.env.example`) and submissions will fail — the UI will show its error state rather than a false success.

The form includes a hidden `_gotcha` honeypot field for basic spam protection (Formspree ignores submissions where it's filled in).

## Map

The contact section embeds a Google Map via the no-API-key `https://www.google.com/maps/embed?pb=...` format. The current URL in `components/contact.tsx` (`MAP_EMBED_SRC`) is a placeholder — replace it with the real one:

1. Open Google Maps and search for the business address.
2. Click **Share → Embed a map**.
3. Copy the `src="..."` value from the provided `<iframe>` and paste it in place of `MAP_EMBED_SRC` in `components/contact.tsx` (marked with a `TODO` comment).

## Photos

`public/images/` currently contains solid-colour placeholder PNGs (not stock photos) so every image slot renders something intentional rather than a broken image icon. Replace the file contents with real photos **using the exact same filenames** and no code changes are needed:

| Filename                          | Used in                               | Suggested photo                   |
| ---------------------------------- | -------------------------------------- | ---------------------------------- |
| `public/images/hero-owners.png`    | Hero panel, About "Family Run" card    | Ian & Vicki, or the cafe exterior  |
| `public/images/cafe-interior.png`  | Services — Corner Cafe card            | Inside the cafe / seating area     |
| `public/images/food-truck.png`     | Services — Catering & Food Truck card  | The food truck at an event         |
| `public/images/bake-1.png`         | About — "Cakes & Bakes by Tors" card   | A cake or bake close-up            |
| `public/images/bake-2.png`         | About — "Two Ways to Meet Us" card     | A food/table spread shot           |

If your real photos are `.jpg`, either save them as `.png` (same filename) or update the `src` extension in the corresponding component — that's the only case where a code change is needed.

## Opening hours

Defined once in `lib/site-data.ts` (`OPENING_HOURS`): a full Mon–Sun breakdown (shown in the Contact section), a condensed `summary` string (shown in the footer), and a `schemaFormat` array (used by the JSON-LD). All three currently hold **placeholder hours** — confirm the real ones and update this one object.

## SEO

- `app/layout.tsx` sets `metadataBase` (from `lib/site-data.ts`'s `SITE_URL` — **update this to the real production domain**) and `openGraph.images`.
- `app/icon.tsx` and `app/opengraph-image.tsx` generate the favicon and social preview image on the fly (via `next/og`) — no binary asset to manage; edit the JSX/colours in either file to restyle them.
- `components/structured-data.tsx` renders `Restaurant` JSON-LD (name, address, geo, phone, opening hours, `sameAs` → Facebook), sourced from `lib/site-data.ts`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.

## Deployment (Netlify)

`netlify.toml` sets the build command (`npm run build`) and enables the official `@netlify/plugin-nextjs` runtime plugin, which Netlify installs automatically during the build — no need to add it to `package.json`. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Netlify's environment variables before going live.

## Build

```bash
npm run build
npm run start
```
