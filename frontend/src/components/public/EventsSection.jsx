import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ArrowRight, Sparkles, Tag } from 'lucide-react';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const events = [
    {
      id: 1,
      date: "07 Oct 2026",
      day: "07",
      month: "OCT",
      year: "2026",
      category: "Conclave",
      title: "Global Trade, Agribusiness & Investment Summit 2026",
      venue: "Main Auditorium, Knowledge Park III",
      desc: "Deliberating on cross-border investment corridors, supply chain financing, and foreign exchange risk management with industry economists.",
      tag: "FLAGSHIP CONCLAVE"
    },
    {
      id: 2,
      date: "17 Sep 2026",
      day: "17",
      month: "SEP",
      year: "2026",
      category: "Symposium",
      title: "Executive Panel on Future-Ready Financial Managers & AI Integration",
      venue: "Seminar Hall 1",
      desc: "Distinguished banking leaders and Fintech CTOs addressing the integration of generative AI and algorithmic analytics in corporate decision-making.",
      tag: "AI & FINTECH"
    },
    {
      id: 3,
      date: "17 Sep 2026",
      day: "17",
      month: "SEP",
      year: "2026",
      category: "Alumni",
      title: "Alumni Leadership Dialogue: Campus to Corporate Boardrooms",
      venue: "Executive Council Hall",
      desc: "Distinguished IIF alumni sharing strategic career roadmaps, corporate interviewing frameworks, and leadership insights with undergraduate students.",
      tag: "ALUMNI NETWORK"
    },
    {
      id: 4,
      date: "16 Sep 2026",
      day: "16",
      month: "SEP",
      year: "2026",
      category: "Induction",
      title: "Undergraduate Orientation & Induction Programme — 'PARICHAY 2026'",
      venue: "Central Amphitheatre",
      desc: "Welcoming the incoming batch of BBA, B.Com, and B.A. scholars with academic briefings, faculty introductions, and student kit distribution.",
      tag: "BATCH 2026-27"
    },
    {
      id: 5,
      date: "31 Aug 2026",
      day: "31",
      month: "AUG",
      year: "2026",
      category: "Symposium",
      title: "Distinguished Keynote on Macroeconomic Resilience & Capital Markets",
      venue: "IIF Central Library Hall",
      desc: "In-depth economic seminar evaluating monetary policy directions, inflation dynamics, and equity valuation strategies for management students.",
      tag: "KEYNOTE TALK"
    },
    {
      id: 6,
      date: "14 Nov 2026",
      day: "14",
      month: "NOV",
      year: "2026",
      category: "Innovation",
      title: "Smart India Hackathon & FinTech Business Case Challenge 2026",
      venue: "Advanced IT Labs",
      desc: "Inter-collegiate 24-hour innovation challenge developing scalable business solutions for digital banking, microfinance, and ESG reporting.",
      tag: "HACKATHON"
    }
  ];

  const filteredEvents = activeTab === "all" ? events : events.filter(e => e.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="section" id="events" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus Vitality</span>
          <h2>Institutional Summits &amp; Academic Events</h2>
          <p>
            Engaging seminars, corporate conclaves, and student development forums 
            hosted at our Knowledge Park III campus.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {[
            { label: "All Events", value: "all" },
            { label: "Conclaves & Summits", value: "conclave" },
            { label: "Symposia & Panels", value: "symposium" },
            { label: "Alumni Series", value: "alumni" },
            { label: "Student Inductions", value: "induction" },
            { label: "Hackathons", value: "innovation" }
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pill-filter-btn ${activeTab === tab.value ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(13, 92, 117, 0.05)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(13, 92, 117, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 92, 117, 0.05)';
              }}
            >
              {/* Date Box */}
              <div 
                style={{
                  background: 'linear-gradient(135deg, #062a36 0%, #0d5c75 100%)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 0.6rem',
                  textAlign: 'center',
                  minWidth: '65px',
                  flexShrink: 0,
                  boxShadow: '0 4px 10px rgba(13, 92, 117, 0.2)'
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: '900', lineHeight: '1', color: '#fde047', fontFamily: 'var(--font-heading)' }}>
                  {event.day}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {event.month}
                </div>
                <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>
                  {event.year}
                </div>
              </div>

              {/* Content */}
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span style={{ background: '#f0f9ff', color: '#0d5c75', fontSize: '0.7rem', fontWeight: '800', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-sm)', letterSpacing: '0.4px' }}>
                    {event.tag}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={12} color="#0d5c75" /> {event.venue}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', color: '#062a36', fontWeight: '800', lineHeight: '1.35', marginBottom: '0.5rem' }}>
                  {event.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {event.desc}
                </p>

                <a 
                  href="#admissions"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', fontWeight: '700', color: '#0d5c75' }}
                >
                  Register / Event Inquiries <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
