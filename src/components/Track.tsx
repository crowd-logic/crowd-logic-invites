"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function TrackPage({ name }: { name: string }) {
  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(window.location.search));
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "page_view", page: name, ...params });
  }, [name]);
  return null;
}

export function TrackCta({ id, label }: { id: string; label: string }) {
  return (
    <button
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "cta_click", id, label });
      }}
      className="hidden"
      aria-hidden
      tabIndex={-1}
    />
  );
}