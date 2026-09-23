import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarClock, PackageOpen, Truck, Home, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'TELL US WHERE',
      desc: 'Submit your origin, destination, and key move dates via our digital survey portal.',
      icon: MapPin,
      image: '/images/before-boxes.jpg',
      action: '2-Minute Survey'
    },
    {
      number: '02',
      title: 'PLAN THE MOVE',
      desc: 'Dedicated logistics coordinator reviews floorplans, elevator COIs, and locks in a binding flat rate.',
      icon: CalendarClock,
      image: '/images/office-moving.jpg',
      action: 'Binding Estimate'
    },
    {
      number: '03',
      title: 'PACK & PROTECT',
      desc: 'White-glove packologists arrive with custom timber crates, color-coded cartons, and floor armor.',
      icon: PackageOpen,
      image: '/images/packing-detail.jpg',
      action: 'White-Glove Pack'
    },
    {
      number: '04',
      title: 'MOVE',
      desc: 'Air-ride vehicle deployment with live GPS telematics, climate control, and sealed cargo doors.',
      icon: Truck,
      image: '/images/moving-truck.jpg',
      action: 'Live GPS Telemetry'
    },
    {
      number: '05',
      title: 'SETTLE IN',
      desc: 'Precision room-by-room unloading, furniture reassembly, and full debris haul-away.',
      icon: Home,
      image: '/images/hero-movers.jpg',
      action: 'Same-Day Settling'
    }
  ];

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                05 / FIVE STAGE LOGISTICS CYCLE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              HOW THE MOVE MOVES.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-charcoal/70">
            <span>PREDICTABLE • SYNCHRONIZED • GUARANTEED</span>
          </div>
        </div>

        {/* DESKTOP: Horizontal Connected Process Grid */}
        <div className="hidden lg:block relative mb-12">
          
          {/* Horizontal Connecting Guide Line */}
          <div className="absolute top-12 left-8 right-8 h-1 bg-charcoal/15 z-0" />
          
          {/* Animated Orange Route Progress Line */}
          <motion.div
            className="absolute top-12 left-8 h-1 bg-electric-orange z-0"
            initial={{ width: '0%' }}
            whileInView={{ width: '90%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`bg-white border-2 border-charcoal p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                    isSelected ? 'shadow-sharp-orange -translate-y-2' : 'shadow-sharp hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`w-9 h-9 border-2 border-charcoal flex items-center justify-center font-display font-black text-sm ${
                        isSelected ? 'bg-electric-orange text-white' : 'bg-charcoal text-white'
                      }`}>
                        {step.number}
                      </span>
                      <div className="p-2 bg-ivory border border-editorial-gray text-charcoal">
                        <Icon className="w-5 h-5 text-electric-orange" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display font-black text-lg tracking-tight uppercase text-charcoal mb-2">
                      {step.title}
                    </h3>

                    {/* Short Description */}
                    <p className="font-body text-xs text-charcoal/70 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  {/* Image Thumbnail */}
                  <div>
                    <div className="aspect-[4/3] overflow-hidden border border-charcoal bg-charcoal mb-3">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-electric-orange flex items-center justify-between">
                      <span>{step.action}</span>
                      <span>→</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* MOBILE: Vertical Timeline Layout */}
        <div className="block lg:hidden relative pl-6 space-y-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-2.5 top-3 bottom-3 w-1 bg-electric-orange" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative bg-white border-2 border-charcoal p-5 shadow-sharp">
                <div className="absolute -left-[31px] top-5 w-6 h-6 bg-charcoal border-2 border-white text-white font-mono text-[11px] font-bold flex items-center justify-center">
                  {step.number}
                </div>

                <div className="flex items-center gap-2 mb-2 text-electric-orange">
                  <Icon className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold uppercase">{step.action}</span>
                </div>

                <h3 className="font-display font-black text-xl uppercase tracking-tight text-charcoal mb-2">
                  {step.title}
                </h3>

                <p className="font-body text-sm text-charcoal/80 mb-4">
                  {step.desc}
                </p>

                <div className="aspect-[16/9] overflow-hidden border border-charcoal">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 p-6 bg-charcoal text-white border-2 border-charcoal shadow-sharp flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl uppercase">READY TO SCHEDULE STAGE 01?</h4>
            <p className="font-body text-xs text-editorial-gray/80 mt-1">Our coordinators analyze floorplans and dispatch within 24 hours.</p>
          </div>
          <MagneticButton
            to="/how-it-works"
            variant="primary"
            size="md"
            className="w-full sm:w-auto font-bold"
          >
            <span>Learn More About the 5 Stages</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
