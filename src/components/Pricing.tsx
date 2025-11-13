import { Check, Sprout, TrendingUp, TreePine, Trees } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';
import { motion } from 'framer-motion';

export default function Pricing() {
  const { openContactModal } = useModal();

  const pricingCards = [
    {
      icon: Sprout,
      title: 'Sprout Plan',
      subtitle: 'For Small Businesses & Startups',
      price: '$750',
      setupPrice: '$750',
      monthlyPrice: '$149',
      features: [
        '3-Page Website',
        'On-Page SEO Optimization',
        'Lead Capture Forms & Chat Widget',
        'Mobile-Friendly Website Design',
        'Mobile App Management',
        '1 Website Edit Per Month'
      ],
      ctaText: 'Get Started',
      gradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      highlight: false,
      tier: 1
    },
    {
      icon: TrendingUp,
      title: 'Grow Plan',
      subtitle: 'For Scaling Businesses & Entrepreneurs',
      price: '$1,599',
      setupPrice: '$1,599',
      monthlyPrice: '$349',
      features: [
        '5-Page Website',
        'Everything in Sprout, PLUS:',
        'Appointment Booking System',
        'Payment Processing Integration',
        'Automated Google Reviews',
        '3 Website Edits Per Month'
      ],
      ctaText: 'Start Your Build',
      gradient: 'from-white to-green-50',
      borderColor: 'border-pine-gold',
      iconBg: 'bg-pine-gold/20',
      iconColor: 'text-pine-gold',
      highlight: true,
      tier: 2
    },
    {
      icon: TreePine,
      title: 'Evergreen Plan',
      subtitle: 'For Established Brands & Enterprises',
      price: '$3,499',
      setupPrice: '$3,499',
      monthlyPrice: '$699',
      features: [
        '10+ Page Custom Website',
        'Everything in Grow, PLUS:',
        'AI Voice Agent',
        'AI Chatbot',
        'Ongoing SEO Management',
        '5 Website Edits Per Month'
      ],
      ctaText: 'Launch My Site',
      gradient: 'from-green-100 to-teal-100',
      borderColor: 'border-green-500',
      iconBg: 'bg-green-200',
      iconColor: 'text-green-800',
      highlight: false,
      tier: 3
    },
    {
      icon: Trees,
      title: 'Forest Plan',
      subtitle: 'For Large Businesses & Custom Systems',
      price: '$9,999',
      setupPrice: '$9,999',
      monthlyPrice: '$1,999',
      features: [
        'Includes Everything in Evergreen, PLUS:',
        'Multi-Site or Multi-Brand Management',
        'Advanced AI Automations',
        'Dedicated Account Manager',
        'Custom CRM + Marketing Funnels',
        'Priority 24/7 Support'
      ],
      ctaText: 'Talk to Our Team',
      gradient: 'from-slate-50 to-slate-100',
      borderColor: 'border-slate-300',
      iconBg: 'bg-slate-200',
      iconColor: 'text-slate-700',
      highlight: false,
      tier: 4,
      premium: true
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E7A3B' fill-opacity='1'%3E%3Cpath d='M40 0 L45 15 L60 10 L50 25 L65 30 L50 35 L60 50 L45 45 L40 60 L35 45 L20 50 L30 35 L15 30 L30 25 L20 10 L35 15 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B4D8C] mb-6">
            From Sprout to Forest. <span className="text-[#1E7A3B]">Choose Your Growth.</span>
          </h2>
          <p className="text-xl text-pine-navy/70 max-w-4xl mx-auto leading-relaxed">
            Every plan includes setup and ongoing management. Choose the tier that matches where you are—and where you're growing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16 mt-16">
          {pricingCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: card.highlight ? -10 : card.premium ? -12 : -6,
                  scale: card.highlight ? 1.02 : card.premium ? 1.03 : 1.0,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 bg-gradient-to-br ${card.gradient} border-2 ${card.borderColor} ${
                  card.highlight
                    ? 'shadow-2xl ring-2 ring-pine-gold/20 scale-105'
                    : card.premium
                    ? 'shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {card.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pine-gold text-pine-navy px-6 py-2 rounded-full font-bold text-sm shadow-xl z-10">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">🌿</span> Most Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Header Section - Fixed Height */}
                  <div className="flex-shrink-0">
                    <div className={`inline-flex p-3 ${card.iconBg} rounded-xl mb-4`}>
                      <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-pine-navy mb-2 leading-tight min-h-[64px]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-pine-navy/60 leading-relaxed mb-4 min-h-[42px]">
                      {card.subtitle}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-3xl font-bold text-pine-navy">
                        {card.setupPrice} <span className="text-sm font-normal text-pine-navy/60">Setup</span>
                      </div>
                      <div className="text-xl font-semibold text-pine-green">
                        + {card.monthlyPrice}<span className="text-sm font-normal text-pine-navy/60">/month</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider - Always at same height */}
                  <div className="border-t border-pine-green/20 mb-6"></div>

                  {/* Features Section - Grows to fill space */}
                  <div className="flex-grow space-y-2.5 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2.5"
                      >
                        <Check className="w-4 h-4 text-pine-green flex-shrink-0 mt-0.5" />
                        <span className="text-pine-navy/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <motion.button
                    onClick={() => handleCTAClick('cta-pricing', openContactModal)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                      card.highlight
                        ? 'bg-gradient-to-r from-pine-gold via-amber-400 to-pine-gold text-pine-navy shadow-xl hover:shadow-2xl hover:from-amber-400 hover:via-pine-gold hover:to-amber-400'
                        : card.premium
                        ? 'bg-slate-700 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl border-2 border-slate-500'
                        : 'bg-pine-green hover:bg-pine-navy text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    {card.ctaText}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 bg-white rounded-2xl border-2 border-pine-green/20 shadow-xl"
        >
          <p className="text-xl text-pine-navy/80 mb-6 font-medium leading-relaxed">
            Not sure which plan fits you best? Schedule a free consultation — we'll help you find your perfect fit.
          </p>
          <motion.button
            onClick={() => handleCTAClick('cta-pricing-consult', openContactModal)}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(30, 122, 59, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl"
          >
            Book a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
