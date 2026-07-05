import { Heart, CakeSlice, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Heart,
    title: "Family Run, Since Day One",
    description:
      "Ian and Vicki (known to most of Halstead simply as “Beanie”) built Torsbeanie on one idea: good food should feel like being looked after.",
  },
  {
    icon: CakeSlice,
    title: "Cakes & Bakes by Tors",
    description:
      "Vicki's baking is the heart of the business — from the cabinet at the cafe to the dessert table at your event, every bake is made from scratch.",
  },
  {
    icon: Users,
    title: "One Family, Two Ways to Meet Us",
    description:
      "Meet us at the cafe for a slow breakfast, or book the truck for your celebration — either way, it's the same family, food, and welcome.",
  },
];

export function About() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Our Story</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Meet Ian &amp; Vicki
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            What started as a love of baking and a passion for feeding people
            well has grown into Halstead&apos;s favourite corner cafe and a
            catering truck loved at weddings, festivals, and parties across
            Essex. It&apos;s all one family, one kitchen, one warm welcome
            &mdash; whichever way you meet us first.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl bg-cream-100 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-600/10">
                <Icon className="h-7 w-7 text-terracotta-600" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
