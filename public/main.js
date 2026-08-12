// Pooja Transport Service - Core Business Logic

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu & Modal listeners
    initMobileMenu();
    
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
    const alertDiv = document.getElementById('staticConsultationAlert');
    const name = document.getElementById('scm-name').value;
    const mobile = document.getElementById('scm-mobile').value;
    const from = document.getElementById('scm-from').value;
    const to = document.getElementById('scm-to').value;
    const service = document.getElementById('scm-service').value;
    const notes = document.getElementById('scm-notes').value;

    const payload = {
        id: `quote-${Date.now()}`,
        name: name || 'Valued Customer',
        mobile: mobile,
        from: from,
        to: to,
        serviceType: service,
        moveDate: 'Flexible / Immediate',
        notes: notes,
        status: 'Pending',
        createdAt: new Date().toISOString()
    };

    try {
        const existing = JSON.parse(localStorage.getItem('pooja_local_quotes') || '[]');
        localStorage.setItem('pooja_local_quotes', JSON.stringify([payload, ...existing]));
    } catch (err) {
        console.error(err);
    }

    if (alertDiv) {
        alertDiv.innerText = "✓ Consultation Request Submitted! We will call you back shortly.";
        alertDiv.classList.remove('hidden');
    }

    setTimeout(() => {
        closeConsultationModal();
        if (alertDiv) alertDiv.classList.add('hidden');
    }, 2500);
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
