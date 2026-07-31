import React from 'react';

interface HeaderProps {
  onToggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  return (
    <header className="viamaster-header">
      <div className="header-container" style={{ paddingLeft: '0.75rem' }}>
        <div className="header-logo" style={{ marginLeft: 0 }}>
          <a href="index.html" title="Return to homepage">
            <img src="image/logo.png" alt="Pooja Transport Service Logo" style={{ height: '63px', width: 'auto' }} />
            <span className="logo-text">POOJA <span>TRANSPORT</span></span>
          </a>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <a href="index.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="service.html" className="nav-link">
                Services <i className="fas fa-chevron-down nav-arrow"></i>
              </a>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-menu-left">
                    <h3>Our Services</h3>
                    <div className="mega-contact-item">
                      <span className="label">Call Us</span>
                      <a href="tel:+919910204916">+91 9910204916</a>
                    </div>
                    <div className="mega-contact-item">
                      <span className="label">General Enquiries</span>
                      <a href="mailto:poojatransportservice3@gmail.com">poojatransportservice3@gmail.com</a>
                    </div>
                    <div className="mega-contact-item">
                      <span className="label">Quality Guarantee</span>
                      <span className="val"><i className="fas fa-certificate"></i> ISO 9001:2015</span>
                    </div>
                  </div>
                  <div className="mega-menu-right">
                    <div className="mega-services-grid">
                      <a href="service.html#household" className="mega-service-card">
                        <img src="image/local_shifting.png" alt="Household Shifting" />
                        <span>Household Shifting</span>
                      </a>
                      <a href="service.html#office" className="mega-service-card">
                        <img src="image/packing1.jpg" alt="Office Relocation" />
                        <span>Office Relocation</span>
                      </a>
                      <a href="service.html#vehicle" className="mega-service-card">
                        <img src="image/gallery1.jpg" alt="Car & Bike Transport" />
                        <span>Car & Bike Transport</span>
                      </a>
                      <a href="service.html#packing" className="mega-service-card">
                        <img src="image/packing2.jpg" alt="Packing & Unpacking" />
                        <span>Packing & Unpacking</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Cities <i className="fas fa-chevron-down nav-arrow"></i>
              </a>
              <div className="dropdown-menu">
                <a href="cities/packers-movers-dehradun.html">Dehradun</a>
                <a href="cities/packers-movers-greater-noida.html">Greater Noida</a>
                <a href="cities/packers-movers-kanpur.html">Kanpur</a>
                <a href="cities/packers-movers-lucknow.html">Lucknow</a>
                <a href="cities/packers-movers-varanasi.html">Varanasi</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href="tel:+919910204916" className="login-link">
            <i className="fas fa-phone-alt"></i> Call Us
          </a>
          <span className="cta-divider"></span>
          <a href="contact.html" className="quick-quote-btn">
            Quick Quote
          </a>
        </div>

        <button 
          className="mobile-burger-btn" 
          onClick={onToggleMenu} 
          aria-label="Menu toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
