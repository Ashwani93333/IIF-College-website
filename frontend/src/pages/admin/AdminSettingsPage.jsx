import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Settings, Save, Bell, Phone, Mail, MapPin } from 'lucide-react';

export default function AdminSettingsPage() {
  const { settings, updateSettings } = useApp();

  const [form, setForm] = useState({
    collegeName: settings.collegeName,
    parentTrust: settings.parentTrust,
    affiliatedUniversity: settings.affiliatedUniversity,
    campusAddress: settings.campusAddress,
    phonePrimary: settings.phonePrimary,
    phoneSecondary: settings.phoneSecondary,
    emailGeneral: settings.emailGeneral,
    emailAdmissions: settings.emailAdmissions,
    antiRaggingHelpline: settings.antiRaggingHelpline,
    announcementTicker: settings.announcementTicker
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(form);
  };

  return (
    <div style={{ maxWidth: '850px' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
          System Configuration &amp; Alert Marquee CMS
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Configure live announcement marquee text, emergency helplines, official emails, and campus address.
        </p>
      </div>

      <div className="data-card" style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {/* Announcement Marquee Ticker */}
          <div style={{ background: '#fef3c7', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid #fde68a' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '800', color: '#92400e', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              <Bell size={16} />
              Public Top Announcement Ticker (Marquee Banner)
            </label>
            <textarea 
              rows="3" 
              className="form-control"
              value={form.announcementTicker}
              onChange={e => setForm({ ...form, announcementTicker: e.target.value })}
              style={{ background: '#fff' }}
            />
            <div style={{ fontSize: '0.75rem', color: '#92400e', marginTop: '0.35rem' }}>
              *Text scrolls continuously at the very top of the public website for urgent updates.
            </div>
          </div>

          <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
            Institutional Identification
          </h3>

          <div className="form-group">
            <label>Institution Legal Title</label>
            <input 
              type="text" 
              className="form-control" 
              value={form.collegeName}
              onChange={e => setForm({ ...form, collegeName: e.target.value })}
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Parent Foundation / Trust</label>
              <input 
                type="text" 
                className="form-control" 
                value={form.parentTrust}
                onChange={e => setForm({ ...form, parentTrust: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Affiliated University</label>
              <input 
                type="text" 
                className="form-control" 
                value={form.affiliatedUniversity}
                onChange={e => setForm({ ...form, affiliatedUniversity: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Physical Campus Address</label>
            <input 
              type="text" 
              className="form-control" 
              value={form.campusAddress}
              onChange={e => setForm({ ...form, campusAddress: e.target.value })}
            />
          </div>

          <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', margin: '1.5rem 0 1rem' }}>
            Helpline &amp; Contact Telephony
          </h3>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Primary Admission Phone</label>
              <input 
                type="text" 
                className="form-control" 
                value={form.phonePrimary}
                onChange={e => setForm({ ...form, phonePrimary: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Secondary Helpline</label>
              <input 
                type="text" 
                className="form-control" 
                value={form.phoneSecondary}
                onChange={e => setForm({ ...form, phoneSecondary: e.target.value })}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>General Secretariat Email</label>
              <input 
                type="email" 
                className="form-control" 
                value={form.emailGeneral}
                onChange={e => setForm({ ...form, emailGeneral: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Admissions Email</label>
              <input 
                type="email" 
                className="form-control" 
                value={form.emailAdmissions}
                onChange={e => setForm({ ...form, emailAdmissions: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Anti-Ragging Helpline Number</label>
            <input 
              type="text" 
              className="form-control" 
              value={form.antiRaggingHelpline}
              onChange={e => setForm({ ...form, antiRaggingHelpline: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
            <button type="submit" className="btn-primary-gold">
              <Save size={16} /> Save System Configurations
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
