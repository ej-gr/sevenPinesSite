import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

const LOGO_PATH = '/Seven Pines Design Logo Transparent Background.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openContactModal } = useModal();

  return (
    <footer className="bg-pine-navy text-pine-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src={LOGO_PATH}
                alt="Seven Pines Design"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-pine-white/70 leading-relaxed mb-4">
              Seed to site in 7 days
            </p>
            <p className="text-pine-white/60 text-sm mb-6">
              Modern, crafted websites built fast — rooted in strategy, design and simplicity.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-pine-gold transition-colors">Home</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-pine-gold transition-colors">Services</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-pine-gold transition-colors">About</Link></li>
              <li>
                <button
                  id="cta-footer-contact"
                  onClick={() => handleCTAClick('cta-footer-contact', openContactModal)}
                  className="hover:text-pine-gold transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pine-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+17162046443"
                  className="hover:text-pine-gold transition-colors text-left"
                >
                  (716) 204-6443
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pine-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:EJ@SevenPines.Design"
                  className="hover:text-pine-gold transition-colors text-left"
                >
                  EJ@SevenPines.Design
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-pine-green/20">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <Link 
                to="/terms" 
                className="text-pine-white/60 hover:text-pine-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms
              </Link>
              <span className="text-pine-white/30">·</span>
              <Link 
                to="/privacy" 
                className="text-pine-white/60 hover:text-pine-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy
              </Link>
              <span className="text-pine-white/30">·</span>
              <Link 
                to="/cookies" 
                className="text-pine-white/60 hover:text-pine-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Cookies
              </Link>
            </div>
            <p className="text-pine-white/60 text-sm">
              © {currentYear} Seven Pines Design. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
