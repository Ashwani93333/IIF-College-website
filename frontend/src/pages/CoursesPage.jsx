import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { 
  BookOpen, Briefcase, GraduationCap, Award, 
  CheckCircle2, ChevronRight, Download, FileText, Globe 
} from 'lucide-react';

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

  // Common Curriculum Table for B.Com & BBA
  const commerceCurriculum = [
    { year: 1, sem: 'I', code: 'C010101T', title: 'Business Organisation', type: 'Theory', credits: 6 },
    { year: 1, sem: 'I', code: 'C010102T', title: 'Business Statistics', type: 'Theory', credits: 6 },
    { year: 1, sem: 'I', code: 'C010103T', title: 'Business Communication', type: 'Theory', credits: 6 },
    { year: 1, sem: 'I', code: 'C010104T', title: 'Introduction to Computer Application', type: 'Theory', credits: 6 },
    { year: 1, sem: 'II', code: 'C010201T', title: 'Business Management', type: 'Theory', credits: 6 },
    { year: 1, sem: 'II', code: 'C010202T', title: 'Financial Accounting', type: 'Theory', credits: 4 },
    { year: 1, sem: 'II', code: 'C010203T', title: 'Computerised Accounting', type: 'Practical', credits: 2 },
    { year: 1, sem: 'II', code: 'C010204T', title: 'Essentials of E-Commerce', type: 'Theory', credits: 6 },
    { year: 1, sem: 'II', code: 'C010205T', title: 'Business Economics', type: 'Theory', credits: 6 },
    { year: 2, sem: 'III', code: 'C010301T', title: 'Company Law', type: 'Theory', credits: 6 },
    { year: 2, sem: 'III', code: 'C010302T', title: 'Cost Accounting', type: 'Theory', credits: 6 },
    { year: 2, sem: 'III', code: 'C010303T', title: 'Business Regulatory Framework', type: 'Theory', credits: 6 },
    { year: 2, sem: 'III', code: 'C010304T', title: 'Inventory Management', type: 'Theory', credits: 6 },
    { year: 2, sem: 'IV', code: 'C010401T', title: 'Income Tax Law and Accounts', type: 'Theory', credits: 6 },
    { year: 2, sem: 'IV', code: 'C010402T', title: 'Fundamentals of Marketing', type: 'Theory', credits: 4 },
    { year: 2, sem: 'IV', code: 'C010403T', title: 'Digital Marketing', type: 'Practical', credits: 2 },
    { year: 2, sem: 'IV', code: 'C010404T', title: 'Fundamentals of Entrepreneurship', type: 'Theory', credits: 6 },
    { year: 2, sem: 'IV', code: 'C010205T', title: 'Fundamentals of Entrepreneurship Tourism', type: 'Theory', credits: 6 },
    { year: 3, sem: 'V', code: 'C010201T', title: 'Corporate Accounting', type: 'Theory', credits: 6 },
    { year: 3, sem: 'V', code: 'C010202T', title: 'Goods and Services Tax', type: 'Theory', credits: 4 },
    { year: 3, sem: 'V', code: 'C010203T', title: 'Business Finance', type: 'Practical', credits: 2 },
    { year: 3, sem: 'V', code: 'C010204T', title: 'Principles and Practices of Insurance', type: 'Theory', credits: 6 },
    { year: 3, sem: 'V', code: 'C010205T', title: 'Monetary Theory and Banking in India', type: 'Theory', credits: 6 },
    { year: 3, sem: 'VI', code: 'C010201T', title: 'Corporate Accounting', type: 'Theory', credits: 6 },
    { year: 3, sem: 'VI', code: 'C010202T', title: 'Goods and Services Tax', type: 'Theory', credits: 4 },
    { year: 3, sem: 'VI', code: 'C010203T', title: 'Business Finance', type: 'Practical', credits: 2 },
    { year: 3, sem: 'VI', code: 'C010204T', title: 'Principles and Practices of Insurance', type: 'Theory', credits: 6 },
    { year: 3, sem: 'VI', code: 'C010205T', title: 'Monetary Theory and Banking in India', type: 'Theory', credits: 6 }
  ];

  // Examination Papers Table
  const examPapers = [
    { year: 1, sem: 'I', code: 'C010101T', title: 'Business Organisation', type: 'Theory' },
    { year: 1, sem: 'I', code: 'C010102T', title: 'Business Statistics', type: 'Theory' },
    { year: 1, sem: 'I', code: 'C010103T', title: 'Business Communication', type: 'Theory' },
    { year: 1, sem: 'I', code: 'C010104T', title: 'Introduction to Computer Application', type: 'Theory' },
    { year: 1, sem: 'I', code: 'Z010101T', title: 'Food Nutrition and Hygiene', type: 'Co-Curricular' }
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
                <div className="pill-title">Admissions 2026-27</div>
                <p>Register online via official digital desk:</p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSddLOq1Hb3lHuFFxbGe1TQpZ_zY9qnxqIp9Nm8sEpegMb_3oQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gold" 
                  style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.82rem', padding: '0.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  Apply Online Now
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. B.Com Program */}
            {currentTab === 'bcom' && (
              <div className="tab-content-card">
                <div className="content-badge">COLLEGE CODE - 472</div>
                <h2 className="content-heading">Bachelor of Commerce (B.Com.)</h2>

                {/* Key Features */}
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

                {/* Curriculum Table */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 className="section-sub-title" style={{ margin: 0 }}>List of Major Courses &amp; Minor Electives</h3>
                    <a 
                      href="https://education-policy.ccsuniversity.ac.in/ccsuniversity.ac.in/ccsu/education-policy.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary-gold"
                      style={{ fontSize: '0.78rem', padding: '0.4rem 0.85rem' }}
                    >
                      <Download size={14} /> Download B.Com. Syllabus (PDF)
                    </a>
                  </div>

                  <div className="table-responsive-wrapper">
                    <table className="styled-academic-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Sem.</th>
                          <th>Course Code</th>
                          <th>Paper Title</th>
                          <th>Theory/Practical</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commerceCurriculum.map((row, idx) => (
                          <tr key={idx}>
                            <td>{row.year}</td>
                            <td><strong>{row.sem}</strong></td>
                            <td><span className="code-badge">{row.code}</span></td>
                            <td>{row.title}</td>
                            <td><span className={`type-tag ${row.type.toLowerCase()}`}>{row.type}</span></td>
                            <td><strong>{row.credits}</strong></td>
                          </tr>
                        ))}
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
                            <td>{paper.year}</td>
                            <td><strong>{paper.sem}</strong></td>
                            <td><span className="code-badge">{paper.code}</span></td>
                            <td>{paper.title}</td>
                            <td><span className="type-tag theory">{paper.type}</span></td>
                            <td>
                              <a 
                                href="#download" 
                                onClick={(e) => { e.preventDefault(); alert(`Downloading question paper: ${paper.code} - ${paper.title}`); }}
                                className="paper-download-link"
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
                <div className="content-badge">COLLEGE CODE - 454</div>
                <h2 className="content-heading">Bachelor of Business Administration (B.B.A.)</h2>

                {/* Key Features */}
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

                {/* Curriculum Table */}
                <div className="course-section-block" style={{ marginTop: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 className="section-sub-title" style={{ margin: 0 }}>List of Major Courses &amp; Minor Electives</h3>
                    <a 
                      href="https://education-policy.ccsuniversity.ac.in/ccsuniversity.ac.in/ccsu/education-policy.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary-gold"
                      style={{ fontSize: '0.78rem', padding: '0.4rem 0.85rem' }}
                    >
                      <Download size={14} /> Download BBA Syllabus (PDF)
                    </a>
                  </div>

                  <div className="table-responsive-wrapper">
                    <table className="styled-academic-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Sem.</th>
                          <th>Course Code</th>
                          <th>Paper Title</th>
                          <th>Theory/Practical</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commerceCurriculum.map((row, idx) => (
                          <tr key={idx}>
                            <td>{row.year}</td>
                            <td><strong>{row.sem}</strong></td>
                            <td><span className="code-badge">{row.code}</span></td>
                            <td>{row.title}</td>
                            <td><span className={`type-tag ${row.type.toLowerCase()}`}>{row.type}</span></td>
                            <td><strong>{row.credits}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                            <td>{paper.year}</td>
                            <td><strong>{paper.sem}</strong></td>
                            <td><span className="code-badge">{paper.code}</span></td>
                            <td>{paper.title}</td>
                            <td><span className="type-tag theory">{paper.type}</span></td>
                            <td>
                              <a 
                                href="#download" 
                                onClick={(e) => { e.preventDefault(); alert(`Downloading question paper: ${paper.code} - ${paper.title}`); }}
                                className="paper-download-link"
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

            {/* 3. B.A Program */}
            {currentTab === 'ba' && (
              <div className="tab-content-card">
                <div className="content-badge">COLLEGE CODE - 478</div>
                <h2 className="content-heading">Bachelor of Arts (B.A.)</h2>
                <div className="disciplines-ribbon">
                  Seven Disciplines Offered: <strong>Economics, English, Computer Science, Statistics, Political Science, History, Psychology</strong>
                </div>

                {/* Key Features */}
                <div className="course-section-block" style={{ marginTop: '1.5rem' }}>
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
