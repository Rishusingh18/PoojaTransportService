import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-primary-container text-on-primary py-2.5 px-4 text-xs font-medium border-b border-outline-variant/20">
      <div className="max-w-container-max mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+919910204916" className="hover:text-secondary transition-colors flex items-center gap-1.5">
            <i className="fas fa-phone-alt text-[10px]"></i> +91 9910204916
          </a>
          <a href="mailto:contact@poojatransportservice.com" className="hidden sm:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <i className="fas fa-envelope text-[10px]"></i> contact@poojatransportservice.com
          </a>
          <a href="mailto:poojatransportservice3@gmail.com" className="hidden md:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <i className="fas fa-envelope text-[10px]"></i> poojatransportservice3@gmail.com
          </a>
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="hidden md:inline-flex items-center gap-1 opacity-80">
            <i className="fas fa-certificate text-[10px] text-amber-400"></i> ISO 9001:2015 Certified
          </span>
          <span className="inline-flex items-center gap-1 opacity-80">
            <i className="fas fa-clock text-[10px]"></i> 24/7 Operations Command
          </span>
        </div>
      </div>
    </div>
  );
};

