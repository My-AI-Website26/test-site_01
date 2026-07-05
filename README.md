# Torsbeanie

Family-run corner cafe, catering food truck, and bakery in Halstead, Essex — built with Next.js (App Router), TypeScript, Tailwind CSS, and Radix UI primitives.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project structure

- `app/` — root layout, global styles, and the single-page route (`app/page.tsx`)
- `components/` — one file per page section (navbar, hero, about, services, menu, testimonials, contact, footer)
- `components/ui/` — small shadcn-style primitives (button, tabs, card, badge, input, label, textarea, select) built on Radix UI
- `lib/menu-data.ts` — cafe & food truck menu content
- `lib/testimonials-data.ts` — testimonial content

## Editing content

Business copy, menu items, and testimonials are plain data files/components — no CMS. Update:

- Menu items/prices: `lib/menu-data.ts`
- Testimonials: `lib/testimonials-data.ts`
- Contact details (address/phone/email/Facebook/map coordinates): `CONTACT` object in `components/contact.tsx` (also mirrored in `components/footer.tsx`)

## Photos

No stock photography is included — the hero and section art use color/shape only. To add real photos, drop files in `public/images/` and swap in `next/image` where appropriate (hero panel in `components/hero.tsx` is the best first candidate).

## Contact form

The inquiry form has no backend — it opens the visitor's email client via a pre-filled `mailto:` link to `torsbeanie@proton.me`. For a form that submits without leaving the page, wire it to a service like Formspree, Resend, or a Next.js Route Handler with an email provider.

## Build

```bash
npm run build
npm run start
```
