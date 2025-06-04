
export const NeonTrendingIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="neon-trending" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
        <filter id="glow-trending">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" stroke="url(#neon-trending)" strokeWidth="2" fill="none" filter="url(#glow-trending)" />
      <polyline points="16,7 22,7 22,13" stroke="url(#neon-trending)" strokeWidth="2" fill="none" filter="url(#glow-trending)" />
      <circle cx="13.5" cy="15.5" r="2" stroke="url(#neon-trending)" strokeWidth="1" fill="url(#neon-trending)" opacity="0.3" filter="url(#glow-trending)" />
      <circle cx="8.5" cy="10.5" r="2" stroke="url(#neon-trending)" strokeWidth="1" fill="url(#neon-trending)" opacity="0.3" filter="url(#glow-trending)" />
    </svg>
  );
};
