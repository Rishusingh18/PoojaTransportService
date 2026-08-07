"""
Script to update all static HTML pages with consistent header matching the home page.
Run: python update_headers.py
"""
import re
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

# Pages and their config: (file_path, logo_src, link_prefix, active_page)
PAGES = [
    ("about.html",    "image/logo.png",   "",     "about"),
    ("service.html",  "image/logo.png",   "",     "services"),
    ("contact.html",  "image/logo.png",   "",     "contact"),
    ("cities/packers-movers-dehradun.html",      "../image/logo.png", "../", "home"),
    ("cities/packers-movers-greater-noida.html", "../image/logo.png", "../", "home"),
    ("cities/packers-movers-kanpur.html",        "../image/logo.png", "../", "home"),
    ("cities/packers-movers-lucknow.html",       "../image/logo.png", "../", "home"),
    ("cities/packers-movers-varanasi.html",      "../image/logo.png", "../", "home"),
]

def nav_link(href, label, active, page_key):
    if page_key == active:
        return f'<a href="{href}" class="text-white font-semibold border-b-2 border-amber-400 pb-1 text-sm hover:text-amber-300 transition-colors">{label}</a>'
    return f'<a href="{href}" class="text-slate-300 text-sm font-medium hover:text-white transition-colors">{label}</a>'

