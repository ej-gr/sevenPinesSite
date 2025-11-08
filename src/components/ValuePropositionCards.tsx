import { Link } from 'react-router-dom';

export default function ValuePropositionCards() {
  return (
    <section
      id="process"
      className="py-24 bg-[#F8FAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pine-navy mb-4">
            Your 7-Day Launch
          </h2>
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-pine-green hover:text-pine-gold font-semibold text-lg transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
