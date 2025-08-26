import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, ChartBar, Users, MapPin, Heart, Lightning, Target, Buildings } from "@phosphor-icons/react";

export const EcosystemOverview = () => {
  return (
    <motion.section 
      id="ecosystem"
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">The CrowdLogic Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the right solution for your needs across our integrated platform
          </p>
        </motion.div>

        <Tabs defaultValue="personal" className="w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="personal">For Personal Planners</TabsTrigger>
              <TabsTrigger value="brands">For Brands & Agencies</TabsTrigger>
              <TabsTrigger value="staffing">For Staffing & Logistics</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="personal">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex items-center gap-3">
                    <Compass className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-2xl">escapade™</CardTitle>
                      <CardDescription className="text-lg">
                        Your personal travel planning companion
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">The Stash</h4>
                      <p className="text-sm text-muted-foreground">
                        Save and organize all your travel inspirations
                      </p>
                    </div>
                    <div className="text-center">
                      <Lightning className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Idea Bucket</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered suggestions based on your preferences
                      </p>
                    </div>
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Itinerary & Map</h4>
                      <p className="text-sm text-muted-foreground">
                        Visual trip planning with interactive maps
                      </p>
                    </div>
                    <div className="text-center">
                      <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Digital Keepsake</h4>
                      <p className="text-sm text-muted-foreground">
                        Preserve memories with digital collectibles
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button size="lg" className="px-8">
                      Try the Beta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="brands">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="flex items-center gap-3">
                      <ChartBar className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>Event Axis</CardTitle>
                        <CardDescription>
                          Command center for event planning and analytics
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Plan, execute, and analyze events with precision. Real-time ROI tracking, 
                      AI-powered insights, and comprehensive reporting for every activation.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Real-time ROI dashboard</li>
                      <li>• AI-powered staffing optimization</li>
                      <li>• Comprehensive analytics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
                    <div className="flex items-center gap-3">
                      <Users className="h-8 w-8 text-secondary" />
                      <div>
                        <CardTitle>VibePass</CardTitle>
                        <CardDescription>
                          The social layer for audience engagement
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Connect directly with your audience through digital collectibles, 
                      social features, and measurable engagement metrics.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Digital collectibles (POAPs)</li>
                      <li>• Social engagement tracking</li>
                      <li>• Brand loyalty programs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="px-8">
                  Request a Demo
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="staffing">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="flex items-center gap-3">
                      <Buildings className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>KITO Agency</CardTitle>
                        <CardDescription>
                          Premium staffing for large-scale operations
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Specialized in managing large-scale, temporary workforces across any industry. 
                      From events to complex logistics operations.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Premium talent acquisition</li>
                      <li>• Workforce management tools</li>
                      <li>• Industry-specific expertise</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
                    <div className="flex items-center gap-3">
                      <ChartBar className="h-8 w-8 text-secondary" />
                      <div>
                        <CardTitle>Event Axis</CardTitle>
                        <CardDescription>
                          Logistics command center
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Powerful tools for coordinating complex operations, tracking performance, 
                      and optimizing resource allocation in real-time.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Resource optimization</li>
                      <li>• Real-time coordination</li>
                      <li>• Performance analytics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};