import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How are relocation quotes calculated for intercity shifting?',
      answer: 'Quotes are calculated based on volume cubic footage, distance, layer of protective materials required (e.g., custom crating for artwork or electronics), vehicle type (enclosed container vs open), and labor logistics.'
    },
    {
      question: 'Is transit insurance included with Pooja Transport Service?',
      answer: 'Yes, we provide 100% comprehensive transit protection covering declared goods against any transit damage or unexpected road incidents.'
    },
    {
      question: 'How far in advance should I schedule my relocation?',
      answer: 'We recommend booking 3 to 5 days prior to your target move date. For major corporate headquarters migrations or weekend moves, 7 days notice is preferred.'
    },
    {
      question: 'How do you handle fragile glassware and electronic equipment?',
      answer: 'We utilize a specialized 5-layer tech packing system combining anti-static foam, heavy-duty bubble wrap, corrugated sheets, and reinforced wooden crates.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-surface-container-lowest border-b border-outline-variant/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 md:px-margin-desktop">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest block mb-2">
            Clarifications & Assistance
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-on-background font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-surface border border-outline-variant/60 rounded-xl p-6 transition-all duration-200 [&[open]]:bg-surface-container-low"
            >
              <summary className="font-display font-bold text-base md:text-lg text-on-background cursor-pointer flex items-center justify-between list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 opacity-70" />
                  {faq.question}
                </span>
                <span className="text-on-surface-variant group-open:rotate-180 transition-transform duration-200">
                  <i className="fas fa-chevron-down text-sm"></i>
                </span>
              </summary>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mt-4 pt-4 border-t border-outline-variant/30 pl-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

