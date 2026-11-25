import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { MapPin, Phone, Mail, Award, Lock, ExternalLink, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const { settings } = useApp();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="main-footer" style={{ background: '#062a36', borderTop: '4px solid #0d5c75' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About Institution */}
          <div className="footer-col">
            <h4 style={{ color: '#fff' }}>{settings.shortName} Greater Noida</h4>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.25rem', color: '#e0f2fe' }}>
              IIF College of Commerce and Management Studies, affiliated to 
              <strong> Chaudhary Charan Singh University, Meerut (NAAC A++ Accredited)</strong>.
              Carrying forward the 35+ years group pedigree of the Indian Institute of Finance (Estd. 1987).
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: '#fde047' }}>
              <Award size={14} color="#fde047" />
              <span>COLLEGE CODE - 472</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollTo('hero')}>Home</button></li>
              <li><button onClick={() => scrollTo('about')}>Genesis &amp; Mission</button></li>
              <li><button onClick={() => scrollTo('programs')}>Undergraduate Courses</button></li>
              <li><button onClick={() => scrollTo('placements')}>Training &amp; Placements</button></li>
              <li><button onClick={() => scrollTo('rankings')}>Rankings &amp; Honors</button></li>
              <li><button onClick={() => scrollTo('events')}>Events &amp; Conclaves</button></li>
              <li><button onClick={() => scrollTo('fee-calculator')}>Fee &amp; Scholarship Tool</button></li>
              <li><button onClick={() => scrollTo('admissions')}>Admissions 2026-27</button></li>
            </ul>
          </div>

          {/* Col 3: Regulatory & University */}
          <div className="footer-col">
            <h4>Governance &amp; Disclosures</h4>
            <ul className="footer-links">
              <li>
                <a href={settings.ccsuPortalUrl} target="_blank" rel="noopener noreferrer">
                  CCSU Main Portal <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://www.ccsuniversity.ac.in" target="_blank" rel="noopener noreferrer">
                  University Results Desk
                </a>
              </li>
              <li>
                <a href="https://www.ugc.gov.in" target="_blank" rel="noopener noreferrer">
                  UGC Higher Education
                </a>
              </li>
              <li>
                <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer">
                  National Anti-Ragging Portal
                </a>
              </li>
              <li><button onClick={() => scrollTo('contact')}>Anti-Ragging Committee</button></li>
              <li><button onClick={() => scrollTo('contact')}>Internal Complaints Cell (ICC)</button></li>
              <li><button onClick={() => scrollTo('rankings')}>IQAC Cell &amp; NIRF DCS</button></li>
              <li><button onClick={() => scrollTo('contact')}>Purchase &amp; Tenders</button></li>
            </ul>
          </div>

          {/* Col 4: Campus Secretariat */}
          <div className="footer-col">
            <h4>Campus Secretariat</h4>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#e0f2fe' }}>
              <div>
                <strong>Campus Location:</strong><br />
                Plot No. 45A, Knowledge Park III, Greater Noida, Uttar Pradesh, India - 201310
              </div>
              <div>
                <strong>Telephony Lines:</strong><br />
                {settings.phonePrimary} | {settings.phoneSecondary}
              </div>
              <div>
                <strong>Correspondence Email:</strong><br />
                {settings.emailGeneral}
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Link 
                  to="/admin/login" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fde047', fontWeight: '700', fontSize: '0.82rem', textDecoration: 'underline' }}
                >
                  <Lock size={13} /> Administrative Portal Login (Staff Only)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Regulatory Disclosures */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: 'inherit' }}>Privacy Policy</a>
            <span>|</span>
            <a href="#about" style={{ color: 'inherit' }}>Terms and Conditions</a>
            <span>|</span>
            <a href="#hero" style={{ color: 'inherit' }}>Site Map</a>
            <span>|</span>
            <a href="#rankings" style={{ color: 'inherit' }}>Mandatory Disclosures</a>
          </div>
          <div>
            © 2026 IIFCCMS Greater Noida. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
