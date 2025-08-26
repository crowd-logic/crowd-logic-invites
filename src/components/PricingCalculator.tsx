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
    <div className="rounded-xl border border-border p-4 bg-card">
      <label className="block text-sm font-medium text-card-foreground">Attendees</label>
      <input
        type="range"
        min={50}
        max={1000}
        step={10}
        value={attendees}
        onChange={(e) => setAttendees(parseInt(e.target.value))}
        className="mt-2 w-full accent-primary"
      />
      <div className="mt-1 text-sm text-muted-foreground">{attendees} attendees</div>

      <div className="mt-4">
        <div className="text-sm font-medium text-card-foreground">Add‑ons</div>
        <div className="mt-2 grid sm:grid-cols-2 gap-2">
          {addons.map((a) => (
            <label key={a.key} className="flex items-center gap-2 text-sm text-card-foreground">
              <input
                type="checkbox"
                checked={selected.includes(a.key)}
                onChange={(e) =>
                  setSelected((prev) =>
                    e.target.checked ? [...prev, a.key] : prev.filter((k) => k !== a.key)
                  )
                }
                className="accent-primary"
              />
              <span>{a.name}</span>
              <span className="ml-auto text-muted-foreground">${a.price}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm text-card-foreground">
        <input 
          type="checkbox" 
          checked={nonprofit} 
          onChange={(e) => setNonprofit(e.target.checked)}
          className="accent-primary" 
        />
        Nonprofit (−15%)
      </label>

      <div className="mt-4 border-t border-border pt-3 text-sm">
        <div className="flex justify-between text-card-foreground">
          <span>Base</span><span>${base}</span>
        </div>
        <div className="flex justify-between text-card-foreground">
          <span>Add‑ons</span><span>${addonsTotal}</span>
        </div>
        {nonprofit && (
          <div className="flex justify-between text-green-600">
            <span>Nonprofit discount</span><span>−${Math.round(subtotal - total)}</span>
          </div>
        )}
        <div className="flex justify-between font-medium mt-2 text-card-foreground">
          <span>Total</span><span>${total}</span>
        </div>
      </div>
    </div>
  );
}