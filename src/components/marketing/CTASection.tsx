import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({
  title = "Ready to run your event without chaos?",
  subtitle = "Start now—no app required. Buy on a card, launch with one link.",
  ctaText = "Start your event",
  ctaHref = "/escapade"
}: { title?: string; subtitle?: string; ctaText?: string; ctaHref?: string }) {
  return (
    <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="relative">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mt-2 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        <Link to={ctaHref} className="inline-flex mt-6 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-2 ring-primary/20">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}