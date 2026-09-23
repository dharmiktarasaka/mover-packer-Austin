import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, ShieldCheck, Thermometer, Radio, ArrowRight } from 'lucide-react';

export default function RouteVisualization() {
  const [activeStop, setActiveStop] = useState(2); // default Chicago

  const stops = [
    {
      id: 0,
      city: 'SAN FRANCISCO',
      state: 'CA',
      code: 'SFO-HUB',
      coord: '37.7749° N, 122.4194° W',
      distance: 'ORIGIN',
      x: 80,
      y: 190,
      status: 'Depot Cleared',
      departTime: '06:00 PST'
    },
    {
      id: 1,
      city: 'DENVER',
      state: 'CO',
      code: 'DEN-HUB',
      coord: '39.7392° N, 104.9903° W',
      distance: '1,250 MI',
      x: 350,
      y: 130,
      status: 'High Altitude Transit',
      departTime: '22:15 MST'
    },
    {
      id: 2,
      city: 'CHICAGO',
      state: 'IL',
      code: 'ORD-HUB',
      coord: '41.8781° N, 87.6298° W',
      distance: '1,000 MI',
      x: 640,
      y: 100,
      status: 'Midwest Corridor Clear',
      departTime: '14:30 CST'
    },
    {
      id: 3,
      city: 'NEW YORK',
      state: 'NY',
      code: 'NYC-HUB',
      coord: '40.7128° N, 74.0060° W',
      distance: '790 MI',
      x: 910,
      y: 80,
      status: 'Destination Arriving',
      departTime: '09:00 EST'
    }
  ];

  // SVG route path between nodes
  const pathD = "M 80 190 C 200 240, 260 140, 350 130 C 460 120, 520 80, 640 100 C 740 115, 820 60, 910 80";

  return (
    <section className="bg-ivory border-t-2 border-charcoal py-20 lg:py-28 relative overflow-hidden">
      {/* Editorial grid background */}
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                04 / REAL-TIME LOGISTICS CORRIDOR
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              ONE ADDRESS.<br />
              <span className="text-electric-orange">AN ENTIRE JOURNEY.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-md">
            <p className="font-body text-charcoal/80 text-base leading-relaxed">
              Every interstate relocation operates on a continuous, uninterrupted line.
              Zero cross-dock transfers. Dedicated vehicle assignment. Verified continuous GPS telemetry.
            </p>
          </div>
        </div>

        {/* Abstract Map & SVG Route Canvas */}
        <div className="bg-white border-2 border-charcoal shadow-sharp-lg p-6 sm:p-10 mb-8 relative overflow-hidden">
          
          {/* Telemetry Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-charcoal/10 pb-5 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-charcoal text-white font-semibold tracking-wider">
                <Radio className="w-3.5 h-3.5 text-electric-orange animate-pulse" />
                LIVE MANIFEST
              </span>
              <span className="text-charcoal/60 uppercase">TRANSI-SHIFTLINE-8842</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-charcoal">
                <Thermometer className="w-4 h-4 text-electric-orange" />
                <span>CARGO TEMP: <strong>68.2°F</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-charcoal">
                <ShieldCheck className="w-4 h-4 text-muted-green-dark" />
                <span>SEAL INTEGRITY: <strong>VERIFIED</strong></span>
              </div>
            </div>
          </div>

          {/* SVG Vector Route Canvas (Desktop & Tablet) */}
          <div className="relative hidden md:block w-full overflow-hidden py-12">
            <svg 
              viewBox="0 0 1000 280" 
              className="w-full h-auto overflow-visible select-none"
            >
              {/* Background Guide Dashed Lines */}
              <line x1="40" y1="40" x2="960" y2="40" stroke="#E8E6E0" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="40" y1="140" x2="960" y2="140" stroke="#E8E6E0" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="40" y1="240" x2="960" y2="240" stroke="#E8E6E0" strokeWidth="1" strokeDasharray="6 6" />

              {/* Inactive Base Path */}
              <path
                d={pathD}
                fill="none"
                stroke="#171717"
                strokeWidth="4"
                strokeLinecap="square"
                opacity="0.15"
              />

              {/* Active Animated Electric Orange Route Path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="#FF5A1F"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />

              {/* Animated Traveling Vehicle Indicator */}
              <motion.circle
                r="8"
                fill="#FF5A1F"
                stroke="#171717"
                strokeWidth="3"
                className="route-dot-glow cursor-pointer"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop"
                }}
                style={{
                  offsetPath: `path('${pathD}')`
                }}
              />

              {/* Route Waypoint Nodes */}
              {stops.map((stop, i) => {
                const isActive = activeStop === i;
                return (
                  <g 
                    key={stop.city} 
                    className="cursor-pointer group"
                    onClick={() => setActiveStop(i)}
                  >
                    {/* Outer Pulse */}
                    {isActive && (
                      <circle
                        cx={stop.x}
                        cy={stop.y}
                        r="20"
                        fill="#FF5A1F"
                        opacity="0.2"
                        className="animate-ping"
                      />
                    )}

                    {/* Square Marker */}
                    <rect
                      x={stop.x - 9}
                      y={stop.y - 9}
                      width="18"
                      height="18"
                      fill={isActive ? '#FF5A1F' : '#171717'}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="transition-colors duration-200"
                    />

                    {/* City Label */}
                    <text
                      x={stop.x}
                      y={stop.y + 36}
                      textAnchor="middle"
                      className={`font-display font-bold text-sm tracking-tight ${
                        isActive ? 'fill-electric-orange font-black' : 'fill-charcoal'
                      }`}
                    >
                      {stop.city}
                    </text>

                    {/* Sub Info */}
                    <text
                      x={stop.x}
                      y={stop.y + 54}
                      textAnchor="middle"
                      className="font-mono text-[10px] fill-charcoal/50 uppercase tracking-widest"
                    >
                      {stop.distance}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Mobile Fallback: Vertical Timeline View */}
          <div className="block md:hidden py-4 space-y-6 relative">
            <div className="absolute left-4 top-4 bottom-4 w-1 bg-electric-orange" />
            
            {stops.map((stop, idx) => (
              <div 
                key={stop.city} 
                onClick={() => setActiveStop(idx)}
                className={`pl-10 relative cursor-pointer p-3 border ${
                  activeStop === idx ? 'border-electric-orange bg-electric-orange/5' : 'border-transparent'
                }`}
              >
                <div className={`absolute left-2.5 top-5 w-4 h-4 border-2 border-white -translate-x-1/2 ${
                  activeStop === idx ? 'bg-electric-orange' : 'bg-charcoal'
                }`} />
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-charcoal">{stop.city}, {stop.state}</h4>
                  <span className="font-mono text-xs text-electric-orange font-semibold">{stop.distance}</span>
                </div>
                <p className="font-mono text-xs text-charcoal/60 mt-1">{stop.coord}</p>
              </div>
            ))}
          </div>

          {/* Active Station Deep Dive Drawer */}
          <div className="mt-8 pt-6 border-t-2 border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-ivory/50 p-4 border border-editorial-gray">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 block">Selected Hub</span>
              <span className="font-display font-bold text-xl text-charcoal">{stops[activeStop].city}, {stops[activeStop].state}</span>
              <span className="font-mono text-xs text-electric-orange block mt-0.5">{stops[activeStop].code}</span>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 block">GPS Coordinates</span>
              <span className="font-mono text-sm text-charcoal">{stops[activeStop].coord}</span>
              <span className="font-mono text-xs text-charcoal/50 block mt-0.5">High-Precision Telematics</span>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 block">Status & Log</span>
              <span className="font-display font-bold text-sm text-charcoal">{stops[activeStop].status}</span>
              <span className="font-mono text-xs text-charcoal/50 block mt-0.5">Checkpoint Cleared</span>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 block">Corridor Guarantee</span>
              <span className="font-display font-bold text-sm text-charcoal">Guaranteed Window</span>
              <span className="font-mono text-xs text-electric-orange font-semibold block mt-0.5">Zero Third-Party Relays</span>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-charcoal/70 bg-white/60 p-4 border border-charcoal/15">
          <span>* Direct freight route illustrated: Coast-to-Coast Express #8842</span>
          <span className="font-bold text-charcoal flex items-center gap-2">
            3,040 MILES TOTAL TRANSIT <ArrowRight className="w-3.5 h-3.5 text-electric-orange" />
          </span>
        </div>

      </div>
    </section>
  );
}
