import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Audit',
      description: 'Comprehensive assessment of volume, fragile items, and route parameters to construct a fixed price quote.'
    },
    {
      num: '02',
      title: 'Technical 5-Layer Packing',
      description: 'White-glove wrapping using anti-static bubble layers, corner guards, and custom wooden crating.'
    },
    {
      num: '03',
      title: 'Telemetry-Monitored Transit',
      description: 'Live GPS satellite tracking in weather-proof container vehicles driven by certified haulers.'
    },
    {
      num: '04',
      title: 'Unpacking & Room Staging',
      description: 'Assisted uncrating, furniture assembly, and room-by-room staging at your new destination.'
    }
  ];

  return (
    <section className="py-24 bg-surface-container-lowest border-b border-outline-variant/40">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest block mb-2">
            Protocol & Methodology
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-on-background font-bold tracking-tight">
            The 4-Step Relocation Flow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-surface border border-outline-variant/60 rounded-xl p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
              <div>
                <span className="font-display text-4xl font-bold text-on-surface-variant/40 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display text-xl text-on-background font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

