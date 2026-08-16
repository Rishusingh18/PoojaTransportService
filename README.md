# 🚚 Pooja Transport Service | #1 Trusted Packers and Movers

[![Website](https://img.shields.io/badge/Website-poojatransportservice.com-0b1c30?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.poojatransportservice.com/)
[![ISO Certified](https://img.shields.io/badge/ISO-9001%3A2015%20Certified-gold?style=for-the-badge&logo=google&logoColor=white)](https://www.poojatransportservice.com/)
[![Built With](https://img.shields.io/badge/Stack-Vite%20%7C%20TailwindCSS%20%7C%20JS-blue?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Official source repository for **Pooja Transport Service** — India's premier ISO 9001:2015 certified packers and movers agency. We provide safe, reliable, and affordable household shifting, corporate office relocation, car & bike transportation, and secure warehousing services across **Greater Noida, Delhi NCR, Lucknow, Dehradun, Kanpur, Varanasi**, and nationwide.

---

## 📌 Table of Contents
- [🌐 Live Demo & Quick Links](#-live-demo--quick-links)
- [✨ Key Features](#-key-features)
- [📍 Location & City Landing Pages](#-location--city-landing-pages)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 SEO & Performance Optimizations](#-seo--performance-optimizations)
- [📂 Repository Structure](#-repository-structure)
- [💻 Getting Started & Local Development](#-getting-started--local-development)
- [🏷️ GitHub SEO & Metadata Configuration](#️-github-seo--metadata-configuration)
- [📞 Contact Information](#-contact-information)

---

## 🌐 Live Demo & Quick Links

- **Main Website**: [https://www.poojatransportservice.com/](https://www.poojatransportservice.com/)
- **Instant Cost Calculator**: [Get Free Relocation Quote](https://www.poojatransportservice.com/#calculator)
- **Direct Call Support**: [+91-9910204916](tel:+919910204916) | [+91-9528808820](tel:+919528808820)
- **Email Contact**: [contact@poojatransportservice.com](mailto:contact@poojatransportservice.com)

---

## ✨ Key Features

- **ISO 9001:2015 Certified Operations**: 10+ years of operational excellence with over 50,000+ successful relocations.
- **Dynamic Relocation Cost Estimator**: Real-time cost calculation based on house size (1BHK, 2BHK, 3BHK, Villa, Office), shifting distance, and service type.
- **Hyper-Local City Landing Pages**: Custom-built, SEO-tailored landing pages optimized for search queries across major North Indian cities.
- **Comprehensive Moving Solutions**:
  - 🏠 **Household Shifting**: Premium packing with bubble wrap, corrugated sheets, and damage-proof transit.
  - 🏢 **Office Relocation**: Seamless commercial corporate moving with minimal downtime.
  - 🚗 **Car & Bike Transport**: Dedicated multi-car carriers and enclosed container transport.
  - 📦 **Warehousing & Storage**: 24/7 CCTV monitored climate-controlled storage facilities.
- **Rich Schema.org Integration**: Full JSON-LD structured data (`LocalBusiness`, `MovingCompany`, `OfferCatalog`, `PostalAddress`, `GeoCoordinates`) for rich Google search snippets.
- **Kinetic Modern UI**: High-converting, fully responsive user experience powered by Tailwind CSS and modern CSS grid/flexbox layouts.

---

## 📍 Location & City Landing Pages

We operate dedicated service hubs across North India with specialized city pages:

| Location | Page Link | Target Keywords |
| :--- | :--- | :--- |
| **Greater Noida (HQ)** | [View Page](https://www.poojatransportservice.com/cities/packers-movers-greater-noida) | Packers and Movers Greater Noida, Delhi NCR Shifting |
| **Lucknow** | [View Page](https://www.poojatransportservice.com/cities/packers-movers-lucknow) | Best Packers Movers Lucknow, Local House Relocation |
| **Dehradun** | [View Page](https://www.poojatransportservice.com/cities/packers-movers-dehradun) | Packers Movers Dehradun, Home Shifting Charges |
| **Kanpur** | [View Page](https://www.poojatransportservice.com/cities/packers-movers-kanpur) | Reliable Movers Kanpur, Transport Service |
| **Varanasi** | [View Page](https://www.poojatransportservice.com/cities/packers-movers-varanasi) | Household Packers Varanasi, Bike Car Movers |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern Semantic Markups
- **Styling & Design System**: [Tailwind CSS](https://tailwindcss.com/), Custom Vanilla CSS (`/Css/redesign.css`), Font Awesome 6, Material Symbols
- **Build Tool**: [Vite](https://vitejs.dev/) multi-page application bundling
- **Backend / Serverless**: Node.js Express API routes hosted via Vercel serverless functions (`/api`)
- **Hosting & Infrastructure**: Vercel (`cleanUrls: true`), Custom Domain Routing

---

## 🚀 SEO & Performance Optimizations

- **Meta Tags & Open Graph**: Full coverage of Title tags, Description tags, Keyword targeting, Canonical tags, Open Graph (`og:*`), and Twitter Cards (`twitter:*`).
- **Structured Data (JSON-LD)**: Validated Schema.org markup enabling Rich Snippets, Star Ratings, Address Geolocation, and Price Ranges in Google Search.
- **XML Sitemap**: Fully updated [`sitemap.xml`](sitemap.xml) with priority indexing and weekly/monthly update frequencies.
- **Robots Directives**: [`robots.txt`](robots.txt) configured for optimal search engine crawling while protecting administrative endpoints.
- **Mobile-First Responsiveness**: 100% responsive design compliant with Google Mobile-First Indexing and Core Web Vitals targets.

---

## 📂 Repository Structure

```text
PoojaTransportService/
├── cities/                           # Localized City Landing Pages
│   ├── packers-movers-dehradun.html
│   ├── packers-movers-greater-noida.html
│   ├── packers-movers-kanpur.html
│   ├── packers-movers-lucknow.html
│   └── packers-movers-varanasi.html
├── Css/                              # Custom Styles & Redesign Tokens
│   └── redesign.css
├── api/                              # Express / Vercel Serverless Endpoints
├── server/                           # Backend Node Services
├── src/                              # Vite & UI Component Modules
├── public/                           # Static Public Assets
├── index.html                        # Main Homepage (Greater Noida Hub)
├── about.html                        # About Us & Company Profile
├── service.html                      # Service Offerings Detailed Overview
├── contact.html                      # Contact Form & Office Map Locations
├── admin.html                        # Internal Management Dashboard
├── main.js                           # Core JavaScript & Interactivity Logic
├── sitemap.xml                       # Search Engine XML Sitemap
├── robots.txt                        # Search Engine Crawler Directives
├── vercel.json                       # Deployment & Clean URL Router Rules
└── vite.config.js                    # Vite Multi-Page Build Configuration
```

---

## 💻 Getting Started & Local Development

To run and edit this project locally, follow these steps:

### Prerequisites
- Node.js (v16.0 or higher)
- npm (v8.0 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rishusingh18/PoojaTransportService.git
   cd PoojaTransportService
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 🏷️ GitHub SEO & Metadata Configuration

To maximize visibility on GitHub Search and Google Search for this repository, ensure the following GitHub Repository settings are applied on [GitHub Settings](https://github.com/Rishusingh18/PoojaTransportService):

1. **Repository Description**:
   > `Official repository for Pooja Transport Service — ISO 9001:2015 Certified Packers & Movers in Greater Noida, Delhi NCR, Lucknow, Dehradun, Kanpur & Varanasi.`
2. **Website Link**:
   > `https://www.poojatransportservice.com/`
3. **Repository Topics / Tags**:
   `packers-and-movers` · `house-shifting` · `relocation-services` · `transport-service` · `greater-noida` · `delhi-ncr` · `lucknow` · `dehradun` · `kanpur` · `varanasi` · `logistics` · `seo-optimized` · `tailwind-css` · `vite`

---

## 📞 Contact Information

- **Company Name**: Pooja Transport Service
- **Head Office Address**: Gaur City Center, Greater Noida, Uttar Pradesh 201009, India
- **Phone Numbers**: +91-9910204916 | +91-9528808820
- **Email**: contact@poojatransportservice.com
- **Website**: [https://www.poojatransportservice.com/](https://www.poojatransportservice.com/)

---

© 2026 Pooja Transport Service. All Rights Reserved. ISO 9001:2015 Certified Relocation Provider.
