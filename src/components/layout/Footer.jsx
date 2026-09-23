import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white border-t-2 border-charcoal pt-16 lg:pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 grid-lines-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Massive Statement & Back to Top */}
        <div className="border-b-2 border-charcoal-muted pb-12 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3.5 h-3.5 bg-electric-orange inline-block" />
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                SHIFTLINE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-white leading-none">
              MOVING MADE SIMPLE.
            </h2>
            <p className="font-body text-editorial-gray/80 text-base sm:text-lg mt-4 max-w-xl">
              From one address to the next, we keep everything moving with European precision, dedicated air-ride fleets, and zero stress.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start lg:self-end flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-electric-orange border border-charcoal-muted p-3 bg-charcoal-light transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUpRight className="w-4 h-4 text-electric-orange" />
          </button>
        </div>

        {/* Multi-Column Link Architecture */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-charcoal-muted">
          
          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
              SERVICES
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-editorial-gray">
              <li>
                <Link to="/services/residential-moving" className="hover:text-white transition-colors">
                  Residential Moving
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-moving" className="hover:text-white transition-colors">
                  Commercial Relocation
                </Link>
              </li>
              <li>
                <Link to="/services/long-distance-moving" className="hover:text-white transition-colors">
                  Long-Distance Lines
                </Link>
              </li>
              <li>
                <Link to="/services/packing" className="hover:text-white transition-colors">
                  Packing & Crating
                </Link>
              </li>
              <li>
                <Link to="/services/storage" className="hover:text-white transition-colors">
                  Vault Storage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-electric-orange hover:underline text-xs font-mono uppercase block pt-1">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
              COMPANY
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-editorial-gray">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About SHIFTLINE
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  Coverage & Hubs
                </Link>
              </li>
              <li>
                <Link to="/about#fleet" className="hover:text-white transition-colors">
                  Fleet Specs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Careers & Drivers
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Hubs Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
              TERMINAL HUBS
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-editorial-gray">
              <li>
                <Link to="/locations/chicago" className="hover:text-white transition-colors">
                  Chicago Terminal (ORD)
                </Link>
              </li>
              <li>
                <Link to="/locations/austin" className="hover:text-white transition-colors">
                  Austin Corridor (AUS)
                </Link>
              </li>
              <li>
                <Link to="/locations/denver" className="hover:text-white transition-colors">
                  Denver Regional (DEN)
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  New York • Los Angeles
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  Miami • Dallas • Seattle
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-editorial-gray">
              <li>
                <Link to="/resources/moving-checklist" className="hover:text-white transition-colors font-semibold text-white">
                  8-Week Moving Checklist
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Packing Preparation
                </Link>
              </li>
              <li>
                <Link to="/resources#faq" className="hover:text-white transition-colors">
                  Moving FAQs
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Valuation & Claims
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Instant Quote Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Dispatch Contact */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-electric-orange font-bold">
              AUSTIN DISPATCH DESK
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <a
                href="tel:5125550173"
                className="flex items-center gap-2 text-white hover:text-electric-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-electric-orange" />
                <span>(512) 555-0173</span>
              </a>

              <a
                href="mailto:austin@shiftlinemoversexample.com"
                className="flex items-center gap-2 text-white hover:text-electric-orange transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-electric-orange" />
                <span>austin@shiftlinemoversexample.com</span>
              </a>

              <div className="pt-2 text-[11px] text-editorial-gray/80 leading-normal">
                <span className="text-white font-bold block mb-0.5">Shiftline Movers Packers Austin TX</span>
                480 E Riverside Drive, Suite 210<br />
                Austin, TX 78704<br />
                Licensed & Bonded Texas Movers
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-editorial-gray/60">
          <div>
            © {new Date().getFullYear()} SHIFTLINE LOGISTICS INC. ALL RIGHTS RESERVED.
          </div>
          <div>
           @ DEVELOPED BY RANUPATELWEBEXPERT
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>/</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Carriage</Link>
            <span>/</span>
            <span className="text-electric-orange">ISO 9001:2015 CERTIFIED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
