import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, Users, FileText, BookOpen, GraduationCap, 
  Image, Settings, LogOut, ExternalLink, RotateCcw, 
  ShieldCheck, ChevronRight 
} from 'lucide-react';

export default function AdminLayout() {
  const { currentUser, logout } = useAuth();
  const { resetToFactoryDefaults } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-app-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-top">
          <div className="admin-brand">
            <svg viewBox="0 0 100 100" width="38" height="38">
              <circle cx="50" cy="50" r="46" fill="#0d5c75" stroke="#c59b27" strokeWidth="4"/>
              <path d="M26 62 Q 50 56 50 36 Q 50 56 74 62 L 74 66 Q 50 60 50 40 Q 50 60 26 66 Z" fill="#ffffff"/>
              <path d="M50 20 Q 54 28 50 34 Q 46 28 50 20 Z" fill="#dfb235"/>
              <text x="50" y="90" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="bold" fill="#ffffff" textAnchor="middle">ADMIN</text>
            </svg>
            <div>
              <h2>IIFCCMS Portal</h2>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)', fontWeight: '700' }}>
                Operations &amp; CMS
              </span>
            </div>
          </div>

          <ul className="admin-nav-links">
            <li className="admin-nav-item">
              <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                <LayoutDashboard size={18} />
                <span>Dashboard Overview</span>
              </NavLink>
            </li>
            <li className="admin-nav-item">
              <NavLink to="/admin/admissions" className={({ isActive }) => isActive ? 'active' : ''}>
                <Users size={18} />
                <span>Admissions CRM</span>
              </NavLink>
            </li>
            <li className="admin-nav-item">
              <NavLink to="/admin/notices" className={({ isActive }) => isActive ? 'active' : ''}>
                <FileText size={18} />
                <span>Notices &amp; Circulars</span>
              </NavLink>
            </li>
            <li className="admin-nav-item">
              <NavLink to="/admin/courses" className={({ isActive }) => isActive ? 'active' : ''}>
                <BookOpen size={18} />
                <span>Courses &amp; Fees</span>
              </NavLink>
            </li>
            <li className="admin-nav-item">
              <NavLink to="/admin/faculty" className={({ isActive }) => isActive ? 'active' : ''}>
                <GraduationCap size={18} />
                <span>Faculty Directory</span>
              </NavLink>
            </li>
            <li className="admin-nav-item">
              <NavLink to="/admin/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                <Image size={18} />
                <span>Campus Media</span>
              </NavLink>
            </li>
            <li className="admin-nav-item">
              <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'active' : ''}>
                <Settings size={18} />
                <span>Site Config &amp; Ticker</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Sidebar Footer with User Pill & Quick Actions */}
        <div className="admin-sidebar-bottom">
          <div className="admin-user-pill">
            <div className="admin-user-avatar">
              {currentUser?.name?.charAt(0) || "A"}
            </div>
            <div className="admin-user-info">
              <div className="name">{currentUser?.name || "Admin Staff"}</div>
              <div className="role-badge">{currentUser?.roleLabel || "Super Administrator"}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Link 
              to="/" 
              target="_blank"
              style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0' }}
            >
              <ExternalLink size={14} /> View Live Public Site
            </Link>

            <button
              onClick={() => {
                if (window.confirm("Reset all courses, notices, and applications to initial clean demo data?")) {
                  resetToFactoryDefaults();
                }
              }}
              style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0', textAlign: 'left' }}
            >
              <RotateCcw size={14} /> Reset Demo Data
            </button>

            <button
              onClick={handleLogout}
              style={{ fontSize: '0.82rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0', fontWeight: '700', textAlign: 'left' }}
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="admin-main-viewport">
        <header className="admin-top-navbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span>IIFCCMS Secretariat</span>
            <ChevronRight size={14} />
            <span style={{ fontWeight: '700', color: 'var(--primary-navy)' }}>Administrative Console</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ background: '#dcfce7', color: '#166534', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={14} /> Active Session ({currentUser?.role?.replace('ROLE_', '')})
            </span>
            <Link 
              to="/"
              className="btn-outline-white"
              style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.82rem', padding: '0.4rem 0.8rem' }}
            >
              Public Portal
            </Link>
          </div>
        </header>

        <div className="admin-page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
