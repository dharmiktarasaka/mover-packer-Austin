import React from 'react';
import { DollarSign, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { austinCostTable } from '../../data/austinContent';
import MagneticButton from '../ui/MagneticButton';

export default function AustinPricingSection() {
  return (
    <section className="bg-white border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                TRAVIS COUNTY & INTERSTATE COST BENCHMARKS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              HOW MUCH DO MOVERS<br />
              <span className="text-electric-orange">COST IN AUSTIN?</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base max-w-md leading-relaxed">
            Pricing depends on crew size, distance, access complexity (gates, docks, hill country driveways), and season. Austin’s peak moving months (May–August) run higher than fall and winter.
          </p>
        </div>

        {/* Realistic Ranges Table */}
        <div className="border-2 border-charcoal shadow-sharp-lg overflow-x-auto bg-ivory mb-8">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="bg-charcoal text-white border-b-2 border-charcoal text-xs uppercase tracking-wider">
                <th className="p-4 sm:p-6 font-display font-black text-sm">Move Size</th>
                <th className="p-4 sm:p-6 font-display font-black text-sm">Local Move (Austin / Travis County)</th>
                <th className="p-4 sm:p-6 font-display font-black text-sm">Long-Distance (~1,000 Miles)</th>
                <th className="p-4 sm:p-6 font-display font-black text-sm">Standard Crew Allocated</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-charcoal font-body text-sm bg-white">
              {austinCostTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-ivory/50 transition-colors">
                  <td className="p-4 sm:p-6 border-r-2 border-charcoal font-display font-black text-lg text-charcoal">
                    {row.size}
                  </td>
                  <td className="p-4 sm:p-6 border-r-2 border-charcoal font-mono text-base font-bold text-charcoal">
                    {row.local}
                  </td>
                  <td className="p-4 sm:p-6 border-r-2 border-charcoal font-mono text-base font-bold text-electric-orange">
                    {row.longDistance}
                  </td>
                  <td className="p-4 sm:p-6 font-mono text-xs text-charcoal/80">
                    {row.crew}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing Transparency Advice Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ivory p-6 sm:p-10 border-2 border-charcoal shadow-sharp">
          <div>
            <span className="font-mono text-xs text-electric-orange font-bold uppercase block mb-1">
              COMPARING PACKERS & MOVERS IN AUSTIN?
            </span>
            <h3 className="font-display font-black text-2xl uppercase text-charcoal mb-3">
              Insist on Separate Line Items
            </h3>
            <p className="font-body text-sm text-charcoal/80 leading-relaxed">
              Ask each company to break out labor, materials, and access/travel time separately. A transparent breakdown is a far stronger signal of a trustworthy mover than the lowest total number. Shiftline Movers Packers Austin TX provides written, itemized quotes after reviewing your inventory, so the number you agree to is the number you pay.
            </p>
          </div>

          <div className="bg-white p-6 border-2 border-charcoal shadow-sharp">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-electric-orange flex-shrink-0" />
              <span className="font-display font-bold text-base uppercase text-charcoal">
                BINDING NOT-TO-EXCEED PLEDGE
              </span>
            </div>
            <p className="font-body text-xs text-charcoal/70 leading-relaxed mb-4">
              These are general ranges, not a binding quote. Actual pricing depends on crew size, stairs, HOA or dock access requirements, and packing services requested.
            </p>
            <MagneticButton
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-between font-bold"
            >
              <span>Get Itemized Binding Quote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
}
