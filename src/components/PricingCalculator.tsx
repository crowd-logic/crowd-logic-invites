"use client";
import { useMemo, useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const bands = [
  { max: 150, price: 299 },
  { max: 500, price: 599 },
  { max: 1000, price: 999 },
];

const addons = [
  { 
    key: "team", 
    name: "Team Pack", 
    price: 149, 
    features: ["Icebreakers & Speed Networking", "Polls & Q&A", "Session timers", "Leaderboards"] 
  },
  { 
    key: "wall", 
    name: "Photo Wall Pro", 
    price: 149, 
    features: ["Moderated photo uploads", "Signage feeds", "Sponsor frames", "Real-time gallery"] 
  },
  { 
    key: "explore", 
    name: "Explore Pack", 
    price: 199, 
    features: ["Curated POIs", "Indoor pin drops", "Scavenger games", "Group formation tools"] 
  },
  { 
    key: "analytics", 
    name: "Analytics Pack", 
    price: 199, 
    features: ["Attendance curves", "Communication reach", "Signage impressions", "CSV/PDF exports"] 
  },
];

export default function PricingCalculator({ onAddonsChange }: { onAddonsChange?: (addons: string[]) => void }) {
  const [attendees, setAttendees] = useState(300);
  const [nonprofit, setNonprofit] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleAddonChange = (newSelected: string[]) => {
    setSelected(newSelected);
    onAddonsChange?.(newSelected);
  };

  const toggleExpanded = (key: string) => {
    setExpanded(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const base = useMemo(() => {
    const band = bands.find(b => attendees <= b.max) ?? bands[bands.length - 1];
    return band.price;
  }, [attendees]);

  const addonsTotal = useMemo(
    () => addons.filter(a => selected.includes(a.key)).reduce((s, a) => s + a.price, 0),
    [selected]
  );

  const subtotal = base + addonsTotal;
  const total = nonprofit ? Math.round(subtotal * 0.85) : subtotal;

  return (
    <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 shadow-lg backdrop-blur-sm">
      <div className="space-y-6">
        {/* Attendees Section */}
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-foreground">Event Size</label>
          <div className="relative">
            <input
              type="range"
              min={50}
              max={1000}
              step={10}
              value={attendees}
              onChange={(e) => setAttendees(parseInt(e.target.value))}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>50</span>
            <span className="font-medium text-lg text-foreground">{attendees} attendees</span>
            <span>1,000</span>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Add-ons</h3>
          <div className="grid gap-3">
            {addons.map((a) => (
              <div key={a.key} className="border border-border/50 rounded-lg overflow-hidden bg-card/50">
                <div className="flex items-center gap-3 p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(a.key)}
                    onChange={(e) => {
                      const newSelected = e.target.checked 
                        ? [...selected, a.key] 
                        : selected.filter((k) => k !== a.key);
                      handleAddonChange(newSelected);
                    }}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-medium text-foreground">{a.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">${a.price}</span>
                      <button
                        type="button"
                        onClick={() => toggleExpanded(a.key)}
                        className="p-1 hover:bg-accent/20 rounded transition-colors"
                      >
                        {expanded.includes(a.key) ? 
                          <CaretUp className="h-4 w-4 text-muted-foreground" /> : 
                          <CaretDown className="h-4 w-4 text-muted-foreground" />
                        }
                      </button>
                    </div>
                  </div>
                </div>
                {expanded.includes(a.key) && (
                  <div className="px-3 pb-3 border-t border-border/30 bg-accent/5">
                    <div className="pt-3">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">What's included:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {a.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Nonprofit Discount */}
        <label className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-border transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={nonprofit} 
              onChange={(e) => setNonprofit(e.target.checked)}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
            />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">Nonprofit Organization</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground">−15%</span>
        </label>

        {/* Total Section */}
        <div className="border-t border-border/50 pt-6 space-y-3">
          <div className="flex justify-between text-foreground">
            <span>Base Event Package</span>
            <span className="font-medium">${base}</span>
          </div>
          <div className="flex justify-between text-foreground">
            <span>Selected Add-ons</span>
            <span className="font-medium">${addonsTotal}</span>
          </div>
          {nonprofit && (
            <div className="flex justify-between text-emerald-600">
              <span>Nonprofit Discount</span>
              <span className="font-medium">−${Math.round(subtotal - total)}</span>
            </div>
          )}
          <div className="flex justify-between text-xl font-bold text-foreground pt-3 border-t border-border/50">
            <span>Total</span>
            <span className="text-primary">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}