import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import NoticeBoard from '../components/public/NoticeBoard';
import EventsSection from '../components/public/EventsSection';
import { Calendar, Users, Tv, Bell, ChevronRight, CheckCircle2 } from 'lucide-react';

import {
  imgChConference, imgPgStudentFest, imgPgMediaBriefing,
  imgPgVietnamPresident, imgPgAcademicMOU,
  media1, media2, media3, media4, media5, media7
} from '../assets/assetImages';

export default function LatestUpdatesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'conference-2022';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'conference', label: 'Conference', icon: <Calendar size={17} /> },
    { key: 'student-activities', label: 'Student Activities', icon: <Users size={17} /> },
    { key: 'media-presence', label: 'Media Presence', icon: <Tv size={17} /> },
    { key: 'news-notifications', label: 'News & Notifications', icon: <Bell size={17} /> }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Updates</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Latest'}</span>
          </div>
          <h1 className="page-main-heading">Latest Updates &amp; Campus Chronicles</h1>
          <p className="page-sub-lead">
            Stay informed with recent conferences, student co-curricular activities, media coverages, and official college circulars.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">Updates Feed</div>
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
                <div className="pill-title">Press &amp; Media Desk</div>
                <p>Secretariat Media Cell</p>
                <a href="mailto:media@iifccms.edu.in" className="pill-phone">media@iifccms.edu.in</a>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. Conference 2022 */}
            {currentTab === 'conference-2022' && (
              <div className="tab-content-card">
                <div className="content-badge">ACADEMIC SUMMITS</div>
                <h2 className="content-heading">International Conference 2022 Proceedings</h2>

                {/* Photo Banner */}
                <div className="tab-lead-photo-banner">
                  <img src={imgChConference} alt="International Conference 2022" />
                  <div className="tab-lead-photo-caption">
                    <Calendar size={16} />
                    <span>International Research Conference on Financial Sector Reforms &amp; Sustainable Growth</span>
                  </div>
                </div>

                <div className="rich-text-content">
                  <p>
                    IIF College of Commerce and Management Studies convened the landmark <strong>International Research Conference 2022 on "Financial Sector Reforms, Corporate Governance &amp; Sustainable Economic Growth"</strong>.
                  </p>
                  <p>
                    The conference welcomed over 250 delegates from across 18 countries, including senior economists from the Ministry of Finance, Reserve Bank of India, World Bank, and faculty from premier institutes like IIMs and IITs.
                  </p>
                  <div className="highlight-callout-box">
                    <h3 className="callout-title">Conference Highlights &amp; Outcomes</h3>
                    <ul className="salient-list">
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>Presentation of 86 peer-reviewed technical research papers in financial engineering and green finance.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>Publication of special issue research monograph in <em>Finance India</em>.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>Signing of student exchange and research MoUs with international university delegations.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Student Activities */}
            {currentTab === 'student-activities' && (
              <div>
                <div className="tab-lead-photo-banner">
                  <img src={imgPgStudentFest} alt="Student Activities and Annual Fest" />
                  <div className="tab-lead-photo-caption">
                    <Users size={16} />
                    <span>Vibrant Campus Life — Cultural Fests, Debates &amp; Inter-Collegiate Competitions</span>
                  </div>
                </div>
                <EventsSection />
              </div>
            )}

            {/* 3. Media Presence */}
            {currentTab === 'media-presence' && (
              <div className="tab-content-card">
                <div className="content-badge">PRESS &amp; BROADCAST COVERAGE</div>
                <h2 className="content-heading">Media Presence &amp; Public Coverage</h2>

                {/* Photo Banner */}
                <div className="tab-lead-photo-banner">
                  <img src={imgPgMediaBriefing} alt="Media Press Coverage" />
                  <div className="tab-lead-photo-caption">
                    <Tv size={16} />
                    <span>Faculty Economic Commentary on National Broadcasts &amp; Press Conclaves</span>
                  </div>
                </div>

                <p className="tab-lead-desc">
                  Highlights of IIF CCMS intellectual contributions, faculty interviews on national television, and press coverage:
                </p>

                {/* Authentic Media Press Clippings Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  marginTop: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    { img: media1, title: "Economic Policy Press Coverage", caption: "Faculty views in premier financial dailies" },
                    { img: media2, title: "Union Budget Analysis", caption: "Televised panel discussions and newspaper reviews" },
                    { img: media3, title: "National Education Conclave", caption: "Press reports on higher education leadership" },
                    { img: media4, title: "Commerce & Management Features", caption: "Media spotlight on institutional excellence" },
                    { img: media5, title: "Economic Times & Financial Express", caption: "Faculty op-ed columns on fiscal governance" },
                    { img: media7, title: "Broadcast & Doordarshan Briefings", caption: "National media dialogues on trade and markets" }
                  ].map((m, mIdx) => (
                    <div 
                      key={mIdx}
                      style={{
                        background: '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div style={{ height: '200px', overflow: 'hidden', background: '#062a36' }}>
                        <img 
                          src={m.img} 
                          alt={m.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      <div style={{ padding: '0.85rem 1rem' }}>
                        <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.92rem', fontWeight: 800, color: '#062a36' }}>
                          {m.title}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b' }}>
                          {m.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. News and Notification */}
            {currentTab === 'news-notifications' && (
              <div>
                <div className="tab-lead-photo-banner">
                  <img src={imgPgAcademicMOU} alt="Official Academic Circulars" />
                  <div className="tab-lead-photo-caption">
                    <Bell size={16} />
                    <span>Administrative Notices, Examination Rosters &amp; University Circulars</span>
                  </div>
                </div>
                <NoticeBoard />
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
