import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { GraduationCap, BookOpen, Award, Users, ChevronRight, CheckCircle2, Mail, Filter } from 'lucide-react';

import {
  facChairman,
  facManjuAgarwal,
  facRkAgarwal,
  facDeepakBansal,
  facPadmaMishra,
  facUmangGupta,
  facGouthamSandilya
} from '../assets/assetImages';

export default function FacultyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'directory';
  const [selectedDept, setSelectedDept] = useState('ALL');

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'directory', label: 'Faculty Directory', icon: <Users size={17} /> },
    { key: 'research', label: 'Research & Contributions', icon: <BookOpen size={17} /> },
    { key: 'councils', label: 'Academic Councils', icon: <Award size={17} /> }
  ];

  const facultyList = [
    {
      id: 'principal',
      name: "Prof. (Dr.) Saurabh Agarwal",
      position: "Principal & Professor of Management",
      department: "Executive Leadership & Finance",
      departmentTag: "Principal's Desk",
      photo: facChairman,
      qualifications: "Ph.D. (FMS, University of Delhi), M.Phil. (Delhi School of Economics), UGC (NET), AMT (AIMA), M.Com. (Delhi School of Economics), B.Com Honours (SRCC, University of Delhi)",
      specialisation: "Accounting, Financial Engineering & Strategic Corporate Management",
      profile: "Principal and Professor of Management at IIFCCMS. Alumnus of SRCC, Delhi School of Economics, and FMS Delhi University with over two decades of distinguished academic governance, research publications, and corporate leadership."
    },
    {
      id: 'manju-agarwal',
      name: "Prof. (Dr.) Manju Agarwal",
      position: "Professor of Economics & Senior Academic Mentor",
      department: "Department of Commerce",
      departmentTag: "Economics & Commerce",
      photo: facManjuAgarwal,
      qualifications: "Ph.D. (Delhi School of Economics), MA Eco. (DSE), BA Eco. (DU), ITP (London Business School, UK)",
      specialisation: "International Economics, Development Economics & Public Policy",
      profile: "Distinguished economist and senior mentor with academic credentials from Delhi School of Economics and London Business School. Specializes in macroeconomic policy, international finance, and public economics."
    },
    {
      id: 'rk-agarwal',
      name: "Prof. R.K. Agarwal",
      position: "Professor of Accounting & Corporate Taxation",
      department: "Department of Commerce",
      departmentTag: "Department of Commerce",
      photo: facRkAgarwal,
      qualifications: "M.Com. (Delhi University), CA (ICAI), Fellow Chartered Accountant (FCA), Fellow Company Secretary (FCS)",
      specialisation: "Corporate Financial Reporting, Direct Taxes & Statutory Auditing",
      profile: "Senior academician and Fellow Member of ICAI (FCA) & ICSI (FCS) with extensive expertise in corporate financial reporting, statutory audits, direct taxation, and corporate governance."
    },
    {
      id: 'deepak-bansal',
      name: "Prof. Deepak Bansal",
      position: "Assistant Professor of Information Technology & Analytics",
      department: "Department of Commerce",
      departmentTag: "IT & Business Analytics",
      photo: facDeepakBansal,
      qualifications: "M.Sc. Computer Science (MDU), M.Com. (HPU), ADSM (NIIT), B.Com (Hons.) (Delhi University)",
      specialisation: "Business Analytics, Enterprise IT Systems & Database Architecture",
      profile: "Assistant Professor with dual expertise in commerce and computer science. Mentors students in management information systems (MIS), financial modeling, and modern business data analytics."
    },
    {
      id: 'padma-mishra',
      name: "Mr. Padma Kanta Mishra",
      position: "Faculty in Accounting & Financial Management",
      department: "Department of Commerce",
      departmentTag: "Department of Commerce",
      photo: facPadmaMishra,
      qualifications: "I.C.W.A (Inter), M.Phil. Commerce (Kurukshetra University), M.Com. (Utkal University), B.Com. (Hons.), UGC NET (Commerce)",
      specialisation: "Cost Accounting, Managerial Finance & Working Capital Strategy",
      profile: "Senior faculty member in Commerce & Accounting with deep domain expertise in cost accounting, working capital strategy, managerial finance, and professional exam preparation."
    },
    {
      id: 'umang-gupta',
      name: "Dr. Umang Gupta",
      position: "Faculty in General Management & Organizational Strategy",
      department: "Department of Management",
      departmentTag: "Department of Management",
      photo: facUmangGupta,
      qualifications: "Ph.D. (Indian Institute of Technology, Roorkee), MBA (DEI Agra), BBA (DEI Agra), UGC NET JRF/SRF (Management)",
      specialisation: "Organizational Behavior, Strategic Management & Human Capital",
      profile: "Ph.D. from IIT Roorkee specializing in organizational behavior, strategic management, and decision sciences with active focus on real-world case study methodologies."
    },
    {
      id: 'goutham-sandilya',
      name: "Mr. Goutham Sandilya Avadanam",
      position: "Faculty in Finance & Corporate Strategy",
      department: "Department of Management",
      departmentTag: "Department of Management",
      photo: facGouthamSandilya,
      qualifications: "Fellow in Business Administration (Scholar, IIT Roorkee), PGDM (IMT Hyderabad), B.Com (Osmania University)",
      specialisation: "Capital Markets, Corporate Valuation & Quantitative Finance",
      profile: "Doctoral scholar at IIT Roorkee with research focus on capital markets, corporate valuations, and quantitative financial planning, bridging industry practice with theory."
    }
  ];

  const filteredFaculty = selectedDept === 'ALL'
    ? facultyList
    : facultyList.filter(f => f.department.toLowerCase().includes(selectedDept.toLowerCase()) || (selectedDept === 'Principal' && f.id === 'principal'));

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Faculty</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Directory'}</span>
          </div>
          <h1 className="page-main-heading">Faculty &amp; Academic Mentors</h1>
          <p className="page-sub-lead">
            Distinguished &amp; renowned faculty educated and worked in premier institutions across India and globally.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">Faculty Navigation</div>
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
                <div className="pill-title">Academic Advisory</div>
                <p>1:1 Student Faculty Mentorship Program</p>
                <Link to="/about?tab=contact" className="pill-phone">Connect with Faculty &rarr;</Link>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. Directory */}
            {currentTab === 'directory' && (
              <div className="tab-content-card">
                <div className="content-badge">CORE FACULTY ADVANTAGE</div>
                <h2 className="content-heading">Faculty Directory</h2>
                
                {/* Academic Overview Block */}
                <div className="faculty-pedigree-box">
                  <p className="lead-note">
                    <strong>The students will have an advantage of studying under the guidance of the Core Faculty:</strong>
                  </p>
                  <p>
                    Distinguished &amp; Renowned Faculty educated and / or worked in some of the best institutions : <strong>IIT, Delhi; SRCC; Delhi School of Economics, Delhi University; Columbia Univ. (USA); Cleveland State University (USA); London School of Eco. (UK); London Business School (UK); ABU (Nigeria) SIDA (Sweden); Univ. of Fiji (FIJI); World Bank (USA)</strong>.
                  </p>
                  <p>
                    Has to its credit over <strong>140 books, more than 250 articles, 600+ book reviews; 120+ bibliographies of about 25+ pages each; over 1000+ Radio / TV talks</strong> and its views &amp; opinions appearing more than 3,000 times in national dailies on economic issues and organised / participating in 1000+ seminars &amp; conferences and organised / lectured in <strong>550+ MDPs globally</strong>. It is well known for its Significant Pathbreaking Research Contributions.
                  </p>
                  <div className="air-tv-badge">
                    <CheckCircle2 size={18} />
                    <span>IIFCCMS faculty has appeared in more than <strong>500+ AIR/TV interviews</strong> during 2017-2021.</span>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="faculty-filter-bar">
                  <div className="faculty-filter-label">
                    <Filter size={16} />
                    <span>Filter Department:</span>
                  </div>
                  <div className="faculty-filter-buttons">
                    <button 
                      className={`filter-btn ${selectedDept === 'ALL' ? 'active' : ''}`}
                      onClick={() => setSelectedDept('ALL')}
                    >
                      All Faculty ({facultyList.length})
                    </button>
                    <button 
                      className={`filter-btn ${selectedDept === 'Principal' ? 'active' : ''}`}
                      onClick={() => setSelectedDept('Principal')}
                    >
                      Principal
                    </button>
                    <button 
                      className={`filter-btn ${selectedDept === 'Commerce' ? 'active' : ''}`}
                      onClick={() => setSelectedDept('Commerce')}
                    >
                      Commerce
                    </button>
                    <button 
                      className={`filter-btn ${selectedDept === 'Management' ? 'active' : ''}`}
                      onClick={() => setSelectedDept('Management')}
                    >
                      Management
                    </button>
                  </div>
                </div>

                {/* Faculty Custom Cards Matching User Design */}
                <div className="faculty-showcase-container">
                  {filteredFaculty.map((f) => (
                    <div key={f.id} className="faculty-showcase-card">
                      {/* Left: Square Photo Column */}
                      <div className="faculty-showcase-photo-col">
                        <div className="faculty-photo-square-box">
                          <img src={f.photo} alt={f.name} className="faculty-portrait-img" />
                          <div className="faculty-photo-corner-accent" />
                        </div>
                        <span className="faculty-photo-tag-pill">{f.departmentTag}</span>
                      </div>

                      {/* Right: Golden Profile Info Column */}
                      <div className="faculty-showcase-info-col">
                        <div className="faculty-gold-accent-line" />
                        <h3 className="faculty-showcase-name">{f.name.toUpperCase()}</h3>
                        <p className="faculty-showcase-designation">{f.position}</p>
                        
                        <div className="faculty-showcase-divider" />
                        
                        <h4 className="faculty-showcase-profile-title">Profile</h4>
                        <p className="faculty-showcase-bio">
                          {f.profile}
                        </p>

                        <div className="faculty-showcase-meta-group">
                          <div className="faculty-meta-row">
                            <span className="faculty-meta-badge-label">Qualifications:</span>
                            <span className="faculty-meta-badge-text">{f.qualifications}</span>
                          </div>
                          <div className="faculty-meta-row">
                            <span className="faculty-meta-badge-label">Specialisation:</span>
                            <span className="faculty-meta-badge-text highlight-spec">{f.specialisation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Research & Contributions */}
            {currentTab === 'research' && (
              <div className="tab-content-card">
                <div className="content-badge">SCHOLARSHIP &amp; PUBLICATIONS</div>
                <h2 className="content-heading">Research &amp; Case Development</h2>

                <div className="rich-text-content">
                  <p>
                    Faculty members at IIF CCMS have contributed over 140 books, 250+ articles, 600+ book reviews, and 120+ bibliographies across corporate finance, international economics, banking models, and capital markets.
                  </p>
                  <p>
                    Our academicians actively guide student research dissertations and publish in reputed peer-reviewed journals including <em>Finance India</em>.
                  </p>
                </div>
              </div>
            )}

            {/* 3. Academic Councils */}
            {currentTab === 'councils' && (
              <div className="tab-content-card">
                <div className="content-badge">ACADEMIC BODIES</div>
                <h2 className="content-heading">Academic Supervisory Councils</h2>

                <div className="rich-text-content">
                  <p>
                    Supervised by the Staff Council, Academic Standards Committee, and the Student Faculty Committee ensuring transparent assessment, timely syllabus coverage, and continuous internal evaluations.
                  </p>
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
