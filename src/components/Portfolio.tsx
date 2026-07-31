import React from 'react';

export const Portfolio: React.FC = () => {
  const items = [
    {
      label: 'Scientific Packing',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop'
    },
    {
      label: 'Secure Loading',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
    },
    {
      label: 'Fragile Care',
      image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=800&auto=format&fit=crop'
    },
    {
      label: 'Safe Arrival',
      image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#020617', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 className="section-title" style={{ color: 'white' }}>Crafting Perfect <br />Movements</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem', maxWidth: '500px' }}>
              A glimpse into our high-precision packing and transportation standards.
            </p>
          </div>
        </div>
        
        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {items.map((item, index) => (
            <div key={index} className="gallery-item-premium">
              <img src={item.image} alt={item.label} />
              <div className="gallery-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
