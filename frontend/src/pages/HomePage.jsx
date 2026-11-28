import React from 'react';
import Navbar from '../components/public/Navbar';
import HeroSlider from '../components/public/HeroSlider';
import CoursesSection from '../components/public/CoursesSection';
import WhyChooseSection from '../components/public/WhyChooseSection';
import FacultySection from '../components/public/FacultySection';
import CampusTourSection from '../components/public/CampusTourSection';
import HighlightsSection from '../components/public/HighlightsSection';
import CombinedNoticesCcsuSection from '../components/public/CombinedNoticesCcsuSection';
import TestimonialsSection from '../components/public/TestimonialsSection';
import LandingPlacementSection from '../components/public/LandingPlacementSection';
import CampusLocationSection from '../components/public/CampusLocationSection';
import Footer from '../components/public/Footer';

export default function HomePage() {
  return (
    <div className="public-portal-root">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Visual Slider (Auto-sliding Front Banners with Footer Marquee Alert) */}
      <HeroSlider />

      {/* 3. Academic Programs & Courses Offering (B.Com, BBA, B.A. with In-Depth Fee Details) */}
      <CoursesSection />

      {/* 4. WHY IIFCCMS ? (A Community of Possibilities with Campus Photos & Formatted Key Points) */}
      <WhyChooseSection />

      {/* 5. FACULTY MENTORSHIP & LEADERSHIP (Positioned Directly Below Why IIFCCMS) */}
      <FacultySection />

      {/* 6. Campus Tour & World-Class Infrastructure (Horizontally Aligned Walkthrough & Highlights) */}
      <CampusTourSection />

      {/* 7. Campus Highlights (Continuous Photo Slider Matrix) */}
      <HighlightsSection />

      {/* 8. Official Notice Board & CCSU Weblinks (Notification Section) */}
      <CombinedNoticesCcsuSection />

      {/* 9. TESTIMONIALS (Positioned Just After Notification Section) */}
      <TestimonialsSection />

      {/* 10. PLACEMENTS (Minimal Career Assistance & Placement Highlights) */}
      <LandingPlacementSection />

      {/* 11. Campus Location (Visit Our Greater Noida Campus) */}
      <CampusLocationSection />

      {/* 12. Clean Footer */}
      <Footer />
    </div>
  );
}
