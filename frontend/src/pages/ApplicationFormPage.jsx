import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle2, ArrowLeft, Upload, FileText, 
  Send, ShieldCheck, User, BookOpen, CreditCard, Award, 
  MapPin, Phone, Mail, Sparkles, Printer, Download, Copy
} from 'lucide-react';
import { iifccmsLogo, ccsuLogo } from '../assets/assetImages';

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const { submitApplication } = useApp();
  const [submittedApp, setSubmittedApp] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const handlePrintDraft = () => {
    const originalTitle = document.title;
    document.title = `IIFCCMS-Application-Draft`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handlePrintFilled = () => {
    const originalTitle = document.title;
    const appId = submittedApp?.applicationId || '2026';
    document.title = `IIFCCMS-Application-Form-${appId}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleCopyId = (id) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  // Form State
  const [formData, setFormData] = useState({
    programme: 'BBA',
    candidateTitle: 'Mr.',
    fullName: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    nationality: 'Indian',
    maritalStatus: 'Unmarried',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    age: '',
    gender: 'Male',
    email: '',
    phone: '',
    alternatePhone: '',
    mailingAddress: '',
    permanentAddress: '',
    sameAsMailing: false,
    
    // Academic Records
    board10: '',
    year10: '',
    division10: '',
    percent10: '',
    
    board12: '',
    year12: '',
    division12: '',
    percent12: '',
    
    boardOther: '',
    yearOther: '',
    divisionOther: '',
    percentOther: '',

    // Occupation
    isEmployed: false,
    employerName: '',
    designation: '',
    servicePeriod: '',

    // Entrance Exam
    entranceExam: 'DIRECT',
    examRollNo: '',
    examScore: '',

    // Payment details
    paymentMode: 'ONLINE',
    paymentDate: '',
    bankName: '',
    txnRefNumber: '',
    amountPaid: '1000',

    // Identity & Category
    aadharNumber: '',
    category: 'GEN',
    isSponsored: 'No',

    // Weightage
    weightage: [],

    // Additional Qualitative Fields
    extracurricular: '',
    awards: '',
    statementOfPurpose: '',
    additionalInfo: '',
    ref1Name: '',
    ref1Contact: '',
    ref2Name: '',
    ref2Contact: '',

    // Agreement
    declarationAccepted: false,
    applicantSignature: '',
    declarationDate: new Date().toISOString().split('T')[0]
  });

  const weightageOptions = [
    "Certificate of Sports (IOA / SAI / AIU) at Intermediate Level",
    "Ward of University / Affiliated College Staff",
    "NCC C or G-II Certificate",
    "NCC B or G-I Certificate",
    "NSS (Who has worked 240 days and attended 2 Camps of 7 / 10 Days)",
    "NSS (Who has worked 240 days and attended 1 Camp of 7 / 10 Days)",
    "NSS (Who has worked 240 days or 120 days and attended 1 Special Camp)",
    "Scouting & Ranger / Rover (Awarded Second Grade / Dhruvpad in Exam)",
    "Scouting & Ranger / Rover (Awarded Third Grade / Gurupad in Exam)",
    "Scouting & Ranger / Rover (Awarded by Governor / Expert in Exam)",
    "Scouting & Ranger / Rover (Awarded by President of India)"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'weightage') {
      setFormData(prev => {
        const nextList = checked 
          ? [...prev.weightage, value]
          : prev.weightage.filter(item => item !== value);
        return { ...prev, weightage: nextList };
      });
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSameAddress = (e) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      sameAsMailing: checked,
      permanentAddress: checked ? prev.mailingAddress : prev.permanentAddress
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please provide the candidate full name, valid email, and contact number.");
      return;
    }
    if (!formData.declarationAccepted) {
      alert("Please review and accept the student declaration before submitting.");
      return;
    }

    const applicationRecord = {
      fullName: formData.fullName.toUpperCase(),
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      category: formData.category,
      courseCode: formData.programme,
      twelfthBoard: formData.board12 || 'CBSE',
      twelfthPercentage: formData.percent12 || '80',
      details: formData
    };

    const saved = submitApplication(applicationRecord);
    const newRecord = saved || { applicationId: `IIFCCMS-2026-${Math.floor(1000 + Math.random() * 9000)}` };
    setSubmittedApp(newRecord);
    setShowSuccessModal(true);
  };

  return (
    <div className="inner-page-root" style={{ background: '#C1E1C1' }}>
      <Navbar />
      <MarqueeAlert />

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
            maxWidth: '520px',
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

            {/* Pop-up Message */}
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
              fontSize: '0.95rem',
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
              padding: '1rem 1.25rem',
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
                fontSize: '1.65rem',
                fontWeight: 900,
                color: '#062a36',
                letterSpacing: '0.03em'
              }}>
                {submittedApp?.applicationId}
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
                <span>Candidate: <strong>{formData.fullName || 'Registered Applicant'}</strong></span>
                <span>•</span>
                <span>Course: <strong>{formData.programme}</strong></span>
              </div>
            </div>

            {/* Download Application Form Button Right Below Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={handlePrintFilled}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '1rem 1.5rem',
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  boxShadow: '0 6px 18px rgba(22, 163, 74, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Download size={20} /> Download Application Form (PDF)
              </button>

              <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                * Downloads only the official 2-page application dossier with college emblem &amp; details.
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

      <div className="container" style={{ padding: '2.5rem 1rem 5rem' }}>
        {/* Breadcrumb header */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Link to="/admissions" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#062a36', fontWeight: 700, textDecoration: 'none', marginBottom: '0.5rem' }}>
              <ArrowLeft size={16} /> Back to Admissions
            </Link>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#062a36', margin: 0 }}>
              Online Admission Application
            </h1>
            <p style={{ color: '#1e293b', fontSize: '0.95rem', margin: '0.35rem 0 0' }}>
              Official Regular Undergraduate Registration Form
            </p>
          </div>
        </div>

        {/* Massive Submission Confirmation Card */}
        {submittedApp ? (
          <div className="no-print" style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '3px solid #16a34a',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(22, 163, 74, 0.15)',
            maxWidth: '850px',
            margin: '2rem auto'
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 0 12px rgba(22, 163, 74, 0.12)'
            }}>
              <CheckCircle2 size={56} />
            </div>

            <div style={{
              display: 'inline-block',
              background: '#dcfce7',
              color: '#15803d',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              Admission Registry Confirmed
            </div>

            <h2 style={{ color: '#062a36', fontSize: '2.25rem', fontWeight: 900, marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Application Successfully Submitted!
            </h2>
            <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              Your formal undergraduate application has been registered with the Admissions Secretariat of IIF College of Commerce &amp; Management Studies.
            </p>

            {/* Massive Reference ID Highlight Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
              border: '2px solid #86efac',
              borderRadius: '16px',
              padding: '1.75rem 2rem',
              maxWidth: '560px',
              margin: '0 auto 2.25rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Official Reference ID
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2rem', color: '#062a36', fontWeight: 900, letterSpacing: '0.04em' }}>
                  {submittedApp.applicationId}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyId(submittedApp.applicationId)}
                  title="Copy Reference ID"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '0.4rem 0.65rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#0d5c75'
                  }}
                >
                  <Copy size={14} /> {copiedId ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'left', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Candidate: </span>
                  <strong style={{ color: '#0f172a' }}>{formData.fullName || 'Registered Applicant'}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Programme: </span>
                  <strong style={{ color: '#0f172a' }}>{formData.programme}</strong>
                </div>
              </div>
            </div>

            {/* Instruction Notice */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              textAlign: 'left',
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: '#334155'
            }}>
              <strong style={{ color: '#062a36', display: 'block', marginBottom: '0.3rem' }}>
                Important Instructions:
              </strong>
              Download and save a copy of this registered application. Keep a physical printout ready with your self-attested academic marksheets for counseling verification at the campus Admissions Office.
            </div>

            {/* User Next Steps Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={handlePrintFilled}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '1rem 2.5rem',
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  boxShadow: '0 6px 20px rgba(22, 163, 74, 0.35)'
                }}
              >
                <Download size={20} /> Download / Print Filled Application (PDF)
              </button>

              <button 
                type="button" 
                onClick={() => setSubmittedApp(null)}
                style={{
                  background: '#ffffff',
                  color: '#062a36',
                  border: '2px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '1rem 2rem',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                Submit Another Application
              </button>
            </div>
          </div>
        ) : (
          /* Institutional Physical-Style Application Card */
          <form onSubmit={handleSubmit} style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #cbd5e1',
            boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            {/* Form Institutional Header */}
            <div style={{
              borderBottom: '2px solid #062a36',
              padding: '2rem 2.5rem',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <img 
                  src={iifccmsLogo} 
                  alt="IIFCCMS Official College Logo" 
                  style={{
                    width: '72px',
                    height: '72px',
                    objectFit: 'contain',
                    borderRadius: '50%',
                    border: '2px solid #dfb235',
                    padding: '2px',
                    background: '#ffffff'
                  }}
                />
                <img 
                  src={ccsuLogo} 
                  alt="CCS University Meerut Logo" 
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{ flex: '1', minWidth: '280px' }}>
                  <h2 style={{ margin: 0, fontSize: '1.55rem', fontWeight: 900, color: '#062a36', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    IIF College of Commerce &amp; Management Studies
                  </h2>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.95rem', color: '#0d5c75', fontWeight: 700 }}>
                    (Affiliated to Chaudhary Charan Singh University, Meerut)
                  </p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569' }}>
                    45 A, Knowledge Park III, Greater Noida 201308, NCR Delhi
                  </p>
                  <div style={{ marginTop: '0.65rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                      Enrollment No. [For Office Record]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem 2.5rem' }}>
              {/* Section 1: Programme Selection */}
              <div style={{ marginBottom: '2rem', background: '#f8fafc', padding: '1.25rem 1.5rem', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 900, color: '#062a36', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  Regular Undergraduate Programme(s) Applied For:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    background: formData.programme === 'BBA' ? '#e0f2fe' : '#ffffff',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: formData.programme === 'BBA' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    cursor: 'pointer'
                  }}>
                    <input 
                      type="radio" 
                      name="programme" 
                      value="BBA" 
                      checked={formData.programme === 'BBA'} 
                      onChange={handleInputChange} 
                    />
                    <div>
                      <div style={{ fontWeight: 800, color: '#062a36', fontSize: '0.95rem' }}>Bachelor of Business Administration (BBA)</div>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    background: formData.programme === 'B.Com' ? '#e0f2fe' : '#ffffff',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: formData.programme === 'B.Com' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    cursor: 'pointer'
                  }}>
                    <input 
                      type="radio" 
                      name="programme" 
                      value="B.Com" 
                      checked={formData.programme === 'B.Com'} 
                      onChange={handleInputChange} 
                    />
                    <div>
                      <div style={{ fontWeight: 800, color: '#062a36', fontSize: '0.95rem' }}>Bachelor of Commerce (B.Com)</div>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    background: formData.programme === 'B.A' ? '#e0f2fe' : '#ffffff',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: formData.programme === 'B.A' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    cursor: 'pointer'
                  }}>
                    <input 
                      type="radio" 
                      name="programme" 
                      value="B.A" 
                      checked={formData.programme === 'B.A'} 
                      onChange={handleInputChange} 
                    />
                    <div>
                      <div style={{ fontWeight: 800, color: '#062a36', fontSize: '0.95rem' }}>Bachelor of Arts (B.A)</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Section 2: Personal Particulars */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#062a36', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                  1. Candidate &amp; Family Particulars
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Candidate Full Name (In Capital Letters) *
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <select 
                        name="candidateTitle" 
                        value={formData.candidateTitle} 
                        onChange={handleInputChange}
                        style={{ width: '85px', padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontWeight: 700 }}
                      >
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                      </select>
                      <input 
                        type="text" 
                        name="fullName" 
                        required
                        placeholder="ENTER FULL NAME" 
                        value={formData.fullName} 
                        onChange={handleInputChange}
                        style={{ flex: 1, padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontWeight: 600, textTransform: 'uppercase' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Father's / Husband's Name &amp; Designation
                    </label>
                    <input 
                      type="text" 
                      name="fatherName" 
                      placeholder="Father's / Husband's Name" 
                      value={formData.fatherName} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Mother's Name &amp; Profession
                    </label>
                    <input 
                      type="text" 
                      name="motherName" 
                      placeholder="Mother's Name" 
                      value={formData.motherName} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Date of Birth (Day / Month / Year)
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr 1fr', gap: '0.5rem' }}>
                      <input type="number" name="dobDay" placeholder="DD" min="1" max="31" value={formData.dobDay} onChange={handleInputChange} style={{ padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', textAlign: 'center' }} />
                      <input type="number" name="dobMonth" placeholder="MM" min="1" max="12" value={formData.dobMonth} onChange={handleInputChange} style={{ padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', textAlign: 'center' }} />
                      <input type="number" name="dobYear" placeholder="YYYY" min="1980" max="2015" value={formData.dobYear} onChange={handleInputChange} style={{ padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', textAlign: 'center' }} />
                      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} style={{ padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', textAlign: 'center' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Nationality &amp; Marital Status
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.5rem' }}>
                      <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} style={{ padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }} />
                      <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} style={{ padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}>
                        <option>Unmarried</option>
                        <option>Married</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Aadhar Card Number (12 Digits)
                    </label>
                    <input 
                      type="text" 
                      name="aadharNumber" 
                      maxLength="12" 
                      placeholder="12-digit UIDAI Number" 
                      value={formData.aadharNumber} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>
                </div>

                {/* Contact and Addresses */}
                <div style={{ marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      placeholder="student@example.com" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Mobile Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      placeholder="+91 98XXXXXXXX" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Office / Alternate Contact Phone
                    </label>
                    <input 
                      type="tel" 
                      name="alternatePhone" 
                      placeholder="Landline / Alternate Mobile" 
                      value={formData.alternatePhone} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Mailing Address (In Capitals)
                    </label>
                    <textarea 
                      name="mailingAddress" 
                      rows="3" 
                      placeholder="House No, Street, City, State, PIN"
                      value={formData.mailingAddress} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e293b' }}>
                        Permanent Address
                      </label>
                      <label style={{ fontSize: '0.75rem', color: '#0d5c75', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
                        <input type="checkbox" checked={formData.sameAsMailing} onChange={handleSameAddress} />
                        Same as mailing
                      </label>
                    </div>
                    <textarea 
                      name="permanentAddress" 
                      rows="3" 
                      placeholder="Permanent Residence Address"
                      value={formData.permanentAddress} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Academic Qualifications Table */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#062a36', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                  2. Academic Qualifications (Examinations Passed)
                </h3>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                    <thead>
                      <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                        <th style={{ padding: '0.75rem', fontSize: '0.85rem', fontWeight: 800, color: '#062a36' }}>Examination</th>
                        <th style={{ padding: '0.75rem', fontSize: '0.85rem', fontWeight: 800, color: '#062a36' }}>Board / School</th>
                        <th style={{ padding: '0.75rem', fontSize: '0.85rem', fontWeight: 800, color: '#062a36', width: '110px' }}>Passing Year</th>
                        <th style={{ padding: '0.75rem', fontSize: '0.85rem', fontWeight: 800, color: '#062a36', width: '110px' }}>Division / Rank</th>
                        <th style={{ padding: '0.75rem', fontSize: '0.85rem', fontWeight: 800, color: '#062a36', width: '110px' }}>Percentage (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '0.65rem 0.75rem', fontWeight: 700, color: '#1e293b' }}>10th (Secondary)</td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="board10" placeholder="e.g. CBSE / ICSE / State Board" value={formData.board10} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="year10" placeholder="YYYY" value={formData.year10} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="division10" placeholder="1st / 2nd" value={formData.division10} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="percent10" placeholder="%" value={formData.percent10} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                      </tr>

                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '0.65rem 0.75rem', fontWeight: 700, color: '#1e293b' }}>12th (Sr. Secondary)</td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="board12" placeholder="e.g. CBSE / UP Board / ISC" value={formData.board12} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="year12" placeholder="YYYY" value={formData.year12} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="division12" placeholder="1st / 2nd" value={formData.division12} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="percent12" placeholder="%" value={formData.percent12} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                      </tr>

                      <tr>
                        <td style={{ padding: '0.65rem 0.75rem', fontWeight: 700, color: '#1e293b' }}>Other Exam / Diploma</td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="boardOther" placeholder="Optional" value={formData.boardOther} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="yearOther" placeholder="YYYY" value={formData.yearOther} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="divisionOther" placeholder="Div" value={formData.divisionOther} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                        <td style={{ padding: '0.65rem 0.75rem' }}>
                          <input type="text" name="percentOther" placeholder="%" value={formData.percentOther} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 10. Occupation & 11. Written Examination */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', border: '1.5px solid #cbd5e1' }}>
                  <h4 style={{ margin: '0 0 0.85rem 0', fontSize: '0.95rem', fontWeight: 800, color: '#062a36' }}>
                    10. Occupation (If employed, state details)
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Name of Employer(s)</label>
                      <input type="text" name="employerName" placeholder="Company / Organization name" value={formData.employerName} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Designation</label>
                        <input type="text" name="designation" placeholder="Job Title" value={formData.designation} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Period of Service</label>
                        <input type="text" name="servicePeriod" placeholder="e.g. 1 Year / 6 Months" value={formData.servicePeriod} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', border: '1.5px solid #cbd5e1' }}>
                  <h4 style={{ margin: '0 0 0.85rem 0', fontSize: '0.95rem', fontWeight: 800, color: '#062a36' }}>
                    11. Written Exam / Entrance Pathway
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Pathway</label>
                      <select name="entranceExam" value={formData.entranceExam} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
                        <option value="DIRECT">Direct Admission (12th Merit / CCSU Criteria)</option>
                        <option value="AIMA_UGAT">AIMA (UGAT)</option>
                        <option value="AIMS_UGAT">AIMS (UGAT)</option>
                        <option value="CUET">CUET-UG Score</option>
                      </select>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Roll / Registration No.</label>
                        <input type="text" name="examRollNo" placeholder="If applicable" value={formData.examRollNo} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Score / Percentile</label>
                        <input type="text" name="examScore" placeholder="Score / Div" value={formData.examScore} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Remittance, Categories & Weightage */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                {/* Left: Remittance & Category */}
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#062a36', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                    3. Fee Remittance &amp; Reservation Details
                  </h3>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.4rem' }}>
                      Reservation Category
                    </label>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {['GEN', 'OBC', 'SC', 'ST'].map(cat => (
                        <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 700, color: '#062a36' }}>
                          <input type="radio" name="category" value={cat} checked={formData.category === cat} onChange={handleInputChange} />
                          {cat}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.4rem' }}>
                      Apply under Sponsored (Self / NRI / Corporate) or Foreign Category?
                    </label>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                        <input type="radio" name="isSponsored" value="Yes" checked={formData.isSponsored === 'Yes'} onChange={handleInputChange} /> Yes
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                        <input type="radio" name="isSponsored" value="No" checked={formData.isSponsored === 'No'} onChange={handleInputChange} /> No
                      </label>
                    </div>
                  </div>

                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                    <h4 style={{ margin: '0 0 0.65rem 0', fontSize: '0.9rem', fontWeight: 800, color: '#0d5c75' }}>
                      Remittance Details (Application Fee: ₹1,000)
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Mode</label>
                        <select name="paymentMode" value={formData.paymentMode} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
                          <option>Online (UPI / NetBanking)</option>
                          <option>Demand Draft (DD)</option>
                          <option>Bank Cash Deposit</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Payment Date</label>
                        <input type="date" name="paymentDate" value={formData.paymentDate} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Bank / Branch / Portal</label>
                        <input type="text" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Txn Ref / UTR / DD No.</label>
                        <input type="text" name="txnRefNumber" placeholder="Reference Number" value={formData.txnRefNumber} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Weightage Claimed Checkboxes */}
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#062a36', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                    4. Weightage Claimed (Kindly Check)
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {weightageOptions.map((opt, oIdx) => (
                      <label key={oIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.85rem',
                        lineHeight: 1.4,
                        color: '#334155',
                        background: '#f8fafc',
                        padding: '0.55rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        cursor: 'pointer'
                      }}>
                        <input 
                          type="checkbox" 
                          name="weightage" 
                          value={opt} 
                          checked={formData.weightage.includes(opt)} 
                          onChange={handleInputChange}
                          style={{ marginTop: '0.2rem' }}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 5: Extracurricular, SOP & References */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#062a36', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                  5. Additional Profile Details &amp; References
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Major Extracurricular Activities
                    </label>
                    <textarea 
                      name="extracurricular" 
                      rows="2" 
                      placeholder="Sports, debates, cultural, community initiatives..." 
                      value={formData.extracurricular} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                      Distinctions and Awards
                    </label>
                    <textarea 
                      name="awards" 
                      rows="2" 
                      placeholder="Academic merit awards, scholarship recognitions..." 
                      value={formData.awards} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                    Why do you wish to join this programme? (Approx. 100 words)
                  </label>
                  <textarea 
                    name="statementOfPurpose" 
                    rows="3" 
                    placeholder="Briefly describe your career aspiration, intellectual interests, and why you selected IIFCCMS..." 
                    value={formData.statementOfPurpose} 
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}
                  />
                </div>

                {/* References */}
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', border: '1.5px solid #cbd5e1' }}>
                  <h4 style={{ margin: '0 0 0.85rem 0', fontSize: '0.92rem', fontWeight: 800, color: '#062a36' }}>
                    Two Academic / Professional References:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Reference 1 (Teacher / Mentor / Employer)</label>
                      <input type="text" name="ref1Name" placeholder="Name & Designation" value={formData.ref1Name} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1', marginBottom: '0.4rem' }} />
                      <input type="text" name="ref1Contact" placeholder="Institution & Phone / Email" value={formData.ref1Contact} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>Reference 2 (Teacher / Mentor / Employer)</label>
                      <input type="text" name="ref2Name" placeholder="Name & Designation" value={formData.ref2Name} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1', marginBottom: '0.4rem' }} />
                      <input type="text" name="ref2Contact" placeholder="Institution & Phone / Email" value={formData.ref2Contact} onChange={handleInputChange} style={{ width: '100%', padding: '0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Student Declaration */}
              <div style={{
                background: '#fffbeb',
                border: '2px solid #fde68a',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#78350f', margin: '0 0 0.75rem 0' }}>
                  Student Declaration &amp; Undertaking
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#451a03', margin: '0 0 1rem 0' }}>
                  I declare that all information provided by me in this application form is true, correct, and complete to the best of my knowledge. I agree to abide by the rules, regulations, code of conduct, and minimum 75% attendance policy established by the College and Chaudhary Charan Singh University. I understand that provisional admission is subject to document verification and statutory university compliance.
                </p>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 800, color: '#78350f', cursor: 'pointer', marginBottom: '1.25rem' }}>
                  <input 
                    type="checkbox" 
                    name="declarationAccepted" 
                    checked={formData.declarationAccepted} 
                    onChange={handleInputChange} 
                  />
                  <span>I agree and accept the Student Declaration terms and institutional regulations *</span>
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#78350f', marginBottom: '0.35rem' }}>
                      Digital Signature (Type Full Legal Name) *
                    </label>
                    <input 
                      type="text" 
                      name="applicantSignature" 
                      placeholder="Type your full name as digital signature" 
                      value={formData.applicantSignature} 
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #f59e0b', fontWeight: 700 }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#78350f', marginBottom: '0.35rem' }}>
                      Submission Date
                    </label>
                    <input 
                      type="text" 
                      readOnly 
                      value={formData.declarationDate} 
                      style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1.5px solid #cbd5e1', background: '#f8fafc', color: '#64748b' }}
                    />
                  </div>
                </div>
              </div>

              {/* Form Submit Controls */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  onClick={handlePrintDraft}
                  className="no-print"
                  style={{
                    background: '#ffffff',
                    color: '#062a36',
                    border: '2px solid #062a36',
                    borderRadius: '8px',
                    padding: '0.85rem 1.85rem',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  <Printer size={18} /> Print Draft Application
                </button>

                <button 
                  type="submit" 
                  className="no-print"
                  style={{
                    background: '#062a36',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.85rem 2.5rem',
                    fontWeight: 900,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(6, 42, 54, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Send size={18} /> Submit Application Online
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* ======================================================================
          OFFICIAL PRINT-ONLY ADMISSION FORM (ACTIVE IN PRINT/PDF, HIDDEN ON SCREEN)
          ====================================================================== */}
      <div id="printable-admission-form">
        {/* PAGE 1 */}
        <div className="print-page" style={{ pageBreakAfter: 'always', padding: '6mm 8mm' }}>
          {/* Header Box */}
          <div style={{ border: '2px solid #000', padding: '8px 12px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <img 
                  src={iifccmsLogo} 
                  alt="IIFCCMS Official Logo" 
                  style={{ width: '56px', height: '56px', objectFit: 'contain', borderRadius: '50%', border: '1px solid #000' }} 
                />
                <img 
                  src={ccsuLogo} 
                  alt="CCS University Logo" 
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ textAlign: 'center', flex: 1, padding: '0 8px' }}>
                <div style={{ fontSize: '15pt', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#000' }}>
                  IIF College of Commerce &amp; Management Studies
                </div>
                <div style={{ fontSize: '9pt', fontStyle: 'italic', fontWeight: 600 }}>
                  (Affiliated to Chaudhary Charan Singh University)
                </div>
                <div style={{ fontSize: '8.5pt' }}>
                  45 A, Knowledge Park III, Greater Noida 201308, NCR Delhi
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, fontSize: '8pt', borderLeft: '1px solid #000', paddingLeft: '8px' }}>
                <div>Enrollment / Ref No.</div>
                <div style={{ fontWeight: 800, fontSize: '9.5pt', border: '1px solid #000', padding: '2px 6px', marginTop: '2px' }}>
                  {submittedApp?.applicationId || 'DRAFT REGISTRATION'}
                </div>
                <div style={{ fontSize: '7pt', color: '#555', marginTop: '2px' }}>[ For Office Use Only ]</div>
              </div>
            </div>

            {/* Programme Selection Strip */}
            <div style={{ borderTop: '1px solid #000', marginTop: '6px', paddingTop: '4px', fontSize: '8.5pt' }}>
              <strong>Regular Under Graduate Programme(s) :</strong> &nbsp;
              <span>[{formData.programme === 'BBA' ? '✔' : ' '}] 1. Bachelor of Business Administration (BBA)</span> &nbsp;&nbsp;
              <span>[{formData.programme === 'B.Com' ? '✔' : ' '}] 2. Bachelor of Commerce (B.Com)</span> &nbsp;&nbsp;
              <span>[{formData.programme === 'BA' ? '✔' : ' '}] 3. Bachelor of Arts (B.A)</span>
            </div>
          </div>

          <div style={{ fontSize: '7.5pt', fontStyle: 'italic', marginBottom: '4px' }}>
            * Please read the instructions before submitting the application form.
          </div>

          {/* Body: Left Form Grid & Right Weightage / Photo Box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: '8px' }}>
            {/* Left Column Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8pt', border: '1px solid #000' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ width: '28%', padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    1. Name (In Capitals):
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    {formData.candidateTitle} {formData.fullName || '__________________________________'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    2. Father's / Husband's Details:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    {formData.fatherName || '________________'} | Designation: {formData.fatherOccupation || 'N/A'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    3. Mother's Details:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    {formData.motherName || '________________'} | Profession: {formData.motherOccupation || 'N/A'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    4. Nationality &amp; Status:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    Nationality: {formData.nationality || 'Indian'} &nbsp;|&nbsp; Marital: {formData.maritalStatus || 'Unmarried'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    5. Date of Birth &amp; Age:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    DOB: {formData.dobDay || '__'}/{formData.dobMonth || '__'}/{formData.dobYear || '____'} &nbsp;|&nbsp; Age: {formData.age || '__'} Yrs &nbsp;|&nbsp; Gender: {formData.gender}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    6. Mailing Address:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    {formData.mailingAddress || '________________________________________________'} <br />
                    Mobile: {formData.phone || '__________'} &nbsp;|&nbsp; Email: {formData.email || '__________'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    7. Permanent Address:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    {formData.permanentAddress || '________________________________________________'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td colSpan="2" style={{ padding: '4px', fontWeight: 'bold', background: '#f0f0f0' }}>
                    8. Examinations Passed (Academic Qualifications):
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td colSpan="2" style={{ padding: '0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '7.5pt' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #000', background: '#fafafa' }}>
                          <th style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'left' }}>Exam</th>
                          <th style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'left' }}>Board / School</th>
                          <th style={{ borderRight: '1px solid #000', padding: '2px 4px', width: '45px' }}>Year</th>
                          <th style={{ borderRight: '1px solid #000', padding: '2px 4px', width: '45px' }}>Div</th>
                          <th style={{ padding: '2px 4px', width: '45px' }}>%</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #ccc' }}>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>10th</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px' }}>{formData.board10 || '—'}</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>{formData.year10 || '—'}</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>{formData.division10 || '—'}</td>
                          <td style={{ padding: '2px 4px', textAlign: 'center' }}>{formData.percent10 ? `${formData.percent10}%` : '—'}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #ccc' }}>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>12th</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px' }}>{formData.board12 || '—'}</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>{formData.year12 || '—'}</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>{formData.division12 || '—'}</td>
                          <td style={{ padding: '2px 4px', textAlign: 'center' }}>{formData.percent12 ? `${formData.percent12}%` : '—'}</td>
                        </tr>
                        <tr>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>Other</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px' }}>{formData.boardOther || '—'}</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>{formData.yearOther || '—'}</td>
                          <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>{formData.divisionOther || '—'}</td>
                          <td style={{ padding: '2px 4px', textAlign: 'center' }}>{formData.percentOther ? `${formData.percentOther}%` : '—'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    9. Occupation (If employed):
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    {formData.employerName ? `${formData.employerName} | ${formData.designation} (${formData.servicePeriod})` : 'N/A'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    10. Entrance / Pathway:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    Exam: {formData.entranceExam} &nbsp;|&nbsp; Roll: {formData.examRollNo || 'N/A'} &nbsp;|&nbsp; Score: {formData.examScore || 'N/A'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    11. Fee Remittance:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    Mode: {formData.paymentMode} | Bank: {formData.bankName || 'N/A'} | Ref: {formData.txnRefNumber || 'N/A'} | Date: {formData.paymentDate || '—'}
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #000' }}>
                  <td style={{ padding: '3px 5px', fontWeight: 'bold', borderRight: '1px solid #000' }}>
                    12. Aadhar &amp; Category:
                  </td>
                  <td style={{ padding: '3px 5px' }}>
                    Aadhar: {formData.aadharNumber || '—'} &nbsp;|&nbsp; Category: [{formData.category}] &nbsp;|&nbsp; Sponsored: {formData.isSponsored}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Right Column: Photo Box + Weightage Claimed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {/* Photo Box */}
              <div style={{
                border: '1px dashed #000',
                height: '115px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '7.5pt',
                color: '#333',
                padding: '4px'
              }}>
                Affix latest passport size photograph here
              </div>

              {/* Weightage Claimed Box */}
              <div style={{ border: '1px solid #000', padding: '4px', flex: 1, fontSize: '6.8pt' }}>
                <div style={{ fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '3px' }}>
                  WEIGHTAGE CLAIMED (Kindly Tick)
                </div>
                {weightageOptions.map((opt, wIdx) => {
                  const isChecked = formData.weightage.includes(opt);
                  return (
                    <div key={wIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '3px', marginBottom: '2px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '7pt' }}>[{isChecked ? '✔' : ' '}]</span>
                      <span style={{ lineHeight: 1.15 }}>{opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Signature Line Page 1 */}
          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '8pt', paddingTop: '8px', borderTop: '1px solid #000' }}>
            <div>Date: {formData.declarationDate}</div>
            <div>Signature of the Candidate: ___________________________</div>
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="print-page print-page-break" style={{ pageBreakBefore: 'always', padding: '6mm 8mm' }}>
          <div style={{ textAlign: 'center', borderBottom: '1.5px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            <strong style={{ fontSize: '11pt', textTransform: 'uppercase' }}>IIF College of Commerce &amp; Management Studies</strong>
            <div style={{ fontSize: '8pt', fontStyle: 'italic' }}>Official Application Dossier • Supplementary Details (Page 2)</div>
          </div>

          <div style={{ border: '1px solid #000', marginBottom: '8px', padding: '6px', fontSize: '8pt' }}>
            <strong>14. Major Extracurricular Activities :</strong>
            <div style={{ minHeight: '38px', marginTop: '3px', fontStyle: formData.extracurricular ? 'normal' : 'italic', color: formData.extracurricular ? '#000' : '#666' }}>
              {formData.extracurricular || '(None reported / Fill on separate sheet if space is insufficient)'}
            </div>
          </div>

          <div style={{ border: '1px solid #000', marginBottom: '8px', padding: '6px', fontSize: '8pt' }}>
            <strong>15. Distinctions and Awards :</strong>
            <div style={{ minHeight: '38px', marginTop: '3px', fontStyle: formData.awards ? 'normal' : 'italic', color: formData.awards ? '#000' : '#666' }}>
              {formData.awards || '(None reported / Fill on separate sheet if space is insufficient)'}
            </div>
          </div>

          <div style={{ border: '1px solid #000', marginBottom: '8px', padding: '6px', fontSize: '8pt' }}>
            <strong>16. Why do you wish to join this programme ? (100 words) :</strong>
            <div style={{ minHeight: '52px', marginTop: '3px', lineHeight: 1.35 }}>
              {formData.statementOfPurpose || 'To acquire foundational knowledge in commerce, business governance, and managerial competencies under the academic guidance of IIFCCMS core faculty.'}
            </div>
          </div>

          <div style={{ border: '1px solid #000', marginBottom: '8px', padding: '6px', fontSize: '8pt' }}>
            <strong>17. Any additional information you wish to furnish :</strong>
            <div style={{ minHeight: '32px', marginTop: '3px', fontStyle: formData.additionalInfo ? 'normal' : 'italic', color: formData.additionalInfo ? '#000' : '#666' }}>
              {formData.additionalInfo || 'All certificates and marksheets presented for evaluation are authentic and verified.'}
            </div>
          </div>

          <div style={{ border: '1px solid #000', marginBottom: '8px', padding: '6px', fontSize: '8pt' }}>
            <strong>20. References (Two reference contacts from Professor / Employer) :</strong>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px' }}>
              <div style={{ border: '1px dashed #666', padding: '4px' }}>
                <strong>1.</strong> {formData.ref1Name || 'Name & Designation'} <br />
                Contact: {formData.ref1Contact || 'Institution / Phone / Email'}
              </div>
              <div style={{ border: '1px dashed #666', padding: '4px' }}>
                <strong>2.</strong> {formData.ref2Name || 'Name & Designation'} <br />
                Contact: {formData.ref2Contact || 'Institution / Phone / Email'}
              </div>
            </div>
          </div>

          {/* Student Undertaking Box */}
          <div style={{ border: '1.5px solid #000', padding: '8px', marginTop: '12px', fontSize: '7.8pt', background: '#fafafa' }}>
            <div style={{ fontWeight: 'bold', textDecoration: 'underline', marginBottom: '4px' }}>
              Students Declaration :
            </div>
            <p style={{ margin: '0 0 6px 0', lineHeight: 1.45, textAlign: 'justify' }}>
              I declare that all information given by me in the application form is true and correct. I agree to deposit the prescribed institutional fees and adhere to the admission regulations and academic policies of the college. I agree to any code of conduct formulated by the College Principal and Management. I undertake to maintain a minimum attendance of 75% in classes failing which the college reserves the right to debar me from examinations or cancel admission.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px' }}>
              <div>
                Date: <strong>{formData.declarationDate}</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', fontSize: '9pt' }}>
                  {formData.applicantSignature || '__________________________________'}
                </div>
                <div style={{ fontSize: '7pt', color: '#555' }}>(Signatures of the Student)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
