import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  ChevronLeft, ChevronRight, Bell
} from 'lucide-react';

import banner1 from '../../assets/front-banners/IIF1.jpeg';
import banner2 from '../../assets/front-banners/IIF2.jpg';
import banner3 from '../../assets/front-banners/IIF3.jpg';
import banner4 from '../../assets/front-banners/IIF4.jpg';

export default function HeroSlider() {
  const { settings } = useApp();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 1,
      bgImage: banner1,
      tag: "CAMPUS OVERVIEW",
      caption: "IIFCCMS • Greater Noida (College Code: 472)"
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

      {/* Running Latest Alert Marquee Bar Docked at Footer of Banner Photos */}
      <div className="announcement-marquee-wrapper slider-marquee-docked">
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="marquee-badge">
            <Bell size={13} style={{ display: 'inline', marginRight: '4px' }} />
            LATEST ALERTS
          </div>
          <div className="marquee-scroller">
            <span className="marquee-text">{settings.announcementTicker}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
