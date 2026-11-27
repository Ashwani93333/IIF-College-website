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

import {
  iif1, iif2, iif3, iif4,
  imgChHistory, imgChClassroom, imgChHeritage2,
  imgPgVision, imgPgMission, imgPgChairmanHonor,
  imgPgChairmanAIMA, imgPgAJ1, imgPgADBPresident, imgPgMauritiusVP,
  imgPgPrincipalDesk, imgPgCampusFoyer, imgPgCulturalEvents,
  imgPgBoardroom, imgPgAdminSecretariat, imgPgCounseling,
  imgPgDignitaryMeeting, imgPgFacultyCouncil, imgPgConclaveStage,
  imgPgMediaBriefing, imgPgAcademicHall,
  mcPhoto, facManjuAgarwal, facChairman,
  infraMainBuilding, infraBuilding1, infraBuilding2
} from '../assets/assetImages';

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
                
                {/* Top Golden/Amber Establishment Callout matching reference design */}
                <div className="history-gold-callout">
                  IIF College of Commerce &amp; Management Studies (IIF CCMS) is affiliated to Chaudhary Charan Singh (CCS) University, Meerut. IIF College of Commerce &amp; Management Studies is founded under a Public Charitable Trust duly registered U/S 12 of Income Tax Act 1961. It is a part of prestigious Indian Institute of Finance Group.
                </div>

                <div className="rich-text-content">
                  <p>
                    IIF College of Commerce &amp; Management Studies is one of the premier quality-driven educational institutes in the Greater Noida/Delhi-NCR region. Renowned for its academic excellence and pedigree, IIFCCMS consistently ranks among the top commerce and management colleges in Uttar Pradesh. The institute&apos;s commitment to holistic student development ensures that graduates are not only academically sound but also equipped with the skills and confidence to build successful futures.
                  </p>

                  <p>
                    The institute offers undergraduate programs including B.Com, B.B.A., and B.A., fostering a robust academic and professional environment with curricula structured as per the National Education Policy (NEP 2020).
                  </p>

                  <p>
                    The main campus of the College is spread over an area of <strong>6.47 acres</strong> in Knowledge Park III, Greater Noida (Delhi NCR), which has Academic Departments, Library, Meeting rooms, Staff room, Class rooms, Boys Common Room and Girls Common Room. The college imparts education at the graduate level and has facilities for research in the faculties of Commerce, Management and Arts.
                  </p>

                  <p>
                    IIFCCMS affiliated to CCSU Meerut is bestowed with distinguished faculty educated or taught in some of the Ivy institutions like <strong>SRCC, FMS, Delhi University, IIT Delhi, Columbia University (USA), Cleveland State University</strong>; excellent infrastructure, Wi-Fi campus, large library, sports and cultural facilities and has a focus on total personality development. IIFCCMS provides ample opportunities to seek admission to MBA of leading institutes in India and abroad, to pursue CA, CS and other post graduate courses like M.Com and/or get good placement in Industry, Banks, and financial institutions and motivate to prepare for civil services.
                  </p>

                  {/* Official Affiliation Letter Links */}
                  <div className="history-letter-links">
                    <Link to="/about?tab=affiliation" className="history-letter-link">
                      CCSU Affiliation Letter &amp; University Code 454
                    </Link>
                    <Link to="/about?tab=charter" className="history-letter-link">
                      Institutional Trust Registration &amp; Charter
                    </Link>
                  </div>

                  {/* Further Enhancing Academic Credentials Section */}
                  <div className="history-credentials-block">
                    <h4 className="history-credentials-title">Further enhancing its academic credentials:</h4>
                    <ul className="history-credentials-list">
                      <li>IIFCCMS has a strong base in research and publications with over three and a half decades of experience through its sister concern - Indian Institute of Finance.</li>
                      <li>Published more than 150 volumes of <em>Finance India</em>, a prestigious quarterly journal of finance, more than 40 books, and organized over 150 seminars and conferences.</li>
                      <li>Curricula fully structured as per the National Education Policy (NEP 2020) and affiliated to Chaudhary Charan Singh University, Meerut.</li>
                      <li>The college is dedicated to the sacred memory of Late Shri K.B.L. Agarwal, an upright person, who stood for values and principles in life, was a great philanthropist and a social worker.</li>
                      <li>Focus on Total Personality Development with corporate internships, industry seminar exposure, and comprehensive career mentorship.</li>
                    </ul>

                    <p className="history-concluding-p">
                      IIFCCMS has received multiple accolades recognizing it as one of the top commerce and management institutes in North India and Uttar Pradesh, underscoring its reputation for academic quality, faculty pedigree, and infrastructure.
                    </p>
                  </div>

                  {/* 3-Photo Campus Gallery Row matching reference screenshot */}
                  <div className="history-gallery-row">
                    <div className="history-photo-card">
                      <img src={infraMainBuilding} alt="IIFCCMS Main Building" />
                    </div>
                    <div className="history-photo-card">
                      <img src={infraBuilding1} alt="IIFCCMS Campus Grounds" />
                    </div>
                    <div className="history-photo-card">
                      <img src={infraBuilding2} alt="IIFCCMS Academic Block" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Vision & Mission (Designed Exact as Uploaded Screenshot) */}
            {currentTab === 'vision-mission' && (
              <div className="tab-content-card">
                <div className="content-badge">INSTITUTIONAL CHARTER</div>
                <h2 className="content-heading">Vision &amp; Mission</h2>

                {/* Split Row 1: Vision Photo + Vision Text matching screenshot */}
                <div className="tab-photo-split-block">
                  <div className="tab-photo-frame">
                    <img src={imgPgVision} alt="IIFCCMS Institutional Vision" />
                    <div className="tab-photo-badge">VISION &amp; PURPOSE</div>
                  </div>
                  <div className="tab-split-content">
                    <h3 className="tab-split-subheading">Vision</h3>
                    <div className="tab-vision-quote">
                      <p>
                        &ldquo; To be an institute of repute, providing globally competent and socially sensitive professionals. &rdquo;
                      </p>
                    </div>
                    <p style={{ marginTop: '0.85rem', fontSize: '0.96rem', color: '#475569', fontWeight: 600 }}>
                      To emerge as a premier center of commerce, managerial acumen, and human values, nurturing ethically responsible global citizens.
                    </p>
                  </div>
                </div>

                {/* Split Row 2: Mission Photo + Mission Text matching screenshot */}
                <div className="tab-photo-split-block">
                  <div className="tab-photo-frame">
                    <img src={imgPgMission} alt="IIFCCMS Institutional Mission" />
                    <div className="tab-photo-badge">MISSION GOALS</div>
                  </div>
                  <div className="tab-split-content">
                    <h3 className="tab-split-subheading">Mission</h3>
                    <ul className="tab-mission-list">
                      <li>
                        <span className="mission-num-badge">M1</span>
                        <span><strong>To provide state-of-the-art infrastructure</strong>, processes, Centers of excellence and Human resources.</span>
                      </li>
                      <li>
                        <span className="mission-num-badge">M2</span>
                        <span><strong>To inculcate qualities of leadership</strong>, professionalism, corporate understanding and executive competence.</span>
                      </li>
                      <li>
                        <span className="mission-num-badge">M3</span>
                        <span><strong>To imbibe and enhance human values</strong>, ethics and morals amongst students.</span>
                      </li>
                      <li>
                        <span className="mission-num-badge">M4</span>
                        <span><strong>To foster research, analytical inquiry</strong>, and industry-academia synergy under the National Education Policy (NEP 2020).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Chairman & Founder */}
            {currentTab === 'chairman' && (
              <div className="tab-content-card">
                <div className="content-badge">FOUNDING LEADERSHIP</div>
                <h2 className="content-heading">Chairman &amp; Founder</h2>

                {/* Photo Split Layout with Yellow Background Card */}
                <div className="tab-photo-split-block" style={{ alignItems: 'stretch', marginBottom: '2rem' }}>
                  <div className="tab-photo-frame" style={{ minHeight: '280px' }}>
                    <img src={facChairman} alt="Prof. (Dr.) J.D. Agarwal, Founder Chairman" />
                    <div className="tab-photo-badge">FOUNDER &amp; CHIEF PATRON</div>
                  </div>
                  <div className="tab-split-content" style={{
                    background: '#f4b638',
                    padding: '1.75rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(244, 182, 56, 0.25)',
                    border: '1px solid #e0a328',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div className="leadership-profile-header" style={{ marginBottom: '1rem', borderBottom: '2px solid rgba(0, 0, 0, 0.15)', paddingBottom: '0.85rem' }}>
                      <div className="profile-text">
                        <h3 className="profile-name" style={{ color: '#000000', fontWeight: 900, fontSize: '1.5rem', margin: '0 0 0.4rem' }}>
                          Prof. (Dr.) J.D. Agarwal
                        </h3>
                        <p className="profile-designation" style={{ color: '#000000', fontWeight: 800, fontSize: '1.08rem', margin: 0, lineHeight: 1.55 }}>
                          Founder Chairman &amp; Chief Patron, IIF CCMS<br />
                          Renowned Financial Economist &amp; Senior Academician
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: '1.12rem', color: '#000000', fontWeight: 700, lineHeight: 1.75, margin: 0 }}>
                      Dr. J.D. Agarwal is the founder Chairman &amp; Director of Indian Institute of Finance &amp; Chief Editor of <em>Finance India</em>. He is a leading economist and financial expert whose pioneering research shaped national policies.
                    </p>
                  </div>
                </div>

                <div className="rich-text-content">
                  <p>
                    In the past he has taught at Shri Ram College of Commerce (University of Delhi), Indian Institute of Technology Delhi, Ahmadu Bello University (Nigeria), and Cleveland State University (U.S.A.), and has served as a visitor's Nominee on University of Delhi and Pondicherry University.
                  </p>
                  <p>
                    He has written over <strong>18 books (authored over 5,500 pages)</strong>, edited over 100 volumes of Finance India (edited more than 30,000 pages), published more than 200 research papers, and authored more than 500 case studies and working papers. He has been supervisor of several Ph.Ds, M.Tech (systems &amp; management) dissertations, MBA &amp; M.Sc. (Finance) dissertations, and research projects by senior government officials.
                  </p>
                  <p>
                    He has lectured in more than 800 MDPs and trained more than 10,000 senior executives from government and industry; delivered more than 700 Radio/TV talks and interviews on economic issues. He has organized and participated in more than 1,500 seminars and conferences world over, either as a keynote speaker, chairman of sessions, or participant. He has assisted more than 100 Institutes/Universities globally and was invited to address conferences in more than 50 countries.
                  </p>
                  <p>
                    His students hold ministerial positions in the Government of India, State Governments, politics, judiciary, bureaucracy, the World Bank, and senior academic positions as professors and deans internationally.
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

                <div className="member-profile-photo-grid">
                  <div className="member-photo-card primary-lead">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgChairmanHonor} alt="Prof. (Dr.) J.D. Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Chief Patron &amp; Founder</span>
                        <h3 className="member-name">Prof. (Dr.) J.D. Agarwal</h3>
                        <p className="member-subtitle">Senior Financial Economist | Former Faculty: SRCC, IIT Delhi, Cleveland State Univ (USA)</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Renowned authority in Finance and Economics, recipient of SIAU-Hungary D.Litt. and Lifetime Achievement awards, guiding academic excellence, research culture, and strategic institutional autonomy.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgAdminSecretariat} alt="Prof. Manju Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">President / Chairperson</span>
                        <h3 className="member-name">Prof. Manju Agarwal</h3>
                        <p className="member-subtitle">Founding Trustee, IIFCCMS</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Co-founder and trustee steering administrative policies, student welfare schemes, campus community initiatives, and values-based holistic education.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgAJ1} alt="Prof. Aman Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Director &amp; Secretary</span>
                        <h3 className="member-name">Prof. Aman Agarwal</h3>
                        <p className="member-subtitle">Director &amp; Professor of Finance | International Economic Consultant</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Global economic researcher, editor of Finance India, advising national and international trade and economic councils, spearheading global partnerships and curriculum modernization.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgMauritiusVP} alt="Dr. B. P. Dhaka" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Vice Chairman</span>
                        <h3 className="member-name">Dr. B. P. Dhaka</h3>
                        <p className="member-subtitle">Former Secretary General, PHD Chamber of Commerce &amp; Industry (PHDCCI)</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Seasoned industry administrator aligning academic pedagogy with corporate expectations, MSME development, and national industry consortiums.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgADBPresident} alt="Prof. (Dr.) Sudhir K. Jain" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Senior Academic Governor</span>
                        <h3 className="member-name">Prof. (Dr.) Sudhir K. Jain</h3>
                        <p className="member-subtitle">Former Professor &amp; Head, Dept. of Management Studies, IIT Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Veteran academician in intellectual property rights, technology management, and entrepreneurial development, fostering high-impact research standards.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgPrincipalDesk} alt="Prof. (Dr.) Saurabh Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Principal &amp; Member Secretary</span>
                        <h3 className="member-name">Prof. (Dr.) Saurabh Agarwal</h3>
                        <p className="member-subtitle">Principal &amp; Professor of Management, IIFCCMS</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Doctorate in Management with expertise in decision sciences, business analytics, and NEP 2020 pedagogical integration, leading day-to-day academic and operational governance.
                    </p>
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

                {/* Official Managing Committee Group Photo */}
                <div style={{ marginBottom: '2.5rem', borderRadius: '14px', overflow: 'hidden', border: '2px solid #cbd5e1', boxShadow: '0 6px 22px rgba(0,0,0,0.08)' }}>
                  <img src={mcPhoto} alt="IIFCCMS Official Managing Committee" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div style={{ background: '#062a36', color: '#fde047', padding: '0.65rem 1.25rem', fontSize: '0.85rem', fontWeight: 800 }}>
                    Official Managing Committee &amp; Governing Secretariat of IIFCCMS
                  </div>
                </div>

                <div className="member-profile-photo-grid">
                  <div className="member-photo-card primary-lead">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={facManjuAgarwal} alt="Professor Manju Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Chairman</span>
                        <h3 className="member-name">Professor Manju Agarwal</h3>
                        <p className="member-subtitle">Founding Trustee, IIFCCMS</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Guiding institutional governance, financial planning, statutory compliance, and infrastructure stewardship at the Greater Noida campus.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgMauritiusVP} alt="Dr. B. P. Dhaka" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Vice Chairman</span>
                        <h3 className="member-name">Dr. B. P. Dhaka</h3>
                        <p className="member-subtitle">Former Secretary General, PHDCCI</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Driving industry-academia interfaces, corporate internships, executive mentorship, and trade body collaborations.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgAJ1} alt="Prof. Aman Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Secretary</span>
                        <h3 className="member-name">Prof. Aman Agarwal</h3>
                        <p className="member-subtitle">Director &amp; Professor, Indian Institute of Finance</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Managing academic coordination, international symposiums, research publications, and corporate liaison cells.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgChClassroom} alt="Prof. Deepak Bansal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Treasurer</span>
                        <h3 className="member-name">Prof. Deepak Bansal</h3>
                        <p className="member-subtitle">Assistant Professor, Indian Institute of Finance</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Overseeing fiscal management, internal audit procedures, student scholarship funds, and academic budget allocations.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgCounseling} alt="Mr. Saurabh Sharma" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Jt. Secretary</span>
                        <h3 className="member-name">Mr. Saurabh Sharma</h3>
                        <p className="member-subtitle">Senior Manager, EXL Service.com (India) Pvt Ltd</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Corporate executive contributing industry best practices in data analytics, operational efficiency, and graduate campus placements.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgPrincipalDesk} alt="Prof. (Dr.) Saurabh Agarwal" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Principal &amp; Member Secretary</span>
                        <h3 className="member-name">Prof. (Dr.) Saurabh Agarwal</h3>
                        <p className="member-subtitle">Professor &amp; Principal, IIFCCMS</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Supervising university examination procedures, faculty development, curriculum delivery, and student code of conduct.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgDignitaryMeeting} alt="Prof. K. K. Panda" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Member</span>
                        <h3 className="member-name">Prof. K. K. Panda</h3>
                        <p className="member-subtitle">Former Registrar, University of Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Renowned university administrator advising on higher education statutes, academic governance, and institutional accreditations.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgCampusFoyer} alt="Shri Ajay Bhargava" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Member</span>
                        <h3 className="member-name">Shri Ajay Bhargava</h3>
                        <p className="member-subtitle">Architect, Bhargavajay Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Eminent infrastructure and architectural consultant guiding eco-friendly campus master planning and modern learning space design.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgADBPresident} alt="Prof. (Dr.) Sudhir K. Jain" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Member</span>
                        <h3 className="member-name">Prof. (Dr.) Sudhir K. Jain</h3>
                        <p className="member-subtitle">Former Professor &amp; Head, DMS, IIT Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Guiding technology management, business incubators, intellectual property systems, and student innovation ecosystems.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgBoardroom} alt="Prof. (Dr.) J. P. Sharma" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Member</span>
                        <h3 className="member-name">Prof. (Dr.) J. P. Sharma</h3>
                        <p className="member-subtitle">Former Professor &amp; Dean, Dept. of Commerce, DSE, Delhi University</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Corporate governance expert mentoring commerce faculty, research projects, and university syllabus alignment.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgFacultyCouncil} alt="Mr. Sunil Goel" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Member</span>
                        <h3 className="member-name">Mr. Sunil Goel</h3>
                        <p className="member-subtitle">Advocate &amp; Legal Counsel</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Providing legal counsel on statutory regulatory norms, higher education compliance, and institutional integrity frameworks.
                    </p>
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

                <div className="member-profile-photo-grid">
                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgConclaveStage} alt="Prof. V. K. Bhalla" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Senior Advisor</span>
                        <h3 className="member-name">Prof. V. K. Bhalla</h3>
                        <p className="member-subtitle">Former Professor, Faculty of Management Studies (FMS), University of Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Renowned scholar in international financial management and investment strategy advising on high-level academic standards and management pedagogy.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgChairmanAIMA} alt="Dr. Ashok K. Chauhan" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Eminent Educationist</span>
                        <h3 className="member-name">Dr. Ashok K. Chauhan</h3>
                        <p className="member-subtitle">Educationist &amp; Corporate Strategist</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Visionary institution builder providing strategic perspectives on modern educational ecosystems, youth empowerment, and international pedagogy.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgMediaBriefing} alt="Mr. R. C. Bhargava" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Corporate Advisor</span>
                        <h3 className="member-name">Mr. R. C. Bhargava</h3>
                        <p className="member-subtitle">Senior Industry Leader &amp; Corporate Advisor</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      National industry doyen mentoring students and management on industrial resilience, corporate ethics, and visionary leadership.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgPgAcademicHall} alt="Prof. Shyam S. Lodha" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">International Advisor</span>
                        <h3 className="member-name">Prof. Shyam S. Lodha</h3>
                        <p className="member-subtitle">Professor of Marketing, Southern Connecticut State University, USA</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      International marketing strategist guiding global curriculum benchmarking, exchange programs, and overseas research networks.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgChHeritage2} alt="Prof. M. C. Kapoor" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Commerce Mentor</span>
                        <h3 className="member-name">Prof. M. C. Kapoor</h3>
                        <p className="member-subtitle">Former Dean, Faculty of Commerce &amp; Business, University of Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Senior pioneer in commerce education guiding undergraduate accounting, commerce research, and pedagogical rigor.
                    </p>
                  </div>

                  <div className="member-photo-card">
                    <div className="member-card-header">
                      <div className="member-avatar-frame">
                        <img src={imgChHistory} alt="Dr. R. S. Nigam" />
                      </div>
                      <div className="member-meta-block">
                        <span className="member-role-badge">Economics Advisor</span>
                        <h3 className="member-name">Dr. R. S. Nigam</h3>
                        <p className="member-subtitle">Former Director, Delhi School of Economics (DSE), University of Delhi</p>
                      </div>
                    </div>
                    <p className="member-desc">
                      Celebrated economist steering macroeconomic analysis, public finance foundations, and doctoral level academic excellence.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Principal */}
            {currentTab === 'principal' && (
              <div className="tab-content-card">
                <div className="content-badge">ACADEMIC &amp; INSTITUTIONAL LEADERSHIP</div>
                <h2 className="content-heading">Principal's Desk</h2>

                {/* Photo Split Layout with Yellow Background Card */}
                <div className="tab-photo-split-block" style={{ alignItems: 'stretch', marginBottom: '2rem' }}>
                  <div className="tab-photo-frame" style={{ minHeight: '280px' }}>
                    <img src={imgPgPrincipalDesk} alt="Prof. (Dr.) Saurabh Agarwal, Principal IIFCCMS" />
                    <div className="tab-photo-badge">PRINCIPAL &amp; PROFESSOR</div>
                  </div>
                  <div className="tab-split-content" style={{
                    background: '#f4b638',
                    padding: '1.75rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(244, 182, 56, 0.25)',
                    border: '1px solid #e0a328',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div className="leadership-profile-header" style={{ marginBottom: '1rem', borderBottom: '2px solid rgba(0, 0, 0, 0.15)', paddingBottom: '0.85rem' }}>
                      <div className="profile-text">
                        <h3 className="profile-name" style={{ color: '#000000', fontWeight: 900, fontSize: '1.5rem', margin: '0 0 0.4rem' }}>
                          Prof. (Dr.) Saurabh Agarwal
                        </h3>
                        <p className="profile-designation" style={{ color: '#000000', fontWeight: 800, fontSize: '1.08rem', margin: 0, lineHeight: 1.55 }}>
                          Principal &amp; Professor of Management, IIF CCMS<br />
                          Ph.D., M.Com, MBA (Finance)
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: '1.12rem', color: '#000000', fontWeight: 700, lineHeight: 1.75, margin: 0 }}>
                      &ldquo; Welcome to IIF College of Commerce and Management Studies (IIF CCMS), Greater Noida. Our institution stands on the bedrock of academic integrity, intellectual curiosity, and professional readiness. &rdquo;
                    </p>
                  </div>
                </div>

                <div className="rich-text-content">
                  <p>
                    Affiliated to Chaudhary Charan Singh University, Meerut (accredited NAAC A++), our programs in Commerce, Management, and Arts are structured to equip students with both theoretical depth and functional expertise.
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

            {/* 8. Approvals & Affiliations */}
            {currentTab === 'approvals-affiliations' && (
              <div className="tab-content-card">
                <h2 className="ref-tab-title">Approvals &amp; Affiliations</h2>

                <div className="ref-download-grid-container">
                  {/* Column 1: Downloads Regulatory Approvals (IIFCCMS) */}
                  <div className="ref-download-col">
                    <h3 className="ref-col-heading">Downloads Statutory Sanctions</h3>

                    <div className="ref-doc-list">
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS Extension of Approval (EOA)</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS EOA Sanction Notification</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS EOA Institutional Approval</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS Statutory Sanction Order</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS Regulatory Compliance Record</span>
                        <PdfDownloadBadge label="" />
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Downloads CCSU Affiliation Letter (CCSU & IIFCCMS) */}
                  <div className="ref-download-col">
                    <h3 className="ref-col-heading">Downloads CCSU Affiliation Letter</h3>

                    <div className="ref-doc-list">
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS CCSU Affiliation Letter</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS CCSU University Notification</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS CCSU Regulatory Endorsement</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row white">
                        <span className="ref-doc-title">IIFCCMS CCSU Institutional Governance Order</span>
                        <PdfDownloadBadge label="" />
                      </div>
                      <div className="ref-doc-row shaded">
                        <span className="ref-doc-title">IIFCCMS CCSU Permanent Affiliation Notification</span>
                        <PdfDownloadBadge label="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0d5c75', fontSize: '1.08rem', color: '#000000', fontWeight: 700, lineHeight: 1.7 }}>
                  <strong>Statutory Note:</strong> IIF College of Commerce and Management Studies (IIFCCMS) is affiliated to Chaudhary Charan Singh University, Meerut (Accredited NAAC A++ Grade). All academic circulars, enrollment records, and semester exam rosters conform directly to CCSU regulations.
                </div>
              </div>
            )}

            {/* 9. Public Disclosure */}
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

                      {/* Row 2: Balance Sheet - Strictly NO YEAR mentioned */}
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

                <div style={{ marginTop: '1.5rem', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #0d5c75', fontSize: '1.08rem', color: '#000000', fontWeight: 700, lineHeight: 1.7 }}>
                  <strong>Transparency Compliance:</strong> Disclosed documents are maintained by the IIFCCMS Registrar and Academic Secretariat under CCS University statutory oversight and UGC disclosure directives.
                </div>
              </div>
            )}

            {/* 10. Social Initiatives */}
            {currentTab === 'social-initiatives' && (
              <div className="tab-content-card">
                <h2 className="ref-tab-title">Social Initiatives</h2>

                {/* Top Rich Brown Lead Banner */}
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
                        <img src={iif1} alt="IIFCCMS Tree Plantation Drive" />
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
                        <img src={iif2} alt="IIFCCMS Campus Greening Project" />
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
                        <img src={iif3} alt="IIFCCMS Faculty &amp; Student Volunteers" />
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
                      <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Affiliated to CCS University, Meerut</p>
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
