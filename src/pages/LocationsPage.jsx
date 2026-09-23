import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Radio, Compass, Phone } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { locations } from '../data/locationsData';
import RouteVisualization from '../components/ui/RouteVisualization';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function LocationsPage() {
  return (
    <>
      <SEO
        title="Coverage & Regional Logistics Hubs — 48 States"
        description="SHIFTLINE operates strategic freight hubs across New York, Chicago, Austin, Denver, Los Angeles, Miami, Dallas, and Seattle."
      />

      {/* Header */}
      <section className="bg-ivory border-b-2 border-charcoal pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-electric-orange" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
              NATIONAL FREIGHT CORRIDOR
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9] mb-6">
            WE GO<br />
            <span className="text-electric-orange">FURTHER.</span>
          </h1>

          <p className="font-body text-charcoal/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Eight major operational terminals, continuous interstate routes, and zero outsourced middlemen. Explore our regional hubs.
          </p>
        </div>
      </section>

      {/* National Route Visualization Section */}
      <RouteVisualization />

      {/* Hub Directory Grid */}
      <section className="bg-ivory py-16 lg:py-24 border-b-2 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-12 border-b-2 border-charcoal pb-6">
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-charcoal">
              TERMINAL HUBS & STATIONS
            </h2>
            <span className="font-mono text-xs uppercase text-electric-orange font-bold">
              8 PRIMARY DISPATCH DEPOTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <div
                key={loc.slug}
                className="bg-white border-2 border-charcoal shadow-sharp p-6 sm:p-8 flex flex-col justify-between group hover:border-electric-orange transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-electric-orange">
                      HUB // 0{idx + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-charcoal text-white font-mono text-[10px] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
                      {loc.serviceAvailability}
                    </span>
                  </div>

                  <h3 className="text-3xl font-display font-black uppercase text-charcoal group-hover:text-electric-orange transition-colors mb-1">
                    {loc.city}, {loc.state}
                  </h3>

                  <p className="font-mono text-xs text-charcoal/60 uppercase mb-4">
                    {loc.region} • {loc.hubAddress}
                  </p>

                  <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                    {loc.summary}
                  </p>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-3 p-4 bg-ivory/60 border border-editorial-gray mb-6 font-mono text-xs">
                    <div>
                      <span className="text-charcoal/50 block text-[10px]">FLEET ALLOCATION:</span>
                      <strong className="text-charcoal">{loc.fleetUnits} Air-Ride Vans</strong>
                    </div>
                    <div>
                      <span className="text-charcoal/50 block text-[10px]">CREW PERSONNEL:</span>
                      <strong className="text-charcoal">{loc.activeCrews} Certified Specialists</strong>
                    </div>
                  </div>

                  {/* Popular corridors */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] uppercase font-bold text-charcoal/60 block mb-2">
                      DIRECT SCHEDULED EXPRESS CORRIDORS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {loc.popularRoutes.map((r, rIdx) => (
                        <span key={rIdx} className="px-2.5 py-1 bg-ivory border border-editorial-gray font-mono text-[11px] text-charcoal">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hub Actions */}
                <div className="pt-6 border-t border-editorial-gray flex items-center justify-between">
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono text-xs text-charcoal hover:text-electric-orange flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-electric-orange" />
                    <span>{loc.phone}</span>
                  </a>

                  <Link
                    to={`/locations/${loc.slug}`}
                    className="font-display font-bold text-xs uppercase tracking-wider text-charcoal group-hover:text-electric-orange flex items-center gap-1"
                  >
                    <span>View Hub Specifications</span>
                    <ArrowUpRight className="w-4 h-4 text-electric-orange" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <BigOrangeCTA />
    </>
  );
}
