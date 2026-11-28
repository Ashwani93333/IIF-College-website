import React from 'react';
import { Award, Star, ShieldCheck, Trophy, CheckCircle2, TrendingUp, Building } from 'lucide-react';

export default function RankingsAwardsSection() {
  const rankingCards = [
    {
      id: 1,
      badge: "ACCREDITATION EXCELLENCE",
      title: "NAAC A++ Grade University Affiliation",
      description: "Chaudhary Charan Singh University (CCSU) Meerut degree awarding framework with top-tier NAAC A++ accreditation standards.",
      icon: Award,
      tag: "NAAC A++"
    },
    {
      id: 2,
      badge: "RESEARCH RECOGNITION",
      title: "Scientific & Industrial Research Recognition",
      description: "Fostering empirical economic research, institutional publications, and policy dialogues recognized across Indian academic corridors.",
      icon: ShieldCheck,
      tag: "SIRO Standards"
    },
    {
      id: 3,
      badge: "INNOVATION RATING 2025",
      title: "4 Stars from Institution's Innovation Council",
      description: "Recognized by Ministry of Education Innovation Cell (MIC), GOI, for student entrepreneurship and intellectual property development.",
      icon: Star,
      tag: "4-Star IIC"
    },
    {
      id: 4,
      badge: "INSTITUTIONAL BENCHMARK",
      title: "Diamond Rating by QS I-GAUGE Rating",
      description: "Benchmarked for teaching pedagogy, academic infrastructure, graduate employability, and continuous governance quality.",
      icon: Trophy,
      tag: "QS I-GAUGE Diamond"
    },
    {
      id: 5,
      badge: "NATIONAL RECOGNITION",
      title: "Ranked Among Top Commerce & Management Colleges",
      description: "Consistently recognized among premier higher education institutions in Greater Noida Knowledge Park III & Delhi NCR.",
      icon: TrendingUp,
      tag: "All India Ranking"
    },
    {
      id: 6,
      badge: "GOVERNMENT FRAMEWORK",
      title: "NIRF Participation & Data Disclosure",
      description: "Committed to transparent institutional disclosures, high graduation outcome metrics, and academic inclusiveness.",
      icon: Building,
      tag: "NIRF DCS"
    }
  ];

  return (
    <section className="section" id="rankings" style={{ background: '#edffc8' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Institutional Pedigree</span>
          <h2>Rankings, Accreditations &amp; National Honors</h2>
          <p>
            Committed to academic rigor, research-driven curriculum, and high corporate credibility 
            in Knowledge Park III, Greater Noida.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {rankingCards.map(item => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  border: '1px solid #e0f2fe',
                  boxShadow: '0 4px 12px rgba(13, 92, 117, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(13, 92, 117, 0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 92, 117, 0.06)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#0d5c75', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                      {item.badge}
                    </span>
                    <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '0.75rem', fontWeight: '800', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-sm)' }}>
                      {item.tag}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', background: '#0d5c75', color: '#fde047', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <IconComponent size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#062a36', lineHeight: '1.3' }}>
                      {item.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '0.85rem', marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#0d5c75', fontWeight: '700' }}>
                  <CheckCircle2 size={15} color="#0d5c75" />
                  <span>Verified Institutional Compliance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
