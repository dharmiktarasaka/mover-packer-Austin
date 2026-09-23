import React from 'react';
import { MapPin, Navigation, Compass, ArrowUpRight } from 'lucide-react';
import { austinNeighborhoods } from '../../data/austinContent';
import { Link } from 'react-router-dom';

export default function AustinNeighborhoodsSection() {
  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                TRAVIS, WILLIAMSON & HAYS COUNTY DISPATCH
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              AUSTIN NEIGHBORHOODS<br />
              <span className="text-electric-orange">& AREAS WE SERVE.</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base max-w-md leading-relaxed">
            Shiftline Moving and Storage Austin handles residential and commercial moves throughout the entire metropolitan area.
          </p>
        </div>

        {/* 14 Neighborhoods Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {austinNeighborhoods.map((area, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-charcoal shadow-sharp p-5 flex flex-col justify-between group hover:bg-electric-orange hover:text-white transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-[10px] text-charcoal/50 group-hover:text-white/80">
                  <span>DISPATCH // {idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                  <MapPin className="w-3.5 h-3.5 text-electric-orange group-hover:text-white" />
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-charcoal group-hover:text-white transition-colors mb-1">
                  {area.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-editorial-gray group-hover:border-white/30 mt-3 font-mono text-[11px] text-charcoal/70 group-hover:text-white/90">
                {area.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Footer */}
        <div className="mt-8 p-6 bg-charcoal text-white border-2 border-charcoal font-body text-sm text-editorial-gray leading-relaxed flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Whether it’s a downtown high-rise, a gated Hill Country property, or a growing subdivision, our crews plan the access and the heat exposure before the truck ever leaves the lot.
          </p>
          <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider flex-shrink-0">
            DAILY CENTRAL TEXAS ROUTES
          </span>
        </div>

      </div>
    </section>
  );
}
