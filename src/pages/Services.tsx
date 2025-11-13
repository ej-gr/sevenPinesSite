import { Rocket, TrendingUp, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';
import FAQ from '../components/FAQ';

const services = [
  {
    icon: Sparkles,
    emoji: '🌱',
    title: 'Sprout Plan',
    price: '$750 + $149/mo',
    description: 'For Small Businesses & Startups',
    bullets: [
      '3-Page Website',
      'On-Page SEO Optimization',
      'Lead Capture Forms & Chat Widget',
      'Mobile-Friendly Website Design',
      'Mobile App Management',
      '1 Website Edit Per Month'
    ],
    ctaText: 'Get Started'
  },
  {
    icon: Rocket,
    emoji: '🌿',
    title: 'Grow Plan',
    price: '$1,599 + $349/mo',
    description: 'For Scaling Businesses & Entrepreneurs',
    bullets: [
      '5-Page Website',
      'Everything in Sprout, PLUS:',
      'Appointment Booking System',
      'Payment Processing Integration',
      'Automated Google Reviews',
      '3 Website Edits Per Month'
    ],
    isPopular: true,
    ctaText: 'Start Your Build'
  },
  {
    icon: TrendingUp,
    emoji: '🌲',
    title: 'Evergreen Plan',
    price: '$3,499 + $699/mo',
    description: 'For Established Brands & Enterprises',
    bullets: [
      '10+ Page Custom Website',
      'Everything in Grow, PLUS:',
      'AI Voice Agent',
      'AI Chatbot',
      'Ongoing SEO Management',
      '5 Website Edits Per Month'
    ],
    ctaText: 'Launch My Site'
  },
  {
    icon: TrendingUp,
    emoji: '🌳',
    title: 'Forest Plan',
    price: '$9,999 + $1,999/mo',
    description: 'For Large Businesses & Custom Systems',
    bullets: [
      'Includes Everything in Evergreen, PLUS:',
      'Multi-Site or Multi-Brand Management',
      'Advanced AI Automations',
      'Dedicated Account Manager',
      'Custom CRM + Marketing Funnels',
      'Priority 24/7 Support'
    ],
    isPremium: true,
    ctaText: 'Talk to Our Team'
  }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  const { openContactModal } = useModal();

  return (
    <div className={`relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
      service.isPopular 
        ? 'bg-gradient-to-br from-white to-green-50 border-2 border-pine-gold ring-2 ring-pine-gold/20 scale-105' 
        : service.isPremium
        ? 'bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300 shadow-2xl'
        : 'bg-white border-2 border-pine-green/20 hover:border-pine-gold'
    }`}>
      {service.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pine-gold text-pine-navy px-6 py-2 rounded-full font-bold text-sm shadow-xl">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">🌿</span> Most Popular
          </div>
        </div>
      )}
      
      <div className="flex flex-col h-full">
        {/* Header Section - Fixed Height */}
        <div className="flex-shrink-0 text-center mb-6">
          <div className="text-5xl mb-3">{service.emoji}</div>
          <h3 className="text-2xl font-bold text-pine-navy mb-2 min-h-[64px] flex items-center justify-center">{service.title}</h3>
          <p className="text-sm text-pine-navy/60 mb-4 min-h-[42px] flex items-center justify-center">{service.description}</p>
          <div className="space-y-2 mb-4">
            <div className="text-2xl font-bold text-pine-green">
              {service.price}
            </div>
          </div>
        </div>

        {/* Divider - Always at same height */}
        <div className="border-t border-pine-green/10 mb-6"></div>

        {/* Features Section - Grows to fill space */}
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {service.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-pine-green flex-shrink-0 mt-0.5" />
                <span className={`text-sm leading-relaxed ${service.isPremium ? 'text-pine-navy/70' : 'text-pine-navy/80'}`}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button - Always at bottom */}
        {service.ctaText && (
          <button
            onClick={() => handleCTAClick('cta-pricing', openContactModal)}
            className={`w-full py-3.5 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
              service.isPopular
                ? 'bg-gradient-to-r from-pine-gold via-amber-400 to-pine-gold text-pine-navy shadow-xl hover:shadow-2xl hover:from-amber-400 hover:via-pine-gold hover:to-amber-400'
                : service.isPremium
                ? 'bg-slate-700 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl border-2 border-slate-500'
                : 'bg-pine-green hover:bg-pine-navy text-white shadow-md hover:shadow-lg'
            }`}
          >
            {service.ctaText}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  const { openContactModal } = useModal();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-pine-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pine-navy mb-4">
            Our <span className="text-pine-green">Services</span>
          </h1>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
            Fast, modern websites and growth systems — from launch to automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-gradient-to-br from-pine-green via-pine-navy to-pine-green py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start? Let's Launch in 7 Days.
          </h2>
          <p className="text-xl text-pine-white/90 mb-8 max-w-2xl mx-auto">
            From strategy to launch, we'll build your custom website in just one week.
          </p>
          <button
            id="cta-services-kickoff"
            onClick={() => handleCTAClick('cta-services-kickoff', openContactModal)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-pine-gold hover:bg-white text-pine-navy font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
          >
            Book Your Kickoff Call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <FAQ />
    </div>
  );
}
