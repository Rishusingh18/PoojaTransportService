import React from 'react';

export const StickyActions: React.FC = () => {
  return (
    <>
      <div className="sticky-actions hide-mobile">
        <a href="https://wa.me/919910204916" className="action-btn btn-whatsapp" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+919910204916" className="action-btn btn-call">
          <i className="fas fa-phone"></i>
        </a>
      </div>

      <div className="mobile-only-bar">
        <a href="tel:+919910204916" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
          <i className="fas fa-phone"></i> Call Now
        </a>
        <a href="https://wa.me/919910204916" className="btn btn-secondary" style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-dark)' }}>
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </>
  );
};
