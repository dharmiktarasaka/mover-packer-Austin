import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services } from '../../data/servicesData';
import MagneticButton from '../ui/MagneticButton';

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                02 / CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              WHAT WE MOVE.
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <MagneticButton
              to="/services"
              variant="outline"
              size="md"
              className="font-bold"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </div>
        </div>

        {/* Large Numbered Service List */}
        <div className="border-t-2 border-charcoal divide-y-2 divide-charcoal">
          {services.map((service, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative group transition-all duration-300 ${
                  isHovered ? 'bg-white' : 'bg-transparent hover:bg-white/60'
                }`}
              >
                {/* Growing Orange Indicator Bar on Active Hover */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-electric-orange"
                  initial={false}
                  animate={{ width: isHovered ? '6px' : '0px' }}
                  transition={{ duration: 0.25 }}
                />

                <Link
                  to={`/services/${service.slug}`}
                  className="block px-4 sm:px-8 py-8 lg:py-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Number (2 Cols) */}
                    <div className="lg:col-span-2 flex items-baseline gap-4">
                      <span className="font-mono text-3xl sm:text-5xl font-black tracking-tighter text-charcoal group-hover:text-electric-orange transition-colors">
                        {service.number}
                      </span>
                      <span className="font-mono text-xs text-charcoal/40 uppercase hidden sm:inline">
                        // SPEC-0{idx + 1}
                      </span>
                    </div>

                    {/* Service Name & Metadata (4 Cols) */}
                    <div className="lg:col-span-4">
                      <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tighter text-charcoal group-hover:text-electric-orange transition-colors">
                        {service.name}
                      </h3>
                      <p className="font-mono text-xs text-charcoal/60 mt-1 uppercase tracking-wider">
                        {service.meta} • Est. {service.estimatedTime}
                      </p>
                    </div>

                    {/* Short Description (4 Cols) */}
                    <div className="lg:col-span-4">
                      <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow & Image Trigger (2 Cols) */}
                    <div className="lg:col-span-2 flex items-center justify-end gap-4">
                      <div className="hidden sm:block text-right font-mono text-xs font-bold text-electric-orange">
                        FROM {service.priceStarting}
                      </div>

                      <div className="w-12 h-12 rounded-none bg-charcoal text-white group-hover:bg-electric-orange border-2 border-charcoal flex items-center justify-center transition-all duration-300 shadow-sharp group-hover:translate-x-1">
                        <ArrowUpRight className="w-6 h-6 transform transition-transform group-hover:rotate-45" />
                      </div>
                    </div>

                  </div>

                  {/* Expanded Image & Features Tray (Revealed on hover/active) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden border-t border-editorial-gray pt-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          
                          {/* Image Preview Thumbnail */}
                          <div className="md:col-span-4 overflow-hidden border-2 border-charcoal shadow-sharp">
                            <div className="aspect-[16/9] overflow-hidden bg-charcoal">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>

                          {/* Key Checklist Badges */}
                          <div className="md:col-span-8 space-y-2">
                            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block">
                              LOGISTICS SPECIFICATIONS & PROTOCOLS
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-body text-xs text-charcoal">
                              {service.features.slice(0, 4).map((feat, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-electric-orange" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                            <div className="pt-2 font-mono text-xs text-electric-orange font-bold uppercase">
                              Click to configure {service.name.toLowerCase()} quote →
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
