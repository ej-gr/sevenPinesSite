export type CTAAction =
  | {
      type: 'contact';
      prefilledService?: string;
    }
  | { type: 'callback' }
  | { type: 'scroll'; targetId: string }
  | { type: 'link'; url: string; newTab?: boolean }
  | { type: 'tel'; phone: string }
  | { type: 'mailto'; email: string };

export const ctaMap: Record<string, CTAAction> = {
  'cta-hero-primary': {
    type: 'contact'
  },
  'cta-hero-secondary': {
    type: 'scroll',
    targetId: 'services'
  },
  'cta-services-cabling': {
    type: 'contact',
    prefilledService: 'Structured Cabling'
  },
  'cta-services-it': {
    type: 'contact',
    prefilledService: 'Managed IT Services'
  },
  'cta-pricing-quote': {
    type: 'contact'
  },
  'cta-compliance-assessment': {
    type: 'contact'
  },
  'cta-about-contact': {
    type: 'contact'
  },
  'cta-services-consultation': {
    type: 'contact'
  },
  'cta-schedule': {
    type: 'link',
    url: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com',
    newTab: true
  },
  'cta-call': {
    type: 'tel',
    phone: '+17162046443'
  },
  'cta-email': {
    type: 'mailto',
    email: 'EJ@SevenPines.Design'
  },
  'cta-footer-contact': {
    type: 'contact'
  },
  'cta-home-final': {
    type: 'contact'
  },
  'cta-services-kickoff': {
    type: 'contact'
  },
  'cta-about-behind-pines': {
    type: 'contact'
  },
  'cta-contact-consultation': {
    type: 'contact'
  },
};

export function handleCTAClick(
  ctaId: string,
  openContactModal?: (prefilledService?: string) => void,
  openCallbackModal?: () => void
) {
  const action = ctaMap[ctaId];
  if (!action) return;

  switch (action.type) {
    case 'contact':
      if (openContactModal) {
        openContactModal(action.prefilledService);
      }
      break;
    case 'callback':
      if (openCallbackModal) {
        openCallbackModal();
      }
      break;
    case 'scroll':
      const element = document.getElementById(action.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      break;
    case 'link':
      if (action.newTab) {
        window.open(action.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = action.url;
      }
      break;
    case 'tel':
      window.location.href = `tel:${action.phone}`;
      break;
    case 'mailto':
      window.location.href = `mailto:${action.email}`;
      break;
  }
}
