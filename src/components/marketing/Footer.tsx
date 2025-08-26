import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-gradient-to-t from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/marketing/organizer" className="hover:text-foreground transition">Escapade for Events</Link></li>
              <li><Link to="/marketing/stash" className="hover:text-foreground transition">Stash for Personal Use</Link></li>
              <li><Link to="/marketing/pricing" className="hover:text-foreground transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#vision" className="hover:text-foreground transition">Vision</a></li>
              <li><a href="/#service" className="hover:text-foreground transition">Services</a></li>
              <li><a href="/#contact" className="hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/admin-secret-signups" className="hover:text-foreground transition">Early Access</Link></li>
              <li><a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Try Escapade</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://linkedin.com/in/kitowilliams" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          © 2025 CrowdLogic. Orchestrating unforgettable experiences with intelligence and heart.
        </div>
      </div>
    </footer>
  );
}