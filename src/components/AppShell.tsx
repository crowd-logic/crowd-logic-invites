import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users, CalendarPlus, MapPinLine, Archive, ChatsCircle, Sparkle, ArrowArcRight, GearSix
} from "phosphor-react";

interface AppShellProps {
  children: React.ReactNode;
  onRoute?: (path: string) => void;
}

export function AppShell({ children, onRoute }: AppShellProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const getActiveSection = () => {
    if (currentPath.includes("/escapade")) return "escapade";
    if (currentPath.includes("/stash")) return "stash";
    if (currentPath.includes("/inbox")) return "inbox";
    if (currentPath.includes("/profile")) return "profile";
    return "home";
  };

  const active = getActiveSection();

  const handleRoute = (path: string) => {
    if (onRoute) {
      onRoute(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Top bar for desktop */}
      <header className="hidden md:flex items-center justify-between py-3 px-6 bg-background/95 backdrop-blur shadow z-50 border-b border-border/50">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-primary hover:text-primary/80 transition-colors">
            CrowdLogic
          </Link>
          <Link 
            to="/escapade" 
            className={`flex items-center gap-2 font-semibold transition-colors ${
              active === "escapade" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Users size={20} /> Organizer
          </Link>
          <Link 
            to="/stash" 
            className={`flex items-center gap-2 font-semibold transition-colors ${
              active === "stash" ? "text-secondary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Archive size={20} /> Stash It
          </Link>
        </div>
        <div className="flex gap-4">
          <Link 
            to="/escapade" 
            className="bg-primary text-primary-foreground rounded-lg px-5 py-2 shadow font-bold hover:bg-primary/90 transition-colors"
          >
            Start an Event
          </Link>
          <Link 
            to="/stash" 
            className="bg-secondary text-secondary-foreground rounded-lg px-5 py-2 shadow font-bold hover:bg-secondary/90 transition-colors"
          >
            Import Screenshots
          </Link>
          <Link 
            to="/profile" 
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <GearSix size={20} /> Profile
          </Link>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 pb-20 md:pb-0 pt-1">{children}</main>

      {/* Bottom mobile nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-background/90 border-t border-border/50 flex justify-evenly z-50 backdrop-blur">
        <Link 
          to="/escapade" 
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${
            active === "escapade" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Users size={24} />
          <span className="text-xs mt-1">Organizer</span>
        </Link>
        <Link 
          to="/stash" 
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${
            active === "stash" ? "text-secondary" : "text-muted-foreground"
          }`}
        >
          <Archive size={24} />
          <span className="text-xs mt-1">Stash</span>
        </Link>
        <Link 
          to="/escapade" 
          className="flex-1 flex flex-col items-center justify-center text-muted-foreground"
        >
          <CalendarPlus size={24} />
          <span className="text-xs mt-1">Start</span>
        </Link>
        <Link 
          to="/inbox" 
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${
            active === "inbox" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <ChatsCircle size={24} />
          <span className="text-xs mt-1">Inbox</span>
        </Link>
        <Link 
          to="/profile" 
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${
            active === "profile" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <GearSix size={24} />
          <span className="text-xs mt-1">Me</span>
        </Link>
      </nav>

      {/* Contextual floating FAB cross-sell */}
      {active === "stash" && (
        <Link
          to="/escapade"
          className="fixed bottom-28 right-5 z-50 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-xl flex items-center gap-3 px-4 py-3 font-semibold hover:scale-110 transition-transform"
          aria-label="Bring my list to a group event"
        >
          <ArrowArcRight size={22} /> Upgrade to Event
        </Link>
      )}
      {active === "escapade" && (
        <Link
          to="/stash"
          className="fixed bottom-28 right-5 z-50 rounded-full bg-gradient-to-br from-secondary to-primary text-secondary-foreground shadow-xl flex items-center gap-3 px-4 py-3 font-semibold hover:scale-110 transition-transform"
          aria-label="Turn group event into a personal list"
        >
          <ArrowArcRight size={22} /> Stash my Finds
        </Link>
      )}
    </div>
  );
}