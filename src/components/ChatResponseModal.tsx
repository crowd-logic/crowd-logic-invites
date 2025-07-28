import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { MessageCircle } from 'lucide-react';

interface ChatResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  response: string;
}

export const ChatResponseModal = ({ isOpen, onClose, response }: ChatResponseModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            AI Sales Consultant
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">
              {response}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};