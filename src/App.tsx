import React, { useState, useEffect, lazy, Suspense } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloatingStats } from './components/FloatingStats';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';

// Lazy-loaded below-the-fold and modal components
const MobileDrawer = lazy(() => import('./components/MobileDrawer').then(m => ({ default: m.MobileDrawer })));
const ConsultationModal = lazy(() => import('./components/ConsultationModal').then(m => ({ default: m.ConsultationModal })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#quote') {
      setTimeout(() => {
        const el = document.getElementById('quote');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="app-wrapper">
      <Suspense fallback={null}>
        <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      </Suspense>
      <TopBar />
      <Header onToggleMenu={toggleMobileMenu} onOpenConsultation={() => setIsConsultationOpen(true)} />
      <main>
        <Hero />
        <FloatingStats />
        <Suspense fallback={null}>
          <Services />
          <About />
          <Process />
          <Testimonials />
          <FAQ />
        </Suspense>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default App;
