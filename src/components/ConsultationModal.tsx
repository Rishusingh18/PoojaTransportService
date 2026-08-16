import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Phone, MapPin, Calendar as CalendarIcon, Send } from 'lucide-react';
import { validateIndianMobile } from '../lib/validation';
import { getSupabase } from '../lib/supabase';
import CustomDatePicker from './CustomDatePicker';
import LocationAutocomplete from './LocationAutocomplete';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    from: '',
    to: '',
    serviceType: 'Household Relocation',
    notes: ''
  });

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [phoneError, setPhoneError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === 'cm-mobile') setPhoneError('');
    const fieldMap: Record<string, string> = {
      'cm-name': 'name',
      'cm-mobile': 'mobile',
      'cm-service': 'serviceType',
      'cm-notes': 'notes'
    };
    const key = fieldMap[id] || id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mobileCheck = validateIndianMobile(formData.mobile);
    if (!mobileCheck.isValid) {
      setPhoneError(mobileCheck.error);
      return;
    }
    setPhoneError('');

    setSubmitStatus('submitting');
    const formattedDate = selectedDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    const payload = {
      id: `quote-${Date.now()}`,
      name: formData.name || 'Valued Customer',
      mobile: mobileCheck.normalized,
      from: formData.from || 'Not specified',
      to: formData.to || 'Not specified',
      serviceType: formData.serviceType,
      moveDate: formattedDate,
      notes: formData.notes,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    // 1. Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('pooja_local_quotes') || '[]');
      localStorage.setItem('pooja_local_quotes', JSON.stringify([payload, ...existing]));
    } catch (err) {
      console.error('Local quote cache error:', err);
    }

    // 2. Direct Supabase insert
    try {
      const supabase = await getSupabase();
      const supabaseRecord = {
        id: payload.id,
        name: payload.name,
        mobile: payload.mobile,
        from: payload.from,
        to: payload.to,
        serviceType: payload.serviceType,
        moveDate: payload.moveDate,
        notes: payload.notes || '',
        status: 'Pending',
        created_at: payload.createdAt
      };
      const { error: sbErr } = await supabase.from('quotes').insert([supabaseRecord]);
    } catch (sbEx: any) {
      console.error('Supabase direct quote exception:', sbEx?.message || sbEx);
    }

    // 3. Post to REST endpoint if available
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

    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        mobile: '',
        from: '',
        to: '',
        serviceType: 'Household Relocation',
        notes: ''
      });
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0b1c30]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 animate-in fade-in zoom-in duration-200 my-8">
        {/* Header */}
        <div className="bg-[#0b1c30] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-0.5">
              Free Expert Logistics Advice
            </span>
            <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-amber-400" />
              Get Relocation Consultation
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#0b1c30]">Consultation Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                Our logistics manager will review your requirement and call you at <span className="font-semibold text-[#0b1c30]">{formData.mobile || 'your mobile'}</span> within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 mb-2">
                Fill in your move details below for an instant price estimation & expert phone consultation.
              </p>

              {/* Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cm-name" className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="cm-name" 
                    required 
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="cm-mobile" className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Mobile Phone *
                  </label>
                  <input 
                    type="tel" 
                    id="cm-mobile" 
                    required 
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={15}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 9910204916"
                    className={`w-full bg-slate-50 border ${phoneError ? 'border-red-500' : 'border-slate-300'} rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] focus:border-transparent outline-none`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-600 shrink-0" /> {phoneError}
                    </p>
                  )}
                </div>
              </div>

              {/* Route */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cm-from" className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Origin City / Area *
                  </label>
                  <LocationAutocomplete
                    id="cm-from"
                    value={formData.from}
                    onChange={(val) => setFormData(prev => ({ ...prev, from: val }))}
                    placeholder="e.g. Greater Noida"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cm-to" className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Destination City *
                  </label>
                  <LocationAutocomplete
                    id="cm-to"
                    value={formData.to}
                    onChange={(val) => setFormData(prev => ({ ...prev, to: val }))}
                    placeholder="e.g. Dehradun"
                    required
                  />
                </div>
              </div>

              {/* Service & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cm-service" className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Service Required
                  </label>
                  <select 
                    id="cm-service"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] focus:border-transparent outline-none cursor-pointer"
                  >
                    <option value="Household Relocation">Household Shifting</option>
                    <option value="Corporate Relocation">Corporate Relocation</option>
                    <option value="Car & Bike Carrier">Car & Bike Carrier</option>
                    <option value="Bespoke Warehousing">Bespoke Warehousing</option>
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="cm-date-btn" className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Target Move Date
                  </label>
                  <button
                    id="cm-date-btn"
                    type="button"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                    className="w-full flex items-center justify-between bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-left text-sm text-[#0b1c30]"
                  >
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                    </div>
                  </button>

                  <CustomDatePicker
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                    isOpen={isDatePickerOpen}
                    onClose={() => setIsDatePickerOpen(false)}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="cm-notes" className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea 
                  id="cm-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. 2 BHK household items, elevator available..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-[#0b1c30] font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitStatus === 'submitting' ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0b1c30]" />
                      Request Free Consultation
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
