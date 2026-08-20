import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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

        {/* Quick Links Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Company</h3>
          <a href="index.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Home</a>
          <a href="about.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">About Us</a>
          <a href="service.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Services</a>
          <a href="contact.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Contact Us</a>
          <a href="privacy-policy.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Privacy Policy</a>
        </div>

        {/* City Landing Pages Column */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Service Hubs</h4>
          <a href="/cities/packers-movers-dehradun.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Dehradun</a>
          <a href="/cities/packers-movers-greater-noida.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Greater Noida</a>
          <a href="/cities/packers-movers-kanpur.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Kanpur</a>
          <a href="/cities/packers-movers-lucknow.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Lucknow</a>
          <a href="/cities/packers-movers-varanasi.html" className="text-xs text-slate-300 hover:text-amber-400 hover:underline transition-colors py-1 inline-block">Packers & Movers Varanasi</a>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Direct Contact</h3>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="tel:+919528808820" className="hover:text-white transition-colors">+91 9528808820</a>
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="tel:+919910204916" className="hover:text-white transition-colors">+91 9910204916</a>
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="mailto:contact@poojatransportservice.com" className="hover:text-white transition-colors">contact@poojatransportservice.com</a>
          </p>
          <p className="text-xs text-slate-300 flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="mailto:poojatransportservice3@gmail.com" className="hover:text-white transition-colors">poojatransportservice3@gmail.com</a>
          </p>
          <p className="text-xs text-slate-300 flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span>Gaur City Center, Greater Noida, UP, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
