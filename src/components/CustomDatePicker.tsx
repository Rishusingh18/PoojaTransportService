import React, { useState, useRef, useEffect } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfWeek, 
  endOfWeek, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  isToday, 
  isBefore, 
  startOfToday 
} from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomDatePickerProps {
  selectedDate: Date;
  onSelect: (date: Date) => void;
  isOpen: boolean;
  onClose: () => void;
  minDate?: Date;
  theme?: 'light' | 'dark';
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  onSelect,
  isOpen,
  onClose,
  minDate = startOfToday(),
  theme = 'dark'
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(selectedDate || new Date());
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDayClick = (day: Date, e: React.MouseEvent) => {
    e.preventDefault();
    if (isBefore(day, minDate) && !isToday(day)) return;
    onSelect(day);
    onClose();
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  const isDark = theme === 'dark';

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { opacity: 0, y: 10, scale: 0.95 } : { opacity: 0, x: 15, scale: 0.95 }}
            animate={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1 }}
            exit={isMobile ? { opacity: 0, y: 10, scale: 0.95 } : { opacity: 0, x: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={
              isMobile
                ? {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    zIndex: 2000,
                    marginTop: '8px',
                    padding: '1.5rem',
                    background: isDark ? '#0a1329' : '#ffffff',
                    color: isDark ? '#ffffff' : '#0f172a',
                    borderRadius: '24px',
                    boxShadow: isDark 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.85)' 
                      : '0 20px 40px -10px rgba(15, 23, 42, 0.2)',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #e2e8f0',
                    width: '100%'
                  }
                : {
                    position: 'absolute',
                    top: '-175px',
                    right: 'calc(100% + 20px)',
                    left: 'auto',
                    zIndex: 2000,
                    padding: '1.5rem',
                    background: isDark ? '#0a1329' : '#ffffff',
                    color: isDark ? '#ffffff' : '#0f172a',
                    borderRadius: '24px',
                    boxShadow: isDark 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                      : '0 20px 40px -10px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.05)',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #e2e8f0',
                    width: '320px'
                  }
            }
          >
            {/* Bubble Arrow Tail pointing right toward the form input (Desktop only) */}
            {!isMobile && (
              <div
                style={{
                  position: 'absolute',
                  top: '145px',
                  right: '-9px',
                  left: 'auto',
                  width: '16px',
                  height: '16px',
                  background: isDark ? '#0a1329' : '#ffffff',
                  transform: 'rotate(45deg)',
                  borderRight: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #e2e8f0',
                  borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #e2e8f0',
                  zIndex: 2001
                }}
              />
            )}

            {/* Calendar Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              paddingBottom: '0.85rem',
              borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #f1f5f9'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CalendarIcon size={20} style={{ color: '#dc2626' }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a', letterSpacing: '0.01em' }}>
                  {format(currentMonth, 'MMMM yyyy')}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  style={{
                    background: isDark ? '#1a243b' : '#f1f5f9',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                    color: isDark ? '#ffffff' : '#0f172a',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  style={{
                    background: isDark ? '#1a243b' : '#f1f5f9',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                    color: isDark ? '#ffffff' : '#0f172a',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Weekday Names */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '4px',
              marginBottom: '0.75rem',
              textAlign: 'center'
            }}>
              {weekDays.map(d => (
                <div key={d} style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: isDark ? '#94a3b8' : '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '4px 0'
                }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '6px'
            }}>
              {days.map((day, idx) => {
                const isSelected = isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isDisabled = isBefore(day, minDate) && !isToday(day);

                let buttonStyle: React.CSSProperties = {
                  height: '36px',
                  width: '36px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease'
                };

                if (isSelected) {
                  buttonStyle.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
                  buttonStyle.color = '#ffffff';
                  buttonStyle.fontWeight = 800;
                  buttonStyle.boxShadow = '0 6px 16px rgba(220, 38, 38, 0.6)';
                } else if (!isCurrentMonth) {
                  buttonStyle.background = 'transparent';
                  buttonStyle.color = isDark ? 'rgba(255, 255, 255, 0.2)' : '#cbd5e1';
                } else if (isDisabled) {
                  buttonStyle.background = 'transparent';
                  buttonStyle.color = isDark ? 'rgba(255, 255, 255, 0.15)' : '#e2e8f0';
                } else if (isToday(day)) {
                  buttonStyle.background = isDark ? 'rgba(255, 255, 255, 0.06)' : '#fef2f2';
                  buttonStyle.border = '1.5px solid #dc2626';
                  buttonStyle.color = '#dc2626';
                  buttonStyle.fontWeight = 700;
                } else {
                  buttonStyle.background = 'transparent';
                  buttonStyle.color = isDark ? '#ffffff' : '#0f172a';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isDisabled}
                    onClick={(e) => handleDayClick(day, e)}
                    style={buttonStyle}
                  >
                    {format(day, 'd')}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDatePicker;
