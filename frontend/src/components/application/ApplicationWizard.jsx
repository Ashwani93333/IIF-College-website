import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, ArrowLeft, ArrowRight, 
  Download, Upload, AlertCircle, FileText, 
  Trash2, Plus, Check, User, 
  GraduationCap, Mail, CreditCard, Award
} from 'lucide-react';
import SignaturePad from './SignaturePad';
import ApplicationPrint, { WEIGHTAGE_OPTIONS } from './ApplicationPrint';
import { downloadPdf, generatePdfBlob } from '../../utils/pdfGenerator';



const STEPS = [
  { id: 1, title: 'Programme & Session', short: 'Programme', icon: GraduationCap },
  { id: 2, title: 'Personal Details', short: 'Personal', icon: User },
  { id: 3, title: 'Contact Information', short: 'Contact', icon: Mail },
  { id: 4, title: 'Academics & Work', short: 'Academics', icon: FileText },
  { id: 5, title: 'Fee, ID & Category', short: 'Category & Fee', icon: CreditCard },
  { id: 6, title: 'Part B (Qualitative)', short: 'Part B', icon: Award },
  { id: 7, title: 'Review & Declaration', short: 'Review & Submit', icon: CheckCircle2 }
];

export const INITIAL_FORM_DATA = {
  academicSession: '2026 – 2027',
  programme: 'BBA', // 'BBA' | 'B.Com' | 'B.A.'
  writtenExam: 'DIRECT', // 'AIMA (UGAT)' | 'AIMS (UGAT)' | 'DIRECT'
  examRollNo: '',
  examScore: '',

  // Personal
  photoUrl: '',
  candidateTitle: 'Mr.',
  fullName: '',
  fatherName: '',
  fatherDesignation: '',
  fatherAddress: '',
  motherName: '',
  motherProfession: '',
  nationality: 'Indian',
  maritalStatus: 'Unmarried',
  dob: '',
  age: '',
  gender: 'Male',

  // Contact
  mailingAddress: '',
  permanentAddress: '',
  sameAsMailing: false,
  email: '',
  mobile: '',
  alternatePhone: '',

  // Academics
  examinations: [
    { exam: '10th / Secondary', board: 'CBSE', year: '2024', division: 'First', percentage: '82.5' },
    { exam: '12th / Sr. Sec.', board: 'CBSE', year: '2026', division: 'First', percentage: '85.0' },
    { exam: 'Other / Diploma', board: '', year: '', division: '', percentage: '' }
  ],

  // Occupation
  hasOccupation: false,
  occupations: [
    { employer: '', designation: '', period: '' }
  ],

  // Fee & ID
  paymentMode: 'ONLINE',
  paymentDate: new Date().toISOString().split('T')[0],
  bankName: 'Official College Bank Gateway',
  branchName: 'Greater Noida',
  txnRefNumber: '',
  amountPaid: '1000',
  aadharNumber: '',
  isSponsored: false,
  category: 'GEN',
  weightage: [],

  // Part B
  extracurricular: '',
  awards: '',
  statementOfPurpose: '',
  additionalInfo: '',
  ref1Name: '',
  ref1Designation: 'Professor / Teacher',
  ref1Org: 'School / Institution',
  ref1Contact: '',
  ref2Name: '',
  ref2Designation: 'Mentor / Employer',
  ref2Org: 'Organisation',
  ref2Contact: '',

  // Declaration
  declarationAccepted: false,
  signatureUrl: '',
  declarationDate: new Date().toISOString().split('T')[0]
};

