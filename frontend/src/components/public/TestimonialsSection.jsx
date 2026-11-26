import React, { useRef, useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // 7 Authentic Testimonials with IIFCCMS Branding
  const testimonials = [
    {
      id: 1,
      category: "Student",
      name: "Yashi",
      designation: "B.Com Honors Scholar",
      tag: "Student • Academic Excellence",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      quote: "The personalized mentorship, smart finance labs, and dedicated faculty have exceeded all my academic expectations."
    },
    {
      id: 2,
      category: "Alumni",
      name: "Hemant Katyal",
      designation: "Founder Dhangaurd, Dubai",
      tag: "Alumni • FinTech Entrepreneur",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      quote: "IIFCCMS provides an exceptional learning ecosystem that instills corporate leadership and global financial acumen."
    },
    {
      id: 3,
      category: "Dignitary",
      name: "D. Sankaran",
      designation: "Head HR – Grindwell Norton (Saint-Gobain)",
      tag: "Corporate Recruiter Partner",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      quote: "We deeply appreciate the high caliber, disciplined professional conduct, and analytical rigor of IIFCCMS scholars."
    },
    {
      id: 4,
      category: "Employer",
      name: "Reshmi Menon",
      designation: "Early Talent Lead – Palo Alto",
      tag: "Corporate Talent Lead",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      quote: "Students are trained in the latest accounting and management methodologies, making them immediate industry contributors."
    },
    {
      id: 5,
      category: "Alumni",
      name: "Nitin Sharma",
      designation: "Sr. Director & Solutions Architect, USA",
      tag: "Alumni • Tech & Strategy",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      quote: "I attribute much of my international career trajectory to the sound fundamentals and research-oriented pedagogy here."
    },
    {
      id: 6,
      category: "Dignitary",
      name: "Padmashri Late Dr. Pritam Singh",
      designation: "Former Dean of IIM Bangalore",
      tag: "Distinguished Academician",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      quote: "An esteemed institution that sculpts future financial leaders, ethical managers, and visionary corporate contributors."
    },
    {
      id: 7,
      category: "Employer",
      name: "Shipra Pandit",
      designation: "Director - HR at JUSPAY",
      tag: "FinTech Industry Leader",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
      quote: "Recruiting from IIFCCMS has always been rewarding due to their solid domain knowledge, integrity, and disciplined conduct."
    }
  ];

  // Seamless continuous auto-scroll moving right to left (matching Faculty Section)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    const speed = 0.85; // Smooth slow moving speed

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Seamless loop when the first set of duplicated cards passes
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section className="section testimonials-auto-slider-section" id="testimonials" style={{ background: 'var(--bg-white, #faf8f5)' }}>
      <div className="container">
        {/* Section Heading matching Faculty styling */}
        <div className="testimonials-slider-header-row">
          <div className="testimonials-header-title-block">
            <h2 className="testimonials-main-heading">
              Testimonials
            </h2>
          </div>
        </div>

        {/* Auto-sliding Carousel Viewport */}
        <div 
          className="testimonials-carousel-viewport"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="testimonials-cards-sliding-track">
            {/* Duplicated list for infinite seamless right-to-left scrolling */}
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="testimonial-auto-card"
                title={`${item.name} - ${item.designation}`}
              >
                {/* Photo Container with Backdrop matching Faculty Card Design */}
                <div className="testimonial-card-photo-box">
                  <img 
                    src={item.photo} 
                    alt={item.name} 
                    className="testimonial-card-photo-img"
                    loading="lazy" 
                  />
                </div>

                {/* Person Information */}
                <div className="testimonial-card-info">
                  <h3 className="testimonial-card-name">{item.name}</h3>
                  <p className="testimonial-card-role">{item.designation}</p>
                </div>

                {/* Quote Body Snippet */}
                <div className="testimonial-card-quote-box">
                  <p className="testimonial-quote-text">
                    "{item.quote}"
                  </p>
                </div>

                {/* Bottom Credential Tag */}
                <div className="testimonial-card-badge-row">
                  <span className="testimonial-card-cred-badge">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
