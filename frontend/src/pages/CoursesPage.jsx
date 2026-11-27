import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { 
  BookOpen, Briefcase, GraduationCap, Award, 
  CheckCircle2, ChevronRight, Download, FileText, Globe 
} from 'lucide-react';
import { postCardBcom, postCardBba, postCardBa } from '../assets/assetImages';
import examBoPdf from '../assets/sample-papers/Exam-BO.pdf';
import examStPdf from '../assets/sample-papers/Exam-ST.pdf';
import examBcPdf from '../assets/sample-papers/Exam-BC.pdf';
import examCaPdf from '../assets/sample-papers/Exam-CA.pdf';
import examFnhPdf from '../assets/sample-papers/Exam-FNH.pdf';


export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentTab = searchParams.get('tab') || 'bcom';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const programs = [
    { key: 'bcom', code: 'B.Com.', title: 'Bachelor of Commerce' },
    { key: 'bba', code: 'B.B.A.', title: 'Bachelor of Business Administration' },
    { key: 'ba', code: 'B.A.', title: 'Bachelor of Arts' }
  ];

  // B.Com Curriculum structured with Year & Semester groups as per official syllabus
  const bcomYears = [
    {
      year: 1,
      semesters: [
        {
          sem: 'I',
          papers: [
            { code: 'C010101T', title: 'Business Organisation', type: 'Theory', credits: 6 },
            { code: 'C010102T', title: 'Business Statistics', type: 'Theory', credits: 6 },
            { code: 'C010103T', title: 'Business Communication', type: 'Theory', credits: 6 },
            { code: 'C010104T', title: 'Introduction to Computer Application', type: 'Theory', credits: 6 }
          ]
        },
        {
          sem: 'II',
          papers: [
            { code: 'C010201T', title: 'Business Management', type: 'Theory', credits: 6 },
            { code: 'C010202T', title: 'Financial Accounting', type: 'Theory', credits: 4 },
            { code: 'C010203T', title: 'Computerised Accounting', type: 'Pratical', credits: 2 },
            { code: 'C010204T', title: 'Essentials of E-Commerce', type: 'Theory', credits: 6 },
            { code: 'C010205T', title: 'Business Economics', type: 'Theory', credits: 6 }
          ]
        }
      ]
    },
    {
      year: 2,
      semesters: [
        {
          sem: 'III',
          papers: [
            { code: 'C010301T', title: 'Company Law', type: 'Theory', credits: 6 },
            { code: 'C010302T', title: 'Cost Accounting', type: 'Theory', credits: 6 },
            { code: 'C010303T', title: 'Business Regulatory Framework', type: 'Theory', credits: 6 },
            { code: 'C010304T', title: 'Inventory Management', type: 'Theory', credits: 6 }
          ]
        },
        {
          sem: 'IV',
          papers: [
            { code: 'C010401T', title: 'Income Tax Law and Accounts', type: 'Theory', credits: 6 },
            { code: 'C010402T', title: 'Fundamentals of Marketing', type: 'Theory', credits: 4 },
            { code: 'C010403T', title: 'Digital Marketing', type: 'Pratical', credits: 2 },
            { code: 'C010404T', title: 'Fundamentals of Entrepreneurship', type: 'Theory', credits: 6 },
            { code: 'C010205T', title: 'Fundamentals of Entrepreneurship Tourism', type: 'Theory', credits: 6 }
          ]
        }
      ]
    },
    {
      year: 3,
      semesters: [
        {
          sem: 'V',
          papers: [
            { code: 'C010201T', title: 'Corporate Accounting', type: 'Theory', credits: 6 },
            { code: 'C010202T', title: 'Goods and Services Tax', type: 'Theory', credits: 4 },
            { code: 'C010203T', title: 'Business Finance', type: 'Pratical', credits: 2 },
            { code: 'C010204T', title: 'Principles and Practices of Insurance', type: 'Theory', credits: 6 },
            { code: 'C010205T', title: 'Monetary Theory and Banking in India', type: 'Theory', credits: 6 }
          ]
        },
        {
          sem: 'VI',
          papers: [
            { code: 'C010201T', title: 'Corporate Accounting', type: 'Theory', credits: 6 },
            { code: 'C010202T', title: 'Goods and Services Tax', type: 'Theory', credits: 4 },
            { code: 'C010203T', title: 'Business Finance', type: 'Pratical', credits: 2 },
            { code: 'C010204T', title: 'Principles and Practices of Insurance', type: 'Theory', credits: 6 },
            { code: 'C010205T', title: 'Monetary Theory and Banking in India', type: 'Theory', credits: 6 },
            { code: 'C010205T', title: 'Monetary Theory and Banking in India', type: 'Theory', credits: 6 }
          ]
        }
      ]
    }
  ];

  // BBA Semester-wise curriculum structure (organized in 2 clean columns)
  const bbaSemestersLeft = [
    {
      title: "BBA - I Semester",
      papers: [
        { code: "BBA - N 101", title: "Business Organisation" },
        { code: "BBA - N 102", title: "Business Mathematics" },
        { code: "BBA - N 103", title: "Principles of Economics" },
        { code: "BBA - N 104", title: "Book Keeping and Basic Accounting" },
        { code: "BBA - N 105", title: "Business Laws" },
        { code: "BBA - N 106", title: "Fundamentals of Management" },
        { code: "BBA - N 107", title: "Business Ethics" }
      ]
    },
    {
      title: "BBA - III Semester",
      papers: [
        { code: "BBA - N 301", title: "Advertising Management" },
        { code: "BBA - N 302", title: "Indian Banking System" },
        { code: "BBA - N 303", title: "Human Resource Management" },
        { code: "BBA - N 304", title: "Marketing Management" },
        { code: "BBA - N 305", title: "Company Accounts" },
        { code: "BBA - N 306", title: "Company Law" }
      ]
    },
    {
      title: "BBA - V Semester",
      papers: [
        { code: "BBA N 501", title: "Managerial Economics" },
        { code: "BBA N 502", title: "Entrepreneurship & Small Business Management" },
        { code: "BBA N 503", title: "Income Tax" },
        { code: "BBA N 504", title: "Cost and Management Accounting" },
        { code: "BBA N 505", title: "Industrial Law" },
        { code: "BBA N 506", title: "Computer Fundamental" }
      ]
    }
  ];

  const bbaSemestersRight = [
    {
      title: "BBA - II Semester",
      papers: [
        { code: "BBA - N 201", title: "Business Environment" },
        { code: "BBA - N 202", title: "Business Communication" },
        { code: "BBA - N 203", title: "Indian Economy" },
        { code: "BBA - N 204", title: "Principles of Accounting" },
        { code: "BBA - N 205", title: "Organisation Behaviour" },
        { code: "BBA - N 206", title: "Business Statistics" }
      ]
    },
    {
      title: "BBA - IV Semester",
      papers: [
        { code: "BBA - N 401", title: "Consumer Behaviour" },
        { code: "BBA - N 402", title: "Financial Management" },
        { code: "BBA - N 403", title: "Production Management" },
        { code: "BBA - N 404", title: "Sales Management" },
        { code: "BBA - N 405", title: "Research Methodology" },
        { code: "BBA - N 406", title: "Operation Research" }
      ]
    },
    {
      title: "BBA - VI Semester",
      papers: [
        { code: "BBA N 601", title: "International Trade" },
        { code: "BBA N 602", title: "Strategic Information System" },
        { code: "BBA N 603", title: "Vat & Service Tax/GST" },
        { code: "BBA N 604", title: "Management Information System" },
        { code: "BBA N 605", title: "Auditing" },
        { code: "BBA N 606", title: "Fundamental of E-Commerce" }
      ]
    }
  ];

  // Examination Papers Table
  const examPapers = [
    { year: 1, sem: 'I', code: 'C010101T', title: 'Business Organisation', type: 'Theory', file: examBoPdf, fileName: 'Exam-BO.pdf' },
    { year: 1, sem: 'I', code: 'C010102T', title: 'Business Statistics', type: 'Theory', file: examStPdf, fileName: 'Exam-ST.pdf' },
    { year: 1, sem: 'I', code: 'C010103T', title: 'Business Communication', type: 'Theory', file: examBcPdf, fileName: 'Exam-BC.pdf' },
    { year: 1, sem: 'I', code: 'C010104T', title: 'Introduction to Computer Application', type: 'Theory', file: examCaPdf, fileName: 'Exam-CA.pdf' },
    { year: 1, sem: 'I', code: 'Z010101T', title: 'Food Nutrition and Hygiene', type: 'Co-Curricular', file: examFnhPdf, fileName: 'Exam-FNH.pdf' }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Courses</span> <span>/</span> <span className="active">{programs.find(p => p.key === currentTab)?.code}</span>
          </div>
          <h1 className="page-main-heading">Undergraduate Degree Programs</h1>
          <p className="page-sub-lead">
            Curricula structured as per National Education Policy (NEP 2020) and affiliated to Chaudhary Charan Singh University, Meerut.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">Programs Offered</div>
              <ul className="sidebar-tab-list">
                {programs.map((p) => (
                  <li key={p.key}>
                    <button 
                      onClick={() => setTab(p.key)}
                      className={`sidebar-tab-btn ${currentTab === p.key ? 'active' : ''}`}
                    >
                      <span className="tab-icon"><BookOpen size={17} /></span>
                      <span className="tab-text">{p.code} - {p.title}</span>
                      <ChevronRight size={15} className="tab-chevron" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="sidebar-contact-pill">
                <div className="pill-title">Admissions Open</div>
                <p>Register online via official application form:</p>
                <Link 
                  to="/application-form"
                  className="btn-primary-gold" 
                  style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.85rem', fontWeight: 800, padding: '0.55rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  Apply Online Now
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. B.Com Program */}
            {currentTab === 'bcom' && (
              <div className="tab-content-card">
                <div className="content-badge">COMMERCE &amp; FINANCIAL STUDIES</div>
                <h2 className="content-heading">Bachelor of Commerce (B.Com.)</h2>

                {/* 2-Column Split: Key Features on Left | Full Official Postcard on Right */}
                <div className="course-program-split-grid">
                  {/* Left Column: Key Features */}
                  <div className="course-section-block">
                    <h3 className="section-sub-title">Key Features about the Program</h3>
                    <ul className="salient-list">
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>B.Com. is in-depth pure specialization in Commerce</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>The syllabus is taught in Semester Mode</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Internship in Industry / Summer Training</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Visits to Banks / Industry / Chambers</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Focus on Total Personality Development</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Opportunity to participate in Industry seminars / TV</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Games / Extra curricular activities &amp; debates</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>As per New Education Policy (NEP)</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Major Courses of 6 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Minor Electives of 4 / 5 / 6 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Vocational Courses of 3 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Co-curricular Courses of 2 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Major Industrial Training / Survey / Project of 3 / 6 Credits</span></li>
                    </ul>
                  </div>

                  {/* Right Column: Full Course Postcard Photo */}
                  <div className="course-postcard-col">
                    <div className="course-full-postcard-card">
                      <img 
                        src={postCardBcom} 
                        alt="B.Com. Official Course Postcard" 
                        className="course-full-postcard-img" 
                      />
                    </div>
                    <div className="course-postcard-apply-bar">
                      <Link 
                        to="/application-form" 
                        className="btn-primary-gold"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          padding: '0.75rem 1rem',
                          fontSize: '0.92rem',
                          fontWeight: 800,
                          borderRadius: '8px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)'
                        }}
                      >
                        Apply Online
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Curriculum Table */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 className="section-sub-title" style={{ margin: 0 }}>- List of Major Courses &amp; Minor Electives</h3>
                    <a 
                      href="https://education-policy.ccsuniversity.ac.in/ccsuniversity.ac.in/ccsu/education-policy.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary-gold"
                      style={{ fontSize: '0.85rem', fontWeight: 800, padding: '0.45rem 0.95rem' }}
                    >
                      <Download size={14} /> Download B.Com. Syllabus (PDF)
                    </a>
                  </div>

                  <div className="table-responsive-wrapper" style={{ border: '2px solid #555555', borderRadius: '4px', overflow: 'hidden', background: '#ffffff' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', fontFamily: 'inherit' }}>
                      <thead>
                        <tr style={{ background: '#f8fafc', borderBottom: '2px solid #555555' }}>
                          <th style={{ border: '1px solid #777777', padding: '6px 8px', textAlign: 'center', width: '55px', fontWeight: 900, color: '#000000' }}>Year</th>
                          <th style={{ border: '1px solid #777777', padding: '6px 8px', textAlign: 'center', width: '55px', fontWeight: 900, color: '#000000' }}>Sem.</th>
                          <th style={{ border: '1px solid #777777', padding: '6px 10px', textAlign: 'center', width: '120px', fontWeight: 900, color: '#000000' }}>Course Code</th>
                          <th style={{ border: '1px solid #777777', padding: '6px 12px', textAlign: 'left', fontWeight: 900, color: '#000000' }}>Paper Title</th>
                          <th style={{ border: '1px solid #777777', padding: '6px 10px', textAlign: 'center', width: '130px', fontWeight: 900, color: '#000000' }}>Theory/Pratical</th>
                          <th style={{ border: '1px solid #777777', padding: '6px 8px', textAlign: 'center', width: '70px', fontWeight: 900, color: '#000000' }}>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bcomYears.map((yr) => {
                          const totalYrRows = yr.semesters.reduce((acc, s) => acc + s.papers.length, 0);
                          let renderedYr = false;
                          return yr.semesters.map((sem) => {
                            let renderedSem = false;
                            return sem.papers.map((p, pIdx) => {
                              const showYr = !renderedYr;
                              if (showYr) renderedYr = true;
                              const showSem = !renderedSem;
                              if (showSem) renderedSem = true;
                              return (
                                <tr key={`${yr.year}-${sem.sem}-${pIdx}`} style={{ borderBottom: '1px solid #777777' }}>
                                  {showYr && (
                                    <td 
                                      rowSpan={totalYrRows}
                                      style={{ border: '1px solid #777777', textAlign: 'center', verticalAlign: 'middle', fontWeight: 800, color: '#000000', padding: '4px' }}
                                    >
                                      {yr.year}
                                    </td>
                                  )}
                                  {showSem && (
                                    <td 
                                      rowSpan={sem.papers.length}
                                      style={{ border: '1px solid #777777', textAlign: 'center', verticalAlign: 'middle', fontWeight: 800, color: '#000000', padding: '4px' }}
                                    >
                                      {sem.sem}
                                    </td>
                                  )}
                                  <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '4px 6px', fontWeight: 800, color: '#000000' }}>
                                    {p.code}
                                  </td>
                                  <td style={{ border: '1px solid #777777', padding: '4px 10px', color: '#000000', fontWeight: 700 }}>
                                    {p.title}
                                  </td>
                                  <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '4px 6px', color: '#000000', fontWeight: 600 }}>
                                    {p.type}
                                  </td>
                                  <td style={{ border: '1px solid #777777', textAlign: 'center', padding: '4px 6px', fontWeight: 800, color: '#000000' }}>
                                    {p.credits}
                                  </td>
                                </tr>
                              );
                            });
                          });
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <h3 className="section-sub-title">Career Opportunities for B.Com</h3>
                  <div className="career-pathways-grid">
                    <div className="pathway-card">
                      <div className="path-head"><GraduationCap size={20} /> For Further Studies</div>
                      <ul>
                        <li>M.Com from Ivy Institutes</li>
                        <li>IAS / IES / IPS (Civil Services)</li>
                        <li>Chartered Accountancy (CA) / CS / CMA</li>
                      </ul>
                    </div>

                    <div className="pathway-card">
                      <div className="path-head"><Briefcase size={20} /> Employment in Industry or Government</div>
                      <ul>
                        <li>Accountants, Managers, Marketing Executives</li>
                        <li>Engage in Family Business</li>
                        <li>Develop as Entrepreneurs</li>
                        <li>Positions in Banks, Financial Institutions and Government</li>
                      </ul>
                    </div>

                    <div className="pathway-card">
                      <div className="path-head"><Globe size={20} /> Overseas Jobs</div>
                      <ul>
                        <li>Marketing / Management Executives</li>
                        <li>Roles in Global Startups &amp; Financial Houses</li>
                        <li>International Chambers of Commerce</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Download University Examination Papers */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <h3 className="section-sub-title">Download University Examination Papers</h3>
                  <div className="table-responsive-wrapper">
                    <table className="styled-academic-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Sem.</th>
                          <th>Course Code</th>
                          <th>Paper Title</th>
                          <th>Theory/Practical</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examPapers.map((paper, i) => (
                          <tr key={i}>
                            <td style={{ color: '#000000', fontWeight: 700 }}>{paper.year}</td>
                            <td style={{ color: '#000000', fontWeight: 800 }}><strong>{paper.sem}</strong></td>
                            <td><span className="code-badge" style={{ color: '#000000', fontWeight: 800 }}>{paper.code}</span></td>
                            <td style={{ color: '#000000', fontWeight: 700 }}>{paper.title}</td>
                            <td><span className="type-tag theory">{paper.type}</span></td>
                            <td>
                              <a 
                                href={paper.file} 
                                target="_blank"
                                rel="noopener noreferrer"
                                download={paper.fileName}
                                className="paper-download-link"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.4rem',
                                  background: '#062a36',
                                  color: '#ffffff',
                                  padding: '0.4rem 0.85rem',
                                  borderRadius: '6px',
                                  fontSize: '0.82rem',
                                  fontWeight: 800,
                                  textDecoration: 'none',
                                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                                }}
                              >
                                <Download size={14} /> Paper PDF
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BBA Program */}
            {currentTab === 'bba' && (
              <div className="tab-content-card">
                <div className="content-badge">BUSINESS ADMINISTRATION &amp; LEADERSHIP</div>
                <h2 className="content-heading">Bachelor of Business Administration (B.B.A.)</h2>

                {/* 2-Column Split: Key Features on Left | Full Official Postcard on Right */}
                <div className="course-program-split-grid">
                  {/* Left Column: Key Features */}
                  <div className="course-section-block">
                    <h3 className="section-sub-title">Key Features about the Program</h3>
                    <ul className="salient-list">
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>B.B.A. provides intensive foundation in Business Administration &amp; Commerce</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>The syllabus is taught in Semester Mode</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Internship in Industry / Summer Training</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Visits to Banks / Industry / Chambers</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Focus on Total Personality Development</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Opportunity to participate in Industry seminars / TV</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Games / Extra curricular activities &amp; debates</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>As per New Education Policy (NEP)</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Major Courses of 6 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Minor Electives of 4 / 5 / 6 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Vocational Courses of 3 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Co-curricular Courses of 2 Credits</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Major Industrial Training / Survey / Project of 3 / 6 Credits</span></li>
                    </ul>
                  </div>

                  {/* Right Column: Full Course Postcard Photo */}
                  <div className="course-postcard-col">
                    <div className="course-full-postcard-card">
                      <img 
                        src={postCardBba} 
                        alt="BBA Official Course Postcard" 
                        className="course-full-postcard-img" 
                      />
                    </div>
                    <div className="course-postcard-apply-bar">
                      <Link 
                        to="/application-form" 
                        className="btn-primary-gold"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          padding: '0.75rem 1rem',
                          fontSize: '0.92rem',
                          fontWeight: 800,
                          borderRadius: '8px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)'
                        }}
                      >
                        Apply Online
                      </Link>
                    </div>
                  </div>
                </div>

                {/* BBA Semester-wise Curriculum Showcase */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                    <h3 className="section-sub-title" style={{ margin: 0 }}>- List of Major Courses &amp; Minor Electives</h3>
                    <a 
                      href="https://education-policy.ccsuniversity.ac.in/ccsuniversity.ac.in/ccsu/education-policy.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary-gold"
                      style={{ fontSize: '0.85rem', fontWeight: 800, padding: '0.45rem 0.95rem' }}
                    >
                      <Download size={14} /> Download BBA Syllabus (PDF)
                    </a>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem 4rem',
                    background: '#ffffff',
                    padding: '2.25rem',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                  }}>
                    {/* Left Column: Sem I, Sem III, Sem V */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                      {bbaSemestersLeft.map((sem, sIdx) => (
                        <div key={sIdx}>
                          <h4 style={{
                            color: '#8b0000',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                            fontWeight: 900,
                            fontSize: '1.15rem',
                            margin: '0 0 1rem',
                            textAlign: 'center'
                          }}>
                            {sem.title}
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                            {sem.papers.map((paper, pIdx) => (
                              <div key={pIdx} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', fontSize: '0.92rem' }}>
                                <span style={{ color: '#000000', fontWeight: 900, width: '115px', flexShrink: 0 }}>
                                  {paper.code}
                                </span>
                                <span style={{ color: '#000000', fontWeight: 700 }}>
                                  {paper.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Column: Sem II, Sem IV, Sem VI */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                      {bbaSemestersRight.map((sem, sIdx) => (
                        <div key={sIdx}>
                          <h4 style={{
                            color: '#8b0000',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                            fontWeight: 900,
                            fontSize: '1.15rem',
                            margin: '0 0 1rem',
                            textAlign: 'center'
                          }}>
                            {sem.title}
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                            {sem.papers.map((paper, pIdx) => (
                              <div key={pIdx} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', fontSize: '0.92rem' }}>
                                <span style={{ color: '#000000', fontWeight: 900, width: '115px', flexShrink: 0 }}>
                                  {paper.code}
                                </span>
                                <span style={{ color: '#000000', fontWeight: 700 }}>
                                  {paper.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <h3 className="section-sub-title">Career Opportunities for BBA</h3>
                  <div className="career-pathways-grid">
                    <div className="pathway-card">
                      <div className="path-head"><GraduationCap size={20} /> For Further Studies</div>
                      <ul>
                        <li>MBA / PGDM from Premier IIMs &amp; Ivy Institutes</li>
                        <li>IAS / IES / IPS (Civil Services)</li>
                        <li>CA / CS / CMA / CFA</li>
                      </ul>
                    </div>

                    <div className="pathway-card">
                      <div className="path-head"><Briefcase size={20} /> Employment in Industry or Government</div>
                      <ul>
                        <li>Accountants, Managers, Marketing Executives</li>
                        <li>Engage in Family Business Leadership</li>
                        <li>Develop as Entrepreneurs &amp; Startup Founders</li>
                        <li>Roles in Banks, Financial Institutions and Government</li>
                      </ul>
                    </div>

                    <div className="pathway-card">
                      <div className="path-head"><Globe size={20} /> Overseas Jobs</div>
                      <ul>
                        <li>Marketing / Management Executives</li>
                        <li>Roles in Global Startups &amp; Chambers</li>
                        <li>International Consulting &amp; Financial Institutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. B.A Program */}
            {currentTab === 'ba' && (
              <div className="tab-content-card">
                <div className="content-badge">HUMANITIES &amp; LIBERAL ARTS</div>
                <h2 className="content-heading">Bachelor of Arts (B.A.)</h2>

                {/* 2-Column Split: Key Features on Left | Full Official Postcard on Right */}
                <div className="course-program-split-grid">
                  {/* Left Column: Disciplines & Key Features */}
                  <div className="course-section-block">
                    <div className="disciplines-ribbon" style={{ marginBottom: '1.25rem' }}>
                      Seven Disciplines Offered: <strong>Economics, English, Computer Science, Statistics, Political Science, History, Psychology</strong>
                    </div>

                    <h3 className="section-sub-title">Key Features about the Program</h3>
                    <ul className="salient-list">
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Students can select any three subjects from seven disciplines given above</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>The Syllabus is taught in semester mode</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Internship in Industry / Summer Training</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Visits to Banks / Industry / Chambers</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Focus on Total Personality Development</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Opportunity to participate in Industry seminars / TV</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span>Games / Extra curricular activities &amp; debates</span></li>
                    </ul>
                  </div>

                  {/* Right Column: Full Course Postcard Photo */}
                  <div className="course-postcard-col">
                    <div className="course-full-postcard-card">
                      <img 
                        src={postCardBa} 
                        alt="B.A. Official Course Postcard" 
                        className="course-full-postcard-img" 
                      />
                    </div>
                    <div className="course-postcard-apply-bar">
                      <Link 
                        to="/application-form" 
                        className="btn-primary-gold"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          padding: '0.75rem 1rem',
                          fontSize: '0.92rem',
                          fontWeight: 800,
                          borderRadius: '8px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)'
                        }}
                      >
                        Apply Online
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <h3 className="section-sub-title">Career Opportunities for BA</h3>
                  <div className="career-pathways-grid">
                    <div className="pathway-card">
                      <div className="path-head"><GraduationCap size={20} /> For Further Studies</div>
                      <ul>
                        <li>MA from Ivy Institutes &amp; Central Universities</li>
                        <li>IAS / IES / IPS (Civil Services)</li>
                        <li>Law (LL.B.) &amp; Public Policy Research</li>
                      </ul>
                    </div>

                    <div className="pathway-card">
                      <div className="path-head"><Briefcase size={20} /> Employment in Industry or Government</div>
                      <ul>
                        <li>Accountants, Managers, Marketing Executives</li>
                        <li>Engage in Family Business</li>
                        <li>Develop as Entrepreneurs</li>
                        <li>Joins in Banks, Financial Institutions and Government</li>
                      </ul>
                    </div>

                    <div className="pathway-card">
                      <div className="path-head"><Globe size={20} /> Overseas Jobs</div>
                      <ul>
                        <li>Marketing / Management Executives</li>
                        <li>Roles in Startups / Chambers / Financial Institutions</li>
                        <li>International Non-Governmental Organizations (NGOs)</li>
                      </ul>
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
