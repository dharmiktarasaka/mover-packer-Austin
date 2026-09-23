import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function MobileNav({ isOpen, onClose, links }) {
  const containerVariants = {
    closed: { opacity: 0, x: '100%' },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.25, ease: 'easeIn' }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="closed"
          animate="open"
          exit="exit"
          className="fixed inset-0 z-50 bg-ivory flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b-2 border-charcoal pb-6">
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <span className="w-4 h-4 bg-electric-orange inline-block" />
              <span className="font-display font-black text-2xl tracking-tighter text-charcoal">
                SHIFTLINE
              </span>
            </Link>

            <button
              onClick={onClose}
              className="p-3 bg-charcoal text-white border-2 border-charcoal shadow-sharp"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Editorial Menu Links */}
          <div className="py-8 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50 block">
              // SITE DIRECTORY
            </span>

            {links.map((link, idx) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-2 border-b border-editorial-gray"
                >
                  <span className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tighter text-charcoal group-hover:text-electric-orange transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-charcoal/40 group-hover:text-electric-orange">
                    0{idx + 1} →
                  </span>
                </Link>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-2">
              <Link
                to="/resources/moving-checklist"
                onClick={onClose}
                className="group flex items-baseline justify-between py-2 border-b border-editorial-gray"
              >
                <span className="font-display font-black text-2xl uppercase tracking-tighter text-charcoal group-hover:text-electric-orange transition-colors">
                  Interactive Checklist
                </span>
                <span className="font-mono text-xs text-electric-orange font-bold">
                  TOOL →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Actions & Dispatch Contacts */}
          <div className="pt-6 border-t-2 border-charcoal space-y-6">
            <MagneticButton
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-between"
              onClick={onClose}
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </MagneticButton>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-charcoal">
              <a href="tel:5125550173" className="flex items-center gap-2 hover:text-electric-orange">
                <Phone className="w-4 h-4 text-electric-orange" />
                <span>(512) 555-0173</span>
              </a>
              <a href="mailto:austin@shiftlinemoversexample.com" className="flex items-center gap-2 hover:text-electric-orange">
                <Mail className="w-4 h-4 text-electric-orange" />
                <span>austin@shiftlinemoversexample.com</span>
              </a>
            </div>

            <div className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest pt-2">
              ● Shiftline Movers Packers Austin TX // 480 E Riverside Dr
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
