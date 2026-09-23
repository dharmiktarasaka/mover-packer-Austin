import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Check, Clock, Users, Box, Truck, Sparkles } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { services } from '../data/servicesData';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function ServiceDetailPage() {
  const { slug } = useParams();

  // Normalize slug (e.g. 'packing' -> 'packing-services')
  const matchedService = services.find(
    (s) => s.slug === slug || s.id === slug || (slug === 'packing' && s.id === 'packing-services')
  );

  if (!matchedService) {
    return <Navigate to="/services" replace />;
  }

  const [roomCount, setRoomCount] = useState(2);
  const estimatedCost = parseInt(matchedService.priceStarting.replace(/[^0-9]/g, ''), 10) * (1 + (roomCount - 1) * 0.4);

  return (
    <>
      <SEO
        title={`${matchedService.name} — Logistics & Relocation Blueprint`}
        description={matchedService.description}
      />

      {/* Back Link Breadcrumb */}
      <section className="bg-ivory border-b border-editorial-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal/70 hover:text-electric-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL SERVICES</span>
          </Link>
        </div>
      </section>

      {/* Editorial Service Hero */}
      <section className="bg-ivory border-b-2 border-charcoal pt-12 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-electric-orange" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
                  SERVICE SPECIFICATION // {matchedService.number}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95] mb-6">
                {matchedService.name}
              </h1>

              <p className="font-mono text-base text-electric-orange font-bold uppercase tracking-wider mb-6">
                {matchedService.tagline}
              </p>

              <p className="font-body text-charcoal/80 text-lg leading-relaxed mb-8">
                {matchedService.description}
              </p>

              {/* Service Meta Ribbon */}
              <div className="grid grid-cols-3 gap-4 p-5 bg-white border-2 border-charcoal shadow-sharp mb-8 font-mono text-xs">
                <div>
                  <span className="text-charcoal/50 uppercase block">BASE PRICING</span>
                  <strong className="text-electric-orange text-base font-display font-bold">FROM {matchedService.priceStarting}</strong>
                </div>
                <div>
                  <span className="text-charcoal/50 uppercase block">DURATION</span>
                  <strong className="text-charcoal text-base font-display font-bold">{matchedService.estimatedTime}</strong>
                </div>
                <div>
                  <span className="text-charcoal/50 uppercase block">CREW CAPACITY</span>
                  <strong className="text-charcoal text-base font-display font-bold">{matchedService.crewSize}</strong>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  to={`/contact?service=${matchedService.slug}`}
                  variant="primary"
                  size="lg"
                  className="font-bold"
                >
                  <span>Book {matchedService.name}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>

                <MagneticButton
                  to="/how-it-works"
                  variant="outline"
                  size="lg"
                  className="font-bold"
                >
                  <span>Inspection Process</span>
                </MagneticButton>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5">
              <div className="border-2 border-charcoal shadow-sharp-lg overflow-hidden bg-charcoal relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={matchedService.image}
                    alt={matchedService.name}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 text-white p-4 border border-white/20 font-mono text-xs">
                  <span className="text-electric-orange font-bold block uppercase mb-1">RECOMMENDED SCOPE:</span>
                  <p className="text-editorial-gray/90 leading-tight">{matchedService.idealFor}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Volume & Pricing Estimator for this Service */}
      <section className="bg-white border-b-2 border-charcoal py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-2 border-charcoal shadow-sharp p-6 sm:p-10 bg-ivory">
            <span className="font-mono text-xs uppercase font-bold text-electric-orange block mb-2">
              ESTIMATOR SIMULATOR
            </span>
            <h3 className="text-3xl font-display font-black uppercase text-charcoal mb-4">
              CALCULATE ESTIMATED CREW & INVESTMENT
            </h3>

            <p className="font-body text-sm text-charcoal/70 mb-8">
              Adjust estimated property size to view standard equipment allocation and crew dispatch timing.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs font-bold text-charcoal">
                  <span>PROPERTY SIZE / ROOM UNITS:</span>
                  <span className="text-electric-orange text-base">{roomCount} {roomCount === 1 ? 'Room / Studio' : `${roomCount} Rooms`}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={roomCount}
                  onChange={(e) => setRoomCount(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal/20 rounded-none appearance-none cursor-pointer accent-electric-orange"
                />
                <div className="flex justify-between text-[10px] font-mono text-charcoal/50 mt-1 uppercase">
                  <span>Studio / 1BR</span>
                  <span>2 - 3 Bedroom</span>
                  <span>4+ Bedroom Estate</span>
                </div>
              </div>

              {/* Estimate Calculation Result */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t-2 border-charcoal font-mono text-xs">
                <div className="p-4 bg-white border border-editorial-gray">
                  <span className="text-charcoal/50 uppercase block">RECOMMENDED TRUCK</span>
                  <strong className="text-charcoal text-sm">{roomCount <= 2 ? '20ft Air-Ride Van' : '26ft - 32ft Freight Van'}</strong>
                </div>

                <div className="p-4 bg-white border border-editorial-gray">
                  <span className="text-charcoal/50 uppercase block">CREW DISPATCH</span>
                  <strong className="text-charcoal text-sm">{roomCount <= 2 ? '2 Specialists' : `${Math.min(roomCount + 1, 6)} Specialists`}</strong>
                </div>

                <div className="p-4 bg-charcoal text-white border border-charcoal">
                  <span className="text-editorial-gray/60 uppercase block">ESTIMATED BASE</span>
                  <strong className="text-electric-orange text-base font-bold">~${Math.round(estimatedCost)} Flat</strong>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Protocol Checklist */}
      <section className="bg-ivory border-b-2 border-charcoal py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 border-b-2 border-charcoal pb-6">
            <span className="font-mono text-xs uppercase font-bold text-electric-orange block mb-2">
              STANDARD OPERATING PROCEDURE
            </span>
            <h2 className="text-4xl font-display font-black uppercase text-charcoal">
              WHAT IS INCLUDED IN EVERY {matchedService.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedService.features.map((feat, idx) => (
              <div key={idx} className="bg-white border-2 border-charcoal p-6 shadow-sharp">
                <span className="w-8 h-8 bg-charcoal text-white font-mono text-xs font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </span>
                <h4 className="font-display font-bold text-base uppercase text-charcoal mb-2">
                  {feat}
                </h4>
                <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                  Conducted according to strict European logistics chain-of-custody protocols with photo-documented verification.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <BigOrangeCTA />
    </>
  );
}
