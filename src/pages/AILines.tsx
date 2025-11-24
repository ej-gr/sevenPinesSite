import { ArrowRight, Check, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../contexts/ModalContext';
import AudioModal from '../components/modals/AudioModal';
import AILinesCallFlow from '../components/AILinesCallFlow';
import AILinesPhoneDemo from '../components/AILinesPhoneDemo';
import AILinesFloatingIcons from '../components/AILinesFloatingIcons';
import MissedCallStorySection from '../components/MissedCallStorySection';

// Config at top of component
const aiLines = {
  name: "AI Lines by Seven Pines",
  booking: import.meta.env.VITE_BOOKING_LINK || import.meta.env.NEXT_PUBLIC_BOOKING_LINK || "https://brand.sevenpines.design/widget/booking/dSmGeHdakanG3vI1jXmf",
  audio: import.meta.env.VITE_AI_LINES_DEMO_AUDIO || import.meta.env.NEXT_PUBLIC_AI_LINES_DEMO_AUDIO || "https://example.com/ai-lines-demo.mp3",
};

const features = [
  "24/7 call coverage",
  "Natural voice, real conversation",
  "Appointment booking & order capture",
  "Trained from your own website + FAQs",
  "Text and email follow-ups",
  "Setup in under a week",
];

const faqs = [
  {
    question: "Is it really my voice?",
    answer: "It's trained to sound like your brand."
  },
  {
    question: "Can it take messages or orders?",
    answer: "Yes, instantly."
  },
  {
    question: "Can I keep my number?",
    answer: "Absolutely."
  },
  {
    question: "How long does setup take?",
    answer: "Typically 3–5 days."
  },
  {
    question: "What if it doesn't know something?",
    answer: "It logs it for you automatically."
  },
];

const steps = [
  {
    number: "1",
    title: "Train",
    description: "We learn your tone, FAQs, and workflows."
  },
  {
    number: "2",
    title: "Launch",
    description: "AI Lines goes live on your phone line."
  },
  {
    number: "3",
    title: "Grow",
    description: "You capture every lead while focusing on real work."
  },
];

export default function AILines() {
  const { openAudioModal, isAudioModalOpen, closeModal } = useModal();

  const handleBookDemo = () => {
    window.open(aiLines.booking, '_blank', 'noopener,noreferrer');
  };

  const handleHearDemo = () => {
    openAudioModal();
  };

  return (
    <>
      <div className="pt-20 min-h-screen bg-white">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "AI Lines by Seven Pines",
              "description": "24/7 AI voice agent trained on your own business to capture leads and take orders.",
              "offers": {
                "@type": "Offer",
                "price": "399.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />

        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pine-navy via-teal-900 to-pine-navy relative overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8 sm:mb-10 lg:mb-12 flex justify-center"
            >
              <MissedCallStorySection />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              AI Lines by Seven Pines
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-6 font-medium">
              Real conversations. Zero missed calls.
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your 24/7 AI voice agent trained on your own website and business info — answering questions, booking appointments, and capturing every lead like a real team member.
            </p>

            {/* Interactive iPhone Demo with Example Business */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 relative">
              {/* Phone Demo */}
              <div className="flex justify-center relative z-10">
                <AILinesPhoneDemo />
              </div>
              
              {/* Example Business Content */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-wide mb-3">
                    Example
                  </p>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                    <div className="bg-white/90 rounded-xl p-4 shadow-lg">
                      <img
                        src="/Hearthstone Logo.png"
                        alt="Hearthstone Remodeling"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        Hearthstone Remodeling
                      </h3>
                      <p className="text-white/90 text-lg">
                        A Premium home service contractor
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-white/90 text-sm font-semibold mb-4">
                    Try asking about:
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-pine-gold mt-1">•</span>
                      <span>"What services do you offer?"</span>
                    </li>
                    <li className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-pine-gold mt-1">•</span>
                      <span>"Do you provide free estimates?"</span>
                    </li>
                    <li className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-pine-gold mt-1">•</span>
                      <span>"What areas do you serve?"</span>
                    </li>
                    <li className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-pine-gold mt-1">•</span>
                      <span>"Can I schedule a consultation?"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleBookDemo}
                className="inline-flex items-center gap-3 px-10 py-5 bg-pine-gold hover:bg-white text-pine-navy hover:text-pine-green font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
                aria-label="Book a demo for AI Lines"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleHearDemo}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Hear AI Lines in action"
              >
                <Play className="w-5 h-5" />
                Hear AI Lines in Action
              </button>
            </div>
          </div>
        </section>

        {/* What It Does Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
                Feels human. Works nonstop.
              </h2>
              <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
                AI Lines talks naturally and knows your business.
              </p>
            </div>

            {/* Phone Call Flow Animation */}
            <AILinesCallFlow />

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 mt-16">
              <div>
                <p className="text-lg text-pine-navy/80 leading-relaxed mb-6">
                  It answers calls, takes orders, and books appointments — all trained from your own website content and FAQs.
                </p>
                <p className="text-lg text-pine-navy/80 leading-relaxed">
                  Every call is logged, summarized, and sent to your inbox.
                </p>
              </div>
              <div className="bg-pine-white/50 p-8 rounded-2xl border border-pine-green/10">
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-pine-green flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-pine-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-b from-pine-white/30 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-pine-green/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-pine-green text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-pine-navy">{step.title}</h3>
                  </div>
                  <p className="text-lg text-pine-navy/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
                Simple Pricing
              </h2>
            </div>

            <div className="bg-gradient-to-br from-pine-white to-white p-12 rounded-2xl border-2 border-pine-gold shadow-2xl text-center">
              <div className="mb-8">
                <div className="text-5xl font-bold text-pine-green mb-2">
                  $400 Setup Fee
                </div>
                <div className="text-3xl text-pine-navy/70 mb-2">
                  +
                </div>
                <div className="text-5xl font-bold text-pine-green mb-6">
                  $399/month
                </div>
                <p className="text-xl text-pine-navy/80 font-semibold mb-2">
                  One plan. Everything included.
                </p>
                <p className="text-lg text-pine-navy/70">
                  No tiers. No missed calls. No lost leads.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBookDemo}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  aria-label="Book a demo for AI Lines"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleHearDemo}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-pine-green hover:bg-pine-navy text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  aria-label="Hear a sample of AI Lines"
                >
                  <Play className="w-5 h-5" />
                  Hear a Sample
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-pine-white/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-pine-green/10 shadow-md">
                  <h3 className="text-xl font-bold text-pine-navy mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-lg text-pine-navy/70">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-24 bg-gradient-to-br from-pine-green via-pine-navy to-pine-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBpbmVzIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMzAgMCBMIDM1IDIwIEwgMzAgNDAgTCAyNSAyMCBaIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BpbmVzKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to stop missing calls?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button
                onClick={handleBookDemo}
                className="inline-flex items-center gap-3 px-10 py-5 bg-pine-gold hover:bg-white text-pine-navy hover:text-pine-green font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
                aria-label="Book a demo for AI Lines"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleHearDemo}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Hear AI Lines in action"
              >
                <Play className="w-5 h-5" />
                Hear AI Lines in Action
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Audio Modal */}
      <AudioModal
        isOpen={isAudioModalOpen}
        onClose={closeModal}
        audioUrl={aiLines.audio}
        title="AI Lines Demo"
      />
    </>
  );
}

