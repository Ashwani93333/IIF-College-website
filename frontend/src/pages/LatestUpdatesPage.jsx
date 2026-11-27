import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import NoticeBoard from '../components/public/NoticeBoard';
import { Calendar, Users, Tv, Bell, ChevronRight, CheckCircle2, X, Image } from 'lucide-react';

import {
  imgChConference, imgPgStudentFest, imgPgMediaBriefing,
  imgPgVietnamPresident, imgPgAcademicMOU,
  imgPgCulturalEvents, imgPgGraduates, imgChStudents, 
  imgChClassroom, imgChSeminar, imgPgCounseling, imgCh1,
  media1, media2, media3, media4, media5, media7
} from '../assets/assetImages';

export default function LatestUpdatesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'conference-2022';
  const [selectedActivityPhoto, setSelectedActivityPhoto] = useState(null);

  // Close photo lightbox on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedActivityPhoto(null);
    };
    if (selectedActivityPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedActivityPhoto]);

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'conference-2022', label: 'Conference', icon: <Calendar size={17} /> },
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
              <div className="tab-content-card">
                <div className="content-badge">CAMPUS VITALITY &amp; YOUTH LIFE</div>
                <h2 className="content-heading">Student Activities &amp; Campus Events</h2>

                <p className="tab-lead-desc" style={{ color: '#000000', fontWeight: 700, marginBottom: '2rem' }}>
                  A visual showcase of student development, cultural celebrations, academic symposia, and vibrant campus life at IIF CCMS:
                </p>

                {/* Grid of Student Activities Photos */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    {
                      id: 1,
                      title: "Annual Cultural Fest & Talent Showcase",
                      category: "CULTURAL CELEBRATION",
                      badgeBg: "#fef3c7",
                      badgeColor: "#92400e",
                      desc: "Vibrant musical performances, dramatic enactments, and inter-collegiate dance competitions organized by the Student Council.",
                      image: imgPgStudentFest
                    },
                    {
                      id: 2,
                      title: "Inter-Collegiate Cultural Stage Festivities",
                      category: "STUDENT LIFE",
                      badgeBg: "#e0f2fe",
                      badgeColor: "#0369a1",
                      desc: "Students showcasing creative arts, theater, and literary eloquence in our Greater Noida campus amphitheater.",
                      image: imgPgCulturalEvents
                    },
                    {
                      id: 3,
                      title: "Group Discussions & Case Study Deliberations",
                      category: "ACADEMIC CLUBS",
                      badgeBg: "#dcfce7",
                      badgeColor: "#166534",
                      desc: "BBA and B.Com student teams debating live market case studies, business strategy, and corporate finance simulations.",
                      image: imgChStudents
                    },
                    {
                      id: 4,
                      title: "Interactive Business Quiz & Presentation Rounds",
                      category: "MANAGEMENT WORKSHOP",
                      badgeBg: "#f3e8ff",
                      badgeColor: "#7e22ce",
                      desc: "Scholars presenting strategic business plans, financial projections, and economic models before faculty evaluators.",
                      image: imgChClassroom
                    },
                    {
                      id: 5,
                      title: "Student Symposia & Research Forum",
                      category: "SEMINARS & CONCLAVES",
                      badgeBg: "#fee2e2",
                      badgeColor: "#991b1b",
                      desc: "Undergraduate researchers presenting empirical term papers and banking policy analyses during campus academic symposia.",
                      image: imgChSeminar
                    },
                    {
                      id: 6,
                      title: "Annual Convocation & Student Honors",
                      category: "CONVOCATION",
                      badgeBg: "#fef3c7",
                      badgeColor: "#92400e",
                      desc: "Celebrating academic excellence and conferring degrees upon graduating batches with university distinction medals.",
                      image: imgPgGraduates
                    },
                    {
                      id: 7,
                      title: "Student Orientation & Career Mentorship",
                      category: "INDUCTION PROGRAMME",
                      badgeBg: "#e0f2fe",
                      badgeColor: "#0369a1",
                      desc: "Senior faculty orienting fresh undergraduate entrants on academic rigor, library research, and corporate grooming.",
                      image: imgPgCounseling
                    },
                    {
                      id: 8,
                      title: "Campus Community & Peer Interactions",
                      category: "CAMPUS ENVIRONMENT",
                      badgeBg: "#dcfce7",
                      badgeColor: "#166534",
                      desc: "Vibrant peer interactions, study circles, and collaborative learning across open courtyards and academic infrastructure.",
                      image: imgCh1
                    }
                  ].map((act) => (
                    <div 
                      key={act.id}
                      onClick={() => setSelectedActivityPhoto(act)}
                      style={{
                        background: '#ffffff',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)';
                      }}
                    >
                      <div style={{ position: 'relative', height: '220px', background: '#062a36', overflow: 'hidden' }}>
                        <img 
                          src={act.image} 
                          alt={act.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <span style={{
                          position: 'absolute',
                          top: '0.75rem',
                          left: '0.75rem',
                          background: act.badgeBg,
                          color: act.badgeColor,
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                        }}>
                          {act.category}
                        </span>
                      </div>
                      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000000', margin: '0 0 0.45rem' }}>
                            {act.title}
                          </h4>
                          <p style={{ fontSize: '0.9rem', color: '#000000', fontWeight: 700, margin: 0, lineHeight: 1.55 }}>
                            {act.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
              <div className="tab-content-card">
                <div className="content-badge">OFFICIAL CIRCULARS &amp; NOTICES</div>
                <h2 className="content-heading">News &amp; Notifications</h2>

                <p className="tab-lead-desc" style={{ color: '#000000', fontWeight: 700, marginBottom: '1.5rem' }}>
                  Official administrative circulars, semester examination datesheets, admission notices, and government scholarship notifications issued by IIF CCMS and Chaudhary Charan Singh University (CCSU).
                </p>

                <NoticeBoard />
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Lightbox Modal for Student Activity Photo */}
      {selectedActivityPhoto && (
        <div 
          onClick={() => setSelectedActivityPhoto(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {/* Top-Right Close Button */}
          <button 
            type="button" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedActivityPhoto(null);
            }}
            style={{
              position: 'fixed',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.25)',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000000,
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
            aria-label="Close photo"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          {/* Simple Image Popup Container - No background color */}
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
              background: 'transparent'
            }}
          >
            <img 
              src={selectedActivityPhoto.image} 
              alt={selectedActivityPhoto.title} 
              style={{
                maxWidth: '100%',
                maxHeight: '82vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8)',
                display: 'block'
              }}
            />

            {/* Photo Title & Caption */}
            <div style={{ marginTop: '0.85rem', textAlign: 'center', color: '#ffffff', maxWidth: '800px', textShadow: '0 2px 6px rgba(0,0,0,0.9)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                {selectedActivityPhoto.title}
              </div>
              <div style={{ fontSize: '0.95rem', color: '#ffffff', marginTop: '0.35rem', fontWeight: 600 }}>
                {selectedActivityPhoto.desc}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
