import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="new-topbar">
      <div className="container" style={{ paddingLeft: '0.75rem' }}>
        <div className="topbar-info">
          <span><i className="fas fa-phone"></i> +91 9910204916</span>
          <span className="hide-mobile"><i className="fas fa-envelope"></i> poojatransportservice3@gmail.com</span>
        </div>
        
        <div className="topbar-info hide-mobile">
          <span><i className="fas fa-certificate"></i> ISO Certified</span>
          <span><i className="fas fa-clock"></i> 24/7 Support</span>
        </div>
      </div>
    </div>
  );
};
