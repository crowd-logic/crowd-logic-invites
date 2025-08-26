import React from "react";

export default function AddonCard({
  title,
  price,
  description,
  bullets
}: {
  title: string;
  price: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-xl border border-border p-4 bg-card/80 backdrop-blur hover:shadow transition">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-card-foreground">{title}</h4>
        <span className="text-sm font-medium text-primary">{price}</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      <ul className="mt-2 pl-4 list-disc text-sm text-card-foreground">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}