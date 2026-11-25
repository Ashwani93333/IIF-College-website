import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Download, Eye, Phone, Mail } from 'lucide-react';

export default function AdminAdmissionsPage() {
  const { applications, courses } = useApp();

  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");
  const [inspectingApp, setInspectingApp] = useState(null);

  // Filtered List
  const filteredApps = applications.filter(app => {
    const matchesSearch = 
      app.fullName.toLowerCase().includes(search.toLowerCase()) ||
      app.applicationId.toLowerCase().includes(search.toLowerCase()) ||
      app.phone.includes(search) ||
      app.email.toLowerCase().includes(search.toLowerCase());

    const matchesCourse = filterCourse === "All" || app.courseCode === filterCourse;

    return matchesSearch && matchesCourse;
  });

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ["Application ID", "Candidate Name", "Gender", "Category", "Course", "12th Board", "12th %", "Phone", "Email", "Submitted At"];
    const rows = filteredApps.map(a => [
      a.applicationId,
      `"${a.fullName}"`,
      a.gender,
      a.category,
      a.courseCode,
      a.twelfthBoard,
      a.twelfthPercentage,
      a.phone,
      a.email,
      `"${a.submittedAt}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `IIFCCMS_Admissions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
            Admissions Secretariat &amp; Lead Management CRM
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Inspect candidate qualifications, 12th board marks, and contact credentials.
          </p>
        </div>

        <button onClick={handleExportCSV} className="btn-primary-gold" style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
          <Download size={16} /> Export Applications to CSV ({filteredApps.length})
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="data-card" style={{ marginBottom: '1.5rem', padding: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Search Records
            </label>
            <div style={{ position: 'relative', marginTop: '0.35rem' }}>
              <input 
                type="text" 
                placeholder="Name, App ID, Phone, Email..." 
                className="form-control"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: '2.2rem' }}
              />
              <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Filter by Course
            </label>
            <select 
              className="form-control" 
              style={{ marginTop: '0.35rem' }}
              value={filterCourse}
              onChange={e => setFilterCourse(e.target.value)}
            >
              <option value="All">All Courses</option>
              {courses.map(c => (
                <option key={c.id} value={c.code}>{c.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Applications Table */}
      <div className="data-card">
        <div className="data-table-wrapper">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>App ID</th>
                <th>Candidate</th>
                <th>Course</th>
                <th>12th Marks</th>
                <th>Scholarship Slab</th>
                <th>Phone / Email</th>
                <th>Submitted</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                    No applicant records match your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredApps.map(app => (
                  <tr key={app.id}>
                    <td>
                      <strong style={{ color: 'var(--primary-navy)' }}>{app.applicationId}</strong>
                    </td>
                    <td>
                      <div style={{ fontWeight: '700' }}>{app.fullName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{app.gender} • {app.category}</div>
                    </td>
                    <td>
                      <span style={{ fontWeight: '600' }}>{app.courseCode}</span>
                    </td>
                    <td>
                      <strong>{app.twelfthPercentage}%</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{app.twelfthBoard}</span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.8rem', color: app.scholarshipPercent > 0 ? '#166534' : 'var(--text-muted)', fontWeight: '600' }}>
                        {app.scholarshipTier || "Standard"}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.82rem' }}>{app.phone}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{app.email}</div>
                    </td>
                    <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {app.submittedAt}
                    </td>
                    <td>
                      <button 
                        onClick={() => setInspectingApp(app)}
                        className="btn-outline-white"
                        style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                      >
                        <Eye size={13} style={{ display: 'inline', marginRight: '4px' }} /> View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicant Inspection Modal */}
      {inspectingApp && (
        <div className="modal-overlay" onClick={() => setInspectingApp(null)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()} style={{ maxWidth: '720px' }}>
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                  Applicant Profile: {inspectingApp.fullName}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ID: {inspectingApp.applicationId} | Submitted on {inspectingApp.submittedAt}
                </span>
              </div>
              <button onClick={() => setInspectingApp(null)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="slip-details-grid">
                <div className="slip-detail-cell">
                  <div className="label">Applied Program</div>
                  <div className="value">{inspectingApp.courseTitle}</div>
                </div>
                <div className="slip-detail-cell">
                  <div className="label">Candidate Gender &amp; Category</div>
                  <div className="value">{inspectingApp.gender} • {inspectingApp.category}</div>
                </div>
                <div className="slip-detail-cell">
                  <div className="label">12th Senior Secondary</div>
                  <div className="value">{inspectingApp.twelfthPercentage}% ({inspectingApp.twelfthBoard} - {inspectingApp.twelfthStream})</div>
                </div>
                <div className="slip-detail-cell">
                  <div className="label">10th High School</div>
                  <div className="value">{inspectingApp.tenthPercentage}%</div>
                </div>
                <div className="slip-detail-cell">
                  <div className="label">Candidate Contact</div>
                  <div className="value">{inspectingApp.phone} | {inspectingApp.email}</div>
                </div>
                <div className="slip-detail-cell">
                  <div className="label">Parent / Guardian</div>
                  <div className="value">{inspectingApp.parentName} ({inspectingApp.parentPhone || inspectingApp.phone})</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Candidate Residence</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  {inspectingApp.address}, {inspectingApp.city}, {inspectingApp.state} - {inspectingApp.pincode}
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                  Secretariat &amp; Counselor Remarks
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                  {inspectingApp.counselorNotes || "Documents submitted online for campus scrutiny."}
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={`tel:${inspectingApp.phone}`} 
                className="btn-outline-white"
                style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.85rem' }}
              >
                <Phone size={14} style={{ display: 'inline', marginRight: '4px' }} /> Call Candidate
              </a>
              <button onClick={() => setInspectingApp(null)} className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
