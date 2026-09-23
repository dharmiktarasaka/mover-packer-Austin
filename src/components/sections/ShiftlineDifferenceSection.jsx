import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { shiftlineDifferentiators } from '../../data/austinContent';
import MagneticButton from '../ui/MagneticButton';

export default function ShiftlineDifferenceSection() {
  return (
    <section className="bg-charcoal text-white border-b-2 border-charcoal py-20 lg:py-28 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 grid-lines-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal-muted pb-8 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
                ACCOUNTABILITY BY DESIGN
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-white leading-[0.95]">
              WHAT MAKES<br />
              <span className="text-electric-orange">SHIFTLINE DIFFERENT.</span>
            </h2>
          </div>

          <p className="font-body text-editorial-gray/80 text-base max-w-md leading-relaxed">
            Eliminating Austin moving friction with upfront commitments, binding contracts, and dedicated career personnel.
          </p>
        </div>

        {/* 5 Pillars Layout */}
        <div className="space-y-4">
          {shiftlineDifferentiators.map((diff, idx) => {
            const parts = diff.split(' — ');
            const headline = parts[0];
            const detail = parts[1] || '';

            return (
              <div
                key={idx}
                className="bg-charcoal-light border-2 border-charcoal-muted p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-electric-orange transition-colors shadow-sharp"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="w-10 h-10 bg-charcoal border border-charcoal-muted text-electric-orange font-mono text-base font-bold flex items-center justify-center flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-electric-orange transition-colors">
                      {headline}
                    </h3>
                    {detail && (
                      <p className="font-body text-sm text-editorial-gray/80 mt-1">
                        {detail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0 self-end md:self-center">
                  <CheckCircle2 className="w-6 h-6 text-electric-orange" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t-2 border-charcoal-muted flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xs text-editorial-gray/80">
            <span>● LICENSED • BONDED • INSURED // TEXAS DMV & US DOT COMPLIANT</span>
          </div>
          <MagneticButton
            to="/contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-bold"
          >
            <span>Request In-Home or Video Estimate</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
