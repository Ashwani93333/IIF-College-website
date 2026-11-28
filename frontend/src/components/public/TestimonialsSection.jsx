import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  student1, student3, student5, student7,
  student10, student12, student15, student20
} from '../../assets/assetImages';

export default function TestimonialsSection() {
  const { testimonials: appTestimonials } = useApp();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // 7 Authentic Testimonials with IIFCCMS Branding & Student Photographs
  const defaultTestimonials = [
    {
      id: 1,
      category: "Student",
      name: "Yashi",
      designation: "B.Com Honors Scholar",
      tag: "Student • Academic Excellence",
      photo: student1,
      quote: "The personalized mentorship, smart finance labs, and dedicated faculty have exceeded all my academic expectations."
    },
    {
      id: 2,
      category: "Alumni",
      name: "Hemant Katyal",
      designation: "Founder Dhangaurd, Dubai",
      tag: "Alumni • FinTech Entrepreneur",
      photo: student3,
      quote: "IIFCCMS provides an exceptional learning ecosystem that instills corporate leadership and global financial acumen."
    },
    {
      id: 3,
      category: "Dignitary",
      name: "D. Sankaran",
      designation: "Head HR – Grindwell Norton (Saint-Gobain)",
      tag: "Corporate Recruiter Partner",
      photo: student5,
      quote: "We deeply appreciate the high caliber, disciplined professional conduct, and analytical rigor of IIFCCMS scholars."
    },
    {
      id: 4,
      category: "Employer",
      name: "Reshmi Menon",
      designation: "Early Talent Lead – Palo Alto",
      tag: "Corporate Talent Lead",
      photo: student7,
      quote: "Students are trained in the latest accounting and management methodologies, making them immediate industry contributors."
    },
    {
      id: 5,
      category: "Alumni",
      name: "Nitin Sharma",
      designation: "Sr. Director & Solutions Architect, USA",
      tag: "Alumni • Tech & Strategy",
      photo: student10,
      quote: "I attribute much of my international career trajectory to the sound fundamentals and research-oriented pedagogy here."
    },
    {
      id: 6,
      category: "Dignitary",
      name: "Padmashri Late Dr. Pritam Singh",
      designation: "Former Dean of IIM Bangalore",
      tag: "Distinguished Academician",
      photo: student12,
      quote: "An esteemed institution that sculpts future financial leaders, ethical managers, and visionary corporate contributors."
    },
    {
      id: 7,
      category: "Employer",
      name: "Shipra Pandit",
      designation: "Director - HR at JUSPAY",
      tag: "FinTech Industry Leader",
      photo: student15,
      quote: "Recruiting from IIFCCMS has always been rewarding due to their solid domain knowledge, integrity, and disciplined conduct."
    }
  ];

  const testimonials = (appTestimonials && appTestimonials.length > 0)
    ? appTestimonials
    : defaultTestimonials;

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
    <section className="section testimonials-auto-slider-section" id="testimonials" style={{ background: '#eaffef' }}>
      <div className="container">
        {/* Section Heading (Centered Flanked Design matching benchmark) */}
        <div className="landing-section-header">
          <div className="landing-section-title-wrap">
            <h2 className="landing-section-title">Testimonials &amp; Student Voices</h2>
          </div>
          <p className="landing-section-subtitle">
            Inspiring journeys and authentic experiences from our scholars and alumni
          </p>
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
