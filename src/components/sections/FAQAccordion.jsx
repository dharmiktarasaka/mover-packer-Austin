import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faqsData';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState('faq-1');

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                11 / FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              CLARITY FIRST.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-charcoal/70">
            <span>TRANSPARENT ANSWERS TO ESSENTIAL QUESTIONS</span>
          </div>
        </div>

        {/* Clean Editorial Accordion */}
        <div className="border-t-2 border-charcoal divide-y-2 divide-charcoal bg-white shadow-sharp-lg">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left group hover:bg-ivory/40 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm font-bold text-electric-orange">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-charcoal group-hover:text-electric-orange transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-none border-2 border-charcoal flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                    isOpen ? 'bg-electric-orange text-white' : 'bg-ivory text-charcoal'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 pl-14 sm:pl-16 border-t border-editorial-gray/60 font-body text-charcoal/80 text-base leading-relaxed bg-ivory/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
