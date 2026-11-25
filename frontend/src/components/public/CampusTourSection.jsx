import React from 'react';
import { 
  Building2, CheckCircle2, Monitor, BookOpen, 
  Coffee, ShieldCheck, Bus, Sparkles, ExternalLink, ArrowRight 
} from 'lucide-react';

export default function CampusTourSection() {
  const campusFeatures = [
    {
      title: "100% Air-Conditioned Smart Lecture Rooms",
      desc: "Tiered seating, ultra-short throw interactive projectors, digital podiums, and acoustic wall panels enabling collaborative case discussions."
    },
    {
      title: "Advanced Financial Analytics & Computing Labs",
      desc: "High-performance workstations equipped with TallyPrime ERP, Advanced Excel financial modeling, Python/R analytics, and high-speed optical fiber internet."
    },
    {
      title: "Central Knowledge Resource Center (55,000+ Volumes)",
      desc: "Expansive library housing over 55,000 reference volumes, international economics journals, national research periodicals, DELNET, and EBSCO e-databases."
    },
    {
      title: "Executive Seminar & Corporate Conclave Auditoriums",
      desc: "State-of-the-art conference facilities for national seminars, industry CXO guest lectures, annual inductions, and academic symposia."
    },
    {
      title: "Sports Arena & Student Wellness Gymnasium",
      desc: "Dedicated facilities for badminton, table tennis, basketball, cricket practice nets, indoor chess, and an active physical wellness center."
    },
    {
      title: "Hygienic Student Cafeteria & Fleet Transport",
      desc: "Nutritious multi-cuisine food court adhering to strict hygiene standards, alongside dedicated daily AC bus connectivity across Delhi, Noida, and Greater Noida."
    }
  ];

  return (
    <section className="section section-bg-white campus-tour-section" id="facilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">INFRASTRUCTURE &amp; FACILITIES</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-navy-dark)' }}>
            Campus Tour &amp; World-Class Infrastructure
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Explore our sprawling 6.47-acre campus situated in the premier institutional hub of 
            Knowledge Park III, Greater Noida, meticulously engineered for academic eminence and student well-being.
          </p>
        </div>

        {/* 2-Column Split: Left (Point-wise details) | Right (YouTube Video Embed) */}
        <div className="campus-tour-split-grid">
          {/* Left Column: Point-Wise Campus Facilities */}
          <div className="campus-details-col">
            <div className="campus-details-header">
              <span className="facilities-accent-pill">CAMPUS HIGHLIGHTS</span>
              <h3>Architected for Modern Higher Education</h3>
            </div>

            <div className="campus-points-list">
              {campusFeatures.map((feat, index) => (
                <div key={index} className="campus-point-item">
                  <div className="point-icon-badge">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="point-text-block">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="campus-cta-box">
              <a 
                href="/admissions" 
                className="btn-primary-gold" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem' }}
              >
                Schedule an In-Person Campus Visit <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Compact Direct YouTube Video Player */}
          <div className="campus-video-col">
            <div className="video-card-container">
              <div className="video-badge-header">
                <span className="live-pulse"></span>
                <span>OFFICIAL CAMPUS VIDEO WALKTHROUGH</span>
              </div>

              {/* Direct Compact 16:9 YouTube Player fitted tightly to video */}
              <div className="video-player-frame compact-player-frame">
                <iframe 
                  className="youtube-embedded-iframe"
                  src="https://www.youtube.com/embed/6N7r5WlMhqk?rel=0&modestbranding=1" 
                  title="IIF CCMS Campus Tour Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
