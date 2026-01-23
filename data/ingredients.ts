export interface Ingredient {
  id: string;
  name: string;
  image: string;
  type: string[];
  terrain: string;
  method: string[];
  flavor: string;
  recipes: string[];
  season: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "banana-slug",
    name: "Banana Slug",
    image: "/ingredients/banana-slug.png",
    type: ["Land"],
    terrain: "Forest",
    method: ["Hand harvest"],
    flavor: "Clam, Chewy",
    recipes: ["Slug Sushi"],
    season: "Year Round",
  },
  {
    id: "dungeness-crab",
    name: "Dungeness Crab",
    image: "/ingredients/dungeness-crab.png",
    type: ["Shellfish", "Seafood"],
    terrain: "Sand",
    method: ["Hand", "Trap"],
    flavor: "Sweet, Delicate, Briny",
    recipes: ["Ganjang Gaejang", "Crab Cakes"],
    season: "Year Round",
  },
  {
    id: "opal-squid",
    name: "Opal Squid",
    image: "/ingredients/opal-squid.png",
    type: ["Seafood"],
    terrain: "Open Ocean, 1 - 250m",
    method: ["Cast Net", "Jigging"],
    flavor: "Mild, Briny, Sweet",
    recipes: ["Squid Ink Mandoo", "Calamari"],
    season: "Year Round",
  },
  {
    id: "pacific-chanterelle",
    name: "Pacific Chanterelle",
    image: "/ingredients/pacific-chanterelle.png",
    type: ["Vegetable"],
    terrain: "Moss, Forest",
    method: ["Hand"],
    flavor: "Savory, Sweet, Fruity",
    recipes: ["Mushroom Risotto"],
    season: "Fall",
  },
  {
    id: "puget-sound-king-crab",
    name: "Puget Sound King Crab",
    image: "/ingredients/puget-sound-king-crab.png",
    type: ["Shellfish", "Seafood"],
    terrain: "Rocky, 1 - 140m",
    method: ["Hand picking", "Trap"],
    flavor: "Mild, Briny, Meaty",
    recipes: ["King Crab Fried Rice"],
    season: "Winter",
  },
  {
    id: "rock-greenling",
    name: "Rock Greenling",
    image: "/ingredients/rock-greenling.png",
    type: ["Fish", "Seafood"],
    terrain: "Rocky, Shallow",
    method: ["Spearfishing", "Rod and Reel"],
    flavor: "Mild",
    recipes: ["Blue Sushi", "Fish Tacos"],
    season: "Year Round",
  },
  {
    id: "salal",
    name: "Salal Berries",
    image: "/ingredients/salal.png",
    type: ["Fruit", "Land"],
    terrain: "Forest",
    method: ["Hand picking"],
    flavor: "Mild, Briny, Meaty",
    recipes: ["King Crab Fried Rice"],
    season: "Fall",
  },
];
