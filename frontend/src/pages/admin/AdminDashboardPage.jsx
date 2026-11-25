import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  Users, FileText, BookOpen, Clock, ArrowUpRight, Plus, 
  ExternalLink, GraduationCap 
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { applications, notices, courses } = useApp();

  const totalApplications = applications.length;
  const underScrutinyCount = applications.filter(a => a.twelfthPercentage >= 60).length;
  const activeNotices = notices.filter(n => n.isActive).length;

  return (
    <div>
      {/* Top Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-navy)' }}>
            Secretariat Executive Overview
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Real-time admissions telemetry, academic notices, and institutional operations.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to="/admin/notices" className="btn-primary-gold" style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
            <Plus size={16} /> Publish Notice
          </Link>
          <Link to="/admin/admissions" className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
            <Users size={16} /> Review Admissions
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="metrics-kpi-grid">
        <div className="kpi-card">
          <div>
            <div className="kpi-num">{totalApplications}</div>
            <div className="kpi-title">Total Applications Received</div>
          </div>
          <div className="kpi-icon-wrapper" style={{ background: '#e0f2fe', color: '#0369a1' }}>
            <Users size={24} />
          </div>
        </div>

        <div className="kpi-card">
          <div>
            <div className="kpi-num" style={{ color: '#0369a1' }}>{courses.length}</div>
            <div className="kpi-title">Undergraduate Degree Programs</div>
          </div>
          <div className="kpi-icon-wrapper" style={{ background: '#fef3c7', color: '#d97706' }}>
            <BookOpen size={24} />
          </div>
        </div>

        <div className="kpi-card">
          <div>
            <div className="kpi-num" style={{ color: '#16a34a' }}>{underScrutinyCount}</div>
            <div className="kpi-title">Merit Scholarship Candidates</div>
          </div>
          <div className="kpi-icon-wrapper" style={{ background: '#dcfce7', color: '#16a34a' }}>
            <GraduationCap size={24} />
          </div>
        </div>

        <div className="kpi-card">
          <div>
            <div className="kpi-num">{activeNotices}</div>
            <div className="kpi-title">Published Circulars</div>
          </div>
          <div className="kpi-icon-wrapper" style={{ background: '#f3e8ff', color: '#7e22ce' }}>
            <FileText size={24} />
          </div>
        </div>
      </div>

      {/* Recent Admissions Applications Table */}
      <div className="data-card" style={{ marginBottom: '2rem' }}>
        <div className="data-card-header">
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)' }}>
              Recent Admission Applicants (Live Leads)
            </h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Latest digital applicants submitted through the public desk
            </span>
          </div>
          <Link to="/admin/admissions" style={{ fontSize: '0.85rem', color: 'var(--primary-navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            View Full CRM <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="data-table-wrapper">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>App ID</th>
                <th>Candidate Name</th>
                <th>Program</th>
                <th>12th Marks</th>
                <th>Contact Phone</th>
                <th>Submitted Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.slice(0, 5).map(app => (
                <tr key={app.id}>
                  <td>
                    <Link to="/admin/admissions" style={{ color: 'var(--primary-navy)', fontWeight: '700', textDecoration: 'underline' }}>
                      {app.applicationId}
                    </Link>
                  </td>
                  <td><strong>{app.fullName}</strong></td>
                  <td>{app.courseCode}</td>
                  <td>{app.twelfthPercentage}%</td>
                  <td>{app.phone}</td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {app.submittedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Undergraduate Programs Overview */}
      <div className="data-card">
        <div className="data-card-header">
          <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)' }}>
            Undergraduate Programs Overview
          </h3>
          <Link to="/admin/courses" style={{ fontSize: '0.8rem', color: 'var(--primary-navy)', fontWeight: '700' }}>
            Manage Fees
          </Link>
        </div>
        <div style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {courses.map(course => (
            <div key={course.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontWeight: '700', color: 'var(--primary-navy)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                {course.title.split('(')[0]}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Intake: {course.seatIntake} Seats | Code: {course.collegeCode}
              </div>
              <div style={{ fontWeight: '800', color: 'var(--primary-navy)', fontSize: '1.1rem' }}>
                ₹{course.annualFee.toLocaleString()}/yr
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
