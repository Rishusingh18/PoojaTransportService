import React from 'react';

export const Services: React.FC = () => {
  const serviceItems = [
    {
      title: 'Residential',
      description: 'White-glove home relocation with meticulous packing of every fragile memory.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Corporate',
      description: 'Efficient office transitions with specialized handling of IT infrastructure.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Vehicles',
      description: 'Secure transportation of luxury cars and bikes via specialized carriers.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="section-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h2 className="section-title">Bespoke Shifting <br />Services</h2>
            <p className="section-subtitle">Tailored logistics solutions for those who value their time and belongings.</p>
          </div>
          <a href="service.html" className="btn" style={{ border: '1.5px solid var(--primary)', padding: '0.8rem 2rem' }}>
            Explore All Services
          </a>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {serviceItems.map((item, index) => (
            <div key={index} className="service-card glass-card" style={{ padding: 0, border: 'none', overflow: 'hidden' }}>
              <div className="service-img" style={{ height: '280px' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="service-content" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
