import React from 'react';
import { 
  Calendar, Award, Lightbulb, Users, Compass, 
  ExternalLink, ArrowRight, CheckCircle2, BookOpen, ShieldCheck 
} from 'lucide-react';

export default function AcademicsLifeSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Academic Pedagogy & CCSU Curricula",
      badge: "NEP 2020 FRAMEWORK",
      desc: "Structured semester-wise academic calendar with core commerce, management specializations, continuous internal assessments, and university end-term papers."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Incubation Cell (IIF-IIC)",
      badge: "STUDENT ENTREPRENEURSHIP",
      desc: "Nurturing startup concepts, business pitch competitions, prototype incubation, and direct interaction with venture angels and fintech mentors."
    },
    {
      icon: Compass,
      title: "Financial Analytics & EVM Excellence",
      badge: "CENTRE OF EXCELLENCE",
      desc: "State-of-the-art computational simulation labs conducting real-time stock market data modeling, equity research, and econometric forecasting."
    },
    {
      icon: Users,
      title: "Student Societies & Cultural Guilds",
      badge: "CAMPUS CLUBS",
      desc: "Active student chapters including the Rotaract Club of IIF, FinTech Society, Marketing Vanguard, Eco-Sustainability Forum, and Inter-College Sports Teams."
    }
  ];

  return (
    <section className="section section-bg-white" id="academics-life">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus Ecosystem</span>
          <h2>Academics, Incubation &amp; Student Life</h2>
          <p>
            An enriching academic environment combining experiential learning, 
            incubation facilities, and dynamic student clubs on our 6.47-acre campus.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#0d5c75';
                  e.currentTarget.style.background = '#f0f9ff';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 92, 117, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: '#0d5c75', color: '#fde047', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={22} />
                    </div>
                    <span style={{ fontSize: '0.7rem', fontWeight: '800', background: '#e0f2fe', color: '#0369a1', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-sm)' }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#062a36', fontWeight: '800', marginBottom: '0.6rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '0.85rem', marginTop: '1.25rem' }}>
                  <a href="#admissions" style={{ fontSize: '0.82rem', fontWeight: '700', color: '#0d5c75', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Explore Details <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Campus Walkthrough Banner (Matching Screenshot's Virtual Tour CTA) */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #062a36 0%, #0d5c75 60%, #156d8a 100%)',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            boxShadow: '0 10px 25px rgba(6, 42, 54, 0.25)'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(253, 224, 71, 0.15)', border: '1px solid #fde047', color: '#fde047', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.78rem', fontWeight: '800', marginBottom: '1rem' }}>
              <Compass size={14} /> 360° INTERACTIVE EXPERIENCE
            </div>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: '900', lineHeight: '1.2', marginBottom: '0.75rem' }}>
              Explore the 6.47-Acre Knowledge Park III Campus
            </h3>
            <p style={{ color: '#e0f2fe', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              Take a closer look at our 100% air-conditioned smart lecture halls, IIF Central Library (55,000+ volumes), advanced accounting terminals, athletic arenas, and student cafeterias.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="#gallery"
                className="btn-primary-gold"
                style={{ fontSize: '0.92rem', padding: '0.75rem 1.5rem' }}
              >
                View Photo Gallery <ArrowRight size={16} />
              </a>
              <a 
                href="#contact"
                className="btn-outline-white"
                style={{ fontSize: '0.92rem', padding: '0.75rem 1.4rem' }}
              >
                Schedule Physical Campus Tour
              </a>
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
            <h4 style={{ color: '#fde047', fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem' }}>
              Campus Highlights at a Glance
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} color="#fde047" />
                <span>Plot No. 45A, Knowledge Park III (Metro-connected corridor)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} color="#fde047" />
                <span>55,000+ Book Central Library with DELNET &amp; EBSCO subscriptions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} color="#fde047" />
                <span>Amphitheatre Lecture Theatres with Smart Audio-Visual projection</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} color="#fde047" />
                <span>Multi-Sport Grounds for Cricket, Badminton, Football &amp; Gym</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} color="#fde047" />
                <span>Strict 24x7 Anti-Ragging CCTV surveillance and security squad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
