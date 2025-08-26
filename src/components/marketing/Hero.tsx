import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  eyebrow = "Escapade for Conferences",
  title = "Make your 500-person conference feel effortless",
  subtitle = "One link, no app. Segmented updates, live arrivals, and indoor floorplan proximity—priced so you can buy it on a card.",
  ctaPrimaryText = "Start your event",
  ctaPrimaryHref = "/escapade",
  ctaSecondaryText = "See pricing",
  ctaSecondaryHref = "/escapade/pricing",
  backgroundImage = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop"
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 backdrop-blur-sm" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-foreground leading-tight">{title}</h1>
          <p className="mt-3 md:mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to={ctaPrimaryHref} className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow hover:shadow-md transition hover:bg-primary/90">
              {ctaPrimaryText}
            </Link>
            <Link to={ctaSecondaryHref} className="inline-flex items-center justify-center rounded-md bg-background/70 backdrop-blur px-5 py-3 text-sm font-medium text-foreground border border-border hover:bg-background">
              {ctaSecondaryText}
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-muted-foreground">
            <div>Trusted by organizers of alumni, association, and corporate events</div>
            <div className="hidden md:block h-4 w-px bg-border" />
            <div className="hidden md:block">No app required • Event-scoped privacy • Vendor-of-record</div>
          </div>
        </div>
      </div>
    </section>
  );
}