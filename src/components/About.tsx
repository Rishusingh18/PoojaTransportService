import React from 'react';

export const About: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-user-shield',
      title: 'Verified Staff',
      description: 'Every crew member undergoes rigorous background checks and training.'
    },
    {
      icon: 'fas fa-truck-loading',
      title: 'Modern Fleet',
      description: 'GPS-enabled, well-maintained vehicles for seamless tracking and transit.'
    },
    {
      icon: 'fas fa-wallet',
      title: 'Transparent Pricing',
      description: 'No hidden fees. We provide clear, itemized quotes that we stand by.'
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop" 
              alt="Why Choose Pooja Transport"
              style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-premium)', display: 'block' }}
            />
            <div className="glass-card" style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', padding: '2rem', maxWidth: '250px' }}>
              <p style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--secondary)' }}>100% Damage-Free</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Guaranteed by our exclusive 5-layer packing tech.
              </p>
            </div>
          </div>
          <div>
            <h2 className="section-title">Why the Elite <br />Choose Pooja</h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: '1.5rem' }}>
                  <i className={feature.icon} style={{ fontSize: '2rem', color: 'var(--secondary)' }}></i>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{feature.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
