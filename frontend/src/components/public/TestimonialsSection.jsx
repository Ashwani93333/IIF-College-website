import React, { useRef, useEffect } from 'react';

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  // Cards matching Image 2 exact structure & personas with IIF CCMS branding
  const testimonials = [
    {
      id: 1,
      category: "Student",
      name: "Yashi",
      designation: "B.Com 2nd Year",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote: "As a student at IIF CCMS, I'm thrilled to share my experience. The college has exceeded my expectations with its dedicated faculty, smart classrooms, and personalized career mentorship ..."
    },
    {
      id: 2,
      category: "Alumni",
      name: "Hemant Katyal",
      designation: "Founder Dhangaurd, Dubai",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "As an alumni of IIF CCMS, I can confidently say that the college provides an exceptional learning environment that promotes entrepreneurial leadership, practical financial acumen, and global vision ..."
    },
    {
      id: 3,
      category: "Dignitary",
      name: "D. Sankaran",
      designation: "Head HR – Grindwell Norton Ltd (Saint – Gobain)",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      quote: "We really thank you, your team members and the organization for hosting the recruitment drive in Delhi. We appreciate the high caliber, disciplined professional conduct, and analytical rigor of IIF CCMS students ..."
    },
    {
      id: 4,
      category: "Employer",
      name: "Reshmi Menon",
      designation: "Early Talent India - Palo Alto",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      quote: "It is a privilege to be associated with IIF CCMS, a premier institute of North India. The students are trained in the latest accounting and management methodologies, making them immediate contributors ..."
    },
    {
      id: 5,
      category: "Alumni",
      name: "Nitin Sharma",
      designation: "Sr. Director & Chief Solutions Architect, Atlantic Coast Automotive Inc, USA",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      quote: "As a proud alumnus of IIF CCMS, I attribute much of my professional success to the sound fundamentals, faculty guidance, and research-oriented pedagogy imparted during my years here ..."
    },
    {
      id: 6,
      category: "Dignitary",
      name: "Padmashri Late Dr. Pritam Singh",
      designation: "Former Dean of IIM, Bangalore",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      quote: "I see this institution as one that features prominently among the top educational institutions. I see great future of this place in sculpting global financial leaders, ethical managers, and visionary corporate contributors ..."
    },
    {
      id: 7,
      category: "Employer",
      name: "Shipra Pandit",
      designation: "Director - HR at JUSPAY",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      quote: "Recruiting from IIF CCMS has been a pleasure. The institution is committed to providing top-notch education which is reflected in the candidates' remarkable competence, solid domain foundations, and disciplined professional conduct ..."
    }
  ];

  // Smooth sliding using scroll container (responsive across all screen sizes)
  const handlePrev = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.testimonial-multi-card');
      const cardWidth = card ? card.offsetWidth + 20 : 260;
      if (scrollRef.current.scrollLeft <= 10) {
        // Loop to end
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.testimonial-multi-card');
      const cardWidth = card ? card.offsetWidth + 20 : 260;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10;
      if (scrollRef.current.scrollLeft >= maxScroll) {
        // Loop back to start
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section section-bg-white glb-testimonials-multi-section" id="testimonials">
      <div className="container">
        {/* Header with Title on Left and Nav Arrows on Right (Matching Image 2) */}
        <div className="testimonials-header-row">
          <div className="title-block">
            <h2 className="testimonials-main-title">TESTIMONIALS</h2>
          </div>

          {/* Top Right Navigation Arrows matching Image 2: ← / → */}
          <div className="testimonials-nav-controls">
            <button 
              onClick={handlePrev} 
              className="arrow-nav-btn" 
              aria-label="Previous Testimonial"
              title="Previous"
            >
              ←
            </button>
            <span className="arrow-divider">/</span>
            <button 
              onClick={handleNext} 
              className="arrow-nav-btn" 
              aria-label="Next Testimonial"
              title="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Multi-Card Horizontal Grid Carousel Matching Image 2 */}
        <div className="testimonials-cards-wrapper" ref={scrollRef}>
          <div className="testimonials-cards-slider">
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial-multi-card">
                {/* 1. Category Tag at Top (e.g. Student, Alumni, Dignitary, Employer) */}
                <div className="card-top-category">
                  <span className={`cat-label cat-${item.category.toLowerCase()}`}>
                    {item.category}
                  </span>
                </div>

                {/* 2. Photo */}
                <div className="card-photo-container">
                  <img 
                    src={item.photo} 
                    alt={item.name} 
                    className="card-portrait-img"
                    loading="lazy" 
                  />
                </div>

                {/* 3. Name & Role */}
                <div className="card-person-info">
                  <h3 className="person-name">{item.name}</h3>
                  <p className="person-role">{item.designation}</p>
                </div>

                {/* 4. Quote Snippet */}
                <div className="card-quote-snippet">
                  <p className="quote-body">
                    {item.quote}
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
