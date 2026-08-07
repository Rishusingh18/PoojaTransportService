import React from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-on-background/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface-container-lowest border-l border-outline-variant shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Drawer Header with Preserved Logo */}
          <div className="flex items-center justify-between pb-6 border-b border-outline-variant/60">
            <a href="/index.html" className="flex items-center gap-2" onClick={onClose}>
              <img 
                src="/image/logo.png" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'image/logo.png'; }} 
                alt="Pooja Transport Service Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="font-display font-bold text-sm tracking-tight text-on-background">
                POOJA <span className="text-[#6e5e00]">TRANSPORT</span>
              </span>
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-on-surface-variant hover:text-on-background"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col space-y-4">
            <a 
              href="/index.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>Home</span>
              <i className="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a 
              href="/about.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>About Us</span>
              <i className="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a 
              href="/service.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>Services & Operations</span>
              <i className="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a 
              href="/contact.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>Contact & Quote</span>
              <i className="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
          </nav>
        </div>

        {/* Bottom Call Action */}
        <div className="pt-6 border-t border-outline-variant/60 space-y-3">
          <a 
            href="tel:+919910204916" 
            className="w-full bg-primary-container text-on-primary font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded text-center block"
          >
            <i className="fas fa-phone-alt mr-2"></i> Call Dispatch: +91 9910204916
          </a>
          <a 
            href="https://wa.me/919910204916" 
            target="_blank" 
            rel="noreferrer"
            className="w-full bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded text-center block"
          >
            <i className="fab fa-whatsapp mr-2 text-sm"></i> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

