
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email captured:", email);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
        <p className="text-gray-300">
          Be the first to know when we launch and get exclusive updates on our progress.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 py-3 bg-slate-900/50 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
              required
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Stay Connected
          </Button>
        </form>
      ) : (
        <div className="text-center p-8 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-lg border border-purple-400/30">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">Thank you!</h4>
          <p className="text-gray-300">
            We'll keep you updated on our progress and notify you when we launch.
          </p>
        </div>
      )}
    </div>
  );
};
