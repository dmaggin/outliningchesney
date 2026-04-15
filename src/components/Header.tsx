"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo, Wordmark } from "./Logo";
import { SandyButton } from "./SandyButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sunset/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={36} />
            <Wordmark className="text-lg sm:text-xl" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/browse"
              className="text-sm font-medium text-charcoal-light hover:text-sunset transition-colors"
            >
              Browse Outlines
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-charcoal-light hover:text-sunset transition-colors"
            >
              About
            </Link>
            <SandyButton />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-charcoal-light"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-sunset/10 mt-2 pt-4 flex flex-col gap-3">
            <Link
              href="/browse"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-charcoal-light hover:text-sunset"
            >
              Browse Outlines
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-charcoal-light hover:text-sunset"
            >
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
