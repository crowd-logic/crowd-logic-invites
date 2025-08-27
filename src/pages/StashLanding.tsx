import { AppShell } from "@/components/AppShell";
import { Archive, MapPinLine, Users, CalendarPlus } from "phosphor-react";
import { Link } from "react-router-dom";

export default function StashLanding() {
  return (
    <AppShell>
      <section className="max-w-3xl mx-auto pt-10 pb-10 px-3 md:px-0">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Everywhere you want to go, organized in one place
        </h1>
        <p className="text-md text-muted-foreground mb-6">
          Don't lose another restaurant, trail, or idea in your camera roll. Stash It scans and cleans up your finds instantly. Private by default. Ready when you need it.
        </p>
        <ul className="space-y-5 mb-8 text-foreground">
          <li>Upload any screenshot or link—get an instant, clean card.</li>
          <li>Share just what you want, with who you want.</li>
          <li>Ready for more? Turn your list into a full trip—no extra steps.</li>
        </ul>
        <button className="w-full py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg shadow-lg hover:bg-secondary/90 transition-colors">
          Import screenshots—see your real list
        </button>
        <div className="text-xs mt-3 text-muted-foreground text-center">
          First 10 scans are always free. No account required until you want to save.
        </div>
        <blockquote className="mt-10 border-l-4 border-secondary pl-4 italic text-lg">
          "I turned 340 screenshots into a city-perfect list for my family in one night. Wish I'd had this years ago."
          <div className="mt-2 text-muted-foreground text-sm font-semibold">
            Samantha K, actual user
          </div>
        </blockquote>
      </section>
    </AppShell>
  );
}