def build_header(logo_src, prefix, active):
    home_cls   = "text-white font-semibold border-b-2 border-amber-400 pb-1 text-sm hover:text-amber-300 transition-colors" if active == "home"     else "text-slate-300 text-sm font-medium hover:text-white transition-colors"
    about_cls  = "text-white font-semibold border-b-2 border-amber-400 pb-1 text-sm hover:text-amber-300 transition-colors" if active == "about"    else "text-slate-300 text-sm font-medium hover:text-white transition-colors"
    svc_cls    = "text-white font-semibold border-b-2 border-amber-400 pb-1 text-sm hover:text-amber-300 transition-colors" if active == "services" else "text-slate-300 text-sm font-medium hover:text-white transition-colors"
    contact_cls= "text-white font-semibold border-b-2 border-amber-400 pb-1 text-sm hover:text-amber-300 transition-colors" if active == "contact"  else "text-slate-300 text-sm font-medium hover:text-white transition-colors"

    topbar = f"""  <!-- ================= TOP BAR ================= -->
  <div class="bg-[#0b1c30] text-white py-2.5 px-4 text-xs font-medium border-b border-white/10">
    <div class="max-w-[1280px] mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-6">
        <a href="tel:+919910204916" class="hover:text-amber-400 transition-colors flex items-center gap-1.5">
          <i class="fas fa-phone-alt text-[10px]"></i> +91 9910204916
        </a>
        <a href="mailto:poojatransportservice3@gmail.com" class="hidden sm:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <i class="fas fa-envelope text-[10px]"></i> poojatransportservice3@gmail.com
        </a>
      </div>
      <div class="flex items-center space-x-6">
        <span class="hidden md:inline-flex items-center gap-1 opacity-80">
          <i class="fas fa-certificate text-[10px] text-amber-400"></i> ISO 9001:2015 Certified
        </span>
        <span class="inline-flex items-center gap-1 opacity-80">
          <i class="fas fa-clock text-[10px]"></i> 24/7 Operations Command
        </span>
      </div>
    </div>
  </div>"""

    header = f"""  <!-- ================= HEADER ================= -->
  <header class="w-full top-0 sticky bg-[#0b1c30] text-white border-b border-white/10 z-50 transition-shadow duration-300 shadow-md">
    <div class="flex justify-between items-center h-16 sm:h-20 max-w-[1280px] mx-auto px-2.5 sm:px-4 md:px-16 min-w-0">
      <!-- Brand Logo -->
      <a href="{prefix}index.html" class="flex items-center gap-1.5 sm:gap-3 group shrink min-w-0 mr-1" title="Pooja Transport Service Homepage">
        <img src="{logo_src}" alt="Pooja Transport Service Logo" class="h-7 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0" />
        <span class="flex flex-col min-w-0">
          <span class="font-bold text-[11px] xs:text-xs sm:text-lg md:text-xl tracking-tight text-white leading-tight truncate" style="font-family:'Playfair Display',serif">
            POOJA <span class="text-amber-400">TRANSPORT</span>
          </span>
          <span class="hidden sm:block text-[9px] sm:text-[10px] font-semibold tracking-widest text-slate-300 uppercase whitespace-nowrap">
            Relocation Excellence
          </span>
        </span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex space-x-8 items-center">
        <a href="{prefix}index.html" class="{home_cls}">Home</a>
        <a href="{prefix}about.html" class="{about_cls}">About Us</a>

        <!-- Services Dropdown -->
        <div class="relative group">
          <a href="{prefix}service.html" class="{svc_cls} flex items-center gap-1 py-6">
            Services <i class="fas fa-chevron-down text-xs opacity-70 group-hover:rotate-180 transition-transform"></i>
          </a>
          <div class="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-[#131b2e] border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 grid grid-cols-2 gap-3 z-50">
            <a href="{prefix}service.html#household" class="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
              <div class="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i class="fas fa-home text-sm"></i></div>
              <div><div class="font-semibold text-sm text-white">Household Relocation</div><p class="text-xs text-slate-300 mt-0.5">White-glove packing & safe transit for homes.</p></div>
            </a>
            <a href="{prefix}service.html#office" class="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
              <div class="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i class="fas fa-building text-sm"></i></div>
              <div><div class="font-semibold text-sm text-white">Corporate Infrastructure</div><p class="text-xs text-slate-300 mt-0.5">Headquarters & office move execution.</p></div>
            </a>
            <a href="{prefix}service.html#vehicle" class="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
              <div class="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i class="fas fa-car text-sm"></i></div>
              <div><div class="font-semibold text-sm text-white">Car & Bike Carrier</div><p class="text-xs text-slate-300 mt-0.5">Enclosed vehicle transport with live tracking.</p></div>
            </a>
            <a href="{prefix}service.html#warehousing" class="p-3 rounded-md hover:bg-white/10 transition-colors flex items-start gap-3">
              <div class="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-amber-400 shrink-0"><i class="fas fa-warehouse text-sm"></i></div>
              <div><div class="font-semibold text-sm text-white">Bespoke Warehousing</div><p class="text-xs text-slate-300 mt-0.5">Climate-controlled short & long term storage.</p></div>
            </a>
          </div>
        </div>

        <!-- Cities Dropdown -->
        <div class="relative group">
          <a href="#" class="text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-1 py-6">
            Cities <i class="fas fa-chevron-down text-xs opacity-70 group-hover:rotate-180 transition-transform"></i>
          </a>
          <div class="absolute top-full left-0 w-52 bg-[#131b2e] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
            <a href="{prefix}cities/packers-movers-dehradun.html" class="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Dehradun</a>
            <a href="{prefix}cities/packers-movers-greater-noida.html" class="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Greater Noida</a>
            <a href="{prefix}cities/packers-movers-kanpur.html" class="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Kanpur</a>
            <a href="{prefix}cities/packers-movers-lucknow.html" class="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Lucknow</a>
            <a href="{prefix}cities/packers-movers-varanasi.html" class="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 hover:text-white">Packers & Movers Varanasi</a>
          </div>
        </div>

        <a href="{prefix}contact.html" class="{contact_cls}">Contact</a>
      </nav>

      <!-- Right Action Container (Call + Get Consultation + Mobile Hamburger) -->
      <div class="flex items-center gap-1 sm:gap-2.5 shrink-0">
        <!-- Call Button -->
        <a href="tel:+919910204916" class="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors shrink-0" title="Call Us Now">
          <i class="fas fa-phone-alt text-[10px] text-amber-300"></i>
          <span class="hidden lg:inline">+91 9910204916</span>
          <span class="inline lg:hidden">Call</span>
        </a>

        <!-- Get Consultation Button -->
        <a href="{prefix}index.html#quote" class="bg-amber-400 text-[#0b1c30] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-md hover:bg-amber-300 transition-all shadow-sm shrink-0 whitespace-nowrap">
          <span class="sm:hidden">Consult</span>
          <span class="hidden sm:inline">Get Consultation</span>
        </a>

        <!-- Mobile Hamburger Toggle -->
        <button class="lg:hidden p-1 text-white hover:text-amber-400 focus:outline-none shrink-0 ml-0.5" onclick="toggleMenu()" aria-label="Toggle Navigation Menu">
          <i class="fas fa-bars text-base sm:text-lg"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- ================= MOBILE DRAWER ================= -->
  <div class="mobile-drawer hidden" id="mobileDrawer">
    <div class="drawer-header flex items-center justify-between p-4 border-b border-white/10" style="background:#0b1c30">
      <div class="flex items-center gap-2">
        <img src="{logo_src}" alt="Pooja Transport Service" class="h-10 w-auto">
        <span class="font-bold text-sm text-white" style="font-family:'Playfair Display',serif">POOJA <span class="text-amber-400">TRANSPORT</span></span>
      </div>
      <div class="drawer-close cursor-pointer text-white" onclick="toggleMenu()"><i class="fas fa-times text-xl"></i></div>
    </div>
    <nav class="drawer-nav flex flex-col p-4 space-y-3">
      <a href="{prefix}index.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Home</a>
      <a href="{prefix}about.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">About Us</a>
      <a href="{prefix}service.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Services</a>
      <a href="{prefix}cities/packers-movers-dehradun.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Dehradun</a>
      <a href="{prefix}cities/packers-movers-greater-noida.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Greater Noida</a>
      <a href="{prefix}cities/packers-movers-kanpur.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Kanpur</a>
      <a href="{prefix}cities/packers-movers-lucknow.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Lucknow</a>
      <a href="{prefix}cities/packers-movers-varanasi.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Varanasi</a>
      <a href="{prefix}contact.html" class="text-sm font-medium text-slate-700 hover:text-[#0b1c30] py-2 border-b border-slate-100">Contact</a>
      <a href="tel:+919910204916" class="mt-2 bg-amber-400 text-[#0b1c30] text-sm font-bold text-center py-2.5 rounded">Call Now: +91 9910204916</a>
    </nav>
  </div>"""

    return topbar + "\n\n" + header


