import React from 'react';
import { ArrowRight, Phone, Compass, ShieldCheck } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function BigOrangeCTA() {
  return (
    <section className="bg-electric-orange border-b-2 border-charcoal py-20 lg:py-28 relative overflow-hidden text-charcoal">
      
      {/* Abstract moving-route SVG graphics in background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M-100 200 C 200 400, 400 100, 800 350 S 1300 100, 1400 500" stroke="#171717" strokeWidth="6" strokeDasharray="16 16" />
          <path d="M-50 450 C 300 200, 600 500, 1000 200 S 1200 400, 1350 150" stroke="#171717" strokeWidth="4" />
          <circle cx="400" cy="100" r="16" fill="#171717" />
          <circle cx="800" cy="350" r="24" fill="#171717" />
          <circle cx="1000" cy="200" r="14" fill="#171717" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Huge Typography Block */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-4 bg-charcoal text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>DISPATCH CORRIDOR READY</span>
            </div>

            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.88] mb-6">
              READY.<br />
              SET.<br />
              MOVE.
            </h2>

            <p className="font-body text-xl sm:text-2xl text-charcoal/90 font-medium max-w-xl leading-relaxed">
              Tell us where you're going and we'll take care of the rest.
            </p>
          </div>

          {/* Action Card / Buttons */}
          <div className="lg:col-span-4 bg-white border-2 border-charcoal shadow-sharp-lg p-8 sm:p-10">
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-charcoal mb-3">
              LOCK IN YOUR MOVE
            </h3>
            
            <p className="font-body text-sm text-charcoal/80 mb-6">
              Receive a binding flat-rate estimate within 4 hours. No hidden fees or moving day surprises.
            </p>

            <div className="space-y-4">
              <MagneticButton
                to="/contact"
                variant="charcoal"
                size="lg"
                className="w-full justify-between font-bold"
              >
                <span>Get My Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 text-electric-orange" />
              </MagneticButton>

              <div className="pt-2 text-center">
                <span className="font-mono text-xs text-charcoal/60 uppercase block mb-1">
                  Prefer direct phone consultation?
                </span>
                <a
                  href="tel:18005550148"
                  className="inline-flex items-center gap-2 font-display font-bold text-base text-charcoal hover:text-electric-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-electric-orange" />
                  <span>Call us today: +1 (800) 555-0148</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-editorial-gray flex items-center gap-2 font-mono text-[11px] text-charcoal/70">
              <ShieldCheck className="w-4 h-4 text-electric-orange" />
              <span>Free cancellation up to 5 days before move</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
