
export const NeonNetworkIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="neon-network" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <filter id="glow-network">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="9" cy="9" r="3" stroke="url(#neon-network)" strokeWidth="2" fill="none" filter="url(#glow-network)" />
      <circle cx="15" cy="15" r="3" stroke="url(#neon-network)" strokeWidth="2" fill="none" filter="url(#glow-network)" />
      <circle cx="6" cy="18" r="2" stroke="url(#neon-network)" strokeWidth="2" fill="none" filter="url(#glow-network)" />
      <path d="M12 9l3 6" stroke="url(#neon-network)" strokeWidth="2" filter="url(#glow-network)" />
      <path d="M9 12l-3 6" stroke="url(#neon-network)" strokeWidth="2" filter="url(#glow-network)" />
    </svg>
  );
};
