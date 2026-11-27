import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, ArrowRight, Award, GraduationCap, CheckCircle2, 
  Building2, Users, FileCheck2 
} from 'lucide-react';

export default function HeroSection({ onOpenSyllabus }) {
  const { courses, settings } = useApp();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Mission & Pitch */}
        <div className="hero-content">
          <div className="pre-badge">
            <Sparkles size={14} /> CCS UNIVERSITY MEERUT AFFILIATED • NAAC A++ GRADE
          </div>
          <h2>
            Pioneering Higher <span>Management & Commerce</span> Excellence
          </h2>
          <p className="hero-lead">
            Empowering future corporate leaders, entrepreneurs, and finance specialists. 
            Under the 35+ years academic pedigree of the <strong>Indian Institute of Finance (Estd. 1987)</strong> at Knowledge Park III, Greater Noida.
          </p>

          <div className="hero-cta-group">
            <button onClick={() => scrollTo('admissions')} className="btn-primary-gold">
              Apply for Admission <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('fee-calculator')} className="btn-outline-white">
              Calculate Scholarship Slabs
            </button>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <h3>35+</h3>
              <p>Years Academic Heritage</p>
            </div>
            <div className="stat-item">
              <h3>55K+</h3>
              <p>Volumes Central Library</p>
            </div>
            <div className="stat-item">
              <h3>6.47</h3>
              <p>Acres Lush Campus</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>AC Smart Classrooms</p>
            </div>
          </div>
        </div>

        {/* Right Column: Highlights & Program Snapshot */}
        <div className="hero-card">
          <div className="hero-card-header">
            <h3>
              <GraduationCap size={22} color="var(--accent-gold-light)" /> 
              Flagship Undergraduate Programs
            </h3>
          </div>
          
          <div className="program-highlight-list">
            {courses.map(course => (
              <div key={course.id} className="program-pill-card">
                <div className="program-pill-header">
                  <h4>{course.title.split('(')[0].trim()}</h4>
                  <span className="code-tag">Code: {course.collegeCode}</span>
                </div>
                <p>{course.tagline}</p>
                <div style={{ marginTop: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold-light)', fontWeight: '700' }}>
                    ₹{course.annualFee.toLocaleString()}/yr
                  </span>
                  <button 
                    onClick={() => scrollTo('programs')}
                    style={{ fontSize: '0.78rem', color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold-light)" />
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>
              NEP 2020 Aligned Curricula with Direct CCSU Degree Conferred
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
