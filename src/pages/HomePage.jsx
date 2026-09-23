import React from 'react';
import SEO from '../components/ui/SEO';
import Hero from '../components/sections/Hero';
import Marquee from '../components/ui/Marquee';
import AustinDifferences from '../components/sections/AustinDifferences';
import CrewTradeoffsSection from '../components/sections/CrewTradeoffsSection';
import MoveTypesAustin from '../components/sections/MoveTypesAustin';
import HeatCheckSection from '../components/sections/HeatCheckSection';
import PackingComparisonSection from '../components/sections/PackingComparisonSection';
import AustinPricingSection from '../components/sections/AustinPricingSection';
import AustinNeighborhoodsSection from '../components/sections/AustinNeighborhoodsSection';
import ShiftlineDifferenceSection from '../components/sections/ShiftlineDifferenceSection';
import QuickQuoteWidget from '../components/ui/QuickQuoteWidget';
import TrustStats from '../components/sections/TrustStats';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesSection from '../components/sections/ServicesSection';
import TaggedImage from '../components/ui/TaggedImage';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import RouteVisualization from '../components/ui/RouteVisualization';
import FleetStorytelling from '../components/sections/FleetStorytelling';
import CustomerStories from '../components/sections/CustomerStories';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import MovingGuidesSection from '../components/sections/MovingGuidesSection';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';
import FAQAccordion from '../components/sections/FAQAccordion';
import ContactFormSection from '../components/sections/ContactFormSection';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Shiftline Movers & Packers Austin | Licensed Local, Long-Distance & Commercial Movers"
        description="Shiftline Movers Packers Austin TX runs binding, in-home or video-based estimates on every move — no reshuffled pricing once the truck is parked."
      />

      {/* 01. Hero Section (Austin Authority Headline & Narrative) */}
      <Hero />

      {/* 02. Moving Marquee Ticker */}
      <Marquee
        items={['AUSTIN LOCAL', 'LONG-DISTANCE', 'COMMERCIAL TECH', 'HOA CLEARANCE', 'HEAT CERTIFIED', 'BINDING ESTIMATES']}
        speed="normal"
        theme="ivory"
      />

      {/* 03. Why Austin Moves Aren’t Like Moves Anywhere Else (4 Physical Factors) */}
      <AustinDifferences />

      {/* 04. Is the Cheapest Austin Mover Actually the Cheapest? (Crew Size Trade-offs) */}
      <CrewTradeoffsSection />

      {/* 05. Local, Long-Distance, or Commercial: Which Austin Move Do You Need? */}
      <MoveTypesAustin />

      {/* 06. The H.E.A.T. Check: Vetting Any Austin Mover in Under 10 Minutes */}
      <HeatCheckSection />

      {/* 07. Full-Service Packing vs. Self-Pack: When Each Pays Off in Austin */}
      <PackingComparisonSection />

      {/* 08. How Much Do Movers Cost in Austin? (Transparent Benchmarks Table) */}
      <AustinPricingSection />

      {/* 09. Austin Neighborhoods & Areas We Serve (14 Metro Hubs) */}
      <AustinNeighborhoodsSection />

      {/* 10. What Makes Shiftline Different (5 Guarantees) */}
      <ShiftlineDifferenceSection />

      {/* 11. Quick Quote Tool Widget */}
      <QuickQuoteWidget />

      {/* 12. Trust Statistics Horizontal Strip */}
      <TrustStats />

      {/* 13. The SHIFTLINE Approach Split Collage */}
      <ApproachSection />

      {/* 14. What We Move (Interactive Numbered Service List) */}
      <ServicesSection />

      {/* 15. Interactive Service Image (Tagged Logistics & Packaging Scene) */}
      <TaggedImage />

      {/* 16. How The Move Moves (5-Step Horizontal Process) */}
      <ProcessTimeline />

      {/* 17. Route Visualization (Animated SVG Route Canvas) */}
      <RouteVisualization />

      {/* 18. Moving Truck Visual Storytelling Showcase */}
      <FleetStorytelling />

      {/* 19. Customer Stories Editorial Magazine Showcase */}
      <CustomerStories />

      {/* 20. Before / After Interactive Draggable Comparison Slider */}
      <BeforeAfterSlider />

      {/* 21. Moving Guides Content Cards */}
      <MovingGuidesSection />

      {/* 22. Huge Electric Orange Quote CTA Banner */}
      <BigOrangeCTA />

      {/* 23. Clarity First FAQ Accordion */}
      <FAQAccordion />

      {/* 24. Final Split-Screen Contact & Quote Form */}
      <ContactFormSection />
    </>
  );
}
