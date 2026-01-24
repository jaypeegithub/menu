export interface Ingredient {
  id: string;
  name: string;
  image: string;
  type: string[];
  environment: string;
  method: string[];
  flavor: string;
  recipes: string[];
  season: string;
  notes: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "banana-slug",
    name: "Banana Slug",
    image: "/ingredients/banana-slug.png",
    type: ["Land"],
    environment: "Forest",
    method: ["Hand harvest"],
    flavor: "Clam-like, Chewy",
    recipes: ["Slug Sushi"],
    season: "Year Round",
    notes: "Do not eat raw to avoid rat lungworm disease. Must cook thoroughly. Not recommended for consumption due to health risks.",
  },
  {
    id: "dungeness-crab",
    name: "Dungeness Crab",
    image: "/ingredients/dungeness-crab.png",
    type: ["Shellfish", "Sea"],
    environment: "Sand, 1 - 250m",
    method: ["Hand", "Trap"],
    flavor: "Sweet, Delicate, Briny",
    recipes: ["Ganjang Gaejang", "Crab Cakes"],
    season: "Year Round",
    notes: "Check for biotoxin closures to avoid paralytic shellfish poisoning (PSP). Raw seafood can be dangerous.",
  },
  {
    id: "opal-squid",
    name: "Opal Squid",
    image: "/ingredients/opal-squid.png",
    type: ["Sea"],
    environment: "Open Ocean, 1 - 250m",
    method: ["Cast Net", "Jigging"],
    flavor: "Mild, Briny, Sweet",
    recipes: ["Squid Ink Mandoo", "Calamari"],
    season: "Year Round",
    notes: "Raw seafood can be dangerous. Cook thoroughly to prevent foodborne illness.",
  },
  {
    id: "pacific-chanterelle",
    name: "Pacific Chanterelle",
    image: "/ingredients/pacific-chanterelle.png",
    type: ["Vegetable"],
    environment: "Moss, Forest",
    method: ["Hand"],
    flavor: "Savory, Sweet, Fruity",
    recipes: ["Mushroom Risotto"],
    season: "Fall",
    notes: "None",
  },
  {
    id: "puget-sound-king-crab",
    name: "Puget Sound King Crab",
    image: "/ingredients/puget-sound-king-crab.png",
    type: ["Shellfish", "Sea"],
    environment: "Rocky, 1 - 140m",
    method: ["Hand picking", "Trap"],
    flavor: "Mild, Briny, Meaty",
    recipes: ["King Crab Fried Rice"],
    season: "Winter",
    notes: "Check for biotoxin closures to avoid paralytic shellfish poisoning (PSP). Raw seafood can be dangerous.",
  },
  {
    id: "rock-greenling",
    name: "Rock Greenling",
    image: "/ingredients/rock-greenling.png",
    type: ["Fish", "Sea"],
    environment: "Rocky, 1 - 30m",
    method: ["Spearfishing", "Rod and Reel"],
    flavor: "Mild",
    recipes: ["Blue Sushi", "Fish Tacos"],
    season: "Year Round",
    notes: "Raw seafood can be dangerous. Cook thoroughly to prevent foodborne illness.",
  },
  {
    id: "salal",
    name: "Salal Berries",
    image: "/ingredients/salal.png",
    type: ["Fruit", "Land"],
    environment: "Forest",
    method: ["Hand picking"],
    flavor: "Sweet, Blackcurrant, Earthy",
    recipes: ["Fruit Leather"],
    season: "Fall",
    notes: "None",
  },
];
