import React from 'react';

interface HeaderProps {
  onToggleMenu: () => void;
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleMenu, onOpenConsultation }) => {
  return (
    <header className="w-full top-0 sticky bg-[#0b1c30] text-white border-b border-white/10 z-50 transition-shadow duration-300 shadow-md">
      <div className="flex justify-between items-center h-16 sm:h-20 max-w-container-max mx-auto px-2.5 sm:px-4 md:px-margin-desktop min-w-0">
        {/* Preserved Brand Logo & Name */}
        <a href="/index.html" className="flex items-center gap-1.5 sm:gap-3 group shrink min-w-0 mr-1" title="Pooja Transport Service Homepage">
          <picture className="shrink-0">
            <source media="(max-width: 640px)" srcSet="/image/logo-sm.webp" type="image/webp" />
            <source media="(max-width: 1024px)" srcSet="/image/logo-md.webp" type="image/webp" />
            <img 
              src="/image/logo-lg.webp" 
              alt="Pooja Transport Service Logo" 
              width="44"
              height="44"
              fetchPriority="high"
              className="h-7 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </picture>
          <span className="flex flex-col min-w-0">
            <span className="font-display font-bold text-[11px] xs:text-xs sm:text-lg md:text-xl tracking-tight text-white leading-tight truncate">
              POOJA <span className="text-amber-400">TRANSPORT</span>
            </span>
            <span className="hidden sm:block text-[9px] sm:text-[10px] font-semibold tracking-widest text-slate-300 uppercase whitespace-nowrap">
              Relocation Excellence
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <a href="/index.html" className="text-white font-semibold border-b-2 border-amber-400 pb-1 text-sm hover:text-amber-300 transition-colors">
            Home
          </a>
          <a href="/about.html" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">
            About Us
          </a>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <a href="/service.html" className="text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-1.5 py-6">
              Services
              <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-[#131b2e] border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 grid grid-cols-2 gap-3 z-50">
              <a href="/service.html#household" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                </div>
                <div><div className="font-semibold text-sm text-white">Household Relocation</div><p className="text-xs text-slate-300 mt-0.5">White-glove packing & safe transit for homes.</p></div>
              </a>
              <a href="/service.html#office" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div><div className="font-semibold text-sm text-white">Corporate Infrastructure</div><p className="text-xs text-slate-300 mt-0.5">Headquarters & office move execution.</p></div>
              </a>
              <a href="/service.html#vehicle" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM5 11l2-5h10l2 5M5 11h14M5 11v6h2m12-6v6h-2m-10 0h6"/></svg>
                </div>
                <div><div className="font-semibold text-sm text-white">Car & Bike Carrier</div><p className="text-xs text-slate-300 mt-0.5">Enclosed vehicle transport with live tracking.</p></div>
              </a>
              <a href="/service.html#warehousing" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <div><div className="font-semibold text-sm text-white">Bespoke Warehousing</div><p className="text-xs text-slate-300 mt-0.5">Climate-controlled short & long term storage.</p></div>
              </a>
            </div>
          </div>

          {/* Cities Dropdown */}
          <div className="relative group">
            <a href="#" className="text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-1.5 py-6">
              Cities
              <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 w-52 bg-[#131b2e] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
              <a href="/cities/packers-movers-dehradun.html" className="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Dehradun</a>
              <a href="/cities/packers-movers-greater-noida.html" className="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Greater Noida</a>
              <a href="/cities/packers-movers-kanpur.html" className="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Kanpur</a>
              <a href="/cities/packers-movers-lucknow.html" className="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Lucknow</a>
              <a href="/cities/packers-movers-varanasi.html" className="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Varanasi</a>
            </div>
          </div>

          <a href="/contact.html" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Action Container (Call + Get Consultation + Mobile Hamburger) */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          {/* Call Button */}
          <a 
            href="tel:+919910204916" 
            onClick={() => (window as any).gtag_report_conversion?.('tel:+919910204916')}
            className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors shrink-0"
            title="Call Us Now"
          >
            <svg className="w-3.5 h-3.5 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span className="hidden lg:inline">+91 9910204916</span>
            <span className="inline lg:hidden">Call</span>
          </a>

          {/* Get Consultation Button */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenConsultation) {
                onOpenConsultation();
              }
              const el = document.getElementById('quote');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-amber-400 text-[#0b1c30] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-md hover:bg-amber-300 transition-all shadow-sm shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span className="sm:hidden">Consult</span>
            <span className="hidden sm:inline">Get Consultation</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="lg:hidden p-1 text-white hover:text-amber-400 focus:outline-none shrink-0 ml-0.5" 
            onClick={onToggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};
