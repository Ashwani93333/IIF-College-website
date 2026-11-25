import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, ArrowRight, ExternalLink, 
  Sparkles, Compass, GraduationCap 
} from 'lucide-react';

import banner1 from '../../assets/front-banners/IIF1.jpeg';
import banner2 from '../../assets/front-banners/IIF2.jpg';
import banner3 from '../../assets/front-banners/IIF3.jpg';
import banner4 from '../../assets/front-banners/IIF4.jpg';

export default function HeroSlider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 1,
      bgImage: banner1,
      tag: "CAMPUS OVERVIEW",
      caption: "IIF College of Commerce & Management Studies • Greater Noida (Code: 472)"
    },
    {
      id: 2,
      bgImage: banner2,
      tag: "SMART INFRASTRUCTURE",
      caption: "Expansive 6.47-Acre Lush Green Campus & Modern Academic Blocks"
    },
    {
      id: 3,
      bgImage: banner3,
      tag: "ACADEMIC OFFERINGS",
      caption: "Undergraduate Degree Programs • B.Com | B.B.A | B.A (NEP 2020)"
    },
    {
      id: 4,
      bgImage: banner4,
      tag: "CAREER LAUNCHPAD",
      caption: "Corporate Resource Centre & Marquee Industry Recruitment Partnerships"
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="hero-fullscreen-slider clear-view"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="hero"
    >
      {/* Slides Container - 100% Clear Pictures Without Heavy Text Overlays */}
      <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="slider-slide clear-photo-slide" 
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-nav-arrow prev" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={26} />
      </button>
      <button 
        className="slider-nav-arrow next" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={26} />
      </button>

      {/* Minimal Footer Strip with Clean Picture Caption & Redirect Links */}
      <div className="slider-minimal-bottom-bar">
        <div className="container slider-footer-inner">
          {/* Left: Minimal Caption */}
          <div className="slider-minimal-info">
            <span className="slider-minimal-tag">
              {slides[currentSlide].tag}
            </span>
            <span className="slider-minimal-divider">|</span>
            <span className="slider-minimal-caption">
              {slides[currentSlide].caption}
            </span>
          </div>

          {/* Center: Slide Indicators */}
          <div className="slider-dots-horizontal">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot-btn ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right: Minimal Redirect Links */}
          <div className="slider-minimal-redirects">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSddLOq1Hb3lHuFFxbGe1TQpZ_zY9qnxqIp9Nm8sEpegMb_3oQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slider-apply"
              style={{ textDecoration: 'none' }}
            >
              <Sparkles size={14} />
              <span>Apply Online 2026-27</span>
            </a>

            <button 
              onClick={() => navigate('/courses')}
              className="btn-slider-link"
            >
              <GraduationCap size={15} />
              <span>Courses</span>
            </button>

            <button 
              onClick={() => navigate('/facilities?tab=campus-tour')}
              className="btn-slider-link"
            >
              <Compass size={15} />
              <span>Campus Tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
