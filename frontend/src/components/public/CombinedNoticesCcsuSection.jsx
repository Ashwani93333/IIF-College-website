import React, { useState } from 'react';
import { 
  Pin, Newspaper, FileText, Users, Download, 
  Search, ExternalLink, Landmark, ShieldCheck, 
  ChevronRight, Sparkles
} from 'lucide-react';

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
    { id: "tenders", label: "Tenders", icon: <FileText size={15} /> },
    { id: "recruitment", label: "Recruitment", icon: <Users size={15} /> }
  ];

  const announcementsData = {
    "notice-board": [
      {
        id: 1,
        title: "Special Advertisement for Admission to Undergraduate Programs (B.Com / B.B.A / B.A) 2026-27",
        badge: "New +1",
        releaseDate: "18/11/2026",
        subItems: [
          {
            name: "Special Notification for Direct Merit Quota Registration under NEP 2020",
            badge: "New",
            date: "18/11/2026"
          }
        ]
      },
      {
        id: 2,
        title: "CCSU Odd Semester Examination Form Submission Circular",
        badge: "New +2",
        releaseDate: "28/10/2026",
        subItems: [
          {
            name: "Corrigendum for Elective Paper Selection on CCSU University Examination Portal",
            badge: "New",
            date: "02/11/2026"
          },
          {
            name: "Circular No.: IIFCCMS/CCSU/EXAM/2026-27/04",
            badge: "New",
            date: "28/10/2026"
          }
        ]
      },
      {
        id: 3,
        title: "National Workshop on Financial Modeling & FinTech Innovations",
        badge: "New +1",
        releaseDate: "15/10/2026",
        subItems: [
          {
            name: "Two-Day Executive Skill Workshop at Knowledge Park III Campus",
            badge: "New",
            date: "15/10/2026"
          }
        ]
      },
      {
        id: 4,
        title: "Orientation Programme & Leadership Address by Prof. Aman Agarwal",
        badge: "New",
        releaseDate: "05/10/2026",
        subItems: [
          {
            name: "Induction Ceremony Schedule & Academic Code of Conduct for Fresh Batch",
            badge: null,
            date: "05/10/2026"
          }
        ]
      },
      {
        id: 5,
        title: "RFID Smart Library Card Issuance & DELNET Database Access",
        badge: null,
        releaseDate: "22/09/2026",
        subItems: [
          {
            name: "Collection of Smart Circulation Cards from CCMS Central Library Circulation Desk",
            badge: null,
            date: "22/09/2026"
          }
        ]
      },
      {
        id: 6,
        title: "Sports Council Inter-College Cricket & Badminton Trials",
        badge: null,
        releaseDate: "10/09/2026",
        subItems: [
          {
            name: "Selection Trials Schedule at Campus Sports Complex & Gymnasium",
            badge: null,
            date: "10/09/2026"
          }
        ]
      },
      {
        id: 7,
        title: "Internal Assessment Test Schedule for Commerce & Management Faculties",
        badge: null,
        releaseDate: "01/09/2026",
        subItems: [
          {
            name: "Detailed Datesheet & Seating Matrix for B.Com and BBA Candidates",
            badge: null,
            date: "01/09/2026"
          }
        ]
      },
      {
        id: 8,
        title: "Fee Concession & Merit Scholarship Verification Desk Notification",
        badge: null,
        releaseDate: "24/08/2026",
        subItems: [
          {
            name: "Document Verification Schedule for Eligible Merit Quota Scholars",
            badge: null,
            date: "24/08/2026"
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
        subItems: [
          {
            name: "Official Press Statement & Principal's Felicitation Message",
            badge: "New",
            date: "08/11/2026"
          }
        ]
      },
      {
        id: 102,
        title: "Annual Corporate Placement Drive Witnesses 100+ Leading Recruiters at Knowledge Park III",
        badge: null,
        releaseDate: "20/10/2026",
        subItems: [
          {
            name: "Placement Statistics & Media Bulletin Release",
            badge: null,
            date: "20/10/2026"
          }
        ]
      },
      {
        id: 103,
        title: "IIF Group Commemorates 35+ Years of Academic Pedigree & Research Excellence",
        badge: null,
        releaseDate: "12/09/2026",
        subItems: [
          {
            name: "Institutional Foundation Day Commemorative Monograph",
            badge: null,
            date: "12/09/2026"
          }
        ]
      }
    ],

    "tenders": [
      {
        id: 201,
        title: "Notice Inviting Tender (NIT) for Advanced Computer Hardware & High-Speed Networking Upgrade",
        badge: "New",
        releaseDate: "04/11/2026",
        subItems: [
          {
            name: "Tender Document No.: IIFCCMS/TEND/IT/2026/02",
            badge: "New",
            date: "04/11/2026"
          }
        ]
      },
      {
        id: 202,
        title: "Tender for Annual Campus Facility Maintenance & Green Landscaping Services",
        badge: null,
        releaseDate: "18/09/2026",
        subItems: [
          {
            name: "Bid Submission Guidelines & Vendor Eligibility Criteria",
            badge: null,
            date: "18/09/2026"
          }
        ]
      },
      {
        id: 203,
        title: "Expression of Interest (EOI) for Campus Cafeteria & Food Court Services",
        badge: null,
        releaseDate: "10/08/2026",
        subItems: [
          {
            name: "Technical Specification & Terms of Contract",
            badge: null,
            date: "10/08/2026"
          }
        ]
      }
    ],

    "recruitment": [
      {
        id: 301,
        title: "Faculty Recruitment Notification: Assistant Professors in Commerce, Management & Economics",
        badge: "New +1",
        releaseDate: "10/11/2026",
        subItems: [
          {
            name: "Detailed Eligibility, UGC Norms & Application Form 2026-27",
            badge: "New",
            date: "10/11/2026"
          }
        ]
      },
      {
        id: 302,
        title: "Walk-in Interviews for Computer Lab Instructors & Placement Officers",
        badge: null,
        releaseDate: "25/10/2026",
        subItems: [
          {
            name: "Interview Schedule & Document Checklist for Candidates",
            badge: null,
            date: "25/10/2026"
          }
        ]
      },
      {
        id: 303,
        title: "Appointment of Senior Librarian & Digital Information Manager",
        badge: null,
        releaseDate: "02/09/2026",
        subItems: [
          {
            name: "Recruitment Qualifications & Compensation Framework",
            badge: null,
            date: "02/09/2026"
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
      title: "Semester Examination & Form Desk",
      url: "https://www.ccsuniversity.ac.in"
    },
    {
      title: "Online University Results Portal",
      url: "https://www.ccsuniversity.ac.in"
    },
    {
      title: "Dean of Students Welfare & Grievances",
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
    <section className="section combined-notices-ccsu-section" id="notices">
      {/* Anchor for CCSU weblinks navigation */}
      <div id="ccsu-weblinks" style={{ position: 'relative', top: '-80px' }} />

      <div className="container">
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
                      {/* Top Row: Title + New Badge + Release Date */}
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
                        <div className="announcement-release-date">
                          Release Date: {item.releaseDate}
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
                                <Download size={18} />
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

          {/* Right Column: CCSU Weblinks + Anti-Ragging Card */}
          <div className="right-stacked-column">
            {/* Top Card: CCS University Weblinks (Dark Navy/Teal Card) */}
            <div className="ccsu-weblinks-dark-card">
              <div className="ccsu-card-header">
                <div className="ccsu-header-title">
                  <Landmark size={22} className="ccsu-landmark-icon" />
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
