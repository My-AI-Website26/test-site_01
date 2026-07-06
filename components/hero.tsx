import Image from "next/image";
import { MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream-100 pb-20 pt-32 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-terracotta-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-olive-500/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up">
          <p className="section-eyebrow">Halstead, Essex &middot; Family Run</p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            A warm welcome, wherever you find us.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Torsbeanie is Ian &amp; Vicki&apos;s family-run corner cafe &mdash;
            and the mobile catering truck that brings the same food, cakes,
            and homely welcome to your wedding, festival, or party.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#menu">View Cafe Menu</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact" className="inline-flex items-center gap-2">
                <Truck className="h-5 w-5" aria-hidden="true" />
                Book Food Truck
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm font-medium text-ink/60">
            <MapPin className="h-4 w-4 text-terracotta-600" aria-hidden="true" />
            {CONTACT.address}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-[4/5] max-w-sm rounded-[2.5rem] bg-gradient-to-br from-terracotta-400 via-terracotta-500 to-olive-600 p-2 shadow-soft">
            <div className="flex h-full w-full flex-col justify-between rounded-[2rem] border border-cream-50/30 bg-ink/10 p-8 text-cream-50 backdrop-blur-sm">
              <div>
                <p className="font-serif text-2xl">Torsbeanie</p>
                <p className="mt-1 text-sm text-cream-50/80">
                  Corner Cafe &middot; Catering &middot; Cakes &amp; Bakes by Tors
                </p>
              </div>
              <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-cream-50/30">
                <Image
                  src="/images/hero-owners.png"
                  alt="Ian and Vicki outside the Torsbeanie corner cafe"
                  fill
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
