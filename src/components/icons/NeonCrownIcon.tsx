
export const NeonCrownIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="neon-crown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <filter id="glow-crown">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="M2 20h20l-2-8-4 4-4-8-4 8-4-4-2 8z" stroke="url(#neon-crown)" strokeWidth="2" fill="url(#neon-crown)" fillOpacity="0.2" filter="url(#glow-crown)" />
      <circle cx="12" cy="6" r="2" stroke="url(#neon-crown)" strokeWidth="2" fill="url(#neon-crown)" filter="url(#glow-crown)" />
      <circle cx="6" cy="8" r="1.5" stroke="url(#neon-crown)" strokeWidth="1" fill="url(#neon-crown)" filter="url(#glow-crown)" />
      <circle cx="18" cy="8" r="1.5" stroke="url(#neon-crown)" strokeWidth="1" fill="url(#neon-crown)" filter="url(#glow-crown)" />
    </svg>
  );
};
