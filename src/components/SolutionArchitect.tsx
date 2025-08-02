import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, FileText, Target, TrendingUp } from "lucide-react";

interface SolutionArchitectProps {
  onBack: () => void;
}

interface SolutionBrief {
  challenge: string;
  proposedSolution: string;
  projectedImpact: string;
}

export const SolutionArchitect = ({ onBack }: SolutionArchitectProps) => {
  const [selectedChallenge, setSelectedChallenge] = useState<string>("");
  const [scale, setScale] = useState<number[]>([50]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [solutionBrief, setSolutionBrief] = useState<SolutionBrief | null>(null);

  const challengeOptions = [
    "Managing a Large, Temporary Workforce",
    "Coordinating Complex Group Travel & Events", 
    "Measuring Real-Time Campaign & Event ROI"
  ];

  const getScaleLabel = (value: number) => {
    if (value <= 50) return "Small Team (1-50)";
    if (value <= 100) return "Medium Organization (51-100)";
    if (value <= 250) return "Large Organization (101-250)";
    return "Large Enterprise (500+ people)";
  };

  const handleGenerateBrief = async () => {
    if (!selectedChallenge) return;

    setIsGenerating(true);
    try {
      const prompt = `Challenge: ${selectedChallenge}. Scale: ${getScaleLabel(scale[0])}. Generate a professional preliminary solution brief.`;
      
      const { data, error } = await supabase.functions.invoke('ai-solution-architect', {
        body: { 
          challenge: selectedChallenge,
          scale: getScaleLabel(scale[0]),
          prompt 
        }
      });

      if (error) throw error;
      
      setSolutionBrief(data.brief);
    } catch (error) {
      console.error('Error generating solution brief:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blueprint
        </button>

        {!solutionBrief ? (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Solution Architect</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional diagnostic tool to identify your optimal platform configuration
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-primary" size={24} />
                  Strategic Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="challenge" className="text-base font-medium">
                    What is your primary challenge?
                  </Label>
                  <Select value={selectedChallenge} onValueChange={setSelectedChallenge}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your primary challenge" />
                    </SelectTrigger>
                    <SelectContent>
                      {challengeOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    What is the scale of your need?
                  </Label>
                  <div className="space-y-2">
                    <Slider
                      value={scale}
                      onValueChange={setScale}
                      max={500}
                      min={1}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Small Team</span>
                      <span className="font-medium text-foreground">
                        {getScaleLabel(scale[0])}
                      </span>
                      <span>Large Enterprise</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerateBrief}
                  disabled={!selectedChallenge || isGenerating}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? "Generating..." : "Generate Preliminary Brief"}
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Preliminary Solution Brief</h1>
              <p className="text-muted-foreground">Strategic recommendations for your organization</p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-destructive" size={20} />
                    Challenge Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{solutionBrief.challenge}</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="text-primary" size={20} />
                    Proposed Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{solutionBrief.proposedSolution}</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="text-emerald" size={20} />
                    Projected Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{solutionBrief.projectedImpact}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setSolutionBrief(null)}>
                Generate New Brief
              </Button>
              <Button className="flex-1">
                Schedule Strategic Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};