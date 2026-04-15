import type { Metadata } from "next";
import Link from "next/link";
import { founders } from "@/data/founders";
import { loreQuotes, timeline } from "@/data/lore";
import { outlines, getOutlinesByContributor } from "@/data/outlines";

export const metadata: Metadata = {
  title: "About",
  description: "The origin story of Outlining Chesney — from a 2010 email thread to a 2026 website.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mb-2">
        The Origin Story
      </h1>
      <p className="text-charcoal-light mb-10">
        How an email thread became a website. Only took 16 years.
      </p>

      {/* The Story */}
      <section className="prose prose-charcoal max-w-none mb-12">
        <div className="space-y-6 text-charcoal-light leading-relaxed">
          <p>
            In <strong className="text-charcoal">July 2010</strong>, a group of friends started emailing
            each other &ldquo;outlines&rdquo; of Kenny Chesney songs.
          </p>
          <p>
            The premise was simple: Chesney&apos;s songs are so formulaic that you can reduce
            them to hierarchical bullet-point outlines and they still make perfect sense.
            Beach, beer, trucks, barefoot, nostalgia, sunset &mdash; it&apos;s a template.
          </p>
          <p>
            The group then tried outlining non-Chesney songs &mdash; The Rolling Stones&apos; &ldquo;Paint
            It Black,&rdquo; Weird Al&apos;s &ldquo;Eat It,&rdquo; Bon Jovi&apos;s &ldquo;It&apos;s
            My Life,&rdquo; R.E.M.&apos;s &ldquo;World Leader Pretend&rdquo; &mdash; and discovered
            that other artists&apos; songs don&apos;t work nearly as well.
          </p>
        </div>
      </section>

      {/* Key Quotes */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
          Words from the Thread
        </h2>
        <div className="space-y-4">
          {loreQuotes
            .filter((q) =>
              ["the-discovery", "the-validation", "the-tagline", "the-website-idea", "the-listeous-one", "the-duplicate", "the-duplicate-response", "the-last-request"].includes(q.id)
            )
            .map((q) => (
              <blockquote
                key={q.id}
                className="bg-white rounded-xl border border-white/60 p-5"
              >
                <p className="text-xs font-semibold text-ocean uppercase tracking-wide mb-2">
                  {q.context}
                </p>
                <p className="text-charcoal italic leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <cite className="text-sm text-charcoal-light not-italic mt-2 block">
                  &mdash; {q.attribution}, {q.date}
                </cite>
              </blockquote>
            ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold text-charcoal mb-6">Timeline</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sand/40" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-white/90 border-2 border-sand shadow-sm flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-sand-warm" />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-mono font-semibold text-sand-warm">{item.year}</p>
                  <p className="text-sm text-charcoal-light mt-0.5">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
          The Founding Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {founders.map((f) => {
            const outlineCount = getOutlinesByContributor(f.id).length;
            return (
              <div
                key={f.id}
                className="bg-white rounded-xl border border-white/60 p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{f.id}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{f.displayName}</p>
                    <span className="badge-founder">Est. 2010</span>
                  </div>
                </div>
                <p className="text-sm text-charcoal-light mt-2">{f.note}</p>
                {outlineCount > 0 && (
                  <p className="text-xs text-charcoal-light/50 mt-2">
                    {outlineCount} outline{outlineCount !== 1 ? "s" : ""} contributed
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Chesney */}
      <section className="mb-12 bg-ocean/5 border border-white/60 rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">
          Why Chesney?
        </h2>
        <div className="space-y-4 text-charcoal-light leading-relaxed">
          <p>
            The thesis is simple: Kenny Chesney&apos;s songs are uniquely outlineable.
            They follow a pattern so consistent that reducing them to hierarchical
            bullet points doesn&apos;t lose any meaning. The beach is still there.
            The beer is still cold. The sun is still setting.
          </p>
          <p>
            When the group tried outlining other artists, the format fell apart.
            Other songs have narratives, metaphors, complexity that resists reduction.
            Chesney songs <em>are</em> the reduction. They arrive pre-outlined.
          </p>
          <p>
            This isn&apos;t a takedown. It&apos;s a celebration of formulaic beauty, wrapped in humor.
            If anything, the fact that Chesney&apos;s songs work so well in this format is a
            testament to how perfectly calibrated they are for their purpose: making you feel
            like you&apos;re on a beach with a drink in your hand, even when you&apos;re sitting
            in an office reading a bullet-point outline about it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="text-center py-8 border-t border-white/60">
        <p className="text-sm text-charcoal-light">
          Current collection: <strong className="text-charcoal">{outlines.length} outlines</strong>
          {" "}across{" "}
          <strong className="text-charcoal">
            {new Set(outlines.map((o) => o.artist)).size} artists
          </strong>
          . Chesney songs represent{" "}
          <strong className="text-ocean">
            {Math.round(
              (outlines.filter((o) => o.isChesney).length / outlines.length) * 100
            )}
            %
          </strong>{" "}
          of all outlines. Very listevious.
        </p>
        <Link
          href="/browse"
          className="inline-block mt-4 text-sm font-semibold text-ocean hover:text-ocean-dark transition-colors"
        >
          Browse all outlines &rarr;
        </Link>
      </section>
    </div>
  );
}
