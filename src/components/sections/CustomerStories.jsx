import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { customerStories } from '../../data/storiesData';

export default function CustomerStories() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const story = customerStories[selectedIdx];

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                08 / PROVEN TRANSITIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              PEOPLE WE'VE MOVED.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-charcoal/70">
            <span>VERIFIED RELOCATION CHRONICLES</span>
          </div>
        </div>

        {/* Large Editorial Customer Story Showcase */}
        <div className="bg-white border-2 border-charcoal shadow-sharp-lg overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* LEFT 7 COLUMNS: Quote, Narrative & Route Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-charcoal">
                <div>
                  {/* Badge & Route Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal text-white font-mono text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-electric-orange" />
                      {story.badge}
                    </span>

                    <span className="font-mono text-xs font-bold text-electric-orange">
                      TRANSIT CODE // {story.id}-RELOC
                    </span>
                  </div>

                  {/* Main Large Quote */}
                  <div className="relative mb-8">
                    <Quote className="w-12 h-12 text-electric-orange/20 absolute -top-4 -left-4 pointer-events-none" />
                    <blockquote className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-charcoal leading-[1.05] relative z-10">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  {/* Editorial Narrative */}
                  <p className="font-body text-base text-charcoal/80 leading-relaxed mb-8">
                    {story.story}
                  </p>
                </div>

                {/* Relocation Specification Grid */}
                <div className="pt-6 border-t-2 border-charcoal/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                  <div>
                    <span className="text-charcoal/50 uppercase block">CLIENT</span>
                    <strong className="text-charcoal text-sm font-display font-bold block">{story.clients}</strong>
                  </div>

                  <div>
                    <span className="text-charcoal/50 uppercase block">CORRIDOR</span>
                    <strong className="text-charcoal text-sm font-display font-bold block">{story.route}</strong>
                  </div>

                  <div>
                    <span className="text-charcoal/50 uppercase block">PROPERTY</span>
                    <strong className="text-charcoal text-sm font-display font-bold block">{story.property}</strong>
                  </div>

                  <div>
                    <span className="text-charcoal/50 uppercase block">DISTANCE</span>
                    <strong className="text-electric-orange text-sm font-display font-bold block">{story.distance}</strong>
                  </div>
                </div>

              </div>

              {/* RIGHT 5 COLUMNS: Large Lifestyle Photograph */}
              <div className="lg:col-span-5 relative bg-charcoal">
                <div className="h-full min-h-[380px] lg:min-h-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.clients}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>

                {/* Overlaid Manifest Metadata */}
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 text-white p-3 border border-white/20 backdrop-blur-sm font-mono text-[11px]">
                  <span className="text-electric-orange block uppercase font-bold">CARGO SUMMARY:</span>
                  <span className="text-editorial-gray">{story.inventorySummary}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Story Selectors: 01 Maya & Jordan, 02 Daniel, 03 Olivia, 04 Marcus */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {customerStories.map((item, idx) => {
            const isCurrent = selectedIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`p-4 sm:p-5 text-left border-2 transition-all duration-200 ${
                  isCurrent
                    ? 'bg-charcoal text-white border-charcoal shadow-sharp-orange -translate-y-1'
                    : 'bg-white text-charcoal border-charcoal hover:border-electric-orange'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold uppercase ${isCurrent ? 'text-electric-orange' : 'text-charcoal/60'}`}>
                    {item.tabLabel}
                  </span>
                  <span className="text-xs">→</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base tracking-tight truncate">
                  {item.route}
                </div>
                <div className="font-mono text-[10px] text-charcoal/60 dark:text-editorial-gray/60 mt-1">
                  {item.property}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
