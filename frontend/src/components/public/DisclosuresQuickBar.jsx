import React from 'react';
import { 
  FileText, ShieldAlert, HelpCircle, HeartHandshake, 
  Briefcase, Newspaper, Download, LogIn, ExternalLink 
} from 'lucide-react';

export default function DisclosuresQuickBar() {
  const quickLinks = [
    { label: "EXIT SURVEY", icon: FileText, href: "#admissions" },
    { label: "ANTI-RAGGING DESK", icon: ShieldAlert, href: "#contact" },
    { label: "GRIEVANCE REDRESSAL", icon: HelpCircle, href: "#contact" },
    { label: "MENTAL WELLNESS", icon: HeartHandshake, href: "#contact" },
    { label: "CAREERS @ IIF", icon: Briefcase, href: "#contact" },
    { label: "ACADEMIC NEWSLETTER", icon: Newspaper, href: "#notices" },
    { label: "SYLLABUS DOWNLOADS", icon: Download, href: "#programs" },
    { label: "STUDENT ERP / SIM", icon: LogIn, href: "/admin/login" },
    { label: "EMPLOYEE SIM", icon: LogIn, href: "/admin/login" }
  ];

  return (
    <div style={{ background: '#062a36', borderTop: '2px solid #0d5c75', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0.65rem' }}>
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#e2e8f0',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '0.6px',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#0d5c75';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Icon size={12} color="#fde047" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
