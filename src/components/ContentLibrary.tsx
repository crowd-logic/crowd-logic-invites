import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Calendar, BarChart3, Shield, Zap } from "lucide-react";

export const ContentLibrary = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="space-y-32 py-16">
      {/* Personal Planners Section */}
      <section id="personal-planners" className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">For Personal Planners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform chaotic group planning into beautiful shared adventures with escapade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Collaborative Planning</h3>
                  <p className="text-muted-foreground">Everyone contributes ideas to the Idea Bucket, and the group votes on their favorites</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Itineraries</h3>
                  <p className="text-muted-foreground">Shared maps and schedules keep everyone on the same page throughout your adventure</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seamless Coordination</h3>
                  <p className="text-muted-foreground">No more lost ideas in group chats - everything is organized and accessible</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full sm:w-auto">
              Start Planning Your Adventure
            </Button>
          </motion.div>

          <motion.div {...fadeInUp} className="relative">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-sm font-medium text-primary">escapade App Preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Brand Managers Section */}
      <section id="brand-managers" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">For Brand Managers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prove experiential marketing ROI with real-time data and comprehensive insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="relative order-2 lg:order-1">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                      <p className="text-sm font-medium text-primary">Event Axis Dashboard</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Live ROI Tracking</h3>
                    <p className="text-muted-foreground">Real-time dashboard showing engagement metrics, lead generation, and conversion data</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Staff Performance</h3>
                    <p className="text-muted-foreground">Monitor team performance across all activations with detailed field reports</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Attendee Engagement</h3>
                    <p className="text-muted-foreground">Connect with attendees through VibePass for lasting brand relationships</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full sm:w-auto">
                See Event Axis in Action
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Professionals Section */}
      <section id="event-professionals" className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">For Event Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline operations with comprehensive event management and staffing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
            <Card className="h-full">
              <CardContent className="p-8 space-y-6">
                <div className="bg-primary/10 p-4 rounded-lg w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">KITO Agency</h3>
                  <p className="text-muted-foreground mb-6">
                    Professional event staffing operations with vetted talent, live performance tracking, and seamless client communication.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Vetted brand ambassador network</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Real-time performance monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Automated payroll and scheduling</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full">Explore Staffing Solutions</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="h-full">
              <CardContent className="p-8 space-y-6">
                <div className="bg-primary/10 p-4 rounded-lg w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">VibePass</h3>
                  <p className="text-muted-foreground mb-6">
                    The social layer for live events, connecting attendees and creating lasting engagement through digital experiences.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Digital collectibles and rewards</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Gamified attendee experiences</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Post-event community building</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full">Discover VibePass</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};