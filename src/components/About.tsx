import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="inline-block">
              <span className="text-pine-green font-semibold text-sm uppercase tracking-wider bg-pine-green/10 px-4 py-2 rounded-full">
                About Seven Pines Design
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy leading-tight">
              Rooted in Real-World Experience
            </h2>

            <p className="text-xl text-pine-navy/80 leading-relaxed max-w-3xl mx-auto">
              Seven Pines Design was founded by <span className="font-semibold text-pine-green">EJ and Kylie Groff</span> — a husband-and-wife team who understand small-business challenges firsthand.
            </p>

            <p className="text-lg text-pine-navy/70 leading-relaxed max-w-3xl mx-auto">
              EJ spent 10+ years in the business world, learning how design and automation drive real growth.
              Kylie grew up in a small-business family, where every client mattered.
            </p>

            <p className="text-lg text-pine-navy/70 leading-relaxed max-w-3xl mx-auto">
              Together, they help local businesses build modern websites that convert visitors into customers — in just 7 days.
            </p>

            {/* Founder Photo Section */}
            <div className="pt-12 pb-8">
              <div className="flex flex-col items-center justify-center">
                {/* Photo */}
                <div className="mb-8">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-pine-gold">
                    <img
                      src="/IMG_3195.jpg"
                      alt="EJ and Kylie Groff, founders of Seven Pines Design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bios Side by Side */}
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 max-w-4xl">
                  {/* Kylie */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-pine-navy mb-3">Kylie Groff</h3>
                    <p className="text-base text-pine-navy/70 leading-relaxed">
                      Raised in a small-business family with deep roots in customer service and community. Brings heart and precision to every project.
                    </p>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block w-px h-24 bg-pine-green/30 self-center"></div>

                  {/* EJ */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-pine-navy mb-3">EJ Groff</h3>
                    <p className="text-base text-pine-navy/70 leading-relaxed">
                      Combining 10+ years in business strategy with a passion for design and automation, EJ helps small businesses turn their websites into growth engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Link
                to="/work"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-10 py-5 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-pine-gold/50 hover:scale-105"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
