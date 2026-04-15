"use client";

import { outlines } from "@/data/outlines";

export function SandyButton() {
  return (
    <button
      onClick={() => {
        const random = outlines[Math.floor(Math.random() * outlines.length)];
        window.location.href = `/outline/${random.slug}`;
      }}
      className="text-sm font-semibold text-white bg-ocean hover:bg-ocean-dark px-4 py-1.5 rounded-full transition-colors"
    >
      I&apos;m Feeling Sandy
    </button>
  );
}
