import React from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`mobile-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`} id="mobileDrawer">
        <div className="drawer-header">
          <img src="image/logo.png" alt="Pooja Transport Service" />
          <div className="drawer-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <nav className="drawer-nav">
          <a href="index.html" onClick={onClose}>
            <i className="fas fa-home"></i> Home
          </a>
          <a href="about.html" onClick={onClose}>
            <i className="fas fa-info-circle"></i> About Us
          </a>
          <a href="service.html" onClick={onClose}>
            <i className="fas fa-truck"></i> Services
          </a>
          <a href="contact.html" onClick={onClose}>
            <i className="fas fa-envelope"></i> Contact
          </a>
          <hr style={{ margin: '1rem 0', opacity: 0.1 }} />
          <a href="tel:+919910204916" className="btn btn-primary" style={{ width: '100%' }}>
            <i className="fas fa-phone"></i> Call Now
          </a>
        </nav>
      </div>
    </>
  );
};
