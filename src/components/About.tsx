import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  UserCheck, 
  PackageCheck, 
  Lock, 
  Clock, 
  TrendingUp
} from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: UserCheck,
      iconBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
      iconColor: '#10b981',
      badge: '100% Police Verified',
      title: 'Verified Executive Crew',
      description: 'Every crew member undergoes multi-step background checks & white-glove packing certification.'
    },
    {
      icon: PackageCheck,
      iconBg: 'linear-gradient(135deg, rgba(210, 43, 43, 0.15) 0%, rgba(210, 43, 43, 0.05) 100%)',
      iconColor: '#d22b2b',
      badge: 'Zero-Damage Shield',
      title: '5-Layer Tech Packing',
      description: 'Custom shockproof wooden crating, anti-static bubble wrap, and moisture protection barriers.'
    },
    {
      icon: Truck,
      iconBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)',
      iconColor: '#3b82f6',
      badge: 'Live Satellite Tracking',
      title: 'GPS Smart Fleet',
      description: 'Containerized vehicles with air-ride anti-vibration suspension & real-time telemetry.'
    },
    {
      icon: Lock,
      iconBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
      iconColor: '#f59e0b',
      badge: '0% Hidden Charges',
      title: 'Transparent Price Lock',
      description: '100% itemized binding quotes guaranteed in writing with zero unexpected surge costs.'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Successful Relocations', icon: TrendingUp },
    { value: '99.8%', label: 'On-Time Arrival', icon: Clock },
    { value: '100%', label: 'Transit Protected', icon: ShieldCheck },
    { value: '4.9 / 5', label: 'Satisfaction Rating', icon: Award }
  ];

  return (
    <section className="about-redesign-section" id="why-us">
      <div className="container">
        <div className="about-grid">
          {/* Visual Showcase Frame */}
          <div className="about-showcase-wrapper">
            <div className="about-image-card">
              <img 
                src="/image/packing1.jpg" 
                alt="Professional Relocation and Packing Team - Pooja Transport Service"
                className="about-primary-img"
              />
              <div className="about-img-overlay"></div>

              {/* Vector Badge 1: Top Floating Pill */}
              <div className="about-top-pill-vector">
                <ShieldCheck style={{ width: '16px', height: '16px', color: '#34d399' }} />
                <span>ISO 9001:2015 Certified • 10+ Yrs Trust</span>
              </div>

              {/* Vector Badge 2: Bottom Glass Float Badge */}
              <div className="about-glass-badge-vector">
                <div className="about-glass-badge-icon-vector">
                  <ShieldCheck style={{ width: '20px', height: '20px', color: '#10b981' }} />
                </div>
                <div>
                  <div className="about-glass-badge-title">100% Damage-Free Guarantee</div>
                  <div className="about-glass-badge-sub">Engineered 5-Layer Tech Packing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="about-content-col">
            <h2 className="about-main-heading">
              Relocate With Uncompromising <br />
              <span className="gradient-text">Trust & Precision</span>
            </h2>

            <p className="about-description">
              Delivering stress-free, white-glove relocations for homes and businesses across India. Engineered with certified packing protocols, satellite fleet tracking, and a zero-damage commitment.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="about-feature-grid">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="about-card-modern">
                    <div className="card-header-flex">
                      <div className="card-icon-box" style={{ background: feat.iconBg }}>
                        <IconComponent style={{ width: '20px', height: '20px', color: feat.iconColor }} />
                      </div>
                      <span className="card-badge" style={{ color: feat.iconColor, borderColor: `${feat.iconColor}33`, background: `${feat.iconColor}12` }}>
                        {feat.badge}
                      </span>
                    </div>
                    <h4 className="card-title">{feat.title}</h4>
                    <p className="card-desc">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Ribbon */}
        <div className="about-metrics-ribbon">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="metric-item">
                <div className="metric-icon-wrap">
                  <StatIcon style={{ width: '20px', height: '20px', color: '#d22b2b' }} />
                </div>
                <div>
                  <div className="metric-value">{stat.value}</div>
                  <div className="metric-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
