import React from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import PlacementSection from '../components/public/PlacementSection';
import { Briefcase, Building, TrendingUp, ChevronRight, Award, CheckCircle2 } from 'lucide-react';

export default function PlacementsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentTab = searchParams.get('tab') || 'highlights';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'highlights', label: 'Placement Highlights', icon: <TrendingUp size={17} /> },
    { key: 'recruiters', label: 'Our Recruiters', icon: <Building size={17} /> },
    { key: 'training', label: 'Training & Grooming', icon: <Briefcase size={17} /> }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Placements</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Overview'}</span>
          </div>
          <h1 className="page-main-heading">Corporate Placements &amp; Careers</h1>
          <p className="page-sub-lead">
            Dedicated Corporate Resource Center driving placements up to 12 LPA with over 600+ recruitment partners.
          </p>
        </div>
      </div>

      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sidebar */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">Placements Desk</div>
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
                <div className="pill-title">Corporate Cell</div>
                <p>Campus Placement Drives 2026-27</p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSddLOq1Hb3lHuFFxbGe1TQpZ_zY9qnxqIp9Nm8sEpegMb_3oQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gold" 
                  style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.82rem', padding: '0.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  Apply Online
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="page-main-content">
            {currentTab === 'highlights' && (
              <div>
                <PlacementSection />
              </div>
            )}

            {currentTab === 'recruiters' && (
              <div>
                <PlacementSection />
              </div>
            )}

            {currentTab === 'training' && (
              <div className="tab-content-card">
                <div className="content-badge">SKILL ACCELERATION</div>
                <h2 className="content-heading">Corporate Readiness &amp; Grooming Modules</h2>
                <p className="tab-lead-desc">
                  Structured multi-tier training designed to transform undergraduate students into confident corporate professionals:
                </p>

                <div className="amenities-list-grid">
                  <div className="amenity-item">
                    <CheckCircle2 size={20} className="check-ico" />
                    <div>
                      <h4>Executive Business Communication &amp; Etiquette</h4>
                      <p>Business correspondence, corporate emailing, assertive articulation, and executive presence coached by corporate HR leaders.</p>
                    </div>
                  </div>

                  <div className="amenity-item">
                    <CheckCircle2 size={20} className="check-ico" />
                    <div>
                      <h4>Financial Modeling &amp; Advanced Excel Bootcamps</h4>
                      <p>Hands-on mastery in three-statement financial modeling, scenario analysis, valuation methodologies, and dashboard construction.</p>
                    </div>
                  </div>

                  <div className="amenity-item">
                    <CheckCircle2 size={20} className="check-ico" />
                    <div>
                      <h4>TallyPrime ERP &amp; GST Compliance Practical Training</h4>
                      <p>Real-world company voucher entries, inventory management, e-way bills, and automated GST return preparation.</p>
                    </div>
                  </div>

                  <div className="amenity-item">
                    <CheckCircle2 size={20} className="check-ico" />
                    <div>
                      <h4>Mock Personal Interviews &amp; Group Discussions</h4>
                      <p>Rigorous simulation rounds with corporate interviewers providing granular scorecard feedback to every aspirant.</p>
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
