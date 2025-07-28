import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Send, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PersistentChatBarProps {
  isVisible: boolean;
  originalSolution: any;
  onResponse: (response: string) => void;
}

export const PersistentChatBar = ({ isVisible, originalSolution, onResponse }: PersistentChatBarProps) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-followup-qa', {
        body: {
          originalSolution,
          newQuestion: question.trim()
        }
      });

      if (error) {
        console.error('Error getting AI response:', error);
        onResponse("I'm sorry, I couldn't process your question right now. Please try again.");
      } else {
        onResponse(data.response);
      }
    } catch (error) {
      console.error('Error calling function:', error);
      onResponse("I'm sorry, I couldn't process your question right now. Please try again.");
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">AI Sales Consultant</span>
              </div>
              
              <div className="flex-1 flex items-center gap-2">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask a follow-up question about your solution..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={!question.trim() || isLoading}
                  className="px-4"
                >
                  {isLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};