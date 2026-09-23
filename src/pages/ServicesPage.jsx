import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Check, Clock, Users } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { services } from '../data/servicesData';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function ServicesPage() {
  const [filter, setFilter] = useState('all');

  const filteredServices = services.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'residential') return s.id.includes('residential') || s.id.includes('packing');
    if (filter === 'commercial') return s.id.includes('commercial');
    if (filter === 'interstate') return s.id.includes('long-distance') || s.id.includes('specialty');
    if (filter === 'storage') return s.id.includes('storage');
    return true;
  });

  return (
    <>
      <SEO
        title="Comprehensive Relocation & Logistics Services"
        description="Explore SHIFTLINE's modern logistics services: Residential moving, corporate facility shifts, interstate direct routes, and white-glove packing."
      />

      {/* Page Header */}
      <section className="bg-ivory border-b-2 border-charcoal pt-16 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-electric-orange" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
              LOGISTICS PORTFOLIO // SIX PILLARS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9] mb-6">
            WHAT WE MOVE.<br />
            <span className="text-electric-orange">HOW WE DELIVER.</span>
          </h1>

          <p className="font-body text-charcoal/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Every relocation is managed under strict European logistics protocols: single point of coordination, dedicated vehicle assignment, and zero-compromise asset protection.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-10 pt-8 border-t border-editorial-gray">
            {[
              { id: 'all', label: 'All Services (06)' },
              { id: 'residential', label: 'Residential & Packing' },
              { id: 'commercial', label: 'Commercial & Corporate' },
              { id: 'interstate', label: 'Interstate & Long Distance' },
              { id: 'storage', label: 'Climate Vault Storage' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 font-display text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                  filter === cat.id
                    ? 'bg-charcoal text-white border-charcoal shadow-sharp'
                    : 'bg-white text-charcoal border-editorial-gray hover:border-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-ivory py-16 lg:py-24 border-b-2 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-charcoal shadow-sharp-lg flex flex-col justify-between overflow-hidden group hover:border-electric-orange transition-colors"
              >
                <div>
                  {/* Photo Header */}
                  <div className="aspect-[16/10] overflow-hidden bg-charcoal relative border-b-2 border-charcoal">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal text-white font-mono text-xs font-bold px-3 py-1 border border-white">
                      SPEC // {service.number}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-ivory text-charcoal font-mono text-xs font-bold px-3 py-1 border border-charcoal shadow-sharp">
                      FROM {service.priceStarting}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h2 className="text-3xl font-display font-black uppercase tracking-tight text-charcoal group-hover:text-electric-orange transition-colors mb-2">
                      {service.name}
                    </h2>
                    
                    <p className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider mb-4">
                      {service.tagline}
                    </p>

                    <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Logistics Spec Pill Box */}
                    <div className="grid grid-cols-2 gap-3 p-4 bg-ivory/60 border border-editorial-gray mb-6 font-mono text-xs text-charcoal">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-electric-orange" />
                        <span>{service.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-electric-orange" />
                        <span>{service.crewSize}</span>
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="space-y-2 mb-6">
                      <span className="font-mono text-[11px] font-bold text-charcoal/60 uppercase block">
                        KEY LOGISTICS PROTOCOLS:
                      </span>
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-body text-charcoal/90">
                          <Check className="w-3.5 h-3.5 text-electric-orange flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0 border-t border-editorial-gray flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="font-display font-bold text-sm uppercase tracking-wider text-charcoal hover:text-electric-orange flex items-center gap-2 transition-colors"
                  >
                    <span>Inspect Full Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-electric-orange" />
                  </Link>

                  <MagneticButton
                    to={`/contact?service=${service.slug}`}
                    variant="primary"
                    size="sm"
                    className="font-bold"
                  >
                    <span>Book Service</span>
                  </MagneticButton>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Big Orange Banner */}
      <BigOrangeCTA />
    </>
  );
}
