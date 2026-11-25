import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Trash2, Mail, GraduationCap } from 'lucide-react';

export default function AdminFacultyPage() {
  const { faculty, addFaculty, deleteFaculty } = useApp();
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    designation: "Assistant Professor",
    department: "Department of Management Studies",
    qualifications: "MBA, UGC-NET",
    experience: "5+ Years",
    email: "",
    bio: "",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    isActive: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFaculty(form);
    setModalOpen(false);
    setForm({
      name: "",
      designation: "Assistant Professor",
      department: "Department of Management Studies",
      qualifications: "MBA, UGC-NET",
      experience: "5+ Years",
      email: "",
      bio: "",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      isActive: true
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
            Faculty Directory Management CMS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Add, update, or remove faculty and dean profiles shown on the public site.
          </p>
        </div>

        <button onClick={() => setModalOpen(true)} className="btn-primary-gold" style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
          <Plus size={16} /> Add Faculty Profile
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {faculty.map(f => (
          <div key={f.id} className="data-card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem' }}>
            <img 
              src={f.photoUrl} 
              alt={f.name} 
              style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)' }}>{f.name}</h4>
                <button 
                  onClick={() => {
                    if (window.confirm(`Remove ${f.name} from directory?`)) {
                      deleteFaculty(f.id);
                    }
                  }}
                  style={{ color: '#dc2626', padding: '0.2rem' }}
                  title="Remove Faculty"
                >
                  <Trash2 size={15} />
                </button>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>
                {f.designation}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0' }}>
                {f.department}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {f.qualifications}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Faculty Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                Add New Faculty Profile
              </h3>
              <button onClick={() => setModalOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control"
                    placeholder="e.g. Dr. Rajesh Kumar"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Designation *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control"
                      value={form.designation}
                      onChange={e => setForm({ ...form, designation: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Department *</label>
                    <select 
                      className="form-control"
                      value={form.department}
                      onChange={e => setForm({ ...form, department: e.target.value })}
                    >
                      <option value="Executive Academic Council">Executive Academic Council</option>
                      <option value="Department of Management Studies">Department of Management Studies</option>
                      <option value="Department of Commerce">Department of Commerce</option>
                      <option value="Department of Arts & Humanities">Department of Arts & Humanities</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Qualifications *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control"
                      placeholder="e.g. Ph.D., MBA, UGC-NET"
                      value={form.qualifications}
                      onChange={e => setForm({ ...form, qualifications: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Official Email</label>
                    <input 
                      type="email" 
                      className="form-control"
                      placeholder="faculty@iifccms.edu.in"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Photo URL</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={form.photoUrl}
                    onChange={e => setForm({ ...form, photoUrl: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Biography &amp; Areas of Expertise</label>
                  <textarea 
                    rows="3" 
                    className="form-control"
                    value={form.bio}
                    onChange={e => setForm({ ...form, bio: e.target.value })}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setModalOpen(false)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.85rem' }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
