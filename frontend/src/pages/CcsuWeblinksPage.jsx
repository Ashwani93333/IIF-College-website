import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { ExternalLink, Award, FileText, ChevronRight, CheckCircle2, Globe } from 'lucide-react';

export default function CcsuWeblinksPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'about-ccsu';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'about-ccsu', label: 'About CCS University', icon: <Award size={17} /> },
    { key: 'weblinks', label: 'CCS University Weblinks', icon: <ExternalLink size={17} /> }
  ];

  const officialLinks = [
    {
      title: "CCSU Official Webpage",
      url: "https://www.ccsuniversity.ac.in/",
      badge: "Main University Desk",
      desc: "Central statutory web portal of Chaudhary Charan Singh University, Meerut."
    },
    {
      title: "CCSU Admission Weblink",
      url: "https://ccsuadmission.in/",
      badge: "Admissions & Registration",
      desc: "University enrollment portal for undergraduate and postgraduate registrations."
    },
    {
      title: "University Result Portal",
      url: "https://result.ccsuniversity.ac.in/",
      badge: "Results & Grade Cards",
      desc: "Direct verification of official semester exam results, marks sheets, and transcripts."
    },
    {
      title: "UGC NEP 2020 Portal",
      url: "https://education-policy.ccsuniversity.ac.in/ccsuniversity.ac.in/ccsu/education-policy.html",
      badge: "NEP Curricula & Syllabi",
      desc: "National Education Policy guidelines, ordinances, credit structures, and semester syllabi."
    }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>CCS University</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Overview'}</span>
          </div>
          <h1 className="page-main-heading">Chaudhary Charan Singh University</h1>
          <p className="page-sub-lead">
            Official statutory profile, accreditation credentials, and direct university portal links for IIF CCMS students.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">University Desk</div>
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
                <div className="pill-title">University Portal</div>
                <p>Official Statutory Website</p>
                <a href="https://www.ccsuniversity.ac.in" target="_blank" rel="noopener noreferrer" className="pill-phone">
                  ccsuniversity.ac.in &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. About CCS University */}
            {currentTab === 'about-ccsu' && (
              <div className="tab-content-card">
                <div className="content-badge">STATUTORY AFFILIATION</div>
                <h2 className="content-heading">About Chaudhary Charan Singh University</h2>
                
                <div className="rich-text-content">
                  <p>
                    Chaudhary Charan Singh University (formerly, Meerut University) was established in 1965, to cater to the needs of higher education in western Uttar Pradesh. The University celebrated its silver jubilee in 1991. Presently, it is one of the premier educational institutions of the country encompassing a vast, beautiful and pollution-free campus which sprawls over <strong>222 acres of land</strong> having vast playgrounds and experimental fields, botanical garden, rose garden with life-size statue of the late Prime Minister Ch. Charan Singh, Gymnasium, Indoor Stadium, well equipped Library, Hostels for both girls and boys, Administrative Block, Spacious Auditorium, Guest House, Community Center, Medical Center, Residential Quarters for faculty members and employees, Canteen, Bank and Post office. The teaching department belonging to different faculties, are housed in spacious buildings and have well-equipped laboratories and advanced facilities. The University also has a separate engineering college, which is currently offering courses leading to B.Tech. degree in several different branches of engineering.
                  </p>

                  <p>
                    Initially, the M.Phil and Ph.D. programmes were started in 1969 taking credit of becoming first University in the country to introduce M.Phil. programme. In 1973, Post Graduate level courses were also introduced with the modernized syllabi. Since then, the University has been progressing at a steady rate. During the VIII five years plan, introduction of self-financed courses keeping in pace with the changing demands of the society and also for human resources development, were planned. Now, there are five faculties with 22 UGC sponsored and 35 self-financed/job oriented courses being run in the campus. <strong>252 professional colleges/institutions, 109 colleges and one constituent college</strong> are affiliated to Chaudhary Charan Singh University.
                  </p>

                  <p>
                    Under the able leadership of the Vice Chancellor, a renowned innovative technologist and an established committed academic administrator, the university is offering a large number of new and innovative post-graduate, under-graduate, diploma, advanced diploma and postgraduate diploma courses under self-financed scheme in areas of Agricultural Sciences, Humanities, Social Sciences, Journalism, Mass Communication and Multimedia Techniques, Earth Sciences, Teacher and Physical Education, Fine Arts, Legal Studies, Applied Sciences, Home Science, Business Studies, Geographical Information System (GIS) and Remote Sensing.
                  </p>

                  <div className="highlight-callout-box" style={{ marginTop: '2rem' }}>
                    <h3 className="callout-title">IIF CCMS Affiliation Codes</h3>
                    <ul className="salient-list">
                      <li><CheckCircle2 size={18} className="check-ico" /> <span><strong>COLLEGE CODE - 472:</strong> Bachelor of Commerce (B.Com)</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span><strong>COLLEGE CODE - 454:</strong> Bachelor of Business Administration (BBA)</span></li>
                      <li><CheckCircle2 size={18} className="check-ico" /> <span><strong>COLLEGE CODE - 478:</strong> Bachelor of Arts (B.A.)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 2. CCS University Weblinks */}
            {currentTab === 'weblinks' && (
              <div className="tab-content-card">
                <div className="content-badge">OFFICIAL WEB DIRECTORY</div>
                <h2 className="content-heading">CCS University Weblinks</h2>
                <p className="tab-lead-desc">
                  Direct access to Chaudhary Charan Singh University, Meerut online examination, admission, and results desks:
                </p>

                <div className="ccsu-links-grid">
                  {officialLinks.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ccsu-link-card"
                    >
                      <div className="link-card-top">
                        <span className="link-badge">{link.badge}</span>
                        <ExternalLink size={16} className="ext-icon" />
                      </div>
                      <h3 className="link-title">{link.title}</h3>
                      <p className="link-desc">{link.desc}</p>
                      <div className="link-footer-cta">
                        <span>{link.url} &rarr;</span>
                      </div>
                    </a>
                  ))}
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
