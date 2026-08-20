import React, { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import LocationAutocomplete from './LocationAutocomplete';
import { Calendar as CalendarIcon, ChevronDown, CheckCircle2, AlertCircle, ShieldCheck, Truck, Clock, Calculator } from 'lucide-react';
import { validateIndianMobile } from '../lib/validation';
import { insertSupabaseQuote } from '../lib/supabase';
import { BookingDetails, generateBookingId, saveLastBooking } from '../lib/booking';
import { BookingConfirmationModal } from './BookingConfirmationModal';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    from: '',
    to: '',
    serviceType: 'Household Relocation'
  });

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'h-name') setFormData(prev => ({ ...prev, name: value }));
    if (id === 'h-mobile') {
      setFormData(prev => ({ ...prev, mobile: value }));
      if (phoneError) setPhoneError(null);
    }
    if (id === 'h-service') setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Phone Number
    const phoneCheck = validateIndianMobile(formData.mobile);
    if (!phoneCheck.isValid) {
      setPhoneError(phoneCheck.error || 'Please enter a valid 10-digit mobile number.');
      return;
    }
    setPhoneError(null);
    setSubmitStatus('submitting');

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });

    const bookingId = generateBookingId();

    const payload: BookingDetails = {
      id: bookingId,
      name: formData.name.trim(),
      mobile: phoneCheck.normalized,
      from: formData.from.trim(),
      to: formData.to.trim(),
      serviceType: formData.serviceType,
      moveDate: formattedDate,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    // 1. Local storage & Last Booking cache
    saveLastBooking(payload);

    // 2. Direct Supabase insert to guarantee instant backend delivery
    insertSupabaseQuote({
      id: payload.id,
      name: payload.name,
      mobile: payload.mobile,
      from: payload.from,
      to: payload.to,
      serviceType: payload.serviceType,
      moveDate: payload.moveDate,
      notes: '',
      status: 'Pending',
      created_at: payload.createdAt
    });

    // 3. Post to Backend REST API endpoint (if serverless or express server active)
    try {
      await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error('API quote submission endpoint note:', err);
    }

    setSubmitStatus('success');
    setConfirmedBooking(payload);
    setIsConfirmationOpen(true);

    // Reset Form state
    setFormData({
      name: '',
      mobile: '',
      from: '',
      to: '',
      serviceType: 'Household Relocation'
    });
    setSubmitStatus('idle');
  };

  return (
    <section className="relative min-h-[90vh] bg-[#0b1c30] text-white flex items-center pt-24 pb-16">
      {/* Background Cargo Shipping Dock Overlay — wrapped in own overflow-hidden container */}
      <div className="absolute inset-0 overflow-hidden">
        <picture className="absolute inset-0 block w-full h-full">
          <source media="(max-width: 640px)" srcSet="/image/hero-bg-mobile.webp" type="image/webp" />
          <source media="(max-width: 1024px)" srcSet="/image/hero-bg-tablet.webp" type="image/webp" />
          <img 
            src="/image/hero-bg-desktop.webp" 
            alt="Hero Relocation & Transport Background" 
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30] via-[#0b1c30]/90 to-transparent"></div>
      </div>

      <div className="relative max-w-container-max mx-auto px-4 md:px-margin-desktop w-full z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Brand Messaging */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-widest border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              ISO 9001:2015 Certified Logistics Partner
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Trusted Packers <br />
              &amp; Movers <span className="text-amber-400 italic">in India.</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base max-w-xl font-normal leading-relaxed">
              Pooja Transport Service delivers white-glove household shifting, corporate IT relocation, and bespoke warehousing across India with high-precision care.
            </p>

            <div className="pt-4 flex flex-wrap gap-8 items-center text-xs text-slate-300 font-semibold tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Zero Damage Claim Policy</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Hydraulic Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>24x7 Realtime GPS</span>
              </div>
            </div>
          </div>

          {/* Right Floating Shifting Quote Form */}
          <div id="quote" className="lg:col-span-5 scroll-mt-24">
            <div className="bg-white text-[#0b1c30] rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20">
              
              <div className="mb-1.5">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block leading-none mb-1">
                  Instant Relocation Booking
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0b1c30] leading-tight m-0 p-0">
                  Get Shifting Estimation
                </h2>
              </div>

              <form id="hero-quote-form" aria-label="Instant Relocation Estimation Form" onSubmit={handleSubmit} className="space-y-2.5">
                
                {/* Route Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor="h-from" className="text-[11px] font-semibold text-slate-500 block mb-0.5">
                      Origin City / Location *
                    </label>
                    <LocationAutocomplete
                      id="h-from"
                      value={formData.from}
                      onChange={(val) => setFormData(prev => ({ ...prev, from: val }))}
                      placeholder="e.g. Greater Noida"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="h-to" className="text-[11px] font-semibold text-slate-500 block mb-0.5">
                      Destination City / Location *
                    </label>
                    <LocationAutocomplete
                      id="h-to"
                      value={formData.to}
                      onChange={(val) => setFormData(prev => ({ ...prev, to: val }))}
                      placeholder="e.g. Dehradun"
                      required
                    />
                  </div>
                </div>

                {/* Name & Contact Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor="h-name" className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Your Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="h-name" 
                      required
                      autoComplete="name"
                      className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-[#0b1c30] focus:ring-0 px-0 py-1.5 text-sm text-[#0b1c30] font-medium" 
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="h-mobile" className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Mobile Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="h-mobile" 
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={15}
                      aria-invalid={Boolean(phoneError)}
                      aria-describedby={phoneError ? "h-mobile-error" : undefined}
                      className={`w-full bg-transparent border-0 border-b-2 ${phoneError ? 'border-red-500' : 'border-slate-300'} focus:border-[#0b1c30] focus:ring-0 px-0 py-1.5 text-sm text-[#0b1c30] font-medium`} 
                      placeholder="+91 9910204916" 
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {phoneError && (
                      <p id="h-mobile-error" role="alert" aria-live="polite" className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-600 shrink-0" /> {phoneError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Requirement Dropdown */}
                <div>
                  <label htmlFor="h-service" className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Service Required
                  </label>
                  <select 
                    id="h-service"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-[#0b1c30] focus:ring-0 px-0 py-1.5 text-sm text-[#0b1c30] font-medium appearance-none cursor-pointer"
                  >
                    <option value="Household Relocation">Household Shifting</option>
                    <option value="Corporate Relocation">Corporate Relocation</option>
                    <option value="Car & Bike Carrier">Car & Bike Carrier</option>
                    <option value="Bespoke Warehousing">Bespoke Warehousing</option>
                  </select>
                </div>

                {/* Date Selection */}
                <div className="relative" style={{ overflow: 'visible' }}>
                  <label id="h-date-label" htmlFor="h-date-btn" className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Target Move Date
                  </label>
                  <button
                    id="h-date-btn"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isDatePickerOpen}
                    aria-labelledby="h-date-label"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                    className="w-full flex items-center justify-between py-1.5 border-b-2 border-slate-300 text-left text-sm text-[#0b1c30]"
                  >
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-slate-500" />
                      <span className="font-semibold">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isDatePickerOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <CustomDatePicker
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                    isOpen={isDatePickerOpen}
                    onClose={() => setIsDatePickerOpen(false)}
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={submitStatus === 'submitting'}
                    className={`w-full font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                      submitStatus === 'success' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-[#0b1c30] text-white hover:bg-[#131b2e]'
                    }`}
                  >
                    {submitStatus === 'submitting' ? (
                      <span>Calculating Estimation...</span>
                    ) : submitStatus === 'success' ? (
                      <span className="text-white font-bold flex items-center gap-2 text-sm normal-case tracking-normal">
                        <CheckCircle2 className="w-5 h-5 text-white" /> We'll reach out soon!
                      </span>
                    ) : (
                      <>
                        <Calculator className="w-4 h-4 text-amber-400" />
                        Get Estimation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup Modal */}
      <BookingConfirmationModal 
        isOpen={isConfirmationOpen} 
        onClose={() => setIsConfirmationOpen(false)} 
        booking={confirmedBooking} 
      />
    </section>
  );
};
