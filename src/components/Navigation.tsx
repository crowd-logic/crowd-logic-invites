import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/53bff6ea-6c8a-4d48-9921-3afdeb9300ef.png"
              alt="CrowdLogic"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl tracking-wide text-primary">CrowdLogic</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            <Link 
              to="/marketing/organizer" 
              className={`nav-link ${location.pathname === '/marketing/organizer' ? 'nav-link-active' : ''}`}
            >
              For Events/Teams
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="nav-link flex items-center gap-1">
                Our Impact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 w-56 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                  <Link to="/marketing/pricing" className="block px-4 py-2 text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors rounded-lg mx-2">
                    Pricing Calculator
                  </Link>
                  <Link to="/escapade" className="block px-4 py-2 text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors rounded-lg mx-2">
                    Escapade Demo
                  </Link>
                  <Link to="/escape-pricing" className="block px-4 py-2 text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors rounded-lg mx-2">
                    Live Pricing
                  </Link>
                </div>
              )}
            </div>
            
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/marketing/organizer" 
              className="btn-cta"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };