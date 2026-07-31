import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The precision with which they handled our grand piano was remarkable. Truly elite service.",
      name: "Amit Sharma",
      location: "Noida Sector 62"
    },
    {
      quote: "Zero hidden costs and absolute professionalism. The team arrived on time and finished early.",
      name: "Priya Verma",
      location: "Ghaziabad"
    },
    {
      quote: "Our office relocation was seamless. Minimal downtime and everything arrived perfectly.",
      name: "Rahul Singh",
      location: "Greater Noida"
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#fcfcfd' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2 className="section-title">Client Voices</h2>
        </div>

        <div className="testimonials-grid-premium" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card-premium glass-card" style={{ padding: '3rem', position: 'relative' }}>
              <div style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                <i className="fas fa-quote-left"></i>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-dark)' }}>
                "{item.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '45px', height: '45px', background: '#e2e8f0', borderRadius: '50%' }}></div>
                <div>
                  <h5 style={{ fontWeight: 700 }}>{item.name}</h5>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
