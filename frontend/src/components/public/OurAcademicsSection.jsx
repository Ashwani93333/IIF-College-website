import React, { useState } from 'react';
import { 
  Calendar, FileText, BookOpen, Building, 
  Lightbulb, ArrowRight, X, ExternalLink, Award 
} from 'lucide-react';
import { 
  infraClassroom, 
  infraMainBuilding, 
  infraComputerCentre, 
  mcPhoto, 
  imgPgConclaveStage 
} from '../../assets/assetImages';

export default function OurAcademicsSection() {
  const [selectedAcademicItem, setSelectedAcademicItem] = useState(null);

  const academicItems = [
    {
      id: 1,
      title: "Academic Calendar",
      tag: "Academic Framework",
      image: infraClassroom,
      icon: <Calendar size={20} />,
      brief: "Comprehensive semester roadmaps, internal sessional timelines, lecture plans, and university examination schedules.",
      details: [
        "Semester Commencement & Orientation Program",
        "Continuous Internal Evaluation (CIE) & Sessional Tests",
        "Mid-Term Faculty Review & Student Progress Portfolios",
        "University End-Semester Examination Windows & Practical Vivas",
        "Annual Co-Curricular & National Conference Slots"
      ]
    },
    {
      id: 2,
      title: "NIRF DCS & Quality",
      tag: "Institutional Quality",
      image: infraMainBuilding,
      icon: <FileText size={20} />,
      brief: "Official Data Capturing System (DCS) institutional disclosures, NAAC quality assurance metrics, and annual statutory compliance.",
      details: [
        "Institutional Data Capturing System (DCS) Disclosures",
        "Sanctioned Student Intake & Institutional Seat Capacity",
        "Student-Faculty Ratio (1:15) and Research Output Indices",
        "Institutional Expenditure & Capital Asset Audits",
        "Equal Opportunity & Public Transparency Declarations"
      ]
    },
    {
      id: 3,
      title: "Departments",
      tag: "Academic Departments",
      image: infraComputerCentre,
      icon: <BookOpen size={20} />,
      brief: "Department of Commerce, Department of Management Studies, and Department of Humanities offering specialized undergraduate degrees.",
      details: [
        "Department of Commerce (B.Com)",
        "Department of Management Studies (BBA)",
        "Department of Humanities & Applied Economics (B.A.)",
        "Dedicated Research Colloquiums & Specialized Faculty Councils",
        "Advanced Electives in Fintech, Digital Marketing, and Corporate Law"
      ]
    },
    {
      id: 4,
      title: "Industry-Academy",
      tag: "Corporate Interface",
      image: mcPhoto,
      icon: <Building size={20} />,
      brief: "Dynamic corporate interface bridging classroom theory with live corporate case studies, CXO masterclasses, and industrial tours.",
      details: [
        "Corporate Executive Lecture Series with CXOs and HR Leaders",
        "Mandatory 8-Week Corporate Summer Internship Framework",
        "Industrial Visits to Financial Institutions, NSE/BSE & Tech Parks",
        "Live Market Simulation & Tally/Excel Modeling Certifications",
        "Corporate Mentorship & Resume Building Clinics"
      ]
    },
    {
      id: 5,
      title: "STUDENT Projects at IIF CCMS",
      tag: "Student Innovation",
      image: imgPgConclaveStage,
      icon: <Lightbulb size={20} />,
      brief: "Empowering students through applied financial research, live marketing ventures, hackathon business prototypes, and community consults.",
      details: [
        "Live Equity Valuation & Financial Modeling Portfolios",
        "Market Research Surveys on Consumer Behavior & Digital Payments",
        "FinTech Hackathon Prototypes & Micro-Business Incubations",
        "Rural Entrepreneurship & Community Commerce Surveys",
        "Annual Student Project Exposition & Best Research Awards"
      ]
    }
  ];

  return (
    <section className="section section-bg-light our-academics-section" id="academics">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">ACADEMIC EXCELLENCE &amp; PEDAGOGY</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-navy-dark)' }}>
            OUR ACADEMICS
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Structured under the visionary academic framework of Chaudhary Charan Singh University, Meerut 
            and enriched with the Indian Institute of Finance's 35+ years legacy.
          </p>
        </div>

        {/* Row of Academic Photo Cards */}
        <div className="academics-photo-row-grid">
          {academicItems.map((item) => (
            <div key={item.id} className="academic-photo-card">
              <div className="card-media-wrap">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="academic-card-img" 
                />
                <div className="media-overlay"></div>
                <div className="tag-chip">{item.tag}</div>
              </div>

              <div className="card-info-wrap">
                <div className="card-title-row">
                  <span className="card-icon">{item.icon}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-brief">{item.brief}</p>
                <button 
                  onClick={() => setSelectedAcademicItem(item)} 
                  className="btn-read-more-academic"
                >
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedAcademicItem && (
        <div className="academic-modal-overlay" onClick={() => setSelectedAcademicItem(null)}>
          <div className="academic-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="modal-icon">{selectedAcademicItem.icon}</span>
                <div>
                  <h3>{selectedAcademicItem.title}</h3>
                  <span className="modal-tag-chip">{selectedAcademicItem.tag}</span>
                </div>
              </div>
              <button onClick={() => setSelectedAcademicItem(null)} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body-area">
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {selectedAcademicItem.brief}
              </p>

              <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                Key Academic Highlights &amp; Provisions:
              </h4>

              <ul className="modal-points-list">
                {selectedAcademicItem.details.map((point, idx) => (
                  <li key={idx} className="point-item">
                    <span className="bullet-point"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
