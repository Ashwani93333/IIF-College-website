import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, ShieldCheck, ArrowRight, UserCheck, KeyRound } from 'lucide-react';

export default function AdminLoginPage() {
  const { login, authError, setAuthError, demoAccounts } = useAuth();
  const [email, setEmail] = useState("admin@iifccms.edu.in");
  const [password, setPassword] = useState("Admin@2026!Secure");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (res.success) {
      navigate('/admin/dashboard');
    }
  };

  const handleQuickFill = (account) => {
    setEmail(account.email);
    setPassword(account.password);
    setAuthError("");
    const res = login(account.email, account.password);
    if (res.success) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ maxWidth: '480px', width: '100%', background: '#ffffff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{ background: 'var(--primary-navy)', padding: '2rem', textAlign: 'center', color: '#ffffff' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(197,155,39,0.2)', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <Lock size={26} color="var(--accent-gold-light)" />
          </div>
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
            Administrative Secretariat
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>
            IIF College of Commerce and Management Studies
          </p>
        </div>

        {/* Form Body */}
        <div style={{ padding: '2rem' }}>
          {authError && (
            <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', marginBottom: '1.25rem', fontWeight: '600' }}>
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Official Staff Email</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="email" 
                  required 
                  className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@iifccms.edu.in"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                required 
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary-gold" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '0.85rem' }}
            >
              Sign In to Management Dashboard <ArrowRight size={18} />
            </button>
          </form>

          {/* Quick-Fill Demo Logins Section */}
          <div style={{ marginTop: '2rem', borderTop: '1px dashed var(--border-light)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <KeyRound size={15} color="var(--accent-gold-dark)" />
              1-Click Demo Login Credentials:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {demoAccounts.map((acc, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleQuickFill(acc)}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 0.85rem',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-light)'}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-navy)' }}>
                      {acc.roleLabel}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {acc.email}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'var(--primary-navy)', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', fontWeight: '700' }}>
                    Login
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>
              ← Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
