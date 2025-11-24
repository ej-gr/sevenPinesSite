import { MessageSquare, Calendar, RefreshCw, Star, BarChart3, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

const features = [
  {
    icon: MessageSquare,
    title: 'Instant Lead Response',
    description: 'When someone fills out your form, they get an automatic, personalized text or email reply — instantly.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Connects directly to your calendar so clients can book time without back-and-forth emails.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Follow-Ups',
    description: 'Pre-built 3-step email and SMS sequences keep leads warm and convert more sales.',
  },
  {
    icon: Star,
    title: 'Review & Reputation Management',
    description: 'Automatically sends review requests to clients after each job, building your reputation on Google and social.',
  },
  {
    icon: BarChart3,
    title: 'Live Dashboard',
    description: 'Track every lead, message, and booking in one simple CRM dashboard.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Optimization',
    description: 'We monitor your pipeline performance and refine automations every quarter.',
  },
];

const packages = [
  {
    name: 'Essentials',
    setup: '$1,500',
    monthly: '$99/mo',
    features: [
      'CRM setup',
      '2-stage pipeline',
      '1 form connection',
      'Instant SMS/email reply',
      'Calendar integration',
    ],
  },
  {
    name: 'Growth',
    setup: '$2,500',
    monthly: '$199/mo',
    popular: true,
    features: [
      'Everything in Essentials',
      '3 nurture sequences',
      'Review request flow',
      'Weekly performance report',
      'Priority support',
    ],
  },
  {
    name: 'Full Suite',
    setup: '$3,500',
    monthly: '$299/mo',
    features: [
      'Everything in Growth',
      'Lead scoring',
      'Segmentation',
      'Multi-channel follow-ups',
      'Reputation campaigns',
      'Quarterly strategy call',
    ],
  },
];

export default function Automations() {
  const { openInquiryModal } = useModal();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-pine-navy via-pine-navy to-pine-green">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pine-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pine-green rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-pine-gold/20 text-pine-gold rounded-full text-sm font-semibold mb-6">
            Powered by Seven Pines Automation
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Your Growth.
            <br />
            <span className="text-pine-gold">Smart Systems</span> That Work While You Sleep.
          </h1>
          <p className="text-2xl text-pine-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Every Seven Pines site can be powered by our <span className="font-semibold text-pine-gold">custom automation platform</span> — a private, whitelisted CRM and automation system that captures leads, books appointments, sends follow-ups, and builds your reputation automatically.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-pine-white/90 leading-relaxed text-center">
            <span className="text-2xl font-bold text-pine-gold block mb-4">Your website should do more than look good — it should work for you.</span>
            That's why every Seven Pines Design project connects seamlessly to our <strong className="text-pine-gold">customized automation system</strong> that turns every inquiry into a conversation, and every conversation into a customer.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-pine-gold/20 hover:border-pine-gold hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-pine-gold/20 rounded-xl mb-6 group-hover:bg-pine-gold group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-pine-gold group-hover:text-pine-navy" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-pine-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              Automation Setup <span className="text-pine-green">Starts at $1,500</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              Choose between Essentials, Growth, or Full Suite — all include CRM setup, pipeline management, and integrated reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 ${
                  pkg.popular
                    ? 'border-pine-gold bg-gradient-to-b from-pine-gold/10 to-white shadow-2xl scale-105'
                    : 'border-pine-green/20 bg-white hover:border-pine-gold/50 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pine-gold text-pine-navy text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-pine-navy mb-4">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-pine-green">{pkg.setup}</span>
                    <span className="text-pine-navy/60 ml-2">setup</span>
                  </div>
                  <div className="text-lg text-pine-navy/80">
                    + <span className="font-semibold text-pine-gold">{pkg.monthly}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pine-green flex-shrink-0 mt-0.5" />
                      <span className="text-pine-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTAClick('cta-automation-' + pkg.name.toLowerCase(), openInquiryModal)}
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white shadow-lg hover:shadow-2xl'
                      : 'bg-pine-green hover:bg-pine-gold text-white hover:text-pine-navy'
                  }`}
                >
                  Activate Automation →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-pine-white rounded-2xl border border-pine-green/20">
            <p className="text-lg text-pine-navy/80">
              <strong className="text-pine-green">Bundle with your website build</strong> to save time and cost. Optional monthly hosting & support: <strong>$299/month</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-pine-green to-pine-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Let Your Business Run on Autopilot?
          </h2>
          <p className="text-xl text-pine-white/90 mb-8">
            Book a free demo to see our automation platform in action and discover how automation can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCTAClick('cta-automation-demo', openInquiryModal)}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-white text-pine-navy font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleCTAClick('cta-automation-final', openInquiryModal)}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
            >
              Start Your 7-Day Launch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
