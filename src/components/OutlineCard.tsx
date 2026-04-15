import Link from "next/link";
import type { Outline } from "@/data/outlines";
import { getOutlineStats, getListeviousRating } from "@/data/outlines";
import { getFounder } from "@/data/founders";
import { StrawHat } from "./StrawHat";

export function OutlineCard({ outline }: { outline: Outline }) {
  const stats = getOutlineStats(outline);
  const rating = getListeviousRating(outline);
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
              <StrawHat size={26} />
            ) : (
              <span className="badge-visiting">Visiting Artist</span>
            )}
            {outline.isDuplicate && (
              <span className="badge-duplicate">Duplicate</span>
            )}
          </div>
        </div>

        {/* Listevious Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-ocean">{rating.score.toFixed(1)}</span>
          <div className="flex-1">
            <div className="w-full h-1.5 bg-charcoal/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-ocean to-ocean-light"
                style={{ width: `${(rating.score / 10) * 100}%` }}
              />
            </div>
          </div>
          <span className="text-[0.55rem] font-medium text-charcoal-light/50 uppercase tracking-wide whitespace-nowrap">
            Listevious
          </span>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="badge-founder text-[0.6rem]">Est. 2010</span>
            <span className="text-xs text-charcoal-light">
              {contributor?.displayName ?? outline.contributorId}
            </span>
          </div>
          <span className="text-xs text-charcoal-light/60">
            {stats.bulletCount} bullets
          </span>
        </div>
      </article>
    </Link>
  );
}
