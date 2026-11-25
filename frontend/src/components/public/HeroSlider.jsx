import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ChevronLeft, ChevronRight, ArrowRight, Award, 
  GraduationCap, Building2, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function HeroSlider({ onOpenCourses }) {
  const { courses, settings } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 1,
      badge: "IIFians BORN TO LEAD • ESTD. 1987",
      titlePrefix: "IIFian at",
      titleMain: "GLOBAL INVESTMENT BANKING MISSION",
      alumniName: "KUSHAGRA SRIVASTAVA",
      alumniRole: "Senior Financial Consultant",
      alumniCompany: "DHR International, Toronto (Canada)",
      alumniProgram: "BBA Alumnus (College Code: 454)",
      desc: "Empowering visionary corporate leaders and finance consultants with 35+ years of distinguished institutional legacy in Knowledge Park III, Greater Noida.",
      bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80",
      ctaPrimaryText: "Apply for Admission 2026-27",
      ctaPrimaryAction: "admissions",
      ctaSecondaryText: "Explore Courses & Syllabi",
      ctaSecondaryAction: "programs",
      accentTag: "GLOBAL PLACEMENT EXCELLENCE"
    },
    {
      id: 2,
      badge: "MERIT RECOGNITION • INSTITUTIONAL SCHOLARSHIPS",
      titlePrefix: "Up to",
      titleMain: "25% TUITION SCHOLARSHIP SLABS",
      alumniName: "MERIT SCHOLARSHIP SCHEME",
      alumniRole: "Tuition Concession for 85%+ Board Achievers",
      alumniCompany: "Indian Institute of Finance Academic Secretariat (Estd. 1987)",
      alumniProgram: "Applicable for BBA, B.Com, and B.A.",
      desc: "Transparent academic fee structure with zero capitation charges. Direct merit assistance recognizing high achievers in CBSE, ICSE, and State boards.",
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
      ctaPrimaryText: "Calculate Your Scholarship",
      ctaPrimaryAction: "fee-calculator",
      ctaSecondaryText: "View Fee Breakdown",
      ctaSecondaryAction: "programs",
      accentTag: "TRANSPARENT EDUCATION"
    },
    {
      id: 3,
      badge: "KNOWLEDGE PARK III • GREATER NOIDA",
      titlePrefix: "Expansive",
      titleMain: "6.47-ACRE WORLD CLASS CAMPUS",
      alumniName: "100% AIR-CONDITIONED SMART LECTURE THEATRES",
      alumniRole: "IIF Central Library with 55,000+ Volumes",
      alumniCompany: "High-Speed Gigabit Computer & Accounting Labs",
      alumniProgram: "Lush Green Institutional Corridor in Delhi NCR",
      desc: "State-of-the-art amphitheatre classrooms, high-speed fiber connectivity, DELNET research databases, and sports arenas built for holistic excellence.",
      bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
      ctaPrimaryText: "Campus Infrastructure Tour",
      ctaPrimaryAction: "gallery",
      ctaSecondaryText: "Contact Secretariat",
      ctaSecondaryAction: "contact",
      accentTag: "MODERN INFRASTRUCTURE"
    },
    {
      id: 4,
      badge: "CCSU MEERUT AFFILIATED • NAAC A++ GRADE",
      titlePrefix: "NEP 2020 Aligned",
      titleMain: "UNDERGRADUATE DEGREE EXCELLENCE",
      alumniName: "BBA (454) | B.COM (472) | B.A. (478)",
      alumniRole: "Corporate Internship & Skill Development Curriculum",
      alumniCompany: "Direct Chaudhary Charan Singh University Degree",
      alumniProgram: "Regular Full-Time 3-Year Degree Programs",
      desc: "Rigorous commerce and management fundamentals integrated with modern business analytics, live internships, and expert faculty mentorship.",
      bgImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80",
      ctaPrimaryText: "Apply Online Now",
      ctaPrimaryAction: "admissions",
      ctaSecondaryText: "Download Course Scheme",
      ctaSecondaryAction: "programs",
      accentTag: "ACADEMIC PRESTIGE"
    }
  ];

  // Auto-scroll slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Touch gesture support for mobile swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="hero-fullscreen-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="hero"
    >
      {/* Slides Container */}
      <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="slider-slide" style={{ backgroundImage: `url(${slide.bgImage})` }}>
            <div className="slider-gradient-overlay" />
            
            <div className="container slider-content-container">
              <div className="slider-text-wrapper">
                {/* Top Badge */}
                <div className="slider-pre-badge">
                  <Sparkles size={14} />
                  <span>{slide.badge}</span>
                </div>

                {/* Big Heading */}
                <h2 className="slider-heading">
                  <span className="prefix-text">{slide.titlePrefix} </span>
                  <span className="main-highlight">{slide.titleMain}</span>
                </h2>

                {/* Alumni / Feature Card Spotlight (Matching Screenshot style) */}
                <div className="slider-spotlight-card">
                  <div className="spotlight-header">
                    <span className="spotlight-tag">{slide.accentTag}</span>
                    <span className="spotlight-program">{slide.alumniProgram}</span>
                  </div>
                  <h3 className="spotlight-name">{slide.alumniName}</h3>
                  <div className="spotlight-role">{slide.alumniRole}</div>
                  <div className="spotlight-company">{slide.alumniCompany}</div>
                </div>

                <p className="slider-lead-desc">{slide.desc}</p>

                {/* Navigation CTA Buttons */}
                <div className="slider-cta-row">
                  <button 
                    onClick={() => scrollTo(slide.ctaPrimaryAction)} 
                    className="btn-slider-primary"
                  >
                    {slide.ctaPrimaryText} <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => scrollTo(slide.ctaSecondaryAction)} 
                    className="btn-slider-secondary"
                  >
                    {slide.ctaSecondaryText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Dots Navigation (Matching Screenshot layout on Left) */}
      <div className="slider-dots-vertical">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot-btn ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button 
        className="slider-nav-arrow prev" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        className="slider-nav-arrow next" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
