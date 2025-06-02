
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Shape the Future Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a potential client, strategic advisor, investor, or someone who shares our vision, we'd love to connect and explore possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <Mail className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Conversations</h3>
            <p className="text-gray-300 mb-6">
              Ready to discuss partnerships, investment opportunities, or how Crowd Logic can transform your events and community engagement?
            </p>
            <a 
              href="mailto:hello@crowdlogic.com"
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2 group"
            >
              <span>hello@crowdlogic.com</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <MessageSquare className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
            <p className="text-gray-300 mb-6">
              Interested in early access, becoming a design partner, or simply staying updated on our progress? Let's start a conversation.
            </p>
            <a 
              href="mailto:connect@crowdlogic.com"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2 group"
            >
              <span>connect@crowdlogic.com</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Launching Mid-2025
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're in active development with demo environments showcasing our vision. Connect with us now to be part of shaping the future of events and community engagement.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; 2024 Crowd Logic. Building the future of community engagement.</p>
      </footer>
    </section>
  );
};
