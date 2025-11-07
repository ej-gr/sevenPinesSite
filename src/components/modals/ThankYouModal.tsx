import { CheckCircle, X } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function ThankYouModal({ isOpen, onClose, title, message }: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-pine-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-pine-navy/40" />
        </button>

        <div className="text-center">
          <div className="inline-flex p-4 bg-pine-green/10 rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-pine-green" />
          </div>

          <h2 className="text-3xl font-bold text-pine-navy mb-4">
            {title || "Thank You!"}
          </h2>

          <p className="text-lg text-pine-navy/70 leading-relaxed mb-6">
            {message || "We've received your message and will get back to you within 24 hours."}
          </p>

          <div className="bg-pine-white p-4 rounded-xl mb-6 border border-pine-green/10">
            <p className="text-sm text-pine-navy/80">
              <strong className="text-pine-green">Response Time:</strong> We typically reply within 24 hours during business days
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full px-8 py-4 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
