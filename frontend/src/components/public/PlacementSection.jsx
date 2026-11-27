import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Users, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

export default function PlacementSection() {
  return (
    <div 
      className="placement-single-card"
      style={{
        background: '#ffffff',
        border: '2px solid #cbd5e1',
        borderTop: '6px solid #062a36',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
        marginTop: '1.5rem',
        marginBottom: '2.5rem'
      }}
    >
      {/* Badge & Meta */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <span style={{ 
          background: '#e0f2fe', 
          color: '#0369a1', 
          fontSize: '0.82rem', 
          fontWeight: 800, 
          padding: '0.3rem 0.85rem', 
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          CORPORATE RESOURCE CENTER
        </span>
        <span style={{ 
          background: '#fef3c7', 
          color: '#92400e', 
          fontSize: '0.82rem', 
          fontWeight: 800, 
          padding: '0.3rem 0.85rem', 
          borderRadius: '4px' 
        }}>
          ESTD. 1987
        </span>
      </div>

      <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#000000', margin: '0 0 0.85rem' }}>
        Placement Highlights &amp; Career Assistance
      </h2>

      <p style={{ fontSize: '1.05rem', color: '#000000', fontWeight: 700, lineHeight: 1.7, marginBottom: '2rem' }}>
        IIF College of Commerce and Management Studies (IIF CCMS) operates a dedicated Corporate Resource Center that actively bridges classroom academics with real-world industry requirements. The cell conducts regular campus placement drives, summer internship programs, and career counseling sessions for undergraduate students across Commerce and Management streams.
      </p>

      {/* Key Metrics Statistics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.25rem'
      }}>
        {/* Metric 1 */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem', borderLeft: '4px solid #c59b27' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c59b27', marginBottom: '0.35rem' }}>
            <Award size={18} />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>Highest Package</span>
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#062a36', margin: '0.2rem 0' }}>
            ₹ 12.0 LPA
          </div>
          <div style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 700 }}>
            Corporate &amp; Financial Advisory
          </div>
        </div>

        {/* Metric 2 */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem', borderLeft: '4px solid #0d5c75' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0d5c75', marginBottom: '0.35rem' }}>
            <TrendingUp size={18} />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>Average Package</span>
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#062a36', margin: '0.2rem 0' }}>
            ₹ 3.0 – 4.5 LPA
          </div>
          <div style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 700 }}>
            Undergraduate Cohort
          </div>
        </div>

        {/* Metric 3 */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem', borderLeft: '4px solid #0284c7' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', marginBottom: '0.35rem' }}>
            <Building2 size={18} />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>Corporate Linkages</span>
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#062a36', margin: '0.2rem 0' }}>
            600+
          </div>
          <div style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 700 }}>
            Industry &amp; Recruiter Network
          </div>
        </div>

        {/* Metric 4 */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem', borderLeft: '4px solid #16a34a' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a', marginBottom: '0.35rem' }}>
            <Users size={18} />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>Placement Support</span>
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#062a36', margin: '0.2rem 0' }}>
            100%
          </div>
          <div style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 700 }}>
            Interview &amp; Resume Guidance
          </div>
        </div>
      </div>

      {/* Salient Details Box */}
      <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#000000', margin: '0 0 1rem' }}>
          Key Initiatives of the Corporate Resource Center
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 700 }}>
              Regular campus recruitment drives with financial, banking, and consulting firms.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 700 }}>
              Practical workshops in financial modeling, corporate communication, and aptitude tests.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 700 }}>
              Mandatory summer internship assistance and live corporate research project guidance.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 700 }}>
              One-on-one mock interview sessions and alumni career mentoring networks.
            </span>
          </div>
        </div>
      </div>

      {/* Action / Contact Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
        paddingTop: '1.25rem',
        borderTop: '1px solid #e2e8f0'
      }}>
        <div>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>
            Placement Cell Contact &amp; Inquiries
          </div>
          <div style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 800, marginTop: '0.2rem' }}>
            IIF CCMS Campus, 45A Knowledge Park III, Greater Noida | Phone: +91-9999321586
          </div>
        </div>
        <Link 
          to="/application-form" 
          className="btn-primary-gold"
          style={{ textDecoration: 'none', fontWeight: 900, padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <span>Apply Online for Admission</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
