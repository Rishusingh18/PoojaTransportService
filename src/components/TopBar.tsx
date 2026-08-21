import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-primary-container text-on-primary py-2.5 px-4 text-xs font-medium border-b border-outline-variant/20">
      <div className="max-w-container-max mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+919910204916" onClick={() => (window as any).gtag_report_conversion?.('tel:+919910204916')} className="hover:text-secondary transition-colors flex items-center gap-1.5">
            <svg className="w-3 h-3 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +91 9910204916
          </a>
          <a href="mailto:contact@poojatransportservice.com" className="hidden sm:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-3 h-3 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            contact@poojatransportservice.com
          </a>
          <a href="mailto:poojatransportservice3@gmail.com" className="hidden md:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-3 h-3 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            poojatransportservice3@gmail.com
          </a>
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="hidden md:inline-flex items-center gap-1 opacity-80">
            <svg className="w-3 h-3 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            ISO 9001:2015 Certified
          </span>
          <span className="inline-flex items-center gap-1 opacity-80">
            <svg className="w-3 h-3 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/></svg>
            24/7 Operations Command
          </span>
        </div>
      </div>
    </div>
  );
};

