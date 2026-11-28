import React from 'react';
import { 
  CheckCircle2, Award, BookOpen, Building2, 
  GraduationCap, Users, ShieldCheck, Sparkles, Compass 
} from 'lucide-react';

import campusPhotoBanner from '../../assets/front-banners/IIF1.jpeg';
import photoClassroom from '../../assets/web photographs/Campus highlights/Infrastructure/Classrooms.jfif';
import photoComputerCentre from '../../assets/web photographs/Campus highlights/Infrastructure/ComputerCentre.jfif';

export default function WhyChooseSection() {
  const whyPoints = [
    {
      title: "35+ Years Academic Heritage & Research Pedigree",
      desc: "Carrying forward the distinguished educational legacy of the Indian Institute of Finance (Estd. 1987), known globally for rigorous economic research, publication of Finance India, and producing ethical corporate leaders."
    },
    {
      title: "Prestigious University Affiliation (CCSU Meerut - NAAC A++)",
      desc: "All degree programs (B.Com, BBA, B.A.) are formally affiliated with Chaudhary Charan Singh University, Meerut (College Code: 472), ensuring recognized university degrees with NEP 2020 multidisciplinary curriculum."
    }
  ];

  return (
    <section className="section why-iifccms-unified-section" id="why-iifccms" style={{ background: '#edffc8' }}>
      <div className="container">
        {/* Top Header (Centered Flanked Design matching benchmark) */}
        <div className="landing-section-header">
          <div className="landing-section-title-wrap">
            <h2 className="landing-section-title">WHY IIFCCMS ?</h2>
          </div>
          <p className="landing-section-subtitle">
            Distinctive Edge &amp; Excellence &bull; Foundation of Leadership &amp; Commerce Excellence
          </p>
        </div>

        {/* 2-Column Split: Left 3 Photos (1 Banner + 2 Square Cards) | Right Formatted Description Points */}
        <div className="why-iifccms-split-grid">
          {/* Left Column: 1 Banner Photo + 2 Square Cards */}
          <div className="why-photos-pure-stack">
            {/* Photo 1: Banner Type Photo */}
            <div className="why-photo-banner-card">
              <img 
                src={campusPhotoBanner} 
                alt="IIFCCMS Greater Noida Campus Infrastructure" 
                className="pure-photo-element"
                loading="lazy"
              />
            </div>

            {/* Sub-row: 2 Square Card Photos */}
            <div className="why-photos-square-grid">
              <div className="why-photo-square-card">
                <img 
                  src={photoClassroom} 
                  alt="Smart Air-Conditioned Lecture Theatres" 
                  className="pure-photo-element"
                  loading="lazy"
                />
              </div>
              <div className="why-photo-square-card">
                <img 
                  src={photoComputerCentre} 
                  alt="High-Tech Financial Modeling &amp; Computing Laboratories" 
                  className="pure-photo-element"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Formatted Description Points Only (No Images) */}
          <div className="why-description-text-card">
            <div className="why-card-top-tag">
              <span className="why-badge-pill">INSTITUTIONAL ADVANTAGES</span>
              <h3 className="why-points-headline">Foundation of Leadership &amp; Commerce Excellence</h3>
              <p className="why-points-sublead">
                IIFCCMS offers an unmatched combination of scholarly pedigree, government university affiliation, and state-of-the-art infrastructure designed to shape tomorrow's financial and business leaders.
              </p>
            </div>

            <div className="why-points-structured-list">
              {whyPoints.map((pt, idx) => (
                <div key={idx} className="why-point-structured-item">
                  <div className="point-icon-pin">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="point-content-block">
                    <h4 className="point-item-title">{pt.title}</h4>
                    <p className="point-item-desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
