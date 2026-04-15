import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { OutlineRenderer } from "@/components/OutlineRenderer";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { FeedbackForm } from "@/components/FeedbackForm";
import { ListeviousRatingCard } from "@/components/ListeviousRating";
import { StrawHat } from "@/components/StrawHat";
import { outlines, getOutlineBySlug, getOutlineStats, getListeviousRating } from "@/data/outlines";
import { getFounder } from "@/data/founders";
import { comments } from "@/data/comments";

export function generateStaticParams() {
  return outlines.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const outline = getOutlineBySlug(slug);
  if (!outline) return { title: "Not Found" };
  return {
    title: `${outline.songTitle} by ${outline.artist}`,
    description: `Song outline of "${outline.songTitle}" by ${outline.artist}. Deconstructed into a hierarchical bullet-point outline.`,
  };
}

export default async function OutlinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const outline = getOutlineBySlug(slug);
  if (!outline) notFound();

  const contributor = getFounder(outline.contributorId);
  const stats = getOutlineStats(outline);
  const rating = getListeviousRating(outline);

  // Find the duplicate if this outline has one
  const duplicate = outline.duplicateOf
    ? getOutlineBySlug(outline.duplicateOf)
    : undefined;
  const duplicateContributor = duplicate
    ? getFounder(duplicate.contributorId)
    : undefined;

  const d = new Date(outline.date);
  const formattedDate = `${String(d.getUTCMonth() + 1).padStart(2, "0")}/${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCFullYear()).slice(2)}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/browse" className="text-charcoal-light hover:text-ocean transition-colors">
          Browse
        </Link>
        <span className="mx-2 text-charcoal-light/40">/</span>
        <span className="text-charcoal">{outline.songTitle}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {outline.isChesney ? (
            <div className="flex items-center gap-1.5">
              <StrawHat size={28} />
              <span className="text-xs font-semibold text-sand-warm">Kenny Chesney</span>
            </div>
          ) : (
            <span className="badge-visiting">Visiting Artist</span>
          )}
          {outline.isDuplicate && (
            <span className="badge-duplicate">Great Minds Think Alike</span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-charcoal">
          {outline.songTitle}
        </h1>
        <p className="text-lg text-charcoal-light mt-1">{outline.artist}</p>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-charcoal-light">
          <div className="flex items-center gap-2">
            <span className="badge-founder text-[0.6rem]">Est. 2010</span>
            <span>
              Outlined by{" "}
              <span className="font-semibold text-charcoal">
                {contributor?.displayName ?? outline.contributorId}
              </span>
            </span>
          </div>
          <span className="text-charcoal-light/40">|</span>
          <span>{formattedDate}</span>
          <span className="text-charcoal-light/40">|</span>
          <span>
            {stats.bulletCount} bullets, depth {stats.maxDepth}
          </span>
        </div>
      </div>

      {/* Editorial Note */}
      {outline.editorialNote && (
        <div className="mb-8 bg-sand-pale/80 border border-sand/20 rounded-xl p-5">
          <p className="text-xs font-semibold text-sand-warm uppercase tracking-wide mb-1">
            Editorial Note
          </p>
          <p className="text-sm text-charcoal-light italic leading-relaxed">
            {outline.editorialNote}
          </p>
        </div>
      )}

      {/* Outline + Rating: side by side on desktop, rating above on mobile */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-start gap-6">
        {/* The Outline */}
        <div className="flex-1 min-w-0">
          <OutlineRenderer content={outline.content} />
        </div>

        {/* Listevious Rating — sidebar on desktop, above outline on mobile */}
        <div className="lg:w-64 flex-shrink-0 lg:sticky lg:top-20">
          <ListeviousRatingCard {...rating} />
        </div>
      </div>

      {/* Duplicate Version */}
      {duplicate && (
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-ocean/20" />
            <span className="text-sm font-semibold text-ocean">
              Also Outlined By {duplicateContributor?.displayName ?? duplicate.contributorId}
            </span>
            <div className="h-px flex-1 bg-ocean/20" />
          </div>
          {duplicate.editorialNote && (
            <p className="text-sm text-charcoal-light italic mb-4">
              {duplicate.editorialNote}
            </p>
          )}
          <OutlineRenderer content={duplicate.content} />
          <p className="text-xs text-charcoal-light/50 mt-3 text-center">
            Outlined on{" "}
            {(() => { const dd = new Date(duplicate.date); return `${String(dd.getUTCMonth() + 1).padStart(2, "0")}/${String(dd.getUTCDate()).padStart(2, "0")}/${String(dd.getUTCFullYear()).slice(2)}`; })()}
            {" "}&mdash; independently, without knowledge of the version above.
          </p>
        </div>
      )}

      {/* Comments Thread */}
      {(() => {
        const songComments = comments.filter((c) => c.outlineSlug === outline.slug);
        if (songComments.length === 0) return null;
        return (
          <div className="mt-10">
            <h3 className="font-semibold text-charcoal mb-4">
              Comments ({songComments.length})
            </h3>
            <div className="space-y-3">
              {songComments.map((c) => (
                <div
                  key={c.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm p-4"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-charcoal">{c.author}</span>
                      {c.type === "edit-suggestion" && (
                        <span className="text-[0.55rem] font-semibold text-ocean-deep bg-ocean/10 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                          Edit Suggestion
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-charcoal-light/50">{c.date}</span>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed whitespace-pre-wrap">
                    {c.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Feedback Form */}
      <div className="mt-10">
        <FeedbackForm outlineSlug={outline.slug} songTitle={outline.songTitle} />
      </div>

      {/* Share / Nav */}
      <div className="mt-8 pt-6 border-t border-ocean/10 flex items-center justify-between">
        <Link
          href="/browse"
          className="text-sm text-charcoal-light hover:text-ocean transition-colors"
        >
          &larr; Back to all outlines
        </Link>
        <CopyLinkButton />
      </div>
    </div>
  );
}
