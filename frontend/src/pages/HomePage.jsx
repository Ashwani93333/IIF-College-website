import React, { useState } from 'react';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import HeroSlider from '../components/public/HeroSlider';
import PlacementSection from '../components/public/PlacementSection';
import WhyChooseSection from '../components/public/WhyChooseSection';
import CampusTourSection from '../components/public/CampusTourSection';
import OurAcademicsSection from '../components/public/OurAcademicsSection';
import HighlightsSection from '../components/public/HighlightsSection';
import CoursesSection from '../components/public/CoursesSection';
import AdmissionsSection from '../components/public/AdmissionsSection';
import CcsuWeblinksSection from '../components/public/CcsuWeblinksSection';
import NoticeBoard from '../components/public/NoticeBoard';
import TestimonialsSection from '../components/public/TestimonialsSection';
import Footer from '../components/public/Footer';

export default function HomePage() {
  const [prefillAdmissionData, setPrefillAdmissionData] = useState(null);

  const handleApplyWithCourse = (course) => {
    setPrefillAdmissionData({
      courseId: course.id,
      courseCode: course.code,
      courseTitle: course.title,
      calculatedFee: course.annualFee
    });
  };

  return (
    <div className="public-portal-root">
      {/* 1. Header & Navigation */}
      <Navbar />
      <MarqueeAlert />

      {/* 2. Hero Visual Slider */}
      <HeroSlider onOpenCourses={handleApplyWithCourse} />

      {/* 3. Placement Highlights (Moving Auto-Scrolling Company Logos + Metrics Bar) */}
      <PlacementSection />

      {/* 4. WHY IIF CCMS Section */}
      <WhyChooseSection />

      {/* 5. Campus Tour & Infrastructure (Point-wise details + YouTube video) */}
      <CampusTourSection />

      {/* 6. OUR ACADEMICS */}
      <OurAcademicsSection />

      {/* 7. Campus Highlights */}
      <HighlightsSection />

      {/* 8. Undergraduate Degree Programs */}
      <CoursesSection onApplyWithCourse={handleApplyWithCourse} />

      {/* 9. Online Admissions & Merit Form */}
      <AdmissionsSection prefillData={prefillAdmissionData} />

      {/* 10. CCS University Weblinks Section */}
      <CcsuWeblinksSection />

      {/* 11. Notice Board & Circulars */}
      <NoticeBoard />

      {/* 12. Auto-Sliding Testimonials Carousel */}
      <TestimonialsSection />

      {/* 13. Clean Footer */}
      <Footer />
    </div>
  );
}