export default function ApplicationWizard({ onFinalSubmit }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadProgressText, setDownloadProgressText] = useState('');
  const [printData, setPrintData] = useState(null);
  const [isPrintDraft, setIsPrintDraft] = useState(false);

  const offscreenPrintRef = useRef(null);
  const photoInputRef = useRef(null);

  // Ensure no stored draft persists; every session and refresh starts fresh
  useEffect(() => {
    try {
      localStorage.removeItem('iif_application_draft');
    } catch {
      // ignore
    }
  }, []);

  // Helper: Calculate age from DOB string
  const calculateAge = (dobString) => {
    if (!dobString) return '';
    const birthDate = new Date(dobString);
    if (isNaN(birthDate.getTime())) return '';
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return (age >= 0 && age < 100) ? String(age) : '';
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'weightage') {
      setFormData(prev => {
        const next = checked 
          ? [...prev.weightage, value]
          : prev.weightage.filter(x => x !== value);
        return { ...prev, weightage: next };
      });
    } else if (name === 'dob') {
      const calculatedAge = calculateAge(value);
      setFormData(prev => ({ ...prev, dob: value, age: calculatedAge }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear error for field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Auto uppercase handler for name and addresses
  const handleUppercaseChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.toUpperCase() }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Same as mailing address toggle
  const handleSameAsMailing = (e) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      sameAsMailing: checked,
      permanentAddress: checked ? prev.mailingAddress : prev.permanentAddress
    }));
  };

  // Photo upload and compression helper
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG/PNG).');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Photo must be less than 2 MB. It will be resized for passport proportions.');
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        // Standard passport ratio 3.5cm x 4.5cm approx 280x360
        const MAX_WIDTH = 280;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setFormData(prev => ({ ...prev, photoUrl: compressedDataUrl }));
        if (errors.photoUrl) setErrors(prev => ({ ...prev, photoUrl: null }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Repeating Rows: Examinations
  const handleExamChange = (index, field, value) => {
    setFormData(prev => {
      const nextExams = [...prev.examinations];
      nextExams[index] = { ...nextExams[index], [field]: value };
      return { ...prev, examinations: nextExams };
    });
  };

  const addExamRow = () => {
    if (formData.examinations.length >= 5) {
      alert('Maximum 5 examination rows allowed.');
      return;
    }
    setFormData(prev => ({
      ...prev,
      examinations: [
        ...prev.examinations,
        { exam: '', board: '', year: '', division: '', percentage: '' }
      ]
    }));
  };

  const removeExamRow = (index) => {
    if (formData.examinations.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      examinations: prev.examinations.filter((_, idx) => idx !== index)
    }));
  };

  // Repeating Rows: Occupation
  const handleOccupationChange = (index, field, value) => {
    setFormData(prev => {
      const nextOccs = [...prev.occupations];
      nextOccs[index] = { ...nextOccs[index], [field]: value };
      return { ...prev, occupations: nextOccs };
    });
  };

  const addOccupationRow = () => {
    if (formData.occupations.length >= 4) return;
    setFormData(prev => ({
      ...prev,
      occupations: [
        ...prev.occupations,
        { employer: '', designation: '', period: '' }
      ]
    }));
  };

  const removeOccupationRow = (index) => {
    if (formData.occupations.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      occupations: prev.occupations.filter((_, idx) => idx !== index)
    }));
  };

  // Word counter helper for Statement of Purpose (max 100 words)
  const getWordCount = (text) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  // Step Validation
  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.programme) newErrors.programme = 'Please select a programme (BBA, B.Com, or B.A.).';
    }

    if (stepNumber === 2) {
      if (!formData.fullName || formData.fullName.trim().length < 2) {
        newErrors.fullName = 'Full Name is required (letters and spaces).';
      }
      if (!formData.fatherName || formData.fatherName.trim().length < 2) {
        newErrors.fatherName = "Father's / Husband's Name is required.";
      }
      if (!formData.motherName || formData.motherName.trim().length < 2) {
        newErrors.motherName = "Mother's Name is required.";
      }
      if (!formData.dob) {
        newErrors.dob = 'Valid Date of Birth is required.';
      } else {
        const birthYear = new Date(formData.dob).getFullYear();
        if (birthYear > new Date().getFullYear()) {
          newErrors.dob = 'Date of birth cannot be in the future.';
        }
      }
      if (!formData.nationality) newErrors.nationality = 'Nationality is required.';
    }

    if (stepNumber === 3) {
      if (!formData.mailingAddress || formData.mailingAddress.trim().length < 8) {
        newErrors.mailingAddress = 'Please provide full mailing address with city & PIN.';
      }
      if (!formData.permanentAddress && !formData.sameAsMailing) {
        newErrors.permanentAddress = 'Permanent address is required.';
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Valid email address is required.';
      }
      if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ''))) {
        newErrors.mobile = 'Enter a valid 10-digit Indian mobile number (starts with 6-9).';
      }
    }

    if (stepNumber === 4) {
      // Check 10th and 12th year / percent
      const ex10 = formData.examinations[0];
      if (ex10 && ex10.year && (isNaN(ex10.year) || ex10.year.length !== 4)) {
        newErrors.exam10Year = 'Year of passing must be a 4-digit year.';
      }
      if (ex10 && ex10.percentage && (isNaN(ex10.percentage) || Number(ex10.percentage) > 100 || Number(ex10.percentage) < 0)) {
        newErrors.exam10Pct = 'Percentage must be between 0 and 100.';
      }
    }

    if (stepNumber === 5) {
      if (!formData.amountPaid) {
        newErrors.amountPaid = 'Application fee remittance amount is required (₹1000).';
      }
      if (formData.aadharNumber) {
        const cleanAadhaar = formData.aadharNumber.replace(/\D/g, '');
        if (cleanAadhaar.length !== 12) {
          newErrors.aadharNumber = 'Aadhaar Number must be exactly 12 digits.';
        }
      }
    }

    if (stepNumber === 6) {
      const words = getWordCount(formData.statementOfPurpose);
      if (words > 100) {
        newErrors.statementOfPurpose = `Response exceeds 100 words (currently ${words} words). Please shorten your statement.`;
      }
    }

    if (stepNumber === 7) {
      if (!formData.declarationAccepted) {
        newErrors.declarationAccepted = 'You must accept the student declaration to complete registration.';
      }
      if (!formData.signatureUrl) {
        newErrors.signatureUrl = 'Candidate signature is required to generate the official application form.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const jumpToStep = (stepId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(stepId);
  };



  // PDF Download Handlers
  const handleDownloadBlankPdf = async () => {
    setIsDownloadingPdf(true);
    setDownloadProgressText('Generating Blank Application Form PDF...');
    setPrintData(null);
    setIsPrintDraft(false);

    setTimeout(async () => {
      try {
        if (offscreenPrintRef.current) {
          await downloadPdf(offscreenPrintRef.current, 'IIF_Application_Form_Blank.pdf');
        }
      } catch (err) {
        console.error('Error downloading blank PDF:', err);
        alert('Failed to generate PDF. Please try again or check browser settings.');
      } finally {
        setIsDownloadingPdf(false);
        setDownloadProgressText('');
      }
    }, 400);
  };

  const handleDownloadDraftPdf = async () => {
    setIsDownloadingPdf(true);
    setDownloadProgressText('Generating Draft Application Form (with watermark)...');
    setPrintData(formData);
    setIsPrintDraft(true);

    setTimeout(async () => {
      try {
        if (offscreenPrintRef.current) {
          const sanitizedName = (formData.fullName || 'Candidate').replace(/[^a-zA-Z0-9]/g, '_');
          await downloadPdf(offscreenPrintRef.current, `IIF_Application_${sanitizedName}_DRAFT.pdf`);
        }
      } catch (err) {
        console.error('Error downloading draft PDF:', err);
        alert('Failed to generate draft PDF. Please try again.');
      } finally {
        setIsDownloadingPdf(false);
        setDownloadProgressText('');
      }
    }, 400);
  };

  const handleDownloadFinalPdf = async () => {
    if (!validateStep(7)) {
      alert('Please complete the declaration and provide your signature before generating the final application.');
      return;
    }

    setIsDownloadingPdf(true);
    setDownloadProgressText('Generating Official Application Dossier PDF...');
    setPrintData(formData);
    setIsPrintDraft(false);

    setTimeout(async () => {
      try {
        if (offscreenPrintRef.current) {
          const sanitizedName = (formData.fullName || 'Candidate').replace(/[^a-zA-Z0-9]/g, '_');
          await downloadPdf(offscreenPrintRef.current, `IIF_Application_${sanitizedName}.pdf`);
        }
      } catch (err) {
        console.error('Error downloading final PDF:', err);
        alert('Failed to generate final PDF. Please try again.');
      } finally {
        setIsDownloadingPdf(false);
        setDownloadProgressText('');
      }
    }, 400);
  };

  // Final Online Submission Handler
  const handleFinalSubmitForm = async (e) => {
    if (e) e.preventDefault();
    if (!validateStep(7)) return;

    setIsDownloadingPdf(true);
    setDownloadProgressText('Finalizing application dossier and generating PDF copy...');
    setPrintData(formData);
    setIsPrintDraft(false);

    setTimeout(async () => {
      try {
        let pdfBlob = null;
        if (offscreenPrintRef.current) {
          const sanitizedName = (formData.fullName || 'Candidate').replace(/[^a-zA-Z0-9]/g, '_');
          // Trigger download for candidate's immediate records
          await downloadPdf(offscreenPrintRef.current, `IIF_Application_${sanitizedName}.pdf`);
          pdfBlob = await generatePdfBlob(offscreenPrintRef.current, `IIF_Application_${sanitizedName}.pdf`);
        }

        if (onFinalSubmit) {
          onFinalSubmit(formData, pdfBlob);
        }
      } catch (err) {
        console.error('Submission PDF processing error:', err);
        if (onFinalSubmit) onFinalSubmit(formData, null);
      } finally {
        setIsDownloadingPdf(false);
        setDownloadProgressText('');
      }
    }, 500);
  };

  const wordCount = getWordCount(formData.statementOfPurpose);

  return (
    <div className="application-wizard-wrapper" style={{ width: '100%', maxWidth: '1040px', margin: '0 auto' }}>
      {/* Off-screen Print Host for html2pdf.js capture (No website layout in this container) */}
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
        <div ref={offscreenPrintRef}>
          <ApplicationPrint data={printData} isDraft={isPrintDraft} />
        </div>
      </div>

      {/* PDF Generation Loading Overlay */}
      {isDownloadingPdf && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(6, 42, 54, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          color: '#ffffff',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '4px solid rgba(255,255,255,0.2)',
            borderTopColor: 'var(--accent-gold, #c59b27)',
            animation: 'spin 1s linear infinite',
            marginBottom: '1rem'
          }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
            {downloadProgressText || 'Processing Application PDF...'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#cbd5e1', maxWidth: '420px', margin: 0 }}>
            Rendering official 2-page A4 dossier using the college typographic layout. Please hold on...
          </p>
        </div>
      )}

      {/* Top Action & Blank Form Download Banner */}
      <div style={{
        background: '#ffffff',
        border: '1.5px solid var(--border-subtle, #d8cebf)',
        borderRadius: 'var(--radius-lg, 16px)',
        padding: '1.25rem 1.5rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--primary-navy, #0d5c75)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.2rem'
          }}>
            Institutional Admissions 2026–2027
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)' }}>
            Online Application &amp; Registration Portal
          </div>
          <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '0.2rem' }}>
            BBA (Code 454) &bull; B.Com (Code 472) &bull; B.A. (NEP 2020) &bull; Affiliated to CCS University Meerut
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleDownloadBlankPdf}
            title="Download the official blank 2-page form for offline filling or reference"
            style={{
              background: '#f8fafc',
              border: '1.5px solid var(--primary-navy, #0d5c75)',
              color: 'var(--primary-navy, #0d5c75)',
              borderRadius: '8px',
              padding: '0.55rem 1rem',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              transition: 'all 0.2s ease'
            }}
          >
            <Download size={16} /> Download Blank Form (PDF)
          </button>
        </div>
      </div>



      {/* Stepper Progress Bar & Navigation Header */}
      <div style={{
        background: '#ffffff',
        border: '1.5px solid var(--border-subtle, #d8cebf)',
        borderRadius: 'var(--radius-lg, 16px)',
        padding: '1.25rem 1.5rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Top Stepper Status Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              background: 'var(--primary-navy-dark, #062a36)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 900,
              padding: '0.2rem 0.65rem',
              borderRadius: '9999px'
            }}>
              Step {currentStep} of {STEPS.length}
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)' }}>
              {STEPS[currentStep - 1].title}
            </span>
          </div>


        </div>

        {/* Stepper Dots / Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${STEPS.length}, 1fr)`,
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          {STEPS.map((s) => {
            const isCompleted = currentStep > s.id;
            const isCurrent = currentStep === s.id;
            const StepIcon = s.icon;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => jumpToStep(s.id)}
                style={{
                  background: isCurrent 
                    ? 'var(--primary-navy, #0d5c75)' 
                    : isCompleted 
                    ? '#dcfce7' 
                    : '#f1f5f9',
                  color: isCurrent 
                    ? '#ffffff' 
                    : isCompleted 
                    ? '#15803d' 
                    : '#64748b',
                  border: isCurrent 
                    ? '2px solid var(--accent-gold, #c59b27)' 
                    : isCompleted 
                    ? '1.5px solid #86efac' 
                    : '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '0.5rem 0.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {isCompleted ? <Check size={14} /> : <StepIcon size={14} />}
                  <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>{s.id}</span>
                </div>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: isCurrent ? 800 : 600,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%'
                }}>
                  {s.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Body Card */}
      <div style={{
        background: '#ffffff',
        border: '1.5px solid var(--border-subtle, #d8cebf)',
        borderRadius: 'var(--radius-lg, 16px)',
        padding: '2rem',
        boxShadow: 'var(--shadow-md)',
        marginBottom: '2rem'
      }}>
        {/* Error Alert Box at top of step if any errors exist */}
        {Object.keys(errors).length > 0 && (
          <div style={{
            background: '#fee2e2',
            border: '1.5px solid #ef4444',
            borderRadius: '10px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.5rem',
            color: '#991b1b',
            fontSize: '0.85rem'
          }}>
            <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
              <AlertCircle size={16} /> Please resolve the following before proceeding:
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.4 }}>
              {Object.entries(errors).map(([key, msg]) => msg && (
                <li key={key}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ==================================================================
            STEP 1: PROGRAMME & ACADEMIC SESSION
            ================================================================== */}
        {currentStep === 1 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Academic Session &amp; Degree Programme Selection
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Select the academic programme and entrance pathway for your regular undergraduate enrollment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* Academic Session */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.4rem' }}>
                  Academic Session <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <select
                  name="academicSession"
                  value={formData.academicSession}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle, #d8cebf)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    background: '#ffffff'
                  }}
                >
                  <option value="2026 – 2027">Session 2026 – 2027 (Current)</option>
                  <option value="2027 – 2028">Session 2027 – 2028 (Upcoming)</option>
                </select>
                <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', display: 'block' }}>
                  Pre-selected for current academic year.
                </span>
              </div>

              {/* Programme Choice */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.4rem' }}>
                  Regular UG Programme <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 0.85rem',
                    border: formData.programme === 'BBA' ? '2px solid var(--primary-navy, #0d5c75)' : '1px solid #cbd5e1',
                    borderRadius: '8px',
                    background: formData.programme === 'BBA' ? '#f0fdf4' : '#f8fafc',
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
                      <strong style={{ fontSize: '0.95rem', color: 'var(--primary-navy-dark, #062a36)' }}>BBA</strong>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Code: 454</div>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 0.85rem',
                    border: (formData.programme === 'B.Com' || formData.programme === 'BCom') ? '2px solid var(--primary-navy, #0d5c75)' : '1px solid #cbd5e1',
                    borderRadius: '8px',
                    background: (formData.programme === 'B.Com' || formData.programme === 'BCom') ? '#f0fdf4' : '#f8fafc',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="radio"
                      name="programme"
                      value="B.Com"
                      checked={formData.programme === 'B.Com' || formData.programme === 'BCom'}
                      onChange={handleInputChange}
                    />
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--primary-navy-dark, #062a36)' }}>B.Com</strong>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Code: 472</div>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 0.85rem',
                    border: (formData.programme === 'B.A.' || formData.programme === 'BA') ? '2px solid var(--primary-navy, #0d5c75)' : '1px solid #cbd5e1',
                    borderRadius: '8px',
                    background: (formData.programme === 'B.A.' || formData.programme === 'BA') ? '#f0fdf4' : '#f8fafc',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="radio"
                      name="programme"
                      value="B.A."
                      checked={formData.programme === 'B.A.' || formData.programme === 'BA'}
                      onChange={handleInputChange}
                    />
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--primary-navy-dark, #062a36)' }}>B.A.</strong>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Bachelor of Arts</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Written Exam / Pathway */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.5rem' }}>
                11. Written Examination / Admission Pathway <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
              </label>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="writtenExam"
                    value="DIRECT"
                    checked={formData.writtenExam === 'DIRECT'}
                    onChange={handleInputChange}
                  />
                  <span>Direct Merit / Counseling</span>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="writtenExam"
                    value="AIMA (UGAT)"
                    checked={formData.writtenExam === 'AIMA (UGAT)'}
                    onChange={handleInputChange}
                  />
                  <span>AIMA (UGAT)</span>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="writtenExam"
                    value="AIMS (UGAT)"
                    checked={formData.writtenExam === 'AIMS (UGAT)'}
                    onChange={handleInputChange}
                  />
                  <span>AIMS (UGAT)</span>
                </label>
              </div>

              {formData.writtenExam !== 'DIRECT' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.25rem' }}>
                      Exam Roll Number
                    </label>
                    <input
                      type="text"
                      name="examRollNo"
                      value={formData.examRollNo}
                      onChange={handleInputChange}
                      placeholder="e.g. UGAT20261048"
                      style={{
                        width: '100%',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.25rem' }}>
                      Composite Score / Percentile
                    </label>
                    <input
                      type="text"
                      name="examScore"
                      value={formData.examScore}
                      onChange={handleInputChange}
                      placeholder="e.g. 88.5"
                      style={{
                        width: '100%',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 2: PERSONAL DETAILS
            ================================================================== */}
        {currentStep === 2 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Personal Details &amp; Identification
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Enter your official name, family details, and upload a recent passport size photograph.
            </p>

            {/* Photo Upload and Preview Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '1.25rem',
              background: '#f8fafc',
              border: '1px dashed #cbd5e1',
              borderRadius: '12px',
              marginBottom: '1.75rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '95px',
                height: '118px',
                border: '1.5px solid #000000',
                borderRadius: '6px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                {formData.photoUrl ? (
                  <img
                    src={formData.photoUrl}
                    alt="Uploaded Passport Size Photo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ fontSize: '0.65rem', color: '#64748b', textAlign: 'center', padding: '4px' }}>
                    Passport Photo (3.5 × 4.5 cm)
                  </div>
                )}
              </div>

              <div style={{ flex: 1, minWidth: '220px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.2rem' }}>
                  Candidate Passport Size Photograph
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.65rem' }}>
                  Upload a clear, recent colour photograph with light background (JPG or PNG, max 2 MB).
                </div>
                <button
                  type="button"
                  onClick={() => photoInputRef.current?.click()}
                  style={{
                    background: 'var(--primary-navy, #0d5c75)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Upload size={14} /> {formData.photoUrl ? 'Change Photograph' : 'Upload Photograph'}
                </button>
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            {/* Candidate Name */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                1. Candidate's Full Name (In Capitals) <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
              </label>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <select
                  name="candidateTitle"
                  value={formData.candidateTitle}
                  onChange={handleInputChange}
                  style={{
                    width: '95px',
                    padding: '0.65rem 0.5rem',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle, #d8cebf)',
                    fontWeight: 700,
                    background: '#ffffff'
                  }}
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleUppercaseChange}
                  placeholder="ENTER FULL NAME AS PER CLASS 10 CERTIFICATE"
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.fullName ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    fontWeight: 700
                  }}
                />
              </div>
              {errors.fullName && (
                <span style={{ fontSize: '0.75rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.2rem', display: 'block' }}>
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Parents Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  2. Father's / Husband's Name <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleUppercaseChange}
                  placeholder="FATHER'S FULL NAME"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.fatherName ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                    textTransform: 'uppercase'
                  }}
                />
                <input
                  type="text"
                  name="fatherDesignation"
                  value={formData.fatherDesignation}
                  onChange={handleInputChange}
                  placeholder="Designation / Occupation"
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    marginTop: '0.4rem',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  3. Mother's Name &amp; Profession <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleUppercaseChange}
                  placeholder="MOTHER'S FULL NAME"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.motherName ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                    textTransform: 'uppercase'
                  }}
                />
                <input
                  type="text"
                  name="motherProfession"
                  value={formData.motherProfession}
                  onChange={handleInputChange}
                  placeholder="Profession / Homemaker"
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    marginTop: '0.4rem',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>

            {/* Nationality, Marital, DOB, Gender */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  4. Nationality <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle, #d8cebf)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  5. Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle, #d8cebf)',
                    background: '#ffffff'
                  }}
                >
                  <option value="Unmarried">Unmarried</option>
                  <option value="Married">Married</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  6. Date of Birth <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split('T')[0]}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.dob ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  Age (Years)
                </label>
                <input
                  type="text"
                  name="age"
                  value={formData.age ? `${formData.age} Years` : 'Auto-calculated'}
                  readOnly
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#f1f5f9',
                    color: '#334155',
                    fontWeight: 700
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle, #d8cebf)',
                    background: '#ffffff'
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 3: CONTACT INFORMATION
            ================================================================== */}
        {currentStep === 3 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Address &amp; Contact Details
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Official postal address for all university correspondences, counseling notifications, and verification.
            </p>

            {/* Mailing Address */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                7. Mailing Address (In Capitals) <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
              </label>
              <textarea
                name="mailingAddress"
                rows={3}
                value={formData.mailingAddress}
                onChange={handleUppercaseChange}
                placeholder="HOUSE NO, STREET, LANDMARK, CITY, STATE, PIN CODE"
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: errors.mailingAddress ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                  textTransform: 'uppercase',
                  fontSize: '0.88rem',
                  lineHeight: 1.4
                }}
              />
              {errors.mailingAddress && (
                <span style={{ fontSize: '0.75rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.2rem', display: 'block' }}>
                  {errors.mailingAddress}
                </span>
              )}
            </div>

            {/* Permanent Address with Same As Mailing Checkbox */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)' }}>
                  8. Permanent Address <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#0d5c75', cursor: 'pointer', fontWeight: 700 }}>
                  <input
                    type="checkbox"
                    name="sameAsMailing"
                    checked={formData.sameAsMailing}
                    onChange={handleSameAsMailing}
                  />
                  Same as mailing address
                </label>
              </div>
              <textarea
                name="permanentAddress"
                rows={3}
                disabled={formData.sameAsMailing}
                value={formData.sameAsMailing ? formData.mailingAddress : formData.permanentAddress}
                onChange={handleUppercaseChange}
                placeholder="PERMANENT RESIDENCE ADDRESS WITH PIN CODE"
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: '1.5px solid var(--border-subtle, #d8cebf)',
                  textTransform: 'uppercase',
                  fontSize: '0.88rem',
                  lineHeight: 1.4,
                  background: formData.sameAsMailing ? '#f8fafc' : '#ffffff'
                }}
              />
            </div>

            {/* Electronic Contacts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  Candidate E-mail ID <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="student@example.com"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.email ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                    fontSize: '0.9rem'
                  }}
                />
                {errors.email && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.2rem', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  Mobile Number (Candidate) <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.mobile ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                    fontSize: '0.9rem'
                  }}
                />
                {errors.mobile && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.2rem', display: 'block' }}>
                    {errors.mobile}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  Alternate / Parent Phone
                </label>
                <input
                  type="tel"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                  placeholder="Landline or Guardian Mobile"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-subtle, #d8cebf)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 4: ACADEMICS & WORK RECORD
            ================================================================== */}
        {currentStep === 4 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Academic Qualifications &amp; Prior Experience
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              9. Record of examinations passed starting with Secondary (Class 10). Add additional rows if needed.
            </p>

            {/* Repeating Rows Table for Examinations */}
            <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #cbd5e1', textAlign: 'left' }}>
                    <th style={{ padding: '0.65rem 0.5rem', width: '25%' }}>Examination</th>
                    <th style={{ padding: '0.65rem 0.5rem', width: '32%' }}>Board / School / University</th>
                    <th style={{ padding: '0.65rem 0.5rem', width: '14%' }}>Year</th>
                    <th style={{ padding: '0.65rem 0.5rem', width: '14%' }}>Division</th>
                    <th style={{ padding: '0.65rem 0.5rem', width: '12%' }}>% Marks</th>
                    <th style={{ padding: '0.65rem 0.5rem', width: '5%', textAlign: 'center' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {formData.examinations.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.5rem 0.35rem' }}>
                        <input
                          type="text"
                          value={row.exam}
                          onChange={(e) => handleExamChange(idx, 'exam', e.target.value)}
                          placeholder="e.g. 10th / 12th"
                          style={{ width: '100%', padding: '0.45rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontWeight: 700 }}
                        />
                      </td>
                      <td style={{ padding: '0.5rem 0.35rem' }}>
                        <input
                          type="text"
                          value={row.board}
                          onChange={(e) => handleExamChange(idx, 'board', e.target.value)}
                          placeholder="CBSE / ICSE / UP Board / School"
                          style={{ width: '100%', padding: '0.45rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                        />
                      </td>
                      <td style={{ padding: '0.5rem 0.35rem' }}>
                        <input
                          type="text"
                          maxLength={4}
                          value={row.year}
                          onChange={(e) => handleExamChange(idx, 'year', e.target.value)}
                          placeholder="YYYY"
                          style={{ width: '100%', padding: '0.45rem', borderRadius: '6px', border: '1px solid #cbd5e1', textAlign: 'center' }}
                        />
                      </td>
                      <td style={{ padding: '0.5rem 0.35rem' }}>
                        <input
                          type="text"
                          value={row.division}
                          onChange={(e) => handleExamChange(idx, 'division', e.target.value)}
                          placeholder="First / Dist"
                          style={{ width: '100%', padding: '0.45rem', borderRadius: '6px', border: '1px solid #cbd5e1', textAlign: 'center' }}
                        />
                      </td>
                      <td style={{ padding: '0.5rem 0.35rem' }}>
                        <input
                          type="text"
                          value={row.percentage}
                          onChange={(e) => handleExamChange(idx, 'percentage', e.target.value)}
                          placeholder="85.5"
                          style={{ width: '100%', padding: '0.45rem', borderRadius: '6px', border: '1px solid #cbd5e1', textAlign: 'center' }}
                        />
                      </td>
                      <td style={{ padding: '0.5rem 0.35rem', textAlign: 'center' }}>
                        {formData.examinations.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeExamRow(idx)}
                            title="Remove row"
                            style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              onClick={addExamRow}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--primary-navy, #0d5c75)',
                background: '#f0fdf4',
                border: '1px dashed #86efac',
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                cursor: 'pointer',
                marginBottom: '2rem'
              }}
            >
              <Plus size={14} /> Add Examination Row (Max 5)
            </button>

            {/* Occupation Section */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)' }}>
                  10. Occupation &amp; Employment History (If any)
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#475569', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="hasOccupation"
                    checked={formData.hasOccupation}
                    onChange={(e) => setFormData(prev => ({ ...prev, hasOccupation: e.target.checked }))}
                  />
                  I have prior or current employment experience
                </label>
              </div>

              {formData.hasOccupation ? (
                <div>
                  {formData.occupations.map((occ, idx) => (
                    <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr auto', gap: '0.65rem', marginBottom: '0.65rem', alignItems: 'center' }}>
                      <input
                        type="text"
                        value={occ.employer}
                        onChange={(e) => handleOccupationChange(idx, 'employer', e.target.value)}
                        placeholder="Employer / Organization Name"
                        style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                      <input
                        type="text"
                        value={occ.designation}
                        onChange={(e) => handleOccupationChange(idx, 'designation', e.target.value)}
                        placeholder="Designation / Role"
                        style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                      <input
                        type="text"
                        value={occ.period}
                        onChange={(e) => handleOccupationChange(idx, 'period', e.target.value)}
                        placeholder="e.g. 2024 - 2025"
                        style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                      {formData.occupations.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeOccupationRow(idx)}
                          style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addOccupationRow}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--primary-navy, #0d5c75)',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    + Add Experience Row
                  </button>
                </div>
              ) : (
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontStyle: 'italic' }}>
                  No occupation reported (Fresh undergraduate candidate).
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 5: FEE, ID & CATEGORY
            ================================================================== */}
        {currentStep === 5 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Fee Remittance, Identity &amp; Weightage Claimed
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Remittance details for the ₹1,000 application fee, Aadhaar identity, social reservation category, and university weightage claims.
            </p>

            {/* Fee Remittance Box */}
            <div style={{
              background: '#f8fafc',
              border: '1.5px solid var(--border-subtle, #d8cebf)',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.75rem' }}>
                12. Application Fee Remittance (₹1,000)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.25rem' }}>
                    Remittance Mode
                  </label>
                  <select
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: 700 }}
                  >
                    <option value="ONLINE">Online UPI / Netbanking / QR</option>
                    <option value="DD">Demand Draft (DD)</option>
                    <option value="CASH">Direct Cash at Campus Counter</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.25rem' }}>
                    Remittance Date
                  </label>
                  <input
                    type="date"
                    name="paymentDate"
                    value={formData.paymentDate}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.25rem' }}>
                    Bank Name / P.O.
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    placeholder="e.g. State Bank of India"
                    style={{ width: '100%', padding: '0.55rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.25rem' }}>
                    Transaction / DD Reference No.
                  </label>
                  <input
                    type="text"
                    name="txnRefNumber"
                    value={formData.txnRefNumber}
                    onChange={handleInputChange}
                    placeholder="UTR / DD Number"
                    style={{ width: '100%', padding: '0.55rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                  />
                </div>
              </div>
            </div>

            {/* Aadhaar, Sponsored & Category */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  13. Aadhaar Number (12 Digits)
                </label>
                <input
                  type="text"
                  name="aadharNumber"
                  autoComplete="off"
                  maxLength={12}
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                  placeholder="12-digit Aadhaar Number"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.aadharNumber ? '1.5px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                    letterSpacing: '1px',
                    fontWeight: 700
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', display: 'block' }}>
                  Masked automatically on the printed dossier (•••• •••• 1234).
                </span>
                {errors.aadharNumber && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.2rem', display: 'block' }}>
                    {errors.aadharNumber}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  14. Social Reservation Category <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                  {['GEN', 'OBC', 'SC', 'ST'].map(cat => (
                    <label key={cat} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '8px',
                      border: formData.category === cat ? '2px solid var(--primary-navy, #0d5c75)' : '1px solid #cbd5e1',
                      background: formData.category === cat ? '#f0fdf4' : '#ffffff',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}>
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={formData.category === cat}
                        onChange={handleInputChange}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                  Sponsored / Foreign Category?
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 0.85rem',
                  border: '1.5px solid var(--border-subtle, #d8cebf)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  <input
                    type="checkbox"
                    name="isSponsored"
                    checked={formData.isSponsored}
                    onChange={handleInputChange}
                  />
                  Sponsored (Self/NRI/Corporate) or Foreign Category
                </label>
              </div>
            </div>

            {/* 11 Weightage Claimed Checkboxes */}
            <div style={{
              border: '1.5px solid var(--border-subtle, #d8cebf)',
              borderRadius: '12px',
              padding: '1.25rem',
              background: '#ffffff'
            }}>
              <div style={{
                fontSize: '0.92rem',
                fontWeight: 900,
                color: 'var(--primary-navy-dark, #062a36)',
                marginBottom: '0.35rem'
              }}>
                Weightage Claimed Under CCS University Regulations (Tick all that apply)
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '1rem' }}>
                Original certificates for selected claims must be produced during campus counseling.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                {WEIGHTAGE_OPTIONS.map((opt, wIdx) => {
                  const isChecked = formData.weightage.includes(opt);
                  return (
                    <label
                      key={wIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        background: isChecked ? '#f0fdf4' : '#f8fafc',
                        border: isChecked ? '1px solid #86efac' : '1px solid #e2e8f0',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        lineHeight: 1.35
                      }}
                    >
                      <input
                        type="checkbox"
                        name="weightage"
                        value={opt}
                        checked={isChecked}
                        onChange={handleInputChange}
                        style={{ marginTop: '2px' }}
                      />
                      <span><strong>{wIdx + 1}.</strong> {opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 6: PART B (QUALITATIVE & REFERENCES)
            ================================================================== */}
        {currentStep === 6 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Part B: Supplementary Information &amp; References
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Renumbered continuously from 14 to 18 as required by the admissions secretariat.
            </p>

            {/* 14. Extracurricular */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                14. Major Extracurricular Activities
              </label>
              <textarea
                name="extracurricular"
                rows={3}
                value={formData.extracurricular}
                onChange={handleInputChange}
                placeholder="Mention sports, cultural events, debate, student clubs, or leadership positions..."
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-subtle, #d8cebf)', fontSize: '0.88rem' }}
              />
            </div>

            {/* 15. Distinctions & Awards */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                15. Distinctions and Awards
              </label>
              <textarea
                name="awards"
                rows={3}
                value={formData.awards}
                onChange={handleInputChange}
                placeholder="Prizes, academic honors, state or national certificates, scholarships..."
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-subtle, #d8cebf)', fontSize: '0.88rem' }}
              />
            </div>

            {/* 16. Why do you wish to join (Max 100 words with live counter) */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)' }}>
                  16. Why do you wish to join this programme? (Max 100 words)
                </label>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: wordCount > 100 ? 'var(--danger-red, #ef4444)' : wordCount >= 85 ? 'var(--warning-amber, #f59e0b)' : '#64748b'
                }}>
                  {wordCount} / 100 words {wordCount > 100 && '(Limit Exceeded)'}
                </span>
              </div>
              <textarea
                name="statementOfPurpose"
                rows={4}
                value={formData.statementOfPurpose}
                onChange={handleInputChange}
                placeholder="Express your academic interest, career aspirations, and motivations for pursuing this degree..."
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: wordCount > 100 ? '2px solid var(--danger-red, #ef4444)' : '1.5px solid var(--border-subtle, #d8cebf)',
                  fontSize: '0.88rem',
                  lineHeight: 1.45
                }}
              />
              {errors.statementOfPurpose && (
                <span style={{ fontSize: '0.75rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.2rem', display: 'block' }}>
                  {errors.statementOfPurpose}
                </span>
              )}
            </div>

            {/* 17. Additional Info */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
                17. Any additional information you wish to furnish
              </label>
              <textarea
                name="additionalInfo"
                rows={2}
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Special achievements, gap year reasons, or background details..."
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-subtle, #d8cebf)', fontSize: '0.88rem' }}
              />
            </div>

            {/* 18. References (2) */}
            <div style={{
              background: '#f8fafc',
              border: '1.5px solid var(--border-subtle, #d8cebf)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.25rem' }}>
                18. Academic / Professional References (Two Contacts)
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '1rem' }}>
                Provide details of two professors, teachers, or employers familiar with your character and academic conduct.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {/* Reference 1 */}
                <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary-navy, #0d5c75)', marginBottom: '0.65rem' }}>
                    Reference Contact 1
                  </div>
                  <input
                    type="text"
                    name="ref1Name"
                    value={formData.ref1Name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.4rem', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    name="ref1Designation"
                    value={formData.ref1Designation}
                    onChange={handleInputChange}
                    placeholder="Designation"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.4rem', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    name="ref1Org"
                    value={formData.ref1Org}
                    onChange={handleInputChange}
                    placeholder="Institution / Organization"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.4rem', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    name="ref1Contact"
                    value={formData.ref1Contact}
                    onChange={handleInputChange}
                    placeholder="Email or Mobile Number"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>

                {/* Reference 2 */}
                <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary-navy, #0d5c75)', marginBottom: '0.65rem' }}>
                    Reference Contact 2
                  </div>
                  <input
                    type="text"
                    name="ref2Name"
                    value={formData.ref2Name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.4rem', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    name="ref2Designation"
                    value={formData.ref2Designation}
                    onChange={handleInputChange}
                    placeholder="Designation"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.4rem', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    name="ref2Org"
                    value={formData.ref2Org}
                    onChange={handleInputChange}
                    placeholder="Institution / Organization"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.4rem', fontSize: '0.85rem' }}
                  />
                  <input
                    type="text"
                    name="ref2Contact"
                    value={formData.ref2Contact}
                    onChange={handleInputChange}
                    placeholder="Email or Mobile Number"
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 7: REVIEW, DECLARATION & SUBMISSION
            ================================================================== */}
        {currentStep === 7 && (
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.35rem' }}>
              Final Review, Student Declaration &amp; Submission
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Carefully review your application entries. Use the "Edit" links below to jump back and rectify any details before submission.
            </p>

            {/* Read-Only Review Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {/* Review Section 1 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--primary-navy-dark, #062a36)', fontSize: '0.9rem' }}>
                    1. Programme &amp; Academic Session
                  </strong>
                  <button
                    type="button"
                    onClick={() => jumpToStep(1)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary-navy, #0d5c75)', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    Edit Step 1
                  </button>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#334155' }}>
                  <div>Programme: <strong>{formData.programme} {formData.programme === 'BBA' ? '(Code 454)' : formData.programme === 'B.Com' ? '(Code 472)' : '(NEP 2020)'}</strong></div>
                  <div>Session: {formData.academicSession} &bull; Pathway: {formData.writtenExam}</div>
                </div>
              </div>

              {/* Review Section 2 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--primary-navy-dark, #062a36)', fontSize: '0.9rem' }}>
                    2. Personal Details
                  </strong>
                  <button
                    type="button"
                    onClick={() => jumpToStep(2)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary-navy, #0d5c75)', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    Edit Step 2
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', fontSize: '0.85rem', color: '#334155' }}>
                  <div>Name: <strong>{formData.candidateTitle} {formData.fullName || '—'}</strong></div>
                  <div>Father's Name: {formData.fatherName || '—'}</div>
                  <div>Mother's Name: {formData.motherName || '—'}</div>
                  <div>DOB &amp; Age: {formData.dob || '—'} ({formData.age ? `${formData.age} Yrs` : '—'})</div>
                  <div>Nationality: {formData.nationality} &bull; Gender: {formData.gender}</div>
                  <div>Photo: {formData.photoUrl ? '✓ Uploaded' : 'Not Uploaded (Physical photo will be affixed)'}</div>
                </div>
              </div>

              {/* Review Section 3 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--primary-navy-dark, #062a36)', fontSize: '0.9rem' }}>
                    3. Contact Details
                  </strong>
                  <button
                    type="button"
                    onClick={() => jumpToStep(3)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary-navy, #0d5c75)', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    Edit Step 3
                  </button>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#334155' }}>
                  <div>Mailing: {formData.mailingAddress || '—'}</div>
                  <div>Permanent: {formData.sameAsMailing ? formData.mailingAddress : formData.permanentAddress || '—'}</div>
                  <div>Email: <strong>{formData.email || '—'}</strong> &bull; Mobile: <strong>{formData.mobile || '—'}</strong></div>
                </div>
              </div>

              {/* Review Section 4 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--primary-navy-dark, #062a36)', fontSize: '0.9rem' }}>
                    4. Academic &amp; Work Qualifications
                  </strong>
                  <button
                    type="button"
                    onClick={() => jumpToStep(4)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary-navy, #0d5c75)', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    Edit Step 4
                  </button>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#334155' }}>
                  {formData.examinations.map((ex, idx) => (
                    <div key={idx}>
                      • {ex.exam || `Exam ${idx + 1}`}: {ex.board || '—'} ({ex.year || '—'}) - {ex.percentage ? `${ex.percentage}%` : '—'}
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Section 5 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--primary-navy-dark, #062a36)', fontSize: '0.9rem' }}>
                    5. Fee Remittance, ID &amp; Category
                  </strong>
                  <button
                    type="button"
                    onClick={() => jumpToStep(5)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary-navy, #0d5c75)', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    Edit Step 5
                  </button>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#334155' }}>
                  <div>Remittance: ₹{formData.amountPaid} via {formData.paymentMode} ({formData.bankName} - Ref: {formData.txnRefNumber || 'N/A'})</div>
                  <div>Category: [{formData.category}] &bull; Aadhaar: {formData.aadharNumber ? `•••• •••• ${formData.aadharNumber.slice(-4)}` : '—'}</div>
                  <div>Weightage Claims: {formData.weightage.length > 0 ? `${formData.weightage.length} claims selected` : 'None'}</div>
                </div>
              </div>
            </div>

            {/* Student's Formal Declaration Box */}
            <div style={{
              background: '#fcfcfc',
              border: errors.declarationAccepted ? '2px solid var(--danger-red, #ef4444)' : '1.5px solid var(--primary-navy-dark, #062a36)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--primary-navy-dark, #062a36)', marginBottom: '0.5rem' }}>
                Student's Declaration &amp; Undertaking
              </div>
              <p style={{ fontSize: '0.85rem', color: '#1e293b', lineHeight: 1.5, textAlign: 'justify', marginBottom: '1rem' }}>
                I declare that all information given by me in this application form is true and correct to the best of my knowledge and belief. I agree to deposit the prescribed institutional fees and adhere strictly to the admission regulations and academic policies of IIF College of Commerce &amp; Management Studies and Chaudhary Charan Singh University. I agree to comply with any code of conduct formulated by the College Principal and Management. I undertake to maintain a minimum attendance of 75% in classes, failing which the college reserves the right to debar me from university examinations or cancel my admission.
              </p>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: '0.9rem',
                color: 'var(--primary-navy-dark, #062a36)'
              }}>
                <input
                  type="checkbox"
                  name="declarationAccepted"
                  checked={formData.declarationAccepted}
                  onChange={handleInputChange}
                  style={{ width: '18px', height: '18px' }}
                />
                <span>I agree and accept the declaration terms above. <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span></span>
              </label>
              {errors.declarationAccepted && (
                <span style={{ fontSize: '0.78rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.35rem', display: 'block' }}>
                  {errors.declarationAccepted}
                </span>
              )}
            </div>

            {/* Signature Pad */}
            <div style={{ marginBottom: '1.75rem' }}>
              <SignaturePad
                value={formData.signatureUrl}
                onChange={(sigUrl) => {
                  setFormData(prev => ({ ...prev, signatureUrl: sigUrl }));
                  if (errors.signatureUrl) setErrors(prev => ({ ...prev, signatureUrl: null }));
                }}
                label="Candidate Signature"
              />
              {errors.signatureUrl && (
                <span style={{ fontSize: '0.78rem', color: 'var(--danger-red, #ef4444)', marginTop: '0.35rem', display: 'block' }}>
                  {errors.signatureUrl}
                </span>
              )}
            </div>

            {/* Privacy & Consent Notice */}
            <div style={{
              background: '#f1f5f9',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              marginBottom: '1.5rem',
              fontSize: '0.78rem',
              color: '#64748b',
              lineHeight: 1.45
            }}>
              <strong>Data Privacy &amp; Institutional Governance:</strong> All collected applicant data is maintained securely in compliance with institutional guidelines and Chaudhary Charan Singh University regulatory protocols. Application entries are securely submitted upon final declaration.
            </div>

            {/* Download Buttons Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              borderTop: '1px solid #e2e8f0',
              paddingTop: '1.5rem',
              marginBottom: '1rem'
            }}>
              <button
                type="button"
                onClick={handleDownloadDraftPdf}
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#334155',
                  borderRadius: '8px',
                  padding: '0.75rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <Download size={16} /> Download Application (Preview)
              </button>

              <button
                type="button"
                onClick={handleDownloadFinalPdf}
                disabled={!formData.declarationAccepted || !formData.signatureUrl}
                style={{
                  background: (!formData.declarationAccepted || !formData.signatureUrl) ? '#94a3b8' : 'var(--primary-navy, #0d5c75)',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '8px',
                  padding: '0.75rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: (!formData.declarationAccepted || !formData.signatureUrl) ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 12px rgba(13, 92, 117, 0.25)'
                }}
              >
                <Download size={16} /> Download Final Form (PDF)
              </button>

              <button
                type="button"
                onClick={handleFinalSubmitForm}
                disabled={!formData.declarationAccepted || !formData.signatureUrl}
                style={{
                  background: (!formData.declarationAccepted || !formData.signatureUrl) ? '#86efac' : '#16a34a',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  cursor: (!formData.declarationAccepted || !formData.signatureUrl) ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginLeft: 'auto',
                  boxShadow: '0 6px 16px rgba(22, 163, 74, 0.3)'
                }}
              >
                <CheckCircle2 size={18} /> Submit Application Online
              </button>
            </div>
          </div>
        )}

        {/* Stepper Bottom Navigation (Previous / Next) */}
        {currentStep < 7 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '1.25rem',
            marginTop: '1.5rem',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid var(--border-subtle, #d8cebf)',
                    color: 'var(--primary-navy-dark, #062a36)',
                    borderRadius: '8px',
                    padding: '0.65rem 1.25rem',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ArrowLeft size={16} /> Previous Step
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <button
                type="button"
                onClick={handleNext}
                style={{
                  background: 'var(--primary-navy, #0d5c75)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.65rem 1.5rem',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 12px rgba(13, 92, 117, 0.25)'
                }}
              >
                Proceed to Step {currentStep + 1} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
