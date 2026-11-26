import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Lock, Mail, KeyRound, ArrowRight, X, Eye, EyeOff, 
  UserCheck, LogOut, CheckCircle2 
} from 'lucide-react';

export default function AdminLoginModal({ isOpen, onClose }) {
  const { login, logout, isAuthenticated, currentUser, demoAccounts, authError, setAuthError } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@iifccms.edu.in");
  const [password, setPassword] = useState("Admin@2026!Secure");
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError("");
    setIsSubmitting(true);

    try {
      const res = login(email, password);
      if (res.success) {
        onClose();
        navigate('/admin/dashboard');
      } else {
        setLocalError(res.error || "Authentication failed. Check credentials.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickLogin = (account) => {
    setEmail(account.email);
    setPassword(account.password);
    setLocalError("");
    setAuthError("");
    const res = login(account.email, account.password);
    if (res.success) {
      onClose();
      navigate('/admin/dashboard');
    }
  };

  const handleProceedToDashboard = () => {
    onClose();
    navigate('/admin/dashboard');
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="admin-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="admin-modal-header">
          <button 
            type="button" 
            className="admin-modal-close-btn" 
            onClick={onClose}
            aria-label="Close Admin Login Modal"
          >
            <X size={20} />
          </button>

          <div className="admin-modal-crest">
            <Lock size={24} className="crest-lock-icon" />
          </div>

          <h3 className="admin-modal-title">Administrative Secretariat</h3>
          <p className="admin-modal-subtitle">
            IIF College of Commerce and Management Studies
          </p>
          <div className="admin-modal-badge">
            <span>COLLEGE CODE - 472 • SECURE STAFF PORTAL</span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="admin-modal-body">
          {isAuthenticated ? (
            /* State: User is Already Logged In */
            <div className="admin-logged-in-box">
              <div className="logged-in-avatar">
                <UserCheck size={32} color="#0d5c75" />
              </div>
              <h4 className="logged-in-name">{currentUser?.name || 'Authorized Staff'}</h4>
              <p className="logged-in-email">{currentUser?.email}</p>
              <div className="logged-in-role-pill">
                <CheckCircle2 size={13} color="#16a34a" />
                <span>{currentUser?.roleLabel || 'Administrator'}</span>
              </div>

              <div className="admin-logged-in-btns">
                <button
                  type="button"
                  onClick={handleProceedToDashboard}
                  className="btn-primary-gold admin-modal-submit-btn"
                >
                  Proceed to Admin Dashboard <ArrowRight size={17} />
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="btn-outline-signout"
                >
                  <LogOut size={15} /> Sign Out of Current Session
                </button>
              </div>
            </div>
          ) : (
            /* State: Staff Login Form */
            <>
              {(localError || authError) && (
                <div className="admin-modal-error-banner">
                  {localError || authError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="admin-modal-form">
                <div className="admin-modal-field">
                  <label className="admin-field-label">
                    <Mail size={14} className="field-icon-lead" /> Official Staff Email
                  </label>
                  <div className="admin-input-wrapper">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@iifccms.edu.in"
                      className="admin-field-input"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="admin-modal-field">
                  <label className="admin-field-label">
                    <Lock size={14} className="field-icon-lead" /> Password
                  </label>
                  <div className="admin-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="admin-field-input password-input"
                    />
                    <button
                      type="button"
                      className="admin-password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-gold admin-modal-submit-btn"
                >
                  <span>{isSubmitting ? 'Verifying...' : 'Sign In to Management Dashboard'}</span>
                  <ArrowRight size={17} />
                </button>
              </form>

              {/* 1-Click Fast Access Demo Credentials */}
              <div className="admin-demo-access-panel">
                <div className="demo-access-header">
                  <KeyRound size={14} color="#c59b27" />
                  <span>1-Click Fast Access Demo Credentials</span>
                </div>

                <div className="demo-accounts-list">
                  {demoAccounts.map((acc, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleQuickLogin(acc)}
                      className="demo-account-pill-btn"
                      title={`Click to log in instantly as ${acc.roleLabel}`}
                    >
                      <div className="demo-pill-info">
                        <span className="demo-pill-role">{acc.roleLabel}</span>
                        <span className="demo-pill-email">{acc.email}</span>
                      </div>
                      <ArrowRight size={14} className="demo-pill-arrow" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
