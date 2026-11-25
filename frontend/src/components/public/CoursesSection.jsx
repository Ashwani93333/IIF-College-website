import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  BookOpen, Users, Clock, CheckCircle2, FileText, 
  ArrowRight, X, Download, Award 
} from 'lucide-react';

export default function CoursesSection({ onApplyWithCourse }) {
  const { courses } = useApp();
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);

  const scrollToAdmissions = (course) => {
    if (onApplyWithCourse) {
      onApplyWithCourse(course);
    }
    const el = document.getElementById('admissions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="programs" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Offerings</span>
          <h2>Undergraduate Degree Programs (NEP 2020)</h2>
          <p>
            Affiliated with CCS University Meerut, combining academic rigor, skill-based electives, 
            and hands-on industry internships.
          </p>
        </div>

        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-card-top">
                <div className="course-badge-row">
                  <span className="course-code-badge">College Code: {course.collegeCode}</span>
                  {course.isAdmissionsOpen ? (
                    <span className="admissions-open-badge">
                      <CheckCircle2 size={12} /> Admissions Open
                    </span>
                  ) : (
                    <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.72rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                      Seats Full
                    </span>
                  )}
                </div>
                <h3>{course.title}</h3>
                <div className="course-degree-meta">{course.degree}</div>
              </div>

              <div className="course-card-body">
                <p className="course-description">{course.description}</p>

                <ul className="course-specs-list">
                  <li>
                    <span className="spec-label"><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Duration:</span>
                    <span className="spec-value">3 Years (6 Semesters)</span>
                  </li>
                  <li>
                    <span className="spec-label"><Users size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Seat Capacity:</span>
                    <span className="spec-value">{course.seatIntake} Seats</span>
                  </li>
                  <li>
                    <span className="spec-label"><Award size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Eligibility:</span>
                    <span className="spec-value" style={{ maxWidth: '60%', textAlign: 'right', fontSize: '0.8rem' }}>
                      {course.eligibility.split('(')[0]}
                    </span>
                  </li>
                </ul>

                <div className="fee-highlight-box">
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
                      Annual Tuition Fee
                    </div>
                    <div className="fee-amount">₹{course.annualFee.toLocaleString()}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Per Semester</div>
                    <div style={{ fontWeight: '700', color: 'var(--primary-navy)' }}>
                      ₹{course.perSemesterFee.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="course-card-actions">
                  <button 
                    onClick={() => setSelectedCourseForSyllabus(course)}
                    className="btn-view-syllabus"
                  >
                    <FileText size={15} /> NEP Syllabus
                  </button>
                  <button 
                    onClick={() => scrollToAdmissions(course)}
                    className="btn-apply-course"
                  >
                    Apply Online <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Syllabus Modal */}
      {selectedCourseForSyllabus && (
        <div className="modal-overlay" onClick={() => setSelectedCourseForSyllabus(null)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                  {selectedCourseForSyllabus.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Affiliated with CCSU Meerut | College Code: {selectedCourseForSyllabus.collegeCode}
                </div>
              </div>
              <button 
                onClick={() => setSelectedCourseForSyllabus(null)}
                style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--primary-navy)' }}>
                  Eligibility & Qualification Criteria
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {selectedCourseForSyllabus.eligibility}
                </p>
              </div>

              <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                NEP 2020 Aligned Semester Breakdown
              </h4>

              {selectedCourseForSyllabus.semesters && selectedCourseForSyllabus.semesters.map(sem => (
                <div key={sem.sem} style={{ marginBottom: '1.25rem' }}>
                  <h5 style={{ background: 'var(--primary-navy)', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                    Semester {sem.sem} Papers
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {sem.subjects.map((sub, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0.6rem', background: '#f8fafc', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem' }}>
                        <span><strong>{sub.code}:</strong> {sub.name}</span>
                        <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>{sub.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>
                  Career & Industry Pathways
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selectedCourseForSyllabus.careerScope?.map((career, i) => (
                    <span key={i} style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '0.78rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: '600' }}>
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                onClick={() => {
                  alert(`Downloading official NEP 2020 syllabus PDF for ${selectedCourseForSyllabus.title}...`);
                }}
                className="btn-view-syllabus"
              >
                <Download size={15} /> Download PDF Scheme
              </button>
              <button 
                onClick={() => {
                  const c = selectedCourseForSyllabus;
                  setSelectedCourseForSyllabus(null);
                  scrollToAdmissions(c);
                }}
                className="btn-apply-course"
              >
                Proceed to Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
