import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export function Navigation() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur-xl border-b border-emerald-500/20">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-black text-sm">
              C
            </div>
            <span className="font-bold text-xl tracking-wide text-white group-hover:text-emerald-400 transition-colors">
              CrowdLogic
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/escapade" className="text-white/80 hover:text-emerald-400 font-medium transition-colors relative group">
              For Teams
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/stash" className="text-white/80 hover:text-emerald-400 font-medium transition-colors relative group">
              For Individuals  
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="#proof" className="text-white/80 hover:text-emerald-400 font-medium transition-colors relative group">
              Proof & Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <div className="relative">
              <button
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
                className="flex items-center gap-1 text-white/80 hover:text-emerald-400 font-medium transition-colors"
              >
                More <CaretDown size={14} />
              </button>
              {showProducts && (
                <div
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                  className="absolute top-full right-0 mt-2 w-64 rounded-xl border border-emerald-500/20 bg-black/95 backdrop-blur-xl shadow-2xl"
                >
                  <div className="px-4 py-3 text-xs text-emerald-400 font-semibold border-b border-emerald-500/20">
                    Marketing Pages
                  </div>
                  <Link to="/marketing/organizer" className="block px-4 py-3 text-sm text-white/80 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
                    Escapade Overview
                  </Link>
                  <Link to="/marketing/stash" className="block px-4 py-3 text-sm text-white/80 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
                    Stash Overview
                  </Link>
                  <Link to="/marketing/pricing" className="block px-4 py-3 text-sm text-white/80 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
                    Pricing Plans
                  </Link>
                  <div className="px-4 py-3 text-xs text-emerald-400 font-semibold border-b border-emerald-500/20 border-t border-emerald-500/20">
                    Pricing Calculator
                  </div>
                  <Link to="/escapade/pricing" className="block px-4 py-3 text-sm text-white/80 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all rounded-b-xl">
                    Escapade Pricing
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:block text-white/80 hover:text-emerald-400 font-medium transition-colors">
              Contact
            </a>
            <Link 
              to="/escapade" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
