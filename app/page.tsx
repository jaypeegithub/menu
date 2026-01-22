"use client";

import { useState } from "react";
import { ingredients, Ingredient } from "@/data/ingredients";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl mb-4 text-red-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          INGREDIENT
        </h1>
        <h2 className="text-2xl md:text-4xl text-blue-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          FIELD GUIDE
        </h2>
      </header>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="SEARCH..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 text-lg bg-white neo-brutalism-border uppercase focus:outline-none focus:ring-0"
        />
      </div>

      {/* Ingredient Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIngredients.map((ingredient) => (
          <button
            key={ingredient.id}
            onClick={() => setSelectedIngredient(ingredient)}
            className="bg-red-400 neo-brutalism-border neo-brutalism-button p-6 cursor-pointer transition-all"
          >
            {/* Pokemon-style placeholder image */}
            <div className="bg-yellow-300 border-4 border-black aspect-square mb-4 flex items-center justify-center">
              <div className="text-6xl">🦀</div>
            </div>
            
            {/* Name */}
            <h3 className="text-sm md:text-base uppercase text-center break-words">
              {ingredient.name}
            </h3>
          </button>
        ))}
      </div>

      {/* No Results */}
      {filteredIngredients.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-xl">NO INGREDIENTS FOUND!</p>
        </div>
      )}

      {/* Modal/Popup */}
      {selectedIngredient && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedIngredient(null)}
        >
          <div
            className="bg-blue-400 neo-brutalism-border p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIngredient(null)}
              className="float-right bg-red-500 text-white px-4 py-2 neo-brutalism-border-sm neo-brutalism-button text-xs"
            >
              CLOSE
            </button>

            {/* Image */}
            <div className="bg-yellow-300 border-4 border-black aspect-square mb-6 flex items-center justify-center clear-both">
              <div className="text-8xl">🦀</div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl md:text-3xl mb-4 uppercase">
                  {selectedIngredient.name}
                </h2>
              </div>

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">TYPE:</p>
                <p className="text-sm uppercase text-red-600">
                  {selectedIngredient.type}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
