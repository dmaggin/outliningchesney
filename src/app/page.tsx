import Link from "next/link";
import { Logo } from "@/components/Logo";
import { OutlineCard } from "@/components/OutlineCard";
import { outlines, getChesneyOutlines, getUniqueArtists } from "@/data/outlines";
import { founders } from "@/data/founders";
import { loreQuotes, songSuggestions } from "@/data/lore";

export default function HomePage() {
  const chesneyCount = getChesneyOutlines().length;
  const chesneyPercent = Math.round((chesneyCount / outlines.length) * 100);
  const artists = getUniqueArtists();
  const featured = outlines.slice(0, 4);
  const taglineQuote = loreQuotes.find((q) => q.id === "the-tagline");

  return (
    <div>
      {/* Hero */}
      <section className="sand-texture py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Logo size={80} className="mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-charcoal leading-tight">
            Outlining{" "}
            <span className="text-sunset italic">Chesney</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Kenny Chesney songs are so formulaic you can reduce them to
            bullet-point outlines and they still make perfect sense.
            We have the outlines to prove it.
          </p>
          <p className="mt-3 text-sm text-charcoal-light/60 italic font-mono">
            I. Beach. II. Beer. III. Repeat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset-dark text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-sunset/20"
            >
              Browse Outlines
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white hover:bg-sand-light text-charcoal font-semibold px-6 py-3 rounded-full transition-colors border border-sunset/20"
            >
              The Origin Story
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-sunset/10 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-sunset">{outlines.length}</p>
              <p className="text-xs text-charcoal-light mt-1">Outlines</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-ocean">{artists.length}</p>
              <p className="text-xs text-charcoal-light mt-1">Artists</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-sunset">{chesneyPercent}%</p>
              <p className="text-xs text-charcoal-light mt-1">Chesney</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-ocean">{founders.length}</p>
              <p className="text-xs text-charcoal-light mt-1">Founding Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Outlines */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-display font-bold text-charcoal">Featured Outlines</h2>
            <p className="text-sm text-charcoal-light mt-1">From the original 2010 email thread</p>
          </div>
          <Link
            href="/browse"
            className="text-sm font-medium text-sunset hover:text-sunset-dark transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((outline) => (
            <OutlineCard key={outline.slug} outline={outline} />
          ))}
        </div>
      </section>

      {/* Origin Story Teaser */}
      <section className="bg-white/50 border-y border-sunset/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-4">How It Started</h2>
          <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            In July 2010, a group of friends started emailing each other &ldquo;outlines&rdquo;
            of Kenny Chesney songs. The premise: his songs are so formulaic that you can reduce
            them to hierarchical bullet-point outlines and they still make perfect sense.
            Beach, beer, trucks, barefoot, nostalgia, sunset &mdash; it&apos;s a template.
          </p>
          {taglineQuote && (
            <blockquote className="mt-6 border-l-4 border-sunset pl-4 text-left max-w-lg mx-auto">
              <p className="italic text-charcoal-light">&ldquo;{taglineQuote.quote}&rdquo;</p>
              <cite className="text-xs text-charcoal-light/60 mt-1 block not-italic">
                &mdash; {taglineQuote.attribution}, {taglineQuote.date}
              </cite>
            </blockquote>
          )}
          <Link
            href="/about"
            className="inline-block mt-6 text-sm font-semibold text-sunset hover:text-sunset-dark transition-colors"
          >
            Read the full origin story &rarr;
          </Link>
        </div>
      </section>

      {/* Song Suggestion Box */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-charcoal mb-2">Song Suggestion Box</h2>
        <p className="text-sm text-charcoal-light mb-6">Songs that need outlining. Voting coming in Phase 2.</p>
        {songSuggestions.map((suggestion) => (
          <div
            key={suggestion.songTitle}
            className="bg-white rounded-xl border border-ocean/20 p-5 flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
              <span className="text-ocean font-bold text-lg">#1</span>
            </div>
            <div>
              <p className="font-semibold text-charcoal">
                {suggestion.songTitle}{" "}
                <span className="font-normal text-charcoal-light">by {suggestion.artist}</span>
              </p>
              <p className="text-sm text-charcoal-light mt-1 italic">{suggestion.note}</p>
              <p className="text-xs text-charcoal-light/50 mt-2">
                Suggested by {suggestion.suggestedBy} &middot; {suggestion.date}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
