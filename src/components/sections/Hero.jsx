import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Box, Compass } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative bg-ivory pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b-2 border-charcoal">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 grid-lines opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT 55% (Columns 1 to 7) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 z-10"
          >
            {/* Small Eyebrow */}
            <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 mb-4 bg-white px-3 py-1 border border-editorial-gray shadow-sm">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
                SHIFTLINE MOVERS & PACKERS AUSTIN // LICENSED LOCAL, LONG-DISTANCE & COMMERCIAL
              </span>
            </motion.div>

            {/* Huge Headline: Revealed Line by Line */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9] mb-6 overflow-hidden">
              <span className="block overflow-hidden py-1">
                <motion.span variants={lineVariants} className="block">
                  WE MOVE
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span variants={lineVariants} className="block text-electric-orange">
                  YOUR WORLD.
                </motion.span>
              </span>
            </h1>

            {/* Supporting Text from User Content */}
            <motion.p
              variants={fadeUpVariants}
              className="font-body text-charcoal/85 text-base sm:text-lg leading-relaxed max-w-2xl mb-6"
            >
              If you’re comparing movers in Austin right now, here’s the short version: the right company depends on distance (local vs. long-distance vs. interstate), how your building or neighborhood restricts access (HOA gate codes, apartment loading docks, hill country driveways), and how your crew is sized against the job. <strong>Shiftline Movers Packers Austin TX</strong> runs binding, in-home or video-based estimates on every move — no reshuffled pricing once the truck is parked.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="font-mono text-xs text-charcoal/70 leading-normal max-w-xl mb-8 p-3 bg-white/70 border-l-2 border-electric-orange"
            >
              Twenty-plus years in this industry teaches you the same lesson every peak season: the moves that fall apart aren’t the ones with the most furniture — they’re the ones booked on a headline hourly rate with no thought given to crew size, heat, or how the truck actually gets to the front door.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
            >
              <MagneticButton
                to="/contact"
                variant="primary"
                size="lg"
                className="font-bold shadow-sharp hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <span>Get a Free Austin Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </MagneticButton>

              <MagneticButton
                to="/how-it-works"
                variant="outline"
                size="lg"
                className="font-bold"
              >
                <span>The H.E.A.T. Check</span>
              </MagneticButton>
            </motion.div>

            {/* Micro Credential Badges */}
            <motion.div
              variants={fadeUpVariants}
              className="pt-6 border-t border-editorial-gray grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-charcoal/70"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-electric-orange" />
                <span>Binding Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-electric-orange" />
                <span>Summer Heat Protocols</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Compass className="w-4 h-4 text-electric-orange" />
                <span>Austin HOA & COI Clearance</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT 45% (Columns 8 to 12): Layered Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Orange Geometric Shape Behind Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute -top-6 -right-6 w-full h-full bg-electric-orange border-2 border-charcoal transform translate-x-3 translate-y-3 z-0"
            />

            {/* Main Editorial Photograph */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 border-2 border-charcoal bg-white shadow-sharp-lg overflow-hidden group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/hero-movers.jpg"
                  alt="Professional SHIFTLINE movers carrying furniture with logistics truck in background"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                />
              </div>

              {/* Floating Label: MOVE 01 RESIDENTIAL */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-5 left-5 bg-charcoal text-white px-3.5 py-1.5 border-2 border-white shadow-sharp font-mono text-xs font-bold tracking-wider flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-ping" />
                <span>AUSTIN TX // CREW 01</span>
              </motion.div>

              {/* Floating Bottom Stamp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-5 right-5 bg-ivory text-charcoal px-3 py-1.5 border-2 border-charcoal shadow-sharp font-mono text-[11px] font-bold uppercase tracking-wider"
              >
                AIR-RIDE CERTIFIED
              </motion.div>
            </motion.div>

            {/* Architectural Hairline Accent Frame */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-charcoal pointer-events-none z-20" />

          </div>

        </div>

      </div>
    </section>
  );
}
