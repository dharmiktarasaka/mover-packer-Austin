import React from 'react';
import { Flame, ShieldAlert, Building2, Mountain, CheckCircle2 } from 'lucide-react';
import { austinDifferences } from '../../data/austinContent';

export default function AustinDifferences() {
  const iconMap = {
    heat: Flame,
    hoa: ShieldAlert,
    coi: Building2,
    hills: Mountain
  };

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                LOCAL AUSTIN LOGISTICS REALITY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              WHY AUSTIN MOVES<br />
              <span className="text-electric-orange">AREN'T LIKE MOVES ANYWHERE ELSE.</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base sm:text-lg max-w-md leading-relaxed">
            Generic moving copy reads the same in Austin as in Cleveland. Austin has real, physical factors that change how a move should be planned.
          </p>
        </div>

        {/* 4 Physical Differences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {austinDifferences.map((item) => {
            const Icon = iconMap[item.id] || Flame;

            return (
              <div
                key={item.id}
                className="bg-white border-2 border-charcoal shadow-sharp-lg p-8 sm:p-10 flex flex-col justify-between group hover:border-electric-orange transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-electric-orange">
                      {item.number}
                    </span>
                    <div className="p-3 bg-ivory border border-editorial-gray text-charcoal group-hover:text-electric-orange transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-charcoal mb-1">
                    {item.title}
                  </h3>

                  <span className="font-mono text-xs font-bold uppercase text-electric-orange tracking-wider block mb-4">
                    // {item.subtitle}
                  </span>

                  <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-editorial-gray flex items-start gap-2.5 bg-ivory/60 p-3.5 font-mono text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-electric-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[11px] text-charcoal/60 uppercase">THE SHIFTLINE PROTOCOL:</strong>
                    <span>{item.solution}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 p-6 bg-charcoal text-white border-2 border-charcoal shadow-sharp">
          <blockquote className="font-display font-bold text-lg sm:text-xl uppercase leading-snug">
            “The estimate was accurate for the boxes, but nobody accounted for the building, the gate, or the heat. That’s the difference between a company that’s moved furniture in Austin and one that’s actually moved people into Austin’s neighborhoods.”
          </blockquote>
          <span className="font-mono text-xs text-electric-orange font-bold uppercase block mt-3">
            — SHIFTLINE AUSTIN DISPATCH LOG // RIVERSIDE CORRIDOR
          </span>
        </div>

      </div>
    </section>
  );
}
