import React from "react";
import { Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlanCard({
  name,
  price,
  audience,
  features,
  ctaText,
  ctaHref,
  highlight = false
}: {
  name: string;
  price: string;
  audience: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl border border-border p-5 shadow-sm ${highlight ? "bg-primary/5 border-primary/20" : "bg-card/80 backdrop-blur"}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-card-foreground">{name}</h3>
        {highlight && <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">Popular</span>}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{audience}</p>
      <div className="mt-4">
        <span className="text-2xl font-bold text-card-foreground">{price}</span>
        <span className="text-sm text-muted-foreground"> / event</span>
      </div>
      <ul className="mt-4 space-y-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-card-foreground">
            <Check className="h-4 w-4 text-primary" />
            {f}
          </li>
        ))}
      </ul>
      <Link to={ctaHref} className="mt-5 inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium border border-border hover:bg-background bg-card text-card-foreground transition">
        {ctaText} <Plus className="h-4 w-4 ml-2" />
      </Link>
    </div>
  );
}