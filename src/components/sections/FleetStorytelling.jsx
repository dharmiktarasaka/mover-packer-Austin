import React from 'react';
import { ArrowRight, Gauge, Shield, Navigation } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function FleetStorytelling() {
  return (
    <section className="relative bg-charcoal text-white border-b-2 border-charcoal overflow-hidden min-h-[580px] lg:min-h-[700px] flex items-center">
      
      {/* Background High-End Moving Truck Photo with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/moving-truck.jpg"
          alt="Modern aerodynamic SHIFTLINE logistics moving truck with hydraulic liftgate and cargo boxes"
          className="w-full h-full object-cover filter brightness-60 contrast-110"
        />
        {/* Editorial Film Grain & Dark Overlay */}
        <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        
        <div className="max-w-2xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 bg-charcoal/80 px-3 py-1.5 border border-white/20 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 bg-electric-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              AIR-RIDE AERODYNAMIC LOGISTICS FLEET
            </span>
          </div>

          {/* Overlay Typography */}
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase text-white leading-[0.88] mb-4">
            GOING<br />
            <span className="text-electric-orange">SOMEWHERE?</span>
          </h2>

          <p className="font-body text-xl sm:text-2xl text-editorial-gray/90 font-light mb-8 max-w-lg">
            We'll help you get there.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <MagneticButton
              to="/contact"
              variant="primary"
              size="lg"
              className="font-bold"
            >
              <span>Start Planning</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </MagneticButton>

            <MagneticButton
              to="/locations"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal font-bold"
            >
              <span>Explore Direct Routes</span>
            </MagneticButton>
          </div>

          {/* Fleet Specifications Micro Strip */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4 font-mono text-xs text-white/80">
            <div>
              <span className="text-electric-orange block font-bold">AIR-RIDE DAMPING</span>
              <span className="text-[11px] text-white/60">Zero road shock transit</span>
            </div>
            <div>
              <span className="text-electric-orange block font-bold">CLIMATE MONITORED</span>
              <span className="text-[11px] text-white/60">68°F internal cargo stability</span>
            </div>
            <div>
              <span className="text-electric-orange block font-bold">SATELLITE GPS</span>
              <span className="text-[11px] text-white/60">Live telemetry portal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
