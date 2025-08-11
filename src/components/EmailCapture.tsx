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
        className={`text-center p-6 bg-accent/10 rounded-lg border border-accent/30 ${className}`}
      >
        <Check className="w-8 h-8 mx-auto mb-4 text-accent" />
        <h3 className="text-lg font-semibold text-foreground mb-2">You're in!</h3>
        <p className="text-muted-foreground">Thanks! We’ll be in touch soon.</p>
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
      <div className="flex items-center space-x-2 p-4 bg-secondary/50 rounded-lg border border-border">
        <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:ring-0"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={!email || isLoading}
        className="w-full"
      >
        {isLoading ? "Adding you..." : buttonText}
      </Button>
    </motion.form>
  );
};