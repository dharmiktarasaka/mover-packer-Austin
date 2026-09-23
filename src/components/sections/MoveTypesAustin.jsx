import React from 'react';
import { Home, Compass, Building, ArrowRight } from 'lucide-react';
import { austinMoveTypes } from '../../data/austinContent';
import MagneticButton from '../ui/MagneticButton';

export default function MoveTypesAustin() {
  const icons = [Home, Compass, Building];

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                LOGISTICS CLASSIFICATIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              LOCAL, LONG-DISTANCE, OR COMMERCIAL:<br />
              <span className="text-electric-orange">WHICH AUSTIN MOVE DO YOU NEED?</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base max-w-md leading-relaxed">
            “Movers in Austin” searches bundle three very different jobs together. They are staffed, priced, and scheduled under distinct protocols.
          </p>
        </div>

        {/* 3 Move Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {austinMoveTypes.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="bg-white border-2 border-charcoal shadow-sharp-lg p-8 flex flex-col justify-between group hover:border-electric-orange transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-electric-orange uppercase">
                      TYPE 0{idx + 1}
                    </span>
                    <div className="p-2.5 bg-ivory border border-editorial-gray text-charcoal group-hover:text-electric-orange transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-charcoal mb-4">
                    {item.type}
                  </h3>

                  <div className="space-y-4 mb-6 text-sm font-body">
                    <div>
                      <span className="font-mono text-[11px] font-bold text-charcoal/50 uppercase block">TYPICAL USE CASE:</span>
                      <p className="text-charcoal/85 mt-0.5">{item.useCase}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] font-bold text-charcoal/50 uppercase block">WHAT CHANGES:</span>
                      <p className="text-charcoal/85 mt-0.5">{item.whatChanges}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-editorial-gray">
                  <span className="font-mono text-[10px] text-electric-orange uppercase font-bold block mb-1">
                    WHERE SHIFTLINE FITS:
                  </span>
                  <p className="font-mono text-xs text-charcoal/80">
                    {item.shiftlineFit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rule of Thumb Callout Box */}
        <div className="mt-12 p-6 sm:p-8 bg-charcoal text-white border-2 border-charcoal shadow-sharp flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider block mb-1">
              RULE OF THUMB FROM 20+ YEARS IN TEXAS LOGISTICS:
            </span>
            <p className="font-display font-bold text-lg sm:text-xl uppercase leading-snug">
              “If your move crosses state lines, insist on a binding estimate. If it’s local, an hourly rate is fine — but only after someone has actually walked through (or video-walked) your home and confirmed crew size.”
            </p>
          </div>

          <MagneticButton
            to="/contact"
            variant="primary"
            size="md"
            className="flex-shrink-0 font-bold"
          >
            <span>Book Video Walkthrough</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
