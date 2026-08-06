import React from 'react';

export const Portfolio: React.FC = () => {
  const items = [
    {
      label: 'Scientific 5-Layer Packing',
      category: 'Protection',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop'
    },
    {
      label: 'Containerized Cargo Loading',
      category: 'Transit',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
    },
    {
      label: 'White-Glove Fragile Handling',
      category: 'Care',
      image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=800&auto=format&fit=crop'
    },
    {
      label: 'Corporate Workspace Migration',
      category: 'Execution',
      image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-primary-container text-on-primary">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-outline-variant/20 pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-on-primary-container block mb-2">
              Operational Gallery
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              Crafting Perfect Movements.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-on-primary-container max-w-md leading-relaxed">
            A glimpse into our high-precision packing, hydraulic loading, and white-glove transport operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-surface/10 border border-white/10 aspect-[4/5] cursor-pointer">
              <img 
                src={item.image} 
                alt={item.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 block mb-1">
                  {item.category}
                </span>
                <h4 className="font-display text-lg font-bold text-white leading-tight">
                  {item.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

