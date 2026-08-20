export interface BookingDetails {
  id: string;
  name: string;
  mobile: string;
  from: string;
  to: string;
  serviceType: string;
  moveDate: string;
  notes?: string;
  status?: string;
  createdAt?: string;
}

export function generateBookingId(): string {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `PTS-BK-${randomNum}`;
}

export function createWhatsAppBookingUrl(booking: Partial<BookingDetails>): string {
  const phone = '919910204916';
  const bookingId = booking.id || 'PTS-BK-PENDING';
  const name = booking.name || 'Customer';
  const mobile = booking.mobile || 'Not specified';
  const from = booking.from || 'Not specified';
  const to = booking.to || 'Not specified';
  const service = booking.serviceType || 'Household Relocation';
  const date = booking.moveDate || 'Immediate / Flexible';

  const message = `🚚 *Pooja Transport Service - Booking Confirmation*

📋 *Reference Booking ID:* ${bookingId}
👤 *Name:* ${name}
📞 *Mobile:* ${mobile}
📍 *Route:* ${from} ➔ ${to}
📦 *Service:* ${service}
📅 *Move Date:* ${date}

Hello Pooja Transport Team, I have submitted my relocation booking request with Reference ID *${bookingId}*. Can you provide me quote for same?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function saveLastBooking(booking: BookingDetails): void {
  try {
    localStorage.setItem('pooja_last_booking', JSON.stringify(booking));
    const existing = JSON.parse(localStorage.getItem('pooja_local_quotes') || '[]');
    localStorage.setItem('pooja_local_quotes', JSON.stringify([booking, ...existing]));
  } catch (err) {
    console.error('Error saving last booking:', err);
  }
}

export function getLastBooking(): BookingDetails | null {
  try {
    const raw = localStorage.getItem('pooja_last_booking');
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Error getting last booking:', err);
  }
  return null;
}
