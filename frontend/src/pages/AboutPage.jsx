import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { 
  History, Target, Award, Users, Shield, 
  GraduationCap, ListChecks, Phone, Mail, MapPin, 
  ChevronRight, ExternalLink, BookOpen, CheckCircle2,
  Building2, FileText, HeartHandshake, ShieldCheck, Download
} from 'lucide-react';

import iifImg1 from '../assets/front-banners/IIF1.jpeg';
import iifImg2 from '../assets/front-banners/IIF2.jpg';
import iifImg3 from '../assets/front-banners/IIF3.jpg';

// Authentic PDF Download Badge matching reference screenshots
function PdfDownloadBadge({ label }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert(`Downloading ${label || 'Document'} (PDF)...`);
  };

  return (
    <a 
      href="#download-pdf" 
      onClick={handleClick} 
      className="official-pdf-badge"
      title={`Download ${label || 'Document'} PDF`}
    >
      <div className="pdf-paper-icon">
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
          <path d="M2 2C2 0.895431 2.89543 0 4 0H16L22 6V28C22 29.1046 21.1046 30 20 30H4C2.89543 30 2 29.1046 2 28V2Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2"/>
          <path d="M16 0V6H22" fill="#e2e8f0"/>
          <rect x="4" y="14" width="16" height="11" rx="1.5" fill="#ef4444"/>
          <text x="12" y="22.5" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PDF</text>
          <path d="M12 5V11M12 11L9.5 8.5M12 11L14.5 8.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {label && <span className="pdf-label-text">{label}</span>}
    </a>
  );
}

