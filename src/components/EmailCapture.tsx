import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

interface EmailCaptureProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export const EmailCapture = ({ 
  placeholder = "Enter your email", 
  buttonText = "Get Early Access",
  className = ""
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center p-6 bg-emerald-900/20 rounded-lg border border-emerald-500/30 ${className}`}
      >
        <Check className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
        <h3 className="text-lg font-semibold text-white mb-2">You're In!</h3>
        <p className="text-emerald-300">We'll notify you when it's ready.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 ${className}`}
    >
      <div className="flex items-center space-x-2 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
        <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none text-white placeholder-slate-400 focus:ring-0"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={!email || isLoading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
      >
        {isLoading ? "Adding you..." : buttonText}
      </Button>
    </motion.form>
  );
};