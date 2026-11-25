import React from 'react';
import { ExternalLink, GraduationCap, FileText, CheckCircle, BookOpen, Search } from 'lucide-react';

export default function CcsuWeblinksSection() {
  const weblinks = [
    {
      title: "CCSU Official University Portal",
      desc: "Access the central Chaudhary Charan Singh University, Meerut main statutory portal.",
      url: "https://www.ccsuniversity.ac.in",
      badge: "Main University Desk"
    },
    {
      title: "Online Examination & Student Portal",
      desc: "Fill university examination forms, download admit cards, and review examination schedules.",
      url: "https://www.ccsuniversity.ac.in",
      badge: "Exams & Admit Cards"
    },
    {
      title: "University Results Publication Desk",
      desc: "Direct verification and online mark sheets for B.Com, BBA, and B.A. semester evaluations.",
      url: "https://www.ccsuniversity.ac.in",
      badge: "Official Results"
    },
    {
      title: "NEP 2020 Curricula & Ordinances",
      desc: "Syllabi, credit frameworks, and university ordinances for undergraduate degrees.",
      url: "https://www.ccsuniversity.ac.in",
      badge: "Syllabus & Ordinances"
    },
    {
      title: "College Code 472 Verification Registry",
      desc: "Official affiliation record of IIF College of Commerce and Management Studies.",
      url: "https://www.ccsuniversity.ac.in",
      badge: "Institutional Affiliation"
    },
    {
      title: "Degree & Migration Verification",
      desc: "Digital transcripts, provisional passing certificates, and migration application desk.",
      url: "https://www.ccsuniversity.ac.in",
      badge: "Degree Registry"
    }
  ];

  return (
    <section className="section section-bg-white ccsu-weblinks-section" id="ccsu-weblinks">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">UNIVERSITY AFFILIATION &amp; STUDENT SERVICES</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-navy-dark)' }}>
            CCS UNIVERSITY WEBLINKS
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Direct access to official examination portals, syllabi, online degree verification, 
            and Chaudhary Charan Singh University, Meerut statutory resources for College Code 472.
          </p>
        </div>

        {/* Grid of Weblinks */}
        <div className="ccsu-links-grid">
          {weblinks.map((link, idx) => (
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
                <span>Access University Portal</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
