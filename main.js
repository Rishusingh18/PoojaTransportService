// Pooja Transport Service - Core Business Logic

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu & Modal listeners
    initMobileMenu();
    
    // Mount WhatsApp Floating Bubble Widget on static pages
    initWhatsAppBubble();

    // Check hash for quote
    if (window.location.hash === '#quote') {
        const el = document.getElementById('quote');
        if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
        }
    }
});

// --- Mobile Menu Toggle ---
function toggleMenu() {
    const drawer = document.getElementById('mobileDrawer');
    let overlay = document.querySelector('.mobile-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', toggleMenu);
    }

    if (drawer) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
    }
}

function initMobileMenu() {
    // Mobile menu initialization
}

// --- Dynamic Consultation Modal for Static Pages ---
function openConsultationModal(e) {
    if (e) e.preventDefault();

    // Check if on home page with #quote element
    const quoteEl = document.getElementById('quote');
    if (quoteEl && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        quoteEl.scrollIntoView({ behavior: 'smooth' });
    }

    let modal = document.getElementById('staticConsultationModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'staticConsultationModal';
        modal.className = 'fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0b1c30]/80 backdrop-blur-sm';
        modal.innerHTML = `
            <div class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 animate-in fade-in zoom-in duration-200">
                <div class="bg-[#0b1c30] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
                    <div>
                        <span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-0.5">Free Expert Logistics Advice</span>
                        <h3 class="font-display text-xl font-bold text-white">Get Relocation Consultation</h3>
                    </div>
                    <button type="button" onclick="closeConsultationModal()" class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 text-xl font-bold">&times;</button>
                </div>
                <form id="staticConsultationForm" onsubmit="handleStaticConsultationSubmit(event)" class="p-6 space-y-4">
                    <div id="staticConsultationAlert" class="hidden p-3 bg-green-100 text-green-800 rounded-lg text-xs font-semibold text-center"></div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-[11px] font-semibold text-slate-600 block mb-1">Full Name *</label>
                            <input type="text" id="scm-name" required placeholder="e.g. Rajesh Kumar" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none">
                        </div>
                        <div>
                            <label class="text-[11px] font-semibold text-slate-600 block mb-1">Mobile Phone *</label>
                            <input type="tel" id="scm-mobile" required maxlength="15" placeholder="+91 9910204916" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-[11px] font-semibold text-slate-600 block mb-1">Origin City *</label>
                            <input type="text" id="scm-from" required placeholder="e.g. Greater Noida" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none">
                        </div>
                        <div>
                            <label class="text-[11px] font-semibold text-slate-600 block mb-1">Destination City *</label>
                            <input type="text" id="scm-to" required placeholder="e.g. Dehradun" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none">
                        </div>
                    </div>
                    <div>
                        <label class="text-[11px] font-semibold text-slate-600 block mb-1">Service Required</label>
                        <select id="scm-service" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] outline-none">
                            <option value="Household Relocation">Household Shifting</option>
                            <option value="Corporate Relocation">Corporate Relocation</option>
                            <option value="Car & Bike Carrier">Car & Bike Carrier</option>
                            <option value="Bespoke Warehousing">Bespoke Warehousing</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[11px] font-semibold text-slate-600 block mb-1">Move Details / Notes</label>
                        <textarea id="scm-notes" rows="2" placeholder="e.g. Target move date, 2 BHK inventory..." class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-[#0b1c30] outline-none resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-amber-400 hover:bg-amber-300 text-[#0b1c30] font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-lg shadow transition-all cursor-pointer">
                        Submit Consultation Request
                    </button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeConsultationModal() {
    const modal = document.getElementById('staticConsultationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function handleStaticConsultationSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('scm-name').value;
    const mobile = document.getElementById('scm-mobile').value;
    const from = document.getElementById('scm-from').value;
    const to = document.getElementById('scm-to').value;
    const service = document.getElementById('scm-service').value;
    const notes = document.getElementById('scm-notes').value;

    const bookingId = 'PTS-BK-' + Math.floor(100000 + Math.random() * 900000);
    const payload = {
        id: bookingId,
        name: name || 'Valued Customer',
        mobile: mobile,
        from: from || 'Not specified',
        to: to || 'Not specified',
        serviceType: service || 'Household Relocation',
        moveDate: 'Flexible / Immediate',
        notes: notes || '',
        status: 'Pending',
        createdAt: new Date().toISOString()
    };

    // 1. Local Cache
    try {
        localStorage.setItem('pooja_last_booking', JSON.stringify(payload));
        const existing = JSON.parse(localStorage.getItem('pooja_local_quotes') || '[]');
        localStorage.setItem('pooja_local_quotes', JSON.stringify([payload, ...existing]));
    } catch (err) {
        console.error(err);
    }

    // 2. Transmit to Backend API
    try {
        fetch('/api/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.warn('API quote submit note:', err));
    } catch (e) {
        console.warn(e);
    }

    closeConsultationModal();
    showStaticBookingConfirmationPopup(payload);
}

function showStaticBookingConfirmationPopup(booking) {
    let popup = document.getElementById('staticConfirmationPopup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'staticConfirmationPopup';
        document.body.appendChild(popup);
    }

    const waMsg = `🚚 *Pooja Transport Service - Booking Confirmation*

📋 *Reference Booking ID:* ${booking.id}
👤 *Name:* ${booking.name}
📞 *Mobile:* ${booking.mobile}
📍 *Route:* ${booking.from} ➔ ${booking.to}
📦 *Service:* ${booking.serviceType}
📅 *Move Date:* ${booking.moveDate}

Hello Pooja Transport Team, I have submitted my relocation booking request with Reference ID *${booking.id}*. Can you provide me quote for same?`;

    const waUrl = 'https://wa.me/919910204916?text=' + encodeURIComponent(waMsg);
    const receiptUrl = `/booking-confirmation?id=${encodeURIComponent(booking.id)}&name=${encodeURIComponent(booking.name)}&mobile=${encodeURIComponent(booking.mobile)}&from=${encodeURIComponent(booking.from)}&to=${encodeURIComponent(booking.to)}&service=${encodeURIComponent(booking.serviceType)}&date=${encodeURIComponent(booking.moveDate)}`;

    // Sync browser URL bar to /booking-confirmation
    const currentFullUrl = window.location.pathname + window.location.search + window.location.hash;
    window.history.pushState(
        { modal: 'booking-confirmation', bookingId: booking.id, prevUrl: currentFullUrl },
        '',
        `/booking-confirmation?id=${encodeURIComponent(booking.id)}`
    );

    window.onpopstate = function() {
        const popup = document.getElementById('staticConfirmationPopup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    popup.className = 'fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#0b1c30]/85 backdrop-blur-md overflow-y-auto';
    popup.innerHTML = `
        <div class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
            <!-- Header -->
            <div class="bg-[#0b1c30] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
                <div class="flex items-center gap-3">
                    <img src="/image/logo.png" alt="Pooja Transport Logo" class="h-8 w-auto object-contain">
                    <div>
                        <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Official Confirmation</span>
                        <span class="text-xs text-slate-300 font-medium">Pooja Transport Service</span>
                    </div>
                </div>
                <button type="button" onclick="closeStaticConfirmationPopup()" class="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 text-xl font-bold transition-colors cursor-pointer">&times;</button>
            </div>

            <!-- Body -->
            <div class="p-6 space-y-5">
                <div class="text-center space-y-2">
                    <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 shadow-inner mb-1">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="font-display text-2xl font-bold text-[#0b1c30]">Booking Request Confirmed!</h3>
                    <p class="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Your relocation requirement has been securely registered in our system and assigned to a dispatch coordinator.
                    </p>
                </div>

                <!-- Reference ID -->
                <div class="bg-amber-50/70 border border-amber-300/80 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-xs">
                    <div>
                        <span class="text-[10px] font-bold text-amber-900 uppercase tracking-widest block">Reference Booking ID</span>
                        <span id="staticBkId" class="font-mono text-base font-bold text-[#0b1c30] tracking-wide">${booking.id}</span>
                    </div>
                    <button type="button" onclick="copyStaticBookingId()" id="staticCopyBtn" class="bg-white border border-amber-300 hover:bg-amber-100/70 text-amber-900 text-xs font-semibold px-3 py-2 rounded-lg transition-all cursor-pointer shadow-xs">
                        📋 Copy ID
                    </button>
                </div>

                <!-- Summary Card -->
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5 text-xs">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span class="font-bold text-slate-800">${booking.name}</span>
                        <span class="text-slate-600">${booking.mobile}</span>
                    </div>
                    <div class="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 font-semibold text-slate-800">
                        <span class="truncate max-w-[45%]">${booking.from}</span>
                        <span class="text-amber-500 mx-2">➔</span>
                        <span class="truncate max-w-[45%]">${booking.to}</span>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-slate-600 pt-0.5">
                        <span>📦 ${booking.serviceType}</span>
                        <span>📅 ${booking.moveDate}</span>
                    </div>
                </div>

                <!-- Action CTAs -->
                <div class="space-y-2.5">
                    <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>Chat on WhatsApp with Booking ID</span>
                    </a>

                    <div class="grid grid-cols-2 gap-2">
                        <a href="tel:+919910204916" class="bg-[#0b1c30] hover:bg-[#152e4d] text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                            <span>📞 Call Specialist</span>
                        </a>
                        <a href="${receiptUrl}" class="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-300">
                            <span>View Full Receipt ↗</span>
                        </a>
                    </div>
                </div>

                <div class="text-center pt-1 text-[11px] text-slate-500">
                    <span>🛡️ ISO 9001:2015 Certified • 100% Verified Quotation</span>
                </div>
            </div>
        </div>
    `;
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeStaticConfirmationPopup() {
    const popup = document.getElementById('staticConfirmationPopup');
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }
    if (window.history.state && window.history.state.modal === 'booking-confirmation') {
        window.history.back();
    } else if (window.location.pathname.includes('booking-confirmation')) {
        const returnUrl = (window.history.state && window.history.state.prevUrl) || '/';
        window.history.pushState(null, '', returnUrl);
    }
}

function copyStaticBookingId() {
    const el = document.getElementById('staticBkId');
    if (el) {
        navigator.clipboard.writeText(el.innerText).then(() => {
            const btn = document.getElementById('staticCopyBtn');
            if (btn) {
                btn.innerText = '✓ Copied!';
                setTimeout(() => { btn.innerText = '📋 Copy ID'; }, 2000);
            }
        });
    }
}

// Quick Select Items (Purely functional)
function addQuickItemShared(itemName, targetId) {
    const textarea = document.getElementById(targetId);
    if (textarea) {
        if (textarea.value) {
            textarea.value += ', ' + itemName;
        } else {
            textarea.value = itemName;
        }
    }
}

// WhatsApp Quote Logic
function sendWhatsAppQuote(data) {
    let message = "Hello Pooja Transport Service, I want to request a Shifting Quote." +
        "%0a%0a*--- Move Details ---*" +
        "%0a*Name:* " + data.name +
        "%0a*Mobile:* " + data.mobile +
        "%0a*From:* " + data.from +
        "%0a*To:* " + data.to +
        (data.date ? "%0a*Date:* " + data.date : "") +
        (data.floor ? "%0a*Floor:* " + data.floor : "") +
        "%0a*Items:* " + data.items;

    window.open("https://wa.me/919910204916?text=" + message, '_blank');
}

// --- Floating WhatsApp Bubble for All Static Pages ---
function initWhatsAppBubble() {
    // Avoid double mounting if already mounted by React or script
    if (document.querySelector('.pooja-wa-widget') || document.querySelector('aside[aria-label="Quick Contact Options"]')) {
        return;
    }

    const widget = document.createElement('aside');
    widget.className = 'pooja-wa-widget';
    widget.setAttribute('aria-label', 'Quick Contact Options');

    const defaultMsg = encodeURIComponent('Hi Pooja Transport Service, I would like to get a free shifting quote for relocation.');

    widget.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <div id="poojaWaTooltip" class="pooja-wa-tooltip" onclick="window.open('https://wa.me/919910204916?text=${defaultMsg}', '_blank', 'noopener,noreferrer')" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #10b981; display: inline-block;"></span>
                <span>Need Shifting Quote? <b>Chat on WhatsApp</b></span>
                <span onclick="event.stopPropagation(); document.getElementById('poojaWaTooltip').style.display='none';" style="cursor: pointer; color: #94a3b8; font-size: 14px; margin-left: 6px; padding: 0 2px;">&times;</span>
            </div>
            <a 
                href="https://wa.me/919910204916?text=${defaultMsg}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="pooja-wa-btn" 
                aria-label="Chat with Pooja Transport on WhatsApp" 
                title="Chat on WhatsApp"
                style="display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background-color: #25D366; box-shadow: 0 4px 14px rgba(0,0,0,0.25);"
            >
                <svg viewBox="0 0 24 24" width="28" height="28" style="width: 28px; height: 28px; max-width: 28px; max-height: 28px; display: block; fill: #ffffff;">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span class="pooja-wa-badge"><span class="pooja-wa-badge-dot"></span></span>
            </a>
        </div>
    `;

    document.body.appendChild(widget);

    // Auto-dismiss tooltip after 8 seconds so it doesn't obstruct reading
    setTimeout(() => {
        const tt = document.getElementById('poojaWaTooltip');
        if (tt) {
            tt.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            tt.style.opacity = '0';
            tt.style.transform = 'translateX(10px)';
            setTimeout(() => { tt.style.display = 'none'; }, 400);
        }
    }, 8000);
}

