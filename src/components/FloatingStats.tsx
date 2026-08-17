import React from 'react';

export const FloatingStats: React.FC = () => {
  return (
    <section className="relative z-30 max-w-6xl mx-auto px-4 -mt-8 sm:-mt-12 mb-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100/90 py-6 px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center">
          <div className="text-center md:border-r md:border-slate-100 md:pr-6">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight mb-1 font-display">12+</span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Years Excellence</span>
          </div>
          <div className="text-center md:border-r md:border-slate-100 md:px-6">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight mb-1 font-display">18K+</span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Happy Relocations</span>
          </div>
          <div className="text-center md:border-r md:border-slate-100 md:px-6">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight mb-1 font-display">50+</span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Cities Covered</span>
          </div>
          <div className="text-center md:pl-6">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight mb-1 font-display">100%</span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Safety Record</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingStats;
