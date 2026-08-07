import React from 'react';

export const FloatingStats: React.FC = () => {
  return (
    <section className="floating-stats" style={{ position: 'relative', zIndex: 20 }}>
      <div className="container">
        <div className="stats-wrapper glass-card" style={{ background: '#ffffff', position: 'relative', zIndex: 20 }}>
          <div className="stat-item">
            <span className="stat-num">12+</span>
            <span className="stat-txt">Years Excellence</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">18K+</span>
            <span className="stat-txt">Happy Relocations</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">50+</span>
            <span className="stat-txt">Cities Covered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-txt">Safety Record</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingStats;
