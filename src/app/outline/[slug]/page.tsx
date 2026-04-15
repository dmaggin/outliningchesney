import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { OutlineRenderer } from "@/components/OutlineRenderer";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { outlines, getOutlineBySlug, getOutlineStats } from "@/data/outlines";
import { getFounder } from "@/data/founders";

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

  // Find the duplicate if this outline has one
  const duplicate = outline.duplicateOf
    ? getOutlineBySlug(outline.duplicateOf)
    : undefined;
  const duplicateContributor = duplicate
    ? getFounder(duplicate.contributorId)
    : undefined;

  const formattedDate = new Date(outline.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
            <span className="inline-block bg-ocean/10 text-ocean-deep text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Kenny Chesney
            </span>
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

      {/* The Outline */}
      <OutlineRenderer content={outline.content} />

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
            {new Date(duplicate.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {" "}&mdash; independently, without knowledge of the version above.
          </p>
        </div>
      )}

      {/* Share / Nav */}
      <div className="mt-10 pt-6 border-t border-ocean/10 flex items-center justify-between">
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
