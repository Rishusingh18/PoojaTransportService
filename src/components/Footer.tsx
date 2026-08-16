import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0b1c30] text-white border-t border-white/10 py-16">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Copyright */}
        <div className="md:col-span-1 space-y-4">
          <a href="index.html" className="flex items-center gap-3 group">
            <img 
              src="/image/logo-md.webp" 
              alt="Pooja Transport Service Logo" 
              width="40"
              height="40"
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

        {/* Navigation Column 1: Services */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Services</h3>
          <a href="service.html#household" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Household Shifting</a>
          <a href="service.html#office" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Corporate Relocation</a>
          <a href="service.html#vehicle" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Car & Bike Carriers</a>
          <a href="service.html#warehousing" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Bespoke Warehousing</a>
        </div>

        {/* Navigation Column 2: Service Hubs */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Service Hubs</h3>
          <a href="cities/packers-movers-dehradun.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Dehradun</a>
          <a href="cities/packers-movers-greater-noida.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Greater Noida</a>
          <a href="cities/packers-movers-kanpur.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Kanpur</a>
          <a href="cities/packers-movers-lucknow.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Lucknow</a>
          <a href="cities/packers-movers-varanasi.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Varanasi</a>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Direct Contact</h3>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <i className="fas fa-phone-alt text-amber-400"></i>
            <a href="tel:+919528808820" className="hover:text-white transition-colors">+91 9528808820</a>
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <i className="fas fa-phone-alt text-amber-400"></i>
            <a href="tel:+919910204916" className="hover:text-white transition-colors">+91 9910204916</a>
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <i className="fas fa-envelope text-amber-400"></i>
            <a href="mailto:contact@poojatransportservice.com" className="hover:text-white transition-colors">contact@poojatransportservice.com</a>
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <i className="fas fa-envelope text-amber-400"></i>
            <a href="mailto:poojatransportservice3@gmail.com" className="hover:text-white transition-colors">poojatransportservice3@gmail.com</a>
          </p>
          <p className="text-xs text-slate-300 flex items-start gap-2">
            <i className="fas fa-map-marker-alt text-amber-400 mt-0.5"></i> Gaur City Center, Greater Noida, UP, India
          </p>
        </div>
      </div>
    </footer>
  );
};
