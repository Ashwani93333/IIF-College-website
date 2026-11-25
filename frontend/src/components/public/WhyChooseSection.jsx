import React from 'react';
import { Award, BookOpen, Briefcase, GraduationCap, Building2, Sparkles, ArrowRight } from 'lucide-react';

export default function WhyChooseSection() {
  const pillars = [
    {
      id: 1,
      badge: "Legacy & Trust",
      title: "35+ Years Proven Heritage",
      desc: "Carrying forward the distinguished pedigree of the Indian Institute of Finance (Estd. 1987), recognized nationally and internationally for educational excellence.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
      icon: <Award size={22} />
    },
    {
      id: 2,
      badge: "University Degree",
      title: "CCSU Affiliation & NAAC A++ Standard",
      desc: "Affiliated to prestigious Chaudhary Charan Singh University, Meerut (College Code 472), ensuring recognized degrees aligned with NEP 2020 curriculum standards.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
      icon: <GraduationCap size={22} />
    },
    {
      id: 3,
      badge: "Corporate Placements",
      title: "600+ Marquee Corporate Recruiters",
      desc: "Dedicated Corporate Resource Center driving placements up to 12 LPA with giants like Accenture, Deloitte, KPMG, JP Morgan Chase, Cisco, and HDFC Bank.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
      icon: <Briefcase size={22} />
    },
    {
      id: 4,
      badge: "Eminent Mentors",
      title: "Distinguished Faculty & Industry Experts",
      desc: "Mentorship by seasoned academicians, former IIM/IIT faculty, corporate consultants, and published researchers committed to personalized student growth.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80",
      icon: <BookOpen size={22} />
    },
    {
      id: 5,
      badge: "World-Class Infrastructure",
      title: "Prime Knowledge Park III Campus",
      desc: "100% air-conditioned smart lecture rooms, 55,000+ volume central library, modern computer analytics centers, athletic arenas, and vibrant cafeterias.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
      icon: <Building2 size={22} />
    },
    {
      id: 6,
      badge: "Holistic Development",
      title: "Clubs, Hackathons & Incubation Cell",
      desc: "Active student clubs in finance, marketing, cultural arts, sports, and social impact, alongside live project hackathons and entrepreneurial incubation support.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
      icon: <Sparkles size={22} />
    }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section section-bg-light why-choose-section" id="why-iif">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-tag">WHY CHOOSE US</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-navy-dark)' }}>
            WHY IIF CCMS?
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            A unique synergy of academic eminence, rigorous corporate exposure, and ethical leadership development 
            designed to transform ambitious learners into future-ready professionals.
          </p>
        </div>

        {/* Matrix of Images with Hover Movement */}
        <div className="why-choose-matrix-grid">
          {pillars.map((item) => (
            <div key={item.id} className="why-choose-card">
              <div className="why-card-image-wrap">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="why-card-img"
                />
                <div className="why-card-overlay"></div>
                <div className="why-card-badge">
                  <span className="why-badge-icon">{item.icon}</span>
                  <span>{item.badge}</span>
                </div>
              </div>

              <div className="why-card-body">
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
                <div className="why-card-cta">
                  <button onClick={() => scrollTo('programs')} className="why-learn-btn">
                    Explore Opportunities <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
