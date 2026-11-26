import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Award, GraduationCap, Mail } from 'lucide-react';

export default function FacultySection() {
  const { faculty } = useApp();
  const scrollRef = useRef(null);

  // Fallback or enhanced faculty list
  const facultyMembers = faculty && faculty.length > 0 ? faculty : [
    {
      id: 1,
      name: "Dr. J. D. Agarwal",
      designation: "Founder Chairman & Chief Mentor",
      department: "Executive Council",
      qualifications: "Ph.D. (Economics), Eminent Economist & Author",
      experience: "45+ Years",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Pioneer in financial education in India with 35+ years group leadership. Authored over 18 books and edited over 100 volumes of Finance India."
    },
    {
      id: 2,
      name: "Prof. Aman Agarwal",
      designation: "Professor of Finance & Director",
      department: "Management Studies",
      qualifications: "Ph.D. in Finance, M.S. (USA)",
      experience: "25+ Years",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Renowned scholar in macro-finance and corporate strategy with extensive research publications across leading international journals."
    },
    {
      id: 3,
      name: "Dr. Ritu Saxena",
      designation: "Associate Professor & HOD Commerce",
      department: "Commerce",
      qualifications: "Ph.D. (Commerce), M.Com, UGC-NET",
      experience: "16+ Years",
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Expert in Corporate Accounting, Auditing Standards, and Financial Regulations under NEP 2020 curriculum guidelines."
    },
    {
      id: 4,
      name: "Prof. Sandeep Sharma",
      designation: "Assistant Professor - Marketing & HR",
      department: "Management Studies",
      qualifications: "MBA (Marketing), UGC-NET",
      experience: "9+ Years",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Specializes in Consumer Behavior, Brand Strategy, and Digital Business Channels. Mentors students for corporate industry readiness."
    },
    {
      id: 5,
      name: "Dr. Priya Verma",
      designation: "Assistant Professor - Economics & Analytics",
      department: "Humanities & Arts",
      qualifications: "Ph.D. (Economics), UGC-NET JRF",
      experience: "8+ Years",
      photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Focuses on Econometrics, Public Policy, and Managerial Economics, actively guiding undergraduate research dissertations."
    }
  ];

  // Smooth sliding matching TestimonialsSection
  const handlePrev = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.faculty-multi-card');
      const cardWidth = card ? card.offsetWidth + 20 : 280;
      if (scrollRef.current.scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.faculty-multi-card');
      const cardWidth = card ? card.offsetWidth + 20 : 280;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10;
      if (scrollRef.current.scrollLeft >= maxScroll) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section faculty-multi-section" id="faculty" style={{ background: 'var(--bg-beige, #f7f3ec)' }}>
      <div className="container">
        {/* Header with Title on Left and Nav Arrows on Right (Matching Testimonials UI) */}
        <div className="testimonials-header-row">
          <div className="title-block">
            <span className="section-tag" style={{ display: 'inline-block', marginBottom: '0.35rem' }}>
              Academic Mentorship &amp; Leadership
            </span>
            <h2 className="testimonials-main-title">DISTINGUISHED FACULTY</h2>
          </div>

          {/* Top Right Navigation Arrows: ← / → */}
          <div className="testimonials-nav-controls">
            <button 
              onClick={handlePrev} 
              className="arrow-nav-btn" 
              aria-label="Previous Faculty Member"
              title="Previous Faculty"
            >
              ←
            </button>
            <span className="arrow-divider">/</span>
            <button 
              onClick={handleNext} 
              className="arrow-nav-btn" 
              aria-label="Next Faculty Member"
              title="Next Faculty"
            >
              →
            </button>
          </div>
        </div>

        {/* Multi-Card Horizontal Grid Carousel Matching Testimonials UI */}
        <div className="testimonials-cards-wrapper" ref={scrollRef}>
          <div className="testimonials-cards-slider">
            {facultyMembers.map((item) => (
              <div key={item.id} className="testimonial-multi-card faculty-multi-card">
                {/* 1. Category Tag at Top */}
                <div className="card-top-category">
                  <span className="cat-label cat-faculty">
                    {item.department ? item.department.replace("Department of ", "") : "Faculty"}
                  </span>
                </div>

                {/* 2. Photo */}
                <div className="card-photo-container">
                  <img 
                    src={item.photoUrl} 
                    alt={item.name} 
                    className="card-portrait-img"
                    loading="lazy" 
                  />
                </div>

                {/* 3. Name & Role */}
                <div className="card-person-info">
                  <h3 className="person-name">{item.name}</h3>
                  <p className="person-role">{item.designation}</p>
                  <p className="person-qualifications" style={{ fontSize: '0.75rem', color: '#c59b27', fontWeight: '700', marginTop: '0.15rem' }}>
                    {item.qualifications}
                  </p>
                </div>

                {/* 4. Bio Snippet */}
                <div className="card-quote-snippet">
                  <p className="quote-body">
                    {item.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
