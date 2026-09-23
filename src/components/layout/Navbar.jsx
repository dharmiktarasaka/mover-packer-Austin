import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Coverage', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b-2 border-charcoal/15 shadow-sm py-3.5'
            : 'bg-ivory border-b border-editorial-gray py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LEFT: SHIFTLINE Logo + Branded Indicator */}
            <div className="flex items-center gap-5">
              <Link to="/" className="group flex items-center gap-2">
                <span className="w-4 h-4 bg-electric-orange inline-block transform transition-transform group-hover:rotate-90 duration-300" />
                <span className="font-display font-black text-2xl tracking-tighter text-charcoal">
                  SHIFTLINE
                </span>
              </Link>

              {/* Tiny Orange Status Indicator */}
              <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-white border border-editorial-gray font-mono text-[11px] text-charcoal font-medium tracking-wider">
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-pulse" />
                <span>AUSTIN, TX // 480 E RIVERSIDE</span>
              </div>
            </div>

            {/* CENTER: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 font-display text-sm font-semibold tracking-tight transition-colors relative group ${
                      isActive ? 'text-electric-orange' : 'text-charcoal hover:text-electric-orange'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-electric-orange" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Phone + Get a Quote Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:5125550173"
                className="flex items-center gap-2 font-mono text-xs font-bold text-charcoal hover:text-electric-orange transition-colors px-3 py-2 border border-editorial-gray bg-white/70"
                aria-label="Call Shiftline Movers Austin"
              >
                <Phone className="w-3.5 h-3.5 text-electric-orange" />
                <span>(512) 555-0173</span>
              </a>

              <MagneticButton
                to="/contact"
                variant="primary"
                size="sm"
                className="font-bold"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 bg-white border-2 border-charcoal text-charcoal shadow-sharp"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        links={navLinks} 
      />
    </>
  );
}
