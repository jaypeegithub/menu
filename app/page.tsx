"use client";

import { useState } from "react";
import Image from "next/image";
import { ingredients, Ingredient } from "@/data/ingredients";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string | null>(null);

  // Get all unique types from ingredients
  const allTypes = Array.from(
    new Set(ingredients.flatMap((ingredient) => ingredient.type))
  ).sort();

  const filteredIngredients = ingredients.filter((ingredient) => {
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedTypeFilter || ingredient.type.includes(selectedTypeFilter);
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl mb-2 text-cyan-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          JPEATSBC
        </h1>
        <h2 className="text-4xl md:text-6xl mb-2 text-white text-border drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          CATCH & COOK
        </h2>
        <h3 className="text-2xl md:text-4xl text-cyan-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          FIELD GUIDE
        </h3>
      </header>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="SEARCH..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 text-lg bg-white neo-brutalism-border uppercase focus:outline-none focus:ring-0"
        />
      </div>

      {/* Type Filters */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-xs uppercase mb-3 text-center">FILTER BY TYPE:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedTypeFilter(null)}
            className={`px-4 py-2 text-sm uppercase neo-brutalism-border-sm neo-brutalism-button ${
              selectedTypeFilter === null
                ? "bg-teal-400 text-black"
                : "bg-white text-black"
            }`}
          >
            ALL
          </button>
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedTypeFilter(type)}
              className={`px-4 py-2 text-sm uppercase neo-brutalism-border-sm neo-brutalism-button ${
                selectedTypeFilter === type
                  ? "bg-teal-400 text-black"
                  : "bg-white text-black"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Ingredient Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIngredients.map((ingredient) => (
          <button
            key={ingredient.id}
            onClick={() => setSelectedIngredient(ingredient)}
            className="bg-cyan-400 neo-brutalism-border neo-brutalism-button p-6 cursor-pointer transition-all"
          >
            {/* Pixel art image */}
            <div className="bg-white border-4 border-black aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
            className="bg-cyan-300 neo-brutalism-border p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIngredient(null)}
              className="float-right bg-teal-600 text-white px-4 py-2 neo-brutalism-border-sm neo-brutalism-button text-xs"
            >
              CLOSE
            </button>

            {/* Image */}
            <div className="bg-white border-4 border-black aspect-square mb-6 flex items-center justify-center clear-both relative overflow-hidden">
              <Image
                src={selectedIngredient.image}
                alt={selectedIngredient.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 500px"
              />
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
                <ul className="space-y-1">
                  {selectedIngredient.type.map((t, index) => (
                    <li key={index} className="text-sm uppercase text-teal-600">
                      • {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">TERRAIN:</p>
                <p className="text-sm uppercase text-cyan-700">
                  {selectedIngredient.terrain}
                </p>
              </div>

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">METHOD:</p>
                <ul className="space-y-1">
                  {selectedIngredient.method.map((m, index) => (
                    <li key={index} className="text-sm uppercase text-emerald-600">
                      • {m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">FLAVOR:</p>
                <p className="text-sm uppercase text-sky-600">
                  {selectedIngredient.flavor}
                </p>
              </div>

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">RECIPES:</p>
                <ul className="space-y-1">
                  {selectedIngredient.recipes.map((recipe, index) => (
                    <li key={index} className="text-sm uppercase text-amber-600">
                      • {recipe}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
