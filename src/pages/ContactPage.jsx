import React from 'react';
import SEO from '../components/ui/SEO';
import ContactFormSection from '../components/sections/ContactFormSection';
import FAQAccordion from '../components/sections/FAQAccordion';
import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Get a Binding Quote — Central Dispatch & Contact"
        description="Initiate your residential or corporate relocation with SHIFTLINE. Guaranteed binding estimates, dedicated coordinators, and fast response times."
      />

      {/* Main Split-Screen Contact Section */}
      <ContactFormSection />

      {/* Direct Dispatch Hours & Support Details */}
      <section className="bg-white border-y-2 border-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-6 bg-ivory border-2 border-charcoal shadow-sharp">
              <Clock className="w-5 h-5 text-electric-orange mb-3" />
              <span className="text-charcoal/50 uppercase block text-[10px]">DISPATCH OPERATING HOURS</span>
              <strong className="text-charcoal text-sm block mt-1">24/7/365 Non-Stop</strong>
              <p className="text-charcoal/70 text-[11px] mt-2">Continuous telematics support and driver routing desks.</p>
            </div>

            <div className="p-6 bg-ivory border-2 border-charcoal shadow-sharp">
              <Phone className="w-5 h-5 text-electric-orange mb-3" />
              <span className="text-charcoal/50 uppercase block text-[10px]">TOLL-FREE INQUIRIES</span>
              <strong className="text-charcoal text-sm block mt-1">+1 (800) 555-0148</strong>
              <p className="text-charcoal/70 text-[11px] mt-2">Immediate connection to certified move planners.</p>
            </div>

            <div className="p-6 bg-ivory border-2 border-charcoal shadow-sharp">
              <Mail className="w-5 h-5 text-electric-orange mb-3" />
              <span className="text-charcoal/50 uppercase block text-[10px]">DIGITAL ESTIMATES</span>
              <strong className="text-charcoal text-sm block mt-1">hello@shiftline.com</strong>
              <p className="text-charcoal/70 text-[11px] mt-2">Send floorplans, photos, or architectural blueprints.</p>
            </div>

            <div className="p-6 bg-ivory border-2 border-charcoal shadow-sharp">
              <ShieldCheck className="w-5 h-5 text-electric-orange mb-3" />
              <span className="text-charcoal/50 uppercase block text-[10px]">BINDING QUOTE PLEDGE</span>
              <strong className="text-charcoal text-sm block mt-1">Zero Hidden Fees</strong>
              <p className="text-charcoal/70 text-[11px] mt-2">The price on your agreement is the exact price you pay.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion />
    </>
  );
}
