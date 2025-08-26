import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Eye, Share, Download } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface FloatingCTAProps {
  isVisible: boolean;
  onClose: () => void;
  eventProgress?: number;
}

export default function FloatingCTA({ isVisible, onClose, eventProgress = 0 }: FloatingCTAProps) {
  const [view, setView] = useState<'organizer' | 'attendee'>('organizer');

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Floating panel */}
          <motion.div
            className="fixed bottom-4 right-4 max-w-sm bg-card/95 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl z-50 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-card-foreground">Your Event</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              
              {/* View toggle */}
              <div className="flex bg-muted rounded-lg p-1 mt-3">
                <button
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    view === 'organizer' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setView('organizer')}
                >
                  Organizer
                </button>
                <button
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    view === 'attendee' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setView('attendee')}
                >
                  Attendee
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <AnimatePresence mode="wait">
                {view === 'organizer' ? (
                  <motion.div
                    key="organizer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        Manage Your Event
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {eventProgress >= 0.8 
                          ? "Your event is almost ready! Add final touches and launch."
                          : "Continue building your event. You're making great progress!"
                        }
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full flex items-center gap-3 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group">
                        <Eye className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                          Preview Event
                        </span>
                      </button>
                      
                      <button className="w-full flex items-center gap-3 p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors group">
                        <Share className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          Share with Team
                        </span>
                      </button>
                      
                      <button className="w-full flex items-center gap-3 p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors group">
                        <Download className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          Export PDF
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="attendee"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        Attendee Experience
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        See what your guests will experience when they join your event.
                      </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm text-muted-foreground">
                        Mobile-optimized view with easy navigation and real-time updates
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <Link
                  to="/escapade"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="flex items-center gap-2">
                    {eventProgress >= 0.8 ? "Launch Event" : "Continue Building"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Don't lose your progress—save your work!
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}