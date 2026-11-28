import React from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, Building2, Users, ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';

export default function LandingPlacementSection() {
  const placementMetrics = [
    {
      label: 'Highest Package',
      value: '₹ 12.0 LPA',
      detail: 'Corporate & Financial Advisory',
      icon: Award,
      accentColor: '#dfb235'
    },
    {
      label: 'Average Package',
      value: '₹ 3.0 – 4.5 LPA',
      detail: 'Undergraduate Degree Cohort',
      icon: TrendingUp,
      accentColor: '#0d5c75'
    },
    {
      label: 'Corporate Linkages',
      value: '600+',
      detail: 'Leading MNCs & Financial Institutions',
      icon: Building2,
      accentColor: '#0284c7'
    },
    {
      label: 'Placement Support',
      value: '100%',
      detail: 'Internships & Interview Mentorship',
      icon: Users,
      accentColor: '#16a34a'
    }
  ];

  const prominentRecruiters = [
    'ICICI Bank',
    'HDFC Bank',
    'Axis Bank',
    'Kotak Mahindra',
    'Ernst & Young Network',
    'Deloitte Network',
    'Genpact',
    'Wipro',
    'TCS',
    'Saint-Gobain',
    'JUSPAY',
    'Dhangaurd Dubai'
  ];

  return (
    <section className="section landing-placements-section" id="placements" style={{ background: '#eaffef' }}>
      <div className="container">
        {/* Section Header matching benchmark title design */}
        <div className="landing-section-header">
          <div className="landing-section-title-wrap">
            <h2 className="landing-section-title">Career Assistance &amp; Placement Highlights</h2>
          </div>
          <p className="landing-section-subtitle">
            Dedicated Corporate Resource Center driving summer internships, corporate grooming, and high-impact placement drives
          </p>
        </div>

        {/* 4 Minimal Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          {placementMetrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderTop: `4px solid ${m.accentColor}`,
                  borderRadius: '12px',
                  padding: '1.35rem 1.25rem',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.4px' }}>
                    {m.label}
                  </span>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: `${m.accentColor}18`,
                    color: m.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComp size={18} />
                  </div>
                </div>
                <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#062a36', marginBottom: '0.35rem', lineHeight: 1.15 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600 }}>
                  {m.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Corporate Linkages & Recruiter Badges Box */}
        <div style={{
          background: '#ffffff',
          border: '1.5px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.5rem 1.75rem',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #f1f5f9'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} color="#0d5c75" />
              <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#062a36', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Prominent Industry Partners &amp; Sectors
              </span>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#0369a1', fontWeight: 700, background: '#e0f2fe', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
              Banking • FinTech • Consulting • Analytics
            </span>
          </div>

          {/* Minimal Badges Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            alignItems: 'center'
          }}>
            {prominentRecruiters.map((rec, rIdx) => (
              <span
                key={rIdx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#062a36',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <CheckCircle2 size={13} color="#16a34a" />
                {rec}
              </span>
            ))}
          </div>
        </div>

        {/* Minimal Bottom CTA Link Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          paddingTop: '0.5rem'
        }}>
          <Link
            to="/placements"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#062a36',
              color: '#ffffff',
              padding: '0.75rem 1.6rem',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(6, 42, 54, 0.25)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>View Comprehensive Placement Details</span>
            <ArrowRight size={16} color="#dfb235" />
          </Link>
          <Link
            to="/application-form"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #dfb235 0%, #c59b27 100%)',
              color: '#062a36',
              padding: '0.75rem 1.6rem',
              borderRadius: '8px',
              fontWeight: 900,
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(223, 178, 53, 0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Apply Online for Admission</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
