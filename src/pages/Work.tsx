import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  result: string;
  tags: string[];
  description: string;
  url: string;
  logo: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'advocateed',
    title: 'AdvocateEd',
    industry: 'Education Advocacy',
    result: '7-Day Launch',
    tags: ['Web Design', 'Lead Generation', 'Professional Services'],
    description: 'Professional education advocacy platform connecting families with expert guidance.',
    url: 'https://advocateed.bolt.host',
    logo: '/Advocate Ed Logo.png'
  },
  {
    id: '2',
    slug: 'corstar',
    title: 'Corstar',
    industry: 'IT Services',
    result: '7-Day Launch',
    tags: ['Web Design', 'IT Services', 'B2B'],
    description: 'Modern IT services provider delivering managed solutions for growing businesses.',
    url: 'https://corstar.bolt.host',
    logo: '/Corstar logo - Standard.png'
  },
  {
    id: '3',
    slug: 'hearthstone',
    title: 'HearthStone',
    industry: 'Home Services',
    result: '7-Day Launch',
    tags: ['Web Design', 'Local Business', 'Service Provider'],
    description: 'Premium home services company specializing in quality craftsmanship and customer care.',
    url: 'https://hearthstone.bolt.host',
    logo: '/Hearthstone Logo.png'
  }
];

export default function Work() {
  const { openContactModal } = useModal();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-pine-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-pine-navy mb-6">
            Our Work
          </h1>
          <p className="text-2xl text-pine-green font-semibold mb-4">
            Websites that work as hard as you do.
          </p>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto leading-relaxed">
            Explore our recent builds designed to convert visitors into customers fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-pine-green/10 hover:border-pine-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 bg-gradient-to-br from-pine-white to-white overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img
                    src={study.logo}
                    alt={`${study.title} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-pine-gold text-pine-navy text-sm font-bold rounded-full shadow-lg">
                    {study.result}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold text-pine-green mb-2 uppercase tracking-wide">
                  {study.industry}
                </p>
                <h3 className="text-2xl font-bold text-pine-navy mb-4 group-hover:text-pine-green transition-colors">
                  {study.title}
                </h3>

                <p className="text-pine-navy/70 mb-4 leading-relaxed">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-pine-green/10 text-pine-green text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-pine-green group-hover:text-pine-gold font-semibold transition-colors">
                  Visit Live Site
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-br from-pine-green to-pine-navy rounded-2xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-pine-white/90 mb-8 max-w-2xl mx-auto">
            Let's build something exceptional together—from seed to site in just 7 days.
          </p>
          <button
            onClick={() => handleCTAClick('cta-hero-primary', openContactModal)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
          >
            Start Your 7-Day Launch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
