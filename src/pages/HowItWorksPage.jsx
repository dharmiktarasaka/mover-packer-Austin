import React from 'react';
import { ArrowRight, ShieldCheck, Check, Clock, Truck, FileText, Layers, Award } from 'lucide-react';
import SEO from '../components/ui/SEO';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import RouteVisualization from '../components/ui/RouteVisualization';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How It Works — The 5-Stage Logistics Framework"
        description="Learn how SHIFTLINE executes frictionless residential and enterprise relocations from digital survey to white-glove unpacking."
      />

      {/* Header */}
      <section className="bg-ivory border-b-2 border-charcoal pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-electric-orange" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
              THE DISPATCH BLUEPRINT
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9] mb-6">
            HOW THE<br />
            <span className="text-electric-orange">MOVE MOVES.</span>
          </h1>

          <p className="font-body text-charcoal/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Eliminating anxiety through predictability. Here is exactly how SHIFTLINE plans, protects, transports, and settles your belongings without friction.
          </p>
        </div>
      </section>

      {/* 5 Stages Process Timeline */}
      <ProcessTimeline />

      {/* Deep-Dive Operational Standards Section */}
      <section className="bg-white border-b-2 border-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-charcoal pb-8">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-electric-orange block mb-2">
                FLEET & CREW RIGOR
              </span>
              <h2 className="text-4xl sm:text-6xl font-display font-black uppercase text-charcoal">
                THREE UNCOMPROMISING STANDARDS.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard 01 */}
            <div className="bg-ivory border-2 border-charcoal p-8 shadow-sharp flex flex-col justify-between">
              <div>
                <span className="font-mono text-3xl font-black text-electric-orange block mb-4">01</span>
                <h3 className="font-display font-black text-2xl uppercase text-charcoal mb-3">
                  W-2 CERTIFIED LOGISTICS CREWS
                </h3>
                <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                  We never rely on temporary gig labor or day contractors. Every crew specialist is a vetted, insured career professional who undergoes 120 hours of physical handling certification.
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-gray font-mono text-xs text-charcoal flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-electric-orange" />
                <span>100% Background Verified</span>
              </div>
            </div>

            {/* Standard 02 */}
            <div className="bg-ivory border-2 border-charcoal p-8 shadow-sharp flex flex-col justify-between">
              <div>
                <span className="font-mono text-3xl font-black text-electric-orange block mb-4">02</span>
                <h3 className="font-display font-black text-2xl uppercase text-charcoal mb-3">
                  AIR-RIDE CUSHIONED SUSPENSION
                </h3>
                <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                  Unlike traditional leaf-spring trucks that transmit every pothole into your glassware, our modern fleet utilizes air-bag pneumatic dampening for glass-smooth interstate transit.
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-gray font-mono text-xs text-charcoal flex items-center gap-2">
                <Truck className="w-4 h-4 text-electric-orange" />
                <span>Zero Road Shock Tolerance</span>
              </div>
            </div>

            {/* Standard 03 */}
            <div className="bg-ivory border-2 border-charcoal p-8 shadow-sharp flex flex-col justify-between">
              <div>
                <span className="font-mono text-3xl font-black text-electric-orange block mb-4">03</span>
                <h3 className="font-display font-black text-2xl uppercase text-charcoal mb-3">
                  BINDING FLAT-RATE GUARANTEE
                </h3>
                <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                  Before a single box is picked up, your inventory is locked into a legally binding estimate. If our team takes longer than estimated, you pay zero extra pennies.
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-gray font-mono text-xs text-charcoal flex items-center gap-2">
                <Award className="w-4 h-4 text-electric-orange" />
                <span>Price Lock Certification</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interstate Route Visualization */}
      <RouteVisualization />

      <BigOrangeCTA />
    </>
  );
}
