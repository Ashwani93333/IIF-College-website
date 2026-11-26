import React from 'react';
import Navbar from '../components/public/Navbar';
import HeroSlider from '../components/public/HeroSlider';
import CoursesSection from '../components/public/CoursesSection';
import WhyChooseSection from '../components/public/WhyChooseSection';
import FacultySection from '../components/public/FacultySection';
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

      {/* 2. Hero Visual Slider (Auto-sliding Front Banners with Footer Marquee Alert) */}
      <HeroSlider />

      {/* 3. Academic Programs & Courses Offering (B.Com, BBA, B.A. with In-Depth Fee Details) */}
      <CoursesSection />

      {/* 4. WHY IIFCCMS ? (A Community of Possibilities with Campus Photos & Formatted Key Points) */}
      <WhyChooseSection />

      {/* 5. FACULTY MENTORSHIP & LEADERSHIP (Positioned Directly Below Why IIFCCMS) */}
      <FacultySection />

      {/* 6. TESTIMONIALS (Positioned Directly Below Faculty Section) */}
      <TestimonialsSection />

      {/* 7. Campus Tour & World-Class Infrastructure (Horizontally Aligned Walkthrough & Highlights) */}
      <CampusTourSection />

      {/* 8. Campus Highlights (Continuous Photo Slider Matrix) */}
      <HighlightsSection />

      {/* 9. Official Notice Board & CCSU Weblinks (Horizontally Aligned Columns) */}
      <CombinedNoticesCcsuSection />

      {/* 10. Campus Location (Visit Our Greater Noida Campus) */}
      <CampusLocationSection />

      {/* 11. Clean Footer */}
      <Footer />
    </div>
  );
}
