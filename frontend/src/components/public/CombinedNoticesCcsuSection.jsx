import React, { useState } from 'react';
import { 
  Pin, Newspaper, FileText, Users, Download, 
  Search, ExternalLink, Landmark, ShieldCheck, 
  ChevronRight, Sparkles, Globe
} from 'lucide-react';
import { ccsuLogo } from '../../assets/assetImages';

export default function CombinedNoticesCcsuSection() {
  const [activeTab, setActiveTab] = useState("notice-board");
  const [filterText, setFilterText] = useState("");

  const handleDownload = (e, title) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Downloading official notice attachment:\n${title}`);
  };

  const tabsConfig = [
    { id: "notice-board", label: "Notice Board", icon: <Pin size={15} /> },
    { id: "press-releases", label: "Press Releases", icon: <Newspaper size={15} /> },
    { id: "government-schemes", label: "Government Schemes", icon: <Landmark size={15} /> }
  ];

  const announcementsData = {
    "notice-board": [
      {
        id: 1,
        title: "Special Advertisement for Admission to Undergraduate Programs (B.Com / B.B.A / B.A)",
        badge: "New +1",
        releaseDate: "18/11/2026",
        portalName: "CCSU Online Admission & Merit Registration Portal",
        portalUrl: "https://www.ccsuniversity.ac.in",
        subItems: [
          {
            name: "Special Notification for Direct Merit Quota Registration under NEP 2020",
            badge: "New",
            date: "18/11/2026",
            portalName: "CCSU NEP 2020 Curriculum & Admission Desk",
            portalUrl: "https://www.ccsuniversity.ac.in"
          }
        ]
      },
      {
        id: 2,
        title: "CCSU Odd Semester Examination Form Submission Circular",
        badge: "New +2",
        releaseDate: "28/10/2026",
        portalName: "Chaudhary Charan Singh University Examination Portal",
        portalUrl: "https://www.ccsuniversity.ac.in",
        subItems: [
          {
            name: "Corrigendum for Elective Paper Selection on CCSU University Examination Portal",
            badge: "New",
            date: "02/11/2026",
            portalName: "CCSU Online Semester Examination Forms",
            portalUrl: "https://www.ccsuniversity.ac.in"
          },
          {
            name: "Circular No.: IIFCCMS/CCSU/EXAM/2026/04",
            badge: "New",
            date: "28/10/2026",
            portalName: "CCSU Examination Cell & Internal Circulars",
            portalUrl: "https://www.ccsuniversity.ac.in"
          }
        ]
      },
      {
        id: 3,
        title: "National Workshop on Financial Modeling & FinTech Innovations",
        badge: "New +1",
        releaseDate: "15/10/2026",
        portalName: "IIFCCMS Academic & Research Programs Secretariat",
        portalUrl: "https://www.iif.edu",
        subItems: [
          {
            name: "Two-Day Executive Skill Workshop at Knowledge Park III Campus",
            badge: "New",
            date: "15/10/2026",
            portalName: "IIF CCMS Executive Education Cell",
            portalUrl: "https://www.iif.edu"
          }
        ]
      },
      {
        id: 4,
        title: "Orientation Programme & Leadership Address by Prof. Aman Agarwal",
        badge: "New",
        releaseDate: "05/10/2026",
        portalName: "IIF Academic Orientation & Induction Gateway",
        portalUrl: "https://www.iif.edu",
        subItems: [
          {
            name: "Induction Ceremony Schedule & Academic Code of Conduct for Fresh Batch",
            badge: null,
            date: "05/10/2026",
            portalName: "Student Affairs & Code of Conduct Secretariat",
            portalUrl: "https://www.iif.edu"
          }
        ]
      },
      {
        id: 5,
        title: "RFID Smart Library Card Issuance & DELNET Database Access",
        badge: null,
        releaseDate: "22/09/2026",
        portalName: "DELNET Developing Library Network Official Portal",
        portalUrl: "https://www.delnet.in",
        subItems: [
          {
            name: "Collection of Smart Circulation Cards from CCMS Central Library Circulation Desk",
            badge: null,
            date: "22/09/2026",
            portalName: "DELNET Consortium & Digital E-Resources",
            portalUrl: "https://www.delnet.in"
          }
        ]
      },
      {
        id: 6,
        title: "Sports Council Inter-College Cricket & Badminton Trials",
        badge: null,
        releaseDate: "10/09/2026",
        portalName: "CCSU Sports Council & Inter-College Championship Desk",
        portalUrl: "https://www.ccsuniversity.ac.in",
        subItems: [
          {
            name: "Selection Trials Schedule at Campus Sports Complex & Gymnasium",
            badge: null,
            date: "10/09/2026",
            portalName: "University Sports Federation Registration",
            portalUrl: "https://www.ccsuniversity.ac.in"
          }
        ]
      },
      {
        id: 7,
        title: "Internal Assessment Test Schedule for Commerce & Management Faculties",
        badge: null,
        releaseDate: "01/09/2026",
        portalName: "CCSU Examination Standards & Continuous Internal Evaluation",
        portalUrl: "https://www.ccsuniversity.ac.in",
        subItems: [
          {
            name: "Detailed Datesheet & Seating Matrix for B.Com and BBA Candidates",
            badge: null,
            date: "01/09/2026",
            portalName: "Examination Control Board CCSU",
            portalUrl: "https://www.ccsuniversity.ac.in"
          }
        ]
      },
      {
        id: 8,
        title: "Fee Concession & Merit Scholarship Verification Desk Notification",
        badge: null,
        releaseDate: "24/08/2026",
        portalName: "Institutional Merit & Welfare Scholarship Desk",
        portalUrl: "https://www.ccsuniversity.ac.in",
        subItems: [
          {
            name: "Document Verification Schedule for Eligible Merit Quota Scholars",
            badge: null,
            date: "24/08/2026",
            portalName: "Student Welfare & Financial Aid Portal",
            portalUrl: "https://www.ccsuniversity.ac.in"
          }
        ]
      }
    ],

    "press-releases": [
      {
        id: 101,
        title: "IIFCCMS Students Secure Top Ranks in CCS University Commerce Honors Examinations",
        badge: "New",
        releaseDate: "08/11/2026",
        portalName: "Press Information & Academic Collaborative Network",
        portalUrl: "https://www.ccsuniversity.ac.in",
        subItems: [
          {
            name: "Official Press Statement & Principal's Felicitation Message",
            badge: "New",
            date: "08/11/2026",
            portalName: "University Press Information Bureau",
            portalUrl: "https://www.ccsuniversity.ac.in"
          }
        ]
      },
      {
        id: 102,
        title: "Annual Corporate Placement Drive Witnesses 100+ Leading Recruiters at Knowledge Park III",
        badge: null,
        releaseDate: "20/10/2026",
        portalName: "Corporate Resource & Industry Relations Portal",
        portalUrl: "https://www.iif.edu",
        subItems: [
          {
            name: "Placement Statistics & Media Bulletin Release",
            badge: null,
            date: "20/10/2026",
            portalName: "CRC Placement & Media Release Desk",
            portalUrl: "https://www.iif.edu"
          }
        ]
      },
      {
        id: 103,
        title: "IIF Group Commemorates 35+ Years of Academic Pedigree & Research Excellence",
        badge: null,
        releaseDate: "12/09/2026",
        portalName: "IIF 35+ Years Research & Academic Foundation",
        portalUrl: "https://www.iif.edu",
        subItems: [
          {
            name: "Institutional Foundation Day Commemorative Monograph",
            badge: null,
            date: "12/09/2026",
            portalName: "Finance India & IIF Publications",
            portalUrl: "https://www.iif.edu"
          }
        ]
      }
    ],

    "government-schemes": [
      {
        id: 301,
        title: "UP Post-Matric Scholarship & Fee Reimbursement Online Scheme (Saksham Portal)",
        badge: "Active",
        releaseDate: "15/11/2026",
        portalName: "UP Government Saksham Scholarship Portal (scholarship.up.gov.in)",
        portalUrl: "https://scholarship.up.gov.in",
        subItems: [
          {
            name: "Detailed Guidelines for SC/ST/OBC/Minority/General Merit-cum-Means Verification",
            badge: "New",
            date: "15/11/2026",
            portalName: "Uttar Pradesh Social Welfare & Scholarship Portal",
            portalUrl: "https://scholarship.up.gov.in"
          },
          {
            name: "Official State Portal: scholarship.up.gov.in Institutional Submission Desk",
            badge: null,
            date: "10/11/2026",
            portalName: "UP State Government Direct Benefit Transfer",
            portalUrl: "https://scholarship.up.gov.in"
          }
        ]
      },
      {
        id: 302,
        title: "National Scholarship Portal (NSP) - Central Sector Scheme for College & University Enrollees",
        badge: "New +1",
        releaseDate: "04/11/2026",
        portalName: "National Scholarship Portal - Government of India (scholarships.gov.in)",
        portalUrl: "https://scholarships.gov.in",
        subItems: [
          {
            name: "Ministry of Education (MoE) Direct Benefit Transfer (DBT) Online Application Protocol",
            badge: "New",
            date: "04/11/2026",
            portalName: "Ministry of Education (MoE) NSP Portal",
            portalUrl: "https://scholarships.gov.in"
          }
        ]
      },
      {
        id: 303,
        title: "DigiShakti Scheme: Free Smartphone / Tablet Distribution for Eligible Undergraduate Students",
        badge: "Active",
        releaseDate: "22/10/2026",
        portalName: "DigiShakti Portal - Government of Uttar Pradesh (digishakti.up.gov.in)",
        portalUrl: "https://digishakti.up.gov.in",
        subItems: [
          {
            name: "Swami Vivekananda Youth Empowerment Scheme Student Master Database Verification",
            badge: null,
            date: "22/10/2026",
            portalName: "DigiShakti Student Verification Portal",
            portalUrl: "https://digishakti.up.gov.in"
          }
        ]
      },
      {
        id: 304,
        title: "Vidya Lakshmi Portal - Government of India Education Loan & Interest Subsidy Scheme",
        badge: null,
        releaseDate: "05/10/2026",
        portalName: "Vidya Lakshmi Education Loan Portal - Govt of India (vidyalakshmi.co.in)",
        portalUrl: "https://www.vidyalakshmi.co.in",
        subItems: [
          {
            name: "Single-window Collateral-free Education Loan Facilitation at College Accounts Desk",
            badge: null,
            date: "05/10/2026",
            portalName: "Vidya Lakshmi Single Window Portal",
            portalUrl: "https://www.vidyalakshmi.co.in"
          }
        ]
      },
      {
        id: 305,
        title: "Skill India Digital & National Apprenticeship Training Scheme (NATS 2.0)",
        badge: null,
        releaseDate: "18/09/2026",
        portalName: "National Apprenticeship Training Scheme Portal (nats.education.gov.in)",
        portalUrl: "https://nats.education.gov.in",
        subItems: [
          {
            name: "Government Stipendiary On-the-Job Apprenticeship Enrollment for Commerce & Management",
            badge: null,
            date: "18/09/2026",
            portalName: "NATS 2.0 Ministry of Education Portal",
            portalUrl: "https://nats.education.gov.in"
          }
        ]
      }
    ]
  };

  const ccsLinks = [
    {
      title: "CCSU Main Official Portal",
      url: "https://www.ccsuniversity.ac.in"
    },
    {
      title: "Direct admission form CCSU",
      url: "https://www.ccsuniversity.ac.in/admission"
    },
    {
      title: "Online University Results Portal",
      url: "https://www.ccsuniversity.ac.in"
    }
  ];

  const currentNotices = (announcementsData[activeTab] || []).filter(item => {
    if (!filterText) return true;
    const query = filterText.toLowerCase();
    const matchesTitle = item.title.toLowerCase().includes(query);
    const matchesSub = item.subItems && item.subItems.some(s => s.name.toLowerCase().includes(query));
    return matchesTitle || matchesSub;
  });

  return (
    <section className="section combined-notices-ccsu-section" id="notices" style={{ background: '#eaffef' }}>
      {/* Anchor for CCSU weblinks navigation */}
      <div id="ccsu-weblinks" style={{ position: 'relative', top: '-80px' }} />

      <div className="container">
        {/* Centered Main Section Title (Centered Flanked Design matching benchmark) */}
        <div className="landing-section-header">
          <div className="landing-section-title-wrap">
            <h2 className="landing-section-title">Official Notices &amp; University Portals</h2>
          </div>
          <p className="landing-section-subtitle">
            Stay updated with statutory CCSU circulars, examination advisories, and administrative releases
          </p>
        </div>

        <div className="combined-two-col-grid">
          {/* Left Column: ANNOUNCEMENTS Box matching Reference Screenshot 1:1 */}
          <div className="announcements-main-wrapper">
            <h2 className="announcements-top-heading">ANNOUNCEMENTS</h2>

            <div className="announcements-board-card">
              {/* Tab Navigation Header */}
              <div className="announcements-tabs-bar">
                {tabsConfig.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`announcement-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    type="button"
                  >
                    <span className="tab-btn-icon">{tab.icon}</span>
                    <span className="tab-btn-text">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Filter / Search Sub-Bar */}
              <div className="announcements-filter-bar">
                <div className="filter-input-container">
                  <Search size={15} className="filter-search-icon" />
                  <input
                    type="text"
                    placeholder={`Search within ${tabsConfig.find(t => t.id === activeTab)?.label}...`}
                    value={filterText}
                    onChange={e => setFilterText(e.target.value)}
                    className="announcements-filter-input"
                  />
                  {filterText && (
                    <button 
                      onClick={() => setFilterText('')}
                      className="filter-clear-btn"
                      title="Clear search"
                    >
                      &times;
                    </button>
                  )}
                </div>
                <div className="filter-count-badge">
                  {currentNotices.length} Notice{currentNotices.length === 1 ? '' : 's'}
                </div>
              </div>

              {/* In-Section Scrollable List Container (Highlighted & Contained) */}
              <div className="announcements-scroll-area">
                {currentNotices.length === 0 ? (
                  <div className="announcements-empty-state">
                    No announcements found matching "{filterText}".
                  </div>
                ) : (
                  currentNotices.map(item => (
                    <div key={item.id} className="announcement-item-card">
                      {/* Top Row: Title + New Badge + Release Date + Portal Link Button */}
                      <div className="announcement-header-row">
                        <div className="announcement-title-cluster">
                          <h4 className="announcement-primary-title">
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span className="badge-new-pill">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="announcement-header-controls">
                          <div className="announcement-release-date">
                            Release Date: {item.releaseDate}
                          </div>
                          {item.portalUrl && (
                            <a
                              href={item.portalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="announcement-portal-link-btn"
                              title={`Direct Link to ${item.portalName || 'Website'}`}
                            >
                              <Globe size={13} />
                              <span>Visit Website</span>
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Sub-items / Corrigenda / Attachments */}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className="announcement-sub-items-stack">
                          {item.subItems.map((sub, sIdx) => (
                            <div key={sIdx} className="announcement-sub-row">
                              <div className="sub-info-col">
                                <div className="sub-title-wrap">
                                  <span className="sub-name-text">{sub.name}</span>
                                  {sub.badge && (
                                    <span className="badge-new-micro">{sub.badge}</span>
                                  )}
                                </div>
                                <span className="sub-date-text">Released on: {sub.date}</span>
                              </div>

                              <button
                                type="button"
                                onClick={(e) => handleDownload(e, sub.name)}
                                className="announcement-download-icon-btn"
                                title="Download Document Attachment"
                                aria-label="Download attachment"
                              >
                                <Download size={17} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="announcements-card-footer">
                <span className="footer-status-dot" />
                <span className="footer-status-text">Official College Notice Portal • Regular Updates</span>
              </div>
            </div>
          </div>

          {/* Right Column: CCSU Weblinks + Anti-Ragging Card (Horizontally Aligned) */}
          <div className="right-stacked-column">
            <h2 className="announcements-top-heading">UNIVERSITY PORTALS &amp; COMPLIANCE</h2>
            {/* Top Card: CCS University Weblinks (Dark Navy/Teal Card) */}
            <div className="ccsu-weblinks-dark-card">
              <div className="ccsu-card-header">
                <div className="ccsu-header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <img 
                    src={ccsuLogo} 
                    alt="CCS University Official Logo" 
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' 
                    }} 
                  />
                  <h4>CCS University Weblinks</h4>
                </div>
                <p className="ccsu-header-sub">
                  Direct academic shortcuts to Chaudhary Charan Singh University, Meerut (Accredited NAAC A++):
                </p>
              </div>

              <div className="ccsu-links-buttons-stack">
                {ccsLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ccsu-quick-link-btn"
                  >
                    <span>{link.title}</span>
                    <ExternalLink size={16} className="link-ext-icon" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Card: Anti-Ragging Mandatory Compliance */}
            <div className="anti-ragging-white-card">
              <div className="ragging-card-header">
                <ShieldCheck size={20} className="ragging-shield-icon" />
                <h4>Anti-Ragging Mandatory Compliance</h4>
              </div>
              <p className="ragging-card-body">
                IIFCCMS enforces a strict zero-tolerance policy towards ragging. All candidates and parents submit an anti-ragging affidavit as per UGC guidelines.
              </p>
              <div className="ragging-helpline-row">
                <span className="helpline-tag">24x7 Helpline:</span>
                <a href="tel:+919811971002" className="helpline-link">+91 98119 71002</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
