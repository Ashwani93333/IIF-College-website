import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, ExternalLink, Award, 
  BookOpen, Building2, Briefcase, GraduationCap, Users, ShieldCheck, Sparkles 
} from 'lucide-react';

export default function WhyChooseSection() {
  const navigate = useNavigate();

  const handleRedirect = (sectionId, routePath) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (routePath) {
      navigate(routePath);
    }
  };

  return (
    <section className="section why-iif-possibilities-section" id="why-iif">
      <div className="container">
        {/* Top Header matching exact layout of screenshot */}
        <div className="possibilities-header-row">
          <div className="header-left-brand">
            <div className="brand-accent-line"></div>
            <div className="brand-titles">
              <span className="brand-sub-label">Why Choose Us</span>
              <h2 className="brand-main-headline">WHY IIFCCMS ?</h2>
            </div>
          </div>

          <div className="header-right-stat">
            <div className="stat-big-num">45<span className="stat-plus">+</span></div>
            <div className="stat-text-label">
              <span>Nationalities &amp; Global Networks</span>
              <span>on Campus</span>
            </div>
          </div>
        </div>

        {/* 3-Column Mosaic Grid matching exact screenshot composition */}
        <div className="possibilities-mosaic-grid">
          {/* Column 1: Annual Cultural Fest (Left Card with hover slide) */}
          <div 
            className="mosaic-card left-fest-card photo-card-hover-wrapper"
            onClick={() => handleRedirect('facilities', '/facilities')}
            title="Click to explore Campus Life & Infrastructure"
          >
            <div className="photo-slide-container">
              {/* Primary Photo: Stage performance & concert lighting */}
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80" 
                alt="IIF CCMS Annual Fest Stage" 
                className="photo-slide-img primary-img"
                loading="lazy"
              />
              {/* Secondary Photo (slides in on hover) */}
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80" 
                alt="Student Cultural Fest Celebration" 
                className="photo-slide-img secondary-img"
                loading="lazy"
              />
              <div className="photo-dark-vignette"></div>
            </div>

            {/* Bottom Overlay Label */}
            <div className="card-bottom-overlay">
              <div className="overlay-header-row">
                <div>
                  <h3 className="card-overlay-title">Annual Fest 2026</h3>
                  <p className="card-overlay-sub">Student Cultural Conclave &amp; Talent Conclave</p>
                </div>
                <div className="circle-arrow-btn">
                  <ChevronRight size={18} />
                </div>
              </div>

              {/* Redirect Line */}
              <div 
                className="why-redirect-line"
                onClick={(e) => { e.stopPropagation(); handleRedirect('facilities', '/facilities'); }}
              >
                <span>Explore Campus Life &amp; Events</span>
                <ArrowRight size={13} className="redirect-arrow-icon" />
              </div>
            </div>
          </div>

          {/* Column 2: Center Column (Udyami Bazaar + Solid Blue Links Card) */}
          <div className="mosaic-col center-stacked-col">
            {/* Top Card: Udyami Bazaar with hover slide */}
            <div 
              className="mosaic-card center-udyami-card photo-card-hover-wrapper"
              onClick={() => handleRedirect('programs', '/courses')}
              title="Click to view Academic Programs & Entrepreneurship"
            >
              <div className="photo-slide-container">
                {/* Primary Photo */}
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80" 
                  alt="Udyami Bazaar Cultural Fair" 
                  className="photo-slide-img primary-img"
                  loading="lazy"
                />
                {/* Secondary Photo (slides in on hover) */}
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                  alt="Student Enterprise Incubator Showcase" 
                  className="photo-slide-img secondary-img"
                  loading="lazy"
                />
                <div className="photo-dark-vignette"></div>
              </div>

              {/* Bottom Overlay */}
              <div className="card-bottom-overlay">
                <div className="overlay-header-row">
                  <div>
                    <h3 className="card-overlay-title">Udyami Bazaar 2026</h3>
                    <p className="card-overlay-sub">Student Innovation &amp; Entrepreneurship Fair</p>
                  </div>
                  <div className="circle-arrow-btn">
                    <ChevronRight size={18} />
                  </div>
                </div>

                {/* Redirect Line */}
                <div 
                  className="why-redirect-line"
                  onClick={(e) => { e.stopPropagation(); handleRedirect('programs', '/courses'); }}
                >
                  <span>Explore Academic Programs &amp; Innovation</span>
                  <ArrowRight size={13} className="redirect-arrow-icon" />
                </div>
              </div>
            </div>

            {/* Bottom Card: Solid Teal Blue Links Block matching screenshot */}
            <div className="mosaic-card solid-blue-links-card">
              <div className="blue-card-inner">
                <div className="blue-card-header">
                  <span className="pill-badge">STUDENT CLUSTERS</span>
                  <h4>Campus Vitality &amp; Student Hubs</h4>
                </div>

                <ul className="blue-links-list">
                  <li onClick={() => handleRedirect('facilities', '/facilities')}>
                    <span>Sports Facilities &amp; Athletics Arena</span>
                    <ChevronRight size={15} className="link-chev" />
                  </li>
                  <li onClick={() => handleRedirect('facilities', '/facilities')}>
                    <span>National Service Scheme (NSS)</span>
                    <ChevronRight size={15} className="link-chev" />
                  </li>
                  <li onClick={() => handleRedirect('facilities', '/facilities')}>
                    <span>Student Councils &amp; Cultural Clubs</span>
                    <ChevronRight size={15} className="link-chev" />
                  </li>
                  <li onClick={() => handleRedirect('facilities', '/facilities')}>
                    <span>FinTech &amp; E-Cell Incubation Centre</span>
                    <ChevronRight size={15} className="link-chev" />
                  </li>
                </ul>

                {/* Redirect Line */}
                <div 
                  className="why-redirect-line"
                  onClick={() => handleRedirect('facilities', '/facilities')}
                >
                  <span>Explore All Campus Amenities</span>
                  <ArrowRight size={13} className="redirect-arrow-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Large Right Card (Lawn Aerial Photo + Split Overhead Panels) */}
          <div 
            className="mosaic-card right-aerial-lawn-card photo-card-hover-wrapper"
            title="Lush 6.47 Acres Greater Noida Campus"
          >
            <div className="photo-slide-container">
              {/* Primary Photo: Students in circle on campus lawn */}
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" 
                alt="Students on Campus Green Lawn" 
                className="photo-slide-img primary-img"
                loading="lazy"
              />
              {/* Secondary Photo (slides in on hover) */}
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80" 
                alt="IIF CCMS Modern Campus Architecture" 
                className="photo-slide-img secondary-img"
                loading="lazy"
              />
              <div className="photo-dark-vignette-gentle"></div>
            </div>

            {/* Split Top Panels matching screenshot (Campus Facilities & Placement Highlights) */}
            <div className="aerial-split-panels-wrapper">
              {/* Panel 1: Campus Facilities */}
              <div 
                className="split-panel-glass"
                onClick={() => handleRedirect('facilities', '/facilities')}
              >
                <div className="panel-title-row">
                  <h4>Campus Facilities</h4>
                  <div className="circle-arrow-btn">
                    <ChevronRight size={16} />
                  </div>
                </div>
                <p className="panel-sub-desc">
                  100% AC Smart Lecture Theatres, 55,000+ Volume Central Library &amp; High-Speed Computing Labs.
                </p>

                {/* Redirect Line */}
                <div 
                  className="why-redirect-line"
                  onClick={(e) => { e.stopPropagation(); handleRedirect('facilities', '/facilities'); }}
                >
                  <span>Tour Campus Facilities</span>
                  <ArrowRight size={13} className="redirect-arrow-icon" />
                </div>
              </div>

              {/* Panel 2: Placement Highlights with Offering Details & Direct Redirection */}
              <div 
                className="split-panel-glass placement-highlight-glass"
                onClick={() => handleRedirect('placements')}
              >
                <div className="panel-title-row">
                  <h4>Placement Highlights</h4>
                  <div className="circle-arrow-btn">
                    <ChevronRight size={16} />
                  </div>
                </div>

                {/* Details of what IIF CCMS is offering from the placement section */}
                <div className="placement-offerings-pills">
                  <div className="offering-item">
                    <strong>12 LPA</strong>
                    <span>Highest Package</span>
                  </div>
                  <div className="offering-item">
                    <strong>600+</strong>
                    <span>Corporate Recruiters</span>
                  </div>
                  <div className="offering-item">
                    <strong>100%</strong>
                    <span>Career &amp; CRC Support</span>
                  </div>
                </div>

                <p className="panel-sub-desc" style={{ marginTop: '0.4rem' }}>
                  Marquee empanelment with Google, IBM, J.P. Morgan, Deloitte, Microsoft, Accenture &amp; KPMG.
                </p>

                {/* Redirect Line to Placement Section */}
                <div 
                  className="why-redirect-line"
                  onClick={(e) => { e.stopPropagation(); handleRedirect('placements'); }}
                >
                  <span>Go to Placement Highlights Section</span>
                  <ArrowRight size={13} className="redirect-arrow-icon" />
                </div>
              </div>
            </div>

            {/* Bottom Caption on Right Card */}
            <div className="lawn-bottom-caption">
              <span>6.47 Acres Lush Green Eco-Friendly Campus • Knowledge Park III, Greater Noida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
