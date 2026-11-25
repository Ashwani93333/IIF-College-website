import React from 'react';
import { useApp } from '../../context/AppContext';
import { Landmark, ShieldCheck, Award, BookOpen, CheckCircle, MapPin } from 'lucide-react';

export default function AboutSection() {
  const { settings } = useApp();

  return (
    <section className="section section-bg-white" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Genesis & Legacy</span>
          <h2>A Premier Centre for Commerce and Management</h2>
          <p>
            Carrying forward the 35+ year legacy of the Indian Institute of Finance (Estd. 1987).
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--primary-navy)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Landmark size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>
              35+ Years Group Heritage
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              Carrying forward the distinguished lineage of the <strong>Indian Institute of Finance (IIF)</strong>, founded in 1987 by eminent economists. IIFCCMS maintains high academic standards in business leadership and ethical administration.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--primary-navy)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>
              CCSU Meerut Affiliation & NAAC A++
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              All degrees are directly awarded by <strong>Chaudhary Charan Singh University (CCSU), Meerut</strong>, accredited with NAAC A++ grade. College Codes: <strong>BBA (454)</strong>, <strong>B.Com (472)</strong>, and <strong>B.A. (478)</strong>.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--primary-navy)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>
              Institutional Vision &amp; Scholarships
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              Dedicated to providing quality higher education with merit-based tuition concessions up to 25% for high achievers with zero hidden capitation charges.
            </p>
          </div>
        </div>

        {/* Campus Highlights Grid */}
        <div style={{ background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-dark) 100%)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--accent-gold-light)', fontWeight: '800', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              CAMPUS INFRASTRUCTURE
            </span>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', margin: '0.5rem 0 1rem' }}>
              World-Class 6.47-Acre Campus in Knowledge Park III
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Strategically located in the prominent institutional corridor of Greater Noida, adjacent to high-speed metro transit and expressway links.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
              <CheckCircle size={18} color="var(--accent-gold-light)" />
              <span>100% Air-Conditioned Lecture Theatres with Smart Audio-Visuals</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
              <CheckCircle size={18} color="var(--accent-gold-light)" />
              <span>IIF Central Library housing 55,000+ books & DELNET e-resources</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
              <CheckCircle size={18} color="var(--accent-gold-light)" />
              <span>Gigabit Wi-Fi enabled IT computer terminals and accounting labs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
              <CheckCircle size={18} color="var(--accent-gold-light)" />
              <span>Sports grounds, gymnasium, cafeteria, and 24x7 security monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
