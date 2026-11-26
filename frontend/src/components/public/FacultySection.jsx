import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';

export default function FacultySection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // 8 Distinguished Faculty Members matching the reference UI cards
  const facultyList = [
    {
      id: 1,
      name: "Dr. J. D. Agarwal",
      designation: "Founder Chairman & Chief Mentor",
      department: "Executive Academic Council",
      credential: "Ph.D. Economics • Eminent Economist",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Prof. Aman Agarwal",
      designation: "Director & Professor of Finance",
      department: "Department of Management Studies",
      credential: "Ph.D. in Finance • M.S. (USA)",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Dr. Ritu Saxena",
      designation: "Associate Professor & HOD Commerce",
      department: "Department of Commerce",
      credential: "Ph.D. Commerce • UGC-NET",
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Abhishek Anand",
      designation: "Assistant Professor - Business Analytics",
      department: "Department of Management Studies",
      credential: "MBA (FinTech) • UGC-NET",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Dr. Priya Verma",
      designation: "Assistant Professor - Economics",
      department: "Department of Arts & Humanities",
      credential: "Ph.D. Economics • NET-JRF",
      photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Prof. Vikas Gupta",
      designation: "Assistant Professor - Corporate Finance",
      department: "Department of Commerce",
      credential: "CFA, M.Com • Financial Modeling",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Dr. Neha Kapoor",
      designation: "Associate Professor - Corporate Law",
      department: "Department of Commerce",
      credential: "Ph.D. (Law), LL.M • Legal Studies",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Prof. Rajesh Mehra",
      designation: "Professor of Practice - Banking Operations",
      department: "Department of Management Studies",
      credential: "30+ Yrs Banking Ex-SBI • Treasury",
      photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Seamless continuous auto-scroll from right to left
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    const speed = 0.85; // Smooth slow moving speed

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Seamless loop when first set of duplicated cards passes
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
    <section className="section faculty-auto-slider-section" id="faculty" style={{ background: 'var(--bg-beige, #f7f3ec)' }}>
      <div className="container">
        {/* Top Header Row matching UI: Left Title with Serif + Accent, Right 'View All' Pill */}
        <div className="faculty-slider-header-row">
          <div className="faculty-header-title-block">
            <h2 className="faculty-main-heading">
              Faculty
            </h2>
          </div>

          <Link to="/faculty" className="faculty-view-all-pill" title="View Full Faculty Directory">
            <span className="view-all-text">View All</span>
            <span className="view-all-circle-arrow">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>

        {/* Auto-sliding Track Container */}
        <div 
          className="faculty-carousel-viewport"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="faculty-cards-sliding-track">
            {/* Duplicated list for infinite seamless right-to-left scrolling */}
            {[...facultyList, ...facultyList].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="faculty-auto-card"
                title={`${item.name} - ${item.designation}`}
              >
                {/* Photo Container with Elegant Backdrop */}
                <div className="faculty-card-photo-box">
                  <img 
                    src={item.photoUrl} 
                    alt={item.name} 
                    className="faculty-card-photo-img"
                    loading="lazy"
                  />
                </div>

                {/* Faculty Information */}
                <div className="faculty-card-info">
                  <h3 className="faculty-card-name">{item.name}</h3>
                  <p className="faculty-card-role">{item.designation}</p>
                </div>

                {/* Bottom Credential Tag */}
                <div className="faculty-card-badge-row">
                  <span className="faculty-card-cred-badge">
                    {item.credential}
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
