import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, AlertTriangle } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;
    setSliderPos(pos);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="bg-ivory border-t-2 border-charcoal py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                07 / TRANSFORMATION BENCHMARK
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal">
              CHAOS IN. <span className="text-electric-orange">ORDER OUT.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-charcoal/70 flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-electric-orange" />
            <span>DRAG SLIDER TO REVEAL TRANSFORMATION</span>
          </div>
        </div>

        {/* Interactive Comparison Canvas */}
        <div 
          ref={containerRef}
          className="relative w-full h-[380px] sm:h-[500px] lg:h-[620px] select-none border-2 border-charcoal shadow-sharp-lg overflow-hidden cursor-ew-resize group bg-charcoal"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* AFTER IMAGE (Base Layer: Clean settled home) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/images/packing-detail.jpg" 
              alt="After - Professional SHIFTLINE packing completed and organized" 
              className="w-full h-full object-cover"
            />
            {/* After Tag */}
            <div className="absolute bottom-6 right-6 z-10 bg-charcoal text-white font-mono text-xs font-semibold px-4 py-2 border-2 border-white shadow-sharp flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-electric-orange" />
              <span>AFTER: UNPACKED & SETTLED</span>
            </div>
          </div>

          {/* BEFORE IMAGE (Clipped Layer: Cluttered boxes) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0 w-full h-full min-w-[320px]" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}>
              <img 
                src="/images/before-boxes.jpg" 
                alt="Before - Stacked moving boxes, tape, bubble wrap, and truck outside" 
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
            {/* Before Tag */}
            <div className="absolute bottom-6 left-6 z-10 bg-electric-orange text-white font-mono text-xs font-semibold px-4 py-2 border-2 border-charcoal shadow-sharp flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-white" />
              <span>BEFORE: PACKING & STAGING</span>
            </div>
          </div>

          {/* DRAGGABLE DIVIDER LINE & HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Orange Draggable Circular Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-electric-orange border-2 border-white text-white flex items-center justify-center shadow-sharp transition-transform group-hover:scale-110 active:scale-95 pointer-events-auto">
              <ArrowLeftRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Accessible native range input */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Comparison slider between before and after moving states"
          />
        </div>

        {/* Narrative Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-white border border-editorial-gray">
            <span className="font-mono text-xs font-bold text-electric-orange uppercase block mb-1">Standard Industry Experience</span>
            <h4 className="font-display font-bold text-lg text-charcoal mb-2">Weeks of cardboard purgatory.</h4>
            <p className="font-body text-sm text-charcoal/70 leading-relaxed">
              Living out of unindexed tape-bound cartons, searching for missing kitchen knives, and wrestling with scratched floorboards.
            </p>
          </div>

          <div className="p-6 bg-charcoal text-white border border-charcoal shadow-sharp">
            <span className="font-mono text-xs font-bold text-electric-orange uppercase block mb-1">The SHIFTLINE Benchmark</span>
            <h4 className="font-display font-bold text-lg text-white mb-2">Turnkey room setup by dusk.</h4>
            <p className="font-body text-sm text-editorial-gray/80 leading-relaxed">
              Wardrobes transferred upright on hangbars, designer bedframes precision-torqued, and all protective corrugated waste removed before you step in.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
