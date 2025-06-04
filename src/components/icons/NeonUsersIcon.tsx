
export const NeonUsersIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="neon-users" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <filter id="glow-users">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="9" cy="7" r="4" stroke="url(#neon-users)" strokeWidth="2" fill="none" filter="url(#glow-users)" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="url(#neon-users)" strokeWidth="2" filter="url(#glow-users)" />
      <circle cx="16" cy="11" r="3" stroke="url(#neon-users)" strokeWidth="2" fill="none" filter="url(#glow-users)" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" stroke="url(#neon-users)" strokeWidth="2" filter="url(#glow-users)" />
    </svg>
  );
};
