import React from 'react';

export default function Marquee({
  items = ['MOVING', 'PACKING', 'STORAGE', 'RELOCATION', 'LOGISTICS'],
  className = '',
  speed = 'normal', // fast, normal, slow
  direction = 'left',
  theme = 'ivory' // ivory, charcoal, orange
}) {
  const speedClass = speed === 'fast' ? 'duration-15' : speed === 'slow' ? 'duration-45' : 'duration-30';
  const animClass = direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee';

  const themeStyles = {
    ivory: 'bg-ivory border-y-2 border-charcoal text-charcoal',
    charcoal: 'bg-charcoal border-y-2 border-charcoal text-white',
    orange: 'bg-electric-orange border-y-2 border-charcoal text-charcoal'
  };

  // Duplicate items 4 times to ensure seamless infinite looping on ultra-wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden select-none whitespace-nowrap py-4 sm:py-5 ${themeStyles[theme]} ${className}`}>
      <div className={`inline-flex items-center gap-6 sm:gap-10 ${animClass} w-max`}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 sm:gap-10">
            <span className="font-display font-bold text-xl sm:text-3xl md:text-4xl tracking-tighter uppercase">
              {item}
            </span>
            <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-electric-orange inline-block transform rotate-45 border border-charcoal/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