export default function AboutPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'history';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'history', label: 'History', icon: <History size={17} /> },
    { key: 'vision-mission', label: 'Vision & Mission', icon: <Target size={17} /> },
    { key: 'chairman', label: 'Chairman & Founder', icon: <Award size={17} /> },
    { key: 'board-of-governors', label: 'Board of Governors', icon: <Building2 size={17} /> },
    { key: 'managing-committee', label: 'Managing Committee', icon: <Users size={17} /> },
    { key: 'advisory-council', label: 'Advisory Council', icon: <Shield size={17} /> },
    { key: 'principal', label: 'Principal', icon: <GraduationCap size={17} /> },
    { key: 'approvals-affiliations', label: 'Approvals & Affiliations', icon: <CheckCircle2 size={17} /> },
    { key: 'public-disclosure', label: 'Public Disclosure', icon: <FileText size={17} /> },
    { key: 'social-initiatives', label: 'Social Initiatives', icon: <HeartHandshake size={17} /> },
    { key: 'committees', label: 'Councils & Committees', icon: <ListChecks size={17} /> },
    { key: 'contact', label: 'Contact Us', icon: <Phone size={17} /> }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      {/* Hero Page Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>About Us</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Overview'}</span>
          </div>
          <h1 className="page-main-heading">About IIF CCMS</h1>
          <p className="page-sub-lead">
            Discover our institutional genesis, visionary leadership, statutory governance, and commitment to holistic higher education.
          </p>
        </div>
      </div>

      {/* Main Dual-Column Content Layout */}
      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sticky Sidebar Tabs */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">About Us Navigation</div>
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
                <div className="pill-title">Need Guidance?</div>
                <p>Call our central secretariat helpline:</p>
                <a href="tel:9811971002" className="pill-phone">+91 98119 71002</a>
              </div>
            </div>
          </aside>

          {/* Right Dynamic View Area */}
          <main className="page-main-content">
            {/* 1. History */}
            {currentTab === 'history' && (
              <div className="tab-content-card">
                <div className="content-badge">GENESIS &amp; HERITAGE</div>
                <h2 className="content-heading">Institutional History</h2>
                
                <div className="rich-text-content">
                  <p>
                    <strong>IIF College of Commerce &amp; Management Studies (IIF CCMS)</strong> is affiliated to Chaudhary Charan Singh (CCS) University, Meerut. IIF College of Commerce &amp; Management Studies is founded under a Public Charitable Trust duly registered U/S 12 of Income Tax Act 1961. It is a part of prestigious Indian Institute of Finance Group.
                  </p>

                  <p>
                    The main campus of the College is spread over an area of <strong>6.47 acres</strong> in Knowledge Park III, Greater Noida (Delhi NCR), which has Academic Departments, Library, Meeting rooms, Staff room, Class rooms, Boys Common Room and Girls Common Room. The college imparts education at the graduate level and has facilities for research in the faculties of Commerce, Management and Arts.
                  </p>

                  <p>
                    IIFCCMS affiliated to CCSU Meerut is bestowed with distinguished faculty educated or taught in some of the Ivy institutions like <strong>SRCC, FMS, Delhi University, IIT Delhi, Columbia University (USA), Cleveland State University</strong>; excellent infrastructure, Wi-Fi campus, large library, sports and cultural facilities and has a focus on total personality development. IIFCCMS would provide ample opportunities to seek admission to MBA of Leading institutes in India and abroad, to pursue CAs, CS and other post graduate courses like M.Com and/or get good placement in Industry, Banks, and financial institutions and motivate to prepare for civil services.
                  </p>

                  <p>
                    IIFCCMS has a strong base in research and publications with over three and a half decades of experience through its sister concern - Indian Institute of Finance, which has published more than 150 volumes of <em>Finance India</em>, a quarterly journal of finance and more than 40 books and organized more than 150 seminars and conferences.
                  </p>

                  <p>
                    The college is dedicated to the sacred memory of Late Shri K.B.L. Agarwal, an upright person, who stood for values and principles in life, was a great philanthropist and a social worker.
                  </p>

                  <h3 className="section-sub-title">Founding Guiding Principles</h3>
                  <div className="bullet-points-grid">
                    <div className="bullet-item">
                      <span className="bullet-num">01</span>
                      <p>Foster intellectual curiosity, critical thinking, and financial acumen among young undergraduate minds.</p>
                    </div>
                    <div className="bullet-item">
                      <span className="bullet-num">02</span>
                      <p>Maintain exemplary academic rigor aligned with the National Education Policy (NEP 2020) and CCS University guidelines.</p>
                    </div>
                    <div className="bullet-item">
                      <span className="bullet-num">03</span>
                      <p>Promote inclusive higher education with affordable merit tuition frameworks and holistic personality grooming.</p>
                    </div>
                    <div className="bullet-item">
                      <span className="bullet-num">04</span>
                      <p>Bridge classroom theories with industry-grade corporate internships, live project simulations, and executive mentorship.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Vision & Mission */}
            {currentTab === 'vision-mission' && (
              <div className="tab-content-card">
                <div className="content-badge">INSTITUTIONAL CHARTER</div>
                <h2 className="content-heading">Vision and Mission</h2>

                <div className="vision-mission-cards">
                  <div className="vm-card vision-card">
                    <div className="vm-icon"><Target size={28} /></div>
                    <div className="vm-body">
                      <h3>Our Institutional Vision</h3>
                      <p>
                        To be a premier institution of higher learning in Commerce, Management, and Humanities, renowned for academic excellence, ethical stewardship, and nurturing industry-ready global leaders grounded in human values and social responsibility.
                      </p>
                    </div>
                  </div>

                  <div className="vm-card mission-card">
                    <div className="vm-icon"><Shield size={28} /></div>
                    <div className="vm-body">
                      <h3>Our Institutional Mission</h3>
                      <ul className="vm-list">
                        <li>
                          <strong>Academic Rigor:</strong> Deliver high-standard undergraduate education under NEP 2020 framework affiliated with Chaudhary Charan Singh University, Meerut.
                        </li>
                        <li>
                          <strong>Industry Synergy:</strong> Foster corporate linkages, executive mentoring, and live internships to ensure high graduate employability.
                        </li>
                        <li>
                          <strong>Research &amp; Critical Inquiry:</strong> Instill analytical decision-making and scientific temper through case studies and empirical projects.
                        </li>
                        <li>
                          <strong>Holistic Grooming:</strong> Cultivate ethical integrity, environmental consciousness, sportsmanship, and civic responsibility among all students.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="core-values-section">
                  <h3 className="section-sub-title">Core Institutional Values</h3>
                  <div className="values-grid">
                    <div className="value-chip">
                      <strong>Excellence</strong>
                      <span>Uncompromising commitment to curricular depth and instructional standards.</span>
                    </div>
                    <div className="value-chip">
                      <strong>Integrity</strong>
                      <span>Ethical transparency in administrative governance and academic conduct.</span>
                    </div>
                    <div className="value-chip">
                      <strong>Inclusivity</strong>
                      <span>Equal educational access irrespective of socio-economic background.</span>
                    </div>
                    <div className="value-chip">
                      <strong>Innovation</strong>
                      <span>Continuous integration of digital tools, case studies, and business simulations.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Chairman & Founder */}
            {currentTab === 'chairman' && (
              <div className="tab-content-card">
                <div className="content-badge">FOUNDING LEADERSHIP</div>
                <h2 className="content-heading">Chairman &amp; Founder</h2>

                <div className="leadership-profile-header">
                  <div className="profile-text">
                    <h3 className="profile-name">Prof. (Dr.) J.D. Agarwal</h3>
                    <p className="profile-designation">
                      Founder Chairman &amp; Chief Patron, IIF CCMS<br />
                      Renowned Financial Economist &amp; Senior Academician
                    </p>
                  </div>
                </div>

                <div className="rich-text-content">
                  <p>
                    Dr. J.D. Agarwal, presently Professor of Finance, is the founder Chairman &amp; Director of Indian Institute of Finance &amp; Chief Editor of Finance India. He is a leading economist and financial expert.
                  </p>
                  <p>
                    In the past he has taught at Shri Ram College of Commerce (University of Delhi), Indian Institute of Technology Delhi, Ahmadu Bello University (Nigeria), and Cleveland State University (U.S.A.), and has served as a visitor's Nominee on University of Delhi and Pondicherry University.
                  </p>
                  <p>
                    He has written over <strong>18 books (authored over 5,500 pages)</strong>, edited over 100 volumes of Finance India (edited more than 30,000 pages), published more than 200 research papers, and authored more than 500 case studies and working papers. He has been supervisor of several Ph.Ds, M.Tech (systems &amp; management) dissertations, MBA &amp; M.Sc. (Finance) dissertations, and research projects by senior government officials sponsored by GOI on study leave at IIF.
                  </p>
                  <p>
                    He has lectured in more than 800 MDPs and trained more than 10,000 senior executives from government and industry; delivered more than 700 Radio/TV talks and interviews on economic issues. He has organized and participated in more than 1,500 seminars and conferences world over, either as a keynote speaker, chairman of sessions, or participant. He has assisted more than 100 Institutes/Universities globally and was invited to address conferences, sign MoUs, and deliver lectures in more than 50 countries.
                  </p>
                  <p>
                    His research, writings, speeches, talks, and interviews on AIR and TV have had an important bearing on government policies, including the monumental change in the Union Budget presentation timing from 5 pm to forenoon.
                  </p>
                  <p>
                    His students hold and have held ministerial positions in the Government of India, State Governments, politics, judiciary, bureaucracy, legal, media, accounting, economics, business and industry, the World Bank, and senior academic positions as professors and deans internationally.
                  </p>
                  <p>
                    He founded the prestigious Indian Institute of Finance in 1987 without government aid. The institute has become a center of excellence and a base for scholarship for over three decades, accompanied by the acclaimed quarterly research journal <em>Finance India</em>.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Board of Governors */}
            {currentTab === 'board-of-governors' && (
              <div className="tab-content-card">
                <div className="content-badge">APEX GOVERNANCE &amp; STEWARDSHIP</div>
                <h2 className="content-heading">Board of Governors</h2>
                <p className="tab-lead-desc">
                  The apex governing body responsible for setting strategic direction, institutional standards, and ensuring academic autonomy and ethical governance at IIFCCMS.
                </p>

                <div className="committee-officers-grid">
                  <div className="officer-card officer-card-primary">
                    <span className="role-tag">Chief Patron &amp; Founder</span>
                    <h3>Prof. (Dr.) J.D. Agarwal</h3>
                    <p className="inst">Senior Financial Economist</p>
                    <p className="trust">Former Faculty: SRCC, IIT Delhi, Cleveland State Univ (USA)</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">President / Chairperson</span>
                    <h3>Prof. Manju Agarwal</h3>
                    <p className="inst">Founding Trustee</p>
                    <p className="trust">IIF College of Commerce &amp; Management Studies</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Director &amp; Secretary</span>
                    <h3>Prof. Aman Agarwal</h3>
                    <p className="inst">Director &amp; Professor of Finance</p>
                    <p className="trust">International Economic Consultant &amp; Researcher</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Vice Chairman</span>
                    <h3>Dr. B. P. Dhaka</h3>
                    <p className="inst">Former Secretary General</p>
                    <p className="trust">PHD Chamber of Commerce and Industry (PHDCCI)</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Senior Academic Governor</span>
                    <h3>Prof. (Dr.) Sudhir K. Jain</h3>
                    <p className="inst">Former Professor &amp; Head</p>
                    <p className="trust">Department of Management Studies, IIT Delhi</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Principal &amp; Member Secretary</span>
                    <h3>Prof. (Dr.) Saurabh Agarwal</h3>
                    <p className="inst">Principal, IIFCCMS</p>
                    <p className="trust">Professor of Management &amp; Decision Sciences</p>
                  </div>
                </div>

                <h3 className="section-sub-title" style={{ marginTop: '2.5rem' }}>Statutory Functions &amp; Mandate</h3>
                <div className="bullet-points-grid">
                  <div className="bullet-item">
                    <span className="bullet-num">01</span>
                    <p>Formulate broad institutional policies, statutory regulatory alignment, and annual strategic academic development blueprints.</p>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-num">02</span>
                    <p>Ensure adherence to university statutes of CCS University, Meerut (NAAC A++) and the NEP 2020 curriculum guidelines.</p>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-num">03</span>
                    <p>Supervise infrastructure expansion across the 6.47-acre Greater Noida campus, digital lab resources, and library acquisitions.</p>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-num">04</span>
                    <p>Foster international institutional collaborations, corporate recruitment linkages, and student merit welfare funds.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Managing Committee */}
            {currentTab === 'managing-committee' && (
              <div className="tab-content-card">
                <div className="content-badge">GOVERNANCE &amp; SECRETARIAT</div>
                <h2 className="content-heading">Managing Committee</h2>
                <p className="tab-lead-desc">
                  The executive governing body guiding institutional policies, statutory compliance, and developmental planning.
                </p>

                <div className="committee-officers-grid">
                  <div className="officer-card officer-card-primary">
                    <span className="role-tag">Chairman</span>
                    <h3>Professor Manju Agarwal</h3>
                    <p className="inst">IIF College of Commerce &amp; Management Studies</p>
                    <p className="trust">Founding Trustee</p>
                    <p className="loc">Plot No. 45A, Knowledge Park III, Greater Noida, UP - 201310</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Vice Chairman</span>
                    <h3>Dr. B. P. Dhaka</h3>
                    <p className="inst">Former Secretary General</p>
                    <p className="trust">PHD Chamber of Commerce and Industry (PHDCCI)</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Secretary</span>
                    <h3>Prof. Aman Agarwal</h3>
                    <p className="inst">Director &amp; Professor</p>
                    <p className="trust">Indian Institute of Finance</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Treasurer</span>
                    <h3>Prof. Deepak Bansal</h3>
                    <p className="inst">Assistant Professor</p>
                    <p className="trust">Indian Institute of Finance</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Jt. Secretary</span>
                    <h3>Mr. Saurabh Sharma</h3>
                    <p className="inst">Senior Manager</p>
                    <p className="trust">EXL Service.com (India) Pvt Ltd</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Principal &amp; Member Secretary</span>
                    <h3>Prof. (Dr.) Saurabh Agarwal</h3>
                    <p className="inst">Professor &amp; Principal</p>
                    <p className="trust">IIF College of Commerce &amp; Management Studies</p>
                  </div>
                </div>

                <h3 className="section-sub-title" style={{ marginTop: '2.5rem' }}>Distinguished Members</h3>
                <div className="members-simple-grid">
                  <div className="member-item">
                    <strong>Prof. K. K. Panda</strong>
                    <span>Former Registrar, University of Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Shri Ajay Bhargava</strong>
                    <span>Architect, Bhargavajay Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Prof. (Dr.) Sudhir K. Jain</strong>
                    <span>Former Professor, IIT Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Prof. (Dr.) J. P. Sharma</strong>
                    <span>Former Professor &amp; Dean, Dept. of Commerce, DSE, Delhi University</span>
                  </div>
                  <div className="member-item">
                    <strong>Mr. Sunil Goel</strong>
                    <span>Advocate</span>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Advisory Council */}
            {currentTab === 'advisory-council' && (
              <div className="tab-content-card">
                <div className="content-badge">STRATEGIC COUNSEL</div>
                <h2 className="content-heading">Advisory Council</h2>
                <p className="tab-lead-desc">
                  Comprising distinguished leaders from industry, public governance, and international academia providing continuous strategic advice on curriculum modernization and pedagogy.
                </p>

                <div className="members-simple-grid">
                  <div className="member-item">
                    <strong>Prof. V. K. Bhalla</strong>
                    <span>Former Professor, Faculty of Management Studies (FMS), University of Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Dr. Ashok K. Chauhan</strong>
                    <span>Eminent Educationist &amp; Corporate Strategist</span>
                  </div>
                  <div className="member-item">
                    <strong>Mr. R. C. Bhargava</strong>
                    <span>Senior Industry Leader &amp; Corporate Advisor</span>
                  </div>
                  <div className="member-item">
                    <strong>Prof. Shyam S. Lodha</strong>
                    <span>Professor of Marketing, Southern Connecticut State University, USA</span>
                  </div>
                  <div className="member-item">
                    <strong>Prof. M. C. Kapoor</strong>
                    <span>Former Dean, Faculty of Commerce &amp; Business, University of Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Dr. R. S. Nigam</strong>
                    <span>Former Director, Delhi School of Economics (DSE), University of Delhi</span>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Principal */}
            {currentTab === 'principal' && (
              <div className="tab-content-card">
                <div className="content-badge">ACADEMIC &amp; INSTITUTIONAL LEADERSHIP</div>
                <h2 className="content-heading">Principal's Desk</h2>

                <div className="leadership-profile-header">
                  <div className="profile-text">
                    <h3 className="profile-name">Prof. (Dr.) Saurabh Agarwal</h3>
                    <p className="profile-designation">
                      Principal &amp; Professor of Management, IIF CCMS<br />
                      Ph.D., M.Com, MBA (Finance)
                    </p>
                  </div>
                </div>

                <div className="rich-text-content">
                  <p>
                    Welcome to IIF College of Commerce and Management Studies (IIF CCMS), Greater Noida. Our institution stands on the bedrock of academic integrity, intellectual curiosity, and professional readiness. Affiliated to Chaudhary Charan Singh University, Meerut (accredited NAAC A++), our programs in Commerce, Management, and Arts are structured to equip students with both theoretical depth and functional expertise.
                  </p>
                  <p>
                    Under the visionary guidelines of the National Education Policy (NEP 2020), we emphasize interdisciplinary learning, continuous internal assessment, research exposure, and active personality development. Our sprawling 6.47-acre campus provides students with state-of-the-art computer labs, an expansive 55,000+ volume library, sports fields, and seminar auditoriums.
                  </p>
                  <p>
                    We invite aspiring scholars, parents, and recruiters to explore our campus, engage with our seasoned faculty, and become active partners in our journey towards academic excellence.
                  </p>
                  <div style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#0d5c75' }}>
                    <strong>Prof. (Dr.) Saurabh Agarwal</strong><br />
                    Principal, IIFCCMS
                  </div>
                </div>
              </div>
            )}

            {/* 8. Approvals & Affiliations (Format Matching Reference Screenshot) */}
            {currentTab === 'approvals-affiliations' && (
              <div className="tab-content-card">
                <h2 className="ref-tab-title">Approvals &amp; Affiliations</h2>

                <div className="ref-download-grid-container">
                  {/* Column 1: Downloads Regulatory Approvals (IIFCCMS) */}
                  <div className="ref-download-col">
                    <h3 className="ref-col-heading">Downloads AICTE / Statutory Approvals</h3>

                    <div className="ref-doc-list">
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS EOA 2026-27</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS EOA 2025-26</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS EOA 2024-25</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS EOA 2023-24</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS EOA 2022-23</span>
                        <PdfDownloadBadge label="" />
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Downloads CCSU Affiliation Letter (CCSU & IIFCCMS) */}
                  <div className="ref-download-col">
                    <h3 className="ref-col-heading">Downloads CCSU Affiliation Letter</h3>

                    <div className="ref-doc-list">
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS CCSU Affiliation Letter 2025-26</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS CCSU Affiliation Letter 2024-25</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS CCSU Affiliation Letter 2023-24</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS CCSU Affiliation Letter 2022-23</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS CCSU Permanent College Code 472 Notification</span>
                        <PdfDownloadBadge label="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0d5c75', fontSize: '0.86rem', color: '#475569' }}>
                  <strong>Statutory Note:</strong> IIF College of Commerce and Management Studies (IIFCCMS) is affiliated to Chaudhary Charan Singh University, Meerut (Accredited NAAC A++ Grade, College Code: 472). All academic circulars, enrollment codes, and semester exam rosters conform directly to CCSU regulations.
                </div>
              </div>
            )}

            {/* 9. Public Disclosure (Format Matching Reference Screenshot - No Year on Balance Sheet) */}
            {currentTab === 'public-disclosure' && (
              <div className="tab-content-card">
                <h2 className="ref-tab-title">Public Disclosure</h2>

                <div className="ref-table-container">
                  <table className="ref-disclosure-table">
                    <thead>
                      <tr>
                        <th style={{ width: '80px', textAlign: 'center' }}>Sr.No</th>
                        <th>Title</th>
                        <th style={{ width: '220px' }}>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sr-no">1</td>
                        <td className="doc-name">Mandatory Disclosure</td>
                        <td>
                          <PdfDownloadBadge label="Mandatory Disclosure" />
                        </td>
                      </tr>

                      {/* Row 2: Balance Sheet - Strictly NO YEAR mentioned as requested by user */}
                      <tr>
                        <td className="sr-no">2</td>
                        <td className="doc-name">Balance Sheet</td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <PdfDownloadBadge label="Audited Balance Sheet" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">3</td>
                        <td className="doc-name">Internal Complaint Committee (ICC)</td>
                        <td>
                          <PdfDownloadBadge label="ICC Committee" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">4</td>
                        <td className="doc-name">Student Grievance Redressal Committee (SGRC)</td>
                        <td>
                          <PdfDownloadBadge label="SGRC Cell" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">5</td>
                        <td className="doc-name">Research &amp; Development Cell</td>
                        <td>
                          <PdfDownloadBadge label="R&amp;D Policy" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">6</td>
                        <td className="doc-name">Accessibility &amp; Inclusion Committee</td>
                        <td>
                          <PdfDownloadBadge label="Accessibility Cell" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">7</td>
                        <td className="doc-name">Socio - Economically Disadvantaged Groups (SEDGs)</td>
                        <td>
                          <PdfDownloadBadge label="SEDGs Policy" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">8</td>
                        <td className="doc-name">Anti Ragging</td>
                        <td>
                          <PdfDownloadBadge label="Anti Ragging Notification" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">9</td>
                        <td className="doc-name">Digital Personal Data Protection (DPDP) Committee</td>
                        <td>
                          <PdfDownloadBadge label="DPDP Guidelines" />
                        </td>
                      </tr>

                      <tr>
                        <td className="sr-no">10</td>
                        <td className="doc-name">UGC Section 2(f) Institutional Status</td>
                        <td>
                          <PdfDownloadBadge label="UGC Status" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: '1.5rem', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #0d5c75', fontSize: '0.86rem', color: '#475569' }}>
                  <strong>Transparency Compliance:</strong> Disclosed documents are maintained by the IIFCCMS Registrar and Academic Secretariat under CCS University statutory oversight and UGC disclosure directives.
                </div>
              </div>
            )}

            {/* 10. Social Initiatives (Exact Format & Text Matching Reference Screenshot with IIFCCMS Data) */}
            {currentTab === 'social-initiatives' && (
              <div className="tab-content-card">
                <h2 className="ref-tab-title">Social Initiatives</h2>

                {/* Top Rich Brown Lead Banner matching user's photo */}
                <div className="ref-social-lead-banner">
                  <p>
                    At IIF College of Commerce and Management Studies (IIFCCMS) the culture of giving back originates from the deep desire of working for the betterment of the society. The thought to serve the society is a critical mission that is at the heart of everything that it does, how it meditates and what it is. Social initiatives of the institute aim to be relevant to local, national and global contexts. Key to this approach is the faculty members and students of the institute who generously give of their time, energy, experience and talent to serve society.
                  </p>
                </div>

                {/* Event 1: Plant Today, Prosper Tomorrow */}
                <div className="ref-social-event-block">
                  <h3 className="ref-event-title">Plant Today, Prosper Tomorrow - 05 June, 2025</h3>
                  <p className="ref-event-desc">
                    On the occasion of World Environment Day, IIF College of Commerce and Management Studies (IIFCCMS) organized a Tree Plantation Drive to promote a greener, cleaner, and more sustainable future.
                  </p>

                  {/* 3 Photo Cards with IIFCCMS Crest Badge Watermark */}
                  <div className="ref-photo-cards-grid">
                    <div className="ref-photo-card">
                      <div className="ref-photo-wrapper">
                        <img src={iifImg1} alt="IIFCCMS Tree Plantation Drive" />
                        <div className="ref-crest-badge">
                          <span className="crest-title">IIFCCMS</span>
                          <span className="crest-sub">GREATER NOIDA</span>
                        </div>
                      </div>
                      <div className="ref-photo-caption">
                        Students and faculty initiating the Green Drive on the 6.47-acre campus grounds.
                      </div>
                    </div>

                    <div className="ref-photo-card">
                      <div className="ref-photo-wrapper">
                        <img src={iifImg2} alt="IIFCCMS Campus Greening Project" />
                        <div className="ref-crest-badge">
                          <span className="crest-title">IIFCCMS</span>
                          <span className="crest-sub">GREATER NOIDA</span>
                        </div>
                      </div>
                      <div className="ref-photo-caption">
                        Nurturing new saplings to promote environmental consciousness and biodiversity.
                      </div>
                    </div>

                    <div className="ref-photo-card">
                      <div className="ref-photo-wrapper">
                        <img src={iifImg3} alt="IIFCCMS Faculty & Student Volunteers" />
                        <div className="ref-crest-badge">
                          <span className="crest-title">IIFCCMS</span>
                          <span className="crest-sub">GREATER NOIDA</span>
                        </div>
                      </div>
                      <div className="ref-photo-caption">
                        Faculty members, leadership, and student council commemorating World Environment Day.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2: Rural Financial Literacy Drive */}
                <div className="ref-social-event-block" style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
                  <h3 className="ref-event-title">Financial Literacy Outreach &amp; Digital Banking Drive</h3>
                  <p className="ref-event-desc">
                    Senior commerce and management scholars from IIFCCMS conduct regular workshops across Greater Noida and rural Gautam Buddha Nagar, training small rural entrepreneurs, women self-help groups, and youth on UPI digital payments, savings instruments, and MSME credit schemes.
                  </p>
                </div>

                {/* Event 3: Blood Donation Camp */}
                <div className="ref-social-event-block" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
                  <h3 className="ref-event-title">Annual Voluntary Blood Donation &amp; Health Camp</h3>
                  <p className="ref-event-desc">
                    In collaboration with Red Cross Society and local healthcare institutions, IIFCCMS organizes an annual voluntary blood donation drive on campus, instilling civic responsibility and empathy in our student community.
                  </p>
                </div>
              </div>
            )}

            {/* 11. Councils & Committees */}
            {currentTab === 'committees' && (
              <div className="tab-content-card">
                <div className="content-badge">STATUTORY CELLS</div>
                <h2 className="content-heading">Councils and Committees</h2>
                <p className="tab-lead-desc">
                  IIF CCMS has established dedicated statutory councils, academic bodies, and student development cells ensuring disciplined governance and holistic campus life:
                </p>

                <div className="committees-grid">
                  {[
                    "Staff Council",
                    "Admissions Committee",
                    "Sports Committee",
                    "Time-Table Committees",
                    "Academic Standards Committee",
                    "Academic Supervisory Committee",
                    "Student Faculty Committee",
                    "Internal Assessment Monitoring Committee",
                    "Internal Assessment Moderation Committee",
                    "Library Committee",
                    "Computer Committee",
                    "College Discipline Committee",
                    "Placement Cell",
                    "Financial Assistance Committee (Fee Concession / Students Aid Fund / Need Based Scholarship)",
                    "Annual Day Co-Ordination Committee",
                    "Annual Day Awards Committee",
                    "College Magazine",
                    "Café Committee",
                    "College Seminar Committee",
                    "Student Faculty Exchange Program Committee",
                    "Environment and Cleanliness of College Committee",
                    "NAAC Committee",
                    "Internal Complaints Committee (ICC)",
                    "Women Development Cell (WDC)",
                    "Centre for Innovation, Incubation and Entrepreneurship (CIIE)",
                    "North-East and Himalayan Students Integration Committee",
                    "Archive Committee",
                    "Anti Ragging Committee",
                    "Anti Smoking Committee",
                    "Sexual Harassment Committee",
                    "Enabling Unit for Differently-Abled Persons",
                    "Quiz Committee",
                    "Panache - Western Dance Committee",
                    "Fine Arts Committee",
                    "Leadership, Innovation and Finance Commerce Committee",
                    "The Film and Photography Committee",
                    "Human Resource Development Committee"
                  ].map((comm, idx) => (
                    <div key={idx} className="committee-pill-card">
                      <span className="comm-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="comm-name">{comm}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 12. Contact Us */}
            {currentTab === 'contact' && (
              <div className="tab-content-card">
                <div className="content-badge">GET IN TOUCH</div>
                <h2 className="content-heading">Contact Secretariat</h2>

                <div className="contact-info-block-grid">
                  <div className="contact-detail-box">
                    <div className="box-icon"><MapPin size={22} /></div>
                    <div className="box-info">
                      <h4>Campus Address</h4>
                      <p>
                        The Principal<br />
                        IIF College of Commerce and Management Studies<br />
                        Plot No. 45A, Knowledge Park III<br />
                        Greater Noida - 201310, Delhi NCR, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="box-icon"><Phone size={22} /></div>
                    <div className="box-info">
                      <h4>Telephony Lines</h4>
                      <p>+91-120-2323683, 2323687</p>
                      <p>Mobile: +91-9811971002 / +91-9811537057</p>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="box-icon"><Mail size={22} /></div>
                    <div className="box-info">
                      <h4>Electronic Mail</h4>
                      <p>iifccms@gmail.com</p>
                      <p>admission@iifccms.edu.in</p>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="box-icon"><BookOpen size={22} /></div>
                    <div className="box-info">
                      <h4>Official Web URL</h4>
                      <p>www.iifccms.edu.in</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Affiliated to CCS University, Meerut (Code 472)</p>
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
