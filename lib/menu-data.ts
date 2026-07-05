export type DietaryTag = "GF" | "V" | "VG";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: DietaryTag[];
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const cafeMenu: MenuCategory[] = [
  {
    category: "Breakfast",
    items: [
      {
        name: "The Weavers Court Fry-Up",
        description: "Local sausage, smoked bacon, eggs your way, beans, grilled tomato, sourdough.",
        price: "£10.50",
      },
      {
        name: "Beanie's Breakfast Bowl",
        description: "Coconut yoghurt, granola, poached pear, honey, toasted seeds.",
        price: "£6.75",
        tags: ["V", "GF"],
      },
      {
        name: "Halstead Hash",
        description: "Crispy potato hash, roasted peppers, halloumi, chilli jam.",
        price: "£8.50",
        tags: ["V"],
      },
      {
        name: "Avocado & Chilli on Sourdough",
        description: "Smashed avocado, lime, chilli flakes, feta crumble.",
        price: "£7.95",
        tags: ["V"],
      },
    ],
  },
  {
    category: "Lunch",
    items: [
      {
        name: "Ploughman's Board",
        description: "Local cheeses, ham hock, chutney, pickles, crusty bread.",
        price: "£11.95",
      },
      {
        name: "Roast Veg & Halloumi Salad",
        description: "Seasonal roasted vegetables, halloumi, pomegranate, tahini dressing.",
        price: "£9.50",
        tags: ["V", "GF"],
      },
      {
        name: "Soup of the Day",
        description: "Ask Vicki what's simmering today, served with warm sourdough.",
        price: "£6.25",
        tags: ["VG"],
      },
      {
        name: "Torsbeanie Club Sandwich",
        description: "Chicken, smoked bacon, tomato, lettuce, garlic mayo, triple stack.",
        price: "£9.25",
      },
    ],
  },
  {
    category: "Cakes & Bakes",
    items: [
      {
        name: "Vicki's Victoria Sponge",
        description: "Classic sponge, raspberry jam, whipped cream, icing sugar dust.",
        price: "£4.25",
        tags: ["V"],
      },
      {
        name: "Salted Caramel Brownie",
        description: "Dense fudgy brownie, salted caramel drizzle.",
        price: "£3.95",
        tags: ["V", "GF"],
      },
      {
        name: "Cinnamon Morning Bun",
        description: "Laminated pastry, cinnamon sugar, cream cheese glaze.",
        price: "£3.50",
        tags: ["V"],
      },
      {
        name: "Vegan Lemon Drizzle",
        description: "Zesty lemon sponge, plant-based drizzle icing.",
        price: "£3.75",
        tags: ["VG"],
      },
    ],
  },
];

export const foodTruckMenu: MenuCategory[] = [
  {
    category: "Food Truck Favourites",
    items: [
      {
        name: "Wood-Fired Flatbread",
        description: "Slow-cooked pulled pork or roasted veg, house slaw, smoky BBQ sauce.",
        price: "£8.00",
      },
      {
        name: "Beanie Burger",
        description: "Local beef patty, smoked cheese, pickles, burger sauce, brioche bun.",
        price: "£9.50",
      },
      {
        name: "Halloumi & Chilli Jam Wrap",
        description: "Grilled halloumi, chilli jam, rocket, garlic yoghurt.",
        price: "£8.50",
        tags: ["V"],
      },
      {
        name: "Loaded Fries",
        description: "Hand-cut chips, melted cheese, spring onion, choice of topping.",
        price: "£6.50",
        tags: ["V", "GF"],
      },
      {
        name: "Vegan Jackfruit Tacos",
        description: "Spiced pulled jackfruit, slaw, lime crema, corn tortillas.",
        price: "£8.50",
        tags: ["VG"],
      },
      {
        name: "Mini Cakes & Bakes Box",
        description: "A taste of Tors' bakes — perfect for festival sweet cravings.",
        price: "£4.50",
        tags: ["V"],
      },
    ],
  },
];
