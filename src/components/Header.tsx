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
            <a href="/service.html" className="text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-1 py-6">
              Services <i className="fas fa-chevron-down text-xs opacity-70 group-hover:rotate-180 transition-transform"></i>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-[#131b2e] border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 grid grid-cols-2 gap-3 z-50">
              <a href="/service.html#household" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i className="fas fa-home text-sm"></i></div>
                <div><div className="font-semibold text-sm text-white">Household Relocation</div><p className="text-xs text-slate-300 mt-0.5">White-glove packing & safe transit for homes.</p></div>
              </a>
              <a href="/service.html#office" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i className="fas fa-building text-sm"></i></div>
                <div><div className="font-semibold text-sm text-white">Corporate Infrastructure</div><p className="text-xs text-slate-300 mt-0.5">Headquarters & office move execution.</p></div>
              </a>
              <a href="/service.html#vehicle" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i className="fas fa-car text-sm"></i></div>
                <div><div className="font-semibold text-sm text-white">Car & Bike Carrier</div><p className="text-xs text-slate-300 mt-0.5">Enclosed vehicle transport with live tracking.</p></div>
              </a>
              <a href="/service.html#warehousing" className="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i className="fas fa-warehouse text-sm"></i></div>
                <div><div className="font-semibold text-sm text-white">Bespoke Warehousing</div><p className="text-xs text-slate-300 mt-0.5">Climate-controlled short & long term storage.</p></div>
              </a>
            </div>
          </div>

          {/* Cities Dropdown */}
          <div className="relative group">
            <a href="#" className="text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-1 py-6">
              Cities <i className="fas fa-chevron-down text-xs opacity-70 group-hover:rotate-180 transition-transform"></i>
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
            className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors shrink-0"
            title="Call Us Now"
          >
            <i className="fas fa-phone-alt text-[10px] text-amber-300"></i>
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
            <i className="fas fa-bars text-base sm:text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
