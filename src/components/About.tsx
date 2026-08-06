import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Zap, 
  Lock, 
  Clock, 
  TrendingUp,
  MapPin
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-b border-outline-variant/40" id="why-us">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Title */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest block mb-2">
            The Kinetic Standard
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-on-background font-bold tracking-tight mb-4">
            Relocate with Absolute Authority & Precision.
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
            Pooja Transport Service delivers stress-free, white-glove relocations across India. Built on certified packing protocols, live satellite telemetry, and a 100% transit protection guarantee.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-on-background font-bold mb-3">
                Absolute Discretion
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Confidential handling for high-profile residential and commercial assets. Verified crew members under non-disclosure execution protocols.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/30 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              100% Police Verified Crew
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary mb-6">
                <Zap className="w-6 h-6 text-[#6e5e00]" />
              </div>
              <h3 className="font-display text-xl text-on-background font-bold mb-3">
                Strategic Execution
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Phased shifting schedules engineered to eliminate downtime for offices and minimize disruption for families during transit.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/30 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Zero-Downtime Guarantee
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-on-background font-bold mb-3">
                Pinpoint Precision
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                5-layer shockproof technical packing, moisture barrier sealing, and GPS containerized tracking to ensure zero item damage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/30 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              100% Transit Coverage
            </div>
          </div>
        </div>

        {/* Statistics & Impact Banner */}
        <div className="bg-primary-container text-on-primary rounded-xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                99.9%
              </div>
              <div className="text-xs uppercase tracking-widest text-on-primary-container font-semibold">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                50,000+
              </div>
              <div className="text-xs uppercase tracking-widest text-on-primary-container font-semibold">
                Moves Executed
              </div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                10+ Yrs
              </div>
              <div className="text-xs uppercase tracking-widest text-on-primary-container font-semibold">
                Industry Leadership
              </div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                ISO 9001
              </div>
              <div className="text-xs uppercase tracking-widest text-on-primary-container font-semibold">
                Certified Quality
              </div>
            </div>
          </div>
        </div>

        {/* Executive Team / Operational Leadership */}
        <div className="border-t border-outline-variant/40 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest block mb-2">
                Command & Operations
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-on-background font-bold">
                Operational Leadership
              </h3>
            </div>
            <p className="text-xs text-on-surface-variant max-w-md">
              Guided by relocation veterans committed to safety, punctuality, and client satisfaction across every route.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-full aspect-[4/5] rounded overflow-hidden bg-surface-container border border-outline-variant/60 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" 
                  alt="Relocation Director - Pooja Transport Service" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h4 className="font-display text-lg font-bold text-on-background">Rajesh Singh</h4>
              <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">Founder & Managing Director</p>
            </div>

            <div className="group">
              <div className="w-full aspect-[4/5] rounded overflow-hidden bg-surface-container border border-outline-variant/60 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Head of Logistics - Pooja Transport Service" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h4 className="font-display text-lg font-bold text-on-background">Sunita Sharma</h4>
              <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">Head of Client Experience</p>
            </div>

            <div className="group">
              <div className="w-full aspect-[4/5] rounded overflow-hidden bg-surface-container border border-outline-variant/60 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" 
                  alt="VP Fleet Operations - Pooja Transport Service" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h4 className="font-display text-lg font-bold text-on-background">Amit Vikram</h4>
              <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">VP, Fleet & Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

