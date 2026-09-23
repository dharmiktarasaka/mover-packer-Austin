import React from 'react';
import { ArrowRight, ShieldCheck, Compass, Users, Truck, Check, Award } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Marquee from '../components/ui/Marquee';
import TrustStats from '../components/sections/TrustStats';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About SHIFTLINE — Modern Relocation & European Logistics"
        description="Founded in 2008, SHIFTLINE merges European freight rigor with modern technology to deliver zero-stress residential and corporate moves."
      />

      {/* Hero Header */}
      <section className="bg-ivory border-b-2 border-charcoal pt-16 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-electric-orange" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
              THE SHIFTLINE MANIFESTO
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.88] mb-8">
            MOVING MADE<br />
            <span className="text-electric-orange">SIMPLE.</span>
          </h1>

          <p className="font-body text-xl sm:text-2xl text-charcoal/90 font-light max-w-3xl leading-relaxed">
            From one address to the next, we keep everything moving. Born from the belief that relocating should feel like an upgrade, never an ordeal.
          </p>
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee
        items={['MODERN LOGISTICS', 'SWISS EDITORIAL PRECISION', 'ZERO COMPROMISE', 'CAREER SPECIALISTS']}
        theme="charcoal"
      />

      {/* Founding Narrative & Editorial Split */}
      <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase font-bold text-electric-orange block">
                FOUNDED 2008 // EUROPEAN INSPIRATION
              </span>

              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-charcoal leading-tight">
                REPLACING TRADITIONAL CHAOS WITH LOGISTICAL RIGOR.
              </h2>

              <p className="font-body text-base text-charcoal/80 leading-relaxed">
                For decades, the moving industry was synonymous with surprise fuel surcharges, cracked heirloom mirrors, unvetted day labor, and vague four-day arrival windows.
              </p>

              <p className="font-body text-base text-charcoal/80 leading-relaxed">
                SHIFTLINE was built to invert that paradigm. Inspired by Swiss transportation networks and high-precision European freight companies, we designed an architectural relocation model based on binding quotes, career W-2 teams, air-ride suspension vans, and real-time telemetry.
              </p>

              <div className="p-6 bg-white border-2 border-charcoal shadow-sharp">
                <blockquote className="font-display font-bold text-lg text-charcoal uppercase leading-snug">
                  “We do not see moving boxes. We see the physical architecture of a person's life transitioning to its next chapter.”
                </blockquote>
                <span className="font-mono text-xs text-electric-orange font-bold uppercase block mt-3">
                  — KLAUS VANDER / FOUNDING PRINCIPAL
                </span>
              </div>
            </div>

            {/* Collage Photo */}
            <div className="lg:col-span-6 relative">
              <div className="border-2 border-charcoal shadow-sharp-lg overflow-hidden bg-charcoal">
                <img
                  src="/images/hero-movers.jpg"
                  alt="SHIFTLINE Logistics Movers Team in Action"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-electric-orange text-white p-4 border-2 border-charcoal shadow-sharp font-mono text-xs font-bold uppercase tracking-wider">
                15+ YEARS • 12,000+ RELOCATIONS
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Trust Stats */}
      <TrustStats />

      {/* Fleet Standards Section */}
      <section id="fleet" className="bg-charcoal text-white py-20 lg:py-28 border-b-2 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-charcoal-muted pb-8">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-electric-orange block mb-2">
                FLEET ARCHITECTURE
              </span>
              <h2 className="text-4xl sm:text-6xl font-display font-black uppercase text-white">
                PURPOSE-BUILT CARGO ASSETS.
              </h2>
            </div>
            <span className="font-mono text-xs text-editorial-gray/60 uppercase">100% OWNED AIR-RIDE FLEET</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-charcoal-muted">
            <div className="p-8 border-r-2 border-b-2 border-charcoal-muted bg-charcoal">
              <span className="font-mono text-xs text-electric-orange font-bold block mb-2">01 / SUSPENSION</span>
              <h3 className="font-display font-black text-2xl uppercase mb-3">PNEUMATIC AIR-RIDE</h3>
              <p className="font-body text-sm text-editorial-gray/80 leading-relaxed">
                Computer-balanced air bladders absorb highway vibrations, railroad seams, and urban potholes to safeguard fine art, wine collections, and fragile porcelain.
              </p>
            </div>

            <div className="p-8 border-r-2 border-b-2 border-charcoal-muted bg-charcoal">
              <span className="font-mono text-xs text-electric-orange font-bold block mb-2">02 / TELEMETRY</span>
              <h3 className="font-display font-black text-2xl uppercase mb-3">IOT CLIMATE SENSORS</h3>
              <p className="font-body text-sm text-editorial-gray/80 leading-relaxed">
                Internal sensors monitor cargo temperature and relative humidity around the clock, preventing warping in solid walnut furniture and acoustic instruments.
              </p>
            </div>

            <div className="p-8 border-r-2 border-b-2 border-charcoal-muted bg-charcoal">
              <span className="font-mono text-xs text-electric-orange font-bold block mb-2">03 / SECURITY</span>
              <h3 className="font-display font-black text-2xl uppercase mb-3">DIGITAL BOLT SEALS</h3>
              <p className="font-body text-sm text-editorial-gray/80 leading-relaxed">
                Once loaded, trailer doors are secured with numbered electronic bolt seals that trigger instantaneous dispatch alarms if tampered with before arrival.
              </p>
            </div>
          </div>

        </div>
      </section>

      <BigOrangeCTA />
    </>
  );
}
