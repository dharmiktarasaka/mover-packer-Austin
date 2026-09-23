import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import HowItWorksPage from './pages/HowItWorksPage';
import LocationsPage from './pages/LocationsPage';
import CityLocationPage from './pages/CityLocationPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import MovingChecklistPage from './pages/MovingChecklistPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Helper to scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-body antialiased">
      <ScrollToTop />
      
      {/* Top Sticky Branded Navigation */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          
          {/* How It Works */}
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          
          {/* Locations & City Hubs */}
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:city" element={<CityLocationPage />} />
          
          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Resources & Checklist */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/moving-checklist" element={<MovingChecklistPage />} />
          
          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Modern Editorial Multi-Column Footer */}
      <Footer />
    </div>
  );
}
