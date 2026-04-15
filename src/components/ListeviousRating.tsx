import Link from "next/link";

interface ListeviousRatingProps {
  score: number;
  brevity: number;
  simplicity: number;
  compression: number;
  label: string;
  showBreakdown?: boolean;
}

function ScoreBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="w-full h-1.5 bg-charcoal/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-ocean to-ocean-light"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function ListeviousRatingBadge({ score, label }: { score: number; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-ocean/10 rounded-full px-2.5 py-1">
      <span className="text-sm font-bold text-ocean">{score.toFixed(1)}</span>
      <span className="text-[0.6rem] font-semibold text-ocean-deep uppercase tracking-wide">{label}</span>
    </div>
  );
}

export function ListeviousRatingCard({
  score,
  brevity,
  simplicity,
  compression,
  label,
  showBreakdown = true,
}: ListeviousRatingProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5">
      <div className="flex items-center justify-between mb-3">
        <Link href="/scoreboard" className="text-sm font-semibold text-charcoal hover:text-ocean transition-colors">
          Listevious Rating
        </Link>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-ocean">{score.toFixed(1)}</span>
          <span className="text-xs text-charcoal-light">/10</span>
        </div>
      </div>
      <p className="text-xs font-medium text-ocean-deep mb-4 italic">{label}</p>

      {showBreakdown && (
        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-charcoal-light">Brevity</span>
              <span className="font-medium text-charcoal">{brevity.toFixed(1)}</span>
            </div>
            <ScoreBar value={brevity} />
            <p className="text-[0.6rem] text-charcoal-light/50 mt-0.5">Shorter bullets = more outlineable</p>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-charcoal-light">Simplicity</span>
              <span className="font-medium text-charcoal">{simplicity.toFixed(1)}</span>
            </div>
            <ScoreBar value={simplicity} />
            <p className="text-[0.6rem] text-charcoal-light/50 mt-0.5">Shallow, clean, formulaic structure</p>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-charcoal-light">Compression</span>
              <span className="font-medium text-charcoal">{compression.toFixed(1)}</span>
            </div>
            <ScoreBar value={compression} />
            <p className="text-[0.6rem] text-charcoal-light/50 mt-0.5">Fewer bullets to capture the whole song</p>
          </div>
        </div>
      )}

      <Link
        href="/scoreboard"
        className="block mt-4 text-xs text-center text-ocean hover:text-ocean-dark transition-colors font-medium"
      >
        View full scoreboard &rarr;
      </Link>
    </div>
  );
}
