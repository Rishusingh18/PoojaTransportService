import React, { useState, useRef, useEffect } from 'react';
import { Navigation, MapPin, X } from 'lucide-react';

interface LocationItem {
  title: string;
  subtitle: string;
}

const POPULAR_LOCATIONS: LocationItem[] = [
  { title: "Delhi NCR", subtitle: "India" },
  { title: "Noida, Sector 62", subtitle: "Uttar Pradesh, India" },
  { title: "Noida, Sector 18", subtitle: "Uttar Pradesh, India" },
  { title: "Noida, Sector 137", subtitle: "Uttar Pradesh, India" },
  { title: "Greater Noida West", subtitle: "Uttar Pradesh, India" },
  { title: "Greater Noida, Gaur City", subtitle: "Uttar Pradesh, India" },
  { title: "Ghaziabad, Indirapuram", subtitle: "Uttar Pradesh, India" },
  { title: "Ghaziabad, Vaishali", subtitle: "Uttar Pradesh, India" },
  { title: "Ghaziabad, Raj Nagar Extension", subtitle: "Uttar Pradesh, India" },
  { title: "Gurgaon, Cyber City", subtitle: "Haryana, India" },
  { title: "Gurgaon, Golf Course Road", subtitle: "Haryana, India" },
  { title: "Dehradun", subtitle: "Uttarakhand, India" },
  { title: "Lucknow", subtitle: "Uttar Pradesh, India" },
  { title: "Kanpur", subtitle: "Uttar Pradesh, India" },
  { title: "Varanasi", subtitle: "Uttar Pradesh, India" },
  { title: "Agra", subtitle: "Uttar Pradesh, India" },
  { title: "Jaipur", subtitle: "Rajasthan, India" },
  { title: "Chandigarh", subtitle: "Punjab & Haryana, India" },
  { title: "Mumbai", subtitle: "Maharashtra, India" },
  { title: "Navi Mumbai", subtitle: "Maharashtra, India" },
  { title: "Thane", subtitle: "Maharashtra, India" },
  { title: "Pune", subtitle: "Maharashtra, India" },
  { title: "Bangalore (Bengaluru)", subtitle: "Karnataka, India" },
  { title: "Hyderabad", subtitle: "Telangana, India" },
  { title: "Kolkata", subtitle: "West Bengal, India" },
  { title: "Chennai", subtitle: "Tamil Nadu, India" },
  { title: "Ahmedabad", subtitle: "Gujarat, India" },
  { title: "Surat", subtitle: "Gujarat, India" },
  { title: "Patna", subtitle: "Bihar, India" },
  { title: "Ranchi", subtitle: "Jharkhand, India" }
];

interface LocationAutocompleteProps {
  id?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({
  id,
  value,
  onChange,
  placeholder = "Location (City, Area)",
  required = false,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<LocationItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value || value.trim().length === 0) {
      setSuggestions(POPULAR_LOCATIONS.slice(0, 4));
    } else {
      const query = value.toLowerCase();
      const filtered = POPULAR_LOCATIONS.filter(loc =>
        loc.title.toLowerCase().includes(query) || loc.subtitle.toLowerCase().includes(query)
      );
      setSuggestions(filtered);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (title: string) => {
    onChange(title);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange('');
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }} className={className}>
      {/* Input container */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: '12px', zIndex: 5, pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            border: '2px solid var(--secondary)',
            background: 'transparent'
          }} />
        </div>

        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          style={{
            width: '100%',
            padding: '0.75rem 2.2rem 0.75rem 2.4rem',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            background: '#ffffff',
            fontSize: '0.9rem',
            fontFamily: 'inherit',
            color: '#0f172a',
            fontWeight: 600,
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05)'
          }}
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '12px',
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2px'
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown List */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '6px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            boxShadow: '0 20px 35px -5px rgba(15, 23, 42, 0.15), 0 8px 16px -6px rgba(15, 23, 42, 0.08)',
            overflow: 'hidden',
            zIndex: 2500
          }}
        >
          <div style={{ maxHeight: '240px', overflowY: 'auto', padding: '6px' }}>
            {suggestions.map((loc, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(loc.title)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(210, 43, 43, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--secondary)'
                }}>
                  <Navigation size={16} style={{ transform: 'rotate(45deg)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                    {loc.title}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>
                    {loc.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom "Custom Location" Option when user is typing */}
          {value.trim().length > 0 && (
            <div style={{ borderTop: '1px solid #f1f5f9', padding: '6px' }}>
              <div
                onClick={() => handleSelect(value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: 'rgba(15, 23, 42, 0.02)',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(15, 23, 42, 0.02)')}
              >
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#0f172a'
                }}>
                  <MapPin size={16} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                    Not seeing your location?
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 600, marginTop: '2px' }}>
                    Use "{value}" as custom location
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
