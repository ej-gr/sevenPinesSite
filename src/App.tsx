import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import FAQ from './pages/FAQPage';
import Automations from './pages/Automations';
import SEO from './pages/SEO';
import Branding from './pages/Branding';
import LeadGeneration from './pages/LeadGeneration';
import { ModalProvider, useModal } from './contexts/ModalContext';
import InquiryModal from './components/modals/InquiryModal';

function AppContent() {
  const { isInquiryModalOpen, closeModal, inquiryConfig } = useModal();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/lead-generation" element={<LeadGeneration />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />

      {inquiryConfig && (
        <InquiryModal
          isOpen={isInquiryModalOpen}
          onClose={closeModal}
          intent={inquiryConfig.intent}
          source={inquiryConfig.source}
          title={inquiryConfig.title}
          buttonText={inquiryConfig.buttonText}
          prefilledService={inquiryConfig.prefilledService}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
