"use client";
import { useMemo, useState } from "react";

const bands = [
  { max: 150, price: 299 },
  { max: 500, price: 599 },
  { max: 1000, price: 999 },
];

const addons = [
  { key: "team", name: "Team Pack", price: 149 },
  { key: "wall", name: "Photo Wall Pro", price: 149 },
  { key: "explore", name: "Explore Pack", price: 199 },
  { key: "analytics", name: "Analytics Pack", price: 199 },
];

export default function PricingCalculator() {
  const [attendees, setAttendees] = useState(300);
  const [nonprofit, setNonprofit] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

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
              <label key={a.key} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-border transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(a.key)}
                    onChange={(e) =>
                      setSelected((prev) =>
                        e.target.checked ? [...prev, a.key] : prev.filter((k) => k !== a.key)
                      )
                    }
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{a.name}</span>
                </div>
                <span className="font-semibold text-foreground">${a.price}</span>
              </label>
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