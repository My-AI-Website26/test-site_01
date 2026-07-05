import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials-data";

export function Testimonials() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Kind Words</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            From Our Cafe Regulars &amp; Event Guests
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-cream-50 p-8 shadow-soft"
            >
              <Quote className="h-8 w-8 text-terracotta-500/50" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-ink/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/8 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink/55">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
