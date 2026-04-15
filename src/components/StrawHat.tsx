export function StrawHat({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kenny Chesney song"
    >
      {/* Wide brim — straw colored, loose beach hat shape */}
      <ellipse cx="16" cy="20" rx="15" ry="5" fill="#D4A853" />
      <ellipse cx="16" cy="20" rx="15" ry="5" fill="url(#brim-shade)" />
      {/* Brim edge highlight */}
      <ellipse cx="16" cy="19.5" rx="14.5" ry="4" fill="none" stroke="#C4943F" strokeWidth="0.5" />
      {/* Crown — taller, relaxed shape */}
      <path d="M8 20 C8 20 7 12 10 9 C13 6 19 6 22 9 C25 12 24 20 24 20" fill="#E8C972" />
      <path d="M8 20 C8 20 7 12 10 9 C13 6 19 6 22 9 C25 12 24 20 24 20" fill="url(#crown-shade)" />
      {/* Crown top crease */}
      <path d="M11 10 C13 8 19 8 21 10" stroke="#C4943F" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Hat band — thin dark band */}
      <rect x="8" y="18.5" width="16" height="2" rx="1" fill="#8B6914" opacity="0.4" />
      {/* Straw texture lines */}
      <line x1="10" y1="13" x2="22" y2="13" stroke="#C4943F" strokeWidth="0.3" opacity="0.3" />
      <line x1="9" y1="15" x2="23" y2="15" stroke="#C4943F" strokeWidth="0.3" opacity="0.3" />
      <line x1="9" y1="17" x2="23" y2="17" stroke="#C4943F" strokeWidth="0.3" opacity="0.2" />
      <defs>
        <linearGradient id="brim-shade" x1="16" y1="15" x2="16" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="crown-shade" x1="16" y1="6" x2="16" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
