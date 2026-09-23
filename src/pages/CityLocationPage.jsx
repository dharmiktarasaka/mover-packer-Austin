import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Phone, Building, ShieldCheck, Clock, Truck, Compass } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { locations } from '../data/locationsData';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function CityLocationPage() {
  const { city } = useParams();

  const hub = locations.find((l) => l.slug === city);

  if (!hub) {
    return <Navigate to="/locations" replace />;
  }

  return (
    <>
      <SEO
        title={`SHIFTLINE ${hub.city}, ${hub.state} — Terminal Hub & Logistics`}
        description={hub.summary}
      />

      {/* Breadcrumb */}
      <section className="bg-ivory border-b border-editorial-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal/70 hover:text-electric-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL TERMINAL HUBS</span>
          </Link>
        </div>
      </section>

      {/* City Hero */}
      <section className="bg-ivory border-b-2 border-charcoal pt-12 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-electric-orange" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
                  REGIONAL DISPATCH TERMINAL // {hub.region}
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9] mb-6">
                SHIFTLINE<br />
                <span className="text-electric-orange">{hub.city.toUpperCase()}, {hub.state}.</span>
              </h1>

              <p className="font-body text-charcoal/80 text-lg sm:text-xl max-w-xl leading-relaxed mb-8">
                {hub.summary}
              </p>

              {/* Hub Contact & Address Card */}
              <div className="p-6 bg-white border-2 border-charcoal shadow-sharp mb-8 space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-electric-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-charcoal/50 uppercase block text-[10px]">TERMINAL FACILITY ADDRESS:</span>
                    <strong className="text-charcoal text-sm">{hub.hubAddress}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-editorial-gray">
                  <Phone className="w-4 h-4 text-electric-orange flex-shrink-0" />
                  <div>
                    <span className="text-charcoal/50 uppercase block text-[10px]">DIRECT TERMINAL DESK:</span>
                    <a href={`tel:${hub.phone}`} className="text-charcoal text-sm font-bold hover:text-electric-orange">
                      {hub.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  to={`/contact?hub=${hub.slug}`}
                  variant="primary"
                  size="lg"
                  className="font-bold"
                >
                  <span>Book Move in {hub.city}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>

                <MagneticButton
                  to="/services"
                  variant="outline"
                  size="lg"
                  className="font-bold"
                >
                  <span>Service Catalog</span>
                </MagneticButton>
              </div>

            </div>

            {/* City Logistics Blueprint Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-charcoal text-white border-2 border-charcoal shadow-sharp-lg p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-charcoal-muted pb-4 mb-6">
                  <span className="font-mono text-xs uppercase font-bold text-electric-orange">
                    TERMINAL METRICS // {hub.city.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-editorial-gray/60">ACTIVE STATUS</span>
                </div>

                <div className="space-y-5 font-mono text-xs">
                  <div>
                    <span className="text-editorial-gray/60 block text-[10px] uppercase">LOCAL PERMIT ASSISTANCE</span>
                    <strong className="text-white text-sm block mt-0.5">{hub.permitAssistance}</strong>
                  </div>

                  <div>
                    <span className="text-editorial-gray/60 block text-[10px] uppercase">ELEVATOR & HIGH-RISE COMPLIANCE</span>
                    <strong className="text-white text-sm block mt-0.5">{hub.elevatorSpecs}</strong>
                  </div>

                  <div>
                    <span className="text-editorial-gray/60 block text-[10px] uppercase">AVERAGE TRANSIT CADENCE</span>
                    <strong className="text-white text-sm block mt-0.5">{hub.averageTransitDays}</strong>
                  </div>

                  <div>
                    <span className="text-editorial-gray/60 block text-[10px] uppercase">DEDICATED FLEET ASSETS</span>
                    <strong className="text-electric-orange text-sm block mt-0.5">
                      {hub.fleetUnits} Air-Ride Vans • {hub.activeCrews} W-2 Specialists
                    </strong>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-charcoal-muted">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-gray/60 block mb-2">
                    POPULAR DIRECT CORRIDORS FROM {hub.city.toUpperCase()}:
                  </span>
                  <div className="space-y-1.5 font-mono text-xs">
                    {hub.popularRoutes.map((route, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between p-2 bg-charcoal-light border border-charcoal-muted text-white">
                        <span>{route}</span>
                        <span className="text-electric-orange">DIRECT →</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Local Protocols */}
      <section className="bg-ivory py-16 border-b-2 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="font-mono text-xs uppercase font-bold text-electric-orange block mb-1">
              LOCAL JURISDICTION PROTOCOLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-charcoal">
              NAVIGATING {hub.city.toUpperCase()} WITH SURGICAL PRECISION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border-2 border-charcoal shadow-sharp">
              <Building className="w-6 h-6 text-electric-orange mb-3" />
              <h4 className="font-display font-bold text-lg uppercase text-charcoal mb-2">Building Management COIs</h4>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                We generate Certificate of Insurance (COI) documents with custom indemnification riders directly to your building management within 2 business hours.
              </p>
            </div>

            <div className="p-6 bg-white border-2 border-charcoal shadow-sharp">
              <Truck className="w-6 h-6 text-electric-orange mb-3" />
              <h4 className="font-display font-bold text-lg uppercase text-charcoal mb-2">Street Parking & Loading Permits</h4>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                Our local dispatch coordinators secure municipal curb permits, parking meter reservations, and police department oversized vehicle clearances.
              </p>
            </div>

            <div className="p-6 bg-white border-2 border-charcoal shadow-sharp">
              <ShieldCheck className="w-6 h-6 text-electric-orange mb-3" />
              <h4 className="font-display font-bold text-lg uppercase text-charcoal mb-2">Architectural Protection</h4>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                Elevator wall padding, threshold ram-board runners, and corner guards deployed immediately upon crew arrival at your {hub.city} property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BigOrangeCTA />
    </>
  );
}
