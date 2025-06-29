
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles } from "lucide-react";
import { useQuote } from "@/hooks/useQuote";

const InspirationalMessage = () => {
  const { quote, loading, error, refreshQuote } = useQuote();

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
          <div className="text-emerald-300 text-center">
            <p className="mb-2">✨ Keep shining, Kito! ✨</p>
            <p className="text-sm">Your networking journey is building something amazing.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InspirationalMessage;
