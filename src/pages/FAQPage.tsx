import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-gradient-to-b from-pine-white to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-4">
            Questions & Answers
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-pine-navy mb-6">
            Frequently Asked <span className="text-pine-green">Questions</span>
          </h1>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about working with Seven Pines Design—from our 7-day process to pricing, support, and beyond.
          </p>
        </div>
      </div>

      <FAQ />

      <div className="bg-pine-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-pine-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-pine-navy/70 mb-8 max-w-2xl mx-auto">
            We're here to help. Book a free 15-minute call or send us a message—we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
