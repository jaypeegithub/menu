"use client";

import { useState } from "react";
import Image from "next/image";
import { ingredients, Ingredient } from "@/data/ingredients";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string | null>(null);
  const [selectedSeasonFilter, setSelectedSeasonFilter] = useState<string | null>(null);

  // Get all unique types from ingredients
  const allTypes = Array.from(
    new Set(ingredients.flatMap((ingredient) => ingredient.type))
  ).sort();

  // All possible seasons (excluding Year Round from dropdown)
  const allSeasons = ["Spring", "Summer", "Fall", "Winter"];

  const filteredIngredients = ingredients.filter((ingredient) => {
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedTypeFilter || ingredient.type.includes(selectedTypeFilter);
    // Year Round ingredients match all seasons
    const matchesSeason = !selectedSeasonFilter || 
                          ingredient.season === selectedSeasonFilter || 
                          ingredient.season === "Year Round";
    return matchesSearch && matchesType && matchesSeason;
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

      {/* How to Use Section */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h4 className="text-base md:text-lg uppercase mb-6 text-cyan-700 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
          How to Use This Guide
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
          <div>
            <h5 className="text-sm uppercase mb-2 text-teal-600">Discover</h5>
            <p className="leading-relaxed">
              Browse or filter ingredients by type or season.
            </p>
          </div>
          <div>
            <h5 className="text-sm uppercase mb-2 text-teal-600">Learn</h5>
            <p className="leading-relaxed">
              Explore what it is, where it lives, how it tastes, and what to consider.
            </p>
          </div>
          <div>
            <h5 className="text-sm uppercase mb-2 text-teal-600">Verify</h5>
            <p className="leading-relaxed">
              Confirm current regulations, safe identification, and proper preparation.
            </p>
          </div>
        </div>
      </div>

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
      <div className="max-w-4xl mx-auto mb-8">
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

      {/* Season Dropdown Filter */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase mb-3 text-center">FILTER BY SEASON:</p>
        <select
          value={selectedSeasonFilter || ""}
          onChange={(e) => setSelectedSeasonFilter(e.target.value || null)}
          className="w-full px-6 py-4 text-sm bg-white neo-brutalism-border uppercase focus:outline-none focus:ring-0 cursor-pointer"
        >
          <option value="">ALL SEASONS</option>
          {allSeasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </div>

      {/* Ingredient Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {filteredIngredients.map((ingredient) => (
          <button
            key={ingredient.id}
            onClick={() => setSelectedIngredient(ingredient)}
            className="bg-cyan-400 neo-brutalism-border neo-brutalism-button p-3 md:p-6 cursor-pointer transition-all"
          >
            {/* Pixel art image */}
            <div className="bg-white border-2 md:border-4 border-black aspect-square mb-2 md:mb-4 flex items-center justify-center relative overflow-hidden">
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                fill
                className="object-contain p-1 md:p-4"
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
                <p className="text-xs uppercase mb-2">ENVIRONMENT:</p>
                <ul className="space-y-1">
                  {selectedIngredient.environment.map((env, index) => (
                    <li key={index} className="text-sm uppercase text-cyan-700">
                      • {env}
                    </li>
                  ))}
                </ul>
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

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">SEASON:</p>
                <p className="text-sm uppercase text-violet-600">
                  {selectedIngredient.season}
                </p>
              </div>

              <div className="bg-white neo-brutalism-border-sm p-4">
                <p className="text-xs uppercase mb-2">NOTES:</p>
                <p className="text-xs leading-relaxed uppercase text-red-600">
                  {selectedIngredient.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Disclaimer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t-2 border-black">
        <div className="text-center mb-8">
          <h5 className="text-sm uppercase mb-3 opacity-70">Disclaimer</h5>
          <p className="text-xs leading-relaxed mb-2 opacity-70">
            This guide is for educational purposes only. 
          </p>
          <p className="text-xs leading-relaxed mb-2 opacity-70">
            Always consult official regulations and trusted local resources.
          </p>
          <p className="text-xs leading-relaxed mb-2 opacity-70">
          Always verify local regulations, harvest seasons, and safety guidelines before foraging or fishing. Information may be incomplete or outdated.
          </p>
          <p className="text-xs leading-relaxed opacity-70">
            Harvesting, preparation, and consumption of wild foods is done at your own risk.
          </p>
        </div>
        <div className="text-center text-xs opacity-50 pb-4">
          <p>{new Date().getFullYear()} JPEATSBC Catch & Cook Field Guide</p>
        </div>
      </footer>
    </div>
  );
}
