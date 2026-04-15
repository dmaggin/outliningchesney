import Link from "next/link";
import type { Metadata } from "next";
import { comments } from "@/data/comments";

export const metadata: Metadata = {
  title: "Comments & Feedback",
  description: "What people are saying about these outlines.",
};

export default function CommentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-charcoal mb-2">
        Comments &amp; Feedback
      </h1>
      <p className="text-charcoal-light mb-8">
        What people are saying about these outlines. Very listevious discourse.
      </p>

      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-charcoal text-sm">{c.author}</span>
                  {c.type === "edit-suggestion" && (
                    <span className="text-[0.55rem] font-semibold text-ocean-deep bg-ocean/10 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                      Edit Suggestion
                    </span>
                  )}
                </div>
                <span className="text-xs text-charcoal-light/50 flex-shrink-0">{c.date}</span>
              </div>

              {c.songTitle && (
                <Link
                  href={c.outlineSlug ? `/outline/${c.outlineSlug}` : "/browse"}
                  className="text-xs text-ocean hover:text-ocean-dark transition-colors mb-2 inline-block"
                >
                  Re: {c.songTitle} &rarr;
                </Link>
              )}

              <p className="text-sm text-charcoal-light leading-relaxed whitespace-pre-wrap">
                {c.content}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🏖️</p>
          <p className="font-semibold text-charcoal">No comments yet.</p>
          <p className="text-sm text-charcoal-light mt-1">
            This beach is quiet. Be the first to leave a note.
          </p>
          <Link
            href="/browse"
            className="inline-block mt-4 text-sm font-semibold bg-white/80 text-charcoal hover:bg-white px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            Browse outlines &amp; leave feedback
          </Link>
        </div>
      )}
    </div>
  );
}
