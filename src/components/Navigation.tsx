import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export function Navigation() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-neutral-900/60 px-4 py-2.5 backdrop-blur-md">
          <Link to="/" className="font-semibold tracking-wide text-white">CrowdLogic</Link>
          <div className="flex items-center gap-1">
            <Link to="/start" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">
              Get Started
            </Link>
            <Link to="/escapade" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">
              Escapade
            </Link>
            <Link to="/stash" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">
              Stash
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10"
              >
                More <CaretDown size={14} />
              </button>
              {showProducts && (
                <div
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                  className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-white/10 bg-neutral-900/90 backdrop-blur-md shadow-lg"
                >
                  <div className="px-3 py-2 text-xs text-white/60 font-medium border-b border-white/10">
                    Marketing Pages
                  </div>
                  <Link to="/marketing/organizer" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10">
                    Escapade Overview
                  </Link>
                  <Link to="/marketing/stash" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10">
                    Stash Overview
                  </Link>
                  <Link to="/marketing/pricing" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10">
                    Pricing Plans
                  </Link>
                  <div className="px-3 py-2 text-xs text-white/60 font-medium border-b border-white/10 border-t border-white/10">
                    Pricing
                  </div>
                  <Link to="/escapade/pricing" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-b-lg">
                    Escapade Pricing
                  </Link>
                </div>
              )}
            </div>
            <a href="#contact" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
