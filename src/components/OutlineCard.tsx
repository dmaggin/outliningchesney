import Link from "next/link";
import type { Outline } from "@/data/outlines";
import { getOutlineStats } from "@/data/outlines";
import { getFounder } from "@/data/founders";

export function OutlineCard({ outline }: { outline: Outline }) {
  const stats = getOutlineStats(outline);
  const contributor = getFounder(outline.contributorId);

  return (
    <Link href={`/outline/${outline.slug}`} className="block outline-card">
      <article className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5 h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-charcoal text-lg leading-tight truncate">
              {outline.songTitle}
            </h3>
            <p className="text-sm text-charcoal-light mt-0.5">{outline.artist}</p>
          </div>
          <div className="flex-shrink-0 flex gap-1.5">
            {outline.isChesney ? (
              <span className="inline-block bg-ocean/10 text-ocean-deep text-xs font-semibold px-2 py-0.5 rounded-full">
                Chesney
              </span>
            ) : (
              <span className="badge-visiting">Visiting Artist</span>
            )}
            {outline.isDuplicate && (
              <span className="badge-duplicate">Duplicate</span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="badge-founder text-[0.6rem]">Est. 2010</span>
            <span className="text-xs text-charcoal-light">
              {contributor?.displayName ?? outline.contributorId}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-charcoal-light/60">
            <span>{stats.bulletCount} bullets</span>
            <span>depth {stats.maxDepth}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
