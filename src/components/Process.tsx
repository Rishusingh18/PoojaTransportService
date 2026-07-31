import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      description: 'Detailed mapping of your relocation needs and item audit.'
    },
    {
      num: '02',
      title: 'Elite Packing',
      description: '5-layer specialized packing using premium imported materials.'
    },
    {
      num: '03',
      title: 'Secure Transit',
      description: 'Real-time GPS tracking in weather-sealed specialized containers.'
    },
    {
      num: '04',
      title: 'Assisted Setup',
      description: 'Professional unpacking and systematic arrangement at your new home.'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2 className="section-title">Seamless 4-Step <br />Relocation</h2>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {steps.map((step, index) => (
            <div key={index} className="process-step" style={{ textAlign: 'center' }}>
              <div className="step-num-premium">{step.num}</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
