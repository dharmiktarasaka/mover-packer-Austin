import React from 'react';
import { PackageCheck, Package, Check, X, AlertTriangle } from 'lucide-react';
import { packingComparison } from '../../data/austinContent';
import MagneticButton from '../ui/MagneticButton';

export default function PackingComparisonSection() {
  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                PRAGMATIC PACKING DECISION MATRIX
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              FULL-SERVICE PACKING VS. SELF-PACK:<br />
              <span className="text-electric-orange">WHEN EACH PAYS OFF IN AUSTIN.</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base max-w-md leading-relaxed">
            This trade-off gets glossed over because full-service packing is more profitable for movers to sell. The honest version depends on your situation, not theirs.
          </p>
        </div>

        {/* Side by Side Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Full-Service Card */}
          <div className="bg-white border-2 border-charcoal shadow-sharp-lg p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-electric-orange text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <PackageCheck className="w-4 h-4" />
                  FULL-SERVICE PACKING
                </span>
                <span className="font-mono text-xs text-charcoal/60 uppercase">HIGH PROTECTION</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-charcoal mb-4">
                Makes Sense In Austin When:
              </h3>

              <div className="space-y-4 mb-8">
                {packingComparison.fullService.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-electric-orange/20 text-electric-orange flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="font-body text-sm text-charcoal/85 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-ivory border border-editorial-gray font-mono text-xs text-charcoal">
              <span className="text-electric-orange font-bold uppercase block mb-1">INCLUDED ASSET PROTOCOL:</span>
              <span>Double-walled virgin cartons, anti-static foam wraps, and custom timber art crates.</span>
            </div>
          </div>

          {/* Self-Pack Card */}
          <div className="bg-white border-2 border-charcoal shadow-sharp-lg p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <Package className="w-4 h-4 text-electric-orange" />
                  SELF-PACKING
                </span>
                <span className="font-mono text-xs text-charcoal/60 uppercase">BUDGET FLEXIBLE</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-charcoal mb-4">
                Makes Sense In Austin When:
              </h3>

              <div className="space-y-4 mb-8">
                {packingComparison.selfPack.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-charcoal/10 text-charcoal flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="font-body text-sm text-charcoal/85 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-ivory border border-editorial-gray font-mono text-xs text-charcoal">
              <span className="text-charcoal font-bold uppercase block mb-1">MATERIAL WARNING:</span>
              <span>Always source boxes rated for 65+ lb edge-crush test to avoid humidity collapse in Texas trucks.</span>
            </div>
          </div>

        </div>

        {/* Where it Fails in Both Directions */}
        <div className="mt-8 p-6 bg-charcoal text-white border-2 border-charcoal shadow-sharp">
          <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider block mb-2">
            WHERE IT FAILS IN BOTH DIRECTIONS:
          </span>
          <p className="font-body text-sm sm:text-base text-editorial-gray leading-relaxed">
            Self-packing electronics or wood furniture for a summer long-distance move is a common, costly mistake — inadequate padding plus hours in a 130°F truck is a frequent cause of claims. On the other end, paying for full packing on a simple studio move down the street is usually convenience spending, not real risk reduction.
          </p>
        </div>

      </div>
    </section>
  );
}
