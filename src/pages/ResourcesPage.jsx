import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, FileCheck, Calculator, BookOpen, CheckSquare, Sparkles } from 'lucide-react';
import SEO from '../components/ui/SEO';
import MovingGuidesSection from '../components/sections/MovingGuidesSection';
import FAQAccordion from '../components/sections/FAQAccordion';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function ResourcesPage() {
  const [bedrooms, setBedrooms] = useState(2);
  const [packingTier, setPackingTier] = useState('standard');

  const estimatedBoxes = bedrooms * 18 + (packingTier === 'full' ? 12 : 0);
  const estimatedTapeRolls = Math.ceil(estimatedBoxes / 6);
  const estimatedPaperLbs = bedrooms * 25;

  return (
    <>
      <SEO
        title="Resources & Moving Guides — SHIFTLINE Intelligence"
        description="Access free relocation calculators, moving checklists, packing guidelines, and expert advice from professional logisticians."
      />

      {/* Header */}
      <section className="bg-ivory border-b-2 border-charcoal pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-electric-orange" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
              LOGISTICS INTELLIGENCE & TOOLKITS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9] mb-6">
            PLAN BEFORE<br />
            <span className="text-electric-orange">YOU PACK.</span>
          </h1>

          <p className="font-body text-charcoal/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Essential tools, calculations, and checklists to streamline your relocation timeline and eliminate common moving traps.
          </p>
        </div>
      </section>

      {/* Interactive Feature Banner: 8-Week Digital Checklist Tool */}
      <section className="bg-white border-b-2 border-charcoal py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 bg-ivory border-2 border-charcoal shadow-sharp-lg flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-charcoal text-white font-mono text-xs font-bold uppercase mb-3">
                <CheckSquare className="w-3.5 h-3.5 text-electric-orange" />
                INTERACTIVE WEB APP
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-charcoal mb-2">
                THE 8-WEEK INTERACTIVE MOVING CHECKLIST
              </h3>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                Track your progress week-by-week, flag critical lease/utility milestones, and ensure zero last-minute moving day panics.
              </p>
            </div>

            <MagneticButton
              to="/resources/moving-checklist"
              variant="primary"
              size="lg"
              className="font-bold flex-shrink-0"
            >
              <span>Launch Interactive Checklist</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Interactive Box & Packing Supply Estimator */}
      <section className="bg-ivory border-b-2 border-charcoal py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-2 border-charcoal shadow-sharp-lg bg-white p-6 sm:p-10">
            <div className="flex items-center justify-between border-b-2 border-charcoal/10 pb-4 mb-6">
              <span className="font-mono text-xs uppercase font-bold text-electric-orange">
                SUPPLY ESTIMATION ENGINE
              </span>
              <span className="font-mono text-xs text-charcoal/50">V1.8 ALGORITHM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-charcoal mb-4">
              PACKING SUPPLY CALCULATOR
            </h2>

            <p className="font-body text-sm text-charcoal/70 mb-8">
              Under-buying boxes leads to packing chaos; over-buying is wasteful. Use our standard volume metric to calculate exact carton requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-charcoal mb-2">
                  NUMBER OF BEDROOMS: ({bedrooms})
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBedrooms(num)}
                      className={`py-3 border-2 font-display font-bold text-sm transition-all ${
                        bedrooms === num
                          ? 'bg-charcoal text-white border-charcoal shadow-sharp'
                          : 'bg-ivory text-charcoal border-editorial-gray hover:border-charcoal'
                      }`}
                    >
                      {num} {num === 1 ? 'BR' : 'BRs'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase text-charcoal mb-2">
                  PACKING DENSITY:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPackingTier('standard')}
                    className={`py-3 px-3 border-2 font-display font-bold text-xs uppercase transition-all ${
                      packingTier === 'standard'
                        ? 'bg-charcoal text-white border-charcoal shadow-sharp'
                        : 'bg-ivory text-charcoal border-editorial-gray hover:border-charcoal'
                    }`}
                  >
                    Moderate Clutter
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackingTier('full')}
                    className={`py-3 px-3 border-2 font-display font-bold text-xs uppercase transition-all ${
                      packingTier === 'full'
                        ? 'bg-charcoal text-white border-charcoal shadow-sharp'
                        : 'bg-ivory text-charcoal border-editorial-gray hover:border-charcoal'
                    }`}
                  >
                    Heavy / Books & Art
                  </button>
                </div>
              </div>
            </div>

            {/* Output Metrics */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-ivory border-2 border-charcoal font-mono text-xs">
              <div>
                <span className="text-charcoal/50 uppercase block text-[10px]">CORRUGATED CARTONS</span>
                <strong className="text-electric-orange text-2xl font-display font-black block mt-1">
                  ~{estimatedBoxes} Boxes
                </strong>
                <span className="text-charcoal/60 text-[10px]">Sm, Med, Lg & Wardrobes</span>
              </div>

              <div>
                <span className="text-charcoal/50 uppercase block text-[10px]">PACKING TAPE</span>
                <strong className="text-charcoal text-2xl font-display font-black block mt-1">
                  ~{estimatedTapeRolls} Rolls
                </strong>
                <span className="text-charcoal/60 text-[10px]">Heavy duty 55yd adhesive</span>
              </div>

              <div>
                <span className="text-charcoal/50 uppercase block text-[10px]">CUSHIONING PAPER</span>
                <strong className="text-charcoal text-2xl font-display font-black block mt-1">
                  ~{estimatedPaperLbs} Lbs
                </strong>
                <span className="text-charcoal/60 text-[10px]">Clean unprinted newsprint</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Moving Guides Section */}
      <MovingGuidesSection />

      {/* FAQ Accordion Section */}
      <div id="faq">
        <FAQAccordion />
      </div>

      <BigOrangeCTA />
    </>
  );
}
