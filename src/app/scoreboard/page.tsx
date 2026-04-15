import Link from "next/link";
import type { Metadata } from "next";
import { outlines, getListeviousRating, getOutlineStats } from "@/data/outlines";

export const metadata: Metadata = {
  title: "Listevious Scoreboard",
  description: "Every outlined song ranked by how outlineable it is.",
};

export default function ScoreboardPage() {
  const ranked = outlines
    .filter((o) => !o.isDuplicate || o.slug === "paint-it-black-rolling-stones-dmm")
    .map((o) => ({
      outline: o,
      rating: getListeviousRating(o),
      stats: getOutlineStats(o),
    }))
    .sort((a, b) => b.rating.score - a.rating.score);

  const chesneyAvg =
    ranked.filter((r) => r.outline.isChesney).reduce((sum, r) => sum + r.rating.score, 0) /
    ranked.filter((r) => r.outline.isChesney).length;

  const nonChesneyAvg =
    ranked.filter((r) => !r.outline.isChesney).reduce((sum, r) => sum + r.rating.score, 0) /
    ranked.filter((r) => !r.outline.isChesney).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-charcoal mb-2">
        Listevious Scoreboard
      </h1>
      <p className="text-charcoal-light mb-8">
        Every outlined song ranked by how outlineable it is.
        Higher score = the song compresses into a cleaner, simpler, punchier outline.
      </p>

      {/* Chesney vs Non-Chesney averages */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5 text-center">
          <p className="text-3xl font-bold text-ocean">{chesneyAvg.toFixed(1)}</p>
          <p className="text-xs text-charcoal-light mt-1">Chesney Average</p>
        </div>
        <div className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5 text-center">
          <p className="text-3xl font-bold text-charcoal-light">{nonChesneyAvg.toFixed(1)}</p>
          <p className="text-xs text-charcoal-light mt-1">Non-Chesney Average</p>
        </div>
      </div>

      {/* Rankings */}
      <div className="space-y-3">
        {ranked.map((r, i) => (
          <Link
            key={r.outline.slug}
            href={`/outline/${r.outline.slug}`}
            className="block group"
          >
            <div className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-shadow p-4 flex items-center gap-4">
              {/* Rank */}
              <div className="flex-shrink-0 w-8 text-center">
                <span className={`text-lg font-bold ${i === 0 ? "text-sand-warm" : i < 3 ? "text-ocean" : "text-charcoal-light/40"}`}>
                  {i + 1}
                </span>
              </div>

              {/* Song info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-charcoal truncate group-hover:text-ocean transition-colors">
                    {r.outline.songTitle}
                  </p>
                  {r.outline.isChesney ? (
                    <span className="flex-shrink-0 inline-block bg-ocean/10 text-ocean-deep text-[0.55rem] font-semibold px-1.5 py-0.5 rounded-full">
                      Chesney
                    </span>
                  ) : (
                    <span className="flex-shrink-0 badge-visiting">Visiting</span>
                  )}
                </div>
                <p className="text-xs text-charcoal-light mt-0.5">
                  {r.outline.artist} &middot; {r.stats.bulletCount} bullets &middot; depth {r.stats.maxDepth}
                </p>
              </div>

              {/* Score */}
              <div className="flex-shrink-0 text-right">
                <p className="text-xl font-bold text-ocean">{r.rating.score.toFixed(1)}</p>
                <p className="text-[0.55rem] text-charcoal-light/50 uppercase tracking-wide">{r.rating.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scoring explanation */}
      <div className="mt-10 bg-white/70 backdrop-blur-sm rounded-xl border border-white/60 p-5 sm:p-6">
        <h2 className="font-semibold text-charcoal mb-3">How Scoring Works</h2>
        <div className="space-y-2 text-sm text-charcoal-light">
          <p>
            <strong className="text-charcoal">Brevity (30%)</strong> &mdash;
            Shorter, punchier bullets score higher. &ldquo;beach&rdquo; beats &ldquo;I&apos;m standing on a beach looking at the sunset.&rdquo;
          </p>
          <p>
            <strong className="text-charcoal">Simplicity (35%)</strong> &mdash;
            Clean, shallow structure scores highest. The ideal: a few top-level items, each with a handful of sub-items. Chorus. Repeat.
            Deep nesting means complexity — the opposite of what makes a song outlineable.
          </p>
          <p>
            <strong className="text-charcoal">Compression (35%)</strong> &mdash;
            Fewer bullets to capture the whole song = better. If you need 50 bullets to outline a 3-minute song, it&apos;s not really that outlineable.
            The best songs compress into a tight, elegant outline.
          </p>
        </div>
      </div>
    </div>
  );
}
