
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const EmailCapture = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      setIsLoading(true);
      
      try {
        const { error } = await supabase
          .from('email_captures')
          .insert([
            {
              first_name: firstName,
              last_name: lastName,
              email: email
            }
          ]);

        if (error) {
          console.error("Error submitting form:", error);
          toast({
            title: "Error",
            description: "There was an issue submitting your information. Please try again.",
            variant: "destructive",
          });
        } else {
          setIsSubmitted(true);
          console.log("Form submitted successfully:", { firstName, lastName, email });
          toast({
            title: "Thank you!",
            description: "We'll keep you updated on our progress.",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "Error",
          description: "There was an issue submitting your information. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsSubmitted(false);
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
        <div className="text-center p-8 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg border border-emerald-400/30">
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h4 className="text-2xl font-bold text-white mb-3">Success!</h4>
          <p className="text-gray-300 mb-6 text-lg">
            Thank you for joining our community! You're now on our exclusive list and will be the first to know when we launch.
          </p>
          <Button 
            onClick={resetForm}
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
          >
            Sign up another person
          </Button>
        </div>
      )}
    </div>
  );
};
