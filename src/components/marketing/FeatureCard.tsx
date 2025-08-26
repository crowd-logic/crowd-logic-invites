import React from "react";
import { Check } from "@phosphor-icons/react";

export default function FeatureCard({
  icon,
  title,
  description,
  items
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-card/90 to-card/70 backdrop-blur p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
          {icon ?? <span className="font-bold text-lg">★</span>}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
          {items && items.length > 0 && (
            <ul className="mt-3 space-y-1">
              {items.map((it, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-card-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}