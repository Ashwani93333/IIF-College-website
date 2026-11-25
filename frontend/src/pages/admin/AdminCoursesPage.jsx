import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, Edit3 } from 'lucide-react';

export default function AdminCoursesPage() {
  const { courses, updateCourse, toggleCourseAdmission } = useApp();
  const [editingCourse, setEditingCourse] = useState(null);

  const [form, setForm] = useState({
    title: "",
    annualFee: 0,
    perSemesterFee: 0,
    examFee: 0,
    seatIntake: 0,
    eligibility: "",
    description: "",
    tagline: ""
  });

  const handleOpenEdit = (course) => {
    setEditingCourse(course);
    setForm({
      title: course.title,
      annualFee: course.annualFee,
      perSemesterFee: course.perSemesterFee,
      examFee: course.examFee,
      seatIntake: course.seatIntake,
      eligibility: course.eligibility,
      description: course.description,
      tagline: course.tagline
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateCourse(editingCourse.id, form);
    setEditingCourse(null);
  };

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
          Academic Courses &amp; Fee Structure CMS
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Update tuition fees, seat capacity, and eligibility norms. All changes update the public course catalog and fee calculator automatically.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {courses.map(course => (
          <div key={course.id} className="data-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <span className="code-tag" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>
                  Code: {course.collegeCode}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)' }}>{course.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{course.degree}</span>
              </div>

              <button
                onClick={() => toggleCourseAdmission(course.id)}
                style={{
                  background: course.isAdmissionsOpen ? '#dcfce7' : '#fee2e2',
                  color: course.isAdmissionsOpen ? '#166534' : '#b91c1c',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}
              >
                {course.isAdmissionsOpen ? "Admissions Open" : "Seats Closed"}
              </button>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', flexGrow: 1 }}>
              {course.description}
            </p>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Annual Tuition Fee:</span>
                <strong style={{ color: 'var(--primary-navy)' }}>₹{course.annualFee.toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Semester Split:</span>
                <strong>₹{course.perSemesterFee.toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Seat Capacity:</span>
                <strong>{course.seatIntake} Seats</strong>
              </div>
            </div>

            <button
              onClick={() => handleOpenEdit(course)}
              className="btn-primary-gold"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
            >
              <Edit3 size={15} /> Edit Fee &amp; Seat Specifications
            </button>
          </div>
        ))}
      </div>

      {/* Edit Course Modal */}
      {editingCourse && (
        <div className="modal-overlay" onClick={() => setEditingCourse(null)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                Edit Course: {editingCourse.title}
              </h3>
              <button onClick={() => setEditingCourse(null)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Course Title</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                  />
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label>Annual Tuition Fee (₹) *</label>
                    <input 
                      type="number" 
                      required 
                      className="form-control"
                      value={form.annualFee}
                      onChange={e => {
                        const val = Number(e.target.value);
                        setForm({ ...form, annualFee: val, perSemesterFee: Math.round(val / 2) });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Per Semester Fee (₹)</label>
                    <input 
                      type="number" 
                      required 
                      className="form-control"
                      value={form.perSemesterFee}
                      onChange={e => setForm({ ...form, perSemesterFee: Number(e.target.value) })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Seat Intake *</label>
                    <input 
                      type="number" 
                      required 
                      className="form-control"
                      value={form.seatIntake}
                      onChange={e => setForm({ ...form, seatIntake: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Eligibility Criteria</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={form.eligibility}
                    onChange={e => setForm({ ...form, eligibility: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Short Description &amp; Pedigree</label>
                  <textarea 
                    rows="3" 
                    className="form-control"
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setEditingCourse(null)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.85rem' }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
