import React, { useState, useEffect } from 'react';
import { MobileDrawer } from './components/MobileDrawer';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloatingStats } from './components/FloatingStats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';
import { ConsultationModal } from './components/ConsultationModal';

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
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <TopBar />
      <Header onToggleMenu={toggleMobileMenu} onOpenConsultation={() => setIsConsultationOpen(true)} />
      <main>
        <Hero />
        <FloatingStats />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default App;
