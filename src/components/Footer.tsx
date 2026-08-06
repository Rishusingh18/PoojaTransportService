import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0b1c30] text-white border-t border-white/10 py-16">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Copyright */}
        <div className="md:col-span-1 space-y-4">
          <a href="index.html" className="flex items-center gap-3 group">
            <img 
              src="/image/logo.png" 
              alt="Pooja Transport Service Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="font-display font-bold text-lg tracking-tight text-white">
              POOJA <span className="text-amber-400">TRANSPORT</span>
            </span>
          </a>
          <p className="text-xs text-slate-300 leading-relaxed">
            ISO 9001:2015 Certified Relocation Forwarder. Delivering stress-free home, corporate, and vehicle shifting across India.
          </p>
          <p className="text-[11px] text-slate-400 opacity-80 pt-2">
            © {new Date().getFullYear()} Pooja Transport Service. All rights reserved.
          </p>
        </div>

        {/* Navigation Column 1 */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Services</h4>
          <a href="service.html#household" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Household Shifting</a>
          <a href="service.html#office" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Corporate Relocation</a>
          <a href="service.html#vehicle" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Car & Bike Carriers</a>
          <a href="service.html#warehousing" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Bespoke Warehousing</a>
        </div>

        {/* Navigation Column 2 */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Popular Hubs</h4>
          <a href="cities/packers-movers-dehradun.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Packers & Movers Dehradun</a>
          <a href="cities/packers-movers-greater-noida.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Packers & Movers Greater Noida</a>
          <a href="cities/packers-movers-kanpur.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Packers & Movers Kanpur</a>
          <a href="cities/packers-movers-lucknow.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Packers & Movers Lucknow</a>
          <a href="cities/packers-movers-varanasi.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors">Packers & Movers Varanasi</a>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Direct Contact</h4>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <i className="fas fa-phone-alt text-amber-400"></i> +91 9910204916
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <i className="fas fa-envelope text-amber-400"></i> poojatransportservice3@gmail.com
          </p>
          <p className="text-xs text-slate-300 flex items-start gap-2">
            <i className="fas fa-map-marker-alt text-amber-400 mt-0.5"></i> Gaur City Center, Greater Noida, UP, India
          </p>
        </div>
      </div>
    </footer>
  );
};
