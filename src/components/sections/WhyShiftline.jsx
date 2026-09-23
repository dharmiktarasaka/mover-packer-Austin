import React from 'react';
import { ShieldCheck, DollarSign, Users, Radio, Headphones, CalendarCheck } from 'lucide-react';

export default function WhyShiftline() {
  const features = [
    {
      number: '01',
      title: 'CLEAR PRICING',
      desc: 'Itemized, binding quotes with zero moving-day surcharges, elevator fees, or hidden fuel penalties.',
      icon: DollarSign
    },
    {
      number: '02',
      title: 'PROFESSIONAL CREWS',
      desc: 'W2 career relocation specialists trained in museum-grade handling, structural architecture, and high-rise rigging.',
      icon: Users
    },
    {
      number: '03',
      title: 'PROTECTED BELONGINGS',
      desc: 'Triple-thick moving pads, ram-board flooring armor, and optional comprehensive full-value replacement insurance.',
      icon: ShieldCheck
    },
    {
      number: '04',
      title: 'REAL-TIME UPDATES',
      desc: 'Direct GPS cargo portal with continuous ETA telematics, cargo temperature readouts, and automated arrival alerts.',
      icon: Radio
    },
    {
      number: '05',
      title: 'DEDICATED SUPPORT',
      desc: 'A single designated logistics coordinator managing building COIs, parking permits, and dispatch communication.',
      icon: Headphones
    },
    {
      number: '06',
      title: 'FLEXIBLE SCHEDULING',
      desc: 'Free rescheduling up to 5 business days in advance. Weekend, holiday, and overnight corporate deployment.',
      icon: CalendarCheck
    }
  ];

  return (
    <section className="bg-charcoal text-white py-20 lg:py-28 relative overflow-hidden border-b-2 border-charcoal">
      
      {/* Dark Architectural Grid Background */}
      <div className="absolute inset-0 grid-lines-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-charcoal-muted pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
                06 / OPERATIONAL PILLARS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-white leading-[0.95]">
              BUILT AROUND<br />
              <span className="text-electric-orange">THE MOVE.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-editorial-gray/70">
            <span>ENGINEERED FOR PREDICTABLE OUTCOMES</span>
          </div>
        </div>

        {/* Editorial Grid (Divided by crisp architectural lines, not generic rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-charcoal-muted">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-8 sm:p-10 border-r-2 border-b-2 border-charcoal-muted bg-charcoal hover:bg-charcoal-light transition-colors group relative"
              >
                {/* Top Corner Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-electric-orange">
                    {item.number}
                  </span>
                  <div className="p-2 border border-charcoal-muted text-editorial-gray group-hover:text-electric-orange transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-electric-orange transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-editorial-gray/80 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Border Accent on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
