import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Phone, Mail, Award, BookOpen, ExternalLink, Menu, X, 
  Lock, User, MessageCircle, ChevronRight, ChevronDown, Share2
} from 'lucide-react';

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
        { label: "Managing Committee", tab: "managing-committee" },
        { label: "Advisory Council", tab: "advisory-council" },
        { label: "Principal", tab: "principal" },
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
        { label: "Application Form", tab: "apply" },
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
        { label: "Placement Highlights", tab: "highlights" },
        { label: "Our Recruiters", tab: "recruiters" },
        { label: "Training & Grooming", tab: "training" }
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
            <Link to="/about?tab=contact" className="glb-top-link">Alumni</Link>
            <span className="divider">|</span>
            <Link to="/latest-updates?tab=student-activities" className="glb-top-link">Student Corner</Link>
            <span className="divider">|</span>
            <Link to="/about?tab=committees" className="glb-top-link">Public Disclosure</Link>
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
            <svg className="brand-crest-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="#0d5c75" stroke="#c59b27" strokeWidth="3.5"/>
              <path d="M26 62 Q 50 56 50 36 Q 50 56 74 62 L 74 66 Q 50 60 50 40 Q 50 60 26 66 Z" fill="#ffffff"/>
              <path d="M50 20 Q 54 28 50 34 Q 46 28 50 20 Z" fill="#dfb235"/>
              <circle cx="50" cy="30" r="2.5" fill="#ef4444"/>
              <path d="M20 50 A 30 30 0 0 0 50 80 A 30 30 0 0 0 80 50" fill="none" stroke="#dfb235" strokeWidth="2.5" strokeDasharray="4,2"/>
              <text x="50" y="90" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="6.5" fontWeight="bold" fill="#ffffff" textAnchor="middle">ESTD. 1987</text>
            </svg>
            <div className="brand-title-group">
              <h1 className="glb-brand-title">{settings.collegeName}</h1>
              <div className="brand-motto-ribbon">
                <span>FOUNDATION OF LEADERSHIP &amp; COMMERCE EXCELLENCE</span>
              </div>
              <div className="brand-trust-meta">
                Affiliated to Chaudhary Charan Singh University, Meerut (NAAC A++ Grade)
              </div>
            </div>
          </Link>

          <div className="glb-header-right-badges">
            <div className="glb-badge-item">
              <div className="badge-icon"><Award size={18} /></div>
              <div className="badge-text">
                <span className="sup">Govt. University Degree</span>
                <span className="main">NAAC A++ ACCREDITED</span>
              </div>
            </div>
            <div className="glb-badge-item">
              <div className="badge-icon" style={{ background: '#fef3c7', color: '#b45309' }}><BookOpen size={18} /></div>
              <div className="badge-text">
                <span className="sup">Knowledge Park III</span>
                <span className="main">6.47-ACRE CAMPUS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Primary Navigation Bar with Dynamic Hover Dropdowns */}
      <nav className="glb-navbar">
        <div className="container glb-nav-inner">
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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
                  onClick={() => navigateTo(item.path, item.items[0]?.tab)}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} className="dropdown-caret" />
                </div>

                {/* Dropdown Menu Overlay */}
                <ul className={`nav-dropdown-menu ${activeDropdown === item.label ? 'show' : ''}`}>
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx} className="nav-dropdown-item">
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
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="glb-nav-actions">
            <button onClick={() => navigateTo('/admissions', 'apply')} className="glb-btn-apply-now">
              APPLY ONLINE 2026-27
            </button>
            {isAuthenticated ? (
              <Link to="/admin/dashboard" className="glb-btn-admin-link" title="Open Admin Panel">
                <User size={14} /> Admin
              </Link>
            ) : (
              <Link to="/admin/login" className="glb-btn-admin-link" title="Staff Login">
                <Lock size={13} /> Admin
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* 4. Sticky Vertical Right Side Tab */}
      <div className="sticky-vertical-enquiry-tab" onClick={() => navigateTo('/admissions', 'apply')}>
        <span>ADMISSION DESK</span>
        <ChevronRight size={14} style={{ display: 'inline', marginLeft: '2px' }} />
      </div>

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
