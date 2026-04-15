import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4">🏝️</p>
      <h1 className="text-3xl font-display font-bold text-charcoal mb-3">
        404
      </h1>
      <p className="text-lg text-charcoal-light mb-2">
        This page has gone to Margaritaville and isn&apos;t coming back.
      </p>
      <p className="text-sm text-charcoal-light/60 italic mb-8">
        I see a missing page. I want it painted black.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
      >
        Back to the beach
      </Link>
    </div>
  );
}
