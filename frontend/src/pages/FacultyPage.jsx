import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { GraduationCap, BookOpen, Award, Users, ChevronRight, CheckCircle2, Mail } from 'lucide-react';

export default function FacultyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'directory';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'directory', label: 'Faculty Directory', icon: <Users size={17} /> },
    { key: 'research', label: 'Research & Contributions', icon: <BookOpen size={17} /> },
    { key: 'councils', label: 'Academic Councils', icon: <Award size={17} /> }
  ];

  const principal = {
    name: "Prof. (Dr.) Saurabh Agarwal",
    qualifications: "Ph.D. (FMS, University of Delhi), M.Phil.(Delhi School of Economics), UGC(NET), AMT(AIMA), M.Com.(Delhi School of Economics), B.Com Honours (SRCC, University of Delhi)",
    position: "Principal & Professor",
    specialisation: "Accounting & Finance",
    department: "Executive Academic Leadership"
  };

  const commerceFaculty = [
    {
      name: "Prof. (Dr.) Manju Agarwal",
      qualifications: "Ph.D. (Delhi School of Economics), MA Eco. (DSE), BA Eco. (DU), ITP (LBS London)",
      position: "Professor",
      specialisation: "Economics"
    },
    {
      name: "Prof. R.K. Agarwal",
      qualifications: "M.Com. (Delhi University), CA (ICAI), FCA, FCS",
      position: "Professor",
      specialisation: "Accounting & Taxation"
    },
    {
      name: "Prof. Deepak Bansal",
      qualifications: "M.Sc. Computer Science (Maharishi Dayanand University), M.Com. (Himachal Pradesh University), ADSM (NIIT), B.Com(Hons.) (Delhi University)",
      position: "Assistant Professor",
      specialisation: "Computers & IT"
    },
    {
      name: "Mr. Padma Kanta Mishra",
      qualifications: "I.C.W.A (Intermediate), M.Phil.(Commerce) (Kurukshetra University), M.Com. (Utkal University), B.Com. (Hons.) (Utkal University), UGC NET (Commerce)",
      position: "Faculty",
      specialisation: "Accounting & Finance"
    }
  ];

  const managementFaculty = [
    {
      name: "Dr. Umang Gupta",
      qualifications: "PhD (Indian Institute of Technology, Roorkee), MBA (Dayalbagh Educational Institute Agra), BBA (Dayalbagh Educational Institute Agra), UGC NET JRF SRF (Management)",
      position: "Faculty",
      specialisation: "General Management"
    },
    {
      name: "Mr. Goutham Sandilya Avadanam",
      qualifications: "FBA (pursuing, Roorkee), PGDM (IMT, Hyderabad), B.Com (Osmania University)",
      position: "Faculty",
      specialisation: "Management & Finance"
    }
  ];

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

                {/* Principal Card */}
                <h3 className="section-sub-title" style={{ marginTop: '2.5rem' }}>Principal</h3>
                <div className="faculty-profile-card principal-card-gold">
                  <div className="f-header">
                    <div>
                      <span className="f-role-tag">{principal.position}</span>
                      <h4 className="f-name">{principal.name}</h4>
                    </div>
                  </div>
                  <div className="f-meta-item">
                    <strong>Qualifications:</strong>
                    <span>{principal.qualifications}</span>
                  </div>
                  <div className="f-meta-item">
                    <strong>Specialisation:</strong>
                    <span className="specialisation-pill">{principal.specialisation}</span>
                  </div>
                </div>

                {/* Department of Commerce */}
                <h3 className="section-sub-title" style={{ marginTop: '2.5rem' }}>Department of Commerce</h3>
                <div className="faculty-cards-grid">
                  {commerceFaculty.map((f, idx) => (
                    <div key={idx} className="faculty-profile-card">
                      <div className="f-header">
                        <div>
                          <span className="f-role-tag">{f.position}</span>
                          <h4 className="f-name">{f.name}</h4>
                        </div>
                      </div>
                      <div className="f-meta-item">
                        <strong>Qualifications:</strong>
                        <span>{f.qualifications}</span>
                      </div>
                      <div className="f-meta-item">
                        <strong>Specialisation:</strong>
                        <span className="specialisation-pill">{f.specialisation}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Department of Management */}
                <h3 className="section-sub-title" style={{ marginTop: '2.5rem' }}>Department of Management</h3>
                <div className="faculty-cards-grid">
                  {managementFaculty.map((f, idx) => (
                    <div key={idx} className="faculty-profile-card">
                      <div className="f-header">
                        <div>
                          <span className="f-role-tag">{f.position}</span>
                          <h4 className="f-name">{f.name}</h4>
                        </div>
                      </div>
                      <div className="f-meta-item">
                        <strong>Qualifications:</strong>
                        <span>{f.qualifications}</span>
                      </div>
                      <div className="f-meta-item">
                        <strong>Specialisation:</strong>
                        <span className="specialisation-pill">{f.specialisation}</span>
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
