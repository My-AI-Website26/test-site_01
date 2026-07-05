"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cafeMenu, foodTruckMenu, type DietaryTag } from "@/lib/menu-data";

const TAG_VARIANT: Record<DietaryTag, "gf" | "v" | "vg"> = {
  GF: "gf",
  V: "v",
  VG: "vg",
};

export function Menu() {
  return (
    <section id="menu" className="scroll-mt-24 bg-cream-50 py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Menus</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            From the Cafe &amp; From the Truck
          </h2>
          <p className="mt-4 text-ink/70">
            A sample of what&apos;s cooking &mdash; our menus change with the
            seasons and with every event.
          </p>
        </div>

        <Tabs defaultValue="cafe" className="mt-12 flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="cafe">Cafe Menu</TabsTrigger>
            <TabsTrigger value="truck">Food Truck Menu</TabsTrigger>
          </TabsList>

          <TabsContent value="cafe" className="w-full">
            <MenuCategories categories={cafeMenu} />
          </TabsContent>
          <TabsContent value="truck" className="w-full">
            <MenuCategories categories={foodTruckMenu} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function MenuCategories({
  categories,
}: {
  categories: typeof cafeMenu;
}) {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.category}>
          <h3 className="font-serif text-xl text-terracotta-700">
            {category.category}
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 rounded-2xl border border-ink/8 bg-cream-100 p-5"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-ink">{item.name}</h4>
                    {item.tags?.map((tag) => (
                      <Badge key={tag} variant={TAG_VARIANT[tag]}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 font-serif text-lg text-terracotta-600">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
