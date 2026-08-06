import React from 'react';

export const Portfolio: React.FC = () => {
  const items = [
    {
      label: 'Scientific 5-Layer Packing',
      category: 'Protection',
      image: '/image/packing1.jpg'
    },
    {
      label: 'Containerized Cargo Loading',
      category: 'Transit',
      image: '/image/gallery1.jpg'
    },
    {
      label: 'White-Glove Fragile Handling',
      category: 'Care',
      image: '/image/packing2.jpg'
    },
    {
      label: 'Corporate Workspace Migration',
      category: 'Execution',
      image: '/image/gallery2.jpg'
    }
  ];

  return (
    <section className="py-24 bg-[#0b1c30] text-white">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
              Operational Gallery
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              Crafting Perfect Movements.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-300 max-w-md leading-relaxed">
            A glimpse into our high-precision packing, hydraulic loading, and white-glove transport operations across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 aspect-[4/5] cursor-pointer shadow-lg">
              <img 
                src={item.image} 
                alt={item.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30] via-transparent to-transparent opacity-90"></div>
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
