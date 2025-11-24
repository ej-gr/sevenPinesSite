import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

const LOGO_PATH = '/Seven Pines Design Logo Transparent Background.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openContactModal } = useModal();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Website Design' },
    { path: '/ai-lines', label: 'AI Lines' },
    { path: '/work', label: 'Our Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src={LOGO_PATH}
              alt="Seven Pines Design"
              className="h-[60px] w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-pine-green'
                    : 'text-pine-navy hover:text-pine-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => handleCTAClick('cta-hero-primary', openContactModal)}
              className="px-6 py-2.5 bg-transparent border-2 border-pine-green hover:bg-pine-green text-pine-green hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Book a Consultation
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-pine-navy hover:bg-pine-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-pine-green/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-pine-green bg-pine-green/10'
                      : 'text-pine-navy hover:bg-pine-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleCTAClick('cta-hero-primary', openContactModal);
                  }}
                  className="mx-4 px-6 py-2.5 bg-transparent border-2 border-pine-green hover:bg-pine-green text-pine-green hover:text-white font-semibold rounded-lg transition-all duration-300 text-center"
                >
                  Book a Consultation
                </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
