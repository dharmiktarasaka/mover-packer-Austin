import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';
import { heatCheckFramework } from '../../data/austinContent';

export default function HeatCheckSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section className="bg-white border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                10-MINUTE CARRIER VETTING TOOLKIT
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              THE H.E.A.T. CHECK:<br />
              <span className="text-electric-orange">VETTING ANY AUSTIN MOVER IN UNDER 10 MINUTES.</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base max-w-md leading-relaxed">
            Most “how to pick a mover” advice online is generic and city-agnostic. Here is a 4-point framework built specifically around what actually goes wrong on Austin moves.
          </p>
        </div>

        {/* 4 Interactive Framework Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heatCheckFramework.map((item, idx) => {
            const isSelected = selectedIdx === idx;

            return (
              <div
                key={item.letter}
                onClick={() => setSelectedIdx(idx)}
                className={`p-6 sm:p-8 border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-charcoal text-white border-charcoal shadow-sharp-orange -translate-y-1'
                    : 'bg-ivory text-charcoal border-charcoal hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 bg-electric-orange text-white font-display font-black text-2xl flex items-center justify-center border-2 border-charcoal shadow-sharp">
                      {item.letter}
                    </span>
                    <span className={`font-mono text-xs uppercase font-bold ${isSelected ? 'text-electric-orange' : 'text-charcoal/50'}`}>
                      CHECKPOINT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <div className={`p-3 border font-mono text-xs mb-4 ${
                    isSelected ? 'bg-charcoal-light border-charcoal-muted text-white' : 'bg-white border-editorial-gray text-charcoal'
                  }`}>
                    <strong className="text-electric-orange block text-[10px] uppercase">DIRECT QUESTION TO ASK:</strong>
                    <span>"{item.question}"</span>
                  </div>

                  <p className={`font-body text-xs sm:text-sm leading-relaxed ${isSelected ? 'text-editorial-gray' : 'text-charcoal/80'}`}>
                    {item.detail}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 ${
                  isSelected ? 'border-charcoal-muted text-electric-orange' : 'border-editorial-gray text-charcoal/60'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SHIFTLINE VERIFIED PROTOCOL</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning Caution Banner */}
        <div className="mt-8 p-4 bg-ivory border border-editorial-gray font-mono text-xs text-charcoal flex items-center gap-3">
          <AlertCircle className="w-4 h-4 text-electric-orange flex-shrink-0" />
          <span>
            <strong>The Common Pitfall:</strong> Comparing the headline hourly rate before you compare the crew size or the access plan. Both change the real cost more than the rate does.
          </span>
        </div>

      </div>
    </section>
  );
}
