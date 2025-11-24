import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface FeaturedCase {
  slug: string;
  title: string;
  industry: string;
  result: string;
  tags: string[];
  url: string;
  logo: string;
}

const featuredWork: FeaturedCase[] = [
  {
    slug: 'advocateed',
    title: 'AdvocateEd',
    industry: 'Education Advocacy',
    result: '7-Day Launch',
    tags: ['Web Design', 'Lead Generation'],
    url: 'https://advocateed.bolt.host',
    logo: '/ChatGPT Image Nov 5, 2025, 02_25_56 PM.png'
  },
  {
    slug: 'corstar',
    title: 'Corstar',
    industry: 'IT Services',
    result: '7-Day Launch',
    tags: ['Web Design', 'Professional Services'],
    url: 'https://corstar.bolt.host',
    logo: '/ChatGPT Image Nov 5, 2025, 10_00_14 AM.png'
  },
  {
    slug: 'hearthstone',
    title: 'HearthStone',
    industry: 'Home Services',
    result: '7-Day Launch',
    tags: ['Web Design', 'Local Business'],
    url: 'https://hearthstone.bolt.host',
    logo: '/Hearthstone Logo.png'
  }
];

export default function FeaturedWork() {

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-4">
            Featured Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
            See What We've <span className="text-pine-green">Built</span>
          </h2>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
            Real projects, real results—from local businesses just like yours
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredWork.map((caseStudy) => (
            <a
              key={caseStudy.slug}
              href={caseStudy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-pine-white rounded-2xl p-8 border-2 border-pine-green/10 hover:border-pine-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-full h-24 flex items-center justify-center mb-6 p-4">
                  <img
                    src={caseStudy.logo}
                    alt={`${caseStudy.title} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-pine-green mb-2 uppercase tracking-wide">
                  {caseStudy.industry}
                </p>
                <h3 className="text-2xl font-bold text-pine-navy mb-3 group-hover:text-pine-green transition-colors">
                  {caseStudy.title}
                </h3>
                <div className="inline-block px-4 py-2 bg-pine-gold/20 rounded-lg mb-4">
                  <p className="text-lg font-bold text-pine-navy">{caseStudy.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags?.slice(0, 2).map((tag, idx) => (
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
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-lg font-semibold text-pine-green hover:text-pine-gold transition-colors"
          >
            See All Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
