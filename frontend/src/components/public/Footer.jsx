import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import AdminLoginModal from './AdminLoginModal';
import { 
  MapPin, Phone, Mail, Award, Lock, ExternalLink, 
  ChevronRight, ShieldCheck, GraduationCap, Building2, BookOpen
} from 'lucide-react';
import { iifccmsLogo, ccsuLogo } from '../../assets/assetImages';

export default function Footer() {
  const { settings } = useApp();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showAdminModal, setShowAdminModal] = useState(false);

  const handleAnchorClick = (id) => {
    if (window.location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(`/#${id}`);
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Institutional Identity & Social Media */}
          <div className="footer-col footer-col-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img
                src={iifccmsLogo}
                alt="IIFCCMS Official College Logo"
                style={{
                  height: '56px',
                  width: 'auto',
                  maxWidth: '65px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <img
                src={ccsuLogo}
                alt="CCS University Official Logo"
                style={{
                  height: '48px',
                  width: 'auto',
                  maxWidth: '55px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <div>
                <h4 style={{ margin: 0, padding: 0, fontSize: '1.05rem', color: '#ffffff', letterSpacing: '0.3px' }}>
                  IIFCCMS Greater Noida
                </h4>
                <span style={{ fontSize: '0.72rem', color: '#dfb235', fontWeight: '700', letterSpacing: '0.5px' }}>
                  COLLEGE CODE - 472 • AFFILIATED TO CCSU
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: '1.65', color: '#cbd5e1', marginBottom: '1rem' }}>
              <strong>IIF College of Commerce and Management Studies</strong> is affiliated to{' '}
              <strong style={{ color: '#ffffff' }}>Chaudhary Charan Singh University, Meerut (NAAC A++ Accredited)</strong>.
              Carrying forward the 35+ years academic pedigree of the Indian Institute of Finance (Estd. 1987).
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="footer-badge">
                <Award size={13} color="#fde047" />
                <span>CCSU College Code: 472</span>
              </span>
              <span className="footer-badge">
                <ShieldCheck size={13} color="#fde047" />
                <span>NAAC A++ Affiliated</span>
              </span>
            </div>

            {/* Social Media Connect Row */}
            <div>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', fontWeight: '700', marginBottom: '0.5rem' }}>
                Connect With Us
              </div>
              <div className="footer-social-bar">
                {/* WhatsApp */}
                <a 
                  href="https://api.whatsapp.com/send?phone=919811971002&text=Hello%20IIFCCMS%20Admissions%20Desk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/school/indian-institute-of-finance/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn"
                  title="Follow on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/watch?v=6N7r5WlMhqk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn"
                  title="Watch on YouTube"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/iifccms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn"
                  title="Join Facebook Community"
                  aria-label="Facebook"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/iifccms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn"
                  title="Follow on Instagram"
                  aria-label="Instagram"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://x.com/iifccms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn"
                  title="Follow on X"
                  aria-label="X (formerly Twitter)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programs & Admissions */}
          <div className="footer-col">
            <h4>Academic Programs</h4>
            <ul className="footer-links">
              <li>
                <Link to="/courses?tab=bcom">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Bachelor of Commerce (B.Com)</span>
                </Link>
              </li>
              <li>
                <Link to="/courses?tab=bba">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Bachelor of Business Administration (B.B.A)</span>
                </Link>
              </li>
              <li>
                <Link to="/courses?tab=ba">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Bachelor of Arts (B.A)</span>
                </Link>
              </li>
              <li style={{ marginTop: '0.4rem', paddingTop: '0.4rem', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
                <Link to="/admissions?tab=registration">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span style={{ color: '#fde047', fontWeight: '600' }}>Admissions Desk</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions?tab=brochure">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Information Brochure &amp; Curriculum</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions?tab=fees">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Fee Structure &amp; Regulations</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions?tab=fee-payment">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Online Fee Payment (SBI / UPI)</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions?tab=documents">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Document Verification Checklist</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus Facilities & Quick Access */}
          <div className="footer-col">
            <h4>Campus &amp; Student Life</h4>
            <ul className="footer-links">
              <li>
                <Link to="/facilities?tab=campus-tour">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>6.47-Acre Campus Tour (Video)</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities?tab=library">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Central Library (55,000+ Books)</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities?tab=computer-centre">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Advanced Computer Labs</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities?tab=facilities">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Sports, Cafeteria &amp; Hostels</span>
                </Link>
              </li>
              <li>
                <Link to="/faculty">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Distinguished Faculty Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/placements">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Placement Highlights &amp; Partners</span>
                </Link>
              </li>
              <li>
                <Link to="/latest-updates?tab=news-notifications">
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Official Notices &amp; Circulars</span>
                </Link>
              </li>
              <li>
                <button type="button" onClick={() => handleAnchorClick('why-iif')}>
                  <ChevronRight size={13} className="footer-link-arrow" />
                  <span>Why IIFCCMS Advantages</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Secretariat & Helplines */}
          <div className="footer-col">
            <h4>Campus Secretariat</h4>
            <div className="footer-contact-block">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <div>
                  <strong style={{ color: '#ffffff' }}>Greater Noida Campus:</strong><br />
                  Plot No. 45A, Knowledge Park III, Greater Noida, Delhi NCR - 201310, India
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <div>
                  <strong style={{ color: '#ffffff' }}>Admissions &amp; Helplines:</strong><br />
                  <a href="tel:+919811971002" className="footer-contact-link">+91 98119 71002</a>
                  {' | '}
                  <a href="tel:+919811537057" className="footer-contact-link">+91 98115 37057</a>
                  <br />
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>EPABX: 0120-2323683, 2323687</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <div>
                  <strong style={{ color: '#ffffff' }}>Correspondence Inquiries:</strong><br />
                  <a href="mailto:info@iifccms.edu.in" className="footer-contact-link">info@iifccms.edu.in</a>
                  <br />
                  <a href="mailto:admission@iifccms.edu.in" className="footer-contact-link">admission@iifccms.edu.in</a>
                </div>
              </div>

              {/* Regulatory Shortcuts */}
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <a 
                  href="https://www.ccsuniversity.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-external-link"
                >
                  <ExternalLink size={12} /> CCSU Official University Portal
                </a>
                <a 
                  href="https://www.antiragging.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-external-link"
                >
                  <ExternalLink size={12} /> National Anti-Ragging Portal
                </a>
              </div>

              {/* Staff Login */}
              <div style={{ marginTop: '0.65rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    if (isAuthenticated) {
                      navigate('/admin/dashboard');
                    } else {
                      setShowAdminModal(true);
                    }
                  }}
                  className="footer-staff-login"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                >
                  <Lock size={12} /> Administrative Portal Login (Staff Only)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="footer-bottom-copy" style={{ textAlign: 'center' }}>
            <div>© 2026 IIFCCMS Greater Noida. All Rights Reserved.</div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>
              Affiliated to CCS University, Meerut (College Code: 472)
            </div>
          </div>
        </div>
      </div>

      {/* Admin Login Pop-up Modal */}
      <AdminLoginModal
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
      />
    </footer>
  );
}