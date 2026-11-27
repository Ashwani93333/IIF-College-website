import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import {
  Phone, Mail, Award, BookOpen, ExternalLink, Menu, X,
  Lock, User, MessageCircle, ChevronRight, ChevronDown, Share2,
  Sparkles, CheckCircle2, Building2, Send, FileText, ArrowRight
} from 'lucide-react';
import { iifccmsLogo, ccsuLogo } from '../../assets/assetImages';

export const GOOGLE_REGISTRATION_FORM_URL = "/application-form";

export default function Navbar() {
  const { settings } = useApp();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigateTo = (path, tab) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (tab) {
      navigate(`${path}?tab=${tab}`);
    } else {
      navigate(path);
    }
  };

  const menuConfig = [
    {
      label: "ABOUT US",
      path: "/about",
      items: [
        { label: "History", tab: "history" },
        { label: "Vision & Mission", tab: "vision-mission" },
        { label: "Chairman & Founder", tab: "chairman" },
        { label: "Board of Governors", tab: "board-of-governors" },
        { label: "Managing Committee", tab: "managing-committee" },
        { label: "Advisory Council", tab: "advisory-council" },
        { label: "Principal", tab: "principal" },
        { label: "Approvals & Affiliations", tab: "approvals-affiliations" },
        { label: "Public Disclosure", tab: "public-disclosure" },
        { label: "Social Initiatives", tab: "social-initiatives" },
        { label: "Councils & Committees", tab: "committees" },
        { label: "Contact Us", tab: "contact" }
      ]
    },
    {
      label: "COURSES",
      path: "/courses",
      items: [
        { label: "B.Com.", tab: "bcom" },
        { label: "B.B.A.", tab: "bba" },
        { label: "B.A.", tab: "ba" }
      ]
    },
    {
      label: "ADMISSIONS",
      path: "/admissions",
      items: [
        { label: "Registration Process", tab: "registration" },
        { label: "Admission Notice", tab: "notice" },
        { label: "Information Brochure", tab: "brochure" },
        { label: "IIFCCMS Presentation", tab: "presentation" },
        { label: "Apply Online (Application Form)", path: "/application-form" },
        { label: "Fees", tab: "fees" },
        { label: "How to pay fee ?", tab: "fee-payment" },
        { label: "Document Required", tab: "documents" },
        { label: "Student Speak", tab: "student-speak" }
      ]
    },
    {
      label: "INFRASTRUCTURE & FACILITIES",
      path: "/facilities",
      items: [
        { label: "Campus Tour (YouTube)", tab: "campus-tour" },
        { label: "Classrooms", tab: "classrooms" },
        { label: "Library", tab: "library" },
        { label: "Computer Centre", tab: "computer-centre" },
        { label: "Facilities", tab: "facilities" },
        { label: "Photo Gallery", tab: "photo-gallery" }
      ]
    },
    {
      label: "FACULTY",
      path: "/faculty",
      items: [
        { label: "Faculty Directory", tab: "directory" },
        { label: "Research & Contributions", tab: "research" },
        { label: "Academic Councils", tab: "councils" }
      ]
    },
    {
      label: "CCS UNIVERSITY WEBLINKS",
      path: "/ccsu-weblinks",
      items: [
        { label: "About CCS University", tab: "about-ccsu" },
        { label: "Web Links", tab: "weblinks" }
      ]
    },
    {
      label: "PLACEMENTS",
      path: "/placements",
      items: [
        { label: "Placement Highlights", tab: "highlights" }
      ]
    },
    {
      label: "LATEST UPDATES",
      path: "/latest-updates",
      items: [
        { label: "Conference 2022", tab: "conference-2022" },
        { label: "Student Activities", tab: "student-activities" },
        { label: "Media Presence", tab: "media-presence" },
        { label: "News and Notification", tab: "news-notifications" }
      ]
    }
  ];

  const handleDropdownToggle = (e, item) => {
    e.stopPropagation();
    if (mobileMenuOpen || window.innerWidth <= 1024) {
      setActiveDropdown(prev => prev === item.label ? null : item.label);
    } else {
      navigateTo(item.path, item.items[0]?.tab);
    }
  };

  return (
    <header className="header-master-wrapper">
      {/* 1. Top Utility Bar */}
      <div className="glb-top-utility-bar">
        <div className="container glb-top-container">
          <div className="glb-top-left">
            <span className="glb-college-code">
              COLLEGE CODE - 472
            </span>
            <span className="divider">|</span>
            <Link to="/latest-updates?tab=student-activities" className="glb-top-link">Student Corner</Link>
            <span className="divider">|</span>
            <Link to="/about?tab=public-disclosure" className="glb-top-link">Public Disclosure</Link>
            <span className="divider">|</span>
            <Link to="/facilities?tab=campus-tour" className="glb-top-link">Campus Tour</Link>
            <span className="divider">|</span>
            <Link to="/latest-updates?tab=media-presence" className="glb-top-link">Media</Link>
          </div>

          <div className="glb-top-right">
            {/* Highlighted Yellow/Amber Helpline Box */}
            <div className="glb-helpline-box">
              <span className="helpline-label">HELPLINE NO.</span>
              <a href={`tel:${settings.phonePrimary}`} className="helpline-num">
                {settings.phonePrimary}
              </a>
            </div>

            {/* Social Share Link */}
            <a
              href="#contact"
              className="glb-top-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}
            >
              <Share2 size={12} /> Follow Us
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Brand Header */}
      <div className="glb-main-brand-header">
        <div className="container glb-brand-container">
          <Link to="/" className="brand-identity">
            <img 
              src={iifccmsLogo} 
              alt="IIFCCMS Official College Logo" 
              className="brand-crest-img"
              style={{
                width: '68px',
                height: '68px',
                objectFit: 'contain',
                borderRadius: '50%',
                background: '#ffffff',
                padding: '2px',
                border: '2.5px solid #dfb235',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                flexShrink: 0
              }} 
            />
            <div className="brand-title-group">
              <h1 className="glb-brand-title">IIF College of Commerce &amp; Management Studies</h1>
              <div className="brand-motto-ribbon">
                <span>FOUNDATION OF LEADERSHIP &amp; COMMERCE EXCELLENCE</span>
              </div>
              <div className="brand-trust-meta">
                Affiliated to Chaudhary Charan Singh University, Meerut (UGC Category-1 NACC A++)
              </div>
            </div>
          </Link>

          <div className="glb-header-right-badges">
            <div className="glb-badge-item">
              <div className="badge-icon-box">
                <img 
                  src={ccsuLogo} 
                  alt="Chaudhary Charan Singh University Meerut Official Logo" 
                  style={{
                    width: '38px',
                    height: '38px',
                    objectFit: 'contain',
                    display: 'block'
                  }} 
                />
              </div>
              <div className="badge-text">
                <span className="sup">Govt. University Degree</span>
                <span className="main">CCSU MEERUT • NAAC A++</span>
              </div>
            </div>

            {/* Direct Application Link */}
            <Link
              to="/application-form"
              className="glb-admission-highlight-badge"
              title="Click to Apply Online via Official Application Form"
            >
              <div className="admission-pulse-dot" />
              <div className="badge-icon admission-badge-icon">
                <Sparkles size={18} />
              </div>
              <div className="badge-text">
                <span className="sup-highlight">APPLY ONLINE</span>
                <span className="main-highlight">ADMISSION OPEN</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Primary Navigation Bar with Dynamic Hover Dropdowns */}
      <nav className="glb-navbar">
        <div className="container glb-nav-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Admission Open Highlight Link */}
            <Link
              to="/application-form"
              className="glb-mobile-admission-pill"
            >
              <Sparkles size={13} /> Admission Open
            </Link>
          </div>

          <ul className={`glb-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {menuConfig.map((item, idx) => (
              <li
                key={idx}
                className="nav-item-has-dropdown"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className="glb-nav-link dropdown-parent"
                  onClick={(e) => handleDropdownToggle(e, item)}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} className="dropdown-caret" />
                </div>

                {/* Dropdown Menu Overlay */}
                <ul className={`nav-dropdown-menu ${activeDropdown === item.label ? 'show' : ''}`}>
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx} className="nav-dropdown-item">
                      {sub.externalUrl ? (
                        <a
                          href={sub.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="dropdown-link-btn"
                          style={{ textDecoration: 'none' }}
                        >
                          <span className="sub-label">{sub.label}</span>
                          <ExternalLink size={13} className="sub-arrow" />
                        </a>
                      ) : sub.path ? (
                        <Link
                          to={sub.path}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="dropdown-link-btn"
                          style={{ textDecoration: 'none' }}
                        >
                          <span className="sub-label">{sub.label}</span>
                          <ChevronRight size={13} className="sub-arrow" />
                        </Link>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateTo(item.path, sub.tab);
                          }}
                          className="dropdown-link-btn"
                        >
                          <span className="sub-label">{sub.label}</span>
                          <ChevronRight size={13} className="sub-arrow" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="glb-nav-actions">
            {/* Direct Link for APPLY ONLINE */}
            <Link
              to="/application-form"
              className="glb-btn-apply-now"
              style={{ textDecoration: 'none' }}
            >
              APPLY ONLINE
            </Link>
          </div>
        </div>
      </nav>

      {/* 4. Sticky Vertical Right Side Tab */}
      <Link
        to="/application-form"
        className="sticky-vertical-enquiry-tab"
        style={{ textDecoration: 'none' }}
        title="Open Online Application Form"
      >
        <span>ADMISSION DESK</span>
        <ChevronRight size={14} style={{ display: 'inline', marginLeft: '2px' }} />
      </Link>

      {/* 5. Floating WhatsApp Button (Bottom-Left) */}
      <a
        href="https://wa.me/919811971002?text=Hello%20IIFCCMS%20Admissions%20Desk%2C%20I%20would%20like%20details%20regarding%20courses%20and%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        title="Chat with Admission Counselor on WhatsApp"
      >
        <div className="whatsapp-icon-circle">
          <MessageCircle size={20} />
        </div>
        <span className="whatsapp-text">Send Via WhatsApp</span>
      </a>
    </header>
  );
}
