import React from 'react';
import { 
  CheckCircle2, Award, BookOpen, Building2, 
  GraduationCap, Users, ShieldCheck, Sparkles, Compass 
} from 'lucide-react';

import campusPhoto1 from '../../assets/front-banners/IIF1.jpeg';
import campusPhoto2 from '../../assets/front-banners/IIF2.jpg';
import campusPhoto3 from '../../assets/front-banners/IIF3.jpg';

export default function WhyChooseSection() {
  const whyPoints = [
    {
      title: "35+ Years Academic Heritage & Research Pedigree",
      desc: "Carrying forward the distinguished educational legacy of the Indian Institute of Finance (Estd. 1987), known globally for rigorous economic research, publication of Finance India, and producing ethical corporate leaders."
    },
    {
      title: "Prestigious University Affiliation (CCSU Meerut - NAAC A++)",
      desc: "All degree programs (B.Com, BBA, B.A.) are formally affiliated with Chaudhary Charan Singh University, Meerut (College Code: 472), ensuring recognized university degrees with NEP 2020 multidisciplinary curriculum."
    },
    {
      title: "Prime Knowledge Park III, Greater Noida Location",
      desc: "Strategically located at Plot No. 45A in the premier educational and corporate hub of Greater Noida, with seamless Metro and highway connectivity across Delhi, Noida, and NCR."
    },
    {
      title: "World-Class Air-Conditioned Academic Infrastructure",
      desc: "Featuring 100% AC smart lecture theatres with interactive audio-visual systems, dedicated financial modeling and computing laboratories, and a central library housing over 55,000 reference volumes."
    },
    {
      title: "Industry-Experienced Faculty & Personal Mentorship",
      desc: "Mentored by accomplished academicians, chartered accountants, economists, and corporate executives fostering individual student growth, practical case-study learning, and real-world problem-solving."
    },
    {
      title: "Holistic Student Development & Active Campus Life",
      desc: "Vibrant collegiate environment with commerce and management conclaves, FinTech societies, National Service Scheme (NSS), cultural fests, sports arena, and corporate networking forums."
    }
  ];

  return (
    <section className="section why-iifccms-unified-section" id="why-iifccms" style={{ background: '#C1E1C1' }}>
      <div className="container">
        {/* Top Header */}
        <div className="possibilities-header-row">
          <div className="header-left-brand">
            <div className="brand-accent-line"></div>
            <div className="brand-titles">
              <span className="brand-sub-label">Distinctive Edge &amp; Excellence</span>
              <h2 className="brand-main-headline">WHY IIFCCMS ?</h2>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Left 3 Pure Photo Cards | Right Formatted Description Points */}
        <div className="why-iifccms-split-grid">
          {/* Left Column: 3 Clean, Proper Photos Only (No Text Overlay) */}
          <div className="why-photos-pure-stack">
            {/* Photo 1: Main Campus Architecture */}
            <div className="pure-photo-card photo-card-main">
              <img 
                src={campusPhoto1} 
                alt="IIFCCMS Greater Noida Campus Infrastructure" 
                className="pure-photo-element"
                loading="lazy"
              />
            </div>

            {/* Sub-row with Photo 2 & Photo 3 */}
            <div className="pure-photos-sub-row">
              <div className="pure-photo-card photo-card-sub">
                <img 
                  src={campusPhoto2} 
                  alt="IIFCCMS Academic Block & Campus Grounds" 
                  className="pure-photo-element"
                  loading="lazy"
                />
              </div>
              <div className="pure-photo-card photo-card-sub">
                <img 
                  src={campusPhoto3} 
                  alt="IIFCCMS Student Conclave & Auditorium Facilities" 
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
