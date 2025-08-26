import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({
  title = "Ready to run your event without chaos?",
  subtitle = "Start now—no app required. Buy on a card, launch with one link.",
  ctaText = "Start your event",
  ctaHref = "/escapade"
}: { title?: string; subtitle?: string; ctaText?: string; ctaHref?: string }) {
  return (
    <section className="rounded-xl border border-border bg-gradient-to-r from-primary/5 to-primary/10 p-6 text-center">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      <Link to={ctaHref} className="inline-flex mt-4 items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow hover:shadow-md transition hover:bg-primary/90">
        {ctaText}
      </Link>
    </section>
  );
}