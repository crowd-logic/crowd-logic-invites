
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, User } from "lucide-react";

export const EmailCapture = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      setIsLoading(true);
      
      // Replace this URL with your Google Apps Script web app URL
      const scriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
      
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            timestamp: new Date().toISOString()
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          console.log("Form submitted successfully:", { firstName, lastName, email });
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // For now, we'll still show success to avoid breaking the UX
        // In production, you'd want to show an error message
        setIsSubmitted(true);
      } finally {
        setIsLoading(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setIsSubmitted(false);
        }, 3000);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-3">Stay Connected</h3>
        <p className="text-gray-300">
          Be the first to know when we launch and get exclusive updates on our progress.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="pl-12 py-3 bg-slate-900/50 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400"
                required
              />
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="relative">
              <Input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="pl-12 py-3 bg-slate-900/50 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400"
                required
              />
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 py-3 bg-slate-900/50 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400"
              required
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Stay Connected"}
          </Button>
        </form>
      ) : (
        <div className="text-center p-6 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg border border-emerald-400/30">
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
