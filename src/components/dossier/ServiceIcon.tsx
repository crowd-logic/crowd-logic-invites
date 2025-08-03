import { ReactNode } from "react";

interface ServiceIconProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const ServiceIcon = ({ children, size = "md", className = "" }: ServiceIconProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className={`${sizeClasses[size]} text-accent-emerald emerald-glow flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};