import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Radio, Compass } from 'lucide-react';
import { locations } from '../../data/locationsData';
import MagneticButton from '../ui/MagneticButton';

export default function CoverageGrid() {
  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                09 / NATIONAL LOGISTICS HUBS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              WE GO FURTHER.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <MagneticButton
              to="/locations"
              variant="outline"
              size="md"
              className="font-bold"
            >
              <span>View Full Network Map</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </div>
        </div>

        {/* Editorial City Grid (8 Cities) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-charcoal divide-y-2 sm:divide-y-0 divide-charcoal sm:gap-0 bg-white">
          {locations.map((loc, idx) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group p-6 sm:p-8 border-b-2 sm:border-r-2 border-charcoal relative overflow-hidden transition-all duration-300 hover:bg-electric-orange hover:text-white"
            >
              {/* Route graphic indicator watermark */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                <Compass className="w-full h-full text-charcoal" />
              </div>

              {/* Top Row: Index & Arrow */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-charcoal/50 group-hover:text-white/80 transition-colors uppercase">
                  HUB // 0{idx + 1}
                </span>
                <div className="w-9 h-9 border border-charcoal group-hover:border-white flex items-center justify-center bg-white group-hover:bg-charcoal text-charcoal group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* City & State */}
              <div className="mb-6">
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-charcoal group-hover:text-white transition-colors">
                  {loc.city}
                </h3>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-electric-orange group-hover:text-charcoal bg-ivory group-hover:bg-white px-2 py-0.5 inline-block mt-1">
                  {loc.state} — {loc.region}
                </span>
              </div>

              {/* Service Availability & Telemetry */}
              <div className="pt-4 border-t border-editorial-gray group-hover:border-white/30 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-charcoal/80 group-hover:text-white transition-colors">
                  <span className="text-[11px] text-charcoal/50 group-hover:text-white/70">AVAILABILITY:</span>
                  <span className="font-bold">{loc.serviceAvailability}</span>
                </div>
                <div className="flex items-center justify-between text-charcoal/80 group-hover:text-white transition-colors">
                  <span className="text-[11px] text-charcoal/50 group-hover:text-white/70">ACTIVE CREWS:</span>
                  <span className="font-bold">{loc.activeCrews} Specialists</span>
                </div>
              </div>

              {/* Animated Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-charcoal group-hover:bg-white transition-colors" />
            </Link>
          ))}
        </div>

        {/* Bottom Route Summary Bar */}
        <div className="mt-8 p-4 bg-charcoal text-white font-mono text-xs flex flex-wrap items-center justify-between gap-4 border-2 border-charcoal">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-electric-orange animate-pulse" />
            <span>DAILY FREIGHT CORRIDORS LINKING ALL 8 REGIONS DIRECTLY</span>
          </div>
          <span className="text-electric-orange font-bold uppercase">AVERAGE REGIONAL DISPATCH: &lt; 24 HOURS</span>
        </div>

      </div>
    </section>
  );
}
