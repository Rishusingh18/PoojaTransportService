import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Phone, 
  Calendar, 
  MapPin, 
  Truck, 
  User, 
  ShieldCheck, 
  X, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { BookingDetails, createWhatsAppBookingUrl } from '../lib/booking';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingDetails | null;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  isOpen,
  onClose,
  booking
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !booking) return null;

  const handleCopyId = () => {
    if (booking?.id) {
      navigator.clipboard.writeText(booking.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappUrl = createWhatsAppBookingUrl(booking);

  const confirmationPageUrl = `/confirmation.html?id=${encodeURIComponent(booking.id)}&name=${encodeURIComponent(booking.name)}&mobile=${encodeURIComponent(booking.mobile)}&from=${encodeURIComponent(booking.from)}&to=${encodeURIComponent(booking.to)}&service=${encodeURIComponent(booking.serviceType)}&date=${encodeURIComponent(booking.moveDate)}`;

  return (
    <div 
      className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#0b1c30]/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-[#0b1c30] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/image/logo.png" alt="Pooja Transport Logo" className="h-8 w-auto object-contain" />
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Official Confirmation</span>
              <span className="text-xs text-slate-300 font-medium">Pooja Transport Service</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Top Success Badge */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 shadow-inner mb-1">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 id="confirmation-modal-title" className="font-display text-2xl font-bold text-[#0b1c30]">
              Booking Request Confirmed!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your relocation requirement has been securely registered in our system and assigned to a dispatch coordinator.
            </p>
          </div>

          {/* Reference Booking ID Box */}
          <div className="bg-amber-50/70 border border-amber-300/80 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-sm">
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-widest block">Reference Booking ID</span>
              <span className="font-mono text-base font-bold text-[#0b1c30] tracking-wide">{booking.id}</span>
            </div>
            <button
              onClick={handleCopyId}
              type="button"
              className="inline-flex items-center gap-1.5 bg-white border border-amber-300 hover:bg-amber-100/70 text-amber-900 text-xs font-semibold px-3 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
              title="Copy Booking ID"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-800" />
                  <span>Copy ID</span>
                </>
              )}
            </button>
          </div>

          {/* Route & Booking Summary */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <User className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-medium text-slate-900">{booking.name}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <Phone className="w-3 h-3 text-amber-600" />
                <span>{booking.mobile}</span>
              </div>
            </div>

            {/* Route */}
            <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
              <div className="flex items-center gap-1.5 text-slate-800 truncate max-w-[45%]">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{booking.from}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mx-1" />
              <div className="flex items-center gap-1.5 text-slate-800 truncate max-w-[45%]">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">{booking.to}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="flex items-center gap-1.5 text-slate-600">
                <Truck className="w-3.5 h-3.5 text-amber-600" />
                <span className="truncate">{booking.serviceType}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 justify-end">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{booking.moveDate}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5">
            {/* Customized WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp with Booking ID</span>
            </a>

            {/* Direct Call & View Page Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919910204916"
                className="bg-[#0b1c30] hover:bg-[#152e4d] text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Specialist</span>
              </a>

              <a
                href={confirmationPageUrl}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
              >
                <span>View Full Receipt</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Guarantee / ISO badge */}
          <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>ISO 9001:2015 Certified • 100% Verified Quotation</span>
          </div>

        </div>

      </div>
    </div>
  );
};
export default BookingConfirmationModal;
