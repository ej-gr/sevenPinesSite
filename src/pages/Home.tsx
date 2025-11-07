import Hero from '../components/Hero';
import ValuePropositionCards from '../components/ValuePropositionCards';
import PainPointsSection from '../components/PainPointsSection';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { openInquiryModal } = useModal();
  const [showOptional, setShowOptional] = useState(false);

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Pain Points/Solution */}
      <PainPointsSection />

      {/* 3. 7-Day Journey */}
      <ValuePropositionCards />

      {/* Toggle for mobile - show optional sections */}
      <div className="lg:hidden bg-pine-white py-8 text-center border-t border-pine-green/10">
        <button
          onClick={() => setShowOptional(!showOptional)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-pine-green/20 text-pine-navy font-semibold rounded-xl hover:border-pine-green/40 transition-all duration-300"
        >
          {showOptional ? 'Hide' : 'Show'} More Details
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showOptional ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Optional sections - collapsed on mobile, visible on desktop */}
      <div className={`${showOptional ? 'block' : 'hidden'} lg:block`}>
        {/* Footer CTA */}
        <section className="py-24 bg-gradient-to-br from-pine-green via-pine-navy to-pine-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBpbmVzIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMzAgMCBMIDM1IDIwIEwgMzAgNDAgTCAyNSAyMCBaIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BpbmVzKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-pine-white/90 mb-4 leading-relaxed">
              From seed to site in just 7 days. Let's build something exceptional together.
            </p>
            <p className="text-lg text-pine-white/70 mb-12">
              Custom websites · Strategic design · Real results
            </p>

            <button
              onClick={() => handleCTAClick('cta-home-final', openInquiryModal)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
            >
              Start Your 7-Day Launch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
