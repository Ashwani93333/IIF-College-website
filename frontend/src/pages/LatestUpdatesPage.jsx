import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import NoticeBoard from '../components/public/NoticeBoard';
import EventsSection from '../components/public/EventsSection';
import { Calendar, Users, Tv, Bell, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LatestUpdatesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'conference-2022';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'conference-2022', label: 'Conference 2022', icon: <Calendar size={17} /> },
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
                <EventsSection />
              </div>
            )}

            {/* 3. Media Presence */}
            {currentTab === 'media-presence' && (
              <div className="tab-content-card">
                <div className="content-badge">PRESS &amp; BROADCAST COVERAGE</div>
                <h2 className="content-heading">Media Presence &amp; Public Coverage</h2>
                <p className="tab-lead-desc">
                  Highlights of IIF CCMS intellectual contributions, faculty interviews on national television, and press coverage:
                </p>

                <div className="facility-highlight-grid">
                  <div className="fac-card">
                    <img 
                      src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=700&q=80" 
                      alt="National Daily Press" 
                      className="fac-img"
                    />
                    <div className="fac-body">
                      <h4>National Daily Press Features</h4>
                      <p>Faculty analyses published in Economic Times, Financial Express, Business Standard, and Dainik Jagran on annual budget analysis.</p>
                    </div>
                  </div>

                  <div className="fac-card">
                    <img 
                      src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=700&q=80" 
                      alt="Television & Radio Debates" 
                      className="fac-img"
                    />
                    <div className="fac-body">
                      <h4>National Television &amp; AIR Broadcasts</h4>
                      <p>Over 700 radio and TV talks on All India Radio, Doordarshan, and leading news networks on economic policies and inflation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. News and Notification */}
            {currentTab === 'news-notifications' && (
              <div>
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
