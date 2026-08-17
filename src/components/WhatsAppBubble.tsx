import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '919910204916';
const PHONE_NUMBER = '+919910204916';

interface QuickOption {
  label: string;
  icon: string;
  message: string;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    label: '🚚 Instant Shifting Quote',
    icon: 'fa-calculator',
    message: 'Hello Pooja Transport Service! I would like to get a free shifting quote for my relocation.'
  },
  {
    label: '📦 Household Shifting',
    icon: 'fa-house',
    message: 'Hi Pooja Transport Service! I need information and pricing for Household / Home Shifting.'
  },
  {
    label: '🏢 Corporate Office Shifting',
    icon: 'fa-building',
    message: 'Hi Pooja Transport Service! We are looking for Corporate / Office Relocation services.'
  },
  {
    label: '🚗 Car & Bike Carrier',
    icon: 'fa-car',
    message: 'Hi Pooja Transport Service! I want to transport my vehicle (Car/Bike). Please share details.'
  }
];

export const WhatsAppBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show a welcome tooltip after 3 seconds if not interacted, auto-hide after 9 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [hasInteracted]);

  const handleOpenWhatsApp = (customMessage?: string) => {
    const text = customMessage || 'Hi Pooja Transport Service, I would like to get a quote for relocation services.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setShowTooltip(false);
    setHasInteracted(true);
  };

  const togglePopover = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
    setShowTooltip(false);
    setHasInteracted(true);
  };

  return (
    <aside aria-label="Quick Contact Options" className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[9999] flex flex-col items-end font-sans">
      {/* Interactive Chat Popover Window */}
      {isOpen && (
        <div 
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          style={{ boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0, 0, 0, 0.05)' }}
        >
          {/* Header */}
          <div className="bg-[#0b1c30] text-white p-4 flex items-center justify-between border-b border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 p-0.5 shadow-md flex items-center justify-center">
                  <img 
                    src="/image/logo-sm.webp" 
                    onError={(e) => { (e.target as HTMLImageElement).src = '/favicon.png'; }}
                    alt="Pooja Transport" 
                    className="w-full h-full object-cover rounded-full bg-white p-1"
                  />
                </div>
                {/* Pulsing online badge */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0b1c30] rounded-full">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-white tracking-wide flex items-center gap-1.5">
                  Pooja Transport
                  <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[9px] font-semibold uppercase px-1.5 py-0.2 rounded border border-emerald-500/30">Verified</span>
                </h4>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online | Replies in &lt; 5 mins
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors text-lg font-bold leading-none cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              &times;
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3.5 max-h-[360px] overflow-y-auto">
            {/* WhatsApp message bubble */}
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-200/80 text-xs text-slate-700 space-y-1 relative">
              <div className="font-semibold text-emerald-700 text-[11px]">Relocation Specialist 👋</div>
              <p className="leading-relaxed">
                Namaste! Welcome to Pooja Transport Service. How can we assist with your shifting or relocation today?
              </p>
              <span className="text-[10px] text-slate-400 block text-right font-mono">Just now</span>
            </div>

            {/* Quick Actions Title */}
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
              Select inquiry type:
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5">
              {QUICK_OPTIONS.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(opt.message)}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 transition-all flex items-center justify-between group cursor-pointer shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{opt.label.split(' ')[0]}</span>
                    <span>{opt.label.substring(opt.label.indexOf(' ') + 1)}</span>
                  </span>
                  <i className="fab fa-whatsapp text-slate-400 group-hover:text-emerald-600 text-sm transition-colors"></i>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-3 bg-white border-t border-slate-100 space-y-2">
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Start Chat on WhatsApp
            </button>

            <div className="flex items-center justify-between px-1 text-[11px] text-slate-500">
              <span>Need immediate call?</span>
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="text-[#0b1c30] font-semibold hover:text-amber-600 transition-colors flex items-center gap-1"
              >
                <i className="fas fa-phone-alt text-[10px]"></i> +91 9910204916
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Row */}
      <div className="flex items-center gap-3">
        {/* Welcome Speech Pill (shown on hover or initial state) */}
        {!isOpen && showTooltip && (
          <div 
            onClick={() => handleOpenWhatsApp()}
            className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-slate-200 cursor-pointer hover:border-emerald-400 hover:text-emerald-700 transition-all animate-in fade-in slide-in-from-right duration-300 group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Need a Shifting Quote? <b>Chat with us!</b></span>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); setHasInteracted(true); }}
              className="text-slate-400 hover:text-slate-600 ml-1"
              aria-label="Dismiss message"
            >
              &times;
            </button>
          </div>
        )}

        {/* Dedicated WhatsApp Floating Button */}
        <div className="relative group">
          {/* Ambient Glowing Wave Effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none scale-110" />

          {/* Main Floating Button */}
          <button
            onClick={togglePopover}
            aria-label="Chat on WhatsApp with Pooja Transport"
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 flex items-center justify-center transition-all duration-300 transform hover:scale-108 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40 border-2 border-white/20"
          >
            {/* Official WhatsApp SVG Vector Icon */}
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 fill-white filter drop-shadow" 
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>

            {/* Notification Badge / Online Dot */}
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#0b1c30] rounded-full"></span>
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default WhatsAppBubble;
