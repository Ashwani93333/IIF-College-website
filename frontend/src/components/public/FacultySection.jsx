import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, GraduationCap, Award } from 'lucide-react';

export default function FacultySection() {
  const { faculty } = useApp();
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", "Executive Academic Council", "Department of Management Studies", "Department of Commerce", "Department of Arts & Humanities"];

  const filteredFaculty = faculty.filter(f => {
    if (!f.isActive) return false;
    return selectedDept === "All" || f.department === selectedDept;
  });

  return (
    <section className="section" id="faculty" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Mentorship</span>
          <h2>Distinguished Faculty & Leadership</h2>
          <p>
            Learn from seasoned academicians, corporate researchers, and economists dedicated to 
            intellectual excellence and student mentorship.
          </p>
        </div>

        {/* Department Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`pill-filter-btn ${selectedDept === dept ? 'active' : ''}`}
            >
              {dept === "All" ? "All Departments" : dept.replace("Department of ", "")}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {filteredFaculty.map(member => (
            <div 
              key={member.id} 
              style={{ background: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={member.photoUrl} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(11,37,69,0.9))', padding: '1rem', color: '#fff' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', fontWeight: '700' }}>
                    {member.department}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
                  {member.name}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-dark)', fontWeight: '700', marginBottom: '0.75rem' }}>
                  {member.designation}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GraduationCap size={15} color="var(--primary-navy)" />
                  <span>{member.qualifications}</span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem', flexGrow: 1 }}>
                  {member.bio}
                </p>

                {member.email && (
                  <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '0.75rem', marginTop: 'auto' }}>
                    <a 
                      href={`mailto:${member.email}`}
                      style={{ fontSize: '0.82rem', color: 'var(--primary-navy)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: '600' }}
                    >
                      <Mail size={13} /> {member.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
