import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  openContactModal: (prefilledService?: string) => void;
  openCallbackModal: () => void;
  closeModal: () => void;
  isContactModalOpen: boolean;
  isCallbackModalOpen: boolean;
  prefilledService?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const openContactModal = (service?: string) => {
    setPrefilledService(service);
    setIsContactModalOpen(true);
  };

  const openCallbackModal = () => {
    setIsCallbackModalOpen(true);
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
    setIsCallbackModalOpen(false);
    setTimeout(() => {
      setPrefilledService(undefined);
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ 
      openContactModal, 
      openCallbackModal, 
      closeModal, 
      isContactModalOpen,
      isCallbackModalOpen,
      prefilledService 
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
