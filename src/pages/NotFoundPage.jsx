import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, AlertCircle } from 'lucide-react';
import SEO from '../components/ui/SEO';
import MagneticButton from '../components/ui/MagneticButton';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Route Not Found" />

      <section className="bg-ivory min-h-[70vh] flex items-center justify-center py-20 border-b-2 border-charcoal relative">
        <div className="max-w-xl mx-auto px-4 text-center">
          
          <div className="w-16 h-16 bg-charcoal text-white border-2 border-charcoal flex items-center justify-center mx-auto mb-6 shadow-sharp">
            <Compass className="w-8 h-8 text-electric-orange animate-spin" style={{ animationDuration: '10s' }} />
          </div>

          <span className="font-mono text-xs uppercase font-bold text-electric-orange tracking-widest block mb-2">
            ERROR 404 // DISPATCH CORRIDOR UNKNOWN
          </span>

          <h1 className="text-6xl sm:text-8xl font-display font-black tracking-tighter uppercase text-charcoal mb-4">
            OFF ROUTE.
          </h1>

          <p className="font-body text-charcoal/80 text-base leading-relaxed mb-8">
            The waypoint or destination you requested does not exist on our active logistics manifest. Return to the terminal hub to recalculate your move.
          </p>

          <MagneticButton
            to="/"
            variant="primary"
            size="lg"
            className="font-bold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Return to Dispatch Terminal</span>
          </MagneticButton>

        </div>
      </section>
    </>
  );
}
