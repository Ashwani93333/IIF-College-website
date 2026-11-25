import React from 'react';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import HeroSlider from '../components/public/HeroSlider';
import PlacementSection from '../components/public/PlacementSection';
import WhyChooseSection from '../components/public/WhyChooseSection';
import TestimonialsSection from '../components/public/TestimonialsSection';
import CampusTourSection from '../components/public/CampusTourSection';
import HighlightsSection from '../components/public/HighlightsSection';
import CombinedNoticesCcsuSection from '../components/public/CombinedNoticesCcsuSection';
import CampusLocationSection from '../components/public/CampusLocationSection';
import Footer from '../components/public/Footer';

export default function HomePage() {
  return (
    <div className="public-portal-root">
      {/* 1. Header & Navigation */}
      <Navbar />
      <MarqueeAlert />

      {/* 2. Hero Visual Slider (Auto-sliding Front Banners with Detailed Descriptions) */}
      <HeroSlider />

      {/* 3. Placement Highlights (Auto-Scrolling Corporate Logos + Metrics Bar) */}
      <PlacementSection />

      {/* 4. WHY IIFCCMS ? (A Community of Possibilities Mosaic with Dynamic Hover Photo Slide) */}
      <WhyChooseSection />

      {/* 5. TESTIMONIALS (Positioned directly below WHY IIFCCMS ?) */}
      <TestimonialsSection />

      {/* 6. Campus Tour & World-Class Infrastructure (Direct Compact YouTube Walkthrough) */}
      <CampusTourSection />

      {/* 7. Campus Highlights (Continuous Photo Slider Matrix) */}
      <HighlightsSection />

      {/* 8. Official Notice Board & CCSU Weblinks (Combined per Screenshot) */}
      <CombinedNoticesCcsuSection />

      {/* 9. Campus Location (Visit Our Greater Noida Campus) */}
      <CampusLocationSection />

      {/* 10. Clean Footer */}
      <Footer />
    </div>
  );
}
