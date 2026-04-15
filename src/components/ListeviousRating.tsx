interface ListeviousRatingProps {
  score: number;
  brevity: number;
  structure: number;
  density: number;
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
  structure,
  density,
  label,
  showBreakdown = true,
}: ListeviousRatingProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-charcoal">Listevious Rating</h3>
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
              <span className="text-charcoal-light">Structure</span>
              <span className="font-medium text-charcoal">{structure.toFixed(1)}</span>
            </div>
            <ScoreBar value={structure} />
            <p className="text-[0.6rem] text-charcoal-light/50 mt-0.5">Deeper nesting = cleaner hierarchy</p>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-charcoal-light">Density</span>
              <span className="font-medium text-charcoal">{density.toFixed(1)}</span>
            </div>
            <ScoreBar value={density} />
            <p className="text-[0.6rem] text-charcoal-light/50 mt-0.5">More bullets per lyric word = more list-like</p>
          </div>
        </div>
      )}
    </div>
  );
}
