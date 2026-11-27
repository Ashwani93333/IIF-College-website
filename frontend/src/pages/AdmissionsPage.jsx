import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import FeeCalculator from '../components/public/FeeCalculator';
import { 
  FileCheck, Bell, Download, MonitorPlay, FileEdit, 
  CreditCard, HelpCircle, FileText, MessageSquareQuote, 
  ChevronRight, CheckCircle2, ArrowRight, ExternalLink, Mail, Phone, QrCode, Play
} from 'lucide-react';
import { bankQr } from '../assets/assetImages';


export default function AdmissionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'registration';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'registration', label: 'Registration Process', icon: <FileCheck size={17} /> },
    { key: 'notice', label: 'Admission Notice', icon: <Bell size={17} /> },
    { key: 'brochure', label: 'Information Brochure', icon: <Download size={17} /> },
    { key: 'presentation', label: 'IIFCCMS Presentation', icon: <MonitorPlay size={17} /> },
    { key: 'apply', label: 'Application Form', icon: <FileEdit size={17} /> },
    { key: 'fees', label: 'Fees & Scholarship', icon: <CreditCard size={17} /> },
    { key: 'fee-payment', label: 'How to pay fee ?', icon: <HelpCircle size={17} /> },
    { key: 'documents', label: 'Document Required', icon: <FileText size={17} /> },
    { key: 'student-speak', label: 'Student Speak', icon: <MessageSquareQuote size={17} /> }
  ];

  const documentsList = [
    "Xth Marksheet",
    "Xth Certificate",
    "XIIth Marksheet",
    "Last Exam Passed Marksheet",
    "Recent Passport Sized Photograph",
    "Scanned Signature",
    "Domicile (for other state)",
    "Certificate for Kashmiri Resident",
    "Certificate for Horz./Reservation Category",
    "Certificate for Vert./Caste Category"
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Admissions</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Overview'}</span>
          </div>
          <h1 className="page-main-heading">Admissions Secretariat</h1>
          <p className="page-sub-lead">
            Official admission guidelines, online application portal, banking fee instructions, and document verification checklist.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">Admissions Guide</div>
              <ul className="sidebar-tab-list">
                {tabs.map((tab) => (
                  <li key={tab.key}>
                    <button 
                      onClick={() => setTab(tab.key)}
                      className={`sidebar-tab-btn ${currentTab === tab.key ? 'active' : ''}`}
                    >
                      <span className="tab-icon">{tab.icon}</span>
                      <span className="tab-text">{tab.label}</span>
                      <ChevronRight size={15} className="tab-chevron" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="sidebar-contact-pill">
                <div className="pill-title">Counseling Desk</div>
                <p>Speak to our admission counselors:</p>
                <a href="tel:9999321586" className="pill-phone">+91-9999321586</a>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. Registration Process */}
            {currentTab === 'registration' && (
              <div className="tab-content-card">
                <div className="content-badge">STEP-BY-STEP ADMISSION</div>
                <h2 className="content-heading">Registration Process</h2>

                <p className="tab-lead-desc">
                  Admission to B.Com, BBA, and B.A. programs at IIF CCMS is conducted based on 10+2 merit scores and CCS University admission guidelines.
                </p>

                <div className="process-timeline-list">
                  <div className="timeline-step">
                    <div className="step-badge">Step 1</div>
                    <div className="step-info">
                      <h4>Online Registration &amp; Form Submission</h4>
                      <p>Complete the digital application form online or download the form to submit in person or via email.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="step-badge">Step 2</div>
                    <div className="step-info">
                      <h4>Document Verification &amp; Merit Evaluation</h4>
                      <p>Our counseling secretariat verifies 10th and 12th certificates, category domicile, and evaluates merit scholarship eligibility.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="step-badge">Step 3</div>
                    <div className="step-info">
                      <h4>CCSU Portal Enrollment &amp; Seat Allotment</h4>
                      <p>Candidates complete official Chaudhary Charan Singh University enrollment under B.Com, BBA, and B.A. programs.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="step-badge">Step 4</div>
                    <div className="step-info">
                      <h4>Fee Deposit &amp; Enrollment Kit</h4>
                      <p>Deposit admission fees via SBI Bank Transfer (NEFT/RTGS) or UPI / Bank QR Transfer and collect your provisional admission receipt.</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <button onClick={() => setTab('apply')} className="btn-primary-gold" style={{ fontSize: '0.9rem', fontWeight: 800 }}>
                    Proceed to Application Form <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* 2. Admission Notice */}
            {currentTab === 'notice' && (
              <div className="tab-content-card">
                <div className="content-badge">LATEST CIRCULARS</div>
                <h2 className="content-heading">Admission Notice</h2>
                
                <div className="notice-box-highlight">
                  <div className="notice-date-pill">Enrollment Active</div>
                  <h3>Admissions Open for Undergraduate Degrees</h3>
                  <p>
                    Applications are invited for admission to the first year of <strong>B.Com, BBA, and B.A.</strong> programs affiliated to Chaudhary Charan Singh University, Meerut.
                  </p>
                  <ul className="notice-points">
                    <li>Early-bird merit scholarship registrations are now active.</li>
                    <li>Students awaiting final 12th board results can apply provisionally.</li>
                    <li>Online Google Form submission and direct counseling available.</li>
                  </ul>
                  <div className="notice-sign">
                    <strong>Registrar / Admission Secretariat</strong><br />
                    IIF College of Commerce and Management Studies
                  </div>
                </div>
              </div>
            )}

            {/* 3. Information Brochure */}
            {currentTab === 'brochure' && (
              <div className="tab-content-card">
                <div className="content-badge">DIGITAL PROSPECTUS</div>
                <h2 className="content-heading">Information Brochure</h2>

                <p className="tab-lead-desc">
                  Download the comprehensive institutional brochure containing full course details, faculty profiles, campus facilities, and placement track record.
                </p>

                <div className="brochure-download-card">
                  <div className="brochure-mockup-icon">
                    <FileText size={48} />
                  </div>
                  <div className="brochure-meta">
                    <h3>IIFCCMS Information Prospectus</h3>
                    <p>Format: PDF Document • Size: 4.8 MB • Language: English</p>
                    <ul className="brochure-highlights">
                      <li>Complete course structure for B.Com, BBA &amp; B.A.</li>
                      <li>Scholarship criteria &amp; fee tables</li>
                      <li>Placement partner directory &amp; alumni success stories</li>
                    </ul>
                    <a 
                      href="#download" 
                      onClick={(e) => { e.preventDefault(); alert("IIFCCMS Prospectus downloaded successfully."); }}
                      className="btn-primary-gold"
                      style={{ fontSize: '0.85rem', fontWeight: 800 }}
                    >
                      <Download size={16} /> Download Full Brochure (PDF)
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 4. IIFCCMS Presentation */}
            {currentTab === 'presentation' && (
              <div className="tab-content-card">
                <div className="content-badge">CAMPUS SLIDE DECK</div>
                <h2 className="content-heading">IIFCCMS Institutional Presentation</h2>

                <p className="tab-lead-desc">
                  Explore our corporate overview presentation detailing 35+ years group pedigree, distinguished faculty, and academic infrastructure.
                </p>

                <div className="presentation-frame-wrap">
                  <div className="presentation-slide-preview">
                    <div className="slide-content-center">
                      <MonitorPlay size={54} color="#fde047" />
                      <h3>IIF CCMS Corporate &amp; Academic Overview</h3>
                      <p>Interactive Slide Deck • Knowledge Park III Campus</p>
                      <button 
                        onClick={() => alert("Launching institutional slide deck presentation.")} 
                        className="btn-primary-gold"
                        style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 800 }}
                      >
                        Launch Interactive Presentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Application Form */}
            {currentTab === 'apply' && (
              <div className="tab-content-card">
                <div className="content-badge">ONLINE &amp; OFFLINE APPLICATION</div>
                <h2 className="content-heading">Application Form Submission</h2>

                <p className="tab-lead-desc">
                  Candidates can submit their admission application form through the following modes:
                </p>

                <div className="application-modes-container">
                  {/* Mode 1: ONLINE Google Form */}
                  <div className="app-mode-card app-mode-online">
                    <div className="mode-badge">RECOMMENDED (FAST TRACK)</div>
                    <div className="mode-header">
                      <div className="mode-num">1.</div>
                      <div>
                        <h3>Submit Application Form ONLINE</h3>
                        <p className="mode-subtitle">Instant digital registration via official admission portal</p>
                      </div>
                    </div>
                    <div className="mode-body">
                      <p>
                        Candidate may submit the application form to the college <strong>ONLINE</strong> through our official institutional application portal.
                      </p>
                      <Link 
                        to="/application-form" 
                        className="btn-primary-gold btn-large-cta"
                        style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, textDecoration: 'none' }}
                      >
                        Fill Online Application Form <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Mode 2: PDF Download & Print */}
                  <div className="app-mode-card">
                    <div className="mode-header">
                      <div className="mode-num">2.</div>
                      <div>
                        <h3>Download PDF &amp; Submit in Person / by Post</h3>
                        <p className="mode-subtitle">Physical paper submission</p>
                      </div>
                    </div>
                    <div className="mode-body">
                      <p>
                        Candidate may download the PDF, print it, fill out the particulars, and submit the completed application form to the college <strong>in person</strong> at the admissions secretariat or <strong>by post / courier</strong>.
                      </p>
                      <div className="address-snippet">
                        <strong>Postal Address:</strong> Admissions Secretariat, IIF College of Commerce and Management Studies, Plot No. 45A, Knowledge Park III, Greater Noida - 201310 (UP).
                      </div>
                      <button 
                        onClick={() => alert("Downloading IIFCCMS Application Form (PDF).")} 
                        className="btn-outline-teal"
                        style={{ marginTop: '0.75rem', fontWeight: 700 }}
                      >
                        <Download size={16} /> Download Application Form (PDF)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Fees & Scholarship */}
            {currentTab === 'fees' && (
              <div className="tab-content-card">
                <div className="content-badge">TUITION FEES &amp; SCHOLARSHIP SCHEMES</div>
                <h2 className="content-heading">Fees &amp; Scholarships</h2>

                {/* Lead Official Banner */}
                <div className="history-gold-callout" style={{ marginBottom: '1.75rem' }}>
                  <strong>IIF College of Commerce &amp; Management Studies (IIFCCMS)</strong><br />
                  Degree Programs Affiliated to Chaudhary Charan Singh (CCS) University, Meerut (Accredited NAAC A++)<br />
                  <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>
                    45A, Knowledge Park III, Greater Noida, INDIA | WhatsApp Helpline: 9999321586 | Estd. 2016
                  </span>
                </div>

                {/* Degree Programs Fee Structure Grid */}
                <h3 className="section-sub-title" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                  Degree Programs Yearly Fee Structure
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  {/* BBA Card */}
                  <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderTop: '5px solid #062a36', borderRadius: '8px', padding: '1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '0.8rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '4px' }}>MANAGEMENT</span>
                      <span style={{ background: '#f0fdf4', color: '#166534', fontSize: '0.8rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '4px' }}>DIRECT ADMISSION</span>
                    </div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000000', margin: '0 0 0.35rem' }}>Bachelor of Business Administration (BBA)</h4>
                    <p style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 700, margin: '0 0 1.15rem' }}>
                      3 Years Full Time Regular Program • 6 Semesters<br />
                      <span style={{ color: '#062a36', fontWeight: 800 }}>Direct Admission / Sponsored Category</span>
                    </p>
                    
                    <div style={{ background: '#f8fafc', padding: '1.15rem', borderRadius: '6px', border: '1.5px solid #e2e8f0', marginBottom: '1.15rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Yearly Tuition Fee</div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#062a36', margin: '0.25rem 0' }}>
                        ₹ 80,000<span style={{ fontSize: '1rem', fontWeight: 700, color: '#64748b' }}> / per year</span>
                      </div>
                      <div style={{ fontSize: '0.92rem', color: '#000000', fontWeight: 700 }}>
                        Payable as ₹ 40,000 per semester
                      </div>
                    </div>

                    <div style={{ background: '#fefce8', border: '1.5px solid #fef08a', padding: '0.95rem', borderRadius: '6px', fontSize: '0.95rem', color: '#854d0e', lineHeight: 1.55 }}>
                      <strong>BBA++ (With Domestic Tour):</strong><br />
                      1st Year &amp; 3rd Year Additional Fee will be <strong>₹ 50,000/-</strong>
                    </div>
                  </div>

                  {/* B.Com Card */}
                  <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderTop: '5px solid #0d5c75', borderRadius: '8px', padding: '1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.8rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '4px' }}>COMMERCE</span>
                      <span style={{ background: '#f0fdf4', color: '#166534', fontSize: '0.8rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '4px' }}>DIRECT ADMISSION</span>
                    </div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000000', margin: '0 0 0.35rem' }}>Bachelor of Commerce (B.Com)</h4>
                    <p style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 700, margin: '0 0 1.15rem' }}>
                      3 Years Full Time Regular Program • 6 Semesters<br />
                      <span style={{ color: '#062a36', fontWeight: 800 }}>Direct Admission / Sponsored Category</span>
                    </p>
                    
                    <div style={{ background: '#f8fafc', padding: '1.15rem', borderRadius: '6px', border: '1.5px solid #e2e8f0', marginBottom: '1.15rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Yearly Tuition Fee</div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#062a36', margin: '0.25rem 0' }}>
                        ₹ 50,000<span style={{ fontSize: '1rem', fontWeight: 700, color: '#64748b' }}> / per year</span>
                      </div>
                      <div style={{ fontSize: '0.92rem', color: '#000000', fontWeight: 700 }}>
                        Payable as ₹ 25,000 per semester
                      </div>
                    </div>

                    <div style={{ background: '#fefce8', border: '1.5px solid #fef08a', padding: '0.95rem', borderRadius: '6px', fontSize: '0.95rem', color: '#854d0e', lineHeight: 1.55 }}>
                      <strong>BCom++ (With Domestic Tour):</strong><br />
                      1st Year &amp; 3rd Year Additional Fee will be <strong>₹ 30,000/-</strong>
                    </div>
                  </div>
                </div>

                {/* Key Admission Parameters & Guidelines */}
                <div style={{ background: '#ffffff', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '1.75rem', marginBottom: '2rem' }}>
                  <h3 className="section-sub-title" style={{ margin: '0 0 1.15rem 0' }}>
                    Admission Eligibility &amp; Selection Requirements
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                    <div style={{ borderLeft: '3.5px solid #062a36', paddingLeft: '0.95rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Minimum Eligibility</div>
                      <p style={{ margin: '0.35rem 0 0', fontSize: '1.08rem', color: '#000000', fontWeight: 800, lineHeight: 1.5 }}>
                        50% for General (45% for SC/ST/OBC) in 12th Class.<br />
                        <span style={{ fontSize: '0.95rem', color: '#15803d', fontWeight: 700 }}>Final Year Students can Apply.</span>
                      </p>
                    </div>

                    <div style={{ borderLeft: '3.5px solid #062a36', paddingLeft: '0.95rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Medium of Instruction</div>
                      <p style={{ margin: '0.35rem 0 0', fontSize: '1.08rem', color: '#000000', fontWeight: 800 }}>
                        English
                      </p>
                    </div>

                    <div style={{ borderLeft: '3.5px solid #062a36', paddingLeft: '0.95rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Direct Admission Seats</div>
                      <p style={{ margin: '0.35rem 0 0', fontSize: '1.08rem', color: '#000000', fontWeight: 800 }}>
                        NO Written Test Required
                      </p>
                    </div>

                    <div style={{ borderLeft: '3.5px solid #062a36', paddingLeft: '0.95rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Apply At</div>
                      <p style={{ margin: '0.35rem 0 0', fontSize: '1.08rem', color: '#000000', fontWeight: 800 }}>
                        Fill Physical Form of IIF and Online Form of CCSU
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Fee Structure Table */}
                <h3 className="section-sub-title" style={{ marginTop: '2.25rem', marginBottom: '1rem' }}>
                  Institutional Fee Schedule &amp; Particulars
                </h3>

                <div className="table-responsive-wrapper" style={{ border: '2px solid #555555', borderRadius: '4px', overflow: 'hidden', background: '#ffffff', marginBottom: '1.75rem' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #555555' }}>
                        <th style={{ border: '1px solid #777777', padding: '10px 12px', textAlign: 'center', width: '60px', fontWeight: 900, color: '#000000' }}>Item</th>
                        <th style={{ border: '1px solid #777777', padding: '10px 14px', textAlign: 'left', fontWeight: 900, color: '#000000' }}>Particulars / Head</th>
                        <th style={{ border: '1px solid #777777', padding: '10px 14px', textAlign: 'right', width: '190px', fontWeight: 900, color: '#000000' }}>Amount (₹)</th>
                        <th style={{ border: '1px solid #777777', padding: '10px 14px', textAlign: 'center', width: '180px', fontWeight: 900, color: '#000000' }}>Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #777777' }}>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#000000' }}>1</td>
                        <td style={{ border: '1px solid #777777', padding: '9px 12px', fontWeight: 700, color: '#000000' }}>Application Form Fee</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'right', padding: '9px 12px', fontWeight: 900, color: '#000000' }}>₹ 1,000/-</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 700, color: '#475569' }}>At IIF &amp; CCSU Portal as applicable</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #777777' }}>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#000000' }}>2</td>
                        <td style={{ border: '1px solid #777777', padding: '9px 12px', fontWeight: 700, color: '#000000' }}>Admission Fee</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'right', padding: '9px 12px', fontWeight: 900, color: '#000000' }}>₹ 5,000/-</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#dc2626' }}>Non-Refundable</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #777777' }}>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#000000' }}>3</td>
                        <td style={{ border: '1px solid #777777', padding: '9px 12px', fontWeight: 700, color: '#000000' }}>Security Deposit</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'right', padding: '9px 12px', fontWeight: 900, color: '#000000' }}>₹ 10,000/-</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#16a34a' }}>Refundable</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #777777' }}>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#000000' }}>4</td>
                        <td style={{ border: '1px solid #777777', padding: '9px 12px', fontWeight: 700, color: '#000000' }}>Alumni Fee</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'right', padding: '9px 12px', fontWeight: 900, color: '#000000' }}>₹ 10,000/-</td>
                        <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '9px', fontWeight: 800, color: '#475569' }}>One Time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Important Fee Coverage & Policy Callout */}
                <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderLeft: '5px solid #062a36', borderRadius: '6px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.15rem', color: '#000000', fontWeight: 900 }}>Fee Coverage &amp; Examination Guidelines:</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '1.02rem', color: '#000000', fontWeight: 700 }}>
                    <li>The Fee includes tuition, cost of study material, test questions, case studies and conduct of seminars, use of library and sports facilities &amp; subscription to <em>Finance India</em> etc.</li>
                    <li>The Examination Fee and Viva-Voce Fee is Charged by University Directly to be paid by the Students.</li>
                    <li style={{ color: '#b91c1c' }}>Fee once paid would not be refunded.</li>
                  </ul>
                </div>

                {/* Scholarships and Fee Concessions (offered since 2016) upto Rs. 50,000/- */}
                <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '8px', padding: '1.75rem', marginBottom: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.35rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.85rem' }}>
                    <div>
                      <h3 className="section-sub-title" style={{ margin: 0 }}>
                        Scholarships and Fee Concessions for Deserving Candidates
                      </h3>
                      <p style={{ margin: '0.25rem 0 0', fontSize: '0.98rem', color: '#15803d', fontWeight: 800 }}>
                        Offered since 2016 • Upto Rs. 50,000/- Benefit
                      </p>
                    </div>
                    <Link 
                      to="/application-form" 
                      className="btn-primary-gold"
                      style={{ padding: '0.6rem 1.35rem', fontSize: '0.9rem', fontWeight: 800, textDecoration: 'none' }}
                    >
                      Fill Scholarship Form
                    </Link>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    {/* Category a */}
                    <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '6px', border: '1.5px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ background: '#062a36', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>a</span>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#000000' }}>Merit / Means Scholarship</h4>
                      </div>
                      <p style={{ margin: 0, fontSize: '1rem', color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                        Special tuition concession for deserving meritorious candidates facing financial constraints.
                      </p>
                    </div>

                    {/* Category b */}
                    <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '6px', border: '1.5px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ background: '#062a36', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>b</span>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#000000' }}>University &amp; College Toppers</h4>
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#15803d', marginBottom: '0.35rem' }}>Upto 25% of Tuition Fee</div>
                      <p style={{ margin: 0, fontSize: '1rem', color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                        For University Toppers (Top 5) &amp; College Topper (with Distinction).
                      </p>
                    </div>

                    {/* Category c */}
                    <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '6px', border: '1.5px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ background: '#062a36', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>c</span>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#000000' }}>Academic Merit (&gt; 80%)</h4>
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#15803d', marginBottom: '0.35rem' }}>Upto 10% of Tuition Fee</div>
                      <p style={{ margin: 0, fontSize: '1rem', color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                        For Applicants with Graduation / PG / Qualifying Marks more than 80%.
                      </p>
                    </div>

                    {/* Category d */}
                    <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '6px', border: '1.5px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ background: '#062a36', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>d</span>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#000000' }}>Special Category Concessions</h4>
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#15803d', marginBottom: '0.35rem' }}>Upto 25% of Tuition Fee</div>
                      <ul style={{ margin: 0, paddingLeft: '1.15rem', fontSize: '0.96rem', color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                        <li><strong>EWS:</strong> Family Income Less than 2 Lakhs.</li>
                        <li><strong>Excellence:</strong> In Sports; Acting; Art &amp; Culture; other Achievements.</li>
                        <li><strong>Defence Background:</strong> Including War Widow &amp; wards of Defence Personnel.</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.35rem', padding: '1rem', background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '6px', textAlign: 'center', fontSize: '1rem', color: '#166534', fontWeight: 800 }}>
                    Fill Scholarship Application Form for Applying under any of the Above Categories.<br />
                    <span style={{ fontSize: '0.92rem', color: '#334155' }}>
                      Further information see Website / Prospectus or Contact: <strong>9999321586</strong> (WhatsApp Helpline)
                    </span>
                  </div>
                </div>

                {/* Interactive Fee Estimator Full Card */}
                <FeeCalculator />
              </div>
            )}

            {/* 7. How To Pay Fees? */}
            {currentTab === 'fee-payment' && (
              <div className="tab-content-card">
                <div className="content-badge">BANKING &amp; REMITTANCE</div>
                <h2 className="content-heading">How to Pay Fees?</h2>

                <p className="tab-lead-desc">
                  Deposit your admission and semester fees securely through State Bank of India bank transfer, UPI digital payments, or official bank QR code scan:
                </p>

                <div className="payment-modes-detail-layout">
                  {/* Mode 1: SBI Bank Transfer */}
                  <div className="bank-account-card">
                    <div className="card-top-head">
                      <span className="mode-tag">MODE 1: BANK TRANSFER</span>
                      <h3>By NEFT / IMPS / RTGS / Bank Transfer</h3>
                    </div>

                    <div className="bank-details-table">
                      <div className="detail-row">
                        <span className="d-label">Bank Name:</span>
                        <strong className="d-val">State Bank of India (SBI)</strong>
                      </div>
                      <div className="detail-row">
                        <span className="d-label">Account No.:</span>
                        <strong className="d-val sbi-acc">65224457696</strong>
                      </div>
                      <div className="detail-row">
                        <span className="d-label">IFS Code:</span>
                        <strong className="d-val">SBIN0004324</strong>
                      </div>
                      <div className="detail-row">
                        <span className="d-label">Branch Code:</span>
                        <span className="d-val">(04324) - Greater Noida</span>
                      </div>
                      <div className="detail-row">
                        <span className="d-label">Branch Address:</span>
                        <span className="d-val">
                          Lager Stroemia Shopping Centre Noida, UP, Gautam Buddha Nagar, Uttar Pradesh – 201308
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mode 2: Digital Wallet & UPI */}
                  <div className="bank-account-card" style={{ borderLeft: '5px solid #0284c7', background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)' }}>
                    <div className="card-top-head">
                      <span className="mode-tag" style={{ background: '#0284c7' }}>MODE 2: DIGITAL WALLET &amp; UPI</span>
                      <h3>By Digital Wallet, UPI &amp; Debit / Credit Cards</h3>
                    </div>

                    <div className="paytm-details-box" style={{ border: '1px solid #bae6fd' }}>
                      <div className="paytm-name-row" style={{ color: '#062a36', fontSize: '1rem', fontWeight: 800, marginBottom: '0.85rem' }}>
                        <span>Beneficiary / Merchant Name: </span>
                        <strong style={{ color: '#062a36' }}>IIF College of Commerce and Management Studies</strong>
                      </div>
                      <div className="paytm-num-box" style={{ background: '#f0f9ff', border: '1.5px dashed #0284c7', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem' }}>
                        <span className="p-lbl" style={{ color: '#0369a1', fontWeight: 800, fontSize: '0.85rem' }}>Registered Official Mobile / UPI Number:</span>
                        <div className="p-num" style={{ color: '#0284c7', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '2px', fontFamily: 'monospace' }}>9999321586</div>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#000000', fontWeight: 700 }}>
                        Accepted modes: UPI (Google Pay, PhonePe, BHIM), Linked Bank Account, and all major Debit &amp; Credit Cards.
                      </p>
                    </div>
                  </div>

                  {/* Mode 3: Official Bank UPI QR Code */}
                  <div className="bank-account-card" style={{ borderLeft: '5px solid #059669', background: '#f8fafc' }}>
                    <div className="card-top-head">
                      <span className="mode-tag" style={{ background: '#059669' }}>MODE 3: INSTANT UPI QR SCAN</span>
                      <h3>Scan Official Bank QR to Deposit Fees</h3>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
                      {/* Left: Bank Details matching Mode 1 */}
                      <div style={{ flex: '1 1 360px' }}>
                        <div className="bank-details-table">
                          <div className="detail-row">
                            <span className="d-label">Beneficiary Name:</span>
                            <strong className="d-val">IIF College of Commerce and Management Studies</strong>
                          </div>
                          <div className="detail-row">
                            <span className="d-label">Designated Bank:</span>
                            <strong className="d-val">State Bank of India (SBI)</strong>
                          </div>
                          <div className="detail-row">
                            <span className="d-label">Account No.:</span>
                            <strong className="d-val sbi-acc">65224457696</strong>
                          </div>
                          <div className="detail-row">
                            <span className="d-label">Accepted UPI Apps:</span>
                            <span className="d-val" style={{ fontWeight: 800, color: '#062a36' }}>Google Pay, PhonePe, BHIM, SBI YONO &amp; All UPI</span>
                          </div>
                          <div className="detail-row">
                            <span className="d-label">Transaction Reference:</span>
                            <span className="d-val" style={{ color: '#059669', fontWeight: 800 }}>Please save the 12-digit UTR/Ref No. after payment</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Bank UPI QR Code */}
                      <div style={{ flex: '0 0 auto', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', padding: '12px', background: '#ffffff', borderRadius: '12px', border: '1.5px solid #cbd5e1', boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                          <img 
                            src={bankQr} 
                            alt="IIFCCMS Official Bank UPI QR Code" 
                            style={{ width: '210px', height: 'auto', display: 'block', borderRadius: '6px' }} 
                          />
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#062a36', fontWeight: 800, marginTop: '0.65rem' }}>
                          Official SBI UPI QR Code
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#000000', fontWeight: 700 }}>
                          Scan to Deposit Directly to College Account
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. Document Required */}
            {currentTab === 'documents' && (
              <div className="tab-content-card">
                <div className="content-badge">VERIFICATION CHECKLIST</div>
                <h2 className="content-heading">List of Documents Required for Admission</h2>

                <p className="tab-lead-desc">
                  Candidates are required to produce original certificates along with self-attested photocopies during enrollment verification:
                </p>

                <div className="table-responsive-wrapper">
                  <table className="styled-academic-table documents-table">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>S.No.</th>
                        <th>Document Name</th>
                        <th style={{ width: '150px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documentsList.map((doc, idx) => (
                        <tr key={idx}>
                          <td><strong>{idx + 1}</strong></td>
                          <td className="doc-name-cell">{doc}</td>
                          <td>
                            <span className="mandatory-tag">Mandatory</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 9. Student Speak */}
            {currentTab === 'student-speak' && (
              <div className="tab-content-card">
                <div className="content-badge">STUDENT VOICES &amp; EXPERIENCES</div>
                <h2 className="content-heading">Student Speak</h2>

                <p className="tab-lead-desc" style={{ color: '#000000', fontWeight: 700, marginBottom: '2rem' }}>
                  Watch firsthand video reflections and hear directly from our enrolled students on their learning journey, academic mentorship, and campus life at IIF CCMS:
                </p>

                {/* Video Testimonials Grid - Instant Direct Playback */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
                  {/* Video 1: Praveen */}
                  <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: '#000000' }}>
                      <iframe
                        src="https://www.youtube.com/embed/bLNqcKnAm9Y?rel=0"
                        title="IIF College B.Com. First Year Student PRAVEEN"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div style={{ padding: '1.25rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                          <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.78rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                            B.COM FIRST YEAR
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#dc2626', fontSize: '0.78rem', fontWeight: 800 }}>
                            <Play size={12} fill="#dc2626" /> Video Testimonial
                          </span>
                        </div>
                        <h4 style={{ margin: '0 0 0.35rem', fontSize: '1.2rem', fontWeight: 900, color: '#000000' }}>
                          Praveen
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', fontWeight: 700 }}>
                          IIF College B.Com. First Year Student
                        </p>
                      </div>
                      <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                        <a 
                          href="https://youtu.be/bLNqcKnAm9Y" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#0d5c75', fontWeight: 800, textDecoration: 'none' }}
                        >
                          <span>Watch on YouTube</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Video 2: Vivek Saini */}
                  <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: '#000000' }}>
                      <iframe
                        src="https://www.youtube.com/embed/mr4vy1m7UrY?rel=0"
                        title="IIF College B.Com. First Year Student VIVEK SAINI"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div style={{ padding: '1.25rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                          <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.78rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                            B.COM FIRST YEAR
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#dc2626', fontSize: '0.78rem', fontWeight: 800 }}>
                            <Play size={12} fill="#dc2626" /> Video Testimonial
                          </span>
                        </div>
                        <h4 style={{ margin: '0 0 0.35rem', fontSize: '1.2rem', fontWeight: 900, color: '#000000' }}>
                          Vivek Saini
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', fontWeight: 700 }}>
                          IIF College B.Com. First Year Student
                        </p>
                      </div>
                      <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                        <a 
                          href="https://youtu.be/mr4vy1m7UrY" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#0d5c75', fontWeight: 800, textDecoration: 'none' }}
                        >
                          <span>Watch on YouTube</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Video 3: Gulshan Kumar Singh */}
                  <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: '#000000' }}>
                      <iframe
                        src="https://www.youtube.com/embed/5b4t4e9BH-s?rel=0"
                        title="IIF College B.Com First Year Student GULSHAN KUMAR SINGH"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div style={{ padding: '1.25rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                          <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.78rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                            B.COM FIRST YEAR
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#dc2626', fontSize: '0.78rem', fontWeight: 800 }}>
                            <Play size={12} fill="#dc2626" /> Video Testimonial
                          </span>
                        </div>
                        <h4 style={{ margin: '0 0 0.35rem', fontSize: '1.2rem', fontWeight: 900, color: '#000000' }}>
                          Gulshan Kumar Singh
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', fontWeight: 700 }}>
                          IIF College B.Com First Year Student
                        </p>
                      </div>
                      <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                        <a 
                          href="https://youtu.be/5b4t4e9BH-s" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#0d5c75', fontWeight: 800, textDecoration: 'none' }}
                        >
                          <span>Watch on YouTube</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Written Testimonials */}
                <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '2px dashed #cbd5e1' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000000', marginBottom: '1.25rem' }}>
                    Student Reflections &amp; Campus Feedback
                  </h3>
                  <div className="student-speak-grid">
                    <div className="speak-card">
                      <p className="quote">
                        "The faculty at IIF CCMS goes beyond textbook lectures to teach live financial models and industry analysis. The supportive environment helped me land a great campus placement."
                      </p>
                      <div className="author">
                        <strong>Rohan Varma</strong>
                        <span>BBA Final Year • Class Representative</span>
                      </div>
                    </div>

                    <div className="speak-card">
                      <p className="quote">
                        "Access to the 55,000+ book central library and specialized guest lectures by former IIM/IIT professors gave me a distinct edge in commerce competitions."
                      </p>
                      <div className="author">
                        <strong>Sneha Patel</strong>
                        <span>B.Com Class of 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
