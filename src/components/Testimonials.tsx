import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The precision with which they handled our household art and antique furniture was remarkable. Zero scratches and on-time delivery.",
      name: "Amit Sharma",
      role: "Homeowner, Noida Sector 62",
      rating: 5
    },
    {
      quote: "Absolute professionalism for our corporate headquarters move. They completed the IT rack migration overnight without any downtime.",
      name: "Priya Verma",
      role: "Operations Director, Ghaziabad Tech Park",
      rating: 5
    },
    {
      quote: "Clean pricing with zero surprise charges. The crew was polite, efficient, and careful with every single piece of glassware.",
      name: "Rahul Singh",
      role: "Executive, Greater Noida West",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-outline-variant/40">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest block mb-2">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-on-background font-bold tracking-tight">
            Trusted Across 50,000+ Moves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-on-background leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-display font-bold text-on-background shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-on-background">{item.name}</h4>
                  <p className="text-[11px] text-on-surface-variant">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

