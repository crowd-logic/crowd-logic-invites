
export const NeonMailIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="neon-mail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="glow-mail">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" stroke="url(#neon-mail)" strokeWidth="2" fill="none" filter="url(#glow-mail)" />
      <path d="M22 6l-10 7L2 6" stroke="url(#neon-mail)" strokeWidth="2" filter="url(#glow-mail)" />
      <circle cx="6" cy="8" r="1" fill="url(#neon-mail)" opacity="0.6" filter="url(#glow-mail)" />
      <circle cx="18" cy="8" r="1" fill="url(#neon-mail)" opacity="0.6" filter="url(#glow-mail)" />
    </svg>
  );
};
