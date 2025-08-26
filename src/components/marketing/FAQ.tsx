import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ 
  title = "Frequently Asked Questions",
  items = [
    {
      question: "Can I try before I buy?",
      answer: "Yes! Every plan includes 10 free imports and unlimited personal stashing without payment. You can explore all features before committing."
    },
    {
      question: "Can I mix and match add-ons?",
      answer: "Absolutely! You can add or remove any feature anytime. Your price is always optimized with automatic upgrades when bundles save you money."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We automatically upgrade you to the next tier if it's cheaper than pay-per-seat overages. You'll always get the best price."
    },
    {
      question: "Is there a nonprofit discount?",
      answer: "Yes! Nonprofits and educational institutions get 15% off the base plan price. Just toggle the option in our pricing calculator."
    },
    {
      question: "How quickly can I get started?",
      answer: "Instantly! No app downloads required. Share one link and your event is live. Setup takes less than 5 minutes."
    }
  ]
}: {
  title?: string;
  items?: FAQItem[];
}) {
  return (
    <section className="my-12">
      <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <details key={i} className="group bg-gradient-to-r from-card/90 to-card/70 backdrop-blur p-5 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
            <summary className="font-semibold text-card-foreground cursor-pointer flex items-center justify-between list-none">
              <span className="text-base">{item.question}</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="pt-4 text-muted-foreground leading-relaxed border-t border-border/50 mt-3">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}