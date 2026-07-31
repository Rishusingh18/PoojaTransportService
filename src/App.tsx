import React, { useState } from 'react';
import { MobileDrawer } from './components/MobileDrawer';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloatingStats } from './components/FloatingStats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="app-wrapper">
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <TopBar />
      <Header onToggleMenu={toggleMobileMenu} />
      <main>
        <Hero />
        <FloatingStats />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default App;
