import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle, Calculator, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function QuickQuoteWidget() {
  const [fromZip, setFromZip] = useState('Chicago, IL (60608)');
  const [toZip, setToZip] = useState('Austin, TX (78702)');
  const [moveType, setMoveType] = useState('Residential');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCalculated(true);
  };

  return (
    <section className="bg-ivory border-t-2 border-charcoal py-16 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-2 border-charcoal shadow-sharp-lg p-6 sm:p-10 relative overflow-hidden">
          {/* Top Label */}
          <div className="flex items-center justify-between border-b-2 border-charcoal/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                INSTANT DISPATCH CALCULATOR
              </span>
            </div>
            <span className="font-mono text-xs text-charcoal/50 uppercase">V2.4 LOGISTICS ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase text-charcoal mb-8">
            WHERE ARE YOU MOVING?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* FROM and TO Two Large Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              
              {/* FROM Input */}
              <div className="relative">
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  FROM (ORIGIN ADDRESS OR ZIP)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-electric-orange">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fromZip}
                    onChange={(e) => { setFromZip(e.target.value); setIsCalculated(false); }}
                    placeholder="Enter city or zip code"
                    className="w-full pl-12 pr-4 py-4 bg-ivory/60 border-2 border-charcoal font-display font-bold text-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                  />
                </div>
              </div>

              {/* TO Input */}
              <div className="relative">
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  TO (DESTINATION ADDRESS OR ZIP)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-charcoal">
                    <MapPin className="w-5 h-5 text-charcoal" />
                  </div>
                  <input
                    type="text"
                    required
                    value={toZip}
                    onChange={(e) => { setToZip(e.target.value); setIsCalculated(false); }}
                    placeholder="Enter destination city or zip code"
                    className="w-full pl-12 pr-4 py-4 bg-ivory/60 border-2 border-charcoal font-display font-bold text-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                  />
                </div>
              </div>

            </div>

            {/* MOVE TYPE Selector */}
            <div>
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                MOVE TYPE
              </label>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {['Residential', 'Office', 'Long Distance'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { setMoveType(type); setIsCalculated(false); }}
                    className={`py-3 sm:py-3.5 px-3 border-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                      moveType === type
                        ? 'bg-charcoal text-white border-charcoal shadow-sharp'
                        : 'bg-ivory/40 text-charcoal border-editorial-gray hover:border-charcoal'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <MagneticButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-between"
              >
                <span>Calculate My Move</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </MagneticButton>
            </div>

          </form>

          {/* Success State / Animated Route Line */}
          <AnimatePresence>
            {isCalculated && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden border-t-2 border-charcoal pt-6"
              >
                <div className="bg-ivory p-6 border-2 border-charcoal shadow-sharp">
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-7 h-7 bg-electric-orange rounded-full flex items-center justify-center text-white font-bold text-xs">
                      ✓
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase text-charcoal">
                      YOUR MOVE STARTS HERE.
                    </h3>
                  </div>

                  {/* Animated Visual Route Line Connector */}
                  <div className="my-6 relative py-4">
                    <div className="flex items-center justify-between relative z-10">
                      
                      {/* Origin Node */}
                      <div className="bg-white p-3 border-2 border-charcoal shadow-sharp">
                        <span className="font-mono text-[10px] text-charcoal/50 uppercase block">DEPARTURE</span>
                        <span className="font-display font-bold text-sm text-charcoal">{fromZip}</span>
                      </div>

                      {/* Moving Route Icon / Telemetry */}
                      <div className="text-center px-4">
                        <span className="font-mono text-xs font-bold text-electric-orange block">
                          ~1,120 MI DIRECT CORRIDOR
                        </span>
                        <span className="font-mono text-[10px] text-charcoal/60 uppercase">
                          48 HR DEDICATED TRANSIT
                        </span>
                      </div>

                      {/* Destination Node */}
                      <div className="bg-charcoal text-white p-3 border-2 border-charcoal shadow-sharp">
                        <span className="font-mono text-[10px] text-editorial-gray/60 uppercase block">ARRIVAL</span>
                        <span className="font-display font-bold text-sm text-white">{toZip}</span>
                      </div>

                    </div>

                    {/* SVG Connecting Animated Line */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-charcoal/20 z-0">
                      <motion.div
                        className="h-full bg-electric-orange"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>

                  {/* Summary Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-editorial-gray font-mono text-xs">
                    <div>
                      <span className="text-charcoal/60 block">SELECTED CATEGORY:</span>
                      <strong className="text-charcoal uppercase">{moveType} Relocation</strong>
                    </div>
                    <div>
                      <span className="text-charcoal/60 block">CAPACITY ASSIGNED:</span>
                      <strong className="text-charcoal uppercase">26ft Air-Ride Van + 3 Crew</strong>
                    </div>
                    <div>
                      <span className="text-charcoal/60 block">ESTIMATE RANGE:</span>
                      <strong className="text-electric-orange text-sm font-bold">$1,850 - $2,300 Flat Binding</strong>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
