
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles } from "lucide-react";
import { useQuote } from "@/hooks/useQuote";
import { useState, useEffect } from "react";

const InspirationalMessage = () => {
  const { quote, loading, error, refreshQuote } = useQuote();
  const [currentWord, setCurrentWord] = useState("");

  const inspirationalWords = [
    "shining",
    "networking",
    "growing",
    "connecting",
    "thriving",
    "building",
    "creating",
    "inspiring",
    "leading",
    "achieving"
  ];

  useEffect(() => {
    // Set a random word on component mount
    const randomIndex = Math.floor(Math.random() * inspirationalWords.length);
    setCurrentWord(inspirationalWords[randomIndex]);
  }, []);

  if (loading) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-center text-emerald-300">
            <RefreshCw className="animate-spin h-5 w-5 mr-2" />
            Loading inspiration...
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="pb-4">
        <CardTitle className="text-emerald-300 text-lg flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Daily Inspiration for Your Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {quote && (
          <div className="space-y-4">
            <blockquote className="text-white text-lg italic leading-relaxed">
              "{quote.q}"
            </blockquote>
            <div className="flex justify-between items-center">
              <cite className="text-emerald-300 text-sm">— {quote.a}</cite>
              <Button
                onClick={refreshQuote}
                variant="ghost"
                size="sm"
                className="text-emerald-300 hover:text-white hover:bg-emerald-700/50"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                New Quote
              </Button>
            </div>
            <div className="text-xs text-emerald-400 mt-4 border-t border-slate-700 pt-3">
              Inspirational quotes provided by{" "}
              <a 
                href="https://zenquotes.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-emerald-300"
              >
                ZenQuotes API
              </a>
            </div>
          </div>
        )}
        {error && (
          <div className="text-center bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-6 border border-emerald-500/30">
            <div className="text-3xl font-bold text-emerald-200 mb-3">
              ✨ Keep <span className="text-emerald-100 animate-pulse">{currentWord}</span>, Kito! ✨
            </div>
            <p className="text-emerald-300 text-lg font-semibold mb-2">
              Your networking journey is building something amazing.
            </p>
            <p className="text-emerald-400 text-base">
              Every connection you make is a step towards your incredible future.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InspirationalMessage;
