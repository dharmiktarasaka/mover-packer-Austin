import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function ApproachSection() {
  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT 5 COLUMNS: Copy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                01 / OUR APPROACH
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95] mb-6">
              LESS STRESS.<br />
              <span className="text-electric-orange">MORE MOVING.</span>
            </h2>

            <p className="font-body text-charcoal/80 text-lg leading-relaxed mb-8">
              Moving doesn't need to become a second job. Our team handles the logistics, protection and coordination so you can focus on what's next.
            </p>

            {/* Approach Key Pillars */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-3 bg-white border border-editorial-gray">
                <span className="font-mono text-xs font-bold text-electric-orange pt-0.5">01</span>
                <div>
                  <h4 className="font-display font-bold text-sm text-charcoal uppercase">Single Point of Contact</h4>
                  <p className="font-body text-xs text-charcoal/70 mt-0.5">A dedicated move planner manages elevator bookings, street permits, and real-time updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-editorial-gray">
                <span className="font-mono text-xs font-bold text-electric-orange pt-0.5">02</span>
                <div>
                  <h4 className="font-display font-bold text-sm text-charcoal uppercase">Precision Packaging Protocols</h4>
                  <p className="font-body text-xs text-charcoal/70 mt-0.5">Color-coded boxing, anti-static TV wraps, and timber crates for fine artwork and stone tables.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-editorial-gray">
                <span className="font-mono text-xs font-bold text-electric-orange pt-0.5">03</span>
                <div>
                  <h4 className="font-display font-bold text-sm text-charcoal uppercase">Guaranteed Binding Rates</h4>
                  <p className="font-body text-xs text-charcoal/70 mt-0.5">No moving day price shocks. Transparent flat-rate agreements signed before we lift a box.</p>
                </div>
              </div>
            </div>

            <MagneticButton
              to="/about"
              variant="outline"
              size="md"
              className="font-bold"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </div>

          {/* RIGHT 7 COLUMNS: Overlapping Editorial Image Collage */}
          <div className="lg:col-span-7 relative">
            <div className="relative min-h-[460px] sm:min-h-[540px]">
              
              {/* IMAGE 1: Modern Moving Truck (Backdrop top left) */}
              <div className="w-[65%] sm:w-[60%] border-2 border-charcoal bg-charcoal shadow-sharp-lg overflow-hidden relative z-10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/moving-truck.jpg"
                    alt="SHIFTLINE logistics moving truck with liftgate"
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>
                <div className="bg-charcoal text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1 flex items-center justify-between">
                  <span>AIR-RIDE FLEET UNIT #04</span>
                  <span className="text-electric-orange">48-FOOT LOGISTICS VAN</span>
                </div>
              </div>

              {/* IMAGE 2: Packing Detail (Top right overlap) */}
              <div className="absolute top-8 right-0 w-[50%] sm:w-[48%] border-2 border-charcoal bg-white shadow-sharp-lg overflow-hidden z-20">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/images/packing-detail.jpg"
                    alt="Movers packing fragile glassware into corrugated cartons"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2.5 bg-ivory border-t-2 border-charcoal font-mono text-[10px] text-charcoal font-semibold uppercase">
                  // CRATE & BOX PROTOCOL
                </div>
              </div>

              {/* IMAGE 3: Movers in Action (Bottom left overlap) */}
              <div className="absolute bottom-0 left-6 w-[45%] sm:w-[42%] border-2 border-charcoal bg-white shadow-sharp-lg overflow-hidden z-30">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/hero-movers.jpg"
                    alt="SHIFTLINE logistics movers team carrying furniture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-charcoal text-white p-2 border-t-2 border-charcoal font-mono text-[10px] uppercase flex items-center justify-between">
                  <span>MARCUS & TEAM / DISPATCH</span>
                  <span className="w-2 h-2 rounded-full bg-electric-orange" />
                </div>
              </div>

              {/* IMAGE 4: Moving Boxes & Staging (Bottom right anchor) */}
              <div className="absolute -bottom-4 right-8 w-[45%] sm:w-[42%] border-2 border-charcoal bg-white shadow-sharp z-20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/before-boxes.jpg"
                    alt="Moving boxes and truck loading setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-electric-orange text-white p-2 font-mono text-[10px] font-bold uppercase tracking-wider text-center">
                  ARRIVE. UNPACK. RELAX.
                </div>
              </div>

              {/* Geometric Orange Accent Block behind bottom */}
              <div className="absolute bottom-12 right-2 w-28 h-28 bg-soft-orange/30 border border-charcoal -z-0 pointer-events-none" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
