import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#0f172a', color: 'white', padding: '4rem 0 1rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <img 
              src="image/logo.png" 
              alt="Pooja Transport Service" 
              style={{ height: '50px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} 
            />
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
              Pooja Transport Service is a leading relocation service provider dedicated to making shifting easy, safe, and affordable for everyone.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Quick Links</h4>
            <ul style={{ opacity: 0.7, fontSize: '0.9rem', listStyle: 'none', padding: 0 }}>
              <li><a href="index.html" style={{ color: 'white', display: 'block', marginBottom: '0.5rem' }}>Home</a></li>
              <li><a href="about.html" style={{ color: 'white', display: 'block', marginBottom: '0.5rem' }}>About Us</a></li>
              <li><a href="service.html" style={{ color: 'white', display: 'block', marginBottom: '0.5rem' }}>Our Services</a></li>
              <li><a href="contact.html" style={{ color: 'white', display: 'block', marginBottom: '0.5rem' }}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Contact Us</h4>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-map-marker-alt"></i> Gaur City Center, Greater Noida
            </p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-phone"></i> +91 9910204916
            </p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
              <i className="fas fa-envelope"></i> poojatransportservice3@gmail.com
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5 }}>
          <p>© 2026 Pooja Transport Service. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
