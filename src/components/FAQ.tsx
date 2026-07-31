import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How much do packers and movers charge?',
      answer: 'Charges depend on the volume of goods, packing quality required, type of vehicle, and distance. We offer free on-site or virtual estimates to give you the most accurate price.'
    },
    {
      question: 'Do you provide transit insurance?',
      answer: 'Yes, we strongly recommend and provide comprehensive transit insurance to protect your goods against any unforeseen circumstances during travel.'
    },
    {
      question: 'How many days before should I book my move?',
      answer: 'We recommend booking at least 3-7 days in advance, especially for intercity moves or during peak season (month-ends and weekends).'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <details key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius)' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', color: 'var(--primary)' }}>{faq.question}</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
