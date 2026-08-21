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
                src="/image/logo-md.webp" 
                onError={(e) => { (e.target as HTMLImageElement).src = '/image/logo-md.webp'; }} 
                alt="Pooja Transport Service Logo" 
                width="40"
                height="40"
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
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
              <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
            <a 
              href="/about.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>About Us</span>
              <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
            <a 
              href="/service.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>Services & Operations</span>
              <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
            <a 
              href="/contact.html" 
              onClick={onClose} 
              className="text-sm font-semibold text-on-background hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
            >
              <span>Contact & Quote</span>
              <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </nav>
        </div>

        {/* Bottom Call Action */}
        <div className="pt-6 border-t border-outline-variant/60 space-y-3">
          <a 
            href="tel:+919910204916" 
            onClick={() => (window as any).gtag_report_conversion?.('tel:+919910204916')}
            className="w-full bg-[#0b1c30] text-amber-400 font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded text-center flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span>Call Dispatch: +91 9910204916</span>
          </a>
          <a 
            href="https://wa.me/919910204916" 
            target="_blank" 
            rel="noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

