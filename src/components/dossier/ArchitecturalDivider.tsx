interface ArchitecturalDividerProps {
  className?: string;
}

export const ArchitecturalDivider = ({ className = "" }: ArchitecturalDividerProps) => {
  return (
    <div className={`relative w-full h-px my-16 ${className}`}>
      {/* Main line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Central accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent-emerald emerald-glow rounded-full" />
      
      {/* Side accents */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-border rounded-full" />
      <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-border rounded-full" />
    </div>
  );
};