import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { 
  History, Target, Award, Users, Shield, 
  GraduationCap, ListChecks, Phone, Mail, MapPin, 
  ChevronRight, ExternalLink, BookOpen, CheckCircle2 
} from 'lucide-react';

export default function AboutPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'history';

  const setTab = (tabKey) => {
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'history', label: 'History', icon: <History size={17} /> },
    { key: 'vision-mission', label: 'Vision & Mission', icon: <Target size={17} /> },
    { key: 'chairman', label: 'Chairman & Founder', icon: <Award size={17} /> },
    { key: 'managing-committee', label: 'Managing Committee', icon: <Users size={17} /> },
    { key: 'advisory-council', label: 'Advisory Council', icon: <Shield size={17} /> },
    { key: 'principal', label: 'Principal', icon: <GraduationCap size={17} /> },
    { key: 'committees', label: 'Councils & Committees', icon: <ListChecks size={17} /> },
    { key: 'contact', label: 'Contact Us', icon: <Phone size={17} /> }
  ];

  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      {/* Hero Page Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>About Us</span> <span>/</span> <span className="active">{tabs.find(t => t.key === currentTab)?.label || 'Overview'}</span>
          </div>
          <h1 className="page-main-heading">About IIF CCMS</h1>
          <p className="page-sub-lead">
            Discover our institutional genesis, visionary leadership, statutory governance, and commitment to holistic higher education.
          </p>
        </div>
      </div>

      {/* Main Dual-Column Content Layout */}
      <div className="container page-content-container">
        <div className="page-layout-grid">
          {/* Left Sticky Sidebar Tabs */}
          <aside className="page-sidebar-menu">
            <div className="sidebar-menu-card">
              <div className="sidebar-title">About Us Navigation</div>
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
                <div className="pill-title">Need Guidance?</div>
                <p>Call our central secretariat helpline:</p>
                <a href="tel:8010000234" className="pill-phone">8010-000-234</a>
              </div>
            </div>
          </aside>

          {/* Right Dynamic View Area */}
          <main className="page-main-content">
            {/* 1. History */}
            {currentTab === 'history' && (
              <div className="tab-content-card">
                <div className="content-badge">GENESIS &amp; HERITAGE</div>
                <h2 className="content-heading">Institutional History</h2>
                
                <div className="rich-text-content">
                  <p>
                    <strong>IIF College of Commerce &amp; Management Studies (IIF CCMS)</strong> is affiliated to Chaudhary Charan Singh (CCS) University, Meerut. IIF College of Commerce &amp; Management Studies is founded under a Public Charitable Trust duly registered U/S 12 of Income Tax Act 1961. It is a part of prestigious Indian Institute of Finance Group.
                  </p>

                  <p>
                    The main campus of the College is spread over an area of <strong>6.47 acres</strong> in Knowledge Park III, Greater Noida (Delhi NCR), which has Academic Departments, Library, Meeting rooms, Staff room, Class rooms, Boys Common Room and Girls Common Room. The college imparts education at the graduate level and has facilities for research in the faculties of Commerce, Management and Arts.
                  </p>

                  <p>
                    IIFCCMS affiliated to CCSU Meerut is bestowed with distinguished faculty educated or taught in some of the Ivy institutions like <strong>SRCC, FMS, Delhi University, IIT Delhi, Columbia University (USA), Cleveland State University</strong>; excellent infrastructure, Wi-Fi campus, large library, sports and cultural facilities and has a focus on total personality development. IIFCCMS would provide ample opportunities to seek admission to MBA of Leading institutes in India and abroad, to pursue CAs, CS and other post graduate courses like M.Com and/or get good placement in Industry, Banks, and financial institutions and motivate to prepare for civil services.
                  </p>

                  <div className="highlight-callout-box">
                    <h3 className="callout-title">Salient Features of the College</h3>
                    <ul className="salient-list">
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>CCMS library has new 162 books for B.Com program and 192 books for BBA program.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>IIF CCMS students will have the benefit of using IIF Library with about 55,000 books, 1,000 journals and other material.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>Computer Centre with 20 computers is open for Students, Faculty and Staff.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>Halls for extracurricular activities and national conferences.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={18} className="check-ico" />
                        <span>Faculty drawn from premier institutions including SRCC, IIT Delhi, and Delhi University.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Vision & Mission */}
            {currentTab === 'vision-mission' && (
              <div className="tab-content-card">
                <div className="content-badge">GUIDING COMPASS</div>
                <h2 className="content-heading">Vision &amp; Mission</h2>

                <div className="vision-mission-grid">
                  <div className="vm-box vision-box">
                    <div className="vm-header">
                      <Target size={24} className="vm-icon" />
                      <h3>Institutional Vision</h3>
                    </div>
                    <div className="vm-body">
                      <p className="statement">
                        To provide low-cost high-quality higher education along with holistic development.
                      </p>
                    </div>
                  </div>

                  <div className="vm-box mission-box">
                    <div className="vm-header">
                      <Award size={24} className="vm-icon" />
                      <h3>Institutional Mission</h3>
                    </div>
                    <div className="vm-body">
                      <ul className="mission-list">
                        <li>
                          <span className="bullet-num">01</span>
                          <span>To Nurture Talent and develop Total Personality to meet global challenges and excel in life.</span>
                        </li>
                        <li>
                          <span className="bullet-num">02</span>
                          <span>To develop leaders with moral values and tolerance.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Chairman & Founder */}
            {currentTab === 'chairman' && (
              <div className="tab-content-card">
                <div className="content-badge">FOUNDING PATRON</div>
                <h2 className="content-heading">Chairman &amp; Founder</h2>

                <div className="profile-hero-card">
                  <div className="profile-avatar-frame">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                      alt="Professor J.D. Agarwal" 
                      className="profile-img"
                    />
                  </div>
                  <div className="profile-intro-meta">
                    <h3>Professor J.D. Agarwal</h3>
                    <div className="degrees">
                      <div>Ph.D. (Delhi School of Economics)</div>
                      <div>Hony. Ph.D. (Tashkent Finance Institute, Uzbekistan)</div>
                      <div>Hony. D.Litt. (SZIU, Hungary)</div>
                    </div>
                    <div className="title-tag">
                      Founder Chairman &amp; Director, Indian Institute of Finance • Chief Editor, Finance India
                    </div>
                  </div>
                </div>

                <div className="bio-sketch-body">
                  <h3 className="section-sub-title">Bio-Sketch &amp; Contributions</h3>
                  <p>
                    Dr. J.D. Agarwal, presently Professor of Finance, is the founder Chairman &amp; Director of Indian Institute of Finance &amp; Chief Editor of Finance India. He is a leading economist and financial expert.
                  </p>
                  <p>
                    In the past he has taught at Shri Ram College of Commerce (University of Delhi), Indian Institute of Technology Delhi, Ahmadu Bello University (Nigeria), and Cleveland State University (U.S.A.), and has served as a visitor's Nominee on University of Delhi and Pondicherry University.
                  </p>
                  <p>
                    He has written over <strong>18 books (authored over 5,500 pages)</strong>, edited over 100 volumes of Finance India (edited more than 30,000 pages), published more than 200 research papers, and authored more than 500 case studies and working papers. He has been supervisor of several Ph.Ds, M.Tech (systems &amp; management) dissertations, MBA &amp; M.Sc. (Finance) dissertations, and research projects by senior government officials sponsored by GOI on study leave at IIF.
                  </p>
                  <p>
                    He has lectured in more than 800 MDPs and trained more than 10,000 senior executives from government and industry; delivered more than 700 Radio/TV talks and interviews on economic issues. He has organized and participated in more than 1,500 seminars and conferences world over, either as a keynote speaker, chairman of sessions, or participant. He has assisted more than 100 Institutes/Universities globally and was invited to address conferences, sign MoUs, and deliver lectures in more than 50 countries.
                  </p>
                  <p>
                    His research, writings, speeches, talks, and interviews on AIR and TV have had an important bearing on government policies, including the monumental change in the Union Budget presentation timing from 5 pm to forenoon.
                  </p>
                  <p>
                    His students hold and have held ministerial positions in the Government of India, State Governments, politics, judiciary, bureaucracy, legal, media, accounting, economics, business and industry, the World Bank, and senior academic positions as professors and deans internationally.
                  </p>
                  <p>
                    He founded the prestigious Indian Institute of Finance in 1987 without government aid. The institute has become a center of excellence and a base for scholarship for over three decades, accompanied by the acclaimed quarterly research journal <em>Finance India</em>.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Managing Committee */}
            {currentTab === 'managing-committee' && (
              <div className="tab-content-card">
                <div className="content-badge">GOVERNANCE &amp; SECRETARIAT</div>
                <h2 className="content-heading">Managing Committee</h2>
                <p className="tab-lead-desc">
                  The executive governing body guiding institutional policies, statutory compliance, and developmental planning.
                </p>

                <div className="committee-officers-grid">
                  <div className="officer-card officer-card-primary">
                    <span className="role-tag">Chairman</span>
                    <h3>Professor Manju Agarwal</h3>
                    <p className="inst">IIF College of Commerce &amp; Management Studies</p>
                    <p className="trust">Founding Trustee</p>
                    <p className="loc">45 A, Knowledge Park III, Greater Noida, UP - 201308</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Vice Chairman</span>
                    <h3>Dr. B. P. Dhaka</h3>
                    <p className="inst">Former Secretary General</p>
                    <p className="trust">PHD Chamber of Commerce and Industry (PHDCCI)</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Secretary</span>
                    <h3>Prof. Aman Agarwal</h3>
                    <p className="inst">Director &amp; Professor</p>
                    <p className="trust">Indian Institute of Finance</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Treasurer</span>
                    <h3>Prof. Deepak Bansal</h3>
                    <p className="inst">Assistant Professor</p>
                    <p className="trust">Indian Institute of Finance</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Jt. Secretary</span>
                    <h3>Mr. Saurabh Sharma</h3>
                    <p className="inst">Senior Manager</p>
                    <p className="trust">EXL Service.com (India) Pvt Ltd</p>
                  </div>

                  <div className="officer-card">
                    <span className="role-tag">Principal &amp; Member Secretary</span>
                    <h3>Prof. (Dr.) Saurabh Agarwal</h3>
                    <p className="inst">Professor &amp; Principal</p>
                    <p className="trust">IIF College of Commerce &amp; Management Studies</p>
                  </div>
                </div>

                <h3 className="section-sub-title" style={{ marginTop: '2.5rem' }}>Distinguished Members</h3>
                <div className="members-simple-grid">
                  <div className="member-item">
                    <strong>Prof. K. K. Panda</strong>
                    <span>Former Registrar, University of Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Shri Ajay Bhargava</strong>
                    <span>Architect, Bhargavajay Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Prof. (Dr.) Sudhir K. Jain</strong>
                    <span>Former Professor, IIT Delhi</span>
                  </div>
                  <div className="member-item">
                    <strong>Prof. (Dr.) J. P. Sharma</strong>
                    <span>Former Professor &amp; Dean, Dept. of Commerce, DSE, Delhi University</span>
                  </div>
                  <div className="member-item">
                    <strong>Mr. Sunil Goel</strong>
                    <span>Advocate</span>
                  </div>
                  <div className="member-item">
                    <strong>Mr. Jitin Bhargava</strong>
                    <span>Managing Director, ASCO India Pvt Ltd</span>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Advisory Council */}
            {currentTab === 'advisory-council' && (
              <div className="tab-content-card">
                <div className="content-badge">STRATEGIC GUIDANCE</div>
                <h2 className="content-heading">Advisory Council</h2>
                <p className="tab-lead-desc">
                  Comprising eminent academicians, legal luminaries, industry executives, and prominent alumni providing strategic direction to IIF CCMS.
                </p>

                <div className="advisory-grid">
                  {[
                    { name: "Prof. Sankarshan Basu", role: "Professor, Indian Institute of Management (IIM) Bangalore" },
                    { name: "Prof. Gianluca Mattarocci", role: "Associate Professor of Economics of Financial Intermediaries, University of Rome Tor Vergata" },
                    { name: "Dr. Nitin Vora", role: "Dean, GMERS Medical College Sola Ahmedabad & President, Gujarat Medical Council" },
                    { name: "Mr. Chozha Naachiar Rajasekar", role: "President, The Tamil Chamber of Commerce" },
                    { name: "Mr. Suman Jyoti Khaitan", role: "Advocate, Founder & CEO Khaitan & Partners" },
                    { name: "Prof. H. K. Singh", role: "Professor, Faculty of Commerce, Banaras Hindu University (BHU)" },
                    { name: "Mr. Rakesh K Chitkara", role: "Senior Director Global Government Affairs South Asia, Abbott Healthcare Pvt. Ltd." },
                    { name: "Prof. Namita Rajput", role: "Sri Aurobindo College, University of Delhi • President, UNHAD Foundation" },
                    { name: "Dr. Niti Nandini Chatnani", role: "Professor (Finance) & Head Division of Alumni Affairs, Indian Institute of Foreign Trade (IIFT)" },
                    { name: "Dr. Kankipati Srinivasa Rao", role: "Ph.D., Associate Professor of Commerce, Vivek Vardhini College, Osmania University" },
                    { name: "Mr. Rahul Shakya", role: "Assistant Manager, KPMG & Distinguished IIF Alumni" },
                    { name: "Mr. Amitanshu Vijayvargiya", role: "Delivery Lead, Acuity Knowledge Partners & Distinguished IIF Alumni" }
                  ].map((adv, i) => (
                    <div key={i} className="advisory-card">
                      <div className="adv-icon"><Award size={18} /></div>
                      <div className="adv-info">
                        <h4>{adv.name}</h4>
                        <p>{adv.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Principal */}
            {currentTab === 'principal' && (
              <div className="tab-content-card">
                <div className="content-badge">ACADEMIC HEAD</div>
                <h2 className="content-heading">Message from the Principal</h2>

                <div className="principal-profile-layout">
                  <div className="principal-portrait">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                      alt="Prof. (Dr.) Saurabh Agarwal" 
                      className="principal-img"
                    />
                    <div className="principal-caption">
                      <h3>Prof. (Dr.) Saurabh Agarwal</h3>
                      <span>Ph.D., Professor &amp; Principal</span>
                      <p>IIF College of Commerce and Management Studies</p>
                    </div>
                  </div>

                  <div className="principal-letter">
                    <p className="salutation">Dear Students, Parents &amp; Aspirants,</p>
                    <p>
                      It gives me immense pleasure to welcome you to <strong>IIF College of Commerce and Management Studies (IIFCCMS)</strong>, affiliated to Chaudhary Charan Singh University, Meerut. We have embarked upon an educational mission that brings together rigorous academic scholarship, industry-centric practical training, and deep ethical grounding.
                    </p>
                    <p>
                      In today's fast-evolving economic landscape, higher education must transcend traditional lectures. At IIF CCMS, our undergraduate programs in Commerce, Management, and Humanities are designed to cultivate analytical acumen, effective communication, and real-world problem-solving skills.
                    </p>
                    <p>
                      With a 6.47-acre modern Wi-Fi campus in Knowledge Park III, air-conditioned smart classrooms, access to over 55,000 library volumes, and an eminent faculty educated at SRCC, IITs, and prestigious global universities, we provide an inspiring ecosystem where every student can discover their spark.
                    </p>
                    <p>
                      I invite you to explore our vibrant academic programs and join our journey toward professional excellence.
                    </p>
                    <div className="sign-off">
                      <strong>Prof. (Dr.) Saurabh Agarwal</strong><br />
                      Principal, IIFCCMS
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Councils & Committees */}
            {currentTab === 'committees' && (
              <div className="tab-content-card">
                <div className="content-badge">STATUTORY CELLS</div>
                <h2 className="content-heading">Councils and Committees</h2>
                <p className="tab-lead-desc">
                  IIF CCMS has established dedicated statutory councils, academic bodies, and student development cells ensuring disciplined governance and holistic campus life:
                </p>

                <div className="committees-grid">
                  {[
                    "Staff Council",
                    "Admissions Committee",
                    "Sports Committee",
                    "Time-Table Committees",
                    "Academic Standards Committee",
                    "Academic Supervisory Committee",
                    "Student Faculty Committee",
                    "Internal Assessment Monitoring Committee",
                    "Internal Assessment Moderation Committee",
                    "Library Committee",
                    "Computer Committee",
                    "College Discipline Committee",
                    "Placement Cell",
                    "Financial Assistance Committee (Fee Concession / Students Aid Fund / Need Based Scholarship)",
                    "Annual Day Co-Ordination Committee",
                    "Annual Day Awards Committee",
                    "College Magazine",
                    "Café Committee",
                    "College Seminar Committee",
                    "Student Faculty Exchange Program Committee",
                    "Environment and Cleanliness of College Committee",
                    "NAAC Committee",
                    "Internal Complaints Committee (ICC)",
                    "Women Development Cell (WDC)",
                    "Centre for Innovation, Incubation and Entrepreneurship (CIIE)",
                    "North-East and Himalayan Students Integration Committee",
                    "Archive Committee",
                    "Anti Ragging Committee",
                    "Anti Smoking Committee",
                    "Sexual Harassment Committee",
                    "Enabling Unit for Differently-Abled Persons",
                    "Quiz Committee",
                    "Panache - Western Dance Committee",
                    "Fine Arts Committee",
                    "Leadership, Innovation and Finance Commerce Committee",
                    "The Film and Photography Committee",
                    "Human Resource Development Committee"
                  ].map((comm, idx) => (
                    <div key={idx} className="committee-pill-card">
                      <span className="comm-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="comm-name">{comm}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. Contact Us */}
            {currentTab === 'contact' && (
              <div className="tab-content-card">
                <div className="content-badge">GET IN TOUCH</div>
                <h2 className="content-heading">Contact Secretariat</h2>

                <div className="contact-info-block-grid">
                  <div className="contact-detail-box">
                    <div className="box-icon"><MapPin size={22} /></div>
                    <div className="box-info">
                      <h4>Campus Address</h4>
                      <p>
                        The Principal<br />
                        IIF College of Commerce and Management Studies<br />
                        Plot No. 45A, Knowledge Park III<br />
                        Greater Noida - 201310, Delhi NCR, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="box-icon"><Phone size={22} /></div>
                    <div className="box-info">
                      <h4>Telephony Lines</h4>
                      <p>+91-120-2323683, 2323687</p>
                      <p>Mobile: +91-9811971002 / 8010-000-234</p>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="box-icon"><Mail size={22} /></div>
                    <div className="box-info">
                      <h4>Electronic Mail</h4>
                      <p>iifccms@gmail.com</p>
                      <p>admission@iifccms.edu.in</p>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="box-icon"><BookOpen size={22} /></div>
                    <div className="box-info">
                      <h4>Official Web URL</h4>
                      <p>www.iifccms.edu.in</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Affiliated to CCS University, Meerut (Code 472)</p>
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
