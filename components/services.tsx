import Image from "next/image";
import { Sun, UtensilsCrossed, PartyPopper, Tent, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Two Ways to Enjoy Torsbeanie</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            The Cafe &amp; The Truck
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Cafe pillar */}
          <div
            id="cafe"
            className="scroll-mt-28 rounded-[2rem] bg-cream-50 p-8 shadow-soft sm:p-10"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/cafe-interior.png"
                alt="Inside the Torsbeanie corner cafe"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-500/15">
              <UtensilsCrossed className="h-6 w-6 text-olive-600" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-ink">
              Torsbeanie Corner Cafe
            </h3>
            <p className="mt-3 leading-relaxed text-ink/70">
              Our cosy dine-in cafe at 10 Weavers Court is where it all began
              &mdash; hearty breakfasts, fresh lunches, and Vicki&apos;s bakes,
              served with a smile in a warm, boho-cosy space.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink/75">
              <li className="flex items-center gap-3">
                <Sun className="h-4 w-4 shrink-0 text-olive-600" aria-hidden="true" />
                Breakfast &amp; lunch, served daily
              </li>
              <li className="flex items-center gap-3">
                <Tent className="h-4 w-4 shrink-0 text-olive-600" aria-hidden="true" />
                Cosy dine-in seating &amp; a sunny outdoor courtyard
              </li>
              <li className="flex items-center gap-3">
                <PartyPopper className="h-4 w-4 shrink-0 text-olive-600" aria-hidden="true" />
                Home of Cakes &amp; Bakes by Tors, fresh every morning
              </li>
            </ul>

            <Button asChild variant="secondary" className="mt-8">
              <a href="#menu">See Cafe Menu</a>
            </Button>
          </div>

          {/* Catering pillar */}
          <div
            id="catering"
            className="scroll-mt-28 rounded-[2rem] bg-ink p-8 text-cream-50 shadow-[0_20px_45px_-14px_rgba(0,0,0,0.55)] sm:p-10"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/food-truck.png"
                alt="The Torsbeanie catering food truck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta-500/25">
              <Tent className="h-6 w-6 text-terracotta-400" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-serif text-2xl">
              Torsbeanie Catering &amp; Food Truck
            </h3>
            <p className="mt-3 leading-relaxed text-cream-50/75">
              Our mobile kitchen brings the Torsbeanie welcome straight to
              your event &mdash; weddings, festivals, outdoor cinemas, and
              private parties across Essex.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-cream-50/85">
              <li className="flex items-center gap-3">
                <PartyPopper className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
                Weddings, parties &amp; festivals
              </li>
              <li className="flex items-center gap-3">
                <Tent className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
                Markets, fetes &amp; outdoor cinema nights
              </li>
              <li className="flex items-center gap-3">
                <UtensilsCrossed className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
                Bespoke menus, including cakes &amp; desserts
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-cream-50/20 bg-cream-50/10 p-5">
              <p className="font-semibold text-cream-50">
                Planning an event?
              </p>
              <p className="mt-1 text-sm text-cream-50/75">
                Tell us your date and headcount and we&apos;ll build a menu around it.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-terracotta-400 hover:text-terracotta-300"
              >
                Send an Event Enquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
