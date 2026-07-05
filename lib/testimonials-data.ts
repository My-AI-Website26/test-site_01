export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ian and Vicki catered our wedding with the food truck and it was the highlight of the day. Two weeks later we found ourselves back at the cafe for Sunday brunch — it felt like visiting old friends.",
    name: "Emily & James",
    context: "Wedding catering, Halstead",
  },
  {
    quote:
      "We booked Torsbeanie for our outdoor cinema night and the whole crowd was raving about the loaded fries. Found out afterwards there's a gorgeous little cafe in town too — now our regular breakfast spot.",
    name: "Sam R.",
    context: "Community outdoor cinema event",
  },
  {
    quote:
      "Vicki's cakes are legendary around here. We order a bake from the cafe every birthday, and had Cakes & Bakes by Tors do our whole dessert table for a family party. Consistently wonderful.",
    name: "Priya K.",
    context: "Cakes & Bakes by Tors, birthday order",
  },
];
