import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Sparkles, RefreshCcw } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    moveDate: '',
    moveType: 'Residential Moving',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      from: '',
      to: '',
      moveDate: '',
      moveType: 'Residential Moving',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact-form" className="bg-ivory py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Split-Screen Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-electric-orange" />
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                  12 / DIRECT INITIATION
                </span>
              </div>

              {/* Large Headline */}
              <h2 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.88] mb-8">
                LET'S<br />
                <span className="text-electric-orange">GET MOVING.</span>
              </h2>

              <p className="font-body text-charcoal/80 text-lg leading-relaxed mb-8 max-w-md">
                Our logistics coordinators calculate binding flat rates based on exact volume and transit distance. Receive your tailored manifest within 4 business hours.
              </p>

              {/* Direct Reach Strip */}
              <div className="space-y-4 pt-6 border-t-2 border-charcoal/15 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-charcoal text-white flex items-center justify-center">
                    <Phone className="w-4 h-4 text-electric-orange" />
                  </div>
                  <div>
                    <span className="text-charcoal/60 uppercase block">CENTRAL DISPATCH</span>
                    <strong className="text-charcoal text-sm">+1 (800) 555-0148</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-charcoal text-white flex items-center justify-center">
                    <Mail className="w-4 h-4 text-electric-orange" />
                  </div>
                  <div>
                    <span className="text-charcoal/60 uppercase block">DIRECT EMAIL</span>
                    <strong className="text-charcoal text-sm">hello@shiftline.com</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Service Standard */}
            <div className="mt-12 p-4 bg-white border border-editorial-gray font-mono text-[11px] text-charcoal/70">
              ● All inquiries reviewed by senior logistics directors. 100% data confidentiality assured under SHIFTLINE Carrier Accord.
            </div>
          </div>

          {/* RIGHT: Quote Form with Animated Success Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-charcoal shadow-sharp-lg p-6 sm:p-10 relative">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between border-b border-editorial-gray pb-4 mb-6">
                      <span className="font-mono text-xs uppercase font-bold text-electric-orange">
                        REQUEST A BINDING QUOTE
                      </span>
                      <span className="font-mono text-xs text-charcoal/50">NO OBLIGATION</span>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="elena@example.com"
                          className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Move Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                          MOVE TYPE *
                        </label>
                        <select
                          name="moveType"
                          value={formData.moveType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                        >
                          <option value="Residential Moving">Residential Home Moving</option>
                          <option value="Commercial Moving">Commercial / Office Relocation</option>
                          <option value="Long-Distance Moving">Interstate Long-Distance</option>
                          <option value="Packing Services">White-Glove Packing Only</option>
                          <option value="Vault Storage">Vault Climate Storage</option>
                          <option value="Specialty Moving">Specialty (Piano / Art / Safe)</option>
                        </select>
                      </div>
                    </div>

                    {/* From & To */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                          MOVING FROM (CITY / ZIP) *
                        </label>
                        <input
                          type="text"
                          name="from"
                          required
                          value={formData.from}
                          onChange={handleChange}
                          placeholder="e.g. Chicago, IL 60608"
                          className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                          MOVING TO (CITY / ZIP) *
                        </label>
                        <input
                          type="text"
                          name="to"
                          required
                          value={formData.to}
                          onChange={handleChange}
                          placeholder="e.g. Austin, TX 78702"
                          className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                        />
                      </div>
                    </div>

                    {/* Move Date */}
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        TARGET MOVE DATE *
                      </label>
                      <input
                        type="date"
                        name="moveDate"
                        required
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                      />
                    </div>

                    {/* Message / Inventory Details */}
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        MESSAGE & SPECIAL ITEMS (OPTIONAL)
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify square footage, flight of stairs, elevators, or fragile items like grand pianos or large artwork..."
                        className="w-full px-4 py-3 bg-ivory/50 border-2 border-charcoal font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:bg-white focus:border-electric-orange transition-colors"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <MagneticButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-between"
                      >
                        <span>{isSubmitting ? 'Transmitting Manifest...' : 'Request My Quote'}</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </MagneticButton>
                    </div>
                  </motion.form>
                ) : (
                  /* Animated Confirmation Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-electric-orange text-white border-2 border-charcoal rounded-full flex items-center justify-center mx-auto shadow-sharp">
                      <CheckCircle className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-electric-orange">
                        DISPATCH LOGGED // REF: SHIFT-{Math.floor(100000 + Math.random() * 900000)}
                      </span>
                      <h3 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tight text-charcoal">
                        ✓ REQUEST RECEIVED
                      </h3>
                      <p className="font-body text-lg text-charcoal/80 max-w-md mx-auto leading-relaxed pt-2">
                        “Thanks. Your move is officially on the radar.”
                      </p>
                    </div>

                    <div className="bg-ivory p-6 border-2 border-charcoal shadow-sharp text-left max-w-lg mx-auto font-mono text-xs space-y-2 text-charcoal">
                      <div className="flex justify-between border-b border-editorial-gray pb-2">
                        <span className="text-charcoal/60">CLIENT:</span>
                        <strong>{formData.name || 'Valued Client'}</strong>
                      </div>
                      <div className="flex justify-between border-b border-editorial-gray pb-2">
                        <span className="text-charcoal/60">ROUTE:</span>
                        <strong>{formData.from || 'Origin'} → {formData.to || 'Destination'}</strong>
                      </div>
                      <div className="flex justify-between border-b border-editorial-gray pb-2">
                        <span className="text-charcoal/60">CATEGORY:</span>
                        <strong>{formData.moveType}</strong>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-charcoal/60">DISPATCH TIMELINE:</span>
                        <strong className="text-electric-orange">Coordinator Contact &lt; 4 Hours</strong>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal hover:text-electric-orange font-bold underline underline-offset-4"
                      >
                        <RefreshCcw className="w-3.5 h-3.5" />
                        <span>Submit Another Route Request</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
