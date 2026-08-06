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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, string> = {
      'h-name': 'name',
      'h-mobile': 'mobile',
      'h-service': 'serviceType'
    };
    const key = fieldMap[id] || id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = format(selectedDate, "MMM dd, yyyy");
    const message = "Hello Pooja Transport Service, I want to request a Shifting Quote." +
      "%0a%0a*--- Move Details ---*" +
      (formData.name ? "%0a*Name:* " + encodeURIComponent(formData.name) : "") +
      (formData.mobile ? "%0a*Mobile:* " + encodeURIComponent(formData.mobile) : "") +
      "%0a*From:* " + encodeURIComponent(formData.from || "Not specified") +
      "%0a*To:* " + encodeURIComponent(formData.to || "Not specified") +
      "%0a*Service:* " + encodeURIComponent(formData.serviceType) +
      "%0a*Date:* " + encodeURIComponent(formattedDate);

    window.open("https://wa.me/919910204916?text=" + message, '_blank');
  };

  return (
    <section className="relative min-h-[720px] flex items-center bg-[#f8f9ff] overflow-hidden py-16 md:py-24">
      {/* Background Cargo Visual & Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center object-cover"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30]/95 via-[#0b1c30]/75 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Subtitle matching AI Studio */}
        <div className="lg:col-span-7 flex flex-col justify-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-3">
            ISO 9001:2015 Certified Relocation Logistics
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold tracking-tight">
            Mastering Global Momentum.
          </h1>

          <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed font-normal">
            Bespoke logistics solutions for the world's most demanding supply chains. Precision engineered, elegantly executed.
          </p>

          <div className="flex items-center space-x-8 pt-4 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-display text-2xl font-bold text-white">100%</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider">Transit Insurance</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div>
              <div className="font-display text-2xl font-bold text-white">10+ Yrs</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider">Track Record</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div>
              <div className="font-display text-2xl font-bold text-white">99.9%</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider">On-Time Arrival</div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating White Consultation Form Card matching AI Studio */}
        <div className="lg:col-span-5" id="quote">
          <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 text-[#0b1c30]">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0b1c30] mb-6">
              REQUEST A CONSULTATION
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                    City or Port (Origin)
                  </label>
                  <LocationAutocomplete
                    id="h-from"
                    value={formData.from}
                    onChange={(val) => setFormData(prev => ({ ...prev, from: val }))}
                    placeholder="City or Port"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                    City or Port (Destination)
                  </label>
                  <LocationAutocomplete
                    id="h-to"
                    value={formData.to}
                    onChange={(val) => setFormData(prev => ({ ...prev, to: val }))}
                    placeholder="City or Port"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="h-name" 
                    className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-[#0b1c30] focus:ring-0 px-0 py-2 text-sm text-[#0b1c30]" 
                    placeholder="e.g. Rajesh Kumar" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Mobile Phone
                  </label>
                  <input 
                    type="tel" 
                    id="h-mobile" 
                    className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-[#0b1c30] focus:ring-0 px-0 py-2 text-sm text-[#0b1c30]" 
                    placeholder="+91 9910204916" 
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                  Service Requirement
                </label>
                <select 
                  id="h-service"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-[#0b1c30] focus:ring-0 px-0 py-2 text-sm text-[#0b1c30] appearance-none cursor-pointer"
                >
                  <option value="Household Relocation">Household & Executive Shifting</option>
                  <option value="Corporate Relocation">Corporate Relocation</option>
                  <option value="Vehicle Transport">Car & Bike Carrier</option>
                  <option value="Bespoke Warehousing">Bespoke Warehousing</option>
                </select>
              </div>

              <div className="relative">
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                  Target Move Date
                </label>
                <button
                  type="button"
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                  className="w-full flex items-center justify-between py-2 border-b-2 border-slate-300 text-left text-sm text-[#0b1c30]"
                >
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-slate-500" />
                    <span className="font-semibold">{format(selectedDate, "MMM dd, yyyy")}</span>
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

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-[#131b2e] text-white font-semibold text-xs uppercase tracking-widest py-4 px-6 rounded hover:bg-[#0b1c30] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-emerald-400 text-base"></i>
                  SUBMIT PARAMETERS
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


