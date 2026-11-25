import React from 'react';
import { useApp } from '../../context/AppContext';
import { Phone, Mail, MapPin, ShieldAlert, Clock, Building2, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const { settings } = useApp();

  return (
    <section className="section section-bg-white" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Institutional Secretariat</span>
          <h2>Campus Secretariat &amp; Helplines</h2>
          <p>
            Plot No. 45A, Knowledge Park III, Greater Noida. Reach our admissions cell and student administrative secretariat.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Card 1: Official Helplines */}
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
              Telephony &amp; Email Directory
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--primary-navy)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--primary-navy)', fontSize: '0.92rem' }}>Admissions Telephony</div>
                  <div style={{ color: 'var(--text-dark)', fontSize: '0.95rem', fontWeight: '600' }}>
                    <a href={`tel:${settings.phonePrimary}`} style={{ color: 'var(--primary-navy)' }}>{settings.phonePrimary}</a> | 
                    <a href={`tel:${settings.phoneSecondary}`} style={{ color: 'var(--primary-navy)', marginLeft: '6px' }}>{settings.phoneSecondary}</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--primary-navy)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--primary-navy)', fontSize: '0.92rem' }}>Official Correspondence</div>
                  <div style={{ color: 'var(--text-dark)', fontSize: '0.9rem' }}>
                    <a href={`mailto:${settings.emailGeneral}`}>{settings.emailGeneral}</a><br />
                    <a href={`mailto:${settings.emailAdmissions}`}>{settings.emailAdmissions}</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--primary-navy)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--primary-navy)', fontSize: '0.92rem' }}>Secretariat Working Hours</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    Monday – Saturday: 9:00 AM – 5:30 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Anti-Ragging Mandate */}
            <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#991b1b', fontWeight: '800', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                <ShieldAlert size={18} />
                24x7 Anti-Ragging National Helpline
              </div>
              <p style={{ fontSize: '0.82rem', color: '#7f1d1d' }}>
                Toll-Free National Helpline: <strong>1800-180-5522</strong>. Zero tolerance policy strictly enforced.
              </p>
            </div>
          </div>

          {/* Card 2: Campus Map & Visiting Address */}
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
              Campus Geo-Location
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              <MapPin size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              {settings.campusAddress}
            </p>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '230px', border: '1px solid var(--border-light)', flexGrow: 1 }}>
              <iframe 
                title="Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.599182312693!2d77.4912165!3d28.4750135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea6469cf3397%3A0xe54fb7ea88fcf740!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
