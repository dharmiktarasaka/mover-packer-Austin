import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, Clock, FileCheck } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function MovingGuidesSection() {
  const guides = [
    {
      number: '01',
      title: 'The Ultimate Moving Checklist',
      subtitle: 'An 8-week strategic milestone countdown from inventory to key exchange.',
      tag: 'CHECKLIST & TIMELINE',
      readTime: '6 Min Read',
      link: '/resources/moving-checklist',
      image: '/images/before-boxes.jpg'
    },
    {
      number: '02',
      title: 'How to Pack Fragile Items',
      subtitle: 'Museum methods for glassware, framed canvas, turntables, and marble.',
      tag: 'PACKING PROTOCOL',
      readTime: '8 Min Read',
      link: '/resources',
      image: '/images/packing-detail.jpg'
    },
    {
      number: '03',
      title: 'Moving Day: What to Expect',
      subtitle: 'Walkthrough of arrival protocols, floor protection, inventory checks, and signing.',
      tag: 'MOVE-DAY BLUEPRINT',
      readTime: '5 Min Read',
      link: '/resources',
      image: '/images/moving-truck.jpg'
    }
  ];

  return (
    <section className="bg-ivory border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b-2 border-charcoal pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                10 / LOGISTICS INTELLIGENCE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              BEFORE THE<br />
              <span className="text-electric-orange">TRUCK ARRIVES.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <MagneticButton
              to="/resources"
              variant="outline"
              size="md"
              className="font-bold"
            >
              <span>Explore Moving Guides</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </div>
        </div>

        {/* Three Premium Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.number}
              to={guide.link}
              className="group bg-white border-2 border-charcoal shadow-sharp hover:shadow-sharp-orange transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Large Editorial Photograph */}
                <div className="aspect-[16/10] overflow-hidden border-b-2 border-charcoal bg-charcoal relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal text-white font-mono text-[10px] uppercase font-bold px-2.5 py-1 border border-white">
                    {guide.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between font-mono text-xs text-charcoal/50 mb-3">
                    <span className="font-bold text-electric-orange">GUIDE // {guide.number}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-charcoal/40" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-charcoal group-hover:text-electric-orange transition-colors mb-3">
                    {guide.title}
                  </h3>

                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    {guide.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 border-t border-editorial-gray/50 flex items-center justify-between font-mono text-xs font-bold uppercase text-charcoal group-hover:text-electric-orange transition-colors">
                <span>Read Full Directive</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
