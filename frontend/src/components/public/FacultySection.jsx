import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import {
  facChairman,
  facManjuAgarwal,
  facRkAgarwal,
  facDeepakBansal,
  facPadmaMishra,
  facUmangGupta,
  facGouthamSandilya
} from '../../assets/assetImages';

export default function FacultySection() {
  const { faculty: appFaculty } = useApp();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Core Faculty Members with authentic photos from web photographs
  const defaultFacultyList = [
    {
      id: 1,
      name: "Dr. J. D. Agarwal",
      designation: "Founder Chairman & Chief Mentor",
      department: "Executive Academic Council",
      credential: "Ph.D. Economics • Eminent Economist",
      photoUrl: facChairman
    },
    {
      id: 2,
      name: "Prof. (Dr.) Manju Agarwal",
      designation: "Professor of Economics & Senior Mentor",
      department: "Department of Commerce",
      credential: "Ph.D. (DSE), ITP (London Business School)",
      photoUrl: facManjuAgarwal
    },
    {
      id: 3,
      name: "Prof. R. K. Agarwal",
      designation: "Professor of Accounting & Taxation",
      department: "Department of Commerce",
      credential: "M.Com. (DU), CA (FCA), FCS",
      photoUrl: facRkAgarwal
    },
    {
      id: 4,
      name: "Prof. Deepak Bansal",
      designation: "Assistant Professor - IT & Analytics",
      department: "Department of Commerce",
      credential: "M.Sc. CS, M.Com., ADSM (NIIT)",
      photoUrl: facDeepakBansal
    },
    {
      id: 5,
      name: "Mr. Padma Kanta Mishra",
      designation: "Faculty in Accounting & Finance",
      department: "Department of Commerce",
      credential: "I.C.W.A (Inter), M.Phil., UGC-NET",
      photoUrl: facPadmaMishra
    },
    {
      id: 6,
      name: "Dr. Umang Gupta",
      designation: "Faculty in General Management",
      department: "Department of Management",
      credential: "Ph.D. (IIT Roorkee), MBA, UGC-NET JRF",
      photoUrl: facUmangGupta
    },
    {
      id: 7,
      name: "Mr. Goutham Sandilya",
      designation: "Faculty in Finance & Valuation",
      department: "Department of Management",
      credential: "Fellow (IIT Roorkee Scholar), PGDM",
      photoUrl: facGouthamSandilya
    }
  ];

  const facultyList = (appFaculty && appFaculty.length > 0)
    ? appFaculty
    : defaultFacultyList;

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
    <section className="section faculty-auto-slider-section" id="faculty" style={{ background: '#eaffef' }}>
      <div className="container">
        {/* Top Header (Centered Flanked Design matching benchmark) */}
        <div className="landing-section-header">
          <div className="landing-section-title-wrap">
            <h2 className="landing-section-title">Faculty Mentorship &amp; Leadership</h2>
          </div>
          <p className="landing-section-subtitle">
            Distinguished academicians and industry veterans shaping future leaders &bull;{' '}
            <Link to="/faculty" style={{ color: 'var(--primary-navy-dark)', textDecoration: 'underline', fontWeight: 700 }}>
              View All Faculty Directory &rarr;
            </Link>
          </p>
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
