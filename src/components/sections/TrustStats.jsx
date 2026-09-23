import React from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function TrustStats() {
  const stats = [
    {
      target: 15,
      suffix: '+',
      label: 'YEARS MOVING',
      subtext: 'Continuous logistics operations since 2008'
    },
    {
      target: 12,
      suffix: 'K+',
      label: 'MOVES COMPLETED',
      subtext: 'Zero unresolved loss claims'
    },
    {
      target: 48,
      suffix: '',
      label: 'SERVICE AREAS',
      subtext: 'Direct interstate terminal corridors'
    },
    {
      target: 4.9,
      suffix: '★',
      decimals: 1,
      label: 'CUSTOMER RATING',
      subtext: 'Over 3,400 verified client reviews'
    }
  ];

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center justify-between border-b border-charcoal/15 pb-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
            01 / PROVEN PERFORMANCE METRICS
          </span>
          <span className="font-mono text-xs uppercase text-electric-orange font-bold">
            AUDITED CARRIER ACCREDITATION
          </span>
        </div>

        {/* Large Horizontal Composition */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-charcoal">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`pt-6 lg:pt-0 ${
                idx === 0 ? 'lg:pr-8' : idx === 3 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              {/* Huge Dominant Number */}
              <div className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tighter text-charcoal leading-none mb-2">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>

              {/* Bold Label */}
              <h3 className="font-display font-bold text-sm sm:text-base tracking-tight text-charcoal uppercase">
                {stat.label}
              </h3>

              {/* Editorial Subtext */}
              <p className="font-mono text-xs text-charcoal/60 mt-1 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
