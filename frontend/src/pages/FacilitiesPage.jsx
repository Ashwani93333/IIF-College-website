import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import CampusTourSection from '../components/public/CampusTourSection';
import GallerySection from '../components/public/GallerySection';
import { 
  Tv, Monitor, BookOpen, Cpu, Building2, 
  Image, CheckCircle2, ChevronRight, Award, Globe, Building 
} from 'lucide-react';

export default function FacilitiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'campus-tour';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'campus-tour', label: 'Campus Tour (YouTube)', icon: <Tv size={17} /> },
    { key: 'classrooms', label: 'Classrooms', icon: <Monitor size={17} /> },
    { key: 'library', label: 'Library', icon: <BookOpen size={17} /> },
    { key: 'computer-centre', label: 'Computer Centre', icon: <Cpu size={17} /> },
    { key: 'facilities', label: 'Facilities', icon: <Building2 size={17} /> },
    { key: 'photo-gallery', label: 'Photo Gallery', icon: <Image size={17} /> }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Infrastructure</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Facilities'}</span>
          </div>
          <h1 className="page-main-heading">Infrastructure &amp; Campus Facilities</h1>
          <p className="page-sub-lead">
            Sprawled across 6.47 lush green acres in Knowledge Park III, Greater Noida, equipped with world-class learning infrastructure.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">Facilities Menu</div>
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
                <div className="pill-title">Visit Our Campus</div>
                <p>Knowledge Park III, Greater Noida</p>
                <Link to="/about?tab=contact" className="pill-phone">Schedule Tour &rarr;</Link>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {/* 1. Campus Tour (YouTube) */}
            {currentTab === 'campus-tour' && (
              <div>
                <CampusTourSection />
              </div>
            )}

            {/* 2. Classrooms */}
            {currentTab === 'classrooms' && (
              <div className="tab-content-card">
                <div className="content-badge">LEARNING SPACES</div>
                <h2 className="content-heading">100% Air-Conditioned Smart Classrooms</h2>
                <p className="tab-lead-desc">
                  Designed for collaborative and interactive pedagogies, our lecture rooms offer ergonomic seating, high-lumen digital projectors, and acoustic wall paneling.
                </p>

                <div className="facility-highlight-grid">
                  <div className="fac-card">
                    <img 
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80" 
                      alt="Smart Classroom" 
                      className="fac-img"
                    />
                    <div className="fac-body">
                      <h4>Digital Smart Lecterns &amp; AV Recording</h4>
                      <p>Equipped with interactive pen displays, sound reinforcement systems, and lecture capture for hybrid learning.</p>
                    </div>
                  </div>

                  <div className="fac-card">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80" 
                      alt="Tiered Seminar Room" 
                      className="fac-img"
                    />
                    <div className="fac-body">
                      <h4>Amphitheater Seating for Case Discussions</h4>
                      <p>Tiered horseshoe layouts promoting active peer debates, financial model walk-throughs, and group presentations.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Library */}
            {currentTab === 'library' && (
              <div className="tab-content-card">
                <div className="content-badge">KNOWLEDGE RESOURCE CENTER</div>
                <h2 className="content-heading">Library</h2>
                
                <div className="rich-text-content">
                  <p>
                    The Knowledge Center is housed in over <strong>15,000 sq feet space (extendable to 30,000 sq. feet space)</strong> on one single floor ear-marked for the Library.
                  </p>

                  <p>
                    <strong>IIF Library</strong> is equipped with over <strong>55,000 books in finance and accounting</strong>. It subscribes to more than <strong>1,000 Journals in Finance and related areas (over 250 from abroad)</strong>. Housed with over <strong>120 doctoral dissertations and 5,000 company reports</strong>.
                  </p>

                  <div className="highlight-callout-box">
                    <h3 className="callout-title">International Depository &amp; Central Bank Archives</h3>
                    <p style={{ margin: 0 }}>
                      IIF library acts as a depository library of various international institutions and agencies like <strong>UNCTAD, WIDER, IMF and others</strong>. Over <strong>20 countries' central banks</strong> send their research publications and reports to the library.
                    </p>
                  </div>

                  <div className="library-stats-pills" style={{ marginTop: '2rem' }}>
                    <div className="lib-pill">
                      <span className="num">55,000+</span>
                      <span className="lbl">Books in Finance &amp; Accounting</span>
                    </div>
                    <div className="lib-pill">
                      <span className="num">1,000+</span>
                      <span className="lbl">Journals Subscribed (250+ Abroad)</span>
                    </div>
                    <div className="lib-pill">
                      <span className="num">354</span>
                      <span className="lbl">IIF CCMS Library Books for B.Com &amp; BBA</span>
                    </div>
                  </div>

                  <p style={{ marginTop: '1.5rem' }}>
                    <strong>IIF CCMS Library</strong> has <strong>354 books</strong> dedicated to the core subjects of the B.Com. and BBA degree programs.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Computer Centre */}
            {currentTab === 'computer-centre' && (
              <div className="tab-content-card">
                <div className="content-badge">HIGH PERFORMANCE COMPUTING</div>
                <h2 className="content-heading">Computer Centre</h2>
                
                <div className="rich-text-content">
                  <p>
                    Computer Center is equipped with <strong>IBM Pentium IV and Pentium II Netfinity 3000 server with multiple Pentium nodes (20 computers)</strong>, alongside laptops devoted for students only.
                  </p>
                  
                  <p>
                    The students have access to <strong>24 hours leased line Internet access</strong> with multimedia facilities and modern peripherals.
                  </p>

                  <div className="facility-highlight-grid" style={{ marginTop: '2rem' }}>
                    <div className="fac-card">
                      <img 
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80" 
                        alt="Computer Lab Workstations" 
                        className="fac-img"
                      />
                      <div className="fac-body">
                        <h4>IBM Servers &amp; Pentium Workstations</h4>
                        <p>Dedicated computing lab with 20 nodes, student laptops, and high-spec peripherals for accounting simulations.</p>
                      </div>
                    </div>

                    <div className="fac-card">
                      <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80" 
                        alt="24 Hours Leased Line" 
                        className="fac-img"
                      />
                      <div className="fac-body">
                        <h4>24-Hour Leased Line Connectivity</h4>
                        <p>Uninterrupted internet bandwidth powering online research databases, DELNET, and statistical software.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Facilities */}
            {currentTab === 'facilities' && (
              <div className="tab-content-card">
                <div className="content-badge">INSTITUTIONAL ADVANTAGE</div>
                <h2 className="content-heading">Facilities &amp; Global Linkages</h2>
                
                <div className="rich-text-content">
                  <p className="tab-lead-desc">
                    IIFCCMS has the distinct advantage of using all the resources of the Indian Institute of Finance (IIF).
                  </p>

                  <ul className="salient-list">
                    <li>
                      <CheckCircle2 size={18} className="check-ico" />
                      <span>IIF founded as a Non-Profit Charitable organisation in 1987 in Delhi is a centre of excellence to promote education &amp; Research, well known internationally.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="check-ico" />
                      <span>IIF is bestowed with its linkages with <strong>6 Nobel Laureates</strong> and more than <strong>200 professionals</strong> from all over the world.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="check-ico" />
                      <span>IIF has strong linkages with Industry, <strong>FICCI, CII, ASSOCHAM, PHDCCI, AIMA</strong>, in Government, and Indian and Foreign Universities / Institutes / Colleges.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="check-ico" />
                      <span>IIF has signed <strong>MoUs with over 30 universities abroad</strong>.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="check-ico" />
                      <span>IIF faculty is regularly invited to attend <strong>ADB (Asian Development Bank), World Bank &amp; OECD meetings</strong>.</span>
                    </li>
                  </ul>

                  <div className="amenities-list-grid" style={{ marginTop: '2.5rem' }}>
                    <div className="amenity-item">
                      <CheckCircle2 size={20} className="check-ico" />
                      <div>
                        <h4>Boys Common Room &amp; Girls Common Room</h4>
                        <p>Dedicated student recreation and relaxation spaces equipped with indoor games and resting areas.</p>
                      </div>
                    </div>

                    <div className="amenity-item">
                      <CheckCircle2 size={20} className="check-ico" />
                      <div>
                        <h4>Halls for Extracurricular Activities</h4>
                        <p>Spacious conference auditoriums and multi-purpose activity halls hosting debates, cultural fests, and guest seminars.</p>
                      </div>
                    </div>

                    <div className="amenity-item">
                      <CheckCircle2 size={20} className="check-ico" />
                      <div>
                        <h4>Sports &amp; Athletic Arenas</h4>
                        <p>Badminton courts, table tennis stations, cricket nets, volleyball courts, and annual inter-collegiate tournaments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Photo Gallery */}
            {currentTab === 'photo-gallery' && (
              <div>
                <GallerySection />
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
