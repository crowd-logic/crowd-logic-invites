import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PersonalizedBlueprintProps {
  solution: {
    persona: string;
    pain_point_headline: string;
    case_study: {
      title: string;
      scenario: string;
      solution: string;
      result: string;
    };
    cta_type: string;
    cta_text: string;
    cta_link: string;
  };
}

export const PersonalizedBlueprint = ({ solution }: PersonalizedBlueprintProps) => {
  // Defensive defaults to avoid runtime errors when parts of the solution are missing
  const persona = solution?.persona ?? "Professional";
  const headline = solution?.pain_point_headline ?? "A tailored plan to reach your goals.";
  const caseStudy = solution?.case_study ?? null;
  const ctaText = solution?.cta_text ?? "Learn more";
  const ctaLink = solution?.cta_link ?? "#";
  const hasCtaLink = Boolean(solution?.cta_link);

  return (
    <div className="h-full bg-white p-12 overflow-y-auto">
      <div className="max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-600 font-medium uppercase tracking-wide text-sm mb-2">
            Personalized Solution
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {persona}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {headline}
          </p>
        </motion.div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {caseStudy?.title || "Case Study"}
          </h2>

          {caseStudy ? (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.scenario}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">The Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">The Result</h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 leading-relaxed">
              A relevant case study will appear here once available.
            </p>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-emerald-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-6">
            Join the thousands of {persona.toLowerCase()}s who have already transformed their approach.
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={!hasCtaLink}
            onClick={() => {
              if (hasCtaLink) {
                window.open(ctaLink, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};