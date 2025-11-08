import { Rocket, TrendingUp, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';
import FAQ from '../components/FAQ';

const services = [
  {
    icon: Sparkles,
    title: 'Growth Partner',
    price: '$8,999',
    priceSubtext: 'one-time',
    description: 'Your complete brand + automation system.',
    bullets: [
      'Includes Launch Kit + Ongoing Growth',
      'Full brand identity (logo, colors, typography)',
      'Advanced funnel + nurturing automation',
      'SEO + local ranking strategy',
      'Pre-built CRM pipelines',
      '6 months of growth management',
      'VIP hosting + white-glove support'
    ],
    addOn: null,
    subPricing: null,
    footerNote: null
  },
  {
    icon: Rocket,
    title: 'Launch Kit',
    price: '$1,999',
    priceSubtext: 'one-time',
    description: 'Launch your custom 5-page site in 7 days.',
    bullets: [
      'SEO + mobile optimized',
      'Brand setup (colors, fonts, logo)',
      'Google Business + analytics integration'
    ],
    addOn: 'Add-On: Logo & Brand Refresh — $599',
    subPricing: null,
    footerNote: null
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Growth',
    price: '$199–$399',
    priceSubtext: '/month',
    description: 'We keep your site and leads running strong.',
    bullets: [
      'Hosting + security monitoring',
      'CRM + lead tracking',
      'Automated follow-ups (email + text)',
      'Appointment scheduling',
      'Monthly performance reports'
    ],
    addOn: null,
    subPricing: [
      { name: 'Site Care', price: '$199/mo' },
      { name: 'Automation Suite', price: '$249/mo' },
      { name: 'Both Combined', price: '$399/mo' }
    ],
    footerNote: 'All monthly plans require the $1,999 Launch Kit setup.'
  }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;

  return (
    <div className="bg-white border-2 border-pine-green/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-pine-gold">
      <div className="text-center mb-6">
        <div className="inline-flex p-4 bg-pine-green/10 rounded-xl mb-4">
          <Icon className="w-10 h-10 text-pine-green" strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-bold text-pine-navy mb-3">{service.title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-[#1E7A3B]">
            {service.price}
          </span>
          {service.priceSubtext && (
            <span className="text-sm text-pine-navy/60 ml-2">
              {service.priceSubtext}
            </span>
          )}
        </div>
        <p className="text-pine-navy/70 leading-relaxed">{service.description}</p>
      </div>

      <div className="border-t border-pine-green/10 pt-6">
        <ul className="space-y-4 mb-6">
          {service.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#1E7A3B] flex-shrink-0 mt-0.5" />
              <span className="text-pine-navy/80 text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {service.addOn && (
        <div className="pt-4 mt-4 border-t border-pine-green/20">
          <p className="text-sm italic text-pine-navy/70">
            {service.addOn}
          </p>
        </div>
      )}

      {service.subPricing && (
        <div className="pt-4 mt-4 border-t border-pine-green/20">
          <div className="overflow-hidden rounded-lg border border-pine-green/20">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-pine-green/10">
                {service.subPricing.map((sub, subIndex) => (
                  <tr key={subIndex} className="bg-white hover:bg-pine-green/5 transition-colors">
                    <td className="py-3 px-4 text-pine-navy font-medium">{sub.name}</td>
                    <td className="py-3 px-4 text-right text-[#1E7A3B] font-bold">{sub.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {service.footerNote && (
        <p className="text-xs italic text-pine-navy/60 mt-4 pt-4 border-t border-pine-green/10">
          {service.footerNote}
        </p>
      )}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
