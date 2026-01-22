export interface Ingredient {
  id: string;
  name: string;
  image: string;
  type: string[];
  terrain: string;
  method: string[];
  flavor: string;
  recipes: string[];
}

export const ingredients: Ingredient[] = [
  {
    id: "dungeness-crab",
    name: "Dungeness Crab",
    image: "/ingredients/dungeness-crab.svg",
    type: ["Shellfish", "Seafood"],
    terrain: "Sand",
    method: ["Hand", "Trap"],
    flavor: "Sweet, Delicate, Briny",
    recipes: ["Ganjang Gaejang", "Crab Cakes"],
  },
  {
    id: "rock-greenling",
    name: "Rock Greenling",
    image: "/ingredients/rock-greenling.svg",
    type: ["Fish", "Seafood"],
    terrain: "Rocky, Shallow",
    method: ["Spearfishing", "Rod and Reel"],
    flavor: "Mild",
    recipes: ["Blue Sushi", "Fish Tacos"],
  },
  {
    id: "pacific-chanterelle",
    name: "Pacific Chanterelle",
    image: "/ingredients/pacific-chanterelle.svg",
    type: ["Vegetable"],
    terrain: "Moss, Forest",
    method: ["Hand"],
    flavor: "Savory, Sweet, Fruity",
    recipes: ["Mushroom Risotto"],
  },
];
