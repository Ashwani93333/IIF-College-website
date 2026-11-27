import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import FeeCalculator from '../components/public/FeeCalculator';
import { 
  FileCheck, Bell, Download, MonitorPlay, FileEdit, 
  CreditCard, HelpCircle, FileText, MessageSquareQuote, 
  ChevronRight, CheckCircle2, ArrowRight, ExternalLink, Mail, Phone, QrCode
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
                      <p>Deposit admission fees via SBI Bank Transfer (NEFT/RTGS) or Paytm and collect your provisional admission receipt.</p>
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
                  Candidates have three flexible modes to submit their admission application form:
                </p>

                <div className="application-modes-container">
                  {/* Mode 1: ONLINE Google Form */}
                  <div className="app-mode-card app-mode-online">
                    <div className="mode-badge">RECOMMENDED (FAST TRACK)</div>
                    <div className="mode-header">
                      <div className="mode-num">1</div>
                      <div>
                        <h3>Submit Application Form ONLINE</h3>
                        <p>Instant digital registration via official admission portal</p>
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
                      <div className="mode-num">2</div>
                      <div>
                        <h3>Download PDF &amp; Submit in Person / by Post</h3>
                        <p>Physical paper submission</p>
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

                  {/* Mode 3: Excel Download & Email */}
                  <div className="app-mode-card">
                    <div className="mode-header">
                      <div className="mode-num">3</div>
                      <div>
                        <h3>Download Excel Form &amp; Submit via Email</h3>
                        <p>Digital email submission</p>
                      </div>
                    </div>
                    <div className="mode-body">
                      <p>
                        Candidate may download the Excel application template and email the completed Excel file directly to our admissions team at <strong>iifccms@gmail.com</strong>.
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                        <button 
                          onClick={() => alert("Downloading IIFCCMS Application Template (Excel).")} 
                          className="btn-outline-teal"
                          style={{ fontWeight: 700 }}
                        >
                          <Download size={16} /> Download Form (Excel)
                        </button>
                        <a 
                          href="mailto:iifccms@gmail.com?subject=Completed%20Admission%20Application%20Form" 
                          className="btn-email-cta"
                          style={{ fontWeight: 700 }}
                        >
                          <Mail size={16} /> Email to iifccms@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Fees & Scholarship */}
            {currentTab === 'fees' && (
              <div>
                <FeeCalculator />
              </div>
            )}

            {/* 7. How To Pay Fees? */}
            {currentTab === 'fee-payment' && (
              <div className="tab-content-card">
                <div className="content-badge">BANKING &amp; REMITTANCE</div>
                <h2 className="content-heading">How to Pay Fees?</h2>

                <p className="tab-lead-desc">
                  Deposit your admission and semester fees securely through State Bank of India bank transfer or Paytm digital payments:
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

                  {/* Mode 2: Paytm */}
                  <div className="paytm-account-card">
                    <div className="card-top-head">
                      <span className="mode-tag paytm-tag">MODE 2: DIGITAL WALLET &amp; UPI</span>
                      <h3>By Paytm - Wallet &amp; Bank Account / Any Debit / Credit Card / Paytm Postpaid</h3>
                    </div>

                    <div className="paytm-details-box">
                      <div className="paytm-name-row">
                        <span>Paytm Merchant:</span>
                        <strong>IIF College of Commerce and Management Studies</strong>
                      </div>
                      <div className="paytm-num-box">
                        <span className="p-lbl">Registered Paytm Mobile Number:</span>
                        <div className="p-num">9999321586</div>
                      </div>
                      <p className="paytm-hint">
                        Accepted modes: Paytm Wallet, Linked Bank Account, All Debit &amp; Credit Cards, UPI (GPay, PhonePe, Paytm), and Paytm Postpaid.
                      </p>
                    </div>
                  </div>

                  {/* Mode 3: Official Bank UPI QR Code */}
                  <div className="bank-account-card" style={{ textAlign: 'center', background: '#f8fafc', border: '2px solid #0284c7' }}>
                    <div className="card-top-head" style={{ justifyContent: 'center' }}>
                      <span className="mode-tag" style={{ background: '#0284c7' }}>MODE 3: INSTANT UPI QR SCAN</span>
                    </div>
                    <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.05rem', color: '#062a36' }}>
                      Scan Official Bank QR to Deposit Fees
                    </h3>
                    <div style={{ display: 'inline-block', padding: '12px', background: '#ffffff', borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                      <img 
                        src={bankQr} 
                        alt="IIFCCMS Official Bank UPI QR Code" 
                        style={{ width: '220px', height: 'auto', display: 'block', borderRadius: '6px' }} 
                      />
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.75rem' }}>
                      Scan via GPay, PhonePe, Paytm, BHIM, or any Banking UPI app. Please note down the 12-digit UTR/Ref No.
                    </p>
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
                <div className="content-badge">STUDENT VOICES</div>
                <h2 className="content-heading">Student Speak</h2>

                <p className="tab-lead-desc">
                  Read firsthand experiences from our enrolled students and recent alumni across commerce and management streams.
                </p>

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
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
