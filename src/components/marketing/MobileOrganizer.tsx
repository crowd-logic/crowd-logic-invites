import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  House, 
  Users, 
  Calendar, 
  ChartBar, 
  Plus,
  Bell,
  Gear,
  Share,
  Eye
} from "@phosphor-icons/react";

interface MobileOrganizerProps {
  className?: string;
}

export default function MobileOrganizer({ className = "" }: MobileOrganizerProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  const bottomNavItems = [
    { id: 'overview', icon: House, label: 'Overview' },
    { id: 'groups', icon: Users, label: 'Groups' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'analytics', icon: ChartBar, label: 'Analytics' },
  ];

  const floatingActions = [
    { icon: Bell, label: 'Send Update', color: 'from-blue-500 to-blue-600' },
    { icon: Share, label: 'Share Event', color: 'from-green-500 to-green-600' },
    { icon: Eye, label: 'Preview', color: 'from-purple-500 to-purple-600' },
    { icon: Gear, label: 'Settings', color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <div className={`relative max-w-sm mx-auto ${className}`}>
      {/* Phone mockup */}
      <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-background rounded-[2rem] overflow-hidden relative h-[600px]">
          {/* Status bar */}
          <div className="bg-card h-8 flex items-center justify-between px-6 text-xs font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-primary rounded-sm" />
              <span>100%</span>
            </div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-bold text-foreground">Summer Conference</h1>
                <p className="text-sm text-muted-foreground">234 attendees</p>
              </div>
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20" />
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 p-4 pb-20 overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-primary">234</div>
                    <div className="text-sm text-muted-foreground">Registered</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-secondary">89%</div>
                    <div className="text-sm text-muted-foreground">Check-in</div>
                  </div>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                  <h3 className="font-semibold mb-2">Recent Activity</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Sarah joined Main Hall</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>New announcement sent</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="space-y-3">
                {['Main Hall', 'Breakout Room A', 'Networking Lounge'].map((group, i) => (
                  <div key={i} className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{group}</h3>
                        <p className="text-sm text-muted-foreground">{45 + i * 15} members</p>
                      </div>
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-3">
                {[
                  { time: '9:00 AM', title: 'Opening Keynote', status: 'live' },
                  { time: '10:30 AM', title: 'Coffee Break', status: 'upcoming' },
                  { time: '11:00 AM', title: 'Panel Discussion', status: 'upcoming' }
                ].map((item, i) => (
                  <div key={i} className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'live' ? 'bg-red-500 animate-pulse' : 'bg-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{item.title}</span>
                          {item.status === 'live' && (
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">LIVE</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-4">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                  <h3 className="font-semibold mb-3">Engagement</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Messages sent</span>
                      <span className="font-semibold">342</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Photos shared</span>
                      <span className="font-semibold">89</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Check-ins</span>
                      <span className="font-semibold">208</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-20 right-4">
            <div className="relative">
              {/* Floating actions */}
              {showFloatingMenu && (
                <motion.div
                  className="absolute bottom-16 right-0 space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {floatingActions.map((action, i) => {
                    const Icon = action.icon;
                    return (
                      <motion.button
                        key={i}
                        className={`flex items-center gap-3 bg-gradient-to-r ${action.color} text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{action.label}</span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}

              {/* Main FAB */}
              <motion.button
                className="w-14 h-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={() => setShowFloatingMenu(!showFloatingMenu)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: showFloatingMenu ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="h-6 w-6" />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/50">
            <div className="flex">
              {bottomNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    className={`flex-1 py-3 flex flex-col items-center gap-1 transition-colors ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}