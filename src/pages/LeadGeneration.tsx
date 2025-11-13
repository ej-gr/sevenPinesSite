import { Target, Users, Filter, TrendingUp, Mail, MessageSquare, Phone, ArrowRight, CheckCircle, RefreshCw, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

const funnelStages = [
  {
    stage: 'Awareness',
    icon: Users,
    description: 'Attract your ideal customers through SEO, social media, and targeted content.',
    tactics: ['Local SEO optimization', 'Google Business Profile', 'Social media presence', 'Content marketing'],
  },
  {
    stage: 'Interest',
    icon: Target,
    description: 'Engage visitors with compelling offers, clear value propositions, and lead magnets.',
    tactics: ['Free consultations', 'Downloadable guides', 'Case study showcases', 'Service explainers'],
  },
  {
    stage: 'Conversion',
    icon: Filter,
    description: 'Capture leads through optimized forms, clear CTAs, and friction-free contact methods.',
    tactics: ['Contact forms', 'Calendar booking', 'Live chat', 'Quote requests'],
  },
  {
    stage: 'Nurture',
    icon: Mail,
    description: 'Stay top-of-mind with automated follow-ups, educational content, and personalized outreach.',
    tactics: ['Email sequences', 'SMS follow-ups', 'Review requests', 'Newsletter updates'],
  },
  {
    stage: 'Close',
    icon: TrendingUp,
    description: 'Convert warm leads into paying customers with strategic touchpoints and timely responses.',
    tactics: ['Instant response automation', 'Appointment reminders', 'Proposal delivery', 'Contract signing'],
  },
];

const features = [
  {
    icon: MessageSquare,
    title: 'Multi-Channel Lead Capture',
    description: 'Forms, chat widgets, calendar booking, SMS opt-ins, and phone click-to-call — all integrated.',
  },
  {
    icon: Target,
    title: 'Lead Scoring & Segmentation',
    description: 'Automatically prioritize hot leads and segment contacts based on behavior and interest level.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Follow-Up Sequences',
    description: '3-stage email and SMS campaigns that nurture leads without manual effort.',
  },
  {
    icon: BarChart3,
    title: 'Conversion Tracking & Analytics',
    description: 'See exactly where leads come from, what converts, and where to optimize your funnel.',
  },
  {
    icon: Phone,
    title: 'Instant Response System',
    description: 'Auto-reply to every inquiry within seconds — by text, email, or both.',
  },
  {
    icon: TrendingUp,
    title: 'CRM Pipeline Management',
    description: 'Track every lead from first touch to closed deal in one simple dashboard.',
  },
];

const packages = [
  {
    name: 'Lead Capture Essentials',
    price: '$1,500 setup',
    monthly: '$99/mo',
    description: 'Perfect for businesses just starting to build their lead generation system',
    features: [
      'Optimized contact forms',
      'Calendar booking integration',
      'Instant email auto-responder',
      'Basic lead tracking',
      'Google Analytics setup',
    ],
  },
  {
    name: 'Full Funnel Builder',
    price: '$2,500 setup',
    monthly: '$199/mo',
    popular: true,
    description: 'Complete lead generation system with automation and CRM integration',
    features: [
      'Everything in Essentials',
      'Lead magnet landing pages',
      '3-stage nurture sequences',
      'CRM pipeline setup',
      'Lead scoring & segmentation',
      'SMS + Email automation',
      'Weekly performance reports',
    ],
  },
  {
    name: 'Enterprise Growth System',
    price: '$4,500 setup',
    monthly: '$299/mo',
    description: 'Advanced multi-channel funnel with AI-powered optimization',
    features: [
      'Everything in Full Funnel',
      'Multi-step landing pages',
      'A/B testing framework',
      'Advanced segmentation',
      'Reputation management',
      'Social proof automation',
      'Quarterly strategy sessions',
      'Priority support & optimization',
    ],
  },
];

export default function LeadGeneration() {
  const { openInquiryModal } = useModal();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-pine-navy to-pine-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pine-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-pine-gold/20 text-pine-gold rounded-full text-sm font-semibold mb-6">
            Lead Generation & Funnels
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Visitors Into <br />
            <span className="text-pine-gold">Paying Customers</span>
          </h1>
          <p className="text-2xl text-pine-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build a complete lead generation system that captures, nurtures, and converts — automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCTAClick('cta-leadgen-hero', openInquiryModal)}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-white text-pine-navy font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
            >
              Build Your Funnel
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-pine-navy font-bold rounded-xl transition-all duration-300"
            >
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* Funnel Stages */}
      <section className="py-24 bg-pine-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              The Complete <span className="text-pine-green">Lead Generation Funnel</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              Every stage engineered to move prospects closer to becoming customers
            </p>
          </div>

          <div className="space-y-8">
            {funnelStages.map((stage, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-pine-green/10 hover:border-pine-gold hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-4 bg-gradient-to-br from-pine-green/10 to-pine-gold/10 rounded-xl group-hover:from-pine-gold/20 group-hover:to-pine-gold/30 transition-all">
                      <stage.icon className="w-10 h-10 text-pine-green group-hover:text-pine-gold" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-3xl font-bold text-pine-gold">0{index + 1}</span>
                      <h3 className="text-2xl font-bold text-pine-navy">{stage.stage}</h3>
                    </div>
                    <p className="text-lg text-pine-navy/70 mb-4">{stage.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.tactics.map((tactic, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-pine-green/10 text-pine-green text-sm font-semibold rounded-full"
                        >
                          {tactic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              Everything You Need to <span className="text-pine-green">Generate Leads</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              Integrated tools that work together to capture, qualify, and convert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-pine-white rounded-2xl p-8 border-2 border-pine-green/10 hover:border-pine-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-pine-green/10 to-pine-gold/10 rounded-xl mb-6 group-hover:from-pine-gold/20 group-hover:to-pine-gold/30 transition-all">
                  <feature.icon className="w-8 h-8 text-pine-green group-hover:text-pine-gold" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-pine-navy mb-3">{feature.title}</h3>
                <p className="text-pine-navy/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-pine-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              Lead Generation <span className="text-pine-green">Packages</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              Choose the system that fits your growth goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 ${
                  pkg.popular
                    ? 'border-pine-gold bg-white shadow-2xl scale-105'
                    : 'border-pine-green/20 bg-white hover:border-pine-gold/50 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pine-gold text-pine-navy text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-pine-navy mb-2">{pkg.name}</h3>
                  <p className="text-pine-navy/70 mb-4">{pkg.description}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-pine-green">{pkg.price}</span>
                  </div>
                  <div className="text-lg text-pine-navy/80">
                    + <span className="font-semibold text-pine-gold">{pkg.monthly}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pine-green flex-shrink-0 mt-0.5" />
                      <span className="text-pine-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTAClick('cta-leadgen-' + pkg.name.toLowerCase().replace(/\s+/g, '-'), openInquiryModal)}
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white shadow-lg hover:shadow-2xl'
                      : 'bg-pine-green hover:bg-gradient-to-r hover:from-pine-gold hover:to-[#E6B800] text-white hover:text-pine-navy'
                  }`}
                >
                  Get a Quote →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-white rounded-2xl border-2 border-pine-green/20">
            <p className="text-lg text-pine-navy/80">
              <strong className="text-pine-green">Bundle with your 7-day website build</strong> for seamless integration and better pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pine-green to-pine-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build a Lead-Generating Machine?
          </h2>
          <p className="text-xl text-pine-white/90 mb-8">
            Let's create a funnel that turns traffic into revenue — automatically.
          </p>
          <button
            onClick={() => handleCTAClick('cta-leadgen-final', openInquiryModal)}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-white text-pine-navy font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
          >
            Build Your Funnel
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
