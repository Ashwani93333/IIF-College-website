import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle2, ArrowLeft, Download, Copy, Check 
} from 'lucide-react';
import ApplicationWizard from '../components/application/ApplicationWizard';
import ApplicationPrint from '../components/application/ApplicationPrint';
import { downloadPdf } from '../utils/pdfGenerator';

export default function ApplicationFormPage() {
  const { submitApplication } = useApp();
  const [submittedApp, setSubmittedApp] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const finalPrintRef = useRef(null);

  const handleCopyId = (id) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleFinalSubmit = (formData, pdfBlob) => {
    const applicationRecord = {
      fullName: formData.fullName?.toUpperCase(),
      email: formData.email,
      phone: formData.mobile,
      gender: formData.gender,
      category: formData.category,
      courseCode: formData.programme,
      twelfthBoard: formData.examinations?.[1]?.board || 'CBSE',
      twelfthPercentage: formData.examinations?.[1]?.percentage || '80',
      details: formData
    };

    const saved = submitApplication(applicationRecord);
    const newRecord = saved || { 
      applicationId: `IIFCCMS-2026-${Math.floor(1000 + Math.random() * 9000)}` 
    };

    setSubmittedApp({ ...newRecord, rawData: formData });
    setShowSuccessModal(true);
  };

  const handleDownloadSubmittedPdf = async () => {
    if (!finalPrintRef.current) return;
    setIsDownloading(true);
    try {
      const sanitizedName = (submittedApp?.rawData?.fullName || 'Candidate').replace(/[^a-zA-Z0-9]/g, '_');
      await downloadPdf(finalPrintRef.current, `IIF_Application_${sanitizedName}.pdf`);
    } catch (err) {
      console.error('Error downloading final application PDF:', err);
      alert('Could not download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="inner-page-root" style={{ background: 'var(--bg-light, #edffc8)', minHeight: '100vh' }}>
      <Navbar />
      <MarqueeAlert />

      {/* Off-screen Print Host for the Submitted Record */}
      {submittedApp && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            left: '-10000px',
            top: 0,
            width: '210mm',
            background: '#ffffff',
            zIndex: -9999,
            pointerEvents: 'none'
          }}
        >
          <div ref={finalPrintRef}>
            <ApplicationPrint data={{ ...submittedApp.rawData, applicationId: submittedApp.applicationId }} isDraft={false} />
          </div>
        </div>
      )}

      {/* Pop-up Modal on Successful Submission */}
      {showSuccessModal && (
        <div 
          className="no-print"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(6, 42, 54, 0.78)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            padding: '1.25rem'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowSuccessModal(false);
          }}
        >
          <div style={{
            background: '#ffffff',
            borderRadius: '22px',
            border: '2px solid #16a34a',
            boxShadow: '0 25px 65px rgba(0, 0, 0, 0.45)',
            maxWidth: '540px',
            width: '100%',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            {/* Close 'X' Button */}
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              aria-label="Close dialog"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              ✕
            </button>

            {/* Success Check Badge */}
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 0 10px rgba(22, 163, 74, 0.15)'
            }}>
              <CheckCircle2 size={46} />
            </div>

            <h3 style={{
              fontSize: '1.65rem',
              fontWeight: 900,
              color: '#062a36',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.25
            }}>
              Application Form Successfully Submitted!
            </h3>
            
            <p style={{
              fontSize: '0.92rem',
              color: '#475569',
              margin: '0 0 1.5rem 0',
              lineHeight: 1.5
            }}>
              Your application has been registered with the Admissions Secretariat of IIF College of Commerce &amp; Management Studies.
            </p>

            {/* Reference ID Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
              border: '1.5px solid #86efac',
              borderRadius: '12px',
              padding: '1.15rem 1.25rem',
              marginBottom: '1.75rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#047857',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.25rem'
              }}>
                Official Reference ID
              </div>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#062a36',
                letterSpacing: '0.03em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem'
              }}>
                <span>{submittedApp?.applicationId}</span>
                <button
                  type="button"
                  onClick={() => handleCopyId(submittedApp?.applicationId)}
                  title="Copy Reference ID"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '0.35rem 0.55rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#0d5c75'
                  }}
                >
                  {copiedId ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                  {copiedId ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div style={{
                marginTop: '0.5rem',
                fontSize: '0.85rem',
                color: '#334155',
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
                fontWeight: 600
              }}>
                <span>Candidate: <strong>{submittedApp?.rawData?.fullName || 'Registered Applicant'}</strong></span>
                <span>•</span>
                <span>Course: <strong>{submittedApp?.rawData?.programme}</strong></span>
              </div>
            </div>

            {/* Download Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={handleDownloadSubmittedPdf}
                disabled={isDownloading}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '1rem 1.5rem',
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  cursor: isDownloading ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  boxShadow: '0 6px 18px rgba(22, 163, 74, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Download size={20} /> {isDownloading ? 'Generating PDF...' : 'Download Application Form (PDF)'}
              </button>

              <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                * Contains only the official 2-page application dossier with college emblem &amp; details (no website header/footer).
              </p>

              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                style={{
                  background: '#f8fafc',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '0.65rem 1.25rem',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  marginTop: '0.25rem'
                }}
              >
                Close &amp; View Summary
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="container" style={{ padding: '2.5rem 1rem 5rem' }}>
        {/* Breadcrumb Header */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Link 
              to="/admissions" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                color: 'var(--primary-navy-dark, #062a36)', 
                fontWeight: 700, 
                textDecoration: 'none', 
                marginBottom: '0.5rem',
                fontSize: '0.9rem'
              }}
            >
              <ArrowLeft size={16} /> Back to Admissions
            </Link>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', margin: 0 }}>
              Online Admission Application Form
            </h1>
            <p style={{ color: 'var(--text-muted, #1e293b)', fontSize: '0.95rem', margin: '0.35rem 0 0' }}>
              IIF College of Commerce &amp; Management Studies (Affiliated to Chaudhary Charan Singh University)
            </p>
          </div>
        </div>

        {/* Confirmation Banner if Submitted */}
        {submittedApp && !showSuccessModal && (
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '2.5px solid #16a34a',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(22, 163, 74, 0.15)',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={46} />
            </div>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#062a36', marginBottom: '0.5rem' }}>
              Application Successfully Registered!
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Your formal undergraduate application has been registered with the Admissions Office. Keep a printed copy ready with your marksheet photocopies.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#f0fdf4', border: '1.5px solid #86efac', padding: '0.75rem 1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 800 }}>REFERENCE ID:</span>
              <strong style={{ fontSize: '1.35rem', color: '#062a36' }}>{submittedApp.applicationId}</strong>
            </div>
            <div>
              <button
                type="button"
                onClick={handleDownloadSubmittedPdf}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.85rem 1.75rem',
                  fontWeight: 900,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 18px rgba(22, 163, 74, 0.35)'
                }}
              >
                <Download size={18} /> Download Application Form (PDF)
              </button>
            </div>
          </div>
        )}

        {/* 7-Step Interactive Application Wizard */}
        <ApplicationWizard onFinalSubmit={handleFinalSubmit} />
      </div>

      <Footer />
    </div>
  );
}
