import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#ffffff] border-b border-outline-variant/40" id="services">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl text-[#0b1c30] font-bold tracking-tight mb-4">
            Architects of Movement.
          </h2>
          <p className="text-base md:text-lg text-[#45464d] leading-relaxed">
            We don't just move goods; we orchestrate complex global supply chains with unparalleled precision and discretion.
          </p>
        </div>

        {/* Asymmetrical Bento Grid matching AI Studio 1:1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(220px,_auto)]">
          {/* Service Card 1: Global Freight Architecture (Light Blue, 6 Cols) */}
          <div className="rounded-xl border border-outline-variant/60 bg-[#e4edfa] p-8 flex flex-col justify-center transition-all duration-300 hover:shadow-md cursor-pointer md:col-span-6">
            <h3 className="font-display text-2xl md:text-3xl text-[#0b1c30] font-bold mb-3">
              Global Freight Architecture
            </h3>
            <p className="text-sm text-[#45464d] leading-relaxed max-w-md">
              End-to-end management of complex international cargo movements, navigating regulatory landscapes with seamless authority.
            </p>
          </div>

          {/* Service Card 2: Executive Relocation (Soft Grey, 6 Cols) */}
          <div className="rounded-xl border border-outline-variant/60 bg-[#f6f8fa] p-8 flex flex-col justify-end transition-all duration-300 hover:shadow-md cursor-pointer md:col-span-6">
            <h3 className="font-display text-2xl md:text-3xl text-[#0b1c30] font-bold mb-3">
              Executive Relocation
            </h3>
            <p className="text-sm text-[#45464d] leading-relaxed">
              White-glove transitions for key personnel, ensuring business continuity and personal comfort globally.
            </p>
          </div>

          {/* Service Card 3: Bespoke Warehousing (Soft Grey, 4 Cols) */}
          <div className="rounded-xl border border-outline-variant/60 bg-[#f6f8fa] p-8 flex flex-col justify-center transition-all duration-300 hover:shadow-md cursor-pointer md:col-span-4">
            <h3 className="font-display text-2xl md:text-3xl text-[#0b1c30] font-bold mb-3">
              Bespoke Warehousing
            </h3>
            <p className="text-sm text-[#45464d] leading-relaxed">
              Climate-controlled, highly secure storage facilities situated in strategic global trade nodes.
            </p>
          </div>

          {/* Service Card 4: The Kinetic Enterprise Advantage (Light Blue, 8 Cols, centered CTA) */}
          <div className="rounded-xl border border-outline-variant/60 bg-[#e4edfa] p-8 md:p-12 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer md:col-span-8">
            <h3 className="font-display text-2xl md:text-3xl text-[#0b1c30] font-bold mb-3">
              The Kinetic Enterprise Advantage
            </h3>
            <p className="text-sm text-[#45464d] leading-relaxed max-w-xl mb-6">
              Discover how our data-driven approach and established authority redefine supply chain resilience.
            </p>
            <a 
              href="about.html" 
              className="border border-[#0b1c30] text-[#0b1c30] font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded hover:bg-[#0b1c30] hover:text-white transition-colors duration-300 inline-block"
            >
              Read Our Manifesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


