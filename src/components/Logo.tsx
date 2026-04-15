export function Logo({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Outlining Chesney logo"
    >
      {/* Clipboard body */}
      <rect x="10" y="12" width="44" height="48" rx="4" fill="#FF6B35" />
      <rect x="10" y="12" width="44" height="48" rx="4" stroke="#E85D2A" strokeWidth="1.5" />
      {/* Clipboard clip */}
      <rect x="22" y="6" width="20" height="12" rx="3" fill="#E85D2A" />
      <rect x="26" y="4" width="12" height="8" rx="2" fill="#FFD166" />
      {/* Paper area */}
      <rect x="14" y="20" width="36" height="36" rx="2" fill="#FFF8F0" />
      {/* Outline lines with indent hierarchy */}
      {/* Level 1 bullet + line */}
      <circle cx="20" cy="27" r="1.5" fill="#00B4D8" />
      <rect x="24" y="25.5" width="20" height="3" rx="1.5" fill="#2D3748" opacity="0.6" />
      {/* Level 2 bullet + line */}
      <circle cx="24" cy="33" r="1.5" fill="#FF6B35" />
      <rect x="28" y="31.5" width="16" height="3" rx="1.5" fill="#2D3748" opacity="0.4" />
      {/* Level 2 bullet + line */}
      <circle cx="24" cy="39" r="1.5" fill="#FF6B35" />
      <rect x="28" y="37.5" width="14" height="3" rx="1.5" fill="#2D3748" opacity="0.4" />
      {/* Level 1 bullet + line */}
      <circle cx="20" cy="45" r="1.5" fill="#00B4D8" />
      <rect x="24" y="43.5" width="18" height="3" rx="1.5" fill="#2D3748" opacity="0.6" />
      {/* Level 2 bullet + line */}
      <circle cx="24" cy="51" r="1.5" fill="#FF6B35" />
      <rect x="28" y="49.5" width="12" height="3" rx="1.5" fill="#2D3748" opacity="0.4" />
      {/* Palm tree accent in corner */}
      <path d="M42 22 C42 22 44 18 46 20 C48 22 45 24 45 24" fill="#00B4D8" opacity="0.3" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-0.5 ${className}`}>
      <span className="font-mono font-bold tracking-tight text-charcoal">Outlining</span>
      <span className="font-display font-black italic text-sunset">Chesney</span>
    </span>
  );
}
