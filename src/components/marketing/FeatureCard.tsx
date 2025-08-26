import React from "react";
import { Check } from "lucide-react";

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
    <div className="rounded-xl border border-border bg-card/80 backdrop-blur p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {icon ?? <span className="font-bold">★</span>}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
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