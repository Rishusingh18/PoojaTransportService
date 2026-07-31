import React, { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import LocationAutocomplete from './LocationAutocomplete';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    from: '',
    to: ''
  });

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, string> = {
      'h-name': 'name',
      'h-mobile': 'mobile'
    };
    const key = fieldMap[id] || id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = format(selectedDate, "MMM dd, yyyy");
    const message = "Hello Pooja Transport Service, I want to request a Shifting Quote." +
      "%0a%0a*--- Move Details ---*" +
      "%0a*Name:* " + encodeURIComponent(formData.name) +
      "%0a*Mobile:* " + encodeURIComponent(formData.mobile) +
      "%0a*From:* " + encodeURIComponent(formData.from) +
      "%0a*To:* " + encodeURIComponent(formData.to) +
      "%0a*Date:* " + encodeURIComponent(formattedDate);

    window.open("https://wa.me/919910204916?text=" + message, '_blank');
  };

  return (
    <section className="new-hero" style={{ overflow: 'visible', position: 'relative', zIndex: 20 }}>
      <div className="container hero-content">
        <div className="hero-text animate-fade">
          <div className="hero-badges">
            <div className="hero-badge"><i className="fas fa-certificate"></i> ISO 9001:2015 Certified</div>
            <div className="hero-badge"><i className="fas fa-star"></i> 4.9/5 Average Rating</div>
          </div>
          <h1 className="hero-title">
            Relocate with <span style={{ background: 'linear-gradient(to right, var(--secondary), #f87171)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Elite</span> Precision
          </h1>
          <p className="hero-subtitle">
            Redefining shifting standards across India. Experience a stress-free transition with our professional, white-glove relocation services.
          </p>

          <div className="hero-features hide-mobile">
            <div className="h-feat"><i className="fas fa-shield-check"></i> <span>Full Transit Insurance</span></div>
            <div className="h-feat"><i className="fas fa-user-tie"></i> <span>Executive Crew</span></div>
            <div className="h-feat"><i className="fas fa-clock"></i> <span>On-Time Guarantee</span></div>
          </div>
        </div>

        <div className="quote-form-card glass-card animate-fade" style={{ animationDelay: '0.2s', padding: '2.5rem', maxWidth: '480px', width: '100%', justifySelf: 'end', overflow: 'visible', position: 'relative', zIndex: 30 }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Get a Premium Quote</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Instant response via WhatsApp</p>
          </div>
          <form id="heroContactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="h-name" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                id="h-mobile" 
                placeholder="Mobile Number" 
                value={formData.mobile}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <LocationAutocomplete
                  id="h-from"
                  value={formData.from}
                  onChange={(val) => setFormData(prev => ({ ...prev, from: val }))}
                  placeholder="Moving From"
                  required
                />
              </div>
              <div className="form-group">
                <LocationAutocomplete
                  id="h-to"
                  value={formData.to}
                  onChange={(val) => setFormData(prev => ({ ...prev, to: val }))}
                  placeholder="Moving To"
                  required
                />
              </div>
            </div>

            {/* Custom Date Picker trigger & component */}
            <div className="form-group relative group" style={{ marginBottom: '1rem', position: 'relative' }}>
              <small style={{ color: 'var(--text-muted)', fontSize: '0.7rem', display: 'block', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Preferred Move Date
              </small>

              <button
                type="button"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(210, 43, 43, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary)'
                  }}>
                    <CalendarIcon size={18} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                      Scheduled for
                    </span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                      {format(selectedDate, "MMM dd, yyyy")}
                    </span>
                  </div>
                </div>
                <ChevronDown size={18} style={{ color: 'var(--text-muted)', transition: 'transform 0.3s ease', transform: isDatePickerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              <CustomDatePicker
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
                isOpen={isDatePickerOpen}
                onClose={() => setIsDatePickerOpen(false)}
              />
            </div>
            
            <button type="submit" className="btn btn-secondary" style={{ width: '100%', marginTop: '0.75rem', padding: '1rem', boxShadow: 'var(--shadow-lg)' }}>
              <i className="fab fa-whatsapp" style={{ marginRight: '10px', fontSize: '1.1rem' }}></i> Get Quote Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
