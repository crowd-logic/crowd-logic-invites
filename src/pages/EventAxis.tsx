import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EventAxisPage = () => {
  const [challenge, setChallenge] = useState('Managing a Large, Temporary Workforce');
  const [scale, setScale] = useState('Small Team');
  const [isLoading, setIsLoading] = useState(false);
  const [brief, setBrief] = useState<any>(null);
  const [error, setError] = useState('');

  const handleGenerateBrief = async () => {
    setIsLoading(true);
    setBrief(null);
    setError('');

    try {
      // This is the live call to your 'ai-solution-architect' function
      const { data, error: functionError } = await supabase.functions.invoke('ai-solution-architect', {
        body: {
          challenge: challenge,
          scale: scale
        }
      });

      if (functionError) throw functionError;

      // Set the state with the exact response structure from your AI
      if (data && data.brief) {
        setBrief(data.brief);
      } else {
        throw new Error("Invalid response structure from the server.");
      }
      
    } catch (err: any) {
      console.error('Error generating solution brief:', err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupClick = () => {
    // Handle signup click - could navigate to signup page or open modal
    console.log('Signup clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Navigation onSignupClick={handleSignupClick} />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Campaign's Command Center.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop guessing. Start knowing. EventAxis is the intelligent core of our ecosystem, 
              designed to give you a real-time, unified view of your entire event operation.
            </p>
          </div>

          {/* Solution Architect Form */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Solution Architect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  What is your primary challenge?
                </label>
                <Select value={challenge} onValueChange={setChallenge}>
                  <SelectTrigger className="w-full bg-background/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="Managing a Large, Temporary Workforce">
                      Managing a Large, Temporary Workforce
                    </SelectItem>
                    <SelectItem value="Coordinating Complex Group Travel & Events">
                      Coordinating Complex Group Travel & Events
                    </SelectItem>
                    <SelectItem value="Measuring Real-Time Campaign & Event ROI">
                      Measuring Real-Time Campaign & Event ROI
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  What is the scale of your need?
                </label>
                <Select value={scale} onValueChange={setScale}>
                  <SelectTrigger className="w-full bg-background/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="Small Team">Small Team (1-50 people)</SelectItem>
                    <SelectItem value="Medium Scale">Medium Scale (51-500 people)</SelectItem>
                    <SelectItem value="Enterprise">Large Enterprise (500+ people)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGenerateBrief} 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Preliminary Brief'}
              </Button>
            </CardContent>
          </Card>

          {/* Brief Results */}
          {(brief || error) && (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mb-6">
                    <p className="text-destructive font-medium">{error}</p>
                  </div>
                )}
                
                {brief && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Preliminary Brief</h3>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground leading-relaxed">{brief.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Proposed Solution:</h4>
                      <p className="text-muted-foreground leading-relaxed">{brief.proposedSolution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Projected Impact:</h4>
                      <p className="text-muted-foreground leading-relaxed">{brief.projectedImpact}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventAxisPage;