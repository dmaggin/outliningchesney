import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-white/70 backdrop-blur-sm border-t border-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-mono font-bold text-charcoal">
              Outlining<span className="font-display italic text-sunset">Chesney</span>
            </p>
            <p className="text-sm text-charcoal-light mt-2 leading-relaxed">
              Deconstructing paradise, one chorus at a time. Est. 2010 (via email). Launched 2026 (finally).
            </p>
          </div>
          <div>
            <p className="font-semibold text-charcoal text-sm mb-2">Navigate</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/browse" className="text-sm text-charcoal-light hover:text-ocean transition-colors">
                Browse Outlines
              </Link>
              <Link href="/about" className="text-sm text-charcoal-light hover:text-ocean transition-colors">
                The Origin Story
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-charcoal text-sm mb-2">The Thesis</p>
            <p className="text-sm text-charcoal-light italic leading-relaxed">
              &ldquo;Nothing works quite like a Chesney song (or runs like a Deere)&rdquo;
            </p>
            <p className="text-xs text-charcoal-light/60 mt-1">— MJM, July 2010</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/40 text-center">
          <p className="text-xs text-charcoal-light/50">
            A project 16 years in the making. Not affiliated with Kenny Chesney, but we hope he&apos;d appreciate the humor.
          </p>
        </div>
      </div>
    </footer>
  );
}
