"use client";

import { useState, useMemo } from "react";
import { OutlineCard } from "@/components/OutlineCard";
import { outlines } from "@/data/outlines";
import type { Metadata } from "next";

type SortOption = "newest" | "oldest" | "artist" | "title";
type FilterOption = "all" | "chesney" | "visiting";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterOption>("all");
  const [sort, setSort] = useState<SortOption>("newest");

  const filtered = useMemo(() => {
    let results = [...outlines];

    // Filter
    if (filter === "chesney") {
      results = results.filter((o) => o.isChesney);
    } else if (filter === "visiting") {
      results = results.filter((o) => !o.isChesney);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (o) =>
          o.songTitle.toLowerCase().includes(q) ||
          o.artist.toLowerCase().includes(q) ||
          o.contributorId.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sort) {
      case "newest":
        results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        results.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "artist":
        results.sort((a, b) => a.artist.localeCompare(b.artist));
        break;
      case "title":
        results.sort((a, b) => a.songTitle.localeCompare(b.songTitle));
        break;
    }

    return results;
  }, [search, filter, sort]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-charcoal">Browse Outlines</h1>
        <p className="text-charcoal-light mt-1">
          {outlines.length} outlines from the original email thread (2010&ndash;2014)
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search songs, artists, or contributors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-ocean/15 rounded-xl text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean/30"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterOption)}
            className="px-3 py-2.5 bg-white border border-ocean/15 rounded-xl text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean/30"
          >
            <option value="all">All Artists</option>
            <option value="chesney">Chesney Only</option>
            <option value="visiting">Visiting Artists</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="px-3 py-2.5 bg-white border border-ocean/15 rounded-xl text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean/30"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="artist">By Artist</option>
            <option value="title">By Title</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((outline) => (
            <OutlineCard key={outline.slug} outline={outline} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🏖️</p>
          <p className="font-semibold text-charcoal">This beach is empty.</p>
          <p className="text-sm text-charcoal-light mt-1">
            No outlines match your search. Very un-listevious.
          </p>
        </div>
      )}

      {/* Stats footer */}
      <div className="mt-10 pt-6 border-t border-ocean/10 text-center">
        <p className="text-xs text-charcoal-light/50">
          Showing {filtered.length} of {outlines.length} outlines &middot;
          Chesney songs represent{" "}
          {Math.round(
            (outlines.filter((o) => o.isChesney).length / outlines.length) * 100
          )}
          % of all outlines
        </p>
      </div>
    </div>
  );
}
