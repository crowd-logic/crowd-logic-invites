
export const NeonCalendarIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="neon-calendar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <filter id="glow-calendar">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="url(#neon-calendar)" strokeWidth="2" fill="none" filter="url(#glow-calendar)" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="url(#neon-calendar)" strokeWidth="2" filter="url(#glow-calendar)" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="url(#neon-calendar)" strokeWidth="2" filter="url(#glow-calendar)" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="url(#neon-calendar)" strokeWidth="2" filter="url(#glow-calendar)" />
      <circle cx="8" cy="14" r="1" fill="url(#neon-calendar)" filter="url(#glow-calendar)" />
      <circle cx="12" cy="14" r="1" fill="url(#neon-calendar)" filter="url(#glow-calendar)" />
      <circle cx="16" cy="14" r="1" fill="url(#neon-calendar)" filter="url(#glow-calendar)" />
    </svg>
  );
};
