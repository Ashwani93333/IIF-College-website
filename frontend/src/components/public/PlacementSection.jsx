import React, { useState } from 'react';
import { 
  Building2, TrendingUp, Award, Users, ArrowRight, 
  ExternalLink, CheckCircle2, ChevronRight, ChevronLeft, X 
} from 'lucide-react';

export default function PlacementSection() {
  const [showAllModal, setShowAllModal] = useState(false);

  // Corporate logo cards for moving auto-scroll track
  const recentPlacementCompanies = [
    {
      name: "Google",
      domain: "Cloud & Technology",
      logoType: "google",
      svg: (
        <svg viewBox="0 0 24 24" width="76" height="76">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.37 7.31 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.13z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.63 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z"/>
        </svg>
      )
    },
    {
      name: "IBM",
      domain: "Enterprise Systems",
      logoType: "ibm",
      svg: (
        <svg viewBox="0 0 120 45" width="95" height="42">
          <path fill="#0530ad" d="M4 4h18v5H4zm0 8h18v5H4zm0 8h18v5H4zm0 8h18v5H4zm0 8h18v5H4zm28-32h26v5H32zm0 8h26v5H32zm0 8h26v5H32zm0 8h26v5H32zm0 8h26v5H32zm36-32h48v5H68zm0 8h48v5H68zm0 8h48v5H68zm0 8h48v5H68zm0 8h48v5H68z"/>
        </svg>
      )
    },
    {
      name: "J.P. Morgan",
      domain: "Investment Banking",
      logoType: "jpmorgan",
      svg: (
        <svg viewBox="0 0 160 80" width="112" height="54">
          <polygon points="40,15 65,15 80,30 80,55 65,70 40,70 25,55 25,30" fill="#0b5c92" />
          <polygon points="43,23 62,23 72,33 72,52 62,62 43,62 33,52 33,33" fill="#ffffff" />
          <polygon points="47,30 58,30 65,37 65,48 58,55 47,55 40,48 40,37" fill="#0b5c92" />
          <text x="88" y="47" fontFamily="'Georgia', serif" fontSize="18" fontWeight="bold" fill="#062a36" letterSpacing="0.5">J.P.Morgan</text>
        </svg>
      )
    },
    {
      name: "Microsoft",
      domain: "Cloud & Software",
      logoType: "microsoft",
      svg: (
        <svg viewBox="0 0 180 50" width="120" height="42">
          <rect x="5" y="6" width="16" height="16" fill="#F25022"/>
          <rect x="25" y="6" width="16" height="16" fill="#7FBA00"/>
          <rect x="5" y="26" width="16" height="16" fill="#00A4EF"/>
          <rect x="25" y="26" width="16" height="16" fill="#FFB900"/>
          <text x="50" y="32" fontFamily="'Segoe UI', 'Outfit', sans-serif" fontSize="22" fontWeight="600" fill="#4b5563">Microsoft</text>
        </svg>
      )
    },
    {
      name: "HP",
      domain: "Computing Hardware",
      logoType: "hp",
      svg: (
        <svg viewBox="0 0 80 80" width="74" height="74">
          <circle cx="40" cy="40" r="38" fill="#0096d6"/>
          <circle cx="40" cy="40" r="32" fill="#ffffff"/>
          <path d="M30 22h7l-6 36h-7zm16 0h7l-3 18h8c5 0 9-4 10-10 1-5-2-8-7-8h-15zm-2 22h6c3 0 5 1 4 4-1 3-3 4-6 4h-5z" fill="#0096d6"/>
        </svg>
      )
    },
    {
      name: "Texas Instruments",
      domain: "Semiconductors & FinTech",
      logoType: "ti",
      svg: (
        <svg viewBox="0 0 180 60" width="125" height="46">
          <path d="M12 10 L28 10 L34 25 L40 10 L56 10 L44 32 L56 50 L40 50 L34 37 L28 50 L12 50 L24 30 Z" fill="#CC0000" />
          <text x="64" y="28" fontFamily="'Arial Black', sans-serif" fontSize="13" fontWeight="900" fill="#000000">TEXAS</text>
          <text x="64" y="44" fontFamily="'Arial Black', sans-serif" fontSize="11" fontWeight="900" fill="#000000">INSTRUMENTS</text>
        </svg>
      )
    },
    {
      name: "Accenture",
      domain: "Strategy & Consulting",
      logoType: "accenture",
      svg: (
        <svg viewBox="0 0 160 50" width="115" height="38">
          <text x="5" y="32" fontFamily="'Outfit', sans-serif" fontSize="22" fontWeight="800" fill="#000000">accenture</text>
          <path d="M102 12 L112 22 L102 32 L106 32 L116 22 L106 12 Z" fill="#A100FF"/>
        </svg>
      )
    },
    {
      name: "Deloitte",
      domain: "Financial Advisory & Audit",
      logoType: "deloitte",
      svg: (
        <svg viewBox="0 0 150 45" width="110" height="36">
          <text x="5" y="30" fontFamily="'Georgia', serif" fontSize="24" fontWeight="bold" fill="#062a36">Deloitte</text>
          <circle cx="95" cy="30" r="3.5" fill="#86bc25"/>
        </svg>
      )
    },
    {
      name: "Cisco Systems",
      domain: "Enterprise Cloud & Networks",
      logoType: "cisco",
      svg: (
        <svg viewBox="0 0 140 50" width="105" height="42">
          <g fill="#049fd9">
            <rect x="25" y="24" width="3.5" height="10" rx="1.7"/>
            <rect x="34" y="16" width="3.5" height="18" rx="1.7"/>
            <rect x="43" y="10" width="3.5" height="24" rx="1.7"/>
            <rect x="52" y="16" width="3.5" height="18" rx="1.7"/>
            <rect x="61" y="24" width="3.5" height="10" rx="1.7"/>
          </g>
          <text x="75" y="32" fontFamily="'Outfit', sans-serif" fontSize="22" fontWeight="800" fill="#049fd9">CISCO</text>
        </svg>
      )
    },
    {
      name: "KPMG",
      domain: "Audit & Tax Advisory",
      logoType: "kpmg",
      svg: (
        <svg viewBox="0 0 140 45" width="105" height="38">
          <rect x="5" y="5" width="28" height="35" rx="3" fill="#00338D"/>
          <text x="19" y="30" fontFamily="'Outfit', sans-serif" fontSize="18" fontWeight="900" fill="#ffffff" textAnchor="middle">K</text>
          <rect x="38" y="5" width="28" height="35" rx="3" fill="#00338D"/>
          <text x="52" y="30" fontFamily="'Outfit', sans-serif" fontSize="18" fontWeight="900" fill="#ffffff" textAnchor="middle">P</text>
          <rect x="71" y="5" width="28" height="35" rx="3" fill="#00338D"/>
          <text x="85" y="30" fontFamily="'Outfit', sans-serif" fontSize="18" fontWeight="900" fill="#ffffff" textAnchor="middle">M</text>
          <rect x="104" y="5" width="28" height="35" rx="3" fill="#00338D"/>
          <text x="118" y="30" fontFamily="'Outfit', sans-serif" fontSize="18" fontWeight="900" fill="#ffffff" textAnchor="middle">G</text>
        </svg>
      )
    }
  ];

  const allRecruitersList = [
    { name: "Google", domain: "Cloud & Technology", lpa: "12.0 LPA", logo: "GOOG" },
    { name: "Microsoft", domain: "Cloud & Software", lpa: "12.0 LPA", logo: "MSFT" },
    { name: "J.P. Morgan Chase & Co", domain: "Investment Banking", lpa: "12.0 LPA", logo: "JPM" },
    { name: "IBM", domain: "Enterprise Systems", lpa: "10.0 LPA", logo: "IBM" },
    { name: "HP Inc.", domain: "Computing Systems", lpa: "9.5 LPA", logo: "HP" },
    { name: "Texas Instruments", domain: "Semiconductors & FinTech", lpa: "11.0 LPA", logo: "TI" },
    { name: "Accenture", domain: "Management Consulting", lpa: "8.5 LPA", logo: "ACN" },
    { name: "Deloitte", domain: "Financial Advisory", lpa: "9.2 LPA", logo: "DTT" },
    { name: "KPMG", domain: "Audit & Tax Advisory", lpa: "8.8 LPA", logo: "KPMG" },
    { name: "Ernst & Young (EY)", domain: "Assurance & Strategy", lpa: "8.4 LPA", logo: "EY" },
    { name: "Cisco Systems", domain: "Enterprise Cloud & Networks", lpa: "11.5 LPA", logo: "CSCO" },
    { name: "Commvault", domain: "Data Management", lpa: "10.5 LPA", logo: "CVLT" },
    { name: "Cognizant", domain: "Business Analytics", lpa: "7.0 LPA", logo: "CTSH" },
    { name: "Capgemini", domain: "Corporate Consulting", lpa: "7.5 LPA", logo: "CAP" },
    { name: "HDFC Bank", domain: "Commercial Banking", lpa: "6.5 LPA", logo: "HDFC" },
    { name: "ICICI Bank", domain: "Wealth Management", lpa: "6.2 LPA", logo: "ICICI" }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section recent-placements-unified-section" id="placements">
      <div className="container">
        {/* Header Matching Request: Placement Highlights */}
        <div className="recent-placements-header">
          <h2 className="recent-placements-title">Placement Highlights</h2>
          <p className="recent-placements-sub">
            Our students have been placed in some of the most prestigious companies across the globe.
          </p>
        </div>

        {/* Continuous Auto-Scrolling Moving Company Logos Row */}
        <div className="company-logos-marquee-wrapper">
          <div className="company-logos-marquee-track">
            {[...recentPlacementCompanies, ...recentPlacementCompanies].map((item, index) => (
              <div key={index} className="recent-company-card" title={`${item.name} - ${item.domain}`}>
                {/* Background Academic Watermark Seal */}
                <div className="company-watermark-seal">
                  <svg viewBox="0 0 100 100" width="130" height="130" opacity="0.12">
                    <circle cx="50" cy="50" r="47" fill="none" stroke="#c59b27" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="41" fill="none" stroke="#0d5c75" strokeWidth="1.2" strokeDasharray="3,2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#c59b27" strokeWidth="1" />
                    <text x="50" y="32" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="5.5" fontWeight="bold" fill="#0d5c75" textAnchor="middle" letterSpacing="1">IIF CCMS</text>
                    <polygon points="50,42 52,48 58,48 53,52 55,58 50,54 45,58 47,52 42,48 48,48" fill="#c59b27" />
                    <text x="50" y="72" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="4.8" fontWeight="bold" fill="#c59b27" textAnchor="middle" letterSpacing="0.8">ESTD. 1987</text>
                  </svg>
                </div>

                {/* Company Logo in Center */}
                <div className="company-logo-center">
                  {item.svg}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Highlights & Institutional Credentials Bar */}
        <div className="placement-metrics-banner" style={{ marginTop: '3rem' }}>
          <div className="metrics-left-intro">
            <span className="our-recruiters-pill">OUR RECRUITERS</span>
            <h3>Placement Highlights</h3>
            <p>
              Corporate linkages with 600+ recruitment partners across banking, financial services, consulting, and technology.
            </p>
          </div>

          <div className="metrics-numbers-row">
            <div className="metric-cell">
              <span className="sup">Highest Package</span>
              <div className="val">12 LPA</div>
              <span className="sub">Global &amp; National Corporate Advisory</span>
            </div>

            <div className="metric-cell">
              <span className="sup">Average Package</span>
              <div className="val">3 LPA</div>
              <span className="sub">Undergraduate Cohort</span>
            </div>

            <div className="metric-cell accent-cell">
              <span className="sup">Corporate Partners</span>
              <div className="val">600+</div>
              <span className="sub">Active Campus Recruitment Drives</span>
            </div>
          </div>

          <div className="metrics-cta-column">
            <button 
              onClick={() => setShowAllModal(true)} 
              className="btn-view-all-recruiters"
              style={{ background: 'rgba(255,255,255,0.15)', borderColor: '#ffffff' }}
            >
              View All Recruiters ({allRecruitersList.length}+) <ExternalLink size={15} />
            </button>
            <button 
              onClick={() => scrollTo('admissions')} 
              className="btn-primary-gold"
              style={{ marginTop: '0.5rem' }}
            >
              Apply for Placements Batch <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal: View All Recruiters */}
      {showAllModal && (
        <div className="recruiters-modal-overlay" onClick={() => setShowAllModal(false)}>
          <div className="recruiters-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Corporate Recruitment Partners</h3>
                <p>Leading corporate empanelment at IIF College of Commerce and Management Studies</p>
              </div>
              <button onClick={() => setShowAllModal(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-grid">
              {allRecruitersList.map((r, i) => (
                <div key={i} className="modal-recruiter-card">
                  <div className="modal-recruiter-pill">{r.logo}</div>
                  <div>
                    <div style={{ fontWeight: '800', color: '#062a36', fontSize: '0.95rem' }}>{r.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.domain}</div>
                    <div style={{ fontSize: '0.78rem', color: '#0d5c75', fontWeight: '700', marginTop: '3px' }}>
                      Package: {r.lpa}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
