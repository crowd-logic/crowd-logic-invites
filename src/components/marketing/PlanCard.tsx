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
    <div className={`rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${highlight ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 ring-2 ring-primary/20" : "bg-gradient-to-br from-card/90 to-card/70 backdrop-blur border-border"}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-card-foreground">{name}</h3>
        {highlight && <span className="text-xs font-bold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full shadow-sm">Popular</span>}
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
      <Link to={ctaHref} className="mt-6 inline-flex items-center justify-center w-full rounded-lg px-5 py-3 text-sm font-semibold border border-border hover:bg-primary hover:text-primary-foreground bg-card text-card-foreground transition-all duration-300 hover:shadow-md group">
        {ctaText} <Plus className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  );
}