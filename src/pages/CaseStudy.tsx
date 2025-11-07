import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Quote, Target, Lightbulb, TrendingUp, CheckCircle, ExternalLink, Monitor, Smartphone } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface CaseStudy {
  title: string;
  industry: string;
  result: string;
  tags: string[];
  overview: string;
  goals: string;
  solution: string;
  results: string;
  testimonial_text: string;
  testimonial_author: string;
  testimonial_role: string;
  website_url?: string;
  screenshot_desktop?: string;
  screenshot_mobile?: string;
  screenshot_before?: string;
  gallery_images?: string[];
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaseStudy() {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (!error && data) {
        setCaseStudy(data);
      }
      setLoading(false);
    }

    if (slug) {
      fetchCaseStudy();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pine-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-pine-navy/70">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-pine-navy mb-4">Case Study Not Found</h1>
          <p className="text-pine-navy/70 mb-8">The case study you're looking for doesn't exist.</p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-gradient-to-b from-pine-white to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-pine-green hover:text-pine-gold font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Work
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-pine-green/10 text-pine-green text-sm font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-pine-navy mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-2xl text-pine-green font-semibold mb-2">{caseStudy.industry}</p>
            <div className="inline-block px-6 py-3 bg-pine-gold rounded-xl">
              <p className="text-3xl font-bold text-pine-navy">{caseStudy.result}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Screenshots Section */}
        {(caseStudy.screenshot_desktop || caseStudy.screenshot_mobile) && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-pine-navy">The Transformation</h2>
              {caseStudy.website_url && (
                <a
                  href={caseStudy.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudy.screenshot_desktop && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-pine-navy/70">
                    <Monitor className="w-5 h-5" />
                    <span className="font-semibold text-sm">Desktop View</span>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-pine-green/10">
                    <img
                      src={caseStudy.screenshot_desktop}
                      alt={`${caseStudy.title} - Desktop View`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {caseStudy.screenshot_mobile && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-pine-navy/70">
                    <Smartphone className="w-5 h-5" />
                    <span className="font-semibold text-sm">Mobile View</span>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-pine-green/10 max-w-xs mx-auto lg:mx-0">
                    <img
                      src={caseStudy.screenshot_mobile}
                      alt={`${caseStudy.title} - Mobile View`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pine-green/10 rounded-xl">
              <Target className="w-8 h-8 text-pine-green" />
            </div>
            <h2 className="text-3xl font-bold text-pine-navy">Overview</h2>
          </div>
          <p className="text-lg text-pine-navy/80 leading-relaxed">{caseStudy.overview}</p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pine-gold/20 rounded-xl">
              <CheckCircle className="w-8 h-8 text-pine-gold" />
            </div>
            <h2 className="text-3xl font-bold text-pine-navy">Goals</h2>
          </div>
          <p className="text-lg text-pine-navy/80 leading-relaxed">{caseStudy.goals}</p>
        </section>

        <section className="bg-pine-white p-8 lg:p-12 rounded-2xl border border-pine-green/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pine-green/10 rounded-xl">
              <Lightbulb className="w-8 h-8 text-pine-green" />
            </div>
            <h2 className="text-3xl font-bold text-pine-navy">Solution</h2>
          </div>
          <p className="text-lg text-pine-navy/80 leading-relaxed">{caseStudy.solution}</p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pine-gold/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-pine-gold" />
            </div>
            <h2 className="text-3xl font-bold text-pine-navy">Results</h2>
          </div>
          <p className="text-lg text-pine-navy/80 leading-relaxed whitespace-pre-line">{caseStudy.results}</p>
        </section>

        <section className="bg-gradient-to-br from-pine-green to-pine-navy p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute top-8 right-8 text-pine-gold/20">
            <Quote className="w-24 h-24" fill="currentColor" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
            <p className="text-xl leading-relaxed mb-6 italic">"{caseStudy.testimonial_text}"</p>
            <div className="border-t border-pine-white/20 pt-6">
              <p className="font-bold text-lg">{caseStudy.testimonial_author}</p>
              <p className="text-pine-white/80">{caseStudy.testimonial_role}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-pine-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-pine-navy mb-4">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-pine-navy/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our 7-day process can transform your business online.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105"
          >
            Start Your 7-Day Launch
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