def replace_header_section(content, new_header):
    """
    Remove old top bar + header + mobile drawer and replace with new unified header.
    Uses regex to match from the first top-bar/header comment to just before the first <section or <main or first content div after header.
    """
    # Match everything from start of body children up to (but not including) the first main content landmark
    # Strategy: find <body...> tag, then replace everything before first <section or <main or first <div id= that is content
    
    # Pattern: match from start of topbar block through end of mobile drawer or end of header
    patterns = [
        # Cities pages: new-topbar + viamaster-header
        (r'(?s)([ \t]*<!-- ={5,} TOPBAR ={5,} -->.*?</div>\s*)([ \t]*<!-- ={5,} HEADER ={5,} -->.*?<!-- ={5,} MOBILE.*?</div>\s*)', None),
        # about/service/contact: TOP BAR + HEADER + MOBILE MENU DRAWER  
        (r'(?s)([ \t]*<!-- ={5,} TOP BAR ={5,} -->.*?</div>\s*\n\n?)([ \t]*<!-- ={5,} HEADER.*?</header>\s*\n\n?)([ \t]*<!-- ={5,} MOBILE.*?</div>\s*\n?)', None),
        # contact: TOP BAR + HEADER + MOBILE
        (r'(?s)([ \t]*<!-- TOP BAR -->.*?</div>\s*\n\n?)([ \t]*<!-- HEADER.*?</header>\s*\n\n?)([ \t]*<!-- MOBILE.*?</div>\s*\n?)', None),
        # Fallback: match just the header block
        (r'(?s)([ \t]*<!-- .*?TOP.*?BAR.*?-->.*?</div>\s*\n?\n?)([ \t]*<!-- .*?HEADER.*?-->.*?</header>\s*\n?\n?)', None),
    ]
    
    for pat, _ in patterns:
        m = re.search(pat, content)
        if m:
            start = m.start()
            end = m.end()
            return content[:start] + new_header + "\n\n" + content[end:]
    
    return None


def process_file(rel_path, logo_src, prefix, active):
    full_path = os.path.join(ROOT, rel_path)
    if not os.path.exists(full_path):
        print(f"  SKIP (not found): {rel_path}")
        return

    with open(full_path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()

    new_header = build_header(logo_src, prefix, active)
    updated = replace_header_section(content, new_header)
    
    if updated is None:
        print(f"  WARNING: Could not find header pattern in {rel_path}")
        return

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(updated)
    
    print(f"  OK: {rel_path}")


if __name__ == '__main__':
    print("Updating headers on all static pages...")
    for page_path, logo, prefix, active in PAGES:
        process_file(page_path, logo, prefix, active)
    print("\nDone! All headers updated.")
