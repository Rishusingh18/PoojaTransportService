import React from 'react';

export const StickyActions: React.FC = () => {
  return (
    <div className="sticky-actions hide-mobile">
      <a href="https://wa.me/919910204916" className="action-btn btn-whatsapp" target="_blank" rel="noreferrer" title="WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="tel:+919910204916" className="action-btn btn-call" title="Call Us">
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default StickyActions;
