import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle2, Info } from 'lucide-react';

export default function TaggedImage() {
  const [activeTag, setActiveTag] = useState(0);

  const tags = [
    {
      id: 0,
      label: 'FRAGILE',
      title: 'Art & Glassware Crating',
      detail: 'Custom 2-ply timber crating with high-density anti-static foam suspension.',
      top: '28%',
      left: '32%',
    },
    {
      id: 1,
      label: 'PROTECTED',
      title: 'Architectural Neoprene Wrap',
      detail: 'Triple-layer breathable quilted pads prevent moisture buildup and abrasion.',
      top: '62%',
      left: '58%',
    },
    {
      id: 2,
      label: 'LABELED',
      title: 'QR Code Room Mapping',
      detail: 'Scan-verified manifest itemizing box contents and designated destination room.',
      top: '78%',
      left: '26%',
    },
    {
      id: 3,
      label: 'SECURED',
      title: 'E-Track Ratchet Lockdown',
      detail: 'Industrial grade 3,000 lb rated aerospace logistics ties anchoring furniture to wall ribbing.',
      top: '40%',
      left: '78%',
    }
  ];

  return (
    <section className="bg-ivory border-t-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT 5 COLUMNS: Editorial Copy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                03 / CHAIN OF CUSTODY
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95] mb-6">
              YOUR STUFF.<br />
              <span className="text-electric-orange">OUR RESPONSIBILITY.</span>
            </h2>

            <p className="font-body text-charcoal/80 text-base leading-relaxed mb-8">
              We treat furniture as architecture. Every heirloom credenza, marble island slab, and framed canvas receives bespoke preservation protocols before an inch of transit occurs.
            </p>

            {/* Interactive Selector Pills */}
            <div className="space-y-3">
              {tags.map((tag, idx) => (
                <div
                  key={tag.id}
                  onClick={() => setActiveTag(idx)}
                  className={`p-3.5 border-2 transition-all cursor-pointer flex items-center justify-between ${
                    activeTag === idx
                      ? 'border-charcoal bg-white shadow-sharp translate-x-1'
                      : 'border-editorial-gray bg-white/40 hover:border-charcoal/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 ${activeTag === idx ? 'bg-electric-orange' : 'bg-charcoal/20'}`} />
                    <span className="font-display font-bold text-sm tracking-tight text-charcoal">
                      {tag.label} — <span className="font-normal text-charcoal/70">{tag.title}</span>
                    </span>
                  </div>
                  <span className="font-mono text-xs text-charcoal/50">0{idx + 1}</span>
                </div>
              ))}
            </div>

            {/* Bottom Guarantee Badge */}
            <div className="mt-8 pt-6 border-t border-editorial-gray flex items-center gap-3">
              <Shield className="w-5 h-5 text-electric-orange flex-shrink-0" />
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/80">
                100% Certified Transit Custody Protection Guarantee
              </span>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Interactive Tagged Photograph */}
          <div className="lg:col-span-7 relative">
            <div className="relative border-2 border-charcoal shadow-sharp-lg overflow-hidden bg-charcoal">
              <img
                src="/images/packing-detail.jpg"
                alt="Professional logistics movers packing fragile kitchen glassware and ceramics in labeled cartons"
                className="w-full h-[450px] sm:h-[540px] object-cover filter contrast-105"
              />

              {/* Geometric Orange Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-electric-orange/20 border-b-2 border-l-2 border-charcoal pointer-events-none" />

              {/* Floating Interactive Labels */}
              {tags.map((tag, idx) => {
                const isActive = activeTag === idx;
                return (
                  <div
                    key={tag.id}
                    style={{ top: tag.top, left: tag.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setActiveTag(idx)}
                      className={`relative flex items-center gap-2 px-3 py-1.5 border-2 shadow-sharp transition-all duration-200 group ${
                        isActive 
                          ? 'bg-electric-orange text-white border-charcoal scale-105' 
                          : 'bg-white/95 text-charcoal border-charcoal hover:bg-white'
                      }`}
                      aria-label={`View details for ${tag.label}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-ping' : 'bg-electric-orange'}`} />
                      <span className="font-mono text-xs font-bold tracking-wider">{tag.label}</span>
                    </button>
                  </div>
                );
              })}

              {/* Active Floating Drawer Over Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTag}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-4 left-4 right-4 bg-charcoal text-white p-4 border-2 border-white shadow-sharp z-30"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-electric-orange font-bold">
                      PROTOCOL 0{activeTag + 1}: {tags[activeTag].label}
                    </span>
                    <span className="font-mono text-[10px] text-editorial-gray">CUSTODY-VERIFIED</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white">{tags[activeTag].title}</h4>
                  <p className="font-body text-xs text-editorial-gray/80 mt-1">{tags[activeTag].detail}</p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